"use client";

import { useState } from "react";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

type FAQSectionProps = {
  data: {
    question: string;
    points: string[];
  }[];
};

export default function FAQSection({ data }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white md:px-[15%]">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold text-[#1B1C17]">
          Frequently Asked Questions
        </h2>

        <div className="mt-lg space-y-sm">
          {data.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div key={index} className="space-y-xs">
                {/* Question Box */}
                <div
                  className={`overflow-hidden rounded-md border bg-white ${
                    isOpen ? "border-[#D3E6FF]" : "border-[#E8E8E8]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between px-md py-sm text-left"
                  >
                    <span
                      className={`pr-md text-base font-semibold ${
                        isOpen ? "text-[#0668E1]" : "text-[#2C2C2C]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <IoCloseCircle className="size-iconsize-sm shrink-0 text-[#0668E1]" />
                    ) : (
                      <IoAddCircle className="size-iconsize-sm shrink-0 text-[#2F2F2F]" />
                    )}
                  </button>
                </div>

                {/* Answer Box */}
                {isOpen && (
                  <div className="rounded-md border border-[#D3E6FF] bg-white px-md py-sm ">
                    <div className="space-y-xs">
                      {faq.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-start gap-3"
                        >
                          <img src={"/icons/tick-gradient-icon.svg"} alt="ticl icon" className="size-iconsize-sm shrink-0 text-[#0668E1]" />
                          <p className="text-xl font-medium  text-[#2C2C2C]">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}