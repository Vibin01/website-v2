import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

type TopItem = {
  text: string;
};

const topItems: TopItem[] = [
  { text: "What candidates experience" },
  { text: "What employers require" },
  { text: "How recruiters operate" },
];

const flowSteps = [
  "Situation becomes visible",
  "Direction becomes aligned",
  "Execution becomes consistent",
  "Momentum builds",
  "Outcomes compound",
];

const bottomTexts = [
  "Situation, Direction, and Execution are aligned.",
  "The outcome is reliable.",
  "This state is called:",
  " EASY: Everyone Achieves Seamless Yield",
];

function TopCard({ text }: TopItem) {
  return (
    <div className="flex items-center gap-xs rounded-md border-l-[6px] border-[#0668E1] bg-[#E6F0FC] p-sm">
      <img
        src="/icons/question-icon.svg"
        alt="question icon"
        className="size-iconsize-sm"
      />
      <p className="text-base font-medium text-[#1B1C17]">{text}</p>
    </div>
  );
}

function FlowStep({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-xs mb-xs">
      <img
        src="/icons/tick-gradient-icon.svg"
        alt="tick gradient icon"
        className="size-iconsize-sm"
      />
      <p className="text-base font-bold text-[#0668E1]">{text}</p>
    </div>
  );
}

function RightCard() {
  return (
    <div className="mt-xl w-full h-fit sm:w-[35%] rounded-md bg-white p-md shadow-[0px_4px_35px_4px_#0668E11A]">
      <h3 className="text-center text-base font-bold text-[#0668E1]">
        Everyone Achieves Seamless Yield
      </h3>

      {/* Diagram */}
      <div className="relative mx-auto mt-[24px] h-auto w-full">
        <img
          src="/home/achive-seamless-yield.svg"
          alt="Aspiration to Achievement Diagram"
          className="size-full"
        />
      </div>

      {/* Bottom labels */}
      <div className="mx-auto mt-[1vw] flex w-full justify-between">
        {["Candidate", "Recruiter", "Employer"].map((item) => (
          <p key={item} className="text-xl font-medium">
            {item}
          </p>
        ))}
      </div>

      <p className="mt-[1vw] text-center text-base font-bold">
        Everyone Aspires Seamless Yield
      </p>
    </div>
  );
}

export default function AspirationToAchievementSection() {
  return (
    <section className="mx-auto ">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Aspiration to Achievement
      </h1>
      <p className="text-base font-bold">When alignment becomes a system, aspiration converts into achievement.</p>

      <p className="text-base font-bold mt-lg">The AAA Framework synchronizes:</p>

      {/* Top cards */}
      <div className=" mt-sm grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {topItems.map((item, i) => (
          <TopCard key={i} {...item} />
        ))}
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-[4%]">
        {/* Left */}
        <div className="">
          <p className="mt-lg text-base font-bold">When AAA is applied:</p>

          {/* Flow */}
          <div className="mt-sm space-y-xs">
            {flowSteps.map((step, i) => (
              <div key={i}>
                <FlowStep text={step} />
                
              </div>
            ))}
          </div>

          {/* Bottom text */}
            <h6 className="text-base font-bold mt-md">The Result</h6>

          <div className="mt-sm space-y-sm">
            {bottomTexts.map((text, i) => (
              <p
                key={i}
                className={`text-base font-medium ${
                  text.includes("EASY") ? "!font-bold text-[#0668E1]" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-sm p-sm gap-sm text-base font-medium flex items-center justify-center rounded-[12px] border-2 border-[#0072FF] bg-[#0668E1] text-white shadow-[0px_4px_35px_4px_#0668E11A]">
            Download Connect EC for Free 
            <FaArrowRight/>
          </button>
        </div>

        {/* Right */}
        <RightCard />
      </div>
    </section>
  );
}
