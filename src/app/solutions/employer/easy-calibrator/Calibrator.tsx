"use client";

const baseHires = 104;

export const leverCards = [
  {
    title: "Hiring Velocity",
    recoveryTitle: "Hiring Velocity",
    recoveryStatus:"Improved",
    recoveryDesc: "Eliminate delays, improve throughput",
    items: [
      { text: "Expand and diversify talent pipelines", value: "+3 Hires" },
      { text: "Increase interview scheduling frequency", value: "+3 Hires" },
      { text: "Eliminate delays across hiring stages", value: "+2 Hires" },
    ],
  },
  {
    title: "Interview Acceptance",
    recoveryTitle: "Interview Acceptance",
    recoveryStatus:"Optimized",
    recoveryDesc: "Reduce friction, align expectations",
    items: [
      { text: "Reduce interview scheduling friction points", value: "+2 Hires" },
      { text: "Improve recruiter responsiveness and coordination", value: "+2 Hires" },
      { text: "Align expectations before interview stages", value: "+1 Hire" },
    ],
  },
  {
    title: "Offer Acceptance",
    recoveryTitle: "Offer Acceptance",
    recoveryStatus:"Strengthened",
    recoveryDesc: "Align role, compensation",
    items: [
      { text: "Reduce offer delays and uncertainty gaps", value: "+3 Hires" },
      { text: "Strengthen value communication and positioning", value: "+3 Hires" },
      { text: "Align compensation with market expectations", value: "+3 Hires" },
    ],
  },
];

const getValue = (val: string) => parseInt(val) || 0;

type CalibratorProps = {
  ranges: number[];
  setRanges: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Calibrator({ ranges, setRanges }: CalibratorProps)  {

  const getCardTotal = (index: number) => {
    return leverCards[index].items
      .slice(0, ranges[index])
      .reduce((sum, item) => sum + getValue(item.value), 0);
  };

  let runningTotal = baseHires;

  const recoverySteps = [
    {
      value: baseHires,
      title: "Baseline",
      desc: "Misalignment present",
      totalHires:"",
      status:"",
      active: true,
    },
    ...leverCards.map((card, index) => {
      const gain = getCardTotal(index);
      runningTotal += gain;

      return {
        value: runningTotal,
        title: card.recoveryTitle,
        totalHires:`(${gain > 0 ? "+" : ""}${gain} hires)`,
         status: ranges[index] === card.items.length ? card.recoveryStatus : "",
        desc: card.recoveryDesc,
        active: gain > 0,
      };
    }),
  ];

  return (
    <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6 mt-6">
      
      {/* LEFT SIDE */}
      <div className="space-y-6">
        {leverCards.map((card, index) => {
          const total = getCardTotal(index);

          return (
            <div
              key={index}
              className="bg-white border border-[#D1E4FF] rounded-md p-4 shadow-[0px_4px_40px_5px_#0668E11A]"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base">{card.title}</h3>

                <div
                  className={`rounded-[8px] border px-3 py-1 text-xl font-bold ${
                    total > 0
                      ? "bg-[#E7FFF3] border-[#9ADFA9] text-[#2B9B43]"
                      : "bg-[#FFF4F2] border-[#FFD3CA] text-[#F0431D]"
                  }`}
                >
                  {total > 0 ? "+" : ""}
                  {total} Hires
                </div>
              </div>

              {/* SLIDER */}
              <input
                type="range"
                min={0}
                max={3}
                value={ranges[index]}
                onChange={(e) => {
                  const newRanges = [...ranges];
                  newRanges[index] = Number(e.target.value);
                  setRanges(newRanges);
                }}
                className="mt-3 w-full"
              />

              {/* ITEMS */}
              {ranges[index] > 0 && (
                <div className="mt-4 space-y-2 text-xl text-[#2C2C2C]">
                  {card.items.slice(0,ranges[index]).map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between gap-4"
                    >
                      <span>{item.text}</span>
                      <span>
                        {itemIndex < ranges[index]
                          ? item.value
                          : "0 Hires"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white border border-[#D1E4FF] rounded-md p-4 shadow-[0px_4px_40px_5px_#0668E11A]">
        <h3 className="font-bold text-base">Alignment Recovery Path</h3>

        <p className="mt-1 text-xl text-[#2C2C2C]">
          How calibration restores hiring alignment
        </p>

        <div className="mt-4 space-y-4">
          {recoverySteps.map((step, index) => (
            <div key={index}>
              
              <div
                className={`text-h2 font-extrabold ${
                  index === 0
                    ? "text-[#0668E1]"
                    : step.active
                    ? "text-[#2B9B43]"
                    : "text-[#7A7A7A]"
                }`}
              >
                {step.value}
              </div>

              <div className="font-bold text-xl">
  {step.title}
  {step.status && (
    <span > {step.status}</span>
  )} {" "}
  {step.totalHires}
</div>
              <div
                className={`text-xl ${
                  step.active || index === 0
                    ? "text-[#2C2C2C]"
                    : "text-[#7A7A7A]"
                }`}
              >
                {step.desc}
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2 mt-4 text-lg text-[#2C2C2C]">
            <div className="w-4 h-4 bg-[#0668E1] rounded-full" />
            <span>Derived from your hiring data.</span>
          </div>
        </div>
      </div>
    </div>
  );
}