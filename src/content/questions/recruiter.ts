import { PhaseKey, Option, Tendency } from "@/domain/assessment/types";

export interface Question {
  id: string;
  phase: PhaseKey;
  situation: string;
  options: Record<Option, { text: string; tendency: Tendency }>;
}

export const recruiterQuestions: Question[] = [
  // Phase 1 — Uncertainty
  {
    id: "r-u-1",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Waiting Without Feedback\n\nYou’ve completed an interview cycle. Feedback from the panel is still pending, and progress depends on them. What do you do?",
    options: {
      A: { text: "Act immediately to push for feedback", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to re-engage stakeholders and improve visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-u-2",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Silence Stretching\n\nDelays continue and feedback is still not coming through. The process is slowing down due to lack of response. What do you do next?",
    options: {
      A: { text: "Act immediately to escalate", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to increase visibility of the delay", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-u-3",
    phase: "uncertainty" as PhaseKey,
    situation:
      "Unclear Signals\n\nYou receive feedback, but it lacks clear direction for next steps. The input exists, but it does not translate into action. How do you respond?",
    options: {
      A: { text: "Act immediately to define next steps", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to align stakeholders to create clarity", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 2 — Pressure
  {
    id: "r-p-1",
    phase: "pressure" as PhaseKey,
    situation:
      "Time Pressure Building\n\nHiring timelines are tightening and roles need closure. Delays are beginning to impact delivery expectations. What do you do?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve conversion", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-p-2",
    phase: "pressure" as PhaseKey,
    situation:
      "Multiple Roles Conflict\n\nYou’re managing multiple roles with competing urgency. Each role demands attention at the same time. How do you prioritize?",
    options: {
      A: { text: "Act immediately on the most urgent role", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on roles with higher visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-p-3",
    phase: "pressure" as PhaseKey,
    situation:
      "Decision Fatigue\n\nYou’ve been coordinating continuous interviews and decisions. The volume of activity is becoming difficult to manage. What do you do now?",
    options: {
      A: { text: "Act immediately to move things forward", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Focus on high-impact actions", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 3 — Control
  {
    id: "r-c-1",
    phase: "control" as PhaseKey,
    situation:
      "Need to Regain Control\n\nThe process feels fragmented across stakeholders. Execution is slipping beyond your direct control. What do you do?",
    options: {
      A: { text: "Act immediately to regain control", tendency: "ACTION" as Tendency },
      B: { text: "Step back and evaluate", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to realign stakeholders", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-c-2",
    phase: "control" as PhaseKey,
    situation:
      "Over-Follow-Up Behavior\n\nYou’ve already followed up multiple times with no response. Repeated efforts are not creating movement. What do you do next?",
    options: {
      A: { text: "Act immediately to push again", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to change approach to trigger response", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-c-3",
    phase: "control" as PhaseKey,
    situation:
      "Forcing Closure\n\nA role is dragging without closure. The process is extending without resolution. What do you do now?",
    options: {
      A: { text: "Act immediately to drive closure", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before deciding the next step", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without forcing closure", tendency: "STABILITY" as Tendency },
      D: { text: "Act to influence stakeholders to close", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 4 — Perception
  {
    id: "r-pr-1",
    phase: "perception" as PhaseKey,
    situation:
      "Staying Visible\n\nYour work is progressing, but not clearly visible to stakeholders. Effort exists, but visibility is low. What do you do?",
    options: {
      A: { text: "Act immediately to increase visibility", tendency: "ACTION" as Tendency },
      B: { text: "Wait and communicate at the right moment", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve stakeholder visibility", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-pr-2",
    phase: "perception" as PhaseKey,
    situation:
      "Managing Impression\n\nYour performance is being evaluated through outcomes. Perception depends on how your actions are seen. How do you respond?",
    options: {
      A: { text: "Act immediately to demonstrate execution", tendency: "ACTION" as Tendency },
      B: { text: "Think before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Stay consistent with your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to shape stakeholder perception", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-pr-3",
    phase: "perception" as PhaseKey,
    situation:
      "Comparing with Others\n\nOther recruiters are closing roles faster. Your progress is being compared to others. What do you do?",
    options: {
      A: { text: "Act immediately to speed up", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue without changing your approach", tendency: "STABILITY" as Tendency },
      D: { text: "Act to improve visibility of your work", tendency: "PERCEPTION" as Tendency },
    },
  },

  // Phase 5 — Outcome
  {
    id: "r-o-1",
    phase: "outcome" as PhaseKey,
    situation:
      "Offer Ambiguity\n\nA candidate is unsure about the offer. The final step is unclear from their perspective. What do you do?",
    options: {
      A: { text: "Act immediately to close the offer", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate concerns before proceeding", tendency: "EVALUATION" as Tendency },
      C: { text: "Hold without forcing closure", tendency: "STABILITY" as Tendency },
      D: { text: "Act to keep the candidate engaged", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-o-2",
    phase: "outcome" as PhaseKey,
    situation:
      "Commitment Hesitation\n\nThe candidate is hesitating at the final stage. Closure is close, but not confirmed. What do you do?",
    options: {
      A: { text: "Act immediately to secure commitment", tendency: "ACTION" as Tendency },
      B: { text: "Evaluate hesitation before acting", tendency: "EVALUATION" as Tendency },
      C: { text: "Hold without forcing closure", tendency: "STABILITY" as Tendency },
      D: { text: "Act to influence the decision", tendency: "PERCEPTION" as Tendency },
    },
  },
  {
    id: "r-o-3",
    phase: "outcome" as PhaseKey,
    situation:
      "Post-Decision Doubt\n\nThe candidate has accepted but shows uncertainty. The decision is made, but stability is weak. What do you do?",
    options: {
      A: { text: "Act immediately to secure the decision", tendency: "ACTION" as Tendency },
      B: { text: "Re-evaluate before intervening", tendency: "EVALUATION" as Tendency },
      C: { text: "Continue as planned", tendency: "STABILITY" as Tendency },
      D: { text: "Stay engaged to stabilize the outcome", tendency: "PERCEPTION" as Tendency },
    },
  },
];
