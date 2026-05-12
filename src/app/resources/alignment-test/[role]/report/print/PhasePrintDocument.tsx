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

export default function PhasePrintDocument({
  report,
  user,
}: {
  report: any;
  user: any;
}) {
  const { result, content, answers, phaseLabel } = report;
  if (!result) return null;

  const color = getColor(result?.mode);

  return (
    <main className="mx-auto min-h-[297mm] w-[210mm] bg-[#FAFDFF] p-[10mm] text-[#1B1C17]">
      <div className="mt-[5%] flex items-center justify-between border-b border-[#D1E5FF] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E6F0FC] font-bold text-[#0668E1]">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-[14px] font-extrabold">{user?.name}</p>
            <p className="text-[11px] font-medium">{user?.email || user?.role}</p>
          </div>
        </div>

      <img src="  /Connect_EC_Logo.svg" alt="connect ec" className="h-auto w-[160px]" />
      </div>

      <section className="mt-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DEEDFF] bg-[#EEF6FF]">
          🛡️
        </div>
        <div>
          <h1 className="text-[18px] font-extrabold">
            Your Alignment Insight -{" "}
            <span className="text-[#0668E1]">{phaseLabel}</span>
          </h1>
          <p className="text-[11px] font-semibold">
            Based on your response across 3 key situations in hiring.
          </p>
        </div>
      </section>

      <section className="mt-5 rounded-[14px] border border-[#DEEDFF] bg-white p-5">
        <h2 className="text-[13px] font-extrabold uppercase">
          Alignment Insights for {phaseLabel}
        </h2>

        <div className="mt-5 flex items-center gap-8">
          <MiniScoreCircle percentage={result.percentage} color={color} />

          <div>
            <div className="flex items-center gap-3">
              <p className="text-[34px] font-extrabold" style={{ color }}>
                {result.percentage}%
              </p>
              <p className="text-[17px] font-extrabold uppercase" style={{ color }}>
                {result.mode}
              </p>
            </div>

            <p className="mt-1 text-[11px] font-extrabold">
              Your Pattern: {content.patternName}
            </p>
            <p className="mt-1 text-[11px] font-medium">{content.phaseIntro}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3">
          {content.centerCards.map((card: any) => (
            <div
              key={card.title}
              className="rounded-[10px] border border-[#DEEDFF] bg-white p-3"
            >
              <h3 className="text-[12px] font-extrabold">{card.title}</h3>
              <div className="my-2 border-t border-[#DEEDFF]" />
              {card.lines.map((line: string, index: number) => (
                <p key={index} className="mt-1 text-[10px] font-medium">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col">

      <section className="mt-4 rounded-[14px] border border-[#DEEDFF] bg-white p-4">
        <h2 className="text-[13px] font-extrabold">Your Patterns</h2>

        <div className="mt-3 grid grid-cols-2 gap-4">
          <div className="rounded-[10px] border border-[#B2D0F6] bg-white p-3">
            <h3 className="text-[12px] font-extrabold text-[#0668E1]">
              {result.band}
            </h3>
            <p className="mt-2 text-[10px] font-medium">
              Across these situations, you{" "}
                {result.band === "Strong" ? "consistently" : "tend to"} follow
                this response pattern.
            </p>
            <div className="my-xs border-t border-[#DEEDFF]" />

              <p className="text-[10px] font-medium mt-xs">
                Over time, this shapes how consistently your decisions align
                with the situation.
              </p>
          </div>


            {(() => {
              const mode = (result?.mode).toUpperCase();

              const modeSummary: Record<string, string> = {
                UNALIGNED:
                  "This suggests a pattern where action often comes before full evaluation.",

                ALIGNED:
                  "This suggests a pattern where decisions are guided by clarity rather than urgency.",

                "AUTO-ALIGNED":
                  "This suggests a pattern of staying steady regardless of uncertainty or changing conditions.",

                MISALIGNED:
                  "This suggests a pattern where external signals shape your decisions.",

                DYNAMIC:
                  "This suggests no single pattern consistently guides your decisions.",

                MIXED:
                  "This suggests no single pattern consistently guides your decisions.",
              };

              return (
          <div className="rounded-[10px] border border-[#DEEDFF] bg-white p-3">
           {report?.secondaryExpression ? (
                    <>
            <h3 className="text-[12px] font-extrabold">
               Secondary Expression —{" "}
                        {report.secondaryExpression.tendency}
            </h3>
            <p className="mt-2 text-[10px] font-medium">
              {report.secondaryExpression.expression}
            </p>
            <hr className="my-sm border-[#DEEDFF]" />
             <p className="mt-2 text-[10px] font-medium">
               {modeSummary[mode]}
            </p>
            </>
          ) : (
            <>
              <h3 className="text-[12px] font-extrabold">
                Secondary Expression
              </h3>
              <p className="mt-2 text-[10px] font-medium">
                {modeSummary[mode]}
              </p>
            </>
          )}
          </div>
           );
            })()}
        </div>
      </section>
      </div>

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