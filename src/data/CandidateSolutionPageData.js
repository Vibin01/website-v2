import { BarChart3, FileText, Target } from "lucide-react"

 export const  easyEvaluator={
        title:"Easy Evaluator",
        description:"The Feedback Transparency System"
    ,
    


 InsightTabItem: [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Evaluation becomes visible",
    icon: <span className="text-[#0668E1] text-xl">👥</span>,
    contentTitle: "The Aspiration",
    paragraphs: [
      "Candidates want to understand how they are evaluated.",
      "Each application reflects effort and inte  nt.",
      "Every interview represents an opportunity to improve.",
    ],
    listTitle: "Candidates seek a simple outcome:",
    bullets: [
      "Understand how decisions were made.",
      "Learn from each hiring interaction.",
      "Improve their next step.",
    ],
    footerLines: [
      "Clear feedback helps candidates grow with every experience.",
    ],
  },
  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Decisions remain unclear",
    icon: <span className="text-[#0668E1] text-xl">👥</span>,
    contentTitle: "The Changing Situation",
    paragraphs: [
      "Across many hiring processes, outcomes remain unclear.",
      "Candidates often wait without clarity into decisions.",
    ],
    listTitle: "After applying or interviewing:",
    bullets: [
      "Updates may be delayed or absent.",
      "Rejections arrive without explanation.",
      "Outcomes remain open-ended or unclear.",
    ],
    footerLines: [
      "Candidates continue investing effort across opportunities.",
      "Visibility into evaluation becomes difficult to access.",
    ],
  },
  {
    id: 3,
    title: "The Learning Friction",
    subtitle: "Learning becomes fragmented",
    icon: <span className="text-[#0668E1] text-xl">👥</span>,
    contentTitle: "The Learning Friction",
    paragraphs: [
      "When feedback is unclear, clarity begins to break.",
      "Evaluation signals become difficult to interpret.",
      "Learning slows across hiring experiences.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Silence creates ongoing uncertainty.",
      "Generic responses provide little insight.",
      "Delayed updates disrupt decision-making.",
    ],
    footerLines: [
      "Candidates are left guessing what to improve.",
      "Each experience becomes isolated instead of cumulative.",
      "Progress weakens without clear learning signals.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Evaluator",
  intro: [
    "Easy Evaluator is the feedback transparency layer of the Connect EC Alignment System.",
    "It brings structured feedback into the hiring journey.",
  ],
  sectionTitle: "Candidates receive feedback across three stages:",
  points: [
    {
      title: "Resume Feedback",
      description: "how the profile was evaluated",
    },
    {
      title: "Interview Feedback",
      description:
        "performance and evaluation factors",
    },
    {
      title: "Offer-Stage Feedback",
      description: "why decisions did not progress",
    },
  ],
  outro: [
    "Candidates gain visibility into how applications and interviews are assessed.",
    "Every opportunity becomes a step toward better preparation.",
    "Feedback becomes structured and transparent.",
    "Learning becomes continuous across opportunities."
  ],
  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Evaluator UI Preview",
  },
  flowSteps: [
    "Evaluation becomes visible",
    "Learning becomes consistent",
    "Improvement becomes continuous",
  ]
},


 AlignmentComparisonData : {
  sectionTitle: "Aligning Feedback Transparency",
  headers: [
    {
      title: "Candidate Situation",
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
      left: "Waiting for interview outcomes",
      middle: "Feedback may take days or remain unclear",
      right: "Structured feedback encourages timely updates",
    },
    {
      left: "Understanding hiring decisions",
      middle: "Rejections often arrive without explanation",
      right: "Feedback includes clear evaluation insights",
    },
    {
      left: "Planning next career steps",
      middle: "Unclear outcomes delay next actions",
      right: "Clear status updates: shortlisted, rejected, or on hold",
    },
    {
      left: "Improving interview performance",
      middle: "Candidates lack insight into evaluation criteria",
      right: "Stage-based feedback provides structured guidance",
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
      "Feedback reflects evaluation alignment in the hiring process.",
      "Each interaction contributes to how alignment is formed.",
      "Signals make this alignment visible across stages.",
      "When evaluation alignment is clear, learning strengthens.",
      "When alignment weakens, progress begins to slow.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How their profile was assessed.",
      "How interview performance was evaluated.",
      "Why decisions progressed or stopped.",
    ],
    footerParagraphs: [
      "Structured feedback restores evaluation alignment across stages.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Clear visibility into interview outcomes.",
      "Meaningful insight into performance.",
      "Better preparation for future opportunities.",
      
    ],
    footerParagraphs:[
        "Candidates understand how they are evaluated at every stage.",
      "They move forward with clarity and confidence.",
    ],
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, feedback drives learning signals.",
      "Delayed responses create uncertainty.",
      "Generic messages create confusion.",
      "Silence weakens improvement.",
    ],
    highlightTitle: "Structured feedback restores clarity.",
    callout: {
      badge: "EC",
      text: "Easy Evaluator helps candidates understand decisions, improve preparation, and approach the next opportunity with greater awareness.",
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
        "Feedback generates learning signals across hiring stages.",
        "Each interaction reflects how candidates are evaluated.",
      ],
      points: [
        "Resume signals reflect profile fit",
        "Interview signals reflect performance",
        "Outcome signals reflect selection factors",
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
        "Alignment becomes visible through evaluation patterns.",
        "Signals reflect how performance aligns with expectations.",
      ],
      points: [
        "Strong alignment leads to clearer outcomes",
        "Weak alignment creates uncertainty",
        "Signals indicate areas for improvement",
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
        "Visible feedback restores learning clarity.",
        "Structured signals enable continuous improvement.",
      ],
      points: [
        "Candidates understand how they are evaluated",
        "Preparation becomes more focused and effective",
        "Future decisions become more informed",
      ],
      footer: [
        "Clarity strengthens learning across opportunities.",
        "Progress becomes predictable.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Every interview experience reveals meaningful insight.",

  description:
    "Easy Evaluator transforms hiring outcomes into visible learning signals.",

  points: [
    "Clear feedback.",
    "Better preparation.",
    "Stronger opportunities.",
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
        description:"The Offer Decision System"
    ,

   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Offers made Visible.",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Candidates aim to evaluate opportunities before making a decision.",
      "Each offer represents a critical career milestone.",
      "Every decision shapes the next step forward.",
    ],
    listTitle: "Candidates seek a simple outcome:",
    bullets: [
      "Review opportunities with clarity.",
      "Communicate decisions with confidence.",
      "Choose roles aligned with their goals.",
    ],
    footerLines: [
      "Clear offer conversations support thoughtful decision-making.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation  ",
    subtitle: "Conversations stay fragmented",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "At the offer stage, conversations expand across channels.",
      "Candidates engage with multiple stakeholders and organizations.",
    ],
    listTitle: "Offer details begin to spread across interactions.",
    bullets: [
      "Offer letters shared via email.",
      "Negotiations conducted over calls.",
      "Updates appearing across messages.",
    ],
    footerLines: [
      "Candidates must track multiple discussions simultaneously.",
      "Comparing opportunities becomes difficult.",
    ],
  },

  {
    id: 3,
    title: "The Decision Friction",
    subtitle: "Decisions become fragmented",
    contentTitle: "The Decision Friction",
    paragraphs: [
      "When the offer communication spreads, clarity begins to break.",
      "Decision alignment becomes difficult to maintain.",
      "Confidence in communication starts to decline.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Offer details get buried in threads.",
      "Negotiations fragment across conversations.",
      "Follow-ups lack a clear context.",
    ],
    footerLines: [
      "Candidates hesitate during critical decisions.",
      "Communication becomes inconsistent across offers.",
      "Confident decision-making becomes harder to achieve.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Facilitator",
  subtitle: "The Offer Decision System",

  intro: [
    "Easy Facilitator is the offer decision layer of the Connect EC Alignment System.",
    "It brings offer conversations and decisions into a single, structured environment.",
  ],

  sectionTitle: "Candidates can:",

  points: [
    {
      title: "Accept an offer",
      description: "",
    },
    {
      title: "Decline an offer",
      description: "",
    },
    {
      title: "Request time to evaluate",
      description: "",
    },
  ],

  outro: [
    "All offer details remain visible in one organized space.",
    "Candidates can review multiple opportunities and track each discussion.",
    "Built-in recruiter chat keeps communication clear during the final decision stage.",
    "Offer communication becomes structured and transparent.",
    "Candidates stay in control while evaluating their next step.",
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
    flowSteps: [
    "Decisions become visible",
    "Communication becomes consistent",
    "Commitment becomes clear",
  ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Offer Decisions",
  headers: [
    {
      title: "Candidate Situation",
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
      left: "Reviewing offer details",
      middle: "Offer discussions appear across scattered emails and messages",
      right: "Centralized offer hub organizes all offer details",
    },
    {
      left: "Comparing multiple opportunities",
      middle: "Conversations with different employers become difficult to track",
      right: "Structured view of all offers and their status",
    },
    {
      left: "Communicating decisions",
      middle: "Accepting or declining offers requires multiple communications",
      right: "Simple Accept or Decline actions streamline responses",
    },
    {
      left: "Requesting time to decide",
      middle: "Candidates hesitate to ask for more time",
      right: "Evaluate option allows candidates to request decision time",
    },
    {
        left:"Maintaining recruiter communication",
        middle:"Follow-ups become fragmented across channels",
        right:"Built-in recruiter chat keeps discussions organized"
    }
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Decision Alignment",
    paragraphs: [
      "The offer stage reflects decision alignment in the hiring journey.",
      "Candidate actions shape how alignment is formed.",
      "Signals make commitment alignment visible across decisions.",
      "When decision alignment is strong, clarity holds across stakeholders.",
      "When alignment weakens, uncertainty begins to grow.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "Accept an offer",
      "Decline an offer",
      "Request time to evaluate.",
    ],
    footerParagraphs: [
      "Structured communication restores alignment across decisions.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Clear and structured offer discussions.",
      "Organized communication across opportunities.",
      "Confident and timely career decisions.",
      
    ],
    footerParagraphs:["Candidates evaluate options with clarity and consistency.",
        "They move forward with confidence."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, the offer stage reveals commitment signals.",
      "Delayed responses create uncertainty.",
      "Scattered communication weakens clarity.",
      "Unclear decisions disrupt planning.",
    ],
    highlightTitle: "Transparent communication restores alignment.",
    callout: {
      badge: "EC",
      text:"Easy Facilitator helps candidates evaluate opportunities, communicate decisions clearly, and move forward with confidence."
    },
  },
},

  AlignmentSectionData : {
  title: "Decision Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Offer decisions generate commitment signals across interactions.",
        "Candidate actions reflect intent and engagement.",
      ],
      points: [
        "Accepting reflects commitment",
        "Declining reflects direction",
        "Evaluation reflects consideration",
      ],
      footer: [
        "Signals build a visible layer of decision-making.",
        "Commitment becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through decision behavior.",
        "Signals reflect how candidates engage with opportunities.",
      ],
      points: [
        "Strong alignment leads to clear decisions",
        "Weak alignment creates uncertainty",
        "Signals indicate decision readiness",
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
        "Visible decisions restore clarity across stakeholders.",
        "Structured signals enable confident and timely decisions.",
      ],
      points: [
        "Candidates evaluate opportunities with clarity",
        "Communication remains consistent across offers",
        "Decisions are made with confidence",
      ],
      footer: [
        "Clarity sustains momentum in the final stage.",
        "Decisions become predictable.",
      ],
    },
  ],
},


outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Every offer represents a career decision.",

  description:
  "Easy Facilitator transforms offer conversations into visible commitment signals."
,
  points: [
    "Organized discussions.",
    "Transparent decisions.",
    "Confident career moves.",
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
      "Candidates pursue opportunities across multiple companies.",
      "Each interview signals progress.",
      "Every interaction moves decisions forward.",
    ],
    listTitle: "Candidates seek to:",
    bullets: [
      "Stay organized across opportunities.",
      "Respond clearly and on time.",
      "Maintain momentum between stages.",
    ],
    footerLines: [
      "Clear coordination enables candidates to demonstrate reliability, professionalism, and commitment.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Updates remain fragmented",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "Modern job searches rarely follow a single track.",
      "Candidates engage with multiple organizations simultaneously.",
    ],
    listTitle: "Interview updates arrive across:",
    bullets: [
      "Emails and calendar invites.",
      "Messages and recruiter calls.",
      "Changing schedules and availability.",
    ],
    footerLines: [
      "Candidates must track evolving commitments while continuing their search.",
      "Critical updates remain scattered across channels.",
    ],
  },

  {
    id: 3,
    title: "The Coordination Friction",
    subtitle: "Progress becomes fragmented",
    contentTitle: "The Coordination Friction",
    paragraphs: [
      "When coordination spreads across channels, clarity begins to break.",
      "Alignment becomes harder to maintain.",
      "Timely responses become difficult.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Invitations are missed or buried",
      "Updates remain split across threads",
      "Questions go unanswered or delayed",
    ],
    footerLines: [
      "Even with strong intent, silence can appear as disengagement.",
      "Opportunities move fast—coordination clarity becomes essential.",
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

  sectionTitle: "Candidates can:",

  points: [
    {
      title: "Accept interview invitations instantly",
      description: "",
    },
    {
      title: "Decline when necessary",
      description: "",
    },
    {
      title: "Reschedule when availability changes",
      description: "",
    },
  ],

  outro: [
    "All interview commitments remain visible in one place.",
    "Alignment Triggers prompt timely responses.",
    "Direct recruiter chat enables quick clarification.",
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
    flowSteps: ["Coordination becomes visible",
      "Responses become consistent",
      "Momentum is maintained"
    ]
},

 AlignmentComparisonData : {
  sectionTitle: "Coordination Alignment in Practice",
  headers: [
    {
      title: "Candidate Situation",
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
      left: "Managing interviews across multiple companies",
      middle: "Invitations arrive across fragmented channels",
      right: "Centralized dashboard organizes all interview schedules",
    },
    {
      left: "Clarifying interview details",
      middle: "Questions get buried in threads",
      right: "Direct recruiter chat enables clarity",
    },
    {
      left: "Responding to interview invitations",
      middle: "Delays signal uncertainty",
      right: "Alignment Triggers prompt responses",
    },
    {
      left: "Handling schedule changes",
      middle: "Updates fragmented",
      right: "Real-time notifications maintain alignment",
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
      "When alignment weakens, coordination gaps begin to emerge.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How interview coordination is being managed.",
      "When scheduling consistency begins to shift.",
      "Where coordination gaps may emerge.",
    ],
    footerParagraphs: [
      "Clear visibility restores coordination alignment across interviews.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Clear coordination across opportunities.",
      "Timely and consistent responses.",
      "Stronger signals of reliability.",
      
    ],
    footerParagraphs:["Candidates stay organized throughout the process.",
        "They maintain momentum across interviews."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, timing reflects coordination alignment:",
      "Delayed responses create uncertainty.",
      "Missed invitations weaken coordination alignment.",
      "Fragmented communication introduces noise.",
    ],
    highlightTitle: "Structured coordination restores clarity.",
    callout: {
      badge: "EC",
      text:"Easy Scheduler helps candidates respond clearly, maintain professional momentum, and signal reliability throughout the interview process."
    },
  },
},

  AlignmentSectionData : {
  title: "Coordination Alignment",
  cards: [
    {
      icon: BarChart3,
      title: "Signal Visibility",
      description: [
        "Coordination signals emerge through execution.",
        "Candidate responses generate signals across interviews.",
      ],
      points: [
        "Responses reflect engagement",
        "Timing reflects intent",
        "Patterns begin to form",
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
        "Alignment becomes visible through decision behavior.",
        "Signals reflect how coordination evolves across interviews.",
      ],
      points: [
        "Strong alignment strengthens interview momentum",
        "Weak alignment creates coordination gaps",
        "Signals indicate where alignment is shifting",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Alignment becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible coordination restores clarity.",
        "Clear signals enable consistent participation across interviews.",
      ],
      points: [
        "Candidates stay organized across opportunities",
        "Responses remain timely and consistent",
        "Signals of reliability strengthen",
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
    "Interview coordination reflects candidate intent.",

  description:
  "Easy Scheduler transforms coordination behavior into visible alignment signals:"
,
  points: [
    "Clear coordination.",
    "Timely responses.",
    "Stronger reliability.",
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

 export const  easyReviewer={
        title:"Easy Reviewer",
        description:"The Employer Insight System"
    ,

   InsightTabItem:   [
  {
    id: 1,
    title: "The Aspiration",
    subtitle: "Insights made Visible.",
    contentTitle: "The Aspiration",
    paragraphs: [
      "Candidates want to understand an employer before engaging.",
      "Each opportunity requires informed preparation.",
      "Every decision depends on reliable insight.",
    ],
    listTitle: "Candidates seek a simple outcome:",
    bullets: [
      "Understand the hiring process clearly.",
      "Prepare effectively for interviews.",
      "Evaluate opportunities with confidence.",
    ],
    footerLines: [
      "Reliable employer insight helps candidates act with clarity and readiness.",
    ],
  },

  {
    id: 2,
    title: "The Changing Situation",
    subtitle: "Sources remain fragmented",
    contentTitle: "The Changing Situation",
    paragraphs: [
      "Employer insights rarely exist in one place.",
      "Candidates search across multiple platforms for information.",
      "Information varies in quality, relevance, and trust.",
    ],
    listTitle: "Insights emerge from:",
    bullets: [
      "Anonymous reviews and shared experiences.",
      "Forum discussions and community threads.",
      "Outdated posts and unverified sources.",
    ],
    footerLines: [
      "Candidates must interpret scattered inputs before deciding.",
      "Credibility becomes difficult to establish.",
    ],
  },

  {
    id: 3,
    title: "The Preparation Friction  ",
    subtitle: "Preparation stays fragmented",
    contentTitle: "The Preparation Friction  ",
    paragraphs: [
      "When insight sources are unclear, clarity begins to break.",
      "Preparation alignment becomes difficult to maintain.",
      "Confidence in decisions starts to decline.",
    ],
    listTitle: "As a result:",
    bullets: [
      "Anonymous feedback creates doubt.",
      "Outdated information reduces relevance.",
      "Unverified opinions introduce noise.",
    ],
    footerLines: [
      "Candidates struggle to identify reliable insights.",
      "Preparation becomes inconsistent across opportunities.",
"Decision quality weakens without credible insight.",
    ],
  },
],

FeatureHighlightData : {
  title: "Easy Reviewer",
  subtitle: "The Employer Insight System",

  intro: [
    "Easy Reviewer is the employer insight layer of the Connect EC Alignment System.",
    "It brings verified employer insights into a single, structured environment.",
],



  sectionTitle: "Candidates can:",

  points: [
    {
      title: "Read reviews from candidates who attended interviews",
      description: "",
    },
    {
      title: "Access insights directly alongside job postings",
      description: "",
    },
    {
      title: "Connect with reviewers to clarify details",
      description: "",
    },
  ],

  sectionTitle2: "Candidates gain visibility into:",
points2:[
    {
        title:"Interview structure",
        description: ""
    },{
        title:"Typical interview questions",
        description: ""
    },{
        title:"Overall interview experience",
        description: ""
    },
  ],
  outro: [
    "Reviewer profiles display Signals indicating credibility.",
    "Employer insight becomes structured and trustworthy.",
    "Credibility signals enable confident interpretation.",
  ],

  image: {
    src: "/candidate/easy-evalution.svg",
    alt: "Easy Facilitator UI Preview",
  },
  flowSteps:[
    "Insight becomes visible",
    "Preparation becomes consistent",
"Decisions become confident"
  ]
},

 AlignmentComparisonData : {
  sectionTitle: "Aligning Employer Insight",
  headers: [
    {
      title: "Candidate Situation",
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
      left: "Understanding the interview process",
      middle: "Online reviews are anonymous and difficult to trust",
      right: "Only candidates who attended the interview can submit employer reviews",
    },
    {
      left: "Preparing for interviews",
      middle: "Limited visibility into interview structure or expectations",
      right: "Verified reviews provide real interview insights",
    },
    {
      left: "Asking clarifying questions",
      middle: "Candidates cannot interact with reviewers",
      right: "Built-in chat enables direct conversations with reviewers",
    },
    {
      left: "Identifying reliable feedback",
      middle: "Difficult to judge review credibility",
      right: "Reviewer profiles display Alignment Signals indicating credibility",
    },
   
  ],
},

 InsightOutcomeData : {
  mainCard: {
    image: {
      src: "/candidate/understanding-alignment.svg",
      alt: "Understanding Feedback Signals",
    },
    title: "Understanding Reviewer Alignment",
    paragraphs: [
      "Every review reflects a real interview experience.",
      "Verified participation strengthens the credibility of insight.",
      "Each contribution signals alignment with the hiring journey.",
      "When alignment is strong, insight reliability increases.",
      "When alignment is unclear, confidence in information weakens.",
    ],
    listTitle: "Alignment becomes visible through signals that show:",
    bullets: [
      "How credible a reviewer’s experience is.",
      "How closely actions align with the hiring process.",
      "When insights can be trusted for preparation.",
    ],
    footerParagraphs: [
      "Structured insight restores alignment in interview preparation.",
    ],
  },
  outcomeCard: {
    title: "The Outcome",
    bullets: [
      "Clear and credible employer insights.",
      "Focused and effective interview preparation.",
      "More informed career decisions.",
      
    ],
    footerParagraphs:["Candidates evaluate opportunities with greater clarity.",
        "They approach interviews with confidence."
    ]
  },
  behavioralCard: {
    title: "Behavioral Insight",
    paragraphs: [
      "In hiring, preparation depends on credible information.",
      "Anonymous opinions introduce noise.",
      "Unverified feedback creates uncertainty.",
      "Scattered insights weaken preparation clarity.",
    ],
    highlightTitle: "Verified signals restore trust.",
    callout: {
      badge: "EC",
      text:"Easy Reviewer helps candidates access reliable insights, prepare with confidence, and approach interviews with greater awareness."
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
        "Verified interview experiences generate reliable insight signals.",
        "Candidate participation strengthens the credibility of information.",
      ],
      points: [
        "Signals reflect real interview experiences",
        "Participation indicates relevance",
        "Patterns reveal insight reliability",
      ],
      footer: [
        "Signals build a visible layer of employer insight.",
        "Insight becomes observable.",
      ],
    },
    {
      icon: FileText,
      title: "Alignment State",
      description: [
        "Alignment becomes visible through reviewer behavior.",
        "Signals reflect how closely insight aligns with the hiring process.",
      ],
      points: [
        "Strong alignment increases insight reliability",
        "Weak alignment reduces confidence in information",
        "Signals indicate which insights can be trusted",
      ],
      footer: [
        "Alignment emerges through observable patterns.",
        "Insight becomes measurable.",
      ],
    },
    {
      icon: Target,
      title: "Outcome",
      description: [
        "Visible insight restores preparation clarity.",
        "Credible signals enable focused and effective preparation.",
      ],
      points: [
        "Candidates access clear and reliable insights",
        "Preparation becomes structured and consistent",
        "Decision-making becomes more informed",
      ],
      footer: [
        "Clarity strengthens preparation confidence.",
        "Decisions become confident.",
      ],
    },
  ],
},

outcomeHighlightData: {
  title: "A Clear Signal",
  subtitle:
    "Verified interview experiences transform preparation into informed decisions.",

  description:
  "Easy Reviewer converts candidate experience into visible insight signals:"
,
  points: [
    "Verified insights",
    "Credible preparation",
    "Confident decisions",
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


