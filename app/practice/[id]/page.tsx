"use client"

import React, { useEffect, useState } from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Flashcard from "@/components/flashcard/Flashcard"
import { EFlashCardControl } from "@/interfaces/flashcard";
import { flashcards } from "@/data/detail"
import { useSearchParams } from "next/navigation";
export default function PracticeDetailPage({ params }: { params: { id: number } }) {
  console.log(params.id);
  
  const [index, setIndex] = useState(0)
  const searchParams = useSearchParams()

  useEffect(() => {
    let currentIndex = parseInt(searchParams.get("index") ?? '0');
    currentIndex = currentIndex % (flashcards[params.id].cards.length)
    setIndex(currentIndex)
  }, [])
  
  const onPressAction = (deskId: number, cardId: number, action: EFlashCardControl) => {
  console.log("🚀 ~ onPressAction ~ action:", action)
  console.log("🚀 ~ onPressAction ~ cardId:", cardId)
  console.log("🚀 ~ onPressAction ~ deskId:", deskId)
    setIndex((index + 1) % (flashcards[params.id].cards.length));
  }
  return (
    <div className="flex justify-center">
      <Container>
        <div></div>
        <Title title={flashcards[params.id].desk.name}/>
        <Flashcard desk={flashcards[params.id].desk} card={flashcards[params.id].cards[index]} onPressAction={onPressAction} />
      </Container>
    </div>
  );
}
