import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { getUserByEmail, createUser } from "@/lib/store";
import { sessionOptions, type SessionData } from "@/lib/session";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
  }
  if (getUserByEmail(email)) {
    return NextResponse.json({ error: "An account with that email already exists" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ name, email, passwordHash, role: "user" });

  const c = await cookies();
  const session = await getIronSession<SessionData>(c, sessionOptions);
  session.user = { id: user.id, name: user.name, email: user.email, role: user.role };
  await session.save();

  return NextResponse.json({ ok: true });
}
