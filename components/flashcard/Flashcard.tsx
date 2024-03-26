import {
  EFlashCardControl,
  ICard,
  IDesk,
  IJSONBasic,
} from "@/interfaces/flashcard";
import React, { useState } from "react";
import FlashCardBasicType from "./type/FlashCardBasicType";
import FlashcardControl from "./FlashcardControl";
import FlashCardType from "./type/FlashCardType";
export interface IFlashcardProps {
  desk: IDesk;
  card: ICard;
  onPressAction: (deskId: number,
    cardId: number,
    action: EFlashCardControl
  ) => void;
}

const Flashcard = (props: IFlashcardProps) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const onPressAction = (deskId: number,
    cardId: number,
    action: EFlashCardControl
  ) => {
    setIsShowAnswer(false);
    props.onPressAction(deskId, cardId, action);
  }
  return (
    <div
      className={`flex flex-col gap-2 justify-between ${
        isShowAnswer ? "mb-32" : ""
      }`}
      
    >
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-full min-h-[200px]">
        <div className="mb-4">Source: {props.desk.name}</div>
        <FlashCardType
          data={props.card.data}
          isShowAnswer={isShowAnswer}
          type={props.card.type}
        />
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 overflow-y-hidden overflow-x-hidden">
        <FlashcardControl
          deskId={props.desk.id}
          cardId={props.card.id}
          isShowAnswer={isShowAnswer}
          setIsShowAnswer={setIsShowAnswer}
          onPressAction={onPressAction}
        />
      </div>
    </div>
  );
};

export default Flashcard;
