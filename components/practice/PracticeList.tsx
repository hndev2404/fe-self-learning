import React from "react";

interface ChildPractice {
  id: number;
  name: string;
  href: string;
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
          <h2 className="text-2xl font-bold my-4">{practice.name}</h2>
          <div className="ml-[32px] flex flex-col gap-4">
            {practice.childs.map((child) => (
              <a key={child.id} className="text-blue-500 hover:underline" href={`/practice/${child.href}`}>
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
