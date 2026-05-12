import { FaCommentDots, FaSmile } from "react-icons/fa";
import {PiCheckCircleDuotone, PiSmileyMehFill, PiSmileySad, PiSmileySadFill} from "react-icons/pi"
import { MdCheckCircle } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const HeroData = {
  title: "Career Progress, Aligned",
  sub_title: "Aligning opportunities, signals, and decisions",
  description:"Creating Seamless Yield across the hiring system",
button_text: "Unlock Alignment for Free",
  button_link: "#",

};


export const signalFlowData = {
  title: "The Changing Situation",

  centerImage: "/candidate/the-changing-situation.svg",
  centerText: "A candidate’s situation rarely stays constant during hiring process",

  flowData: [
    {
      text: "As the situation changes, alignment begins to break.",
    },
    {
      text: "And small moments of hesitation begin to appear.",
    },
    
  ],

  leftCards: [
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple calls.",
      top: "6%",
      mobile_top:"5%",
      left: "3%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple interviews.",
      top: "40%",
      mobile_top:"35%",
      left: "8%",
      mobile_left:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Multiple opportunities.",
      top: "75%",
      mobile_top:"65%",
      left: "13%",
      mobile_left:"3%"
    },
  ],

  rightCards: [
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Schedules overlap.",
      top: "6%",
      mobile_top:"5%",
      right: "3%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Priorities shift.",
      top: "40%",
      mobile_top:"35%",
      right: "8%",
      mobile_right:"3%"
    },
    {
      icon: "/candidate/the-changing-situation.svg",
      text: "Decisions evolve.",
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
      text: "How do I decline this interview without damaging the relationship?",
    },
   {
      text: "Is this opportunity truly aligned with what I’m looking for?",
    },{
      text:"Am I making the right decision — or missing a better opportunity?"
    }
  ],
};

