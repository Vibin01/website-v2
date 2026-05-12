import { Mode, Tendency } from "./types";

import { Band, PhaseKey } from "./types";

export const primaryExpressionByPhase: Record<
  PhaseKey,
  Record<Band, { insight: string; belief: string; actionSummary: string }>
> = {
  uncertainty: {
    Strong: {
      insight: "Clarity gaps create strong discomfort that is hard to tolerate",
      belief: "It strongly feels something is wrong or incomplete here",
      actionSummary: "You consistently act to reduce uncertainty rather than wait",
    },
    Moderate: {
      insight: "Clarity gaps create noticeable discomfort over time",
      belief: "It feels like something may be unclear or incomplete",
      actionSummary: "You tend to act to reduce uncertainty rather than wait",
    },
    Dynamic: {
      insight: "Clarity gaps sometimes create discomfort",
      belief: "At times, things may feel unclear or incomplete",
      actionSummary: "Your response to uncertainty varies across situations",
    },
  },

  pressure: {
    Strong: {
      insight: "Increasing pressure creates urgency that is hard to ignore",
      belief: "It strongly feels delay may lead to loss or missed opportunity",
      actionSummary: "You consistently act quickly under pressure rather than pause",
    },
    Moderate: {
      insight: "Increasing pressure creates urgency over time",
      belief: "It feels delay may lead to missed opportunity",
      actionSummary: "You tend to act quickly under pressure rather than pause",
    },
    Dynamic: {
      insight: "Pressure sometimes creates urgency",
      belief: "At times, delay may feel more important than clarity",
      actionSummary: "Your response to pressure varies across situations",
    },
  },

  control: {
    Strong: {
      insight: "Loss of control creates a strong need to act",
      belief: "It strongly feels something must be done to regain control",
      actionSummary: "You consistently act to regain control rather than wait",
    },
    Moderate: {
      insight: "Loss of control creates a need to act",
      belief: "It feels something should be done to regain control",
      actionSummary: "You tend to act to regain control rather than wait",
    },
    Dynamic: {
      insight: "Loss of control sometimes creates a need to act",
      belief: "At times, action may feel necessary to regain control",
      actionSummary: "Your response to control varies across situations",
    },
  },

  perception: {
    Strong: {
      insight: "Signals create strong sensitivity to how situations are seen",
      belief: "It strongly feels perception influences outcomes",
      actionSummary: "You consistently act to influence how you are perceived",
    },
    Moderate: {
      insight: "Signals create sensitivity to how situations are perceived",
      belief: "It feels perception may influence outcomes",
      actionSummary: "You tend to act to influence how you are perceived",
    },
    Dynamic: {
      insight: "Signals sometimes affect how situations are seen",
      belief: "At times, perception may matter more",
      actionSummary: "Your response to perception varies across situations",
    },
  },

  outcome: {
    Strong: {
      insight: "Outcomes create strong uncertainty around final decisions made",
      belief: "It strongly feels the outcome may not be fully right",
      actionSummary: "You consistently revisit decisions rather than hold them",
    },
    Moderate: {
      insight: "Outcomes create uncertainty around decisions",
      belief: "It feels the outcome may not be fully right",
      actionSummary: "You tend to revisit decisions rather than hold them",
    },
    Dynamic: {
      insight: "Outcomes sometimes create uncertainty",
      belief: "At times, decisions may feel uncertain",
      actionSummary: "Your response to outcomes varies across situations",
    },
  },
};

export const secondaryExpressionByTendency: Record<Tendency, string> = {
  ACTION:
    "You also show moments of acting quickly — especially when uncertainty builds or time feels constrained.",
  EVALUATION:
    "You also show moments of pausing and evaluating — especially when clarity feels incomplete or the situation becomes complex.",
  STABILITY:
    "You also show moments of continuing steadily — especially when familiar patterns feel more reliable than change.",
  PERCEPTION:
    "You also show moments of shaping perception — especially when how you are seen begins to influence outcomes.",
};

