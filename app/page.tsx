"use client";

import React, { useEffect, useState } from "react";

import Container from "@/components/common/Container";
import MDEditor from "@uiw/react-md-editor";
const markdown = `
-
Bạn cảm thấy mất hứng thú khi học hoặc quên thông tin ngay sau khi học? Đừng lo, Self-Learning có phương pháp "spaced repetition" giúp bạn học hiệu quả.

# Tại sao cần phải học bằng phương pháp Spaced Repetition?
Spaced repetition giúp cải thiện ghi nhớ lâu dài bằng cách lặp lại thông tin ở các khoảng thời gian khác nhau.

## Cách Hoạt Động
* **Khám Phá Tài Nguyên:** Khám phá tài liệu và nguồn học liệu trên Self-Learning tại Practice.

* **Chọn Chủ Đề:** Chọn chủ đề bạn quan tâm.

* **Bắt Đầu Học:** Bắt đầu học thông qua các bài học, bài tập.

* **Spaced Repetition:** Hệ thống sẽ tự động xác định thời điểm ôn lại nội dung đã học.

* **Ôn Lại Thường Xuyên:** Được cung cấp các bài ôn tập đều đặn, giúp duy trì và củng cố kiến thức.

## Lợi Ích
Spaced repetition trên Self-Learning mang lại nhiều lợi ích. Điều này bao gồm khả năng ghi nhớ thông tin lâu dài, tiết kiệm thời gian học và sự linh hoạt trong việc học.

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
