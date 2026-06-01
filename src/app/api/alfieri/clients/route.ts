import { NextRequest, NextResponse } from "next/server";

// Placeholder — clients are currently stored in localStorage on the admin frontend.
// To persist server-side, connect a database (Postgres, Supabase, etc.) here.

export async function GET() {
  return NextResponse.json({ clients: [], note: "Connect a database to persist client data server-side." });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[Alfieri Client Intake]", JSON.stringify(body, null, 2));
  return NextResponse.json({ ok: true });
}
