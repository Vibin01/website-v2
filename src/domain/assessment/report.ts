import {
  Option,
  PhaseKey,
  PhaseComputationResult,
  Tendency,
} from "./types";
import { computeDominance } from "./scoring";
import { computeAlignmentHealth } from "./alignment-health";

export type AnswerRecord = {
  questionId: string;
  phase: PhaseKey;
  selectedOption: Option;
  tendency: Tendency;
  situation: string;
  answerText: string;
};

export function buildPhaseReport(phase: PhaseKey, answers: AnswerRecord[]) {
  const phaseAnswers = answers.filter((a) => a.phase === phase);

  const result: PhaseComputationResult = {
    phaseKey: phase,
    ...computeDominance(
      phaseAnswers.map((a) => a.tendency),
      false
    ),
  };

  return {
    type: "phase" as const,
    phase,
    result,
    answers: phaseAnswers,
  };
}

export function buildOverallReport(answers: AnswerRecord[]) {
  const phaseKeys: PhaseKey[] = [
    "uncertainty",
    "pressure",
    "control",
    "perception",
    "outcome",
  ];

  const phaseResults = phaseKeys.map((phase) => ({
    phaseKey: phase,
    ...computeDominance(
      answers.filter((a) => a.phase === phase).map((a) => a.tendency),
      false
    ),
  }));

  const phaseBands = Object.fromEntries(
    phaseResults.map((item) => [item.phaseKey, item.band])
  ) as Record<PhaseKey, (typeof phaseResults)[number]["band"]>;

  const health = computeAlignmentHealth(phaseBands);

  const overall = {
    phaseKey: "overall",
    ...computeDominance(
      answers.map((a) => a.tendency),
      true
    ),
  };

  return {
    type: "overall" as const,
    overall,
    phaseResults,
    health,
    answers,
  };
}