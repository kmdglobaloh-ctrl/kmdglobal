"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSession } from "@/lib/alfieri/admin-auth";
import { PHONE, EMAIL } from "@/lib/alfieri/data";

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  status: "lead" | "active" | "completed" | "follow-up";
  lastContact: string;
  birthday?: string;
  notes?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [session, setSession] = useState<{ displayName: string; role: string } | null>(null);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setSession(getSession());
    try {
      const stored = localStorage.getItem("alfieri_clients");
      if (stored) setClients(JSON.parse(stored));
    } catch { /* empty */ }
  }, []);

  const leads = clients.filter((c) => c.status === "lead").length;
  const active = clients.filter((c) => c.status === "active").length;
  const completed = clients.filter((c) => c.status === "completed").length;
  const followUp = clients.filter((c) => c.status === "follow-up").length;

  const today = new Date();
  const upcomingBirthdays = clients.filter((c) => {
    if (!c.birthday) return false;
    const [, m, d] = c.birthday.split("-");
    const bday = new Date(today.getFullYear(), parseInt(m) - 1, parseInt(d));
    const diff = (bday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 30;
  });

  const quickStats = [
    { label: "Total Clients", value: clients.length, icon: "👥", href: "/alfieri/admin/clients", color: "bg-blue-50 border-blue-200" },
    { label: "Active Jobs", value: active, icon: "🔧", href: "/alfieri/admin/clients?status=active", color: "bg-green-50 border-green-200" },
    { label: "Leads", value: leads, icon: "📋", href: "/alfieri/admin/clients?status=lead", color: "bg-yellow-50 border-yellow-200" },
    { label: "Follow-ups Due", value: followUp, icon: "⏰", href: "/alfieri/admin/clients?status=follow-up", color: "bg-orange-50 border-orange-200" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#0d1444]">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back, {session?.displayName}</p>
        </div>
        <div className="flex gap-3">
          <Link href="/alfieri/admin/clients?new=1" className="bg-[#cc2222] hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
            + Add Client
          </Link>
          <Link href="/alfieri" target="_blank" className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
            View Site ↗
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((s) => (
          <Link key={s.label} href={s.href} className={`border rounded-xl p-5 hover:shadow-sm transition-shadow ${s.color}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-3xl font-black text-[#0d1444]">{s.value}</span>
            </div>
            <p className="text-sm font-semibold text-gray-700">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-[#0d1444] mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { href: "/alfieri/admin/campaigns", icon: "✉️", label: "Create Email Campaign", sub: "Check-in, birthday, holiday" },
              { href: "/alfieri/admin/leads", icon: "🔍", label: "Check Lead Monitor", sub: "Search social media for prospects" },
              { href: "/alfieri/admin/ai", icon: "🤖", label: "AI Assistant", sub: "Generate emails, quotes, content" },
              { href: "/alfieri/admin/clients", icon: "👥", label: "Manage Clients", sub: `${clients.length} total clients` },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <span className="text-2xl">{action.icon}</span>
                <div>
                  <p className="font-semibold text-[#0d1444] text-sm">{action.label}</p>
                  <p className="text-gray-500 text-xs">{action.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming birthdays */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-[#0d1444] mb-4">
            🎂 Upcoming Birthdays
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Next 30 days</span>
          </h2>
          {upcomingBirthdays.length === 0 ? (
            <p className="text-gray-500 text-sm">No upcoming birthdays this month.</p>
          ) : (
            <div className="space-y-2">
              {upcomingBirthdays.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[#0d1444] text-sm">{c.name}</p>
                    <p className="text-gray-500 text-xs">{c.birthday}</p>
                  </div>
                  <Link href={`/alfieri/admin/campaigns?type=birthday&client=${c.id}`} className="text-xs bg-[#1a237e] text-white px-2.5 py-1 rounded-full font-semibold hover:bg-blue-900 transition-colors">
                    Send Wish
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact info reminder */}
      <div className="bg-[#f0f4ff] rounded-xl p-5 border border-blue-100">
        <p className="text-sm font-semibold text-[#0d1444] mb-2">Business Contact Info</p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <span>📞 <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-[#1a237e] hover:underline">{PHONE}</a></span>
          <span>✉️ <a href={`mailto:${EMAIL}`} className="text-[#1a237e] hover:underline">{EMAIL}</a></span>
          <Link href="/alfieri/admin/ai" className="text-[#cc2222] font-semibold hover:underline">Try AI Assistant →</Link>
        </div>
      </div>
    </div>
  );
}