export function getSecondaryExpression(
  band: Band,
  secondaryTendency: Tendency | null
) {
  if (band !== "Moderate" || !secondaryTendency) return null;

  return {
    tendency: secondaryTendency,
    expression: secondaryExpressionByTendency[secondaryTendency],
  };
}

export const tendencyContent: Record<
  Tendency | "DYNAMIC",
  {
    mode: Mode;
    patternName: string;
    phaseIntro: string;
    centerCards: { title: string; lines: string[] }[];
    whatHappening: string[];
    whatThisMeans: string[];
    whatToDo: string[];
    reflection: string;
  }
> = {
  ACTION: {
    mode: "Unaligned",
    patternName: "Acting Under Uncertainty",
    phaseIntro:
      "Your decisions in this phase reveal how alignment shifts when action precedes clarity.",
    centerCards: [
      {
        title: "Pattern",
        lines: [
          "You act early when situations feel unresolved and clarity is missing.",
          "Action creates movement when uncertainty builds and direction is not yet clear.",
        ],
      },
      {
        title: "Trigger",
        lines: [
          "Unresolved conditions create discomfort and signal that change is needed.",
          "That discomfort builds over time and pushes you to act quickly.",
        ],
      },
      {
        title: "Result",
        lines: [
          "Action creates quick progress and reduces uncertainty in the moment.",
          "But without clarity direction may weaken or shift over time.",
        ],
      },
    ],
    whatHappening: [
      "You are not reacting to delay.",
      "You are responding to the discomfort of uncertainty.",
    ],
    whatThisMeans: [
      "Acting quickly creates a sense of progress — even when clarity is still forming.",
      "This isn’t impatience — it’s a response to unresolved uncertainty.",
    ],
    whatToDo: [
      "Pause before acting.",
      "Let understanding define direction before movement begins.",
      "Act when direction is clearer — not when discomfort increases.",
    ],
    reflection:
      "Are you acting to move forward — or to resolve the discomfort of not knowing?",
  },

  EVALUATION: {
    mode: "Aligned",
    patternName: "Deciding With Clarity",
    phaseIntro:
      "Your decisions in this phase reveal how alignment holds when clarity guides action.",
    centerCards: [
      {
        title: "Decision Anchor",
        lines: [
          "You pause before acting and take time to understand the situation.",
          "Decisions are guided by clarity instead of reacting to uncertainty.",
        ],
      },
      {
        title: "Trigger Control",
        lines: [
          "Uncertainty signals the need to evaluate rather than act immediately.",
          "You treat conditions as input for understanding before taking action.",
        ],
      },
      {
        title: "Result",
        lines: [
          "Decisions follow understanding which keeps direction stable across situations.",
          "This allows direction to remain stable even as conditions change.",
        ],
      },
    ],
    whatHappening: [
      "You don’t react immediately.",
      "You take time to understand the situation before moving forward.",
    ],
    whatThisMeans: [
      "This helps you make more considered decisions — by maintaining clarity before action.",
      "This isn’t hesitation. It’s deliberate decision-making.",
    ],
    whatToDo: [
      "Continue evaluating before acting.",
      "Act when clarity is sufficient — not perfect.",
      "Maintain balance between understanding and execution.",
    ],
    reflection:
      "Are you acting when clarity is sufficient — or waiting until it feels complete?",
  },

  STABILITY: {
    mode: "Auto-Aligned",
    patternName: "Staying Steady",
    phaseIntro:
      "Your decisions in this phase reveal how alignment holds through consistency over time.",
    centerCards: [
      {
        title: "Continuity Pattern",
        lines: [
          "You continue your approach even when the situation begins to change.",
          "Your response stays consistent based on patterns that worked before.",
        ],
      },
      {
        title: "Trigger Familiarity",
        lines: [
          "Familiar patterns guide decisions more than new signals in situations.",
          "You rely on past outcomes instead of reacting to change.",
        ],
      },
      {
        title: "Result",
        lines: [
          "Consistency creates stability and reduces need for frequent adjustments.",
          "But when conditions shift, alignment may not fully reflect current reality.",
        ],
      },
    ],
    whatHappening: [
      "You are less reactive to changing signals.",
      "You rely on consistency rather than frequent adjustment.",
    ],
    whatThisMeans: [
      "This creates stability — but may cause you to miss meaningful changes in conditions.",
      "This isn’t inaction. It’s a preference for continuity.",
    ],
    whatToDo: [
      "Reassess periodically.",
      "Check if your approach still fits the situation.",
      "Adjust when conditions change — not only outcomes.",
    ],
    reflection:
      "Are you continuing because it still fits — or because it has worked before?",
  },

  PERCEPTION: {
    mode: "Misaligned",
    patternName: "Acting Through Perception",
    phaseIntro:
      "Your decisions in this phase reveal how alignment shifts when perception guides decisions.",
    centerCards: [
      {
        title: "Perception Driver",
        lines: [
          "You respond based on how the situation appears rather than reality.",
          "Signals and impressions shape how you interpret and decide responses.",
        ],
      },
      {
        title: "Trigger Interpretation",
        lines: [
          "Conditions are interpreted through meaning and not just observed directly.",
          "Your response adjusts to perceived intent even when clarity is incomplete.",
        ],
      },
      {
        title: "Result",
        lines: [
          "Your actions remain responsive to perceived signals and interpretations.",
          "But when interpretation replaces clarity direction may shift from reality.",
        ],
      },
    ],
    whatHappening: [
      "You are attentive to how you are seen.",
      "You adjust your actions to stay relevant or noticeable.",
    ],
    whatThisMeans: [
      "This can improve visibility — but may shift focus away from decision accuracy.",
      "This isn’t manipulation. It’s a response to how situations are perceived externally.",
    ],
    whatToDo: [
      "Separate what is observed from what is assumed.",
      "Act based on what is real — not what appears.",
      "Anchor decisions in clarity, not perception.",
    ],
    reflection:
      "Are you responding to what is confirmed — or to what it seems to mean?",
  },

  DYNAMIC: {
    mode: "Dynamic",
    patternName: "Adapting to the Situation",
    phaseIntro:
      "Your decisions in this phase reveal how alignment varies without a consistent pattern.",
    centerCards: [
      {
        title: "Adaptive Pattern",
        lines: [
          "Your response changes depending on situation and context each time.",
          "You adjust behavior instead of following one consistent approach.",
        ],
      },
      {
        title: "Trigger Variability",
        lines: [
          "Different conditions lead to different responses based on context.",
          "You interpret each situation independently rather than using a fixed pattern.",
        ],
      },
      {
        title: "Result",
        lines: [
          "This flexibility allows adaptation across varied and changing situations.",
          "But without a stable anchor alignment may vary across situations.",
        ],
      },
    ],
    whatHappening: [
      "You are not inconsistent.",
      "You are responding to changing conditions.",
    ],
    whatThisMeans: [
      "You are flexible and responsive — but this creates inconsistency in decision-making.",
      "Without a clear internal anchor, your decisions may shift from situation to situation.",
    ],
    whatToDo: [
      "Define what remains constant across situations.",
      "Let your response adapt — but keep direction stable.",
      "Use context to adjust — not to drift.",
    ],
    reflection:
      "When your response changes, what remains constant in how you decide?",
  },
};

