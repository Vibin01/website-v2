const steps = ["Offer Accepted", "Signal Deployed", "Engagement Tracked"];

const engagementData = [
  {
    value:"25",
    percentage: "25%",
    label: "High Engagement",
    mobileLabel:"High",
    color: "bg-[#044AA0]",
    textColor: "text-[#044AA0]",
    rounded: "rounded-l-[4px]",
  },
  {
    value:"47",
    percentage: "47%",
    label: "Moderate Engagement",
    mobileLabel:"Moderate",
    color: "bg-[#0668E1]",
    textColor: "text-[#044AA0]",
  },
  {
    value:"28",
    percentage: "28%",
    label: "Low Engagement",
    mobileLabel:"Low",
    color: "bg-[#589AEB]",
    textColor: "text-[#044AA0]",
    rounded: "rounded-r-[4px]",
  },
];

export default function CandidateEngagementFlow() {
  return (
    <div className="mx-auto">
      <h2 className="text-base font-bold leading-[100%] text-[#1B1C17]">
        Candidate Engagement Flow
      </h2>

  <div className="mt-4 w-full rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">

{/* Steps */}
<div className="grid w-full grid-cols-3 text-xl font-bold text-[#2C2C2C]">
  <div className="flex items-center justify-start gap-[6vw]">
    <span className="text-left">Offer Accepted</span>
    <span className="hidden md:flex ">→</span>
  </div>

  <div className="flex items-center justify-center gap-[6vw]">
    <span className="text-center">Signal Deployed</span>
    <span className="hidden md:flex">→</span>
  </div>

  <div className="flex items-center justify-end">
    <span className="text-end">Engagement Tracked</span>
  </div>
</div>

  {/* Bar */}
  <div className="mt-6 flex w-full h-[4vw] overflow-hidden rounded-[4px]">
    {engagementData.map((item, index) => (
      <div
        key={index}
        style={{ width: item.value + "%" }} 
        className={`${item.color}  h-[4wv]`}
      />
    ))}
  </div>

  <div className="mt-3 flex w-full">
    {engagementData.map((item, index) => (
      <div
        key={index}
        style={{ width: item.value + "%" }}
        className="text-center text-base font-bold text-[#044AA0]"
      >
        {item.percentage}
      </div>
    ))}
  </div>

  {/* Labels */}
  <div className="flex  w-full">
    {engagementData.map((item, index) => (
      <div
        key={index}
        style={{ width: item.value + "%" }}
        className="text-center text-xl font-medium text-[#2C2C2C]"
      >
        <span className="block md:hidden">{item.mobileLabel}</span>
<span className="hidden md:block">{item.label}</span>
      </div>
    ))}
  </div>
</div>

      <p className="mt-4 text-base font-medium text-[#1B1C17]">
        Engagement is not assumed. it is measured before Day 1.
      </p>
    </div>
  );
}
