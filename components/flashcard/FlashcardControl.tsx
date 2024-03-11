import React, { useState } from "react";

export enum EFlashCardControl {
  NEXT_DAY = "Next Day",
  HARD = "Hard",
  EASY = "Easy",
  GOOD = "Good",
}

const CONTROL_COLORS = {
  [EFlashCardControl.NEXT_DAY]: "bg-green-500",
  [EFlashCardControl.HARD]: "bg-red-500",
  [EFlashCardControl.EASY]: "bg-blue-500",
  [EFlashCardControl.GOOD]: "bg-yellow-500",
};
export interface IFlashcardControl {
  nextTime: string;
  type: EFlashCardControl;
}

export interface IFlashcardControlProps {
  deskId: number;
  cardId: number;
  control: IFlashcardControl[];
  isShowAnser: boolean;
  setIsShowAnswer: (isShowAnser: boolean) => void;
  onPressAction: (deskId: number, cardId: number, action: EFlashCardControl) => void;
}

const FlashcardControl = (props: IFlashcardControlProps) => {
  return (
    <div className="flex gap-4 justify-center mt-8">
      {props.isShowAnser === false ? (
        <button
          className="p-2 bg-green-500 rounded text-white hover:opacity-75 transition duration-300"
          onClick={() => props.setIsShowAnswer(true)}
        >
          Show Answer
        </button>
      ) : (
        <>
          {props.control.map((item, index) => {
            return (
              <div key={index} className="flex flex-col justify-center text-center	">
                <div className="p-1">{item.nextTime}</div>
                <button
                  className={`p-2 ${
                    CONTROL_COLORS[item.type]
                  } rounded text-white hover:opacity-75 transition duration-300`}
                  onClick={() => props.onPressAction(props.deskId, props.cardId, item.type)}
                >
                  {item.type}
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FlashcardControl;
