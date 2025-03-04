"use client";
import type React from "react";
import { useChat } from "@ai-sdk/react";
import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import { Button } from "@/src/components/ui/button";
import { Textarea } from "@/src/components/ui/textarea";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Paperclip, Send, X, ChevronDown, Info } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/src/components/ui/dropdown-menu";

export default function Chat() {
  const [selectedModel, setSelectedModel] = useState("Gemini 2.0 Pro");
  const [modelApi, setModelApi] = useState("/api/chat/gemini/2.0-pro");

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: modelApi,
  });

  const handleModelChange = (model: string) => {
    setSelectedModel(model);

    if (model === "Gemini 2.0 Pro") {
      setModelApi("/api/chat/gemini/2.0-pro");
    } else if (model === "Gemini 2.0 Flash") {
      setModelApi("/api/chat/gemini/2.0-flash");
    } else if (model === "Deepseek V3") {
      setModelApi("/api/chat/deepseek/v3");
    } else if (model === "Deepseek R1") {
      setModelApi("/api/chat/deepseek/r1");
    } else if (model === "Llama") {
      setModelApi("/api/chat/llama");
    }
  };

  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const md = new MarkdownIt("commonmark", { breaks: true });

  const renderContent = (content: string) => {
    // Hapus lebih dari 2 enter dan spasi berlebihan
    const cleanedContent = content.replace(/\n{3,}/g, "\n\n").trim();
    const rendered = md.render(cleanedContent);

    return rendered.replace(/<think>([\s\S]*?)<\/think>/g, (_match, inner) => {
      return `<div style="background-color: #333; color: #fff; padding: 8px; border-radius: 4px; margin: 0.5rem 0;">
                ${inner.trim()}
              </div>`;
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
    }
  };

  const removeFile = () => {
    setFiles(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex justify-start items-start">
        <div className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-between pl-4 pr-2 h-auto py-3">
                <span className="font-semibold">{selectedModel}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px]" align="start">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="font-semibold">Model</div>
                <Info className="h-4 w-4 opacity-50" />
              </div>

              {/* Pilihan Gemini 2.0 Pro */}
              <DropdownMenuItem onSelect={() => handleModelChange("Gemini 2.0 Pro")} className="flex justify-start items-start cursor-pointer py-3 px-3">
                <Image src="https://api.iconify.design/devicon:google.svg" alt="Gemini 2.0 Pro" className="h-5 w-5 rounded-full" width={0} height={0} />
                <span className="flex items-center gap-2">Gemini 2.0 Pro</span>
              </DropdownMenuItem>

              {/* Pilihan Gemini 2.0 Flash */}
              <DropdownMenuItem onSelect={() => handleModelChange("Gemini 2.0 Flash")} className="flex justify-start items-start cursor-pointer py-3 px-3">
                <Image src="https://api.iconify.design/devicon:google.svg" alt="Gemini 2.0 Flash" className="h-5 w-5 rounded-full" width={0} height={0} />
                <div className="flex items-center gap-2">Gemini 2.0 Flash</div>
              </DropdownMenuItem>

              {/* Pilihan Deepseek V3 */}
              <DropdownMenuItem onSelect={() => handleModelChange("Deepseek V3")} className="flex justify-start items-start cursor-pointer py-3 px-3">
                <Image src="https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a324f1d713df2cbfbf4_deepseek-logo.webp" alt="Deepseek V3" className="h-5 w-5 rounded-full" width={0} height={0} />
                <div className="flex items-center gap-2">Deepseek V3</div>
              </DropdownMenuItem>

              {/* Pilihan Deepseek R1 */}
              <DropdownMenuItem onSelect={() => handleModelChange("Deepseek R1")} className="flex justify-start items-start cursor-pointer py-3 px-3">
                <Image src="https://cdn.prod.website-files.com/650c3b59079d92475f37b68f/66f41a324f1d713df2cbfbf4_deepseek-logo.webp" alt="Deepseek R1" className="h-5 w-5 rounded-full" width={0} height={0} />
                <div className="flex items-center gap-2">Deepseek R1</div>
              </DropdownMenuItem>

              {/* Pilihan Llama */}
              <DropdownMenuItem onSelect={() => handleModelChange("Llama")} className="flex justify-start items-start cursor-pointer py-3 px-3">
                <Image src="https://api.iconify.design/logos:meta-icon.svg" alt="Llama" className="h-5 w-5 rounded-full" width={0} height={0} />
                <div className="flex items-center gap-2">Llama</div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="py-3">More models</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Area Chat */}
      <ScrollArea className="flex-grow px-4 py-2">
        {messages.map((m) => (
          <div key={m.id} className={`mb-2 flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
            <div className={`font-semibold text-sm ${m.role === "user" ? "text-right" : "text-left"}`}>{m.role === "user" ? "You" : "ChatAja AI"}</div>
            <div
              className={`p-3 rounded-lg max-w-[80%] leading-relaxed whitespace-pre-wrap break-words
                ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}
              dangerouslySetInnerHTML={{ __html: renderContent(m.content) }}
            />
            {m?.experimental_attachments
              ?.filter((attachment) => attachment?.contentType?.startsWith("image/") || attachment?.contentType?.startsWith("application/pdf"))
              .map((attachment, index) =>
                attachment.contentType?.startsWith("image/") ? (
                  <Image key={`${m.id}-${index}`} src={attachment.url || "/placeholder.svg"} width={200} height={200} alt={attachment.name ?? `attachment-${index}`} className="mt-2 rounded-md" />
                ) : attachment.contentType?.startsWith("application/pdf") ? (
                  <iframe key={`${m.id}-${index}`} src={attachment.url} width="200" height="200" title={attachment.name ?? `attachment-${index}`} className="mt-2 rounded-md" />
                ) : null
              )}
          </div>
        ))}
      </ScrollArea>

      {/* Bagian Input */}
      <div className="p-4">
        {files && (
          <div className="flex items-center mb-2 space-x-2">
            <div className="flex-1 truncate">
              {Array.from(files)
                .map((file) => file.name)
                .join(", ")}
            </div>
            <Button variant="ghost" size="icon" onClick={removeFile}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <form
          ref={formRef}
          className="flex items-end w-full space-x-2"
          onSubmit={(event) => {
            handleSubmit(event, {
              experimental_attachments: files || undefined,
            });
            setFiles(null);
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}>
          <Textarea value={input} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Type your message..." className="flex-grow min-h-[2.5rem] max-h-[10rem] resize-none" rows={1} />
          <input type="file" onChange={handleFileChange} multiple ref={fileInputRef} className="hidden" id="file-upload" />
          <Button type="button" variant="outline" size="icon" onClick={() => fileInputRef.current?.click()}>
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
