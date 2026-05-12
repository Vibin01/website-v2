"use server";

import prisma from "@/lib/db/prisma";
import { verifySession } from "@/lib/security/tokens";
import { PhaseKey, PhaseResponse } from "@/domain/assessment/types";
import { computeDominance } from "@/domain/assessment/scoring";

export async function savePhaseResponseAction(phaseKey: PhaseKey, response: PhaseResponse) {
  const userId = await verifySession();
  if (!userId) return { error: "Unauthorized" };

  const journey = await prisma.assessmentJourney.findFirst({
    where: { userId, status: "IN_PROGRESS" }
  });
  if (!journey) return { error: "No active journey" };

  let attempt = await prisma.phaseAttempt.findUnique({
    where: { journeyId_phaseKey: { journeyId: journey.id, phaseKey } }
  });

  if (!attempt) {
    attempt = await prisma.phaseAttempt.create({
      data: {
        journeyId: journey.id,
        phaseKey,
        status: "IN_PROGRESS",
        responsesJson: [response] as any
      }
    });
  } else {
    const existing = (attempt.responsesJson as any[]) || [];
    const updated = existing.filter((r: any) => r.questionId !== response.questionId);
    updated.push(response);
    
    attempt = await prisma.phaseAttempt.update({
      where: { id: attempt.id },
      data: { responsesJson: updated as any }
    });
  }

  return { success: true };
}

export async function submitPhaseAction(phaseKey: PhaseKey, responsesMap: Record<string, string>) {
  const userId = await verifySession();
  if (!userId) return { error: "Unauthorized" };

  const journey = await prisma.assessmentJourney.findFirst({
    where: { userId, status: "IN_PROGRESS" }
  });
  if (!journey) return { error: "No active journey" };

  const questionIds = Object.keys(responsesMap);
  if (questionIds.length !== 3) {
    return { error: "All 3 questions must be answered" };
  }

  const options = await prisma.questionOption.findMany({
    where: {
      questionId: { in: questionIds }
    }
  });

  const tendencies: string[] = [];
  const fullResponses: PhaseResponse[] = [];

  for (const qId of questionIds) {
    const selectedOptionKey = responsesMap[qId];
    const opt = options.find(o => o.questionId === qId && o.optionKey === selectedOptionKey);
    if (!opt) return { error: `Invalid option for question ${qId}` };
    
    tendencies.push(opt.tendency);
    fullResponses.push({ questionId: qId, selectedOption: selectedOptionKey as any, tendency: opt.tendency as any });
  }

  let attempt = await prisma.phaseAttempt.findUnique({
    where: { journeyId_phaseKey: { journeyId: journey.id, phaseKey } }
  });

  if (!attempt) {
    attempt = await prisma.phaseAttempt.create({
      data: {
        journeyId: journey.id,
        phaseKey,
        status: "IN_PROGRESS",
      }
    });
  } else if (attempt.status === "COMPLETED") {
    return { error: "Phase already completed" };
  }

  const computation = computeDominance(tendencies as any[]);

  await prisma.phaseAttempt.update({
    where: { id: attempt.id },
    data: {
      status: "COMPLETED",
      responsesJson: fullResponses as any,
      scoresJson: computation.scores as any,
      dominantTendency: computation.dominantTendency,
      secondaryTendency: computation.secondaryTendency,
      dominanceRatio: computation.dominanceRatio,
      percentage: computation.percentage,
      band: computation.band,
      mode: computation.mode,
      patternVectorJson: computation.patternVector as any,
      submittedAt: new Date()
    }
  });

  return { success: true };
}
