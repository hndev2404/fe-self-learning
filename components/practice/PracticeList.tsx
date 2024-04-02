import React from "react";

interface ChildPractice {
  id: number;
  name: string;
}

interface Practice {
  id: number;
  name: string;
  childs: ChildPractice[];
}

interface Props {
  practices: Practice[];
}

const PracticeList: React.FC<Props> = ({ practices }) => {
  return (
    <div>
      {practices.map((practice) => (
        <div key={practice.id} className="cursor-pointer">
          <h2 className="text-xl font-bold my-2">{practice.name}</h2>
          <div className="ml-[32px] flex flex-col gap-1">
            {practice.childs.map((child) => (
              <a key={child.id} className="text-blue-500 hover:underline" href={`/practice/${child.id}`}>
                {child.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeList;
