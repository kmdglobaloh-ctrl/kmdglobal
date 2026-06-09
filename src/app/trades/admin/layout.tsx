"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getSession, clearSession } from "@/lib/trades/admin-auth";
import type { Session } from "@/lib/trades/admin-auth";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

function buildNav(features: typeof config.features) {
  const items = [
    { href: "/trades/admin", label: "Dashboard", icon: "📊", exact: true },
    { href: "/trades/admin/clients", label: "Clients", icon: "👥", show: features.adminCRM },
    { href: "/trades/admin/projects", label: "Projects", icon: "🔨", show: features.adminProjectTracking },
    { href: "/trades/admin/notifications", label: "Notifications", icon: "🔔", show: features.adminNotifications },
    { href: "/trades/admin/campaigns", label: "Campaigns", icon: "✉️", show: features.adminCampaigns },
    { href: "/trades/admin/reports", label: "Reports", icon: "📈", show: features.adminReports },
    { href: "/trades/admin/leads", label: "Lead Monitor", icon: "🔍", show: features.adminLeads },
    { href: "/trades/admin/ai", label: "AI Assistant", icon: "🤖", show: features.adminAI },
    { href: "/trades/admin/settings", label: "Settings", icon: "⚙️", show: features.adminSettings },
  ];
  return items.filter((i) => i.show !== false);
}

export default function TradesAdminLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const s = getSession();
    if (!s && !pathname.includes("/login")) {
      router.replace("/trades/admin/login");
    } else {
      setSession(s);
    }
    setChecked(true);
  }, [pathname, router]);

  if (pathname.includes("/login")) return <>{children}</>;

  if (!checked || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: config.brand.primary }}>
        <p className="text-white text-sm">Checking access...</p>
      </div>
    );
  }

  const navItems = buildNav(config.features);

  function handleSignOut() {
    clearSession();
    router.replace("/trades/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 text-white flex flex-col shrink-0 hidden md:flex" style={{ backgroundColor: config.brand.primary }}>
        <div className="p-5 border-b border-white/10">
          <p className="font-black text-sm uppercase tracking-wide">{config.company.name}</p>
          <p className="text-xs uppercase tracking-widest opacity-60 mt-0.5">Admin Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}>
                <span>{item.icon}</span>{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 pb-3">
          <Link href="/trades/admin/proposal"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full ${pathname.startsWith("/trades/admin/proposal") ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}>
            <span>📄</span>Our Proposal
          </Link>
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{session.displayName}</p>
              <p className="text-xs opacity-50 capitalize">{session.role}</p>
            </div>
            <button onClick={handleSignOut} className="text-xs opacity-50 hover:opacity-100 transition-opacity">Sign out</button>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="md:hidden text-white px-4 py-3 flex items-center justify-between" style={{ backgroundColor: config.brand.primary }}>
          <p className="font-black text-sm uppercase">{config.company.name} Admin</p>
          <button onClick={handleSignOut} className="text-xs opacity-60">Sign out</button>
        </div>
        <div className="md:hidden overflow-x-auto" style={{ backgroundColor: config.brand.accent }}>
          <div className="flex gap-1 px-3 py-2">
            {navItems.map((item) => {
              const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap transition-colors ${isActive ? "bg-white text-gray-900" : "text-white/70 hover:bg-white/20"}`}>
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
