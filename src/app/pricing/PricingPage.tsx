"use client";
import { pricingPlans } from "@/data/PricingPageData";
import PricingCard from "./PricingCard";
import { useState } from "react";
import PlanComparision from "./PlanComparision";
import FAQSection from "@/components/common/FAQSection";

export default function PricingPage() {
  const [yearlyPlan, setYearlyPlan] = useState(false);
  return (
    <main className="px-[5%] flex flex-col items-center justify-center ">
      <div className="">
        <div className=" pb-8 lg:pb-0">
          <div className="py-[3%] w-full ">
            <h1 className="text-center text-h1 font-extrabold text-[#0668E1]">
              Plans Designed for Hiring Teams of Every Size
            </h1>
           
            <p className="mb-8 lg:mb-12 text-base font-bold text-center  mx-auto md:max-w-[70%]">
              Connect EC makes hiring friction visible — so better decisions follow.
            </p>

          </div>
        </div>
        <div className="">
          <div className=" py-[10%] lg:py-[4%] w-full lg:bg-[#FFFFFF4D]">
            <div className="  flex flex-col gap-4 lg:gap-px lg:flex-row items-center lg:items-stretch lg:justify-around  ">
             <PricingCard/>
            </div>
            <p className="mt-6 mb-10 text-right text-base font-medium">
              "Pricing is for employers only; 

              <span className="block"/>
                candidates and recruiters can 
                <span className="font-bold text-[#0668E1]">
                  {" "}
                  download EC for free"
                
                
              </span>
            </p>
          </div>
        </div>
      </div>
  
    </main>
  );
}
