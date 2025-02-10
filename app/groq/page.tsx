import React from "react";
import GroqChat from "./main";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groq",
};

function Groq() {
  return (
    <>
      <GroqChat />
    </>
  );
}

export default Groq;
