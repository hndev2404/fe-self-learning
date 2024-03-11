"use client";

import React, { useState } from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { EAnswer, ITOEICPart5 } from "@/inteface/TOEIC";
import FlashcardTOEICPart5 from "./_component/FlashcardTOEICPart5";
import FlashcardControl, {
  EFlashCardControl,
  IFlashcardControl,
} from "@/components/flashcard/FlashcardControl";
export enum EPracticeType {
  TOEIC_PART_5,
}

export enum EStatusPracticeTOEICPart5 {
  CORRECT,
  INCORRECT,
  NONE,
}

export interface IPracticeTOEICPart5 extends ITOEICPart5 {
  answer: EAnswer
}

export interface IPractice {
  id: number;
  type: EPracticeType;
  deskName: string;
  currentIdx: number;
  cards: IPracticeTOEICPart5[];
}

export default function DetailPracticeLayout() {
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [practice, setPractice] = useState<IPractice>({
    id: 1,
    type: EPracticeType.TOEIC_PART_5,
    deskName: "TOEIC Part 5",
    currentIdx: 0,
    cards: [
      {
        id: 1,
        contest: 0,
        contestName: "ETS 2018",
        index: 106,
        q: "Many people at the company have industry experience, but only a handful of _____ can see the future importance of current trends.",
        a: "we",
        b: "us",
        c: "our",
        d: "ourselves",
        correctAnswer: EAnswer.B,
        answer: EAnswer.NONE,
      },
      {
        id: 2,
        contest: 0,
        contestName: "ETS 2018",
        index: 110,
        q: "The city council approved the bill to increase funding for its road improvement _____.",
        a: "statement",
        b: "permission",
        c: "project",
        d: "ability",
        correctAnswer: EAnswer.C,
        answer: EAnswer.NONE,
      },
      {
        id: 3,
        contest: 0,
        contestName: "ETS 2018",
        index: 118,
        q: "The Vickwell Historical Museum will be closed for renovations _____ on Monday, September",
        a: "will begin",
        b: "has begun",
        c: "beginner",
        d: "beginning",
        correctAnswer: EAnswer.D,
        answer: EAnswer.NONE,

      },
      {
        id: 4,
        contest: 0,
        contestName: "ETS 2018",
        index: 100,
        q: "Board members are free to discuss the issues among _____ before the formal votes are taken.",
        a: "themselves",
        b: "theirs",
        c: "their",
        d: "they",
        correctAnswer: EAnswer.A,
        answer: EAnswer.NONE,
      },
    ],
  })

  const control: IFlashcardControl[] = [
    { nextTime: "+1d", type: EFlashCardControl.NEXT_DAY },
    { nextTime: "+1m", type: EFlashCardControl.HARD },
    { nextTime: "+10m", type: EFlashCardControl.EASY },
    { nextTime: "+1d", type: EFlashCardControl.GOOD },
  ];

  const onPressAction = (deskId: number, cardId: number, action: EFlashCardControl) => {
    console.log("🚀 ~ DetailPracticeLayout ~ action:", action)
    console.log("🚀 ~ DetailPracticeLayout ~ cardId:", cardId)
    console.log("🚀 ~ DetailPracticeLayout ~ deskId:", deskId)
    console.log("CALL API TO UPDATE NEXT BEHAVIOR");
    setPractice({...practice, currentIdx: (practice.currentIdx + 1) % practice.cards.length})
    setIsShowAnswer(false)
  }

  const onPressAnswer = (answer: EAnswer) => {
    console.log("🚀 ~ onPressAnswer ~ answer:", answer)
    console.log("🚀 ~ onPressAnswer ~ currentIndex:", practice.currentIdx)
    if (isShowAnswer === true) {
      return ;
    }
    setIsShowAnswer(true)
    setPractice({
      ...practice,
      cards: practice.cards.map((card, index) => {
        if (index === practice.currentIdx) {
          return {
            ...card,
            answer: answer,
          };
        }
        return card;
      }),
    });
  }
  return (
    <div className="flex justify-center">
      <Container>
        <Title title={practice.deskName} />
        <div className="flex justify-center">
          <FlashcardTOEICPart5 
            part5={practice.cards[practice.currentIdx]}
            onPressAnswer={onPressAnswer}
          />
        </div>

        <div>
          <FlashcardControl
            control={control}
            isShowAnser={isShowAnswer}
            setIsShowAnswer={setIsShowAnswer}
            deskId={practice.id}
            cardId={practice.cards[practice.currentIdx].id} 
            onPressAction={onPressAction}
          />
        </div>
      </Container>
    </div>
  );
}
