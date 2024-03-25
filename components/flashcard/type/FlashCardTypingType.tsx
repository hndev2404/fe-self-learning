import { IJSONTyping } from "@/interfaces/flashcard";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export interface IFlashcardProps {
  data: IJSONTyping;
  isShowAnswer: boolean;
}

const FlashCardTypingType = (props: IFlashcardProps) => {
  const Front = () => {
    return (
      <>
        <div className="text-left mb-4">
          <MDEditor.Markdown source={props.data.question} />
        </div>
        <textarea
          id="myTextarea"
          rows={10}
          className="border border-gray-300 p-2 w-full"
          placeholder="Enter your answer here..."
        ></textarea>
      </>
    );
  };

  const Back = () => {
    return (
      <div className="mt-8">
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
