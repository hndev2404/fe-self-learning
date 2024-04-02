import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 0,
        deskId: 0,
        type: 'typing',
        data: {
            question: 'Question database',
            answer: 'Question database',
        }
    }
]

export const database = {
    desk: {
        id: 0,
        name: 'database',
    },
    cards
}




