"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaHandshake } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { candidateQuestions } from "@/content/questions/candidate";
import { recruiterQuestions } from "@/content/questions/recruiter";
import { employerQuestions } from "@/content/questions/employer";

import {
  AnswerRecord,
  buildOverallReport,
  buildPhaseReport,
} from "@/domain/assessment/report-builder";

import {
  completeAssessmentAction,
  getAssessmentStatusAction,
  startAssessmentJourneyAction,
} from "@/server/actions/assignment-action";

type Role = "candidate" | "recruiter" | "employer";
type Mode = "single" | "full";

const phases = [
  {
    key: "uncertainty",
    label: "Uncertainty",
    title: "Uncertainty: When Things Aren’t Clearly Defined",
    desc: "Tests how you respond when clarity, feedback, or direction is missing.",
  },
  {
    key: "pressure",
    label: "Pressure",
    title: "Pressure: When Time and Stakes Increase",
    desc: "Tests how your decisions hold when urgency and expectations increase.",
  },
  {
    key: "control",
    label: "Control",
    title: "Control: When You Don't Fully Control the Outcome",
    desc: "Tests how you respond when control is limited and shared.",
  },
  {
    key: "perception",
    label: "Perception",
    title: "Perception: When Interpretation Shapes Reality",
    desc: "Tests how perception and signals influence your decisions.",
  },
  {
    key: "outcome",
    label: "Outcome",
    title: "Outcome: When Results Are Evaluated",
    desc: "Tests how you handle decisions, commitment, and post-outcome uncertainty.",
  },
] as const;

const questionMap = {
  candidate: candidateQuestions,
  recruiter: recruiterQuestions,
  employer: employerQuestions,
};

function mergeUniqueAnswers(answers: AnswerRecord[]) {
  const map = new Map<string, AnswerRecord>();

  for (const answer of answers) {
    map.set(answer.questionId, answer);
  }

  return Array.from(map.values());
}

