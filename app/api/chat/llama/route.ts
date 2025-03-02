import { streamText } from "ai";
import { createFireworks } from "@ai-sdk/fireworks";

const llama = createFireworks({
  apiKey: process.env.NEXT_PUBLIC_FIREWORKS_API_KEY,
  baseURL: "https://api.fireworks.ai/inference/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: llama("accounts/fireworks/models/llama-v3p2-90b-vision-instruct"),
    messages,
    temperature: 1,
    maxTokens: 8192,
    topP: 0.95
  });

  return result.toDataStreamResponse();
}
