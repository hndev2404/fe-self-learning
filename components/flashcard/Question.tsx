import React from "react";
import MDEditor from "@uiw/react-md-editor";

export interface QuestionProps {
  question: string;
}

const Question = (props: QuestionProps) => {
  return (
    <div className="text-left mb-4 font-semibold text-xl">
      {props.question}
      {/* <MDEditor.Markdown source={props.question} /> */}
    </div>
  );
};

export default Question;
