type InsightCard = {
  icon: string;
  text: string;
  active?: boolean;
};

type HeroInsightCardsSectionProps = {
  data: {
    title: string;
    subtitle: string;
    cards: InsightCard[];
  };
};

export default function HeroInsightCardsSection({
  data,
}: HeroInsightCardsSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center py-[5%]">
      <h1 className="text-h1 text-center font-extrabold text-[#0668E1]">
        {data.title}
      </h1>

      <h2 className="text-h2 text-center font-extrabold">
        {data.subtitle}
      </h2>

      <div className="mt-[2%] flex w-full flex-col items-center gap-3 px-[1%] md:flex-row md:justify-between md:px-0 md:gap-[1.5vw]">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className={`
              flex gap-[clamp(8px,calc(12/_var(--width)_*_100vw),30px)] rounded-[12px]
              border border-[#D0E5FF] bg-white p-[clamp(12px,calc(16/_var(--width)_*_100vw),40px)]
              shadow-[0px_2px_10px_2px_#0668E10D]
              md:flex-col items-start md:justify-center
              ${card.active ? "w-full" : "w-[90%]"}
            `}
          >
            <div
              className={`flex shrink-0 items-center justify-center ${
                card.active
                  ? "size-[clamp(32px,calc(52/_var(--width)_*_100vw),100px)]"
                  : "size-[clamp(24px,calc(34/_var(--width)_*_100vw),80px)]"
              }`}
            >
              <img
                src={card.icon}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-left text-xl font-medium text-[#1B1C17] md:text-base">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}