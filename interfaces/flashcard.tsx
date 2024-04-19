export enum EFlashCardControl {
  NEXT_DAY = "Next Day",
  AGAIN = "Again",
  HARD = "Hard",
  GOOD = "Good",
}

export type EFlashCardType = "basic" | "select" | "typing" | "cloze";

export interface IDesk {
  id: number;
  name: string;
}

export interface IJSONBasic {
  question: string,
  answer: string,
}

export interface IJSONSelect {
  question: string,
  options: string[],
  correctAnswer: string,
  solution: string,
}

export interface IJSONTyping {
  question: string,
  answer: string,
}

export interface IJSONCloze {
  question: string,
  template: string,
}

export interface ICard {
  id: number;
  categories?: string;
  deskId: number;
  type: EFlashCardType;
  data: IJSONBasic | IJSONSelect | IJSONTyping | IJSONCloze;
}
