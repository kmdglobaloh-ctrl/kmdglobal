import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getAllNotes, createNote, deleteNote } from "@/lib/store";

async function requireAdmin() {
  const session = await getSession();
  if (session.user?.role !== "admin") return null;
  return session.user;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(getAllNotes());
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { subject, content } = await req.json();
  if (!content?.trim()) return NextResponse.json({ error: "Content required" }, { status: 400 });
  const note = createNote({ subject: subject?.trim() || "General", content: content.trim(), createdBy: admin.email });
  return NextResponse.json(note, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  return NextResponse.json({ ok: deleteNote(id) });
}
