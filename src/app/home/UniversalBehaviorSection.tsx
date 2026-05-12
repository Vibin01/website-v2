
type Card = {
  textTop: string;
  textBottom: string;
  icon: string;
};

const cards: Card[] = [
  {
    textTop: "Candidates seek the",
    textBottom: "right opportunity.",
    icon: "/home/icons/right-opportunity-icon.svg",
  },
  {
    textTop: "Recruiters seek",
    textBottom: "successful placements.",
    icon:"/home/icons/successful-placements-icon.svg",
  },
  {
    textTop: "Employers seek the right",
    textBottom: "talent to be hired efficiently.",
    icon: "/home/icons/right-talent-icon.svg",
  },
];

const flowTexts = ["Different goals", "Same aspiration", "Seamless Yield"];

function CardItem({ item }: { item: Card }) {
  return (
    <div className="flex p-sm items-start sm:items-center gap-xs rounded-md border border-[#D3E6FF] bg-white shadow-[0px_0px_40px_5px_rgba(6,104,225,0.10)]">
      <div className="flex size-iconsize-lg p-[1%] items-center justify-center rounded-md bg-[#E7F0FC]">
        <img src={item.icon} alt="Icon" className="size-full object-contain" />
      </div>

      <p className="text-base text-[#1B1C17]">
        <span className="font-medium">{item.textTop}</span>
        <br />
        <span className="font-bold">{item.textBottom}</span>
      </p>
    </div>
  );
}

function FlowSection() {
  return (
    <div className="mt-lg p-sm flex w-full sm:w-[75%] flex-col items-center justify-center rounded-md bg-[#E7F0FC]">
      <div className="flex flex-col sm:flex-row items-center gap-lg">
        {flowTexts.map((text, index) => (
          <div key={text} className="flex flex-col sm:flex-row items-center gap-[4vw]">
            <span className="text-base font-bold">{text}</span>

            {index !== flowTexts.length - 1 && (
              <span className="text-base font-bold rotate-90 sm:rotate-0">→</span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-md text-h6 font-bold text-[#0668E1] text-center">
        Everyone Aspires Seamless Yield.
      </p>
    </div>
  );
}

export default function UniversalBehaviorSection() {
  return (
    <section className="mx-auto flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-center text-h2 font-extrabold text-[#1B1C17] mb-lg">
        The Universal Behaviour Principle
      </h1>

      {/* Subtitle */}
      <p className="text-center text-base font-medium">
        Across the hiring ecosystem, every participant ultimately seeks the same outcome.
      </p>

      {/* Cards */}
      <div className="mt-sm w-full grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {cards.map((card, index) => (
          <CardItem key={index} item={card} />
        ))}
      </div>

      {/* Flow */}
      <FlowSection />

      {/* Bottom Text */}
      <div className="mt-sm flex flex-col items-center gap-sm">
        <p className="text-center text-base font-medium">
          But aspiration alone does not produce outcomes.
        </p>
        <p className="text-center text-base font-medium">
          Seamless Yield requires a system that aligns behaviour across the hiring system.
        </p>
      </div>
    </section>
  );
}