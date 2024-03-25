import { EFlashCardType, ICard, IDesk } from "@/interfaces/flashcard";

export const cards: ICard[] = [];

for (let i = 1; i <= 1; i++) {
  cards.push({
    id: i,
    deskId: 0,
    type: "basic",
    data: {
      question: `What is Node.js?`,
      answer: ` <<Node.js>> is a **single-threaded**, open-source, cross-platform runtime environment used to build server-side and networking applications.`,
    },
  });
}

for (let i = 1; i <= 1; i++) {
  cards.push({
    id: i,
    deskId: 1,
    type: "select",
    data: {
      question: `Dr. Braun will write --- leteres only for interns who master every task expected of junior copy editor.`,
      options: [`A. recommends`, `B. recommendatoins`, `C. recommended`, `D. recommending`],
      correctAnswer: `B. recommendatoins`,
      solution: `
**Dạng câu** 
- Ngữ pháp - Từ loại\n
**Đáp án:**\n
- A. Động từ số ít
- B. Danh từ số nhiều
- C. Động từ ở thì quá khứ (tính từ chủ động)
- D. Động từ ở dạng thêm _ing

**Giải thích**

Chỗ trống cần sử dụng danh từ ***recommendation*** để tạo thành một cụm danh từ: 

> **Recommendation
letter: Thư giới thiệu**

**Dịch nghĩa**

Tiến sĩ Braun sẽ chỉ viết thư giới thiệu cho những thực tập sinh đã nắm chắc được mọi nhiệm vụ của nhân viên chỉ sửa.`
    },
  });
}

for (let i = 1; i <= 1; i++) {
  cards.push({
    id: i,
    deskId: 2,
    type: "typing",
    data: {
      question: `### What is Data Structure & Algorithm ?`,
      answer: `> **Cấu trúc dữ liệu** là cách để tổ chức data trong máy tính để có thể sử dụng một cách hiệu quả. Thuật toán , là một tập hợp hữu hạn của các chỉ thị hay phương cách được định nghĩa rõ ràng cho việc hoàn tất một số sự việc từ một trạng thái ban đầu cho trước`,
    },
  });
}

for (let i = 1; i <= 1; i++) {
  cards.push({
    id: i,
    deskId: 3,
    type: "cloze",
    data: {
      question: `What is Node.js?`,
      template: `Node.js is a <<single-threaded>>, open-source, cross-platform runtime environment used to build <<server-side>> and networking applications.`,
    },
  });
}

export const desks: IDesk[] = [
  {
    id: 1,
    parentId: 0,
    name: "Nodejs",
  },
  {
    id: 2,
    parentId: 0,
    name: "TOEIC",
  },
  {
    id: 3,
    parentId: 0,
    name: "Technical",
  },
  {
    id: 4,
    parentId: 0,
    name: "Technical",
  },
]

