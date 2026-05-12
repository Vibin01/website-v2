import { BarChart3, FileText, Target } from "lucide-react"

 export const  easyEvaluator={
        title:"Easy Evaluator",
        description:"Interview Evaluation System"
,
   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Decisions become visible",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Recruiters aim to move interviews toward clear decisions.",
      "Each interview generates evaluation signals.",
      "Every outcome reflects progress in the hiring process.",
    ],
    listTitle: "Recruiters seek a simple outcome:",
    bullets: [
      "Collect panel feedback without delay.",
      "Communicate outcomes with clarity.",
      "Maintain momentum between stages.",
    ],
    footerLines: [
      "Clear evaluation keeps the hiring process moving forward.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Signals remain fragmented",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "After interviews conclude, momentum depends on timely feedback.",
      "Panelists return to competing priorities.",
      "Evaluation signals begin to slow or remain incomplete.",
    ],
    listTitle: "During this stage:",
    bullets: [
      "Feedback arrives late or inconsistently.",
      "Recruiters follow up across panels.",
      "Communication becomes repetitive and demanding.",
    ],
    footerLines: [
      "Recruiters manage communication across multiple roles and candidates.",
      "Visibility into evaluation progress becomes difficult to maintain.",
    ],
  },

  {
    id: 3,
    title: "The Evaluation Friction",
    subtitle: "Decisions become delayed",
    contentTitle: "The Evaluation Friction",
    paragraphs: [
      "When evaluation signals slow, clarity begins to break.",
      "Feedback cycles become difficult to manage.",
      "Communication effort starts to increase.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Panel feedback remains delayed or incomplete.",
      "Follow-ups repeat across stakeholders.",
      "Outcome messages are recreated multiple times.",
    ],
    footerLines: [
      "Operational effort increases across steps.",
      "Silence begins to replace clear decisions.",
"Hiring momentum weakens between stages.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Evaluator",
  subtitle: "Interview Evaluation System",

  intro: [
    "Easy Evaluator is the interview evaluation layer of the Connect EC Alignment System.",
    "It introduces a structured evaluation flow across the hiring process.",
],

  sectionTitle: "Panel feedback becomes structured and timely:",

  points: [
    {
      title: "Alignment triggers prompt quick submission after interviews",
      description: "",
    },
    {
      title: "Panelists submit feedback using predefined evaluation inputs",
      description: "",
    },
  ],

  sectionTitle2: "Recruiters review feedback and communicate outcomes instantly:",

  points2: [
    {
      title: "Rejection responses with structured reasons",
      description: "",
    },
    {
      title: "On-hold updates with clear explanations",
      description: "",
    },
    {
      title: "Shortlist decisions for the next stage",
      description: "",
    },
  ],

  outro: [
    "Instead of repeated follow-ups and message drafting, recruiters move interviews forward with clarity.",
    "Evaluation becomes structured and transparent.",
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },


    flowSteps:[
    "Decisions become visible",
    "Communication becomes consistent",
    "Execution becomes predictable"
    ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Interview Evaluation",
  headers: [
    {
      title: "Recruiter Situation",
    },
    {
      title: "Behavior Seam",
    },
    {
      title: "Connect EC Alignment",
    },
  ],
  rows: [
    {
      left: "Collecting panel feedback",
      middle: "Panel inputs arrive late or remain incomplete",
      right: "Alignment triggers prompt panelists to submit evaluations quickly",
    },
    {
      left: "Chasing interview updates",
      middle: "Recruiters repeatedly follow up with panelists",
      right: "Centralized evaluation flow keeps feedback visible",
    },
    {
      left: "Communicating interview outcomes",
      middle: "Recruiters draft repeated rejection or “on hold” messages",
      right: "Outcome-based templates simplify candidate communication",
    },
    {
      left: "Maintaining hiring momentum",
      middle: "Feedback delays stall decisions",
      right: "Structured evaluation signals guide the next step",
    },
   
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Evaluation Alignment",
    paragraphs: [
      "Every interview contributes to evaluation alignment.",
      "Panel feedback shapes how alignment is formed.",
      "Signals make evaluation alignment visible across stages.",
      "When evaluation alignment is strong, momentum strengthens.",
      "When alignment weakens, hiring progress begins to slow.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How candidates performed in interviews.",
      "How panel feedback is progressing.",
      "When decisions are ready to move forward.",
    ],
    footerParagraphs: [
      "Structured evaluation restores alignment across hiring decisions.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Faster panel feedback across interviews.",
      "Clear and timely interview outcomes.",
      "Reduced operational workload for recruiters.",
      
    ],
    footerParagraphs:["Recruiters spend less time chasing updates and drafting messages.",
        "They move interviews from evaluation to decision without delay."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, feedback delays weaken decision momentum.",
      "Recruiters hesitate to communicate difficult outcomes.",
      "Panel feedback slows without structured evaluation.",
      "Candidates wait while decisions remain unclear.",
    ],
    highlightTitle: "Structured feedback restores momentum.",
    callout: {
      badge: "EC",
      text:"Easy Evaluator helps recruiters communicate outcomes clearly, reduce operational effort, and keep hiring decisions moving forward."
    },
  },
},

 AlignmentSectionData : {
  title: "Evaluation Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Panel feedback generates evaluation signals across interviews.",
        "Submission patterns reflect decision readiness.",
      ],
      points: [
        "Feedback indicates performance assessment",
        "Timing reflects evaluation progress",
        "Patterns reveal readiness for decisions",
      ],
      footer: [
        "Signals build a visible layer of evaluation.",
        "Evaluation becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through evaluation behavior.",
        "Signals reflect how feedback progresses across stages.",
      ],
      points: [
        "Strong alignment leads to faster decisions",
        "Weak alignment delays hiring progress",
        "Signals indicate when outcomes are ready",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Evaluation becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible evaluation restores decision clarity.",
        "Structured signals enable timely and confident outcomes.",
      ],
      points: [
        "Panel feedback is completed consistently",
        "Communication remains clear across stakeholders",
        "Hiring decisions move forward without delay",
      ],
      footer: [
        "Clarity sustains momentum between stages.",
        "Execution becomes predictable.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Every interview deserves a clear outcome.",

  description:
  "Easy Evaluator transforms evaluation behavior into visible Alignment Signals."
,
  points: [
    "Clear feedback.",
    "Simplified communication.",
    "Stronger momentum.",
  ],

  footerText: "Part of the",
  footerHighlight: "Connect EC Alignment System",
  footerSuffix:
    "aligning candidates, recruiters, and employers across the hiring journey.",

  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Clear signal growth illustration",
    width: 520,
    height: 420,
  },
}

}

 export const  easyFacilitator={
        title:"Easy Facilitator",
        description:"The Offer Transition System"
    ,

   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Commitment becomes visible",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Recruiters aim to convert accepted offers into reliable hires.",
      "Each accepted offer signals intent toward joining.",
      "Every confirmed candidate reflects progress toward closure.",
    ],
    listTitle: "Recruiters seek a simple outcome:",
    bullets: [
      "Maintain candidate commitment after acceptance.",
      "Protect hiring pipelines from last-stage risk.",
      "Ensure candidates join as planned.",
    ],
    footerLines: [
      "Reliable joining outcomes keep hiring momentum intact.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Engagement remains unclear",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "The final stage of hiring carries the highest uncertainty.",
      "Offer acceptance does not guarantee candidate commitment.",
      "A transition window emerges between acceptance and joining.",
    ],
    listTitle: "During this stage:",
    bullets: [
      "Communication slows across interactions.",
      "Competing offers begin to surface.",
      "Candidate intent starts to shift.",
    ],
    footerLines: [
      "Recruiters must manage outcomes without clear engagement signals.",
      "Visibility into candidate commitment becomes difficult to maintain.",
    ],
  },

  {
    id: 3,
    title: "The Commitment Friction",
    subtitle: "Outcomes become uncertain",
    contentTitle: "The Commitment Friction",
    paragraphs: [
      "When engagement signals fade, clarity begins to break.",
      "Post-offer commitment becomes difficult to assess.",
      "Risk accumulates silently within the pipeline.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Candidates hesitate while evaluating alternatives.",
      "Communication declines after acceptance.",
      "Commitment signals weaken or disappear.",
    ],
    footerLines: [
      "Recruiters lose visibility at the most critical stage.",
      "Dropouts reset progress and disrupt hiring plans.",
"Momentum collapses just before final conversion.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Facilitator",
  subtitle: "The Offer Transition System",

  intro: [
    "Easy Facilitator is the offer transition layer of the Connect EC Alignment  System.",
    "It maintains engagement between offer acceptance and joining.",
],

  sectionTitle: "Recruiters manage post-offer engagement in one structured environment:",

  points: [
    {
      title: "Direct chat with candidates",
      description: "",
    },
    {
      title: "Sharing team introductions and organization context",
      description: "",
    },
    {
      title: "Sending updates that reinforce the opportunity",
      description: "",
    },
  ],

  outro: [
    "These interactions keep candidates connected throughout the transition.",
    "Engagement remains active and visible until the joining date.",
    "Recruiters maintain continuity across the final stage."
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
  flowSteps:[
    "Commitment becomes visible.",
"Engagement becomes consistent",
"Joining becomes predictable."
  ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Offer Transition",
  headers: [
    {
      title: "Recruiter Situation",
    },
    {
      title: "Behavior Seam",
    },
    {
      title: "Connect EC Alignment",
    },
  ],
  rows: [
    {
      left: "Managing post-offer communication",
      middle: "Offer discussions scattered across emails and calls",
      right: "Centralized communication hub keeps conversations visible",
    },
    {
      left: "Detecting offer instability",
      middle: "Candidate intent becomes unclear after acceptance",
      right: "Engagement signals reveal shifts in candidate commitment.",
    },
    {
      left: "Strengthening candidate connection",
      middle: "Candidates feel distant from their future team",
      right: "Recruiters share videos, updates, and introductions",
    },
    {
      left: "Protecting hiring outcomes",
      middle: "Last-minute dropouts disrupt hiring plans",
      right: "Early visibility allows recruiters to reinforce commitment",
    },
   
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Commitment Alignment",
    paragraphs: [
      "The period between acceptance and joining reflects commitment alignment.",
      "Candidate engagement shapes how alignment evolves.",
      "Signals make commitment alignment visible over time.",
      "When commitment alignment is strong, confidence in joining strengthens.",
      "When alignment weakens, risk begins to emerge.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How candidate engagement is evolving.",
      "When commitment signals begin to weaken.",
      "Where intervention may be required.",
    ],
    footerParagraphs: [
      "Early visibility restores commitment alignment before breakdown.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Stronger candidate engagement across the transition stage.",
      "Earlier visibility into commitment risk.",
      "More predictable joining outcomes.",
      
    ],
    footerParagraphs:["Recruiters manage the final stage with clarity and control.",
        "They convert accepted offers into reliable hires."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, commitment does not break visibly.",
      "Communication slows before decisions change.",
      "Competing opportunities influence outcomes silently.  ",
      "Commitment breakdown becomes visible only after decisions are made.",
    ],
    highlightTitle: "Early visibility restores control.",
    callout: {
      badge: "EC",
      text:"Easy Facilitator helps recruiters maintain candidate connection, detect engagement risks early, and protect hiring outcomes."
    },
  },
},

  AlignmentSectionData : {
  title: "Commitment Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Candidate engagement generates commitment signals across the transition stage.",
        "Interaction patterns reflect intent after acceptance.",
      ],
      points: [
        "Communication indicates engagement",
        "Responsiveness reflects commitment strength",
        "Patterns reveal joining risk",
      ],
      footer: [
        "Signals build a visible layer of commitment.",
        "Commitment becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through engagement behavior.",
        "Signals reflect how commitment evolves after acceptance.",
      ],
      points: [
        "Strong alignment supports joining confidence",
        "Weak alignment introduces dropout risk",
        "Signals indicate where intervention is required",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Commitment becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible engagement restores commitment clarity.",
        "Structured signals enable proactive reinforcement before breakdown.",
      ],
      points: [
        "Candidate engagement remains active across the transition",
        "Commitment risks are identified early",
        "Joining outcomes become more reliable",
      ],
      footer: [
        "Clarity sustains momentum through final conversion.",
        "Execution becomes predictable.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Joining reflects the final commitment in the hiring journey.",

  description:
  "Easy Facilitator transforms post-offer engagement behavior into visible Alignment Signals."
,
  points: [
    "Stronger engagement.",
    "Clearer commitment.",
    "More reliable hires.",
  ],

  footerText: "Part of the",
  footerHighlight: "Connect EC Alignment System",
  footerSuffix:
    "aligning candidates, recruiters, and employers across the hiring journey.",

  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Clear signal growth illustration",
    width: 520,
    height: 420,
  },
}

}

 export const  easyScheduler={
        title:"Easy Scheduler",
        description:"The Interview Coordination System"
    ,

   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Coordination becomes visible",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Recruiters aim to move interviews forward with clarity and momentum.",
      "Each interaction generates coordination signals.",
      "Every scheduled interview reflects progress toward a decision.",
    ],
    listTitle: "Recruiters seek a simple outcome:",
    bullets: [
      "Keep interviews organized across stages.",
      "Maintain timely and consistent responses.",
      "Ensure alignment across candidates and interview panels",
    ],
    footerLines: [
      "Clear coordination keeps the hiring process moving forward.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Schedules remain fragmented",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "Interview coordination rarely exists in one place.",
      "Recruiters manage schedules across multiple channels.",
      "Availability shifts continuously across candidates and panels.",
    ],
    listTitle: "Information flows through:",
    bullets: [
      "Emails and calendar tools.",
      "Messages and follow-ups.",
      "Panel availability and schedule changes.",
    ],
    footerLines: [
      "Recruiters must track evolving inputs while managing active pipelines.",
      "A single, reliable view of the schedule becomes difficult to maintain.",
    ],
  },

  {
    id: 3,
    title: "The Coordination Friction",
    subtitle: "Execution becomes fragmented",
    contentTitle: "The Coordination Friction",
    paragraphs: [
      "When coordination spreads across channels, clarity begins to break.",
      "Coordination alignment becomes difficult to maintain.",
      "Consistency in execution starts to decline.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Invitations get lost in threads.",
      "Responses are delayed or missed.",
      "Schedule changes fail to reach all participants.",
    ],
    footerLines: [
      "Recruiters repeat coordination efforts across steps.",
      "Execution effort increases, while coordination clarity decreases.",
"Hiring momentum weakens before interviews even begin.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Scheduler",
  subtitle: "The Interview Coordination System",

  intro: [
    "Easy Scheduler is the interview coordination layer of the Connect EC Alignment System.",
    "It brings interview coordination into a single, structured environment.",
],

structuredData: {
  items: [
    {
      title: "Interview schedules remain visible by timeline:",
      values: ["Today", "Tomorrow", "This Week"],
    },
    {
      title: "Recruiters gain visibility into candidate responses:",
      values: ["Accepted", "Pending", "Yet to Accept"],
    },
  ],
},


  sectionTitle: "Candidate actions remain visible:",

  points: [
    {
      title: "Accept interview invitations",
      description: "",
    },
    {
      title: "Decline interviews",
      description: "",
    },
    {
      title: "Reschedule when availability changes",
      description: "",
    },
  ],

  outro: [
    "Panels receive automatic updates without manual follow-ups.",
    "Recruiters maintain alignment across candidates and interview panels.",
    "Coordination becomes structured and predictable.",
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
  flowSteps:[
    "Coordination becomes visible",
"Responses become consistent",
"Execution becomes predictable."
  ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Interview Coordination",
  headers: [
    {
      title: "Recruiter Situation",
    },
    {
      title: "Behavior Seam",
    },
    {
      title: "Connect EC Alignment",
    },
  ],
  rows: [
    {
      left: "Managing interviews across multiple candidates",
      middle: "Invitations scattered across channels",
      right: "Centralized scheduling keeps all interviews visible",
    },
    {
      left: "Tracking candidate responses",
      middle: "Delayed confirmations slow coordination",
      right: "Real-time response status indicators",
    },
    {
      left: "Keeping interview panels updated",
      middle: "Schedule changes missed across channels",
      right: "Automated notifications update panels instantly",
    },
    {
      left: "Maintaining hiring momentum",
      middle: "Coordination gaps stall the process",
      right: "Clear responses keep coordination aligned",
    },
   
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Coordination Alignment",
    paragraphs: [
      "Interview coordination reflects coordination alignment in the hiring process.",
      "Candidate responses shape how alignment develops across interviews.",
      "Signals make coordination alignment visible over time.",
      "When coordination alignment is strong, interview momentum strengthens.",
      "When alignment weakens, coordination risks begin to emerge.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How candidates respond to interview coordination.",
      "When scheduling stability begins to shift.",
      "Where coordination risks may emerge.",
    ],
    footerParagraphs: [
      "Early visibility restores coordination alignment across interviews.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Clear and structured interview schedules.",
      "Responsive coordination across stakeholders.",
      "Predictable and stable interview preparation.",
      
    ],
    footerParagraphs:["Recruiters spend less time managing logistics.",
        "They maintain hiring momentum with confidence."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, coordination reflects early alignment in the hiring process.",
      "Delayed responses introduce uncertainty.",
      "Fragmented communication weakens momentum.",
      "Missed updates disrupt preparation.",
    ],
    highlightTitle: "Clear coordination restores alignment.",
    callout: {
      badge: "EC",
      text:"Easy Scheduler helps recruiters maintain interview momentum, coordinate candidates and panels clearly, and advance hiring decisions with confidence."
    },
  },
},

  AlignmentSectionData : {
  title: "Employer Insight Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Interview interactions generate coordination signals.",
        "Candidate responses provide signals of engagement and intent.",
      ],
      points: [
        "Responses indicate participation",
        "Timing reflects commitment",
        "Patterns reveal coordination flow",
      ],
      footer: [
        "Signals build a visible layer of coordination.",
        "Coordination becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through coordination behavior.",
        "Signals reflect how execution evolves across interview stages.",
      ],
      points: [
        "Strong alignment sustains interview momentum",
        "Weak alignment creates coordination gaps",
        "Signals indicate where coordination is shifting",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Coordination becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible coordination restores execution clarity.",
        "Structured signals enable stable and reliable coordination.",
      ],
      points: [
        "Interview schedules remain organized and predictable",
        "Stakeholder communication stays consistent",
        "Interview readiness remains consistent across stages",
      ],
      footer: [
        "Clarity sustains momentum across interviews.",
        "Execution becomes predictable.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Interview coordination reflects early coordination in the hiring journey.",

  description:
  "Easy Scheduler transforms interview interactions into visible coordination signals."
,
  points: [
    "Organized schedules.",
    "Clear responses.",
    "Stronger hiring momentum.",
  ],

  footerText: "Part of the",
  footerHighlight: "Connect EC Alignment System",
  footerSuffix:
    "aligning candidates, recruiters, and employers across the hiring journey.",

  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Clear signal growth illustration",
    width: 520,
    height: 420,
  },
}

}

export const  easyPredictor={
        title:"Easy Predictor",
        description:"The Interview Transition System"
    ,

   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Attendance becomes visible",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Recruiters aim to move interviews forward with reliability.",
      "Each scheduled interview reflects an expected commitment.",
      "Every confirmed interaction supports hiring progress.",
    ],
    listTitle: "Recruiters seek a simple outcome:",
    bullets: [
      "Ensure candidates attend as scheduled.",
      "Protect panel time and availability.",
      "Maintain momentum across interviews.",
    ],
    footerLines: [
      "Reliable participation keeps the hiring process moving forward.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Intent remains hidden",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "Interview schedules are confirmed across roles every day.",
      "Candidates accept invitations, and panels prepare.",
      "But confirmation does not guarantee attendance.",
    ],
    listTitle: "Between confirmation and the interview:",
    bullets: [
      "Candidate priorities shift.",
      "Engagement weakens without visibility.",
      "Misalignment develops silently.",
    ],
    footerLines: [
      "These changes remain invisible to recruiters.",
      "Confirmation creates the illusion of commitment.",
      "Assumed attendance replaces verified commitment.",
    ],
  },

  {
    id: 3,
    title: "The Participation Friction",
    subtitle: "Reliability becomes uncertain",
    contentTitle: "The Participation Friction",
    paragraphs: [
      "When participation alignment remains hidden,  clarity begins to break.",
      "Attendance cannot be reliably predicted.",
      "Disruptions appear at the last moment.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Candidates confirm but fail to attend.",
      "Panels wait without clear updates.",
      "Schedules collapse unexpectedly.",
    ],
    footerLines: [
      "Recruiters restart coordination across steps.",
      "Effort increases while reliability decreases.",
"Hiring momentum weakens with each missed interaction.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Predictor",
  subtitle: "The Interview Transition System",

  intro: [
    "Easy Predictor is the interview transition layer of the Connect EC Alignment System.",
    "It provides early visibility into participation risk between confirmation and attendance.",
],

  sectionTitle: "Participation signals become visible before interviews:",

  points: [
    {
      title: "Delayed responses",
      description: "",
    },
    {
      title: "Missed reminders",
      description: "",
    },
    {
      title: "Reduced interaction with interview updates",
      description: "",
    },
  ],

  outro: [
    "These signals indicate when commitment begins to weaken.",
    "Recruiters gain early visibility before disruption occurs.",
    "Panels are protected from last-minute no-shows.",
    "Interview coordination becomes more reliable."
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
  flowSteps:[
    "Attendance becomes visible",
    "Engagement becomes consistent",
    "Participation becomes predictable"
  ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Interview Transition",
  headers: [
    {
      title: "Recruiter Situation",
    },
    {
      title: "Behavior Seam",
    },
    {
      title: "Connect EC Alignment",
    },
  ],
  rows: [
    {
      left: "Detecting potential interview no-shows",
      middle: "Engagement decline remains invisible",
      right: "Predictor surfaces early participation signals",
    },
    {
      left: "Protecting panel schedules",
      middle: "Panels lose time when candidates do not attend",
      right: "Early signals allow recruiters to adjust schedules",
    },
    {
      left: "Understanding candidate commitment",
      middle: "Recruiters rely on intuition or guesswork",
      right: "Behavioral signals convert responsiveness into visible indicators",
    },
    {
      left: "Maintaining hiring momentum",
      middle: "Missed interviews disrupt coordination",
      right: "Early visibility enables proactive intervention",
    },
   
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Participation Alignment",
    paragraphs: [
      "Candidate interactions reflect participation alignment in the hiring process.",
      "Responses shape how alignment develops before interviews.",
      "Signals expose participation alignment before disruption occurs.",
      "When participation alignment is strong, interview momentum strengthens.",
      "When alignment weakens, disruption becomes inevitable.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How candidates respond to interview coordination.",
      "When engagement begins to decline.",
      "Early visibility restores participation alignment before breakdown.",
    ],
    footerParagraphs: [
      "Early visibility restores coordination alignment across interviews.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Protected panel time across interviews.",
      "Stronger reliability in candidate attendance.",
      "Earlier visibility into engagement risk.",
      
    ],
    footerParagraphs:["Recruiters focus on candidates most likely to follow through.",
        "They maintain interview momentum with greater confidence."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, disengagement does not appear gradually.",
      "Delayed responses create early uncertainty.",
      "Reduced interaction signals declining momentum.",
      "Without visibility, signals surface only at failure.",
    ],
    description:["By the time disruption is visible, intervention is no longer possible."],
    highlightTitle: "Early visibility restores control.",
    callout: {
      badge: "EC",
      text:"Easy Predictor helps recruiters identify engagement risks early, reinforce candidate interest, and maintain stable interview momentum."
    },
  },
},

 AlignmentSectionData : {
  title: "Participation Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Candidate interactions generate participation signals.",
        "Engagement patterns reflect intent before interviews.",
      ],
      points: [
        "Responses indicate participation",
        "Timing reflects engagement strength",
        "Patterns reveal attendance risk",
      ],
      footer: [
        "Signals build a visible layer of participation.",
        "Participation becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through participation behavior.",
        "Signals reflect how commitment evolves before interviews.",
      ],
      points: [
        "Strong alignment supports attendance reliability",
        "Weak alignment introduces participation risk",
        "Signals indicate where breakdown may occur",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Participation becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible participation restores coordination reliability.",
        "Structured signals enable proactive intervention before disruption.",
      ],
      points: [
        "Panel time remains protected",
        "Attendance reliability improves across interviews",
        "Participation risks are identified early",
      ],
      footer: [
        "Early visibility sustains interview momentum.",
        "Execution becomes predictable.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Interview attendance reflects candidate commitment.",

  description:
  "Easy Predictor transforms engagement behavior into visible participation signals:"
,
  points: [
    "Earlier visibility.",
    "Stronger reliability.",
    "Protected panel time.",
  ],

  footerText: "Part of the",
  footerHighlight: "Connect EC Alignment System",
  footerSuffix:
    "aligning candidates, recruiters, and employers across the hiring journey.",

  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Clear signal growth illustration",
    width: 520,
    height: 420,
  },
}

}