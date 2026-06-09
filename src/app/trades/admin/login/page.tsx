"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession } from "@/lib/trades/admin-auth";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

const ACCOUNTS = [
  { username: "kevin", password: process.env.NEXT_PUBLIC_TRADES_PASS_KEVIN ?? "Trades2024#K", displayName: "Kevin", role: "super" as const },
  { username: "admin", password: process.env.NEXT_PUBLIC_TRADES_PASS_ADMIN ?? "Trades2024#A", displayName: "Admin", role: "admin" as const },
  { username: "partner", password: process.env.NEXT_PUBLIC_TRADES_PASS_PARTNER ?? "Trades2024#P", displayName: "Partner", role: "viewer" as const },
];

export default function TradesAdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const account = ACCOUNTS.find((a) => a.username === username.toLowerCase() && a.password === password);
    if (account) {
      saveSession({ username: account.username, displayName: account.displayName, role: account.role });
      router.replace("/trades/admin");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: config.brand.primary }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-white font-black text-2xl uppercase tracking-wide">{config.company.name}</p>
          <p className="text-xs font-semibold uppercase tracking-widest mt-1 opacity-60 text-white">Admin Portal</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <p className="font-bold text-gray-900 mb-5">Sign In</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} autoFocus required
                className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors ${error ? "border-red-400" : "border-gray-300 focus:border-current"}`}
                style={{ "--tw-ring-color": config.brand.primary } as React.CSSProperties} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors ${error ? "border-red-400" : "border-gray-300"}`} />
            </div>
            {error && <p className="text-red-600 text-sm">Invalid credentials.</p>}
            <button type="submit" disabled={loading} className="w-full text-white font-bold py-3 rounded-lg transition-colors" style={{ backgroundColor: config.brand.primary }}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
