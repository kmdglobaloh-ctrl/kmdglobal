import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getAllListings, createListing, updateListing, deleteListing } from "@/lib/store";

async function requireAdmin() {
  const session = await getSession();
  if (session.user?.role !== "admin") return null;
  return session.user;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(getAllListings());
}

export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const data = await req.json();
  const listing = createListing({ ...data, approved: data.approved ?? false, featured: data.featured ?? false });
  return NextResponse.json(listing, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, ...data } = await req.json();
  const updated = updateListing(id, data);
  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  return NextResponse.json({ ok: deleteListing(id) });
}
