import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 0,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'What is Data Structure & Algorithm ?',
            answer: 'Cấu trúc dữ liệu là cách để tổ chức data trong máy tính để có thể sử dụng một cách hiệu quả. Thuật toán , là một tập hợp hữu hạn của các chỉ thị hay phương cách được định nghĩa rõ ràng cho việc hoàn tất một số sự việc từ một trạng thái ban đầu cho trước',
        }
    }
]

export const backend = {
    desk: {
        id: 0,
        name: 'Backend',
    },
    cards
}




