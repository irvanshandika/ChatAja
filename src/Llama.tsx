"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, setMessages, input, handleInputChange, handleSubmit, error, reload } = useChat({
    keepLastMessageOnError: true,
    api: "/api/chat/llama",
  });

  const handleDelete = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-md px-4 py-3 rounded-lg shadow ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <div className="flex justify-between items-center">
                <span className="font-bold">{message.role === "user" ? "Anda" : "AI"}</span>
                <button onClick={() => handleDelete(message.id)} className="text-red-500 hover:text-red-700">
                  &times;
                </button>
              </div>
              <p className="mt-2 text-sm">{message.content}</p>
            </div>
          </div>
        ))}

        {error && (
          <div className="text-red-500">
            <div>Terjadi kesalahan.</div>
            <button type="button" onClick={() => reload()} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
              Coba Lagi
            </button>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex p-4 bg-white border-t border-gray-200">
        <input value={input} onChange={handleInputChange} disabled={error != null} className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none" placeholder="Ketik pesan Anda..." />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
          Kirim
        </button>
      </form>
    </div>
  );
}
