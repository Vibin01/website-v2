import React from "react";
import InsightTabsSection from "../../InsightTabsSection";
import FeatureHighlightSection from "../../FeatureHighlightSection";
import AlignmentComparisonSection from "../../AlignmentComparisonSection";
import InsightOutcomeSection from "../../InsightOutcomeSectionOld";
import { easyEvaluator } from "@/data/CandidateSolutionPageData";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyPredictorSection from "./EasyPredictorSection";

const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <div className="flex flex-col items-center justify-center py-[5%]">
              <h1 className="text-h1 font-extrabold text-center text-[#0668E1]">
                Easy Predictor
              </h1>
              <h2 className="text-h2 font-extrabold text-center">
                Transform No-Shows Into Know-Shows.
              </h2>
              <div className="mt-[2%] flex flex-col md:flex-row items-center justify-center gap-[1.5vw]">
                {/* Card 1 */}
                <div className="flex-1 rounded-md border border-[#D0E5FF] bg-white p-[1.5%] flex flex-col justify-center items-start gap-[1%] shadow-[0px_2px_10px_2px_#0668E10D]">
                  <div className="size-iconsize-md text-[#0668E1]">
                    <img
                      src="/home/icons/decisions-accelerate-icon.svg"
                      alt="Decision Acceleration Icon"
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="font-medium text-base">
                   Drop-offs aren't sudden; they're silent.
                  </p>
                </div>

                {/* Card 2 - taller */}
                <div className="flex-1 rounded-md border border-[#D0E5FF] bg-white px-[1.5%] py-[2.4%] flex flex-col justify-center items-start gap-[2%] shadow-[0px_2px_10px_2px_#0668E10D]">
                  <div className="size-iconsize-lg text-[#0668E1]">
                    <img
                      src="/home/icons/momentum-strengthens-icon.svg"
                      alt="Momentum Strengthens Icon"
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="font-medium text-base">
                    Easy Predictor detects intent signals before breakdowns occur.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex-1 rounded-md border border-[#D0E5FF] bg-white p-[1.5%] flex flex-col justify-center items-start gap-[2%] shadow-[0px_2px_10px_2px_#0668E10D]">
                  <div className="size-iconsize-md text-[#0668E1]">
                    <img
                      src="/home/icons/yield-compounds-icon.svg"
                      alt="Yield compounds Icon"
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="font-medium text-base">
                    So recruiters prioritize right, and momentum stays intact.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
   <EasyPredictorSection/>
          </section>
        </div>
        
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyEvaluator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
