import React from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import PracticeList from "@/components/practice/PracticeList";

import { practices } from "@/data/practices"
export default function Practice() {

  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`Desk`}/>
        <PracticeList practices={practices} />
      </Container>
    </div>
  );
}
