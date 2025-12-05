export interface EquationTerm {
  id: string;
  symbol: string;
  colorClass: string;
  title: string;
  description: string;
}

export interface SimulationState {
  coherence: number;
  trauma: number;
}

export interface SimulationDataPoint {
  t: number;
  phi: number; // Emotion
  chi: number; // Identity
}

export interface DLHRDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}
