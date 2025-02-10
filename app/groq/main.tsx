"use client";
import { useChat } from "ai/react";
import MarkdownIt from "markdown-it";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();
  
  const { messages, setMessages, input, handleInputChange, handleSubmit, error, reload } = useChat({
    keepLastMessageOnError: true,
    api: "/api/chat/groq",
  });

  const handleDelete = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const md = new MarkdownIt();

  return (
    <div className="relative flex flex-col h-screen bg-white dark:bg-gray-900">
      <header className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button onClick={() => router.back()} className="flex items-center text-gray-900 dark:text-gray-100">
          <span className="mr-2">&larr;</span>
          <span>Kembali</span>
        </button>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-md px-4 py-2 rounded-lg ${message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"}`}>
              <div className="flex justify-between items-center">
                <span className="font-medium">{message.role === "user" ? "Anda" : "Groq"}</span>
                <button onClick={() => handleDelete(message.id)} className="ml-2 text-red-500 hover:text-red-700">
                  &times;
                </button>
              </div>
              <p className="mt-1 text-sm" dangerouslySetInnerHTML={{ __html: md.render(message.content) }} />
            </div>
          </div>
        ))}

        {error && (
          <div className="text-red-500">
            <p>Terjadi kesalahan.</p>
            <button type="button" onClick={() => reload()} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
              Coba Lagi
            </button>
          </div>
        )}
      </div>

      {/* Form input yang tetap berada di bagian bawah layar */}
      <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex">
          <input
            value={input}
            onChange={handleInputChange}
            disabled={error != null}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Ketik pesan Anda..."
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}
