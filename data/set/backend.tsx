import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 0,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Question Backend',
            answer: 'Question Backend',
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




