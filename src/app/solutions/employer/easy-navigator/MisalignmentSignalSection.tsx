const misalignmentPoints = [
  "Compensation misalignment",
  "Process misalignment",
  "Role value misalignment",
  "Market misalignment",
];

export default function MisalignmentSignalsCard() {
  return (
    <div className="w-full rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)] font-['IBM_Plex_Sans']">
      
      {/* Top Info Box */}
      <div className="w-full rounded-sm border border-[#B2D0F6] bg-[#EEF6FF] px-4 py-4 text-xl font-medium leading-6 text-[#0668E1]">
        Decline patterns convert hiring outcomes into{" "}
        <span className="font-bold ">
          measurable alignment signals.
        </span>
      </div>

      {/* Title */}
      <div className="mt-6">
        <h3 className="text-base font-bold leading-[26px] text-[#2C2C2C]">
          Investigate Misalignment Signals
        </h3>

        {/* Points */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          {misalignmentPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              
              {/* Number Circle */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0668E1] text-[12px] font-bold text-white">
                {index + 1}
              </div>

              {/* Text */}
              <p className="text-xl font-medium leading-6 text-[#2C2C2C]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}