import {
  IJSONBasic,
  IJSONSelect,
  IJSONTyping,
  IJSONCloze,
  EFlashCardType,
} from "@/interfaces/flashcard";
import React from "react";
import FlashCardBasicType from "./FlashCardBasicType";
import FlashCardSelectType from "./FlashCardSelectType";
import FlashCardClozeType from "./FlashCardClozeType";
import FlashCardTypingType from "./FlashCardTypingType";

export interface IFlashcardProps {
  type: EFlashCardType;
  data: IJSONBasic | IJSONSelect | IJSONTyping | IJSONCloze;
  isShowAnswer: boolean;
}

const FlashCardType = (props: IFlashcardProps) => {
  switch (props.type) {
    case "basic":
      return (
        <FlashCardBasicType
          data={props.data as IJSONBasic}
          isShowAnswer={props.isShowAnswer}
        />
      );
    case "select":
      return (
        <FlashCardSelectType data={props.data as IJSONSelect} isShowAnswer={props.isShowAnswer} />
      )
    case "typing":
      return (
        <FlashCardTypingType  data={props.data as IJSONTyping} isShowAnswer={props.isShowAnswer} />
      )
    case "cloze": 
      return (
        <FlashCardClozeType data={props.data as IJSONCloze} isShowAnswer={props.isShowAnswer} />
      )
    default:
      break;
  }    
};

export default FlashCardType;
