"use server";

import prisma from "@/lib/db/prisma";
import { verifySession } from "@/lib/security/tokens";
import { AnswerRecord } from "@/domain/assessment/report-builder";
import { Role } from "@/generated/prisma";

type Mode = "single" | "full";

export async function getAssessmentStatusAction(role: Role) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

 const journey = await prisma.assessmentJourney.findFirst({
  where: {
    userId,
    role,
  },
  include: {
    phaseAttempts: true,
    overallReport: true,
  },
});

  if (!journey) {
    return {
      success: true,
      completedPhases: [],
      phaseReports: {},
      overallReport: null,
    };
  }

  const completedPhases: string[] =
  journey.phaseAttempts
    .filter(
      (item) =>
        item.status === "COMPLETED"
    )
    .map(
      (item) =>
        item.phaseKey
    );
 const phaseReports: Record<string, any> =
  Object.fromEntries(
    journey.phaseAttempts
      .filter(
        (item) =>
          item.status === "COMPLETED"
      )
      .map((item) => [
        item.phaseKey,
        item.reportJson,
      ])
  );

  return {
    success: true,
    journeyId: journey.id,
    completedPhases,
    phaseReports,
    overallReport:
    journey.overallReport
      ?.reportJson || null,
};
}

export async function startAssessmentJourneyAction({
  role,
  mode,
}: {
  role: Role;
  mode: Mode;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  let journey = await prisma.assessmentJourney.findFirst({
  where: {
    userId,
    role,
  },
});

  if (!journey) {
    journey =
      await prisma.assessmentJourney.create({
        data: {
          userId,
          role,
          mode,
        },
      });
  }

  return {
    success: true,
    journeyId: journey.id,
  };
}

export async function completeAssessmentAction({
  journeyId,
  phase,
  answers,
  report,
}: {
  journeyId: string;
  phase?: string;
  answers: AnswerRecord[];
  report: any;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  // phase report
  if (
    report.type === "phase" &&
    phase
  ) {
    const result = report.result;

    await prisma.phaseAttempt.upsert({
      where: {
        journeyId_phaseKey: {
          journeyId,
          phaseKey: phase,
        },
      },

      create: {
        journeyId,
        phaseKey: phase,

        status: "COMPLETED",

        responsesJson: answers,

        dominantTendency:
          result.dominantTendency,

        secondaryTendency:
          result.secondaryTendency,

        dominanceRatio:
          result.dominanceRatio,

        percentage:
          result.percentage,

        band:
          result.band,

        mode:
          result.mode,

        reportJson:
          report,

        submittedAt:
          new Date(),
      },

      update: {
        status: "COMPLETED",

        responsesJson:
          answers,

        reportJson:
          report,

        submittedAt:
          new Date(),
      },
    });

    return {
      success: true,
    };
  }

  // overall report
  if (
    report.type === "overall"
  ) {
    const result =
      report.overall;

    await prisma.overallReport.upsert({
      where: {
        journeyId,
      },

      create: {
        journeyId,

        templateVersion:
          report.templateVersion || "v1",

        scoresJson:
          result,

        dominantTendency:
          result.dominantTendency,

        secondaryTendency:
          result.secondaryTendency,

        dominanceRatio:
          result.dominanceRatio,

        percentage:
          result.percentage,

        band:
          result.band,

        mode:
          result.mode,

        patternVectorJson:
          report.patternVector ||
          {},

        alignmentHealthJson:
          report.health,

        phaseSummaryJson:
          report.phaseResults,

        reportJson:
          report,
      },

      update: {
        scoresJson:
          result,

        reportJson:
          report,

        alignmentHealthJson:
          report.health,

        phaseSummaryJson:
          report.phaseResults,
      },
    });

    await prisma.assessmentJourney.update({
      where: {
        id: journeyId,
      },

      data: {
        status:
          "COMPLETED",

        completedAt:
          new Date(),
      },
    });
  }

  return {
    success: true,
  };
}

export async function getReportAction({
  role,
  mode,
  phase,
}: {
  role: Role;
  mode: Mode;
  phase?: string;
}) {
  const userId = await verifySession();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  const status = await getAssessmentStatusAction(role);

  if (status.error) {
    return status;
  }

  if (mode === "single" && phase) {
    return {
      success: true,
      report: (status.phaseReports as Record<string, any>)?.[phase] || null,
      user, // ✅ important
    };
  }

  return {
    success: true,
    report: status.overallReport || null,
    user, // ✅ important
  };
}