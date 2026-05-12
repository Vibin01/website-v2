import { Tendency, Option, Band, Mode, PhaseKey, PhaseComputationResult } from './types';

export const OptionToTendencyMap: Record<Option, Tendency> = {
  A: 'ACTION',
  B: 'EVALUATION',
  C: 'STABILITY',
  D: 'PERCEPTION',
};

export const TendencyToModeMap: Record<Tendency, Mode> = {
  ACTION: 'Unaligned',
  EVALUATION: 'Aligned',
  STABILITY: 'Auto-Aligned',
  PERCEPTION: 'Misaligned',
};

export function computeDominance(responses: Tendency[], isGlobal: boolean = false): Omit<PhaseComputationResult, 'phaseKey'> {
  const totalQuestions = isGlobal ? 15 : 3;
  const counts: Record<Tendency, number> = {
    ACTION: 0,
    EVALUATION: 0,
    STABILITY: 0,
    PERCEPTION: 0,
  };

  for (const r of responses) {
    counts[r]++;
  }

  let maxCount = 0;
  let dominantTendencies: Tendency[] = [];

  for (const [tendency, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      dominantTendencies = [tendency as Tendency];
    } else if (count === maxCount) {
      dominantTendencies.push(tendency as Tendency);
    }
  }

  const dominanceRatio = maxCount / totalQuestions;
  const percentage = Math.round(dominanceRatio * 100);

  let band: Band = 'Dynamic';
  if (dominanceRatio === 1.0) band = 'Strong';
  else if (dominanceRatio >= 0.6) band = 'Moderate';

  let mode: Mode = 'Dynamic';
  let finalDominant: Tendency | null = null;
  let secondary: Tendency | null = null;

  if (band !== 'Dynamic') {
    finalDominant = dominantTendencies[0];
    mode = TendencyToModeMap[finalDominant];

    if (band === 'Moderate') {
      let secondMax = 0;
      let possibleSecondary: Tendency | null = null;
      for (const [tendency, count] of Object.entries(counts)) {
        if (tendency !== finalDominant && count > secondMax) {
          secondMax = count;
          possibleSecondary = tendency as Tendency;
        }
      }
      secondary = possibleSecondary;
    }
  }

  return {
    scores: counts,
    dominantTendency: finalDominant,
    secondaryTendency: secondary,
    dominanceRatio,
    percentage,
    band,
    mode,
    patternVector: counts,
  };
}
