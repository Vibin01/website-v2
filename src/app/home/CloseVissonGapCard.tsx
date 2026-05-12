"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SectionBlock = {
  title: string;
  content: string | string[];
};

type RightSideBlock = {
  title: string;
  content: SectionBlock[];
};

type GapCardData = {
  id: number;
  icon: string;
  title: string;
  leftSide: SectionBlock[];
  rightSide: RightSideBlock;
};

const gapCardsData: GapCardData[] = [
  {
    id: 1,
    icon: "/home/icons/closing-gap-icon.svg",
    title: "Closing the Vision Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Candidate ↔ Employer",
      },
      {
        title: "Misalignment",
        content:
          "Roles are designed without visibility into candidate expectations.  Expectation gaps surface late, leading to offer declines.",
      },
      {
        title: "Situation Alignment",
        content: [
          "Alignment Triggers capture candidate intent, timelines, and opportunity context",
          "Structured employer participation in interviews generates reliable signals.",
          "Candidate expectations become visible",
          "Role perception becomes clearer.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Candidate Impact:",
          content: [
            "Candidates gain trusted insight into employer expectations and interview experience.",
          ],
        },
        {
          title: "Employer Impact: ",
          content: [
            "Employers receive early visibility into candidate expectations and decision behaviour.",
          ],
        },
        {
          title: "System Shift: ",
          content: ["Direction becomes informed by real candidate signals."],
        },
        {
          title: "Final State:",
          content: ["Offer decisions become predictable."],
        },
      ],
    },
  },
  {
    id: 2,
    icon: "/home/icons/closing-gap-icon.svg",
    title: "Closing the Execution Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Recruiter ↔ Candidate",
      },
      {
        title: "Misalignment",
        content:
          "Communication signals disappear during the hiring process, causing missed interviews, delays, and instability.",
      },
      {
        title: "Execution Alignment",
        content: [
          "Candidate and recruiter participation generates signals of responsiveness and engagement.",
          "These signals create continuous visibility across coordination and communication.",
          "Engagement becomes visible.",
          "Participation becomes consistent.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Recruiter Impact: ",
          content: [
            "Recruiters maintain stable and reliable interview pipelines.",
          ],
        },
        {
          title: "Candidate Impact: ",
          content: [
            "Candidates receive timely updates, coordination clarity, and feedback.",
          ],
        },
        {
          title: "System Shift: ",
          content: [
            "Execution becomes consistent across coordination and communication.",
          ],
        },
        {
          title: "Final State:",
          content: ["Execution stabilizes across the hiring process."],
        },
      ],
    },
  },
  {
    id: 3,
    icon: "/home/icons/closing-gap-icon.svg",
    title: "Closing the Strategy Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Employer ↔ Recruiter",
      },
      {
        title: "Misalignment",
        content:
          "Recruiting effort fails to convert into hires when direction lacks visibility into candidate signals and execution.",
      },
      {
        title: "Direction Alignment",
        content: [
          "Recruiting actions generate signals that reveal alignment with hiring priorities.",
          "Candidate signals expose expectation patterns and commitment behaviour.",
          "Hiring dynamics become visible across the system.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Employer Impact: ",
          content: [
            "Employers gain visibility into candidate expectations and recruiting execution.",
          ],
        },
        {
          title: "Recruiter Impact: ",
          content: [
            "Recruiters focus on roles aligned with real hiring priorities.",
          ],
        },
        {
          title: "System Shift: ",
          content: [
            "Hiring strategy becomes continuously informed by real-time signals.",
          ],
        },
        {
          title: "Final State:",
          content: ["Execution and direction move in alignment."],
        },
      ],
    },
  },
];

