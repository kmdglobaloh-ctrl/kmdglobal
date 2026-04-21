import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSession } from "@/lib/session";
import { getAllUsers, createUser, deleteUser, getUserByEmail } from "@/lib/store";

async function requireAdmin() {
  const session = await getSession();
  if (session.user?.role !== "admin") return null;
  return session.user;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const users = getAllUsers().map(({ passwordHash: _, ...u }) => u);
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name, email, password, role } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "name, email, and password are required" }, { status: 400 });
  }
  if (getUserByEmail(email)) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ name, email, passwordHash, role: role === "admin" ? "admin" : "user" });
  const { passwordHash: _, ...safe } = user;
  return NextResponse.json(safe, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  if (id === admin.id) return NextResponse.json({ error: "Cannot delete yourself" }, { status: 400 });
  const ok = deleteUser(id);
  return NextResponse.json({ ok });
}
