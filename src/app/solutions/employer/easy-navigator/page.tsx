import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyNavigatorSection from "./EasyNavigatorSection";
import MisalignmentSignalsCard from "./MisalignmentSignalSection";
import { easyNavigator } from "@/data/EmployerSolutionPageData";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import ComparisonCardSection from "./ComparisonCardSection";

const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <HeroInsightCardsSection data={easyNavigator.heroInsightCardsData}/>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
        <EasyNavigatorSection/>
          </section>
        </div>
         <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
           <MisalignmentSignalsCard/>
           <ComparisonCardSection/>
          </section>
        </div>
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyNavigator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
