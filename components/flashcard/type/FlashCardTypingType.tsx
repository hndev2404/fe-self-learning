import { IJSONTyping } from "@/interfaces/flashcard";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Question from "@/components/flashcard/Question"
export interface IFlashcardProps {
  data: IJSONTyping;
  isShowAnswer: boolean;
}

const FlashCardTypingType = (props: IFlashcardProps) => {
  const Front = () => {
    return (
      <div>
        <Question question={props.data.question}/>
        <textarea
          id="myTextarea"
          rows={10}
          className="border border-gray-300 p-2 w-full"
          placeholder="Enter your answer here..."
        ></textarea>
      </div>
    );
  };

  const Back = () => {
    return (
      <div>
        <MDEditor.Markdown source={props.data.answer} />
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Front />
      <hr className="border-t border-gray-500 my-4" />
      {props.isShowAnswer && <Back />}
    </div>
  );
};

export default FlashCardTypingType;
