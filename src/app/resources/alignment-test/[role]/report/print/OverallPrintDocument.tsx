import { FaInstagram, FaMediumM, FaYoutube } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

function MiniScoreCircle({
  percentage,
  color = "#2B9B43",
}: {
  percentage: number;
  color?: string;
}) {
  return (
    <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${color} ${percentage}%, #ededed 0)`,
        }}
      />
      <div className="absolute h-[68px] w-[68px] rounded-full bg-white" />
      <span className="relative text-[18px] font-extrabold" style={{ color }}>
        {percentage}%
      </span>
    </div>
  );
}

function getColor(mode: string) {
  if (mode === "Aligned") return "#2B9B43";
  if (mode === "Auto-Aligned") return "#0668E1";
  if (mode === "Misaligned") return "#F0431D";
  if (mode === "Unaligned") return "#F59E0B";
  return "#0668E1";
}

export default function OverallPrintDocument({
  report,
  user,
}: {
  report: any;
  user: any;
}) {
  const { overall, phaseResults, content } = report;
    if (!overall) return null;

  const color = getColor(overall?.mode);

  return (
<main className="mx-auto min-h-[297mm] w-[210mm] bg-[#FAFDFF] p-[10mm] text-[#1B1C17]">    
      <div className=" mt-[5%] flex items-center justify-between border-b border-[#D1E5FF] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E6F0FC] font-bold text-[#0668E1]">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-[14px] font-extrabold">{user?.name}</p>
            <p className="text-[11px] font-medium">{user?.email}</p>
          </div>
        </div>

             <img src="  /Connect_EC_Logo.svg" alt="connect ec" className="h-auto w-[160px]" />

      </div >

      <section className="mt-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DEEDFF] bg-[#EEF6FF]">
          🛡️
        </div>
        <div>
          <h1 className="text-[18px] font-extrabold">
            Your Alignment Insight -{" "}
            <span className="text-[#0668E1]">Overall</span>
          </h1>
          <p className="text-[11px] font-semibold">
            Based on your response across 5 key situations in hiring.
          </p>
        </div>
      </section>

      <section className="mt-5 rounded-[14px] border border-[#DEEDFF] bg-white p-5">
        <h2 className="text-[13px] font-extrabold uppercase">
          Overall Alignment
        </h2>

        <div className="mt-5 flex items-center gap-8">
          <MiniScoreCircle percentage={overall.percentage} color={color} />

          <div>
            <div className="flex items-center gap-3">
              <p className="text-[34px] font-extrabold" style={{ color }}>
                {overall.percentage}%
              </p>
              <p className="text-[17px] font-extrabold uppercase" style={{ color }}>
                {overall.mode}
              </p>
            </div>

            {content.insight.map((line: string, index: number) => (
              <p key={index} className="mt-1 text-[11px] font-semibold">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["Pattern", content.pattern],
            ["Trigger", content.trigger],
            ["Outcome", content.outcome],
          ].map(([title, lines]: any) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#DEEDFF] bg-white p-3"
            >
              <h3 className="text-[12px] font-extrabold">{title}</h3>
              <div className="my-2 border-t border-[#DEEDFF]" />
              {lines.map((line: string, index: number) => (
                <p key={index} className="mt-1 text-[10px] font-medium">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 grid grid-cols-5 gap-3">
        {phaseResults.map((phase: any) => {
          const phaseColor = getColor(phase.mode);

          return (
            <div
              key={phase.phaseKey}
              className="rounded-[10px] border border-[#DEEDFF] bg-white p-3 text-center"
            >
              <div className="flex justify-center">
                <MiniScoreCircle
                  percentage={phase.percentage}
                  color={phaseColor}
                />
              </div>
              <p className="mt-2 text-[11px] font-extrabold">
                {phase.phaseLabel}
              </p>
              <p className="text-[10px] font-medium">{phase.mode}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-4 rounded-[14px] border border-[#DEEDFF] bg-white p-4">
        <h2 className="text-[13px] font-extrabold uppercase">
          Alignment Health
        </h2>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {Object.entries(content.health).map(([key, label]: any) => {
            const width =
              label === "Strong" ? "100%" : label === "Moderate" ? "65%" : "30%";

            return (
              <div
                key={key}
                className="rounded-[8px] border border-[#DEEDFF] bg-white p-3"
              >
                <div className="flex justify-between">
                  <p className="capitalize text-[11px] font-extrabold">{key}</p>
                  <p className="text-[10px] font-medium">{label}</p>
                </div>

                <div className="mt-2 h-[7px] rounded-full bg-[#EEEEEE]">
                  <div
                    className="h-full rounded-full bg-[#0668E1]"
                    style={{ width }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    

      <div className="mt-5 flex h-[42px] items-center justify-between bg-[#0668E1] px-5 text-[11px] font-semibold text-white">
        <div>Take Alignment Test</div>
        <div className=" flex text-[11px] gap-2 font-semibold text-white">
                                   
               
                                   <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                                     <ImLinkedin2 />
                                   </div>
                                   <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                                     <FaMediumM />
                                   </div>
               
                                   <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                                     <FaYoutube />
                                   </div>
                                   <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                                     <FaInstagram />
                                   </div>
                                 </div>
      </div>
    </main>
  );
}