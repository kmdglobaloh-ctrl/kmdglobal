"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getSession, clearSession } from "@/lib/alfieri/admin-auth";
import type { Session } from "@/lib/alfieri/admin-auth";

const NAV_ITEMS = [
  { href: "/alfieri/admin", label: "Dashboard", icon: "📊", exact: true },
  { href: "/alfieri/admin/clients", label: "Clients", icon: "👥" },
  { href: "/alfieri/admin/notifications", label: "Notifications", icon: "🔔" },
  { href: "/alfieri/admin/campaigns", label: "Campaigns", icon: "✉️" },
  { href: "/alfieri/admin/leads", label: "Lead Monitor", icon: "🔍" },
  { href: "/alfieri/admin/ai", label: "AI Assistant", icon: "🤖" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const s = getSession();
    if (!s && !pathname.includes("/login")) {
      router.replace("/alfieri/admin/login");
    } else {
      setSession(s);
    }
    setChecked(true);
  }, [pathname, router]);

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  if (!checked || !session) {
    return (
      <div className="min-h-screen bg-[#0d1444] flex items-center justify-center">
        <div className="text-white text-sm">Checking access...</div>
      </div>
    );
  }

  function handleSignOut() {
    clearSession();
    router.replace("/alfieri/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0d1444] text-white flex flex-col shrink-0 hidden md:flex">
        <div className="p-5 border-b border-blue-900">
          <p className="font-black text-sm uppercase tracking-wide">Alfieri Brothers</p>
          <p className="text-[#cc2222] text-xs uppercase tracking-widest">Admin Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-[#1a237e] text-white" : "text-blue-300 hover:bg-blue-900 hover:text-white"
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-blue-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{session.displayName}</p>
              <p className="text-xs text-blue-400 capitalize">{session.role}</p>
            </div>
            <button onClick={handleSignOut} className="text-xs text-blue-400 hover:text-white transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="md:hidden bg-[#0d1444] text-white px-4 py-3 flex items-center justify-between">
          <p className="font-black text-sm uppercase">Alfieri Admin</p>
          <button onClick={handleSignOut} className="text-xs text-blue-400">Sign out</button>
        </div>
        {/* Mobile nav */}
        <div className="md:hidden bg-[#1a237e] overflow-x-auto">
          <div className="flex gap-1 px-3 py-2">
            {NAV_ITEMS.map((item) => {
              const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive ? "bg-white text-[#1a237e]" : "text-blue-200 hover:bg-blue-700"
                  }`}
                >
                  {item.icon} {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
