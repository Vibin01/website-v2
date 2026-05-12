const systemCards = [
  {
    icon: "/about/icons/candidate-icon.svg",
    title: "For Candidates",
    text: "Candidates experience gaps in feedback and clarity",
  },
  {
    icon: "/about/icons/recruiters-icon.svg",
    title: "For Recruiters",
    text: "Recruiters coordinate across fragmented tools and signals",
  },
  {
    icon: "/about/icons/employers-icon.svg",
    title: "For Employers",
    text: "Employers operate without visibility into execution and outcomes",
  },
];

const scatterSignals = [
  "Decisions delay.",
  "Execution weakens.",
  "Outcomes become uncertain.",
];

export default function AlignmentWeakensSection() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <p className="text-base font-bold text-[#1B1C17]">
          When alignment weakens across interactions,
        </p>

        <p className="mt-1 text-base font-medium text-[#1B1C17]">
          signals fragment, visibility drops, and momentum slows.
        </p>

        <p className="mt-6 text-base font-bold text-[#1B1C17]">
          Across the hiring system:
        </p>

        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-3">
          {systemCards.map((card, index) => (
            <div
              key={index}
              className="rounded-md border border-[#D0E5FF] bg-white p-4 shadow-[0px_0px_40px_5px_#0668E11A]"
            >
                <img src={card.icon} alt="" className="size-[30px] md:size-iconsize-md " />

              <p className="mt-2 text-base font-bold text-[#0668E1]">
                {card.title}
              </p>

              <p className="text-xl font-medium text-[#1B1C17]">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-base font-bold leading-[24px] text-[#1B1C17]">
          As signals scatter:
        </p>

        <div className="mt-2 grid grid-cols-1 gap-3 rounded-md border border-[#FFD3CA] bg-[#FFF4F2] px-4 py-4 md:grid-cols-3">
          {scatterSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={"/icons/info-red-icon.svg"} alt="icon info" className="size-iconsize-sm p-[0.5%]"/>
              <p className="text-xl font-medium text-[#F0431D]">
                {signal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}