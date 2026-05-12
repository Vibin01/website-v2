"use client";
import BlogCard from "@/components/common/BlogCard";
import Image from "next/image";
import React, { useState } from "react";

const resourceCards = [
  {
    image: "/resources/offer-no-show-mystery.png",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
  {
    image: "/resources/offer-no-show-mystery.png",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
  {
    image: "/resources/offer-no-show-mystery.png",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
];


export const BlogSection = () => {

  return (
    <section className="relative  py-[7%] px-[5%] md:px-[7%]">
      <h2 className="mb-8 text-h2 font-extrabold text-center md:mb-16 lg:mb-22">
        Every article and framework is designed to help you:
      </h2>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resourceCards.map((card, index) => (
            <div
              key={index}
              className="rounded-[12px] border border-[#CFE1FF] bg-white p-3 shadow-[0px_4px_30px_rgba(6,104,225,0.08)]"
            >
              <div className="overflow-hidden rounded-[8px] border border-[#6EA8FF]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={360}
                  height={170}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-base font-bold text-[#2C2C2C]">
                {card.title}
              </h3>

              <p className="mt-4 text-xl font-medium text-[#2C2C2C]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button className="h-[34px] rounded-[6px] border border-[#0668E1] px-7 text-[14px] font-bold text-[#0668E1]">
            See All
          </button>
        </div>
    
    </section>
  );
};
