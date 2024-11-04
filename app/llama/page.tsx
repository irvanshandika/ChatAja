import React from "react";
import type { Metadata } from "next";
import Llama from "@/src/Llama";

export const metadata: Metadata = {
  title: "Llama AI",
};

function LlamaPage() {
  return (
    <>
      <Llama />
    </>
  );
}

export default LlamaPage;
