import React, { JSX } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface HeroTextContainerSectionProps {
  data: {
    title: string;
    sub_title: string;
    description: string;
    button_text: string;
    button_link: string;
   
  };
}


export const HeroTextContainerSection =  ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="w-full flex flex-col pb-14 lg:pb-0 items-center justify-center">
          <h1 className="text-h1 font-extrabold text-[#0668E1]">
         {data.title}

        </h1>
        <h2 className="mb-md text-h2 font-extrabold text-center">
          {data.sub_title}

        </h2>
      
        <p className="mb-sm text-center text-h6 font-bold">
          <span className="font-bold">{data.description} </span>
          
        </p>
        <button className="h-btn-h px-md gap-sm flex items-center  cursor-pointer font-bold text-white text-xl bg-[#0668E1] rounded-md">
          {data.button_text} <FaArrowRight/>
      </button>
      </div>
    </>
  );
};
