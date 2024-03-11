import React from "react";
import { EAnswer } from "@/inteface/TOEIC";
import { IPracticeTOEICPart5 } from "@/inteface/flashcard"
interface FlashcardTOEICPart5Props {
  part5: IPracticeTOEICPart5,
  onPressAnswer: (answer: EAnswer) => void,
}
const FlashcardTOEICPart5 = (props: FlashcardTOEICPart5Props) => {
  const options = [
    { lable: `A. ${props.part5.a}`, value: EAnswer.A },
    { lable: `B. ${props.part5.b}`, value: EAnswer.B },
    { lable: `C. ${props.part5.c}`, value: EAnswer.C },
    { lable: `D. ${props.part5.d}`, value: EAnswer.D },
  ];
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[50rem]">
      <div className="text-2xl font-semibold my-2">{props.part5.contestName}</div>
      <div className="flex min-h-[3rem]">
        <p className="font-bold mb-4 mr-2">{`${props.part5.index}.`}</p>
        <p className="mb-4">{props.part5.q}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-fit">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`border rounded-md p-2 text-left cursor-pointer max-w-[16rem] ${
                props.part5.answer !== EAnswer.NONE && props.part5.answer === option.value &&
                (props.part5.answer === props.part5.correctAnswer ?
                "bg-[#dbfbe1]" : "bg-[#ffe8e8]")
              }`}
              onClick={() => props.onPressAnswer(option.value)}
            >
              <p>{option.lable}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashcardTOEICPart5;
