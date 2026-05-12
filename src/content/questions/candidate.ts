import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

export const candidateQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "c-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Feedback\n\nYou have completed your interview. It has been a few days, and you have not received a response. What do you do?",
    options: {
      A: { text: "Act immediately to follow up", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Reach out to improve your visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nMore time passes, and there is still no update from the employer. The silence continues without any clear signal of progress. What do you do next?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou receive a response, but it is vague and doesn’t clearly indicate the next step. The signal is present, but direction is unclear. How do you respond?",
    options: {
      A: { text: "Act immediately to get clarity", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your visibility", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 2 — Pressure
  {
    id: "c-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nYou are waiting, but you also have timelines to consider. Delays may start affecting your options. What do you do?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your chances", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Opportunities Conflict\n\nYou are in multiple hiring processes at the same time. Each opportunity is moving at a different pace. How do you decide what to do?",
    options: {
      A: { text: "Act immediately on the most urgent option", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on the option where you are most visible", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nYou have been going through multiple interviews and decisions continuously. The process is starting to feel mentally exhausting. What do you do now?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on what feels most promising", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 3 — Control
  {
    id: "c-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Control\n\nYou feel like the process is no longer in your control. Things are happening, but not based on your actions. What do you do?",
    options: {
      A: { text: "Act immediately to regain control", tendency: "ACTION" as Tendency },
      B: { text: "Step back and evaluate", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your position", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Follow-Up Behavior\n\nYou have already followed up, but there is still no response. Your previous actions have not changed the outcome. What do you do next?",
    options: {
      A: { text: "Act immediately to push again", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your visibility differently", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nYou have been waiting for a long time without clarity. The lack of closure is starting to build pressure. What do you do now?",
    options: {
      A: { text: "Act immediately to move forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without forcing a decision", tendency: "STABILITY" as Tendency },
      D: { text: "Act to reach closure faster", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 4 — Perception
  {
    id: "c-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nYou feel like you may be forgotten in the process. Your presence is not actively visible. What do you do?",
    options: {
      A: { text: "Act immediately to re-engage", tendency: "ACTION" as Tendency },
      B: { text: "Wait and respond at the right moment", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve your visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nYou are aware that your actions may influence how you are perceived. Your response could shape the outcome indirectly. How do you respond?",
    options: {
      A: { text: "Act immediately to respond", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before responding", tendency: "EVALUATION" as Tendency },
      C: { text: "Stay consistent", tendency: "STABILITY" as Tendency },
      D: { text: "Act to shape how you are perceived", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nYou notice others progressing faster in their hiring process. Your pace feels different in comparison. What do you do?",
    options: {
      A: { text: "Act immediately to catch up", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Improve how you are perceived", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 5 — Outcome
  {
    id: "c-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nYou receive an offer, but some parts are unclear or not fully defined. The opportunity is present, but details are incomplete. What do you do?",
    options: {
      A: { text: "Act immediately to secure the opportunity", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate details before confirming", tendency: "EVALUATION" as Tendency },
      C: { text: "Hold without committing", tendency: "STABILITY" as Tendency },
      D: { text: "Act to keep options open", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nYou are close to making a final decision, but you feel unsure. The choice is present, but confidence is not. What do you do?",
    options: {
      A: { text: "Act immediately to commit", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before confirming", tendency: "EVALUATION" as Tendency },
      C: { text: "Delay commitment without change", tendency: "STABILITY" as Tendency },
      D: { text: "Act to keep alternatives open while deciding", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "c-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nYou have made a decision, but you start questioning it. The outcome is set, but certainty is not. What do you do?",
    options: {
      A: { text: "Act immediately to change the decision", tendency: "ACTION" as Tendency },
      B: { text: "Re-evaluate before taking action", tendency: "EVALUATION" as Tendency },
      C: { text: "Stay with the current decision", tendency: "STABILITY" as Tendency },
      D: { text: "Explore alternatives while holding", tendency: "PERCEPTION" as Tendency },
    },
  },
];
