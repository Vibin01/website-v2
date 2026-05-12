"use client";

import Image from "next/image";

export default function EasyEvaluatorSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-[2%]">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Easy Evaluator
        </h2>

        <p className="mt-[0.5%] text-base font-semibold text-[#4B5563]">
          The Brand-Aligned Hiring Communication System
        </p>

        <p className="mt-[0.5%] text-xl font-medium ">
          Every hiring interaction shapes candidate perception.
        </p>

        <p className="text-xl font-medium ">
          Easy Evaluator ensures your organization communicates in one voice
          across every hiring stage.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[1.5vw]">
        
        <img src="/solutions/ec-resume.svg" alt="ec-resume" className="w-full" />

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-[3%]">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#D3E6FF] rounded-md p-[1.5vw] shadow-[0px_4px_40px_5px_#0668E11A]">
            <div className="w-full rounded-md overflow-hidden bg-[#E6F0FC]">
              <Image
                src="/home/easy-evaluator-1.png" // replace with your image
                alt="System Structured"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <p className="mt-[2%] font-semibold text-base">
              System-structured (Tier 1-Free)
            </p>

            <p className="text-xl font-medium ">
              Pre-defined hiring communication templates ensure consistent
              messaging across hiring stages.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#D3E6FF] rounded-md p-[1.5VW] shadow-[0px_4px_40px_5px_#0668E11A]">
            <div className="w-full rounded-md overflow-hidden bg-[#E6F0FC]">
              <Image
                src="/home/easy-evaluator-2.png" // replace with your image
                alt="Brand Aligned"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <p className="mt-[2%] font-semibold text-base">
              Brand-Aligned (Tier 2 & 3)
            </p>

            <p className="text-xl font-medium ">
              Organizations customize communication frameworks to reflect their
              brand voice, tone, and hiring philosophy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}