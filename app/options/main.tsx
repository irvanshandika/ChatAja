"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OptionsPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Choose Your AI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button onClick={() => router.push("/llama")} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image src="https://api.iconify.design/logos:meta.svg" width={200} height={200} alt="Llama AI" />
          <span className="mt-2 text-lg font-semibold">Llama AI</span>
        </button>
        <button onClick={() => router.push("/gemini")} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image src="https://api.iconify.design/logos:google-gemini.svg" width={200} height={200} alt="Gemini AI" />
          <span className="mt-2 text-lg font-semibold">Gemini AI</span>
        </button>
      </div>
    </div>
  );
};

export default OptionsPage;