export default function AssessmentTestClient({
  role,
  mode,
  phase,
}: {
  role: Role;
  mode: Mode;
  phase: string;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [journeyId, setJourneyId] = useState<string | null>(null);
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);
  const [phaseReports, setPhaseReports] = useState<Record<string, any>>({});

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("A");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  useEffect(() => {
    async function init() {
      setLoading(true);

      const status = await getAssessmentStatusAction(role as any);

      if (status.success) {
        const reports = (status.phaseReports || {}) as Record<string, any>;

        setCompletedPhases((status.completedPhases || []) as string[]);
        setPhaseReports(reports);

        if (
          mode === "single" &&
          (status.completedPhases as string[])?.includes(phase)
        ) {
          router.replace(
            `/resources/alignment-test/${role}/report?mode=single&phase=${phase}`,
          );
          return;
        }

        if (mode === "full" && status.overallReport) {
          router.replace(`/resources/alignment-test/${role}/report?mode=full`);
          return;
        }
      }

      const journey = await startAssessmentJourneyAction({
        role: role as any,
        mode,
      });

      if (journey.success) {
        setJourneyId(journey.journeyId);
      }

      setAnswers([]);
      setQuestionIndex(0);
      setPhaseIndex(0);
      setSelectedOption("A");
      setLoading(false);
    }

    init();
  }, [role, mode, phase, router]);

  const availablePhases = useMemo(() => {
    if (mode === "full") {
      return phases.filter((item) => !completedPhases.includes(item.key));
    }

    return phases;
  }, [mode, completedPhases]);

if (
  mode === "full" &&
  availablePhases.length === 0
) {
  if (phaseReports && Object.keys(phaseReports).length >= 5) {
    router.replace(
      `/resources/alignment-test/${role}/report?mode=full`
    );

    return null;
  }

  router.replace(
    `/resources/alignment-test/${role}?mode=full`
  );

  return null;
}

  const startPhaseIndex = useMemo(() => {
    if (mode === "full") return 0;

    const index = availablePhases.findIndex((item) => item.key === phase);
    return index >= 0 ? index : 0;
  }, [mode, phase, availablePhases]);

  useEffect(() => {
    setPhaseIndex(startPhaseIndex);
  }, [startPhaseIndex]);

  const currentPhase =
    availablePhases[Math.min(phaseIndex, availablePhases.length - 1)];

  const questions = useMemo(() => {
    if (!currentPhase) return [];
    return questionMap[role].filter((q) => q.phase === currentPhase.key);
  }, [role, currentPhase]);

  const currentQuestion = questions[questionIndex];

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-bold">
        Loading assessment...
      </div>
    );
  }

  if (!currentPhase || !currentQuestion) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-sm">
        <p className="text-xl font-bold">No remaining phases found.</p>
        <button
          onClick={() =>
            router.push(`/resources/alignment-test/${role}/report?mode=full`)
          }
          className="rounded-sm bg-primary px-md py-xs text-white"
        >
          View Overall Report
        </button>
      </div>
    );
  }

  const [situationTitle, situationDescription = ""] =
    currentQuestion.situation.split("\n\n");

  const handleNext = async () => {
    if (!journeyId) {
      setError("Assessment journey not started. Please refresh.");
      return;
    }

    const optionKey = selectedOption as keyof typeof currentQuestion.options;
    const option = currentQuestion.options[optionKey];

    const newAnswer: AnswerRecord = {
      questionId: currentQuestion.id,
      phase: currentQuestion.phase,
      selectedOption: optionKey,
      tendency: option.tendency,
      situation: currentQuestion.situation,
      answerText: option.text,
    };

    const updatedAnswers = mergeUniqueAnswers([...answers, newAnswer]);
    setAnswers(updatedAnswers);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption("A");
      return;
    }

    if (mode === "full" && phaseIndex < availablePhases.length - 1) {
      setPhaseIndex((prev) => prev + 1);
      setQuestionIndex(0);
      setSelectedOption("A");
      return;
    }

    if (mode === "single") {
      const report = buildPhaseReport(currentPhase.key, updatedAnswers);

      const save = await completeAssessmentAction({
        journeyId,
        phase: currentPhase.key,
        answers: updatedAnswers,
        report,
      });

      if (save.error) {
        setError(save.error);
        return;
      }

      router.push(
        `/resources/alignment-test/${role}/report?mode=single&phase=${currentPhase.key}`,
      );

      return;
    }

    const oldAnswers = Object.values(phaseReports).flatMap(
      (report: any) => report?.answers || [],
    ) as AnswerRecord[];

    const finalAnswers = mergeUniqueAnswers([...oldAnswers, ...updatedAnswers]);

    for (const item of availablePhases) {
      const phaseAnswers = finalAnswers.filter((a) => a.phase === item.key);

      if (phaseAnswers.length > 0) {
        const phaseReport = buildPhaseReport(item.key, phaseAnswers);

        await completeAssessmentAction({
          journeyId,
          phase: item.key,
          answers: phaseAnswers,
          report: phaseReport,
        });
      }
    }

    const overallReport = buildOverallReport(role, finalAnswers);

    const saveOverall = await completeAssessmentAction({
      journeyId,
      answers: finalAnswers,
      report: overallReport,
    });

    if (saveOverall.error) {
      setError(saveOverall.error);
      return;
    }

    router.push(`/resources/alignment-test/${role}/report?mode=full`);
  };

  return (
    <section className="w-full px-[7%] py-[5%]">
      <div className="grid grid-cols-1 items-center gap-xl md:grid-cols-[0.25fr_1fr]">
        <aside className="flex flex-row justify-center gap-xl md:flex-col md:items-center md:justify-start">
          {mode === "single"
            ? questions.map((_, index) => {
                const active = index === questionIndex;
                const completed = index < questionIndex;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-xs"
                  >
                    <div
                      className={`flex size-iconsize-lg items-center justify-center rounded-full border ${
                        active || completed
                          ? "border-[#0668E1] bg-[#F7FBFF] text-[#0668E1]"
                          : "border-[#D9D9D9] bg-[#EEEEEE] text-[#A0A0A0]"
                      }`}
                    >
                      {completed ? (
                        <img
                          src="/icons/tick-gradient-icon.svg"
                          alt="completed"
                          className="size-iconsize-lg"
                        />
                      ) : (
                        <FaHandshake className="size-iconsize-sm" />
                      )}
                    </div>

                    <p
                      className={`text-center text-xl font-medium ${
                        active ? "font-bold text-[#1B1C17]" : "text-[#9F9F9F]"
                      } ${completed ? "!text-[#1B1C17]" : ""}`}
                    >
                      Situation {index + 1}
                    </p>
                  </div>
                );
              })
            : availablePhases.map((item, index) => {
                const active = index === phaseIndex;
                const completed = index < phaseIndex;

                return (
                  <div
                    key={item.key}
                    className="flex flex-col items-center gap-xs"
                  >
                    <div
                      className={`flex size-iconsize-lg items-center justify-center rounded-full border ${
                        active || completed
                          ? "border-[#0668E1] bg-[#F7FBFF] text-[#0668E1]"
                          : "border-[#D9D9D9] bg-[#EEEEEE] text-[#A0A0A0]"
                      }`}
                    >
                      {completed ? (
                        <img
                          src="/icons/tick-gradient-icon.svg"
                          alt="completed"
                          className="size-iconsize-lg"
                        />
                      ) : (
                        <FaHandshake className="size-iconsize-sm" />
                      )}
                    </div>

                    <p
                      className={`text-center text-xl font-medium ${
                        active ? "font-bold text-[#1B1C17]" : "text-[#9F9F9F]"
                      } ${completed ? "!text-[#1B1C17]" : ""}`}
                    >
                      {item.label}
                    </p>
                  </div>
                );
              })}
        </aside>

        <main className="w-full">
          <div className="w-full">
            <div className="flex items-center gap-xs">
              {mode === "single" && (
                <div className="flex size-iconsize-lg shrink-0 items-center justify-center rounded-full border border-[#D0E5FF] bg-[#EEF6FF] text-[#0668E1]">
                  <FaHandshake size={28} />
                </div>
              )}

              <div>
                <h1 className="text-[24px] font-extrabold leading-[32px] text-[#1B1C17]">
                  {currentPhase.title}
                </h1>
                <p className="mt-1 text-base font-semibold text-[#4A4A4A]">
                  {currentPhase.desc}
                </p>
              </div>
            </div>

            <div className="mt-sm rounded-sm border border-[#B2D0F6] bg-[#F7FBFF] p-sm text-lg font-bold text-[#0668E1]">
              Choose what you would actually do — not what seems ideal.{" "}
              <span className="italic text-[#1B1C17]">
                Your first instinct is usually the most accurate.
              </span>
            </div>

            {error && (
              <p className="mt-sm text-lg font-semibold text-red-500">
                {error}
              </p>
            )}

            <div className="mt-md rounded-sm border border-[#DEEDFF] bg-white p-sm shadow-[0px_4px_40px_5px_#0668E11A]">
              <h2 className="text-base font-bold text-[#0668E1]">
                {situationTitle}
              </h2>

              <div className="my-sm border-t border-[#BBD7F8]" />

              <p className="whitespace-pre-line text-xl font-medium">
                {situationDescription}
              </p>

              <p className="mt-md text-xl font-medium">What do you do?</p>

              <div className="mt-md space-y-sm">
                {Object.entries(currentQuestion.options).map(
                  ([key, option]) => {
                    const active = selectedOption === key;

                    return (
                      <label
                        key={key}
                        className={`flex w-full cursor-pointer items-center gap-sm rounded-sm border px-4 py-3 text-left text-xl font-medium transition ${
                          active
                            ? "border-[#B2D0F6] text-[#2C2C2C]"
                            : "border-transparent text-[#9F9F9F]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="assessment-option"
                          value={key}
                          checked={active}
                          onChange={() => setSelectedOption(key)}
                          className="size-sm shrink-0 accent-[#0668E1]"
                        />

                        <span>
                          {key}. {option.text}
                        </span>
                      </label>
                    );
                  },
                )}
              </div>
            </div>

            {mode === "full" && (
              <div className="mt-md flex gap-sm">
                {questions.map((_, index) => (
                  <span
                    key={index}
                    className={`size-3 rounded-full ${
                      index === questionIndex ? "bg-[#0668E1]" : "bg-[#E5E5E5]"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="mt-md flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="flex h-[48px] items-center gap-sm rounded-sm bg-[#0668E1] px-md text-xl font-medium text-white"
              >
                Next
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
