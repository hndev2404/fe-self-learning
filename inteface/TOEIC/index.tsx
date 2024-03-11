export enum EAnswer {
  A,
  B,
  C,
  D,
  NONE,
}

export interface ITOEICPart5 {
  id: number;
  contest: number;
  contestName: string;
  index: number;
  q: string;
  a: string;
  b: string;
  c: string;
  d: string;
  
  correctAnswer: EAnswer;
}