export const insightComparisonPages = [
  {
    id: 1,
    header: {
      title: "Interview Coordination",
      label: "Seam: Candidate ↔ Recruiter",
      description:
        "Interview coordination happens across emails, calendars, and messages. Schedules fragment across tools, making it harder to respond clearly.",
      icon: "/candidate/interview-coordination.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>

          <p className="mt-md text-xl font-medium">
              Interview coordination exists, but response clarity remains uncertain across interactions
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates hesitate to respond",
                "Declining feels risky",
                "Messages are ignored or delayed",
                "Coordination becomes uncertain",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <PiSmileySadFill className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>


          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
           <p className="mt-md text-xl font-medium">
              Fragmented coordination across channels creates hesitation and delays in responses
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Invitations spread across channels",
                "Calendar updates across tools",
                "Multiple recruiters coordinating",
                "Reschedules arrive separately",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <PiSmileyMehFill className="size-iconsize-sm text-[#0668E1] scale-95" />
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
              Centralized coordination restores clarity and enables timely candidate responses
            </p>

            <div className="space-y-xs mt-md">
              {[
                "All schedules in one place",
                "Accept, decline, or reschedule easily",
                "Coordination becomes visible",
                "Responses become clear",
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
      title: "Employer Insight",
      label: "Seam: Candidate ↔ Employer",
      description:
        "Employer reviews and interview experiences online are often anonymous or outdated. Candidates struggle to identify reliable insights.",
      icon: "/candidate/employer-insight.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
            <p className="mt-md text-xl font-medium">Information exists across sources, but reliability remains unclear for candidates</p>

            <div className="space-y-sm mt-md">
              {[
                "Information feels unreliable",
                "Preparation becomes unclear",
                "Confidence drops before interviews",
                "Decisions lack grounding",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <PiSmileySadFill className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>


          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Unreliable and fragmented information creates doubt and weakens preparation 
              </p>

            <div className="space-y-sm mt-md">
              {[
                "Anonymous reviews",
                "Outdated experiences",
                "Unverified hiring claims",
                "Manipulated or biased signals",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <PiSmileyMehFill className="size-iconsize-sm text-[#0668E1] scale-95" />
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
             Verified insight signals restore trust and enable confident preparation and decisions
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Verified candidate insights",
                "Real experiences, real signals",
                "Preparation becomes clearer",
                "Decisions become informed",
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
      title: "Interview Feedback",
      label: "Seam: Candidate ↔ Recruiter",
      description:
        "After interviews, signals often disappear between stages. Feedback is expected but rarely delivered. Candidates are left waiting without visibility.",
      icon: "/candidate/interview-feedback.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Interview outcomes exist, but feedback remains unclear across hiring stages
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Candidates question outcomes",
                "Silence creates uncertainty",
                "Confidence declines",
                "Career momentum slows",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-xs">
                  <div>
                  <PiSmileySadFill className="size-iconsize-sm text-[#0668E1] scale-95" />
                  </div>
                  <p className="text-xl font-medium">{point}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Candidate Friction",
        data: (
          <>
            <p className="mt-md text-xl font-medium">
              Lack of feedback visibility creates uncertainty and slows candidate momentum
            </p>

            <div className="space-y-sm mt-md">
            {[
  "Multiple interviews across companies",
  "Different stages across roles",
  "Feedback is rarely delivered",
  "Limited visibility into progress",
].map((point, index) => (
  <div key={index} className="flex items-start gap-xs">
    
        <BsFillQuestionCircleFill className="size-iconsize-sm text-[#0668E1] scale-95" />
      
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
              Visible feedback signals restore clarity and enable continuous career progress
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Feedback signals become visible",
                "Candidates know where they stand",
                "Clarity replaces silence",
                "Momentum continues",
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
      label: "Seam: Candidate ↔ Employer",
      description:
        "Offer discussions, timelines, and negotiations often happen across scattered conversations. Candidates struggle to respond clearly ",
      icon: "/candidate/offer-communication.svg",
    },
    cards: [
      {
        title: "Candidate Reality",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Offer decisions exist, but responding clearly remains stressful and uncertain
            </p>
            <div className="space-y-sm mt-md">
              {[
                "Candidates hesitate to respond",
                "Reputation concerns increase",
                "Decisions feel stressful",
                "Delays replace clear decisions",
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
        title: "Candidate Friction",
        data: (
          <>
          <p className="mt-md text-xl font-medium">
              Competing offers and pressure create hesitation & delay decision communication
            </p>

            <div className="space-y-sm mt-md">
              {[
                "Multiple offers with different timelines",
                "Pressure for quick decisions",
                "Competing expectations",
                "Declining feels uncomfortable",
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
              Structured decision flow enables clear communication & confident offer decisions
            </p>


            <div className="space-y-sm mt-md">
              {[
                "All offers in one place",
                "Accept, decline, or evaluate offers",
                "Decisions become visible",
                "Communication stays professional",
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
  title: "The Candidate Alignment System",
  subtitle: "Every candidate moves through key moments in the hiring journey.",
  footerText: "Each moment generates signals that shape hiring outcomes.",

  steps: [
    { id: 1, text: "Attending multiple interviews" },
    { id: 2, text: "Understanding different employers" },
    { id: 3, text: "Receiving interview feedback" },
    { id: 4, text: "Making informed career decisions" },
  ],

  leftPanel: {
    title:
      "Connect EC brings these moments together into a single, aligned system.",
    subtitle: "From Experience to Alignment Signals",
    signals: [
      "Employer insight Signals",
      "Feedback visibility Signals",
      "Offer decision Signals",
    ],
    description:
      "A unified behavioral system that helps candidates move forward with clarity.",
  },

  rightPanel: {
    title:
      "When attendance, insight, feedback, and decisions remain aligned:",
    subtitle: "Alignment Builds Decision Confidence",
    signals: [
      "Preparation improves",
      "Communication remains clear",
      "Decisions become more confident",
    ],
    description:
      "Every interaction generates Alignment Signals, strengthening clarity across the hiring journey.",
  },
};

export const outcomeHighlightData = {
  title: "Confidence Creates Momentum",
  subtitle:
    "When opportunities, signals, and decisions align, candidates move forward with clarity.",
  points: [
    "Interviews become meaningful conversations.",
    "Feedback becomes visible.",
    "Offer decisions become confident choices.",
  ],
  description: "Career progress accelerates.",
  footerText: "This is",
  footerHighlight: "Seamless Yield",
  footerSuffix: "for candidates.",
  bottomTitle: "EASY -",
  bottomHighlight: "Everyone Achieves Seamless Yield.",
  image: {
    src: "/candidate/stepuparrow.svg",
    alt: "Momentum growth illustration",
    width: 520,
    height: 420,
  },
};

export const candidateFaqs= [
  {
    question: "How is Connect EC different from other job platforms?",
    points: [
      "Goes beyond job applications",
      "Covers from the interview to offer stages",
      "Keeps progress visible at every step",
      "Reduces uncertainty across decisions",
    ],
  },
  {
    question: "Do I have to pay to use Connect EC?",
    points: [
      "Free for all candidates",
      "No hidden charges",
      "No indirect costs",
      "Full access without restrictions",
    ],
  },
  {
    question: "How does Connect EC reduce uncertainty?",
    points: [
      "Clear interview schedules and timelines",
      "Timely updates across stages",
      "Visibility into application progress",
      "Fewer gaps between interactions",
    ],
  },
  {
    question: "How do I get started?",
    points: [
      "Download the app",
      "Create your profile",
      "Start applying or engaging",
      "Track all updates in one place",
    ],
  },
  {
    question: "Is my personal data safe?",
    points: [
      "Data is securely encrypted",
      "Shared only with relevant stakeholders",
      "Access is permission-controlled",
      "Privacy is maintained across interactions",
    ],
  },
];
