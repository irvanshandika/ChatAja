import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
const fireworks = new OpenAI({
  apiKey: process.env.FIREWORKS_API_KEY || "",
  baseURL: "https://api.fireworks.ai/inference/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await fireworks.chat.completions.create({
    model: "accounts/fireworks/models/llama-v3p2-11b-vision-instruct",
    stream: true,
    max_tokens: 999999,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
