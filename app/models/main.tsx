'use client';
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OpenAI from "@/src/components/icons/OpenAI";

const ModelsPage: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[13vh] mb-[6vh]">
        <header className="p-4">
          <h1 className="text-3xl font-bold text-center">Model Tersedia</h1>
        </header>

        <main className="p-4 space-y-4">
          {/* Gemini */}
          <div onClick={() => router.push("/gemini")} className="cursor-pointer flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex-shrink-0 mr-4">
              <Image src="https://api.iconify.design/logos:google-gemini.svg" alt="Gemini" width={60} height={60} className="object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Gemini</h2>
              <p className="text-gray-600 dark:text-gray-300">Model AI dengan performa tinggi dan fitur inovatif.</p>
            </div>
          </div>
          {/* Groq */}
          <div onClick={() => router.push("/groq")} className="cursor-pointer flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex-shrink-0 mr-4">
              <Image src="https://groq.com/wp-content/uploads/2024/08/groq-logo-1-2.png" alt="Groq Light" width={60} height={60} className="block dark:hidden object-contain" />
              <Image src="https://groq.com/wp-content/uploads/2024/03/GroqLogo_White.svg" alt="Groq Dark" width={60} height={60} className="hidden dark:block object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Groq</h2>
              <p className="text-gray-600 dark:text-gray-300">Model AI yang dioptimalkan untuk kecepatan dan efisiensi.</p>
            </div>
          </div>
          {/* Deepseek */}
          <div onClick={() => router.push("/deepseek")} className="cursor-pointer flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex-shrink-0 mr-4">
              <Image src="https://deepseekv3.org/logo.png" alt="Deepseek" width={60} height={60} className="object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Deepseek</h2>
              <p className="text-gray-600 dark:text-gray-300">Model AI untuk pencarian mendalam dengan analisis data real-time.</p>
            </div>
          </div>
          {/* Chat GPT */}
          <div className="cursor-not-allowed flex items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="flex-shrink-0 mr-4">
              <OpenAI width={60} height={60} className="object-contain text-black dark:text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">ChatGPT</h2>
              <p className="text-gray-600 dark:text-gray-300">Not available yet</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ModelsPage;