export const overallContentByMode: Record<
  Mode,
  {
    insight: string[];
    pattern: string[];
    trigger: string[];
    outcome: string[];
    health: {
      vision: "Strong" | "Moderate" | "Weak";
      strategy: "Strong" | "Moderate" | "Weak";
      execution: "Strong" | "Moderate" | "Weak";
    };
    slips: { title: string; level: string; text: string }[];
    behavioralSummary: string[];
    whatThisMeans: string[];
    whatToImprove: string[];
  }
> = {
  Aligned: {
    insight: [
      "You reduce uncertainty by understanding first.",
      "Clarity becomes your anchor, guiding decisions before action.",
      "This keeps effort connected to outcome, reinforcing consistent decisions.",
    ],
    pattern: [
      "You evaluate before acting and connect decisions to current situations.",
      "Your responses follow clarity instead of reacting to uncertainty.",
    ],
    trigger: [
      "Uncertainty signals the need to understand before acting.",
      "You treat situations as inputs for evaluation rather than action.",
    ],
    outcome: [
      "This keeps direction stable across changing situations.",
      "But extended evaluation may delay movement when clarity is sufficient.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Moderate" },
    slips: [
      {
        title: "Evaluation Extension",
        level: "Medium",
        text: "Evaluation continues even after sufficient clarity is available, delaying transition into execution.",
      },
      {
        title: "Execution Delay",
        level: "Medium",
        text: "Decisions remain valid, but are not consistently translated into timely action.",
      },
    ],
    behavioralSummary: [
      "Across situations, you pause before acting.",
      "You interpret what is happening, connect it to context, and then decide.",
      "This creates stability in direction and consistency in outcomes.",
      "But as the evaluation extends, movement begins to lag.",
    ],
    whatThisMeans: [
      "You maintain alignment by grounding decisions in clarity.",
      "But when evaluation continues beyond necessity, execution begins to lag behind intent.",
      "Over time, this reduces how effectively decisions translate into outcomes.",
    ],
    whatToImprove: [
      "Act when clarity is sufficient.",
      "Avoid extending evaluation beyond usefulness.",
      "Shift from understanding to execution sooner.",
      "Let decisions move forward once direction is stable.",
    ],
  },

  "Auto-Aligned": {
    insight: [
      "You reduce uncertainty through consistency.",
      "Familiar patterns guide how you respond.",
      "This reduces effort, as familiar patterns replace active evaluation.",
    ],
    pattern: [
      "You rely on familiar patterns instead of evaluating each situation.",
      "Your responses stay consistent based on past outcomes.",
    ],
    trigger: [
      "Familiarity reduces uncertainty and guides decisions.",
      "Known patterns feel reliable even when conditions shift.",
    ],
    outcome: [
      "This creates consistency and low effort across situations.",
      "But alignment may drift when conditions change.",
    ],
    health: { vision: "Strong", strategy: "Strong", execution: "Strong" },
    slips: [
      {
        title: "Pattern Inertia",
        level: "Medium",
        text: "Established patterns continue even when current conditions no longer support them.",
      },
      {
        title: "Re-evaluation Gap",
        level: "Medium",
        text: "New signals are not actively reassessed, allowing misalignment to persist unnoticed.",
      },
    ],
    behavioralSummary: [
      "Across situations, you maintain a steady approach.",
      "You recognize patterns quickly and respond using established methods.",
      "This reduces effort and creates continuity.",
      "But when conditions change, your response may not adjust to reflect them.",
    ],
    whatThisMeans: [
      "You maintain alignment efficiently in stable conditions.",
      "But when situations shift, alignment continues from the past instead of adapting to the present.",
      "Over time, this reduces how accurately actions reflect present conditions.",
    ],
    whatToImprove: [
      "Re-evaluate when conditions shift.",
      "Don’t assume past patterns still apply.",
      "Introduce deliberate checkpoints for reassessment.",
      "Update your approach when context changes, not after outcomes.",
    ],
  },

  Misaligned: {
    insight: [
      "You reduce uncertainty through interpretation.",
      "Perceived meaning shapes how you respond.",
      "This creates confidence, even when clarity is not fully established.",
    ],
    pattern: [
      "You respond based on how situations appear rather than what is confirmed.",
      "Your decisions are shaped by signals, impressions, and perceived intent.",
    ],
    trigger: [
      "Interpretation forms quickly before clarity is validated.",
      "Perception influences decisions more than actual conditions.",
    ],
    outcome: [
      "This creates responsiveness to signals and changes.",
      "But direction may shift away from reality.",
    ],
    health: { vision: "Moderate", strategy: "Weak", execution: "Strong" },
    slips: [
      {
        title: "Perception Override",
        level: "High",
        text: "Interpretation replaces validation, shaping decisions before clarity is established.",
      },
      {
        title: "Signal Distortion",
        level: "Medium",
        text: "Decisions are driven by perceived meaning rather than actual conditions.",
      },
    ],
    behavioralSummary: [
      "Across situations, you respond to signals quickly.",
      "You interpret tone, behavior, and cues to guide your decisions.",
      "This keeps you responsive to external signals.",
      "But direction forms through perception before it is confirmed.",
    ],
    whatThisMeans: [
      "You stay responsive to changing signals.",
      "But when perception replaces validation, alignment shifts away from what is actually happening.",
      "Over time, this creates a gap between intention and outcome.",
    ],
    whatToImprove: [
      "Validate before acting.",
      "Separate interpretation from actual signals.",
      "Ground decisions in what is confirmed, not assumed.",
      "Pause to check the meaning before responding to perception.",
    ],
  },

  Unaligned: {
    insight: [
      "You reduce uncertainty by acting early.",
      "Movement becomes your way to regain control.",
      "This creates progress, even when direction is still forming.",
    ],
    pattern: [
      "You act early when situations emerge without waiting for clarity.",
      "Your decisions are driven by movement instead of evaluated direction.",
    ],
    trigger: [
      "Uncertainty creates discomfort which pushes you to act quickly.",
      "Action becomes the default when situations feel unresolved.",
    ],
    outcome: [
      "This creates momentum and reduces uncertainty in the short term.",
      "But direction may shift as clarity forms after action begins.",
    ],
    health: { vision: "Weak", strategy: "Moderate", execution: "Strong" },
    slips: [
      {
        title: "Pre-emptive Action",
        level: "High",
        text: "Action is initiated before direction is fully understood, causing alignment to form during execution.",
      },
      {
        title: "Evaluation Bypass",
        level: "Medium",
        text: "Understanding follows action instead of guiding it, reducing consistency in outcomes.",
      },
    ],
    behavioralSummary: [
      "Across situations, you move quickly when things feel unclear.",
      "You initiate action to reduce delay, create progress and regain control.",
      "This creates speed and responsiveness.",
      "But direction is not always fully formed when action begins.",
    ],
    whatThisMeans: [
      "You maintain momentum under uncertainty.",
      "But when action replaces clarity, direction is formed during execution, not before.",
      "Over time, this leads to repeated correction and reduces outcome consistency.",
    ],
    whatToImprove: [
      "Pause before acting.",
      "Separate urgency from direction.",
      "Let evaluation define the path before movement begins.",
      "Act to execute a decision — not to create one.",
    ],
  },

  Dynamic: {
    insight: [
      "You reduce uncertainty differently across situations.",
      "Your response adapts based on context each time.",
      "This allows flexibility, but does not reinforce a consistent decision pattern.",
    ],
    pattern: [
      "Your responses vary across situations without one consistent pattern.",
      "Different tendencies guide decisions depending on context.",
    ],
    trigger: [
      "Changing conditions lead to different responses each time.",
      "No single mechanism consistently governs decisions.",
    ],
    outcome: [
      "This creates flexibility across situations.",
      "But alignment varies without a stable anchor.",
    ],
    health: { vision: "Moderate", strategy: "Moderate", execution: "Moderate" },
    slips: [
      {
        title: "Inconsistency",
        level: "High",
        text: "Responses vary across similar situations, preventing stable alignment formation.",
      },
      {
        title: "No Decision Anchor",
        level: "Medium",
        text: "No consistent mechanism governs decisions, leading to fluctuating outcomes.",
      },
    ],
    behavioralSummary: [
      "Across situations, your responses shift.",
      "At times you act quickly, at times you evaluate, and at times you stay consistent.",
      "This creates adaptability across situations.",
      "But without a stable pattern, direction does not consistently hold.",
    ],
    whatThisMeans: [
      "You are flexible and responsive across situations.",
      "But without a consistent anchor, alignment varies from one situation to another.",
      "Over time, this reduces outcome predictability.",
    ],
    whatToImprove: [
      "Define a consistent decision anchor.",
      "Identify what remains stable across situations.",
      "Use context to adapt, not to change your core approach.",
      "Stabilize how you respond to similar patterns over time.",
    ],
  },
};