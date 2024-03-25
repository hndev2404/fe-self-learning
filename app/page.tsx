"use client"

import React, { useState } from "react";

import Container from "@/components/common/Container";
import { cards, desks } from "@/data/fakeFlashCard"
import Flashcard from "@/components/flashcard/Flashcard";
import { EFlashCardControl } from "@/interfaces/flashcard";

export default function Home() {
  const [index, setIndex] = useState(2)  
  const onPressAction = (
    deskId: number,
    cardId: number,
    action: EFlashCardControl
  ) => {
    console.log("🚀 ~ Flashcard ~ action:", action);
    console.log("🚀 ~ Flashcard ~ cardId:", cardId);
    console.log("🚀 ~ Flashcard ~ deskId:", deskId);
    setIndex((index + 1) % cards.length);
    
};

  return (
    <main className="flex justify-center">
      <Container>

        <div className="mt-8">
        <Flashcard card={cards[index]} desk={desks[cards[index].deskId]} onPressAction={onPressAction}/>

        </div>
      </Container>
    </main>
  );
}
