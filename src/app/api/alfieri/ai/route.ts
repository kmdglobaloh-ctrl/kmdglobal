import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY is not configured." }, { status: 503 });
  }

  const { prompt, system, task } = await req.json();

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: system || "You are a helpful assistant for Alfieri Brothers Contracting and Excavation in Cleveland, OH.",
      messages: [{ role: "user", content: prompt }],
    });

    const content = message.content[0].type === "text" ? message.content[0].text : "";
    console.log(`[Alfieri AI] task=${task} tokens=${message.usage.output_tokens}`);

    return NextResponse.json({ content });
  } catch (err) {
    console.error("[Alfieri AI Error]", err);
    return NextResponse.json({ error: "AI generation failed. Check your API key and try again." }, { status: 500 });
  }
}
