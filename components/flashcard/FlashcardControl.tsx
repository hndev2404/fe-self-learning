import { EFlashCardControl } from "@/interfaces/flashcard";
import React from "react";
export interface IFlashcardControl {
  nextTime: string;
  type: EFlashCardControl;
}

const CONTROL_COLORS = {
  [EFlashCardControl.NEXT_DAY]: "bg-green-500",
  [EFlashCardControl.AGAIN]: "bg-blue-500",
  [EFlashCardControl.HARD]: "bg-red-500",
  [EFlashCardControl.GOOD]: "bg-yellow-500",
};

export interface IFlashcardControlProps {
  deskId: number;
  cardId: number;
  isShowAnswer: boolean;
  setIsShowAnswer: (isShowAnswer: boolean) => void;
  onPressAction: (deskId: number, cardId: number, action: EFlashCardControl) => void;
}

const FlashcardControl = (props: IFlashcardControlProps) => {
  return (
    <div className="flex gap-4 justify-center m-8">
      {props.isShowAnswer === false ? (
        <button
          className="p-2 bg-green-500 rounded text-white hover:opacity-75 transition duration-300"
          onClick={() => props.setIsShowAnswer(true)}
        >
          Show Answer
        </button>
      ) : (
        <>
          {Object.values(EFlashCardControl).map((value, index) => {
            return (
              <div key={index} className="flex flex-col justify-center text-center">
                <button
                  className={`p-2 ${
                    CONTROL_COLORS[value]
                  } rounded text-white hover:opacity-75 transition duration-300 text-nowrap`}
                  onClick={() => props.onPressAction(props.deskId, props.cardId, value)}
                >
                  {value}
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
