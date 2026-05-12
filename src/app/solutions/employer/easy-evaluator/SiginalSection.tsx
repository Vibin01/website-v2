"use client";

import Image from "next/image";

const signalData = [
  {
    title: "Candidate Signals",
    points: [
      "Clear expectations",
      "Consistent experience",
      "Greater trust in the organization",
    ],
  },
  {
    title: "Recruiter Signals",
    points: [
      "Faster communication",
      "Reduced drafting effort",
      "Consistent messaging",
    ],
  },
  {
    title: "Employer Signals",
    points: [
      "Stronger employer brand",
      "Consistent hiring voice",
      "Aligned candidate experience",
    ],
  },
];


// ✅ Reusable Connector
function SignalConnector({
  direction = "horizontal",
}: {
  direction?: "horizontal" | "vertical";
}) {
  if (direction === "vertical") {
    return (
      <div className="flex flex-col items-center">
        <span className="h-[9px] w-[9px] rounded-full bg-[#0B6BEA]" />
        <div className="h-[55px] border-l-2 border-dashed border-[#0B6BEA]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#0B6BEA]" />
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center justify-center gap-0.5 pt-8">
      <span className="h-[10px] w-[10px] rounded-full bg-[#0B6BEA]" />
      <div className="w-[120px] border-t-2 border-dashed border-[#0B6BEA]" />
      <span className="h-[10px] w-[10px] rounded-full bg-[#0B6BEA]" />
    </div>
  );
}


// ✅ Card
function SignalCard({
  title,
  points,
  isLast,
}: {
  title: string;
  points: string[];
  isLast?: boolean;
}) {
  return (
    <div className="relative h-[100px] flex items-start gap-3 md:flex-col md:items-center md:text-center">

      {/* 🔥 Mobile Vertical Connector */}
      {!isLast && (
        <div className="absolute left-[10px] top-[40px] md:hidden">
          <SignalConnector direction="vertical" />
        </div>
      )}

      {/* Icon */}
      <div className="z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[8px] border border-[#5B9CFF] bg-[#F3F8FF] shadow-[0_2px_8px_rgba(6,104,225,0.10)] md:h-[66px] md:w-[66px] md:rounded-[14px]">
        <Image
          src="/signal-icon.png"
          alt={title}
          width={42}
          height={42}
          className="h-[28px] w-[28px] md:h-auto md:w-auto"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base font-bold text-[#0B6BEA] md:mt-6">
          {title}
        </h3>

        <div className="mt-2 space-y-1 md:mt-5 md:space-y-3">
          {points.map((point) => (
            <p
              key={point}
              className="text-[14px] font-medium leading-[22px] md:text-xl"
            >
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}


// ✅ Main Section
export default function SignalsSection() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto w-full rounded-lg border border-[#D0E5FF] bg-white p-3 shadow-[0px_4px_40px_5px_#0668E11A] md:p-[2%]">
        
        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_auto_1.4fr_auto_1.4fr] md:gap-0 md:items-start">

          <SignalCard
            title={signalData[0].title}
            points={signalData[0].points}
          />

          <SignalConnector />

          <SignalCard
            title={signalData[1].title}
            points={signalData[1].points}
          />

          <SignalConnector />

          <SignalCard
            title={signalData[2].title}
            points={signalData[2].points}
            isLast
          />
        </div>

        {/* Bottom Text */}
        <div className="mt-7 text-left md:mt-12 md:text-center">
          <p className="text-[14px] font-medium leading-[22px] md:text-xl">
            Every Candidate interacting is a brand Signal.
          </p>
          <p className="mt-2 text-[14px] font-medium leading-[22px] md:text-xl">
            Easy Evaluator ensure the organization speaks in one voice across
            the hiring journey.
          </p>
        </div>
      </div>
    </section>
  );
}