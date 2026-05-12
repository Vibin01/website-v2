"use client";

import Image from "next/image";

const flowSteps = [
  "Application response",
  "Interview Update",
  "Offer Communication",
];

const leftCards = [
  {
    id: 1,
    title: "Recruiters send",
    subtitle: "inconsistent messages",
    position: "top-[18%] left-[9%]",
  },
  {
    id: 3,
    title: "Tone Changes across",
    subtitle: "locations locations",
    position: "bottom-[6%] left-[4%]",
  },
];

const rightCards = [
  {
    id: 2,
    title: "Candidates updates vary by",
    subtitle: "recruiter",
    position: "top-[18%] right-[8%]",
  },
  {
    id: 4,
    title: "Candidate experience",
    subtitle: "becomes fragmented",
    position: "bottom-[6%] right-[12%]",
  },
];

function FlowArrow({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`relative flex w-[90%] md:w-auto  items-center justify-center px-[5%] py-[1.5%] text-center text-base font-bold text-white ${
        active ? "bg-[#0B67E9]" : "bg-[#5B99E8]"
      }`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 10%) 0, 100% 50%, calc(100% - 10%) 100%, 0 100%, 10% 50%)",
      }}
    >
      <span>{text}</span>
    </div>
  );
}

function InfoCard({
  id,
  title,
  subtitle,
  className,
}: {
  id: number;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-[18vw] rounded-md border border-[#D0E5FF] bg-white p-[1%] shadow-[-1px_2px_10px_2px_#0668E11A] ${className}`}
    >
      <div className="mb-4 flex size-iconsize-sm items-center justify-center rounded-full bg-[#0B67E9] text-lg font-bold text-white">
        {id}
      </div>

      <p className="text-xl font-semibold">{title}</p>
      <p className="mt-1 text-xl font-medium">{subtitle}</p>
    </div>
  );
}

export default function HiringCommunicationFlow() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold">
          Hiring Communication Flow
        </h2>

        <div className="mt-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-[1.5vw]">
          {flowSteps.map((step, index) => (
            <FlowArrow key={step} text={step} active={index === 2} />
          ))}
        </div>

        <p className="mt-10 text-center text-base fontbold">
          Without Structed Communication
        </p>

        <div className="relative mt-8 hidden min-h-[60vh] md:block">
          {leftCards.map((card) => (
            <InfoCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              className={card.position}
            />
          ))}

          {rightCards.map((card) => (
            <InfoCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              className={card.position}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 w-[20vw] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/solutions/mobile-ec-connect.svg"
              alt="Hiring communication layered mobile screens"
              width={260}
              height={220}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          <div className="mx-auto w-[90%]">
            <Image
                           src="/solutions/mobile-ec-connect.svg"
              alt="Hiring communication layered mobile screens"
              width={220}
              height={190}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {[...leftCards, ...rightCards]
            .sort((a, b) => a.id - b.id)
            .map((card) => (
              <div
                key={card.id}
                className="rounded-md border border-[#CFE1F7] bg-[#F8F8F8] px-4 py-3 shadow-[0_3px_10px_rgba(6,104,225,0.08)]"
              >
                <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B67E9] text-[12px] font-bold text-white">
                  {card.id}
                </div>
                <div className="flex items-center">
                 <p className="text-xl font-semibold leading-[1.4]">
        {card.title} {card.subtitle}
      </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
