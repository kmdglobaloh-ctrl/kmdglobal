"use client";

import { useState, useEffect } from "react";

const PREVIEW_KEY = "alfieri_preview_access";
// Override via NEXT_PUBLIC_ALFIERI_PREVIEW_PASS env var; default for dev
const PREVIEW_PASS = process.env.NEXT_PUBLIC_ALFIERI_PREVIEW_PASS || "alfieri2026";

export function PreviewGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Admin section has its own auth — skip the preview gate there
    if (window.location.pathname.startsWith("/alfieri/admin")) {
      setUnlocked(true);
      return;
    }
    const stored = sessionStorage.getItem(PREVIEW_KEY);
    setUnlocked(stored === "1");
  }, []);

  function attempt(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input === PREVIEW_PASS) {
      sessionStorage.setItem(PREVIEW_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 2000);
    }
  }

  if (unlocked === null) return null; // hydrating

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#0d1444] flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mb-8">
          <p className="text-white font-black text-3xl uppercase tracking-wide">Alfieri Brothers</p>
          <p className="text-[#cc2222] text-xs font-semibold uppercase tracking-widest mt-1">Contracting & Excavation</p>
          <p className="text-blue-300 text-sm mt-4">This site is currently in private preview.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <p className="text-[#0d1444] font-bold mb-5">Enter Preview Password</p>
          <form onSubmit={attempt} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              placeholder="Password"
              className={`w-full border-2 rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors ${error ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-[#1a237e]"}`}
            />
            {error && <p className="text-red-600 text-sm">Incorrect password. Please try again.</p>}
            <button
              type="submit"
              className="w-full bg-[#1a237e] hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Enter Site
            </button>
          </form>
        </div>

        <p className="text-blue-500 text-xs mt-6">
          Contact us to request access · kmdglobal.com
        </p>
      </div>
    </div>
  );
}
