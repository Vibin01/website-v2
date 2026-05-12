import React from 'react'

const comparisonCards = [
  {
    title: "Without Easy Navigator",
    icon: "info-red-icon",
    points: [
      "Declines appear random and isolated",
      "Drop-offs lack clear explanation patterns",
      "Misalignment signals remain invisible early",
      "Hiring reacts after outcomes weaken",
    ],
  },
  {
    title: "With Easy Navigator",
    icon: "tick-gradient-icon",
    points: [
      "Declines convert into measurable signals",
      "Patterns reveal where alignment weakens",
      "Misalignment is detected early across stages",
      "Hiring shifts from reaction to direction",
    ],
  },
];

const ComparisonCardSection = () => {
  return (
    <div>
      <div className="mt-[1.5vw] grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
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
      <p className='mt-[1.5vw] text-center text-base font-medium'>Easy Navigator converts declines signals into<span className='font-bold'>alignment Intelligence.</span> </p>
      </div>
  )
}

export default ComparisonCardSection