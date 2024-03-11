import { EAnswer, ITOEICPart5 } from "./TOEIC";

export enum EPracticeType {
  TOEIC_PART_5,
}

export enum EStatusPracticeTOEICPart5 {
  CORRECT,
  INCORRECT,
  NONE,
}

export interface IPracticeTOEICPart5 extends ITOEICPart5 {
  answer: EAnswer;
}

export interface IPractice {
  id: number;
  type: EPracticeType;
  deskName: string;
  currentIdx: number;
  cards: IPracticeTOEICPart5[];
}

