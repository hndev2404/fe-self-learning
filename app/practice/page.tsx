import React from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import PracticeList from "@/components/practice/PracticeList";

import { practices } from "@/data/fakePracticeSet"
export default function Practice() {

  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`Practice`}/>
        <PracticeList practices={practices} />

      </Container>
    </div>
  );
}
