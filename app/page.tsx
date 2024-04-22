"use client";

import React, { useEffect, useState } from "react";

import Container from "@/components/common/Container";
import MDEditor from "@uiw/react-md-editor";
const markdown = `



### Dataset for self-learning

[Learning](/practice)
`;

export default function Home() {
  return (
    <main className="flex justify-center">
      <Container>
        <div className="mt-4">
          <MDEditor.Markdown source={markdown} />
        </div>
      </Container>
    </main>
  );
}
