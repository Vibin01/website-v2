import Image from "next/image";

const leftPoints = [
  "Interviews and schedules remain coordinated",
  "Feedback and updates move consistently across stages",
  "Engagement signals continue across the entire journey",
];

const rightPoints = [
  "What was unclear becomes visible.",
  "What was delayed becomes timely.",
  "What was uncertain becomes predictable.",
];

function PointCard({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-md border border-[#D3E6FF] bg-white px-4 py-3 shadow-[0px_2px_10px_2px_#0668E10D]">
      <img src={"/icons/tick-gradient-icon.svg"} alt="tick icon" className="size-iconsize-sm" />
      <p className="text-xl font-medium text-start text-[#2C2C2C]">
        {text}
      </p>
    </div>
  );
}

export default function AlignmentRestoreSection() {
  return (
    <section className="w-full">
      <div className="mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-h2 font-extrabold text-[#2C2C2C]">
          Connect EC restores alignment
        </h2>

        <p className="mt-2 text-base font-medium">
          Connect EC brings the hiring journey into one visible, connected flow:
        </p>

        {/* Layout */}
        <div className="mt-md flex flex-col md:flex-row items-center justify-around gap-6">
          
          {/* Left */}
          <div className="flex flex-col gap-7 md:w-[29%]">
            {leftPoints.map((point, i) => (
              <PointCard key={i} text={point} />
            ))}
          </div>

          {/* Center Phone */}
          <div className="flex justify-center md:w-[40%]">
            <Image
              src="/about/alignment-restore.svg"
              alt="App Preview"
              width={260}
              height={450}
              className="w-full h-auto"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col md:w-[27%] gap-7">
            {rightPoints.map((point, i) => (
              <PointCard key={i} text={point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}