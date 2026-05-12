
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
      <section className="flex items-center justify-center px-[5%] sm:px-0 py-[10%]">
        <div className="text-center">
          <h1 className="font-extrabold text-h1 text-[#0668E1]">
           Hiring Alignment System
          </h1>

          <h2 className="font-extrabold text-h2 pb-lg">
            Seamlessly Aligning Talent, Strategy, and Execution.
          </h2>

          <p className="font-bold text-h6 pb-sm">
            When behaviors align
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-sm">
            <div className="p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-md text-[#0668E1]">
                <img src="/home/icons/decisions-accelerate-icon.svg" alt="Decision Acceleration Icon" className="w-full h-auto" />
              </div>

              <p className=" font-bold text-base text-[#0668E1] text-nowrap ">
                Decisions accelerate
              </p>
            </div>

            <div className="p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-lg text-[#0668E1]">
                <img src="/home/icons/momentum-strengthens-icon.svg" alt="Momentum Strengthens Icon" className="w-full h-auto" />
              </div>

              <p className=" font-bold text-base text-[#0668E1] text-nowrap">
                Momentum strengthens
              </p>
            </div>

            <div className="p-sm bg-white border border-[#D0E5FF] rounded-md flex flex-col justify-center items-start gap-xs">
              <div className="size-iconsize-md text-[#0668E1]">
                <img src="/home/icons/yield-compounds-icon.svg" alt="Yield compounds Icon" className="w-full h-auto" />
              </div>

              <p className=" font-bold text-base text-[#0668E1] text-nowrap">
                Yield compounds
              </p>
            </div>
          </div>

          <p className=" font-medium text-h6 mt-sm">
            That state is <span className="italic font-bold">Seamless Yield</span>
          </p>

          <p className=" font-bold text-h6 mt-sm">
            Everyone aspires to it.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-sm px-sm sm:px-0  mt-sm">
            <button className=" h-btn-h text-nowrap  bg-[#0668E1] border-2 border-[#0072FF] rounded-sm px-md py-sm flex items-center justify-center gap-sm">
              <span className=" font-bold text-xl text-white">
                Unlock Connect EC for Free
              </span>

              <FaArrowRight className="text-white text-base"/>
            </button>

            <button className=" h-btn-h text-nowrap border-2 border-[#0668E1] rounded-sm px-md py-sm flex items-center justify-center gap-sm">
              <span className=" font-bold text-xl text-[#0668E1]">
                Unlock Alignment for Free
              </span>

              <FaArrowRight className="text-[#0668E1] text-base"/>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
