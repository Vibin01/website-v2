"use client";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Users,
  Eye,
  Handshake,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAssessmentStatusAction } from "@/server/actions/assignment-action";

const situationCards = [
  {
    icon: Handshake,
    title: "1. Uncertainty",
    description: "When expectations are unclear or incomplete",
  },
  {
    icon: Handshake,
    title: "2. Pressure",
    description: "When time, stakes, or expectations increase",
  },
  {
    icon: Handshake,
    title: "3. Control",
    description: "When outcomes depend on others",
  },
  {
    icon: Eye,
    title: "4. Perception",
    description: "When interpretation shapes decisions",
  },
  {
    icon: ShieldCheck,
    title: "5. Outcome",
    description: "When results are evaluated",
  },
];

const bottomCards = [
  {
    icon: ShieldCheck,
    title: "Built on real hiring scenarios",
    description: "Grounded in interviews and hiring decisions",
  },
  {
    icon: Users,
    title: "Used by candidates, recruiters, and employers",
    description: "Across industries and roles",
  },
  {
    icon: Check,
    title: "Actionable insights — not personality labels",
    description: "Focused on decisions, not traits",
  },
];

const phaseKeys = [
  "uncertainty",
  "pressure",
  "control",
  "perception",
  "outcome",
];

export default function AlignmentSituationsSection() {
  const router = useRouter();

 const [completedPhases] = useState<string[]>([]);
const [fullCompleted] = useState(false);

const [activeSlide, setActiveSlide] = useState(0);

const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  const scrollLeft = e.currentTarget.scrollLeft;
  const cardWidth = e.currentTarget.clientWidth;

  setActiveSlide(Math.round(scrollLeft / cardWidth));
};

  const handleSingleStart = (phase: string) => {
    router.push(`/resources/alignment-test/register?mode=single&phase=${phase}`);
  };

  const handleFullStart = () => {
    router.push("/resources/alignment-test/register?mode=full");
  };

  return (
    <section className="w-full px-[1.5%] py-[5%]">
      <div className="text-center">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Alignment shifts by situation
        </h2>
        <p className="text-base font-medium text-[#2C2C2C]">
          Each group takes ~1 minute. 3 situations per group. Start anywhere.
        </p>
      </div>
<div className="mt-xl">


 
      <div  onScroll={handleScroll}
    className="
      flex snap-x snap-mandatory gap-sm overflow-x-auto scroll-smooth pb-sm
      scrollbar-hidden
      md:grid md:grid-cols-5 md:overflow-visible md:pb-0
    "
  >
        {situationCards.map((card, index) => {
          const Icon = card.icon;
          const phase = phaseKeys[index];
          const isCompleted = completedPhases.includes(phase);

          return (
            <div
              key={card.title}
              className="flex-shrink-0 basis-[50%] md:w-auto rounded-md border border-[#D0E5FF] bg-white p-sm text-center shadow-[0px_4px_40px_5px_#0668E10D]"
            >
              <div className="mx-auto flex size-iconsize-xl items-center justify-center rounded-full border border-[#D0E5FF] bg-[#EEF6FF] text-[#0668E1]">
                <Icon className="size-auto" />
              </div>

              <h3 className="mt-sm text-base font-bold">
                {card.title}
              </h3>

              <p className="mt-sm text-xl font-medium">
                {card.description}
              </p>

              <button
                onClick={() => handleSingleStart(phase)}
                className={`mt-md flex h-[46px] w-full items-center justify-center gap-xs rounded-sm text-xl font-medium ${
                  isCompleted
                    ? "bg-[#E7FFF3] text-[#2B9B43]"
                    : "bg-[#E6F0FC] text-[#0668E1]"
                }`}
              >
                {isCompleted ? "Completed" : "Start"}
                {isCompleted && (
                  <Check className="size-5" />
                )}
              </button>
            </div>
          );
        })}
      </div>
        <div className="mt-sm flex justify-center gap-xs md:hidden">
    {[0, 1, 2].map((item) => (
      <button
        key={item}
        className={`h-[6px] rounded-full transition-all ${
          activeSlide === item
            ? "w-[24px] bg-[#0668E1]"
            : "w-[6px] bg-[#D0E5FF]"
        }`}
      />
    ))}
    </div>
</div>

      <div className="mt-lg grid grid-cols-1 items-center  md:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-h5 font-extrabold text-[#1B1C17]">
            Want the complete picture?
          </h3>
          <p className=" text-xl font-medium">
            Take all 5 groups for your full Alignment Report.
          </p>
        </div>

        <button
          onClick={handleFullStart}
          className={`flex h-btn-h mt-md  items-center justify-center gap-sm rounded-sm px-md text-xl font-medium shadow-[0px_4px_20px_#0668E133] ${
            fullCompleted
              ? "bg-[#E7FFF3] text-[#2B9B43]"
              : "bg-[#0668E1] text-white"
          }`}
        >
          {fullCompleted ? "Full Test Completed" : "Full Alignment Check"}
          {fullCompleted ? <Check className="size-5" /> : <ArrowRight className="size-5" />}
        </button>
      </div>

      <div className="mt-md grid grid-cols-1 gap-sm md:grid-cols-3">
        {bottomCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="flex items-start gap-sm rounded-sm border border-[#D0E5FF] bg-white p-sm shadow-[0px_4px_40px_5px_#0668E10D]"
            >
              <div className="flex size-iconsize-md shrink-0 items-center justify-center rounded-full bg-[#0668E1] text-white">
                <Icon className="size-[55%]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#2C2C2C]">
                  {card.title}
                </h4>
                <p className="mt-xs text-xl font-medium text-[#727272]">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}