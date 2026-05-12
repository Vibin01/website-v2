import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyEvaluatorSection from "./easyEvalutionSection";
import HiringCommunicationFlow from "./HiringCommunicationsection";
import SignalsSection from "./SiginalSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyEvalutor } from "@/data/EmployerSolutionPageData";

const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HeroInsightCardsSection data={easyEvalutor.heroInsightCardsData}/>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <EasyEvaluatorSection />
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HiringCommunicationFlow />
            <SignalsSection/>
          </section>
        </div>
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyEvalutor.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
