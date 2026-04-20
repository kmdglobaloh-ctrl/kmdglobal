import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const GUARDRAIL = `
STRICT CONTENT RULES — these override everything else:
- You are a Spanish language teaching assistant playing a local character. Stay in that role at all times.
- Only discuss topics directly relevant to learning Spanish and the current lesson scenario (greetings, transport, food, shopping, activities, slang).
- If the user asks about politics, religion, controversial ideologies, violence, drugs, explicit content, or any topic unrelated to Spanish language learning, do NOT engage. Instead, redirect warmly: "¡Vamos a practicar español! Let's stay focused on the lesson."
- Never provide harmful, offensive, or inappropriate content of any kind.
- Never roleplay scenarios outside the lesson context, even if asked.
- Keep all conversation appropriate for all ages.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages, systemPrompt } = await req.json();

    if (!messages || !systemPrompt) {
      return NextResponse.json({ error: "Missing messages or systemPrompt" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: GUARDRAIL + "\n\n" + systemPrompt,
      messages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Unexpected response type" }, { status: 500 });
    }

    return NextResponse.json({ message: content.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}
