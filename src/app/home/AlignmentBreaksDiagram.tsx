type CornerCard = {
  title: string;
  subtitle: string;
  icon: string;
  position:
    | "top"
    | "bottomLeft"
    | "bottomRight";
};

const cornerCards: CornerCard[] = [
  {
    title: "RECRUITER",
    subtitle: "Execution",
    icon: "/icons/recruiter.png",
    position: "top",
  },
  {
    title: "EMPLOYER",
    subtitle: "Direction",
    icon: "/icons/employer.png",
    position: "bottomLeft",
  },
  {
    title: "CANDIDATES",
    subtitle: "Situation",
    icon: "/icons/candidates.png",
    position: "bottomRight",
  },
];

function CornerBox({
  title,
  subtitle,
  icon,
  position,
}: CornerCard) {
  const positionClass = {
    top: "-top-[25%] left-1/2 -translate-x-1/2",
    bottomLeft: "-bottom-[15%] right-[100%] ",
    bottomRight: "-bottom-[15%] left-[100%]",
  }[position];

  return (
    <div
      className={`absolute ${positionClass} flex h-[84px] w-[214px] items-center gap-3 rounded-md border border-[#C9DCF8] bg-[#F7F7F7] px-5 shadow-[0px_4px_12px_rgba(6,104,225,0.08)]`}
    >
      <div className="flex h-[34px] w-[34px] items-center justify-center overflow-hidden rounded-[8px] bg-[#EAF2FF]">
        <img
          src={icon}
          alt={title}
          className="h-[24px] w-[24px] object-contain"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-[14px] font-extrabold leading-[20px] text-[#0668E1]">
          {title}
        </p>
        <p className="text-[16px] font-semibold leading-[22px] text-[#1B1C17]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function AlignmentBreaksDiagram() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Where Alignment Breaks
        </h2>

        <div className="relative flex items-center justify-center mt-sm p-md  overflow-hidden rounded-lg bg-[url('/background/bg-alignment-breaks.svg')] bg-white border border-[#F2F2F2] shadow-[0px_4px_40px_5px_#0668E11A]">
    
          {/* Center triangle image */}
          {/* <div className=" flex justify-center items-center h-full">
            <div className=" relative h-[40vh]">
          {cornerCards.map((card) => (
            <CornerBox key={card.position} {...card} />
          ))}
            <img
              src="/home/Triangle.svg"
              alt="Alignment triangle diagram"
              className="h-full w-auto object-contain"
            />
            </div>
          </div> */}
          <div>
          <img
            src="/home/alignment-breaks-triangle.svg"
            alt="Alignment triangle diagram"
            className="h-full sm:h-[60vh] w-auto object-cover scale-[105%] sm:scale-none"
            />
            </div>
        </div>
      </div>
    </section>
  );
}