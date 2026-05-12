"use server";

import prisma from "@/lib/db/prisma";
import { verifySession } from "@/lib/security/tokens";
import { PhaseKey } from "@/domain/assessment/types";
import { computeDominance } from "@/domain/assessment/scoring";
import { computeAlignmentHealth } from "@/domain/assessment/alignment-health";

export async function getDashboardStateAction() {
  const userId = await verifySession();
  if (!userId) return { error: "Unauthorized" };

  const journey = await prisma.assessmentJourney.findFirst({
    where: { userId },
    include: { phaseAttempts: true }
  });

  if (!journey) return { error: "No journey found" };

  return { success: true, journey };
}

export async function generateOverallReportAction() {
  const userId = await verifySession();
  if (!userId) return { error: "Unauthorized" };

  const journey = await prisma.assessmentJourney.findFirst({
    where: { userId },
    include: { phaseAttempts: true }
  });

  if (!journey || journey.phaseAttempts.length !== 5) {
    return { error: "All 5 phases must be completed" };
  }

  if (journey.phaseAttempts.some((p: { status: string }) => p.status !== "COMPLETED")) {
    return { error: "All 5 phases must be completed" };
  }

  const existingReport = await prisma.overallReport.findUnique({
    where: { journeyId: journey.id }
  });

  if (existingReport) {
    return { success: true, reportId: existingReport.id };
  }

  // Aggregate all 15 responses
  let allTendencies: any[] = [];
  const phaseBands: any = {};

  for (const phase of journey.phaseAttempts) {
    const responses = phase.responsesJson as any[];
    allTendencies.push(...responses.map(r => r.tendency));
    phaseBands[phase.phaseKey as PhaseKey] = phase.band;
  }

  const globalComputation = computeDominance(allTendencies, true);
  const alignmentHealth = computeAlignmentHealth(phaseBands);

  const report = await prisma.overallReport.create({
    data: {
      journeyId: journey.id,
      scoresJson: globalComputation.scores as any,
      dominantTendency: globalComputation.dominantTendency,
      secondaryTendency: globalComputation.secondaryTendency,
      dominanceRatio: globalComputation.dominanceRatio,
      percentage: globalComputation.percentage,
      band: globalComputation.band,
      mode: globalComputation.mode,
      patternVectorJson: globalComputation.patternVector as any,
      alignmentHealthJson: alignmentHealth as any,
      phaseSummaryJson: journey.phaseAttempts.map((p: { phaseKey: string; percentage: number | null; mode: string | null }) => ({
        phaseKey: p.phaseKey,
        percentage: p.percentage,
        mode: p.mode
      })) as any,
      reportJson: {}, // To be filled with actual report text logic later
      templateVersion: "1.0",
    }
  });

  await prisma.assessmentJourney.update({
    where: { id: journey.id },
    data: { status: "REPORT_GENERATED", completedAt: new Date() }
  });

  return { success: true, reportId: report.id };
}
