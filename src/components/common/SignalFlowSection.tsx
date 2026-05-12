"use client";

import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import {  MdKeyboardArrowDown } from "react-icons/md";

type SignalFlowCard = {
  top: string;
  mobile_top?: string;
  mobile_left?:string;
  mobile_right?:string;
  left?: string;
  right?: string;
  icon: string;
  text: string;
};

type SignalFlowItem = {
  text: string;
};

type SignalFlowData = {
  title: string;
  centerImage: string;
  centerText: string;
  leftCards: SignalFlowCard[];
  rightCards: SignalFlowCard[];
  flowData: SignalFlowItem[];
};

export default function SignalFlowSection({data}: { data: SignalFlowData }) {

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 640);
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="relative overflow-hidden py-[5%]">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold">
          {data.title}
        </h2>

        <div className="relative mt-lg">
          <div className="flex items-end relative  h-[50vh] sm:h-[65vh] bg-[url('/background/lines-bg.svg')] bg-no-repeat bg-center sm:bg-center bg-[length:100%_auto]">
            {/* left cards */}
            {data.leftCards.map((card, index) => (
              <div
                key={index}
                className={`absolute left-0 sm:left-auto p-[1%] w-[78px] sm:w-[10vw] rounded-md border border-[#e5e7eb] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]`}
                  style={{
                  top: (isMobile?card.mobile_top: card.top),
                  left: (isMobile?card.mobile_left:card.left),
                }}
              >
                <div className="mb-4 text-[#1d72f3]">
                 <img  src={card.icon} alt={card.text} className="size-iconsize-sm" />
                </div>
               <p className="font-medium text-lg">
  {card.text
    .split(" ")
    .reduce<string[]>((acc, _, i, arr) => {
      if (arr.length === 2) return arr; // 2 words → 1 per line
      if (i % 2 === 0) acc.push(arr.slice(i, i + 2).join(" "));
      return acc;
    }, [])
    .map((line, i) => (
      <span key={i} className="block">
        {line}
      </span>
    ))}
</p>
              </div>
            ))}

            {/* center card */}
            <div className="relative mx-auto flex flex-col justify-evenly items-left sm:h-[75%] w-[40%] md:w-[22%] rounded-md border border-[#D3E6FF] bg-white p-[1.5%] text-center shadow-[1px_-1px_3px_0px_#0668E10D,_5px_-4px_6px_0px_#0668E10A,_11px_-8px_8px_0px_#0668E108,_19px_-15px_10px_0px_#0668E103,_29px_-23px_10px_0px_#0668E100]">
                <img
                  src={data.centerImage}
                  alt="Changing Situation Icon"
                  className="mb-4 sm:w-[80%] h-auto"
                />
              <div className="flex justify-center items-start w-full">

              <p className=" text-xl max-w-[90%] font-medium text-center">
                {data.centerText}
              </p>
              </div>
            </div>

            {/* right cards */}
            {data.rightCards.map((card, index) => (
              <div
                key={index}
                className="absolute p-[1%] w-[78px] sm:w-[10vw] rounded-md border border-[#e5e7eb] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={{
                  top:(isMobile?card.mobile_top: card.top),
                  right: (isMobile? card.mobile_right:card.right),
                }}
              >
                <div className="mb-4 text-base text-[#1d72f3]">
                  <img  src={card.icon} alt={card.text} className="size-iconsize-sm" />
                </div>
               <p className="font-medium text-lg">
  {card.text
    .split(" ")
    .reduce<string[]>((acc, _, i, arr) => {
      if (arr.length === 2) return arr; // 2 words → 1 per line
      if (i % 2 === 0) acc.push(arr.slice(i, i + 2).join(" "));
      return acc;
    }, [])
    .map((line, i) => (
      <span key={i} className="block">
        {line}
      </span>
    ))}
</p>
              </div>
            ))}
          </div>

          {/* bottom content */}

          <div className="mx-auto mt-lg px-[5%] sm:px-0 sm:max-w-[35%] text-center">
            {data.flowData.map((item, index) => (
              <div key={index}>
                <p className={"text-base font-medium"}>{item.text}</p>

                {/* Arrow (not after last item) */}
                {index !== data.flowData.length - 1 && (
                  <div className="my-sm flex justify-center">
                    <div className="flex size-iconsize-md bg-[#E6F0FC] text-[#0668E1] items-center justify-center rounded-full">
                     <FaArrowDown/>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
