import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import React from "react";
import {
  bannerSectionData,
  employerFaqs,
  HeroData,
  insightComparisonData,
  outcomeHighlightData,
  signalFlowData,
  workflowAlignmentSectionData,
 
} from "@/data/EmployerPageData";
import SignalFlowSection from "@/components/common/SignalFlowSection";
import BannerSection from "@/components/common/BannerSection";
import InsightComparisonSection from "@/components/common/InsightComparisonSection ";
import WorkflowAlignmentSection from "@/components/common/WorkflowAlignmentSection";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import FAQSection from "@/components/common/FAQSection";

export const EmployerPage = () => {
  return (
    <>
      <section className="relative overflow-x-hidden ">
          <div className=" ">
            <section className="relative flex items-center justify-center py-[5%] px-[5%] bg-transparent">
              <div className="">
                <HeroTextContainerSection data={HeroData} />
              </div>
             
            </section>
          </div>
       <div className="">
               <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
                <SignalFlowSection data={signalFlowData} />
               </section>
             </div>
           <div className="">
             <section>
               <BannerSection data={bannerSectionData} />
             </section>
           </div>
           <div className="">
                     <section className="relative py-[5%] px-[5%]">
                       <InsightComparisonSection data={insightComparisonData} />
                     </section>
                   </div>
 <div className="">
          <section className=" relative py-[5%] px-[5%] ">
          <WorkflowAlignmentSection data={workflowAlignmentSectionData} />
          </section>
        </div>
        <div className="relative py-[5%] px-[5%]">
          <OutcomeHighlightSection data={outcomeHighlightData}/>
        </div>
        <div className="relative py-[5%] px-[5%]">
          <FAQSection data={employerFaqs}/>
          </div>
      </section>
    </>
  );
};
