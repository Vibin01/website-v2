"use client";

import { LiaQuestionSolid } from "react-icons/lia";


interface BannerSectionProps {
  data: {
    cards: {
      text: string;
    }[];
  };
}


export default function BannerSection({data}:BannerSectionProps) {
  return (
    <section className="bg-[#E6F0FC] px-[5%] py-[4%]">
      <div className="  mx-auto text-center">
       

        {/* Content */}
        <div className=" overflow-x-scroll md:overflow-visible scrollbar-hidden w-full px-[7%]  sm:px-0 flex items-center justify-between gap-[8%] sm:gap-[3%]">
          
          {data.cards.map((card, index) => (
          <div key={index} className="w-[90%]  md:w-[31%] relative flex-shrink-0 basis-[95%] sm:basis-[50%] md:basis-auto  bg-[#044AA0] text-white py-md pl-[5%] ml-[4%] md:ml-0 pr-sm rounded-md
           shadow-[1px_5px_11px_0px_#0668E11A,_2px_21px_21px_0px_#0668E117,_5px_47px_28px_0px_#0668E10D,_8px_83px_33px_0px_#0668E103,_13px_130px_37px_0px_#0668E100] 
            text-left">
            <p className="text-xl font-medium">
              {card.text}
            </p>

            {/* Icon */}
            <div className="absolute -left-[5%] md:-left-[7%] top-1/2 -translate-y-1/2 bg-[#0072FF] p-xs rounded-sm">
              <LiaQuestionSolid className="text-white size-iconsize-md p-[1%]" />
            </div>
          </div> 
          ))}
        </div>
      </div>
    </section>
  );
}