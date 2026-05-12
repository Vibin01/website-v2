
import type { ComponentType } from "react";

type AlignmentComparisonData = {
  title: string;
  cards: {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string[];
    points: string[];
    footer: string[];
  }[];
};

export default function AlignmentSection({data}: {data: AlignmentComparisonData}) {
  return (
    <section className="w-full bg-white ">
      <h2 className="text-h2 font-extrabold  text-[#1B1C17]">
        {data.title}
      </h2>

      <div className="mt-lg grid grid-cols-1 gap-sm md:grid-cols-3">
        {data.cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="rounded-md border border-[#D3E6FF] bg-white p-sm shadow-[0px_4px_40px_5px_rgba(6,104,225,0.10)]"
            >
              <div className="flex items-center gap-xs">
                <div className="flex size-iconsize-md items-center justify-center rounded-xs bg-[#EAF4FF]">
                  <Icon className="size-[14px] text-[#0668E1]" />
                </div>

                <h3 className="text-h5 font-bold text-[#1B1C17]">
                  {card.title}
                </h3>
              </div>

              <div className="mt-md space-y-sm">
                {card.description.map((text, i) => (
                  <p
                    key={i}
                    className="text-xl font-medium text-[#1B1C17]"
                  >
                    {text}
                  </p>
                ))}
              </div>

              <ul className="mt-md space-y-xs">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-xs text-xl font-medium text-[#1B1C17]"
                  >
                   <img
                      src="/icons/tick-gradient-icon.svg"
                      alt="icons tick"
                      className="size-iconsize-sm"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-md space-y-xs">
                {card.footer.map((text, i) => (
                  <p
                    key={i}
                    className={`text-xl text-[#1B1C17] ${
                      i === card.footer.length - 1
                        ? "font-extrabold"
                        : "font-medium"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}