function ContentBlock({ title, content }: SectionBlock) {
  const isArrayContent = Array.isArray(content);

  return (
    <div>
      <h2 className="text-base font-bold text-[#1B1C17]">{title}</h2>

      {isArrayContent ? (
        <div className="mt-sm space-y-sm text-xl font-medium text-[#2C2C2C]">
          {content.map((item, index) => (
            <p key={index} className="text-xl font-medium text-[#2C2C2C]">
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-sm text-xl font-medium text-[#2C2C2C]">{content}</p>
      )}
    </div>
  );
}

type MobileAccordionProps = {
  title: string;
  content: string | string[];
  isOpen: boolean;
  onToggle: () => void;
};

function MobileAccordion({
  title,
  content,
  isOpen,
  onToggle,
}: MobileAccordionProps) {
  const isArrayContent = Array.isArray(content);

  return (
    <div className="border-t border-[#DDECFF] pt-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h2 className="text-h6 font-bold text-[#1B1C17]">{title}</h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1B1C17]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1B1C17]" />
        )}
      </button>

      {isOpen && (
        <div>
          {isArrayContent ? (
            <div className="mt-[6%] space-y-[8%] text-xl font-medium text-[#2C2C2C]">
              {content.map((item, index) => (
                <p key={index} className="text-xl font-medium text-[#2C2C2C]">
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-[6%] text-xl font-medium text-[#2C2C2C]">
              {content}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

function DesktopPagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div className="mt-md flex items-center justify-center gap-xs">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            className={`flex items-center justify-center rounded-[8px] font-semibold transition-all duration-200 ${
              isActive
                ? "h-[3.5vw] w-[2.5vw] bg-[#0668E1] text-white"
                : "h-[2.5vw] w-[2vw] border border-[#0668E1] bg-white text-transparent"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {isActive ? page : ""}
          </button>
        );
      })}
    </div>
  );
}

function MobilePagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div className="mt-[6%] flex items-center justify-center gap-2 md:hidden">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            className={`flex items-center justify-center rounded-[8px] border border-[#0668E1] transition-all duration-200 ${
              isActive
                ? "h-10 w-10 bg-[#0668E1] font-semibold text-white"
                : "h-6 w-6 bg-white text-transparent"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {isActive ? page : ""}
          </button>
        );
      })}
    </div>
  );
}

function DesktopView({
  activeCard,
  currentPage,
  totalPages,
  onPageChange,
}: {
  activeCard: GapCardData;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="hidden py-[5%] md:flex">
      <div className="">
        {/* Header */}
        <div className="flex items-center gap-xs">
          <img
            src={activeCard.icon}
            alt={activeCard.title}
            className="size-iconsize-xl"
          />

          <h1 className="text-h2 font-extrabold text-[#1B1C17]">
            {activeCard.title}
          </h1>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-2 gap-lg mt-md rounded-lg border border-[#DDECFF] bg-white p-md shadow-[0px_4px_35px_4px_#0668E11A]">
          {/* Left Side */}
          <div className="space-y-sm">
            {activeCard.leftSide.map((item, index) => (
              <ContentBlock
                key={`${item.title}-${index}`}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-sm ">
            <h2 className="text-base font-bold text-[#1B1C17]">
              {activeCard.rightSide.title}
            </h2>

            <div className="mt-md space-y-sm">
              {activeCard.rightSide.content.map((item, index) => (
                <ContentBlock
                  key={`${item.title}-${index}`}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>

        <DesktopPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}

function MobileView({
  activeCard,
  currentPage,
  totalPages,
  onPageChange,
}: {
  activeCard: GapCardData;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [openSection, setOpenSection] = useState("");

  useEffect(() => {
    setOpenSection("");
  }, [currentPage]);

  return (
    <div className="block py-[5%] md:hidden">
      {/* Header */}
      <div className="mb-[4%] flex items-center gap-[3%]">
        <img src={activeCard.icon} alt={activeCard.title} className="size-8" />
        <h1 className="text-h2 font-extrabold text-[#1B1C17]">
          {activeCard.title}
        </h1>
      </div>

      <div className="rounded-lg border border-[#DDECFF] bg-white p-[6%] shadow-[0px_4px_35px_4px_#0668E11A]">
        <div className="space-y-[8%]">
          {/* Seam only */}
          <div>
            <h2 className="text-h6 font-bold text-[#1B1C17]">
              {activeCard.leftSide[0].title}
            </h2>

            <p className="mt-[6%] text-xl font-medium text-[#2C2C2C]">
              {activeCard.leftSide[0].content}
            </p>
          </div>

          {/* Remaining left side as dropdown */}
          {activeCard.leftSide.slice(1).map((item, index) => (
            <MobileAccordion
              key={`${item.title}-${index}`}
              title={item.title}
              content={item.content}
              isOpen={openSection === item.title}
              onToggle={() =>
                setOpenSection((prev) =>
                  prev === item.title ? "" : item.title,
                )
              }
            />
          ))}

          {/* Right side dropdown */}
          <MobileAccordion
            title={activeCard.rightSide.title}
            content={activeCard.rightSide.content.map(
              (item) =>
                `${item.title} ${
                  Array.isArray(item.content)
                    ? item.content.join(" ")
                    : item.content
                }`,
            )}
            isOpen={openSection === activeCard.rightSide.title}
            onToggle={() =>
              setOpenSection((prev) =>
                prev === activeCard.rightSide.title
                  ? ""
                  : activeCard.rightSide.title,
              )
            }
          />
        </div>
      </div>

      <MobilePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={onPageChange}
      />
    </div>
  );
}

export default function ClosingGapCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = gapCardsData.length;
  const activeCard = gapCardsData[currentPage - 1];

  return (
    <>
      <DesktopView
        activeCard={activeCard}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <MobileView
        activeCard={activeCard}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
