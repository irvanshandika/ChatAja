import React from "react";
import type { Metadata } from "next";
import Groq from "@/src/Groq";

export const metadata: Metadata = {
  title: "Groq AI",
};

function GroqPage() {
  return (
    <>
      <Groq />
    </>
  );
}

export default GroqPage;
