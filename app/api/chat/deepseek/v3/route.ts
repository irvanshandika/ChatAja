import { streamText, UIMessage } from "ai";
import { createFireworks } from "@ai-sdk/fireworks";

export const runtime = 'edge';

const deepseek = createFireworks({
  apiKey: process.env.NEXT_PUBLIC_FIREWORKS_API_KEY,
  baseURL: "https://api.fireworks.ai/inference/v1",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: deepseek("accounts/fireworks/models/deepseek-v3"),
    messages,
    temperature: 1,
    maxTokens: 8192,
    topP: 0.95
  });

  return result.toDataStreamResponse();
}