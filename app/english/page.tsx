"use client"
import React from "react";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import MDEditor from "@uiw/react-md-editor";


const english = `
## Question
### Introduce yourself

I am a software engineer with over two years of experience in building web applications. 
I graduated with a Bachelor's degree in Information Technology from the University of Information Technology in 2023.

In my previous role, 
I was involved in both creating new projects from scratch and maintaining existing ones for some of our long-term clients. 
Over the last year, I've worked on several project teams where I primarily used JavaScript, PHP, and Go.

I’ve researched your company and the role you're offering, 
and I’m excited about the opportunity to work with Golang. I believe your company is a great fit for my skills and interests. 
I’m eager to contribute my technical expertise and help develop impactful applications and systems here.


## Sentences
I believe my background and skills align well with your needs.
`;
export default function EnglishPage() {
  return (
    <div className="flex justify-center">
      <Container>
        <Title title={`English`}/>

        <div className="mt-4 mb-8">
          <MDEditor.Markdown source={english} />
        </div>
      </Container>
    </div>
  );
}
