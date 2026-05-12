import React from "react";
import InsightTabsSection from "../../InsightTabsSection";
import FeatureHighlightSection from "../../FeatureHighlightSection";
import AlignmentComparisonSection from "../../AlignmentComparisonSection";
import InsightOutcomeSection from "../../InsightOutcomeSectionOld";
import { easyEvaluator } from "@/data/CandidateSolutionPageData";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyRoleTrackerSection from "./easyRoleTrackerSection";
import RoleStorySection from "./RoleStorySection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyRoleTracker } from "@/data/EmployerSolutionPageData";

const page = () => {
  return (
    <section className="relative ">
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HeroInsightCardsSection data={easyRoleTracker.heroInsightCardsData} />
          </section>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <EasyRoleTrackerSection/>
          </section>
        </div>
         <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <RoleStorySection/>
          </section>
        </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyRoleTracker.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
