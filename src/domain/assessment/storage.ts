import { AnswerRecord } from "./report-builder";

export function getCompletedPhases() {
  return JSON.parse(
    localStorage.getItem("completedAlignmentPhases") || "[]"
  ) as string[];
}

export function savePhaseAnswers(
  phase: string,
  answers: AnswerRecord[]
) {
  const stored = JSON.parse(
    localStorage.getItem("phaseAnswers") || "{}"
  );

  stored[phase] = answers;

  localStorage.setItem(
    "phaseAnswers",
    JSON.stringify(stored)
  );
}

export function getStoredPhaseAnswers() {
  return JSON.parse(
    localStorage.getItem("phaseAnswers") || "{}"
  );
}