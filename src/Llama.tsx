"use client";
import { useChat } from "ai/react";
import MetaIcon from "./components/icons/MetaIcon";
import UserIcon from "./components/icons/UserIcon";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat/llma",
  });

  return (
    <div className="p-4">
      <header className="text-center">
        <h1 className="text-xl">Llama AI</h1>
      </header>
      <div className="flex flex-col justify-between w-full max-w-md mx-auto">
        <div className="flex-grow overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap flex gap-x-2">
              {m.role === "user" ? (
                <>
                  <UserIcon className="w-6 h-6 inline-block flex-shrink-0" />
                  <span>:</span>
                </>
              ) : (
                <>
                  <MetaIcon className="w-6 h-6 inline-block flex-shrink-0" />
                  <span>:</span>
                </>
              )}
              {m.content.replace(/[*_`~]/g, "")}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <input className="w-full p-2 border border-gray-300 rounded shadow-xl" value={input} placeholder="Say something..." onChange={handleInputChange} />
        </form>
      </div>
    </div>
  );
}
