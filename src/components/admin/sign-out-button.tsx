"use client";

import { LogOut } from "lucide-react";

export function SignOutButton() {
  async function handleSignOut() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors w-full text-left"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
