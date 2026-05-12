import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

export const employerQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "e-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Visibility\n\nThe interview process is underway. You don’t have clear visibility into progress or current status. What do you do?",
    options: {
      A: { text: "Act immediately to seek clarity", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve visibility into the process", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nUpdates remain inconsistent or delayed. There is no clear indication of where things stand. What do you do next?",
    options: {
      A: { text: "Act immediately to intervene", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve visibility into the process", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou receive updates, but they lack clear direction. Information is available, but it does not provide clarity. How do you respond?",
    options: {
      A: { text: "Act immediately to define direction", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to align stakeholders for clarity", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 2 — Pressure
  {
    id: "e-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nBusiness needs require faster hiring outcomes. Delays are beginning to affect broader priorities. What do you do?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve outcomes", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Priorities Conflict\n\nHiring competes with other business priorities. Multiple demands are pulling focus in different directions. How do you decide?",
    options: {
      A: { text: "Act immediately on the most urgent priority", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on highest impact areas", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nYou are making repeated hiring decisions. The frequency of decisions is becoming difficult to sustain. What do you do now?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on critical decisions", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 3 — Control
  {
    id: "e-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Alignment\n\nHiring feels misaligned with expectations. Outcomes are not aligning with intended direction. What do you do?",
    options: {
      A: { text: "Act immediately to regain control", tendency: "ACTION" as Tendency },
      B: { text: "Step back and evaluate", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to realign stakeholders", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Intervention\n\nYou’ve already intervened multiple times without clear change. Your involvement is not improving outcomes. What do you do next?",
    options: {
      A: { text: "Act immediately to intervene again", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to change how you influence the process", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nDecisions are delayed without clear resolution. Outcomes are not converging as expected. What do you do now?",
    options: {
      A: { text: "Act immediately to drive closure", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without forcing closure", tendency: "STABILITY" as Tendency },
      D: { text: "Act to drive alignment to close", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 4 — Perception
  {
    id: "e-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nHiring outcomes need to reflect clearly at leadership level. Progress is not fully visible across the system. What do you do?",
    options: {
      A: { text: "Act immediately to increase visibility", tendency: "ACTION" as Tendency },
      B: { text: "Wait and communicate at the right moment", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve outcome visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nHiring performance reflects on leadership effectiveness. Perception is tied to visible outcomes. How do you respond?",
    options: {
      A: { text: "Act immediately to demonstrate control", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Stay consistent", tendency: "STABILITY" as Tendency },
      D: { text: "Act to shape perception through outcomes", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nOther teams are hiring faster or better. Comparative performance is becoming visible. What do you do?",
    options: {
      A: { text: "Act quickly to match pace", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve positioning", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 5 — Outcome
  {
    id: "e-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nFinal hiring decisions lack clarity. The outcome is near, but not fully defined. What do you do?",
    options: {
      A: { text: "Act immediately to finalize the decision", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate gaps before confirming", tendency: "EVALUATION" as Tendency },
      C: { text: "Hold without finalizing", tendency: "STABILITY" as Tendency },
      D: { text: "Act to keep options strategically open", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nThere is hesitation in final approvals. Decisions are near, but not committed. What do you do?",
    options: {
      A: { text: "Act immediately to finalize commitment", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before confirming", tendency: "EVALUATION" as Tendency },
      C: { text: "Hold without committing", tendency: "STABILITY" as Tendency },
      D: { text: "Act to retain flexibility in the decision", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "e-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nAfter hiring, doubts arise about the decision. The outcome exists, but confidence is unstable. What do you do?",
    options: {
      A: { text: "Act immediately to revisit the decision", tendency: "ACTION" as Tendency },
      B: { text: "Re-evaluate before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Stay with the current direction", tendency: "STABILITY" as Tendency },
      D: { text: "Act to monitor and adjust if needed", tendency: "PERCEPTION" as Tendency },
    },
  },
];
