import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Selamat Datang di ChatAja</h1>
        <p className="text-lg md:text-xl max-w-xl">ChatAja adalah solusi chatbot pintar yang membantu Anda mendapatkan informasi dengan cepat dan mudah.</p>
        <div className="mt-8">
          <Link href="/models" className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Mulai Chat
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;