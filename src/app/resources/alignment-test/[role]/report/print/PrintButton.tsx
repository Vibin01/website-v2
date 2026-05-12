"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex h-[54px] items-center gap-sm rounded-sm bg-[#0668E1] px-8 text-xl font-medium text-white"
    >
      Download Report
    </button>
  );
}