import React from "react";
import Hero from "@/src/sections/Hero";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
