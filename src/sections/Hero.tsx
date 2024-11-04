'use client'
import React from "react";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome to
        <span className="ml-2 relative inline-block">
          Chat AI
          <svg className="w-full h-4 absolute left-0 top-full" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q50 0 100 10 T200 10" stroke="gray" strokeWidth="2" fill="none" />
          </svg>
        </span>
      </h1>
      <p className="text-base md:text-lg text-gray-700 mb-6 text-center">Experience the future of conversation with our AI-powered chat platform.</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200" onClick={() => router.push("/options")}>
        Get Started
      </button>
    </div>
  );
}

export default Hero;
