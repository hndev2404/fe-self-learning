import { EFlashCardType, ICard, IDesk } from "@/interfaces/flashcard";

export const TOEICCards: ICard[] = [];

TOEICCards.push({
  id: 1,
  deskId: 1,
  type: "select",
  data: {
    question: `### 100. Dr. Braun will write --- leteres only for interns who master every task expected of junior copy editor.`,
    options: [
      `A. recommends`,
      `B. recommendatoins`,
      `C. recommended`,
      `D. recommending`,
    ],
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

Tiến sĩ Braun sẽ chỉ viết thư giới thiệu cho những thực tập sinh đã nắm chắc được mọi nhiệm vụ của nhân viên chỉ sửa.`,
  },
});

TOEICCards.push({
  id: 2,
  deskId: 1,
  type: "select",
  data: {
    question: `### 101. The --- of a new chief financial officer at Veracore Industries was announced on April 6.`,
    options: [
      `A. appoint`,
      `B. appoints`,
      `C. appointed`,
      `D. appointment`,
    ],
    correctAnswer: `D. appointment`,
    solution: `
**Dạng câu** 
- Ngữ pháp - Từ loại

**Đáp án:**
- A. V(số nhiều)/V(nguyên mẫu)
- B. V (số ít)
- C. Adj (bị động)/ V (quá khứ)
- D. N

**Tách câu**

**The ---** / **of a new chief financial officer** / **at Veracore Industries** / **was announced on April 6.**

**Giải thích**

* Giới từ **of** => N1 of N2
* Mạo từ **The** => Cần N để bổ nghĩa

=> Chỗ trống cần sử dụng N để bổ nghĩa cho mạo từ **The**.

**Dịch nghĩa**

Việc bổ nhiệm giám đốc tài chính ở VI được công bố vào ngày 6 tháng 4.
`,
  },
});

export const TOEICDesk: IDesk = {
  id: 1,
  parentId: 0,
  name: "TOEIC ETS 2018 - Test 1",
};
