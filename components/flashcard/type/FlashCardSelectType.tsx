import { IJSONSelect } from "@/interfaces/flashcard";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export interface IFlashcardProps {
  data: IJSONSelect;
  isShowAnswer: boolean;
}

const FlashCardSelectType = (props: IFlashcardProps) => {
  const [answer, setAnswer] = useState("");

  const Answer = () => {
    if (!answer) return <></>
  
    return (
      <div className="flex gap-1 mt-8">
          <p className="font-semibold" >{`Đáp án: `}</p>
          
          <p className="bg-[#dbfbe1]">{props.data.correctAnswer}</p>
        </div>
    )
  }
  const Front = () => {
    return (
      <div className="text-left">
        <div className="flex gap-1 mb-2 text-2xl">
          <p className="font-semibold" >{`100.`}</p>
          
          <p className="text-2xl">{props.data.question}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 w-fit">
        {props.data.options.map((option, index) => {
          return (
            <div
              key={index}
              className={`border rounded-md p-2 text-left cursor-pointer max-w-[16rem] ${
                answer !== "" &&
                answer === option &&
                (answer === props.data.correctAnswer
                  ? "bg-[#dbfbe1]"
                  : "bg-[#ffe8e8]")
              }`}
              onClick={() => {
                if (answer === "") {
                  setAnswer(option)
                }
              }}
            >
              <p>{option}</p>
            </div>
          );
        })}
        </div>

        <Answer />

      </div>
    );
  };

  const Back = () => {
    return (
      <div>

        <div>
          <MDEditor.Markdown source={props.data.solution} />

        </div>
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

export default FlashCardSelectType;
