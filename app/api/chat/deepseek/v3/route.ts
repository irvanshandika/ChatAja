import { streamText } from "ai";
import { createFireworks } from "@ai-sdk/fireworks";

const deepseek = createFireworks({
  apiKey: process.env.NEXT_PUBLIC_FIREWORKS_API_KEY,
  baseURL: "https://api.fireworks.ai/inference/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: deepseek("accounts/fireworks/models/deepseek-v3"),
    messages,
  });

  return result.toDataStreamResponse();
}