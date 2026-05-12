import React from "react";
import InsightTabsSection from "../../InsightTabsSection";
import FeatureHighlightSection from "../../FeatureHighlightSection";
import AlignmentComparisonSection from "../../AlignmentComparisonSection";
import InsightOutcomeSection from "../../InsightOutcomeSectionOld";
import { easyEvaluator } from "@/data/CandidateSolutionPageData";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyFacilitatorSection from "./easyFacilitatorSection";
import CandidateEngagementFlow from "./CandidateEngagementFlow";
import AlignmentDimensionsSection from "./AlignmentDimensionSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyFacilitator } from "@/data/EmployerSolutionPageData";

const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <HeroInsightCardsSection data={easyFacilitator.heroInsightCardsData}/>
          </section>
        </div>
        <div className="">
          <section className="relative py-[7%] px-[5%] md:px-[7%] bg-transparent">
           <EasyFacilitatorSection/>
          </section>
        </div>
         <div className="">
          <section className="relative py-[7%] px-[5%] md:px-[7%] bg-transparent">
           <CandidateEngagementFlow/>
          </section>
        </div><div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <AlignmentDimensionsSection/>
          </section>
        </div>
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyFacilitator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
