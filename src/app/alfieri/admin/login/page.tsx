"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SESSION_KEY, SESSION_DURATION_MS, getSession } from "@/lib/alfieri/admin-auth";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (getSession()) router.replace("/alfieri/admin");
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/alfieri/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError("Invalid username or password.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({
        username: data.username,
        displayName: data.displayName,
        role: data.role,
        expiresAt: Date.now() + SESSION_DURATION_MS,
      }));
      router.replace("/alfieri/admin");
    } catch {
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1444] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-white font-black text-2xl uppercase tracking-wide">Alfieri Brothers</p>
          <p className="text-[#cc2222] text-xs font-semibold uppercase tracking-widest mt-0.5">Admin Portal</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-xl font-black text-[#0d1444] mb-6">Sign In</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a237e] hover:bg-blue-900 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-blue-400 text-xs mt-6">
          Alfieri Brothers Admin — Authorized Access Only
        </p>
      </div>
    </div>
  );
}
