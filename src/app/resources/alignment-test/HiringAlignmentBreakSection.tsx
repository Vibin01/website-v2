import Image from "next/image";

const audienceCards = [
  {
    icon: "/icons/candidate-icon.svg",
    title: "For Candidates",
    description: "Navigate interviews better",
  },
  {
    icon: "/icons/recruiter-icon.svg",
    title: "For Recruiters",
    description: "Reduce drop-offs and wrong hires",
  },
  {
    icon: "/icons/employer-icon.svg",
    title: "For Employers",
    description: "Improve role clarity and team fit",
  },
];

export default function HiringAlignmentBreakSection() {
  return (
    <section className="w-full py-[5%]">
      <div className="w-full text-center">
        
        {/* Heading */}
        <h2 className="text-h1 font-extrabold text-[#0668E1]">
          Where Does
          <br />
          Hiring Alignment Break?
        </h2>

        {/* Subtitle */}
        <p className=" text-h6 font-bold text-[#1B1C17]">
          Test how your decisions shift across real hiring situations.
        </p>

        {/* Cards */}
        <div className="mt-lg flex flex-col gap-sm px-sm md:flex-row justify-center">
          {audienceCards.map((card, index) => (
            <div
              key={index}
              className="md:w-[28%] rounded-md border border-[#D0E5FF] bg-white p-sm shadow-[0px_4px_40px_5px_#0668E10D]"
            >
              
              {/* Icon */}
              <div className="flex size-iconsize-md  items-center justify-center rounded-full bg-[#E6F0FC]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={28}
                  height={28}
                  className="h-auto w-auto"
                />
              </div>

              {/* Title */}
              <h3 className="mt-sm text-xl font-bold text-[#1B1C17] text-left">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xl font-medium text-[#2C2C2C] text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}