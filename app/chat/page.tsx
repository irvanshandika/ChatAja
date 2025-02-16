import React from "react";
import GeminiChat from "./main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

function Gemini() {
  return (
    <>
      <GeminiChat />
    </>
  );
}

export default Gemini;