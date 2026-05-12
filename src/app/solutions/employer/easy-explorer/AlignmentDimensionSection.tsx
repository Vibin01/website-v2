const alignmentDimensions = [
  {
    title: "Position Load (P)",
    descriptions: [
      "Hiring Demand pressure.",
      "Number of active positions.",
    ],
  },
  {
    title: "Execution Intensity (S/P)",
    descriptions: [
      "Execution efforts per position.",
      "Recruiter Capacity allocation.",
    ],
  },
  {
    title: "Commitment Rate (Oa/Or)",
    descriptions: [
      "Offer acceptance alignment.",
      "Conversion reliability.",
    ],
  },
  {
    title: "Hiring Velocity (J/P)",
    descriptions: [
      "Joiners per active position.",
      "Hiring throughput capacity.",
    ],
  },
];

const explanationPoints = [
  "Why misalignment emerges.",
  "Where it accumulates.",
  "How to restore alignment.",
];

const comparisonCards = [
  {
    title: "Without Easy Explorer",
    icon: "info-red-icon",
    points: [
      "Activity is visible, pressure is hidden",
      "Workload builds without early signals",
      "Imbalance appears only after slowdown",
      "Decisions react after alignment breaks",
    ],
  },
  {
    title: "With Easy Explorer",
    icon: "tick-gradient-icon",
    points: [
      "Pressure zones become clearly visible",
      "Workload imbalance is detected early",
      "Alignment gaps surface before disruption",
      "Decisions shift from reaction to control",
    ],
  },
];

export default function AlignmentDimensionsSection() {
  return (
    <div className="mx-auto space-y-[1.5vw]">
      {/* Top Box */}
      <div className="w-full rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]">
        <h2 className="text-base font-bold text-[#1B1C17]">
          The four Alignment Dimensions
        </h2>

        {/* 4 Columns */}
        <div className="mt-6 grid grid-cols-1 gap-[1.5vw] sm:grid-cols-2 md:grid-cols-4">
          {alignmentDimensions.map((item, index) => (
            <div key={index} className=" flex gap-[1.5vw] md:flex-col">
              <div className="h-8 w-8 rounded-[8px] bg-[#E6F0FC]" />
              <div className="space-y-2">
              <p className="text-xl font-bold text-[#2C2C2C]">
                {item.title}
              </p>
              {item.descriptions.map((description, descIndex) => (
                <p key={descIndex} className="text-xl text-[#2C2C2C]">
                  {description}
                </p>
              ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="mt-6">
          <p className="text-base font-bold text-[#2C2C2C]">
            These four dimensions explain:
          </p>

          <div className="mt-3 flex flex-col gap-[1vw] text-xl text-[#2C2C2C] md:flex-row justify-between md:flex-wrap">
            {explanationPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-[1.5vw]">
                <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
                  />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
        {comparisonCards.map((card, index) => (
          <div
            key={index}
            className="w-full rounded-md border border-[#D3E6FF] bg-white p-6 shadow-[0px_4px_40px_5px_#0668E11A]"
          >
            <div className="h-[60px] w-[60px] rounded-[12px] bg-[#F2F8FF]" />

            <h3 className="mt-4 text-base font-bold text-[#1B1C17]">
              {card.title}
            </h3>

            <div className="mt-4 space-y-3 text-xl text-[#2C2C2C]">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex gap-2">
                  <img
                    src={`/icons/${card.icon}.svg`}
                    alt="tick icon"
                    className=" size-iconsize-sm p-[0.1%]"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}