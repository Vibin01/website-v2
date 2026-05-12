type CardItem = {
  dimension: string;
  interaction: string;
  outcome: string;
  image: string;
};

const cardsData: CardItem[] = [
  {
    image: "/home/seam-situation-direction.svg",
    dimension: "Situation ↔ Direction",
    interaction: "Candidate realities meet employer-designed roles",
    outcome: "Expectation alignment and decision confidence",
  },
  {
    image: "/home/seam-execution-situation.svg",
    dimension: "Execution ↔ Situation",
    interaction: "Recruiter coordination meets candidate engagement",
    outcome: "Communication continuity and interview reliability",
  },
  {
    image: "/home/seam-direction-execution.svg",
    dimension: "Direction ↔ Execution",
    interaction: "Employer direction actively guides recruiting activity",
    outcome: "Strategic priority alignment and recruiting execution",
  },
];

function SeamCard({ item }: { item: CardItem }) {
  return (
    <div className="flex-shrink-0 basis-[90%] sm:basis-0 bg-white border border-[#D3E6FF] rounded-md p-sm shadow-[0px_4px_40px_5px_#0668E11A]">
      
      {/* Image */}
      <div className="w-full flex items-center justify-center">
        <img src={item.image} alt={item.dimension} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="mt-sm ">
        <p className="font-bold text-xl">Dimension</p>
        <p className="text-xl font-medium">{item.dimension}</p>

        <p className="font-bold text-xl mt-sm">
          Dimension Interaction
        </p>
        <p className="text-xl font-medium">
          {item.interaction}
        </p>

        <p className="font-bold text-xl text-[#0668E1] mt-sm">Outcome</p>
        <p className="text-xl font-medium">
          {item.outcome}
        </p>
      </div>
    </div>
  );
}

export default function HiringSeams() {
  return (
      <div className="w-full">

        {/* Heading */}
        <h1 className="text-h2 font-extrabold mb-lg">
          Seams of the Hiring System
        </h1>

        {/* Subheading */}
        <p className="text-base font-medium">
          Three actors create three behavioral seams in the hiring system.
        </p>

        {/* Cards */}
        <div className=" flex overflow-x-scroll sm:overflow-x-visible scrollbar-hidden sm:grid sm:grid-cols-3 gap-md mt-xs">
          {cardsData.map((item, index) => (
            <SeamCard key={index} item={item} />
          ))}
        </div>

        {/* Bottom Content */}
        <div className="w-full mt-sm space-y-sm ">

          <p className="text-base font-medium">
            Every hiring breakdown can be traced to a broken seam.
          </p>

          <p className="text-base font-medium">
            When seams weaken, predictable hiring friction appears:
          </p>

          {/* Bullet Row */}
          <div className="w-full flex flex-col sm:flex-row gap-[3%] sm:items-center">

            {[
              "Expectations diverge",
              "Communication disappears",
              "Strategy loses direction",
            ].map((text, i) => (
              <div key={i} className="flex items-center text-base font-medium gap-xs text-nowrap">
                <span>▶</span>
                <span className="font-semibold">{text}</span>
              </div>
            ))}

          </div>

          <p className="text-base font-medium">Friction spreads across the hiring system.</p>
        </div>
      </div>
  );
}