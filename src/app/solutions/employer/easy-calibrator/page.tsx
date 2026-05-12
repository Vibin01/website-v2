import React from "react";
import EasyCalibrator from "./easyCalibrator";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import {easyCalibrator} from "@/data/EmployerSolutionPageData"
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";


const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HeroInsightCardsSection data={easyCalibrator.heroInsightCardsData}/>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <EasyCalibrator />
          </section>
        </div>
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyCalibrator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
