import React from "react";
import type { Metadata } from "next";
import Gemini from "@/src/Gemini";

export const metadata: Metadata = {
  title: "Gemini AI",
};

function GeminiPage() {
  return (
    <>
      <Gemini />
    </>
  );
}

export default GeminiPage;
