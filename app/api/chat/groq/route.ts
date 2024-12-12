import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await groq.chat.completions.create({
    model: "llama3-groq-70b-8192-tool-use-preview",
    stream: true,
    max_tokens: 8192,
    temperature: 1,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
