import React from "react";
import type { Metadata } from "next";
import OptionsPage from "./main";

export const metadata: Metadata = {
  title: "Options AI",
};

function Options() {
  return (
    <>
      <OptionsPage />
    </>
  );
}

export default Options;
