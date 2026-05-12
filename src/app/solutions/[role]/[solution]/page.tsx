import React from "react";

import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import { solutionPageMap } from "@/data/SolutionPageMap";
import { notFound } from "next/navigation";
import InsightTabsSection from "../../InsightTabsSection";
import FeatureHighlightSection from "../../FeatureHighlightSection";
import AlignmentComparisonSection from "../../AlignmentComparisonSection";
import InsightOutcomeSection from "../../InsightOutcomeSectionOld";
import AlignmentSection from "../../AlignementSection";

type PageProps = {
  params: Promise<{
    role: string;
    solution: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { role, solution } = await params; // ✅ FIX

  const roleData = solutionPageMap[role as keyof typeof solutionPageMap];

  const data = roleData?.[solution as keyof typeof roleData];

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <section className="relative ">
      <div className="">
        <div>
          <section className="relative flex items-center justify-center py-[10%] px-[5%] md:px-[7%] bg-transparent">
            <div className="flex flex-col items-center justify-center py-[5%]">
              <h1 className="text-h1 font-extrabold text-center text-[#0668E1]">
                {data.title}
              </h1>
              <h2 className="text-h2 font-extrabold text-center">
                {data.description}
              </h2>
            </div>
          </section>
        </div>
        <div className="">
          <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <InsightTabsSection data={data.InsightTabItem} />
          </section>
        </div>
      </div>

      <div className="">
        <section className="relative py-[5%] px-[5%]">
          <FeatureHighlightSection data={data.FeatureHighlightData} />
        </section>
      </div>
      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <AlignmentComparisonSection data={data.AlignmentComparisonData} />
        </section>
      </div>
      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          {/* <InsightOutcomeSection data={data.InsightOutcomeData} /> */}
<AlignmentSection data={data.AlignmentSectionData} />

        </section>
      </div>
      <div className="">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={data.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
}
