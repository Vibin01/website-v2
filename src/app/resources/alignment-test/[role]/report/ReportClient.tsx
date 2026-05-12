"use client";

import { useEffect, useState } from "react";
import { Anchor, ArrowRight, Share2, ShieldCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { getAssessmentStatusAction, getReportAction } from "@/server/actions/assignment-action";
import OverallPrintDocument from "./print/OverallPrintDocument";
import PhasePrintDocument from "./print/PhasePrintDocument";
import PrintButton from "./print/PrintButton";

type Role = "candidate" | "recruiter" | "employer";
type AnyReport = any;

const phaseColors: Record<string, string> = {
  Aligned: "#2B9B43",
  "Auto-Aligned": "#0668E1",
  Misaligned: "#F0431D",
  Unaligned: "#F59E0B",
  Dynamic: "#0668E1",
};

function getScoreColor(mode: string) {
  return phaseColors[mode] || "#0668E1";
}

function ScoreCircle({
  percentage,
  mode,
  size = "large",
}: {
  percentage: number;
  mode: string;
  size?: "small" | "large";
}) {
  const color = getScoreColor(mode);
  const circleSize = size === "large" ? 120 : 110;
  const stroke = size === "large" ? 14 : 12;
  const radius = (circleSize - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percentage / 100) * circumference;

  return (
    <div
      className="relative shrink-0"
      style={{ width: circleSize, height: circleSize }}
    >
      <svg width={circleSize} height={circleSize} className="-rotate-90">
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="#EEEEEE"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center text-lg font-extrabold"
        style={{ color }}
      >
        {percentage}%
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
  blue = false,
}: {
  title: string;
  children: React.ReactNode;
  blue?: boolean;
}) {
  return (
    <div
      className={`rounded-md border p-md shadow-[0px_4px_40px_5px_#0668E11A] ${
        blue
          ? "border-[#0668E1] bg-[#0668E1] text-white"
          : "border-[#DEEDFF] bg-white text-[#2C2C2C]"
      }`}
    >
      <h3 className="text-base font-bold">{title}</h3>
      <div className="mt-sm text-xl font-medium">{children}</div>
    </div>
  );
}

function SmallInfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">
      <h4 className="text-base font-bold text-[#2C2C2C]">{title}</h4>
      <div className="my-xs border-t border-[#DEEDFF]" />
      <div className="space-y-xs">
        {lines.map((line, index) => (
          <p key={index} className="text-xl font-medium text-[#2C2C2C]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function HeaderBlock({
  title,
  subtitle,
  user,
}: {
  title: string;
  subtitle: string;
  user: any;
}) {
  const firstLetter =
    user?.name?.charAt(0)
      ?.toUpperCase() ||
    "U";

  return (
    <>
      <div className="-mx-[6%] border-b border-[#D1E5FF] bg-white px-[6%] py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#E6F0FC] text-[18px] font-bold text-[#0668E1]">
              {
                firstLetter
              }
            </div>

            <div>
              <p className="text-[18px] font-extrabold text-[#2C2C2C]">
                {
                  user?.name
                }
              </p>

              <p className="text-[14px] font-medium capitalize text-[#2C2C2C]">
                {
                  user?.role
                }
              </p>
            </div>
          </div>

          <button onClick={()=>window.print()} className="flex items-center gap-2 text-[16px] font-bold">
            <Share2
              size={18}
            />
            Share
          </button>
        </div>
      </div>

      <div className="mt-lg flex items-center gap-sm">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#DEEDFF] bg-[#EEF6FF] text-[#0668E1]">
          <ShieldCheck
            size={26}
          />
        </div>

        <div>
          <h1 className="text-h5 font-bold text-[#1B1C17]">
            Your
            Alignment
            Insight
            -
            <span className="text-[#0668E1]">
              {
                title
              }
            </span>
          </h1>

          <p className="text-xl font-medium text-[#2C2C2C]">
            {
              subtitle
            }
          </p>
        </div>
      </div>
    </>
  );
}

function PhaseReport({ role, report , user, mode, phase }: { role: string; report: AnyReport; user: any; mode: "single" | "full"; phase: string }) {
  const router = useRouter();
  const { result, content, answers, phaseLabel } = report;
  const color = getScoreColor(result.mode);
  const [
  completedPhases,
  setCompletedPhases,
] = useState<string[]>([]);

const [
  fullCompleted,
  setFullCompleted,
] = useState(false);

useEffect(() => {
  async function loadStatus() {
    const status =
      await getAssessmentStatusAction(
        role as any
      );

    if (!status.success) return;

    const phases =
      (status.completedPhases ||
        []) as string[];

    setCompletedPhases(
      phases
    );

    setFullCompleted(
      !!status.overallReport ||
        phases.length >= 5
    );
  }

  loadStatus();
}, [role]);

console.log(user)

  return (
    <section className="w-full bg-[#FAFDFF] px-[5%] pb-20">
      <HeaderBlock
        title={phaseLabel}
        subtitle="Based on your response across 3 key situations in hiring."
        user={user}
      />

      <div className="mt-lg rounded-md border border-[#DEEDFF] bg-white p-md shadow-[0px_4px_40px_5px_#0668E11A]">
        <h2 className="text-[18px] font-extrabold uppercase text-[#2C2C2C]">
          Alignment Insights for {phaseLabel}
        </h2>

        <div className="mt-md flex flex-col gap-8 md:flex-row md:items-center">
          <ScoreCircle percentage={result.percentage} mode={result.mode} />

          <div>
            <div className="flex items-center gap-md">
              <p className="text-h2 font-extrabold" style={{ color }}>
                {result.percentage}%
              </p>
              <p className="text-h5 font-bold uppercase" style={{ color }}>
                {result.mode}
              </p>
            </div>

            <p className="mt-sm text-xl font-bold text-[#2C2C2C]">
              Your Pattern:{" "}
              <span className="text-xl font-medium">{content.patternName}</span>
            </p>

            <p className="text-xl font-medium">{content.phaseIntro}</p>
          </div>
        </div>

        <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
          {content.centerCards.map((card: any) => (
            <SmallInfoCard
              key={card.title}
              title={card.title}
              lines={card.lines}
            />
          ))}
        </div>
      </div>

      <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-2">
        <SectionCard title="The Situation">
          <div className="space-y-xs">
            {answers.map((answer: any, index: number) => (
              <p key={answer.questionId} className="text-xl font-medium">
                {index + 1}. {answer.situation.split("\n\n")[0]}
              </p>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Your Responses">
          <div className="space-y-xs">
            {answers.map((answer: any) => (
              <div key={answer.questionId} className="flex items-center gap-3">
                <img
                  src="/icons/tick-gradient-icon.svg"
                  alt="Tick"
                  className="size-iconsize-sm shrink-0"
                />
                <p className="text-xl font-medium">{answer.answerText}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg">
        <SectionCard title="Your Patterns">
          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            <div className="rounded-md border border-[#B2D0F6] bg-white p-sm shadow-[0px_4px_20px_2px_#0668E11A]">
              <h4 className="text-base font-bold uppercase text-[#0668E1]">
                {result.band}
              </h4>

              <p className="mt-sm text-xl font-bold">
                Across these situations, you{" "}
                {result.band === "Strong" ? "consistently" : "tend to"} follow
                this response pattern.
              </p>

              <div className="my-xs border-t border-[#DEEDFF]" />

              <p className="text-xl font-medium mt-xs">
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
                <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">
                  {report?.secondaryExpression ? (
                    <>
                      <h4 className="text-base font-bold uppercase text-[#2C2C2C]">
                        Secondary Expression —{" "}
                        {report.secondaryExpression.tendency}
                      </h4>

                      <p className="mt-sm text-xl font-medium">
                        {report.secondaryExpression.expression}
                      </p>

                      <hr className="my-sm border-[#DEEDFF]" />

                      <p className="text-xl font-medium text-[#2C2C2C]">
                        {modeSummary[mode]}
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-base font-bold uppercase text-[#2C2C2C]">
                        Secondary Expression
                      </h4>

                      <p className="mt-sm text-xl font-medium text-[#2C2C2C]">
                        {modeSummary[mode]}
                      </p>
                    </>
                  )}
                </div>
              );
            })()}
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg">
        <SectionCard title="What’s Really Happening">
          <div className="grid grid-cols-1 gap-sm md:grid-cols-3">
            <div className="rounded-sm border border-[#DEEDFF] bg-white p-sm">
              <h4 className="font-bold text-[#0668E1]">Insight</h4>
              <p className="text-xl font-medium mt-xs">
                {report.primaryExpression.insight}
              </p>
            </div>

            <div className="rounded-sm border border-[#DEEDFF] bg-white p-sm">
              <h4 className="font-bold text-[#0668E1]">Belief</h4>
              <p className="text-xl font-medium mt-xs">
                {report.primaryExpression.belief}
              </p>
            </div>

            <div className="rounded-sm border border-[#DEEDFF] bg-white p-sm">
              <h4 className="font-bold text-[#0668E1]">Action Summary</h4>
              <p className="text-xl font-medium mt-xs">
                {report.primaryExpression.actionSummary}
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
        <SectionCard title="What This Means">
          {content.whatThisMeans.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="What To Do">
          {content.whatToDo.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="Reflection" blue>
          <p className="text-xl font-medium mt-xs">{content.reflection}</p>
        </SectionCard>
      </div>

      <div className="mt-md flex justify-end gap-sm">
  <button
    onClick={() =>fullCompleted?
      router.back():router.push(`/resources/alignment-test`)
    }
    className="h-[54px] rounded-sm border border-[#0668E1] px-8 text-xl font-medium text-[#0668E1]"
  >
    Back
  </button>

  {fullCompleted ? (
     <button
  onClick={() =>
    window.print()
  }
  className="flex h-[54px] items-center gap-sm rounded-sm bg-[#0668E1] px-8 text-xl font-medium text-white"
>
  Download Report
</button>
  ) : (
    <button
      onClick={() =>
        router.push(
          `/resources/alignment-test/${role}?mode=full`
        )
      }
      className="flex h-[54px] items-center gap-sm rounded-sm bg-[#0668E1] px-8 text-xl font-medium text-white"
    >
      Continue Full Test

      <ArrowRight
        size={20}
      />
    </button>
  )}
</div>
    </section>
  );
}

function OverallReport({user, report, role, mode, phase }: { user: any; report: AnyReport; role: string; mode: "single" | "full"; phase: string }) {
  const router = useRouter();
  const { overall, phaseResults, content } = report;
  const color = getScoreColor(overall.mode);

console.log(user)
  return (
    <section className="w-full px-[5%] pb-20">
      <HeaderBlock
      user={user}
        title="Overall"
        subtitle="Based on your response across 5 key situations in hiring."
      />

      <div className="mt-lg rounded-md border border-[#DEEDFF] bg-white p-md shadow-[0px_4px_40px_5px_#0668E11A]">
        <h2 className="text-base font-bold uppercase text-[#2C2C2C]">
          Overall Alignment
        </h2>

        <div className="mt-md flex flex-col gap-lg md:flex-row md:items-center">
          <ScoreCircle percentage={overall.percentage} mode={overall.mode} />

          <div>
            <div className="flex items-center gap-md">
              <p className="text-h2 font-extrabold" style={{ color }}>
                {overall.percentage}%
              </p>
              <p className="text-h5 font-bold uppercase" style={{ color }}>
                {overall.mode}
              </p>
            </div>

            <div className="mt-sm space-y-xs">
              {content.insight.map((line: string, index: number) => (
                <p key={index} className="text-xl font-medium text-[#2C2C2C]">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
          <SmallInfoCard title="Pattern" lines={content.pattern} />
          <SmallInfoCard title="Trigger" lines={content.trigger} />
          <SmallInfoCard title="Outcome" lines={content.outcome} />
        </div>
      </div>

      <h2 className="mt-md text-base font-bold uppercase text-[#2C2C2C]">
        Alignment Score by Phase
      </h2>

      <div className="mt-sm grid grid-cols-1 gap-md md:grid-cols-5">
        {phaseResults.map((phase: any) => (
          <button
            key={phase.phaseKey}
            type="button"
            onClick={() =>
              router.push(
                `/resources/alignment-test/${role}/report?mode=single&phase=${phase.phaseKey}`,
              )
            }
            className="rounded-md border border-[#DEEDFF] bg-white p-sm text-center shadow-[0px_4px_20px_#0668E10D]"
          >
            <div className="flex justify-center">
              <ScoreCircle
                percentage={phase.percentage}
                mode={phase.mode}
                size="small"
              />
            </div>

            <p className="mt-sm text-base font-bold capitalize text-[#2C2C2C]">
              {phase.phaseLabel}
            </p>

            <p className="text-xl font-medium">{phase.mode}</p>
          </button>
        ))}
      </div>

      <div className="mt-lg">
        <SectionCard title="Alignment Health">
          <div className="grid grid-cols-1 gap-md md:grid-cols-3">
            {Object.entries(content.health).map(([key, label]: any) => {
              const normalizedLabel = String(label).toLowerCase();
              const width =
                normalizedLabel === "strong"
                  ? "100%"
                  : normalizedLabel === "moderate"
                  ? "60%"
                  : normalizedLabel === "weak" || normalizedLabel === "week"
                  ? "30%"
                  : "0%";

              return (
                <div
                  key={key}
                  className="rounded-md border border-[#DEEDFF] bg-white p-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-sm">
                      <Anchor size={22} className="text-[#0668E1]" />
                      <p className="capitalize text-base font-bold text-[#2C2C2C]">
                        {key}
                      </p>
                    </div>

                    <p className="text-xl font-medium">{label}</p>
                  </div>
                  <div className="mt-xs h-[8px] w-full rounded-full bg-[#EEEEEE]">
                    <div
                      className="h-full rounded-full bg-[#0668E1]"
                      style={{ width }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>
      <div className="mt-lg">
  <SectionCard title="Where Alignment Slips">
    <div className="space-y-sm">
      {content.slips.map((slip: any, index: number) => (
        <div key={index} className="flex items-start gap-sm">
          <div className="flex size-iconsize-sm shrink-0 items-center justify-center rounded-sm bg-[#EEF6FF]">
            <img
              src="/icons/momentum-strengthens-icon.svg"
              alt=""
              className="size-iconsize-sm"
            />
          </div>

          <div>
            <p className="text-xl font-bold text-[#2C2C2C]">
              {slip.title} → {slip.level}
            </p>

            <p className="mt-xs text-xl font-medium text-[#2C2C2C]">
              {slip.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
</div>

      <div className="mt-lg">
        <SectionCard title="Behavioral Summary">
          <div className="space-y-sm">
            {content.behavioralSummary.map((line: string, index: number) => (
              <p key={index} className="text-xl font-medium mt-xs">
                {line}
              </p>
            ))}

            {report.secondaryExpression?.tendency && (
              <div className="rounded-md border border-[#B2D0F6] bg-white p-sm">
                <h4 className="text-base font-bold uppercase text-[#0668E1]">
                  {report.secondaryExpression.tendency}
                </h4>

                <p className="mt-sm text-xl font-semibold text-[#0668E1]">
                  {report.secondaryExpression.expression}
                </p>
              </div>
            )}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-md md:grid-cols-2">
        <SectionCard title="What This Means">
          {content.whatThisMeans.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="What To Improve" blue>
          {content.whatToImprove.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>
      </div>
      <div className="mt-md flex justify-end gap-sm">
  <button
    onClick={() => router.push("/resources/alignment-test")}
    className="h-[54px] rounded-sm border border-[#0668E1] px-8 text-xl font-medium text-[#0668E1]"
  >
    Back
  </button>

 <button
 onClick={() => window.print()}
  className="flex h-[54px] items-center gap-sm rounded-sm bg-[#0668E1] px-8 text-xl font-medium text-white"
>
  Download Report
</button>
</div>
    </section>
  );
}

export default function ReportClient({ role }: { role: Role }) {
  const searchParams = useSearchParams();

  const mode = (searchParams.get("mode") || "single") as "single" | "full";
  const phase = searchParams.get("phase") || "uncertainty";

  const [report, setReport] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadReport() {
      const res = await getReportAction({
        role: role as any,
        mode,
        phase,
      });

      if (res.success) {
        setReport(res.report);
        setUser(res.user);
      }
    }

    

    loadReport();
  }, [role, mode, phase]);

  if (!report) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-bold">
        Loading report...
      </div>
    );
  }

  return (
    <>
      
      <div className="no-print">
        {report.type === "phase" ? (
          <PhaseReport report={report} user={user} role={role} mode={mode} phase={phase}  />
        ) : (
          <OverallReport report={report} user={user} role={role} mode={mode} phase={phase} />
        )}
      </div>

      <div className="print-report  ">
        {mode === "single" ? (
          <PhasePrintDocument report={report} user={user} />
        ) : (
          <OverallPrintDocument report={report} user={user}  />
        )}
      </div>

     <style jsx global>{`
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  @page {
    size: A4 portrait;
    margin: 0;
  }

  /* hide print document in UI */
  .print-report {
    display: none !important;
  }

  @media print {
    .no-print,
    header,
    nav,
    footer {
      display: none !important;
    }

    /* show only print document while printing */
    .print-report {
      display: block !important;
    }

    html,
    body {
      background: white !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    #print-root {
      display: block !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`}</style>

    </>
  );
}