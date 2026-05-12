export type Role = 'candidate' | 'recruiter' | 'employer';
export type PhaseKey = 'uncertainty' | 'pressure' | 'control' | 'perception' | 'outcome';
export type Tendency = 'ACTION' | 'EVALUATION' | 'STABILITY' | 'PERCEPTION';
export type Option = 'A' | 'B' | 'C' | 'D';
export type Band = 'Strong' | 'Moderate' | 'Dynamic';
export type Mode = 'Unaligned' | 'Aligned' | 'Auto-Aligned' | 'Misaligned' | 'Dynamic';

export interface PhaseResponse {
  questionId: string;
  selectedOption: Option;
  tendency: Tendency;
}

export interface PhaseComputationResult {
  phaseKey: PhaseKey;
  scores: Record<Tendency, number>;
  dominantTendency: Tendency | null;
  secondaryTendency: Tendency | null;
  dominanceRatio: number;
  percentage: number;
  band: Band;
  mode: Mode;
  patternVector: Record<Tendency, number>;
}
