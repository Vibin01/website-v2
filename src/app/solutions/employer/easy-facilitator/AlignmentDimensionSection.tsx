const comparisonCards = [
  {
    title: "Without Easy Facilitator",
    icon: "info-red-icon",
    points: [
      "Offer accepted, engagement silently drops",
      "Communication gaps create growing uncertainty",
      "No structured reinforcement after offer",
      "Commitment momentum erodes before joining",
    ],
  },
  {
    title: "With Easy Facilitator",
    icon: "tick-gradient-icon",
    points: [
      "Engagement begins immediately after offer",
      "Structured signals reinforce candidate intent",
      "Personalized content builds early connection",
      "Commitment momentum strengthens toward joining",
    ],
  },
];

export default function AlignmentDimensionsSection() {
  return (
    <div className="mx-auto ">
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
      <p className="text-base font-medium text-center mt-[1.5vw]"  >Structured engagement converts <span className="font-bold">acceptance into Joining.</span></p>
    </div>
  );
}
