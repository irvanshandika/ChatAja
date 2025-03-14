import { streamText, UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const runtime = 'edge';

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-pro-exp"),
    messages,
    temperature: 1,
    maxTokens: 8192,
    topP: 0.95
  });

  return result.toDataStreamResponse();
}
