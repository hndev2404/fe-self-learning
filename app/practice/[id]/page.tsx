import React from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

export interface ListPractice {
  id: number,
  name: string,
  total: number,
}
export default function DetailPracticeLayout() {

  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`Detail Practice`} />
        ...
      </Container>
    </div>
  );
}
