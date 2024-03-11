import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/common/Provider";
import Header from "@/components/common/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self-Learning",
  description: "Self-Learning by using FlashCard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header></Header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
