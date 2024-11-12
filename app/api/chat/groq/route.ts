import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await groq.chat.completions.create({
    model: "llama-3.2-90b-vision-preview",
    stream: true,
    max_tokens: 1024,
    temperature: 1,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
