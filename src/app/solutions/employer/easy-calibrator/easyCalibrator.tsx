"use client";

import { useState } from "react";
import Calibrator, { leverCards } from "./Calibrator";

const quarterlyTarget = 120;
const baseHires = 104;

export default function EasyCalibrator() {
  const [ranges, setRanges] = useState(leverCards.map(() => 0));

  const getValue = (val: string) => parseInt(val) || 0;

  const addedHires = leverCards.reduce((total, card, index) => {
    const cardTotal = card.items
      .slice(0, ranges[index])
      .reduce((sum, item) => sum + getValue(item.value), 0);

    return total + cardTotal;
  }, 0);

  const projectedHires = baseHires + addedHires;
  const hiresGap = Math.max(quarterlyTarget - projectedHires, 0);
  const isTargetReached = hiresGap === 0;

  const summaryCards = [
    {
      value: quarterlyTarget,
      label: "Quarterly Target",
      bg: "bg-[#EEF6FF]",
      border: "border-[#B2D0F6]",
      text: "text-[#0668E1]",
    },
    {
      value: projectedHires,
      label: "Projected Hires",
      bg: "bg-[#E7FFF3]",
      border: "border-[#9ADFA9]",
      text: "text-[#2B9B43]",
    },
    {
      value: hiresGap,
      label: isTargetReached ? "Target Reached" : "Gap to Target",
      bg: isTargetReached ? "bg-[#E7FFF3]" : "bg-[#FFF4F2]",
      border: isTargetReached ? "border-[#9ADFA9]" : "border-[#FFD3CA]",
      text: isTargetReached ? "text-[#2B9B43]" : "text-[#F0431D]",
    },
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Calibrator
      </h1>

      <p className="mt-2 text-base font-bold text-[#1B1C17]">
        The Hiring Alignment control System.
      </p>

      <p className="mt-2 text-base font-medium text-[#1B1C17]">
        Simulate hiring adjustments and{" "}
        <span className="font-bold">see how to reach your target.</span>
      </p>

      <p className="mt-2 text-base font-medium text-[#1B1C17]">
        Based on current pipeline and{" "}
        <span className="font-bold">conversion signals.</span>
      </p>

      <div className="grid grid-cols-3 gap-[clamp(8px,calc(16/var(--width)*100vw),40px)] mt-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} ${card.border} flex md:flex-row flex-col justify-center rounded-md border p-4 text-center`}
          >
            <div
              className={`text-h2 block font-extrabold md:text-nowrap ${card.text}`}
            >
              {card.value}
              <span className="text-base md:pl-[3%] block md:inline-block">
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center text-center gap-[clamp(8px,calc(16/var(--width)*100vw),40px)] mt-6 text-base font-bold text-[#1B1C17]">
        <span className="flex-1">Adjust Levers</span>
        <span>→</span>
        <span className="flex-1">System Calculates</span>
        <span>→</span>
        <span className="flex-1">Target Aligns</span>
      </div>

      <Calibrator ranges={ranges} setRanges={setRanges} />
    </div>
  );
}