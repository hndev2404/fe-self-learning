import { IJSONBasic } from "@/interfaces/flashcard";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export interface IFlashcardProps {
  data: IJSONBasic;
  isShowAnswer: boolean;
}

const FlashCardBasicType = (props: IFlashcardProps) => {

  const Front = () => {
    return (
      <div className="text-left text-2xl">
        {props.data.question}
      </div>
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

export default FlashCardBasicType;
