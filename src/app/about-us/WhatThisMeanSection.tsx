const meansCards = [
  {
    icon: "/about/icons/candidate-icon.svg",
    title: "For Candidates",
    points: [
      "Clear interview timelines",
      "Visibility into progress clarifies",
      "Confident career decisions",
    ],
  },
  {
    icon: "/about/icons/recruiters-icon.svg",
    title: "For Recruiters",
    points: [
      "Structured coordination across stages",
      "Reduced drop-offs and no-shows",
      "Stronger offer conversion",
    ],
  },
  {
    icon: "/about/icons/employers-icon.svg",
    title: "For Employers",
    points: [
      "Visibility into hiring demand and progress",
      "Early signals across interviews and offers",
      "Alignment between direction and execution",
    ],
  },
];

export default function WhatThisMeansSection() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold leading-[44px] text-[#2C2C2C]">
          What this means
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meansCards.map((card) => (
            <div
              key={card.title}
              className="rounded-md border border-[#D0E5FF] bg-white p-4 shadow-[0px_4px_40px_5px_#0668E10D]"
            >
              <div className="flex items-center gap-4 rounded-md border border-[#D0E5FF] bg-white px-4 py-3">
                                <img src={card.icon} alt="" className="size-[30px] md:size-iconsize-md " />


                <h3 className="text-base font-bold text-[#0668E1]">
                  {card.title}
                </h3>
              </div>

              <div className="mt-6 space-y-7">
                {card.points.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                  <img src={"/icons/tick-gradient-icon.svg"} alt="tick icon" className="size-iconsize-sm" />

                    <p className="text-xl font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}