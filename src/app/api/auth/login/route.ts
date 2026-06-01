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

  // Check env-var admin credentials at runtime (avoids module-init cache issues)
  const envEmail = process.env.ADMIN_EMAIL;
  const envPassword = process.env.ADMIN_PASSWORD;
  if (envEmail && envPassword && email.toLowerCase() === envEmail.toLowerCase() && password === envPassword) {
    const c = await cookies();
    const session = await getIronSession<SessionData>(c, sessionOptions);
    session.user = { id: "admin-1", name: "Admin", email: envEmail, role: "admin" };
    await session.save();
    return NextResponse.json({ ok: true, role: "admin" });
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
