import React from "react";
import ModelsPage from "./main";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilih Model AI",
};

function Models() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <ModelsPage />
        <Footer />
      </div>
    </>
  );
}

export default Models;
