/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const fireworks = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_FIREWORKS_API_KEY || "",
  baseURL: "https://api.fireworks.ai/inference/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await fireworks.chat.completions.create({
    model: "accounts/fireworks/models/deepseek-r1",
    stream: true,
    temperature: 1,
    max_tokens: 65536,
    messages,
  });
  const stream = OpenAIStream(response as any);
  return new StreamingTextResponse(stream);
}