import { ArrowRight } from "lucide-react";
import { FaSmile } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { PiCheckCircleDuotone } from "react-icons/pi";

export const HeroData = {
  title: "Talent Acquisition Aligned",
  sub_title: "Aligning Coordination, signals, and execution",
  description: "Creating Seamless Yield across the hiring system",
  button_text: "Unlock Alignment for Free",
  button_link: "#",
};

export const signalFlowData = {
  title: "The Shifting Priorities",

  centerImage: "/candidate/the-changing-situation.svg",
  centerText:
    "Recruiters operate inside a constantly changing hiring environment.",

  flowData: [
    {
      text: "As execution signals change, coordination becomes harder to maintain.",
    },
    {
      text: "Uncertainty begins to build.",
    },
   
  ],

  leftCards: [
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple positions",
      top: "6%",
      mobile_top:"5%",
      left: "3%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple panels",
      top: "40%",
      mobile_top:"35%",
      left: "8%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple schedules",
       top: "75%",
      mobile_top:"65%",
      left: "13%",
      mobile_left:"3%"
    },
  ],

  rightCards: [
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Interviews move",
      top: "6%",
      mobile_top:"5%",
      right: "3%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Availability changes",
     top: "40%",
      mobile_top:"35%",
      right: "8%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Priorities shift",
      top: "75%",
      mobile_top:"65%",
      right: "13%",
      mobile_right:"3%"
    },
  ],
};

export const bannerSectionData = {

  cards: [
    {
      text: "Did I clearly communicate the change to the panel?",
    },
    {
      text: "Do I need to follow up again to keep things on track? ",
    },
    {text:"Where is coordination breaking down across the process?"},
  ],
};


