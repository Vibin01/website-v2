import { create } from "zustand";
import { AnswerRecord } from "@/domain/assessment/report-builder";

type Role = "candidate" | "recruiter" | "employer";
type Mode = "single" | "full";

type AssessmentStore = {
  userId: string | null;
  sessionId: string | null;
  role: Role | null;
  mode: Mode;
  phase: string;
  answers: AnswerRecord[];
  completedPhases: string[];
  phaseReports: Record<string, any>;
  overallReport: any | null;
  currentReport: any | null;

  setUser: (userId: string) => void;
  setSessionId: (sessionId: string) => void;
  setRoleModePhase: (role: Role, mode: Mode, phase: string) => void;
  setCompletedData: (data: {
    completedPhases: string[];
    phaseReports: Record<string, any>;
    overallReport: any | null;
  }) => void;
  addAnswer: (answer: AnswerRecord) => void;
  setCurrentReport: (report: any) => void;
  resetAnswers: () => void;
};

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  userId: null,
  sessionId: null,
  role: null,
  mode: "single",
  phase: "uncertainty",
  answers: [],
  completedPhases: [],
  phaseReports: {},
  overallReport: null,
  currentReport: null,

  setUser: (userId) => set({ userId }),
  setSessionId: (sessionId) => set({ sessionId }),

  setRoleModePhase: (role, mode, phase) =>
    set({
      role,
      mode,
      phase,
    }),

  setCompletedData: (data) =>
    set({
      completedPhases: data.completedPhases,
      phaseReports: data.phaseReports,
      overallReport: data.overallReport,
    }),

  addAnswer: (answer) =>
    set((state) => ({
      answers: [
        ...state.answers.filter((a) => a.questionId !== answer.questionId),
        answer,
      ],
    })),

  setCurrentReport: (currentReport) => set({ currentReport }),

  resetAnswers: () => set({ answers: [] }),
}));