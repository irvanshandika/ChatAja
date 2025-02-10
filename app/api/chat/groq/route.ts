/* eslint-disable @typescript-eslint/no-explicit-any */
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY || "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    stream: true,
    max_tokens: 65536,
    temperature: 1,
    messages,
  });
  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}