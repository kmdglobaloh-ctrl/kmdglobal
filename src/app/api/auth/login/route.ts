import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/store";
import { sessionOptions, type SessionData } from "@/lib/session";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const user = getUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  const c = await cookies();
  const session = await getIronSession<SessionData>(c, sessionOptions);
  session.user = { id: user.id, name: user.name, email: user.email, role: user.role };
  await session.save();

  return NextResponse.json({ ok: true, role: user.role });
}
