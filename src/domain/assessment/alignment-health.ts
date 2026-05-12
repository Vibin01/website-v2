import { Band, PhaseKey } from './types';

export function getBandScore(band: Band): number {
  if (band === 'Strong') return 3;
  if (band === 'Moderate') return 2;
  return 1;
}

export function getHealthLabel(normalizedScore: number): 'Strong' | 'Moderate' | 'Weak' {
  if (normalizedScore >= 1) return 'Strong';
  if (normalizedScore >= 0.6) return 'Moderate';
  return 'Weak';
}

export function computeAlignmentHealth(phaseBands: Record<PhaseKey, Band>) {
  const visionRaw = getBandScore(phaseBands.uncertainty);
  const strategyRaw = getBandScore(phaseBands.pressure) + getBandScore(phaseBands.control);
  const executionRaw = getBandScore(phaseBands.perception) + getBandScore(phaseBands.outcome);

  const visionNorm = visionRaw / 3;
  const strategyNorm = strategyRaw / 6;
  const executionNorm = executionRaw / 6;

  return {
    vision: {
      score: visionNorm,
      label: getHealthLabel(visionNorm)
    },
    strategy: {
      score: strategyNorm,
      label: getHealthLabel(strategyNorm)
    },
    execution: {
      score: executionNorm,
      label: getHealthLabel(executionNorm)
    }
  };
}
