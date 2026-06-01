import { NextRequest, NextResponse } from "next/server";

interface AdminUserRecord {
  username: string;
  password: string;
  displayName: string;
  role: "super" | "admin" | "viewer";
}

// Production: set ALFIERI_ADMIN_USERS env var as JSON array
// Dev fallback defined below — change passwords before sharing
function getUsers(): AdminUserRecord[] {
  if (process.env.ALFIERI_ADMIN_USERS) {
    try {
      return JSON.parse(process.env.ALFIERI_ADMIN_USERS);
    } catch {
      console.error("ALFIERI_ADMIN_USERS is not valid JSON");
    }
  }
  // Default dev accounts — override via env var in production
  return [
    { username: "kevin", password: process.env.ALFIERI_ADMIN_PASS_KEVIN || "Alf!eri2024#K", displayName: "Kevin", role: "super" },
    { username: "admin", password: process.env.ALFIERI_ADMIN_PASS_ADMIN || "Alf!eri2024#A", displayName: "Admin", role: "admin" },
    { username: "partner", password: process.env.ALFIERI_ADMIN_PASS_PARTNER || "Alf!eri2024#P", displayName: "Partner", role: "viewer" },
  ];
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  const users = getUsers();
  const user = users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({
    username: user.username,
    displayName: user.displayName,
    role: user.role,
  });
}
