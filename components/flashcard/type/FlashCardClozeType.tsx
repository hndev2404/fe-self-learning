import { IJSONCloze } from "@/interfaces/flashcard";

import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface FlashCardClozeTypeProps {
  data: IJSONCloze;
  isShowAnswer: boolean;
}

const FlashCardClozeType = (props: FlashCardClozeTypeProps) => {
  const clozeInputs = props.data.template.split(/<<(.*?)>>/);
  const [userAnswers, setUserAnswers] = useState(
    new Array(clozeInputs.length).fill("")
  );

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const Back = () => {
    return (
      <div>
        <div className="text-gray-700 leading-4">
          <MDEditor.Markdown
            source={props.data.template.replace(/<<|>>/g, "**")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <p className="font-bold text-gray-700 text-2xl mb-4">
          {props.data.question}
        </p>
        <div className="text-gray-700 leading-4">
          {props.data.template.split(/<<(.*?)>>/).map((part, index) => {
            const inputSize = `w-[${part.length * 5}px]`;
            console.log(
              "🚀 ~ {props.data.template.split ~ inputSize:",
              inputSize
            );

            return index % 2 === 0 ? (
              <span key={index}>{part}</span>
            ) : (
              <input
                key={index}
                type="text"
                placeholder="Answer"
                value={userAnswers[index]}
                onChange={(event) => handleInputChange(index, event)}
                className={`border border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-500 mr-2 w-[150px] m-2`}
              />
            );
          })}
        </div>
      </div>
      <hr className="border-t border-gray-500 my-4" />
      {props.isShowAnswer && <Back />}
    </div>
  );
};

export default FlashCardClozeType;
