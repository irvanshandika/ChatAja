import React from "react";
import DeepSeekChat from "./main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deepseek",
};

function DeepSeek() {
  return (
    <>
      <DeepSeekChat />
    </>
  );
}

export default DeepSeek;