export const insightComparisonData= [
  {
    id: 1,
    header: {
      title: "Interview Coordination",
      label: "Seam: Recruiter ↔ Candidate",
      description:
        "Interview coordination spans emails, calendars, and messages. Managing schedules across candidates and panels becomes fragmented.",
      icon: "/candidate/interview-coordination.svg",
    },
    cards: [
      {
        title: "Recruiter Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Coordination exists across hiring workflows, but remains fragmented
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Coordination restarts repeatedly",
                "Updates are resent across stakeholders",
                "Preparation becomes fragmented",
                "Early momentum weakens",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

           
          </>
        ),
      },
      {
        title: "Recruiter Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Fragmented coordination across workflows reduces execution clarity
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Invitations spread across channels",
                "Frequent reschedules and cancellations",
                "Candidates delay responses",
                "Panels miss schedule updates",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Structured coordination across workflows restores execution clarity
            </p>

    
            <div className="space-y-sm mt-md">
              {[
                "All interviews visible by timeline",
                "Candidate responses tracked in one place",
                "Panels receive automatic updates",
                "Coordination becomes predictable",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <div>
                  <PiCheckCircleDuotone className="size-iconsize-sm text-[#0668E1]" />
                  </div>
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>

            
          </>
        ),
      },
    ],
  },

  {
    id: 2,
    header: {
      title: "Interview Transition",
      label: "Seam: Recruiter ↔ Candidate",
      description:
        "Candidate disengagement often appears only when interviews begin. Recruiters discover no-shows only after interview panels are already waiting.",
      icon: "/candidate/interview-transition.svg",
    },
    cards: [
      {
        title: "Recruiter Reality",
        data: (
          <>
          
            <p className="mt-md text-xl font-medium">
              Interview confirmation exists, but commitment remains unclear
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Confirmation does not reflect commitment",
                "Engagement signals remain invisible",
                "Drop-offs go undetected early",
                "Issues surface at the interview stage",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

          </>
        ),
      },
      {
        title: "Recruiter Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Unclear commitment before interviews create execution breakdowns
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates confirm but fail to attend",
                "Panels wait without clarity",
                "Schedules collapse on no-shows",
                "Interview reliability declines",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Early commitment visibility prevents interview execution breakdowns
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Engagement signals become visible early",
                "Drop-off risk becomes detectable",
                "Recruiters prevent no-shows",
                "Panel time stays protected",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <div>
                  <PiCheckCircleDuotone className="size-iconsize-sm text-[#0668E1]" />
                  </div>
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },

  {
    id: 3,
    header: {
      title: "Interview Evaluation",
      label: "Seam: Recruiter ↔ Candidate | Recruiter ↔ Employer",
      description:
        "Hiring momentum depends on timely feedback. But when employer direction lacks visibility into execution, feedback momentum weakens.",
      icon: "/candidate/interview-evaluation.svg",
    },
    cards: [
      {
        title: "Recruiter Reality",
        data: (
          <>
           <p className="mt-md text-xl font-medium">
              Feedback exists across stages, but remains slow and fragmented
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Feedback communication becomes heavy",
                "Repetitive outreach across channels",
                "Response cycles slow down",
                "Momentum drops between stages",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

          </>
        ),
      },
      {
        title: "Recruiter Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
             Fragmented feedback cycles delay decisions and increase effort
            </p>

            <div className="space-y-sm mt-md">
              {["Feedback is delayed or incomplete.", "Repeated follow-ups with panels.", 
              "Feedback messages recreated repeatedly","Manual updates increase workload"].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Structured feedback workflows restore speed and decision clarity
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Structured evaluation workflows",
                "Faster panel feedback through prompts",
                "Standardized feedback templates",
                "Momentum continues across stages",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <div>
                  <PiCheckCircleDuotone className="size-iconsize-sm text-[#0668E1]" />
                  </div>
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },

  {
    id: 4,
    header: {
      title: "Offer Communication",
      label: "Seam: Recruiter ↔ Candidate",
      description:
        "The final stage carries the highest uncertainty. Candidate accept offers. But between acceptance and joining, engagement signals fade.",
      icon: "/candidate/offer-communication.svg",
    },
    cards: [
      {
        title: "Recruiter Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Offer acceptance exists, but commitment remains uncertain over time
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Silence emerges between acceptance and joining",
                "Commitment weakens over time",
                "Recruiters operate under uncertainty",
                "Offer stability remains unclear",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>

            
          </>
        ),
      },
      {
        title: "Recruiter Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Limited commitment visibility creates post-offer instability and hiring risk
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates compare competing offers",
                "Communication slows after acceptance",
                "Commitment visibility is limited",
                "Dropouts reset the pipeline"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <FaSmile className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Connect EC Resolution",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Continuous visibility stabilizes commitment and joining outcomes
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Offer stage remains visible",
                "Engagement continues until joining",
                "Commitment signals are tracked",
                "Early risk becomes visible",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-xs">
                  <div>
                  <PiCheckCircleDuotone className="size-iconsize-sm text-[#0668E1]" />
                  </div>
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },
];

export const workflowAlignmentSectionData = {
  title: "The Recruiter Alignment System",
  subtitle: "Recruiters move through key execution moments:",
  footerText: "Each moment generates signals that shape hiring outcomes.",


  steps: [
    { id: 1, text: "Gathering meaningful, actionable feedback" },
    { id: 2, text: "Managing interview transitions" },
    { id: 3, text: "Coordinating interview schedules" },
    { id: 4, text: "Converting accepted offers into reliable hires" },
  ],

  leftPanel: {
    title:
      "Connect EC brings these moments together into a single, aligned system.",
    subtitle: "From Coordination to Alignment Signals",
    signals: [
      "interview transition Signals",
      "interview evaluation Signals",
      "offer transition Signals",
    ],
    description:
      "A unified behavioral system that helps recruiters manage hiring execution with clarity.",
  },

  rightPanel: {
    title:
      "When coordination, transitions, evaluations, and offers remain aligned:",
    subtitle: "Alignment Drives Execution Control",
    signals: [
      "Interview momentum remains stable",
      "Coordination becomes predictable",
      "Offers convert into committed hires",
    ],
    description:
      "Every interaction generates Alignment Signals, strengthening clarity across the hiring journey.",
  },
};

export const outcomeHighlightData = {
  title: "Execution Creates Momentum",
  subtitle:
    "When coordination, signals, and execution align, hiring pipelines stabilize.",
  points: [
    "Interviews happen on time.",
    "Feedback flows between stages.",
    "Offers convert into committed hires.",
  ],
  description: "Hiring execution becomes predictable.",
  footerText: "This is",
  footerHighlight: "Seamless Yield",
  footerSuffix: "for recruiters.",
  bottomTitle: "EASY -",
  bottomHighlight: "Everyone Achieves Seamless Yield.",
  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Momentum growth illustration",
    width: 520,
    height: 420,
  },
};

export const recruiterFaqs= [
  {
    question: "How does Connect EC help me as a recruiter?",
    points: [
      "Simplifies interview coordination",
      "Tracks candidate engagement signals",
      "Improves offer-stage follow-through",
      "Reduces drop-offs and no-shows",
    ],
  },
  {
    question: "How is this different from my current ATS?",
    points: [
      "ATS tracks applications and activity",
      "Connect EC tracks engagement and intent",
      "Identifies where candidates disengage",
      "Focuses on the interview and offer stages",
    ],
  },
  {
    question: "How do I get started?",
    points: [
      "Join your organization",
      "Log in to the platform",
      "Start managing roles and interviews",
      "Begin tracking candidate signals",
    ],
  },
  {
    question: "Do recruiters need to pay separately?",
    points: [
      "No separate payment required",
      "Included in employer plan",
      "Available from the free tier",
      "No individual subscription needed",
    ],
  },
  {
    question: "Can I use Connect EC with external candidates?",
    points: [
      "Add candidates from any source",
      "Continue interview scheduling within the system",
      "Track engagement and progress centrally",
      "No dependency on platform-only applicants",
    ],
  },
];