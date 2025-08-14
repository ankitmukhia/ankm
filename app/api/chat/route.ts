import { google } from "@ai-sdk/google";
import { SystemPrompt } from "@/lib/system-prompt";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-flash-001"),
    system: SystemPrompt(),
    messages,
  });

  return result.toDataStreamResponse();
}
