"use client";

import React, { useEffect, useState } from "react";

import Container from "@/components/common/Container";
import MDEditor from "@uiw/react-md-editor";
const markdown = `

Bạn cảm thấy mất hứng thú khi học hoặc quên thông tin ngay sau khi học? Đừng lo, Self-Learning sẽ giúp bạn học một cách hiệu quả.

[HỌC NGAY](/practice)
`;

export default function Home() {
  return (
    <main className="# flex justify-center">
      <Container>
        <MDEditor.Markdown source={markdown} />
        <div className="h-[200px]"></div>
      </Container>
    </main>
  );
}
