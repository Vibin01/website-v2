import { FaArrowRight } from "react-icons/fa6";

const cardData = [
  {
    icon: "/home/icons/three-actors-icon.svg",
    title: "Three actors",
    items: ["Candidate", "Employer", "Recruiter"],
  },
  {
    icon: "/home/icons/three-dimensions-icon.svg",
    title: "Three dimensions",
    items: ["Situation", "Direction", "Execution"],
  },
  {
    icon: "/home/icons/one-outcome-icon.svg",
    title: "One Outcome",
    items: ["Seamless Yield"],
  },
];

export default function FlowCards() {
  return (
    <div className="flex w-full overflow-x-scroll scrollbar-hidden">
      <div className="w-full flex  px-md sm:grid sm:grid-cols-3 gap-lg">
        {cardData.map((card, index) => (
          <div key={index} className="relative flex-shrink-0 basis-[70%] sm:basis-auto ">
            {/* Icon Box */}
            <div className="absolute size-iconsize-xl p-xs left-[4%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex  items-center justify-center rounded-[2px] sm:rounded-[8px] bg-[#0668E1]">
                <img src={card.icon} alt={`${card.title} icon`} className="w-full h-auto" />
            </div>

            {/* Main Box */}
            <div className=" ml-[5%] pl-[10%] py-[3%]  flex flex-col justify-center text-nowrap rounded-md bg-[#044AA0] ">
              <p className="text-base font-bold text-white mb-[2%]">
                {card.title}
              </p>

              <div className="flex items-center gap-xs text-lg font-semibold text-white">
                {card.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-xs">
                    <span>{item}</span>
                    {itemIndex !== card.items.length - 1 && <span><FaArrowRight/></span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}