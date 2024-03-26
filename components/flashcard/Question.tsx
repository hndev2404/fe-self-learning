import React from "react";
import MDEditor from "@uiw/react-md-editor";

export interface QuestionProps {
  question: string;
}

const Question = (props: QuestionProps) => {
  return (
    <div className="text-left mb-4">
      <MDEditor.Markdown source={props.question} />
    </div>
  );
};

export default Question;
