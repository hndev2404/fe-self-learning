import { ICard } from "@/interfaces/flashcard";

const cards: ICard[] = [
    {
        id: 1,
        deskId: 0,
        type: 'basic',
        data: {
            question: 'Difference between := and = operators in Go',
            answer: 'In Go, `:=` is for declaration + assignment, whereas `=` is for assignment only.\nFor example, `var foo int = 10` is the same as `foo := 10`.',
        }
    },

];

const backend = {
    desk: {
        id: 0,
        name: 'Backend',
    },
    cards
};

export default backend;
