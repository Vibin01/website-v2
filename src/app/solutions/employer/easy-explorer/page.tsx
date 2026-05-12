import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyExplorer from "./easyExplorer";
import AlignmentDimensionsSection from "./AlignmentDimensionSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyExplorer } from "@/data/EmployerSolutionPageData";

const page = () => {
  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HeroInsightCardsSection data={easyExplorer.heroInsightCardsData} />
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <EasyExplorer />
          </section>
        </div>{" "}
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <AlignmentDimensionsSection />
          </section>
        </div>
      </div>

      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyExplorer.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
