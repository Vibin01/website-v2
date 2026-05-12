type Mechanism = {
  number: string;
  title: string;
  description: string;
};

const mechanisms: Mechanism[] = [
  {
    number: "1",
    title: "Alignment Trigger",
    description: "Captures intent and participation.",
  },
  {
    number: "2",
    title: "Alignment Signal",
    description:
      "Transforms behaviour into measurable hiring insight.",
  },
  {
    number: "3",
    title: "Alignment Spectrum",
    description:
      "Makes engagement and commitment visible across the hiring system.",
  },
];

function MechanismCard({ item }: { item: Mechanism }) {
  return (
    <div className="flex items-start gap-xs rounded-md border border-[#D3E6FF] bg-white p-sm">
      
      {/* Number */}
      <div className="flex size-iconsize-sm  shrink-0 items-center justify-center rounded-full bg-[#0668E1]">
        <span className="text-xl font-medium text-white">
          {item.number}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base font-bold text-[#1B1C17]">
          {item.title}
        </h3>
        <p className="mt-xs text-xl font-medium text-[#2C2C2C]">
          {item.description}
        </p>
      </div>
    </div>
  );
}


export default function AAAAlignmentMechanismSection() {
  return (
    <section className="flex flex-col md:flex-row  items-center justify-between">
      
      {/* Left */}
      <div className="md:w-[60%]">
        <p className="text-base text-[#1B1C17] mt-md">
          AAA restores alignment through three core behavioural mechanisms.
        </p>

        {/* Cards */}
        <div className="mt-sm flex flex-col gap-[1vw]">
          {mechanisms.map((item) => (
            <MechanismCard key={item.number} item={item} />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-sm">
          <p className="text-base font-medium text-[#1B1C17]">
            Together, these mechanisms govern participation, feedback, and commitment across the hiring journey.
          </p>

          <p className="mt-sm text-h6 font-bold text-[#0668E1]">
            AAA restores alignment across every seam of the hiring system.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center items-center h-full md:w-[35%] p-md">
        
      <img src="/home/aaa-alignment-mechanism-diagram.svg" alt="AAA Alignment Mechanism Diagram" className="h-auto w-full  " />
    </div></section>
  );
}