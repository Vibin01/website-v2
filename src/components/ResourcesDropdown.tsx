"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {  useState } from "react";

const activeGroup={
     pages: [
      {
        title: "Blogs",
        description: "Decode Signals, Understaand Decisions.",
        href: "/resources/blogs",
      }, 
      {
        title: "Alignment Test",
        description: "Reveal patterns. Align Decisions.",
        href: "/resources/alignment-test",
      },]
}



type ResourcesDropdownProps = {
  onClose: () => void;
};

export default function ResourcesDropdown({onClose}:ResourcesDropdownProps) {
  
  
  return (
    <div className="absolute left-0  top-full z-[9999] w-[100vw] -translate-x-1/2- rounded-b-[8px] border border-[#D3E6FF] bg-white p-md shadow-[0px_10px_30px_rgba(6,104,225,0.12)]">
      <div className="flex gap-md pl-[5%]">
      

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-sm">
          {activeGroup.pages.map((page,index) => (
            <Link
             key={`${page.href}-${index}`}
              href={page.href}
               onClick={onClose}
              className="rounded-md flex gap-xs border border-transparent group p-sm transition-all hover:border-[#D3E6FF] hover:bg-[#F7FBFF]"
            >
              <img src={""} alt="icon" className="size-iconsize-md"/>
              <div className="flex flex-col">
              <h3 className="text-base font-bold text-[#1B1C17] group-hover:text-[#0668E1]">
                {page.title}
              </h3>
              <p className="mt-[4px] text-xl font-medium text-[#4A4A4A]">
                {page.description}
              </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}