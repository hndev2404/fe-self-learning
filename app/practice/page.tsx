import React from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

export interface ListPractice {
  id: number,
  name: string,
  total: number,
}
export default function Practice() {
  const practices: ListPractice[] = [
    {id: 1, name: 'TOEIC Part 5', total: 120},
    {id: 2, name: 'Vocabulary In TOEIC', total: 120},
    {id: 3, name: 'IPA', total: 24},

  ]
  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`Practice`}/>
        <div className="flex flex-col">
        {practices.map(practice => {
          return (
            <div  className="p-[0.5rem] pl-[1rem] border-b-2 text-[#0d6efd]"
            >
              <a href={`/practice/${practice.id}`}>
                {practice.name}
              </a>
            </div>
          )
        })}
        </div>

      </Container>
    </div>
  );
}
