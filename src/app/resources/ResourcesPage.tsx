import { HeroData } from "@/data/ResourcesPageData";
import Image from "next/image";
import React from "react";
import { getAllBlogs } from "@/lib/mdx";
import ChroniclesPage from "./ChroniclesPage";
import { BlogSection } from "./BlogSection";
import dynamic from "next/dynamic";



export const ResourcesPage = () => {
  const blogs = getAllBlogs();

  return (
    <>
      <section className="relative ">
        <div className="mx-auto  text-center py-[8%]">
        
        {/* Top Label */}
        <p className="text-base font-bold tracking-wide text-[#2C2C2C]">
          CONNECT EC — RESOURCES
        </p>

        {/* Main Heading */}
        <h1 className="mt-4 text-h1 font-extrabold text-[#0668E1]">
          From Insight to Alignment
        </h1>

        {/* Description */}
        <p className="w-[70%] mx-auto mt-6 text-base font-medium text-[#2C2C2C]">
          Welcome to the Connect EC Resource Library. We go beyond best practices
          to reveal how hiring actually works — across candidates, recruiters,
          and employers.
        </p>

      </div>
          
            <BlogSection/>
      </section>
    </>
  );
};
