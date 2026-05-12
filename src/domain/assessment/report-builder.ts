

import { computeDominance } from "./scoring";
import { computeAlignmentHealth } from "./alignment-health";
import { Mode, Option, PhaseKey, Tendency } from "./types";
import {
  primaryExpressionByPhase,
  getSecondaryExpression,
  tendencyContent,
  overallContentByMode,
} from "./report-content";

export type AnswerRecord = {
  questionId: string;
  phase: PhaseKey;
  selectedOption: Option;
  tendency: Tendency;
  situation: string;
  answerText: string;
};


export const phaseLabels: Record<PhaseKey, string> = {
  uncertainty: "Uncertainty",
  pressure: "Pressure",
  control: "Control",
  perception: "Perception",
  outcome: "Outcome",
};

export const phaseKeys: PhaseKey[] = [
  "uncertainty",
  "pressure",
  "control",
  "perception",
  "outcome",
];

export function getContentKey(result: {
  dominantTendency: Tendency | null;
  mode: Mode;
}) {
  if (!result.dominantTendency || result.mode === "Dynamic") return "DYNAMIC";
  return result.dominantTendency;
}

export function buildPhaseReport(phase: PhaseKey, answers: AnswerRecord[]) {
  const phaseAnswers = answers.filter((item) => item.phase === phase);

  const result = {
    phaseKey: phase,
    ...computeDominance(
      phaseAnswers.map((item) => item.tendency),
      false
    ),
  };

  const content = tendencyContent[getContentKey(result)];

  const primaryExpression =
  primaryExpressionByPhase[phase][result.band];

const secondaryExpression = getSecondaryExpression(
  result.band,
  result.secondaryTendency
);

 return {
  type: "phase" as const,

  phase,
  phaseLabel: phaseLabels[phase],
  result,
  content,
  primaryExpression,
  secondaryExpression,
  answers: phaseAnswers,
};
}



export function buildOverallReport(role:string,answers: AnswerRecord[]) {
  
 
  const phaseResults = phaseKeys.map((phase) => {
  const phaseAnswers = answers.filter((item) => item.phase === phase);

  const result = {
    phaseKey: phase,
    phaseLabel: phaseLabels[phase],
    ...computeDominance(
      phaseAnswers.map((item) => item.tendency),
      false
    ),
  };

  const content = tendencyContent[getContentKey(result)];

  const primaryExpression = primaryExpressionByPhase[phase][result.band];

  const secondaryExpression = getSecondaryExpression(
    result.band,
    result.secondaryTendency
  );

  return {
    ...result,
    content,
    primaryExpression,
    secondaryExpression,
  };
});


  const overall = {
    ...computeDominance(
      answers.map((item) => item.tendency),
      true
    ),
  };

  const phaseBands = Object.fromEntries(
    phaseResults.map((item) => [item.phaseKey, item.band])
  ) as any;

  const health = computeAlignmentHealth(phaseBands);

  const content = overallContentByMode[overall.mode];

  const secondaryExpression = getSecondaryExpression(
  overall.band,
  overall.secondaryTendency
);

  return {
    type: "overall" as const,
    role,
    overall,
    phaseResults,
    health,
    content,
    secondaryExpression,
    answers,
  };
}