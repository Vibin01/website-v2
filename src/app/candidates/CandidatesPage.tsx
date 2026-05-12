import BlockEasySteps from "@/components/common/BlockEasySteps";
import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import TabsSection from "@/components/common/TabsSection";
import { CTASection } from "@/components/common/CTASection";
import React from "react";
import {
  bannerSectionData,
  candidateFaqs,
  HeroData,

  insightComparisonPages,

  outcomeHighlightData,
  signalFlowData,
  workflowAlignmentSectionData,
} from "@/data/CandidatePageData";
import FAQSection from "@/components/common/FAQSection";
import SignalFlowSection from "@/components/common/SignalFlowSection";
import BannerSection from "@/components/common/BannerSection";
import InsightComparisonSection  from "@/components/common/InsightComparisonSection ";
import WorkflowAlignmentSection  from "@/components/common/WorkflowAlignmentSection";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";

export const CandidatesPage = () => {
  return (
    
    <>

      <section className="relative ">
        <div className="">
          <div className="">
            <section className="relative flex items-center justify-center py-[5%] px-[5%] bg-transparent">
              <div >
                <HeroTextContainerSection data={HeroData} />
              </div>
              
            </section>
          </div>
          <div className="">
            <section className="relative py-[5%] px-[5%]- md:px-[7%] bg-transparent">
             <SignalFlowSection data={signalFlowData} />
            </section>
          </div>
        </div>
        <div className="">
          <section>
            <BannerSection data={bannerSectionData} />
          </section>
        </div>

        <div className="">
          <section className="relative py-[5%] px-[5%]">
            <InsightComparisonSection data={insightComparisonPages}/>
          </section>
        </div>
        <div className="">
          <section className=" relative py-[5%] px-[5%] ">
          <WorkflowAlignmentSection data={workflowAlignmentSectionData} />
          </section>
        </div>
        <div className="">
          <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={outcomeHighlightData}/>
          </section>
        </div>
        <div className="px-[5%]  py-[5%]">
<FAQSection data={candidateFaqs}/>
        </div>
      </section>
    </>
  );
};
