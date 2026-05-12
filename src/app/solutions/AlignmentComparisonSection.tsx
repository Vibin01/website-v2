"use client";

import React, { useState } from "react";


export type AlignmentHeader = {
  title: string;
  icon?: string;
};

export type AlignmentRow = {
  left: string;
  middle: string;
  right: string;
};

export type AlignmentComparisonData = {
  sectionTitle: string;
  headers: AlignmentHeader[];
  rows: AlignmentRow[];
};
type AlignmentComparisonSectionProps = {
  data: AlignmentComparisonData;
};

function HeaderCard({ item }: { item: AlignmentHeader }) {
  return (
    <div className="relative">
      <div className="absolute -left-[5%] top-[20%] flex h-[38px] w-[34px] items-center justify-center rounded bg-[#0072FF] text-xl text-white sm:h-[3.5vw] sm:w-[3vw]">
        ?
      </div>

      <div
        className="flex items-center rounded-md bg-[#044AA0] py-[4%] pl-[12%]
        shadow-[1px_5px_11px_#0668E11A,2px_21px_21px_#0668E117,5px_47px_28px_#0668E10D,8px_83px_33px_#0668E103]"
      >
        <span className="text-base font-bold text-white">{item.title}</span>
      </div>
    </div>
  );
}

function DesktopRow({ row }: { row: AlignmentRow }) {
  return (
    <div className="grid grid-cols-3 items-center rounded-[4px] border-l-[0.5vw] border-[#0668E1] bg-[#E6F0FC] px-[1%] py-[1%]">
      <div className="w-[85%] text-xl font-semibold">{row.left}</div>

      <div className="flex items-center gap-4">
        <div className="h-[8vh] border-l border-[#8CBAF1]"></div>
        <span className="w-[85%] text-xl font-semibold">{row.middle}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-[8vh] border-l border-[#8CBAF1]"></div>
        <span className="w-[85%] text-xl font-bold text-[#0668E1]">
          {row.right}
        </span>
      </div>
    </div>
  );
}

function MobileHeaderRow({
  headers,
  activeIndex,
}: {
  headers: AlignmentHeader[];
  activeIndex: number;
}) {
  return (
    <div
      className="grid w-[260%] grid-cols-3 bg-white px-[5%] gap-4 transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * 30}%)`,
      }}
    >
      {headers.map((item, index) => (
        <div key={index} className="relative min-w-0">
          <div className="absolute -left-[8px] top-1/2 z-10 flex h-[28px] w-[24px] -translate-y-1/2 items-center justify-center rounded-[4px] bg-[#0A6BEB] text-sm text-white">
            ?
          </div>

          <div className="flex min-h-[54px] items-center rounded-[12px] bg-[#044AA0] py-3 pl-7 pr-3">
            <span className="line-clamp-2 text-xl font-bold leading-[1.15] text-white">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileRow({ row }: { row: AlignmentRow }) {
  return (
    <div className="grid w-[260%] grid-cols-3 overflow-hidden rounded-[8px] bg-[#E6F0FC]">
      <div className="border-l-[4px] flex items-center border-[#0668E1] px-[4%] py-5">
        <p className="text-xl font-semibold text-[#4B5563]">
          {row.left}
        </p>
      </div>

      <div className="px-[2%] py-5">
        <div className="h-full border-l border-[#8CBAF1] pl-4">
          <p className="text-xl font-semibold text-[#4B5563]">
            {row.middle}
          </p>
        </div>
      </div>

      <div className="px-[2%] py-5">
        <div className="h-full border-l border-[#8CBAF1] pl-4">
          <p className="text-xl font-bold text-[#0668E1]">
            {row.right}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobilePagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(current - 1, 0))}
        disabled={current === 0}
        className={`flex h-11 w-11 items-center justify-center rounded-full text-2xl ${
          current === 0
            ? "bg-[#A9C7F2] text-white"
            : "bg-[#0668E1] text-white"
        }`}
        aria-label="Previous"
      >
        ←
      </button>

      <button
        type="button"
        onClick={() => onChange(Math.min(current + 1, total - 1))}
        disabled={current === total - 1}
        className={`flex h-11 w-11 items-center justify-center rounded-full text-2xl ${
          current === total - 1
            ? "bg-[#A9C7F2] text-white"
            : "bg-[#0668E1] text-white"
        }`}
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
}



export default function AlignmentComparisonSection({
  data,
}: AlignmentComparisonSectionProps) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  return (
    <section>
      <h1 className="mb-6 text-h2 font-extrabold">{data.sectionTitle}</h1>

      {/* Desktop */}
      <div
        className="hidden rounded-xl border border-[#F2F2F2] bg-white p-10
        shadow-[0px_5px_10px_#DBDBDB33,0px_18px_18px_#DBDBDB2B,0px_42px_25px_#DBDBDB1A,0px_74px_30px_#DBDBDB08] sm:block"
      >
        <div className="grid grid-cols-3 gap-[5%]">
          {data.headers.map((item, index) => (
            <HeaderCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-md space-y-[1.5%]">
          {data.rows.map((row, index) => (
            <DesktopRow key={index} row={row} />
          ))}
        </div>
      </div>

         {/* Mobile */}
       <div className="sm:hidden">
        <div className="overflow-hidden bg-white py-[1vw]">
          <MobileHeaderRow
            headers={data.headers}
            activeIndex={activeMobileIndex}
          />
        </div>

        <div className="mt-4 space-y-4 overflow-hidden">
          {data.rows.map((row, index) => (
            <div
              key={index}
              className="transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${activeMobileIndex * 80}%)`,
              }}
            >
              <MobileRow row={row} />
            </div>
          ))}
        </div>

        <MobilePagination
          current={activeMobileIndex}
          total={3}
          onChange={setActiveMobileIndex}
        />
      </div>
    </section>
  );
}