"use client"

import React, { useState } from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import Flashcard from "@/components/flashcard/Flashcard"
import { TOEICDesk, TOEICCards } from "@/data/fakeToeic"
import { EFlashCardControl } from "@/interfaces/flashcard";
export default function PracticeDetailPage() {
  const [index, setIndex] = useState(0)
  const onPressAction = (deskId: number, cardId: number, action: EFlashCardControl) => {
  console.log("🚀 ~ onPressAction ~ action:", action)
  console.log("🚀 ~ onPressAction ~ cardId:", cardId)
  console.log("🚀 ~ onPressAction ~ deskId:", deskId)
    setIndex((index + 1) % (TOEICCards.length));
  }
  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`Practice Toeic ETS 2018 Test 1`}/>
        <Flashcard desk={TOEICDesk} card={TOEICCards[index]} onPressAction={onPressAction} />
      </Container>
    </div>
  );
}
