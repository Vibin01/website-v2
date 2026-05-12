"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type ImpactSection = {
  title: string;
  points: string[];
};

type GapPage = {
  id: number;
  title: string;
  icon: string;
  seam: string;
  dimensionInteraction: string;
  intro: string;
  impacts: ImpactSection[];
  structuralCauseImage: string;
  structuralCauseText: string[];
};

const gapPagesData: GapPage[] = [
  {
    id: 1,
    title: "Strategy Gap",
    icon: "/home/icons/strategy-gap-icon.svg",
    seam: "Employer ↔ Recruiter",
    dimensionInteraction: "Direction ↔ Execution",
    intro:
      "Employer direction weakens when visibility into recruiting execution is limited.",
    impacts: [
      {
        title: "Employer Impact",
        points: [
          "Hiring targets are missed despite high recruiting activity.",
          "Recruiting priorities drift across teams and roles.",
          "Workforce planning becomes difficult to sequence and control.",
        ],
      },
      {
        title: "Candidate Impact",
        points: [
          "Communication feels inconsistent across stages.",
          "Signals from the employer lack continuity.",
          "The hiring experience becomes fragmented.",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Priorities shift without clear direction.",
          "Execution is driven by activity rather than outcomes.",
          "Operational pressure builds over time.",
        ],
      },
    ],
    structuralCauseImage: "/home/structural-cause.svg",
    structuralCauseText: [
      "Without visibility into recruiting execution and candidate signals:",
      "Employers define hiring direction in isolation ",
      "Recruiters operate without clarity on evolving priorities.",
      "Alignment weakens between planning and execution. ",
      "As direction loses signal, execution amplifies noise.",
    ],
  },
  {
    id: 2,
    title: "Execution Gap",
    icon: "/home/icons/strategy-gap-icon.svg",
    seam: "Recruiter ↔ Candidate",
    dimensionInteraction: "Execution ↔ Situation",
    intro:
      "Recruiter execution and candidate engagement fall out of sync during the hiring process.",
    impacts: [
      {
        title: "Employer Impact",
        points: [
          "Pipeline visibility deteriorates across stages.",
          "Interview reliability declines.",
          "Hiring timelines become unpredictable.",
        ],
      },
      {
        title: "Candidate Impact",
         points: [
          "Delays and missing feedback create anxiety.",
          "Process progress becomes unclear.",
          "Next steps remain uncertain.",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Interview no-shows and cancellations increase.",
          "Coordination and preparation efforts are wasted.",
          "Rescheduling creates ongoing instability.",
        ],
      },
    ],
    structuralCauseImage: "/home/structural-cause.svg",
    structuralCauseText: [
      "Without visibility into candidate engagement and responsiveness:",
      "Recruiters coordinate interviews without clarity on candidate intent",
      "Candidates move through the process without visibility into progress.",
      "Outcomes drift through delays and drop-offs.",
      "Execution loses consistency across stages."
    ],
  },
  {
    id: 3,
    title: "Vision Gap",
    icon: "/home/icons/strategy-gap-icon.svg",
    seam: "Employer ↔ Candidate",
    dimensionInteraction: "Direction ↔ Situation",
    intro:
      "Employer direction weakens when visibility into candidate expectations and decision behaviour is limited.",
    impacts: [
      {
        title: "Employer Impact",
        points: [
          "Roles are defined without clarity on candidate expectations.",
          "Late-stage offer declines increase.",
          "Hiring timelines are disrupted by misaligned decisions.",
        ],
      },
      {
        title: "Candidate Impact",
        points: [
          "Expectations around role, compensation, and growth remain unclear.",
          "Employer signals vary across interviews and touchpoints.",
          "Confidence in decision-making weakens.",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Late-stage drop-offs reset hiring progress.",
          "Additional effort is required to realign candidates.",
          "Time-to-fill pressure increases.",
        ],
      },
    ],
    structuralCauseImage: "/home/structural-cause.svg",
    structuralCauseText: [
      "Without visibility into candidate expectations and decision behaviour:",
      "Employers design roles without market-aligned insight.",
      "Candidates evaluate opportunities without full context.",
      "Signals are misread or missed across both sides.",
      "Misalignment surfaces late — when decisions are already at risk."
    ],
  },
];

function LeftCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-md bg-white p-md shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)] md:rounded-b-sm">
      <div className="flex flex-col gap-sm">
        <div className="flex flex-row md:flex-col gap-xs md:gap-md">
          <img
            src={page.icon}
            alt={`${page.title} Icon`}
            className="h-10 w-10 object-contain md:h-[4vw] md:w-[4vw]"
          />
            <h2 className="text-h2 font-extrabold leading-none ">
              {page.title}
            </h2>
        </div>

        <div className="space-y-sm">
          <div>
            <h3 className="text-base font-bold text-[#1B1C17]">Seam</h3>
            <p className="text-xl font-medium text-[#2C2C2C]">{page.seam}</p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1B1C17]">
              Dimension Interaction
            </h3>
            <p className="text-xl font-medium text-[#2C2C2C]">
              {page.dimensionInteraction}
            </p>
          </div>
          <div>
             <p className="text-xl font-medium text-[#2C2C2C]">
              {page.intro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactContent({ page }: { page: GapPage }) {
  return (
    <div className="flex flex-col">
      {/* <p className="mb-md text-xl font-medium">{page.intro}</p> */}

      {page.impacts.map((section) => (
        <div key={section.title} className="mb-md last:mb-0">
          <h3 className="mb-sm text-base font-bold">{section.title}</h3>

          <div className="space-y-xs">
            {section.points.map((point, i) => (
              <p key={i} className="text-xl font-medium">
                {point}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MiddleCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-b-sm bg-white p-md shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)]">
      <ImpactContent page={page} />
    </div>
  );
}

function StructuralCauseContent({ page }: { page: GapPage }) {
  return (
    <div className="flex flex-col">
      <div className="mb-sm overflow-hidden">
        <img
          src={page.structuralCauseImage}
          alt="Structural Cause"
          className="w-full  object-contain"
        />
      </div>

      <div className="space-y-sm">
        {page.structuralCauseText.map((text, i) => (
          <p key={i} className="text-xl font-medium">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

function RightCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-b-sm bg-white p-md shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)]">
      <div className="flex flex-col">
        <h3 className="mb-sm text-base font-bold text-[#1B1C17]">
          Structural Cause
        </h3>
        <StructuralCauseContent page={page} />
      </div>
    </div>
  );
}

type MobileAccordionItemProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function MobileAccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: MobileAccordionItemProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#BFD8FF] bg-white shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-[5%] text-left"
      >
        <span className="text-h6 font-bold text-[#1B1C17]">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-[#1B1C17]" />
        ) : (
          <ChevronDown className="h-6 w-6 text-[#1B1C17]" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-[#D9E7FB] p-[5%]">{children}</div>
      )}
    </div>
  );
}

function MobilePagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 pt-4 md:hidden">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`rounded-[8px] border border-[#0668E1] transition-all ${
              isActive
                ? "h-12 w-10 bg-[#0668E1] font-semibold text-white"
                : "h-10 w-7 bg-white text-transparent"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {isActive ? page : page}
          </button>
        );
      })}
    </div>
  );
}

function DesktopPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="mt-[4%] flex items-center justify-center gap-[0.5%]">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center rounded-[8px] border border-[#0668E1] transition-all ${
              isActive
                ? "h-[3.5vw] w-[2.5vw] bg-[#0668E1] font-semibold text-white"
                : "h-[2.5vw] w-[2vw] bg-white text-transparent"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {isActive ? page : page}
          </button>
        );
      })}
    </div>
  );
}

function MobileView({
  page,
  currentPage,
  totalPages,
  onPageChange,
}: {
  page: GapPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [openItem, setOpenItem] = useState<"impact" | "cause" | null>("cause");

  return (
    <div className="space-y-4 md:hidden">
      <LeftCard page={page} />

      <MobileAccordionItem
        title="Impact"
        isOpen={openItem === "impact"}
        onToggle={() =>
          setOpenItem((prev) => (prev === "impact" ? null : "impact"))
        }
      >
        <ImpactContent page={page} />
      </MobileAccordionItem>

      <MobileAccordionItem
        title="Structural Cause"
        isOpen={openItem === "cause"}
        onToggle={() =>
          setOpenItem((prev) => (prev === "cause" ? null : "cause"))
        }
      >
        <StructuralCauseContent page={page} />
      </MobileAccordionItem>

      <MobilePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function DesktopView({
  page,
  currentPage,
  totalPages,
  onPageChange,
}: {
  page: GapPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[0.9fr_1.3fr_0.8fr] gap-sm">
        <LeftCard page={page} />
        <MiddleCard page={page} />
        <RightCard page={page} />
      </div>

      <DesktopPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default function StrategyGapSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = gapPagesData.length;
  const activePage = gapPagesData[currentPage - 1];

  return (
    <section className="py-[2%]">
      <div className="mx-auto w-full">
        <MobileView
          page={activePage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <DesktopView
          page={activePage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}