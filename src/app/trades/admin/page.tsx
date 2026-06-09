"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TRADES_DEMO_CONFIG, SAMPLE_CLIENTS, SAMPLE_PROJECTS, type TradeClient, type TradeProject } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const CLIENTS_KEY = "trades_clients";
const PROJECTS_KEY = "trades_projects";

export default function TradesAdminDashboard() {
  const [clients, setClients] = useState<TradeClient[]>(SAMPLE_CLIENTS);
  const [projects, setProjects] = useState<TradeProject[]>(SAMPLE_PROJECTS);

  useEffect(() => {
    try {
      const c = localStorage.getItem(CLIENTS_KEY);
      if (c) setClients(JSON.parse(c));
      const p = localStorage.getItem(PROJECTS_KEY);
      if (p) setProjects(JSON.parse(p));
    } catch { /* empty */ }
  }, []);

  const activeProjects = projects.filter((p) => p.status === "in-progress");
  const scheduledProjects = projects.filter((p) => p.status === "scheduled");
  const totalPipelineValue = projects.filter((p) => !["completed", "cancelled"].includes(p.status)).reduce((sum, p) => sum + p.estimatedValue, 0);
  const completedThisMonth = projects.filter((p) => {
    if (p.status !== "completed" || !p.endDate) return false;
    const end = new Date(p.endDate);
    const now = new Date();
    return end.getMonth() === now.getMonth() && end.getFullYear() === now.getFullYear();
  });
  const leadsCount = clients.filter((c) => c.status === "lead").length;
  const followUpCount = clients.filter((c) => c.status === "follow-up").length;

  const stats = [
    { label: "Active Jobs", value: activeProjects.length, icon: "🔨", color: "bg-yellow-50 border-yellow-200 text-yellow-700", href: "/trades/admin/projects" },
    { label: "Scheduled", value: scheduledProjects.length, icon: "📅", color: "bg-blue-50 border-blue-200 text-blue-700", href: "/trades/admin/projects" },
    { label: "Pipeline Value", value: `$${totalPipelineValue.toLocaleString()}`, icon: "💰", color: "bg-green-50 border-green-200 text-green-700", href: "/trades/admin/reports" },
    { label: "Total Clients", value: clients.length, icon: "👥", color: "bg-purple-50 border-purple-200 text-purple-700", href: "/trades/admin/clients" },
    { label: "New Leads", value: leadsCount, icon: "🔍", color: "bg-orange-50 border-orange-200 text-orange-700", href: "/trades/admin/clients?status=lead" },
    { label: "Follow-Ups Due", value: followUpCount, icon: "⏰", color: followUpCount > 0 ? "bg-red-50 border-red-200 text-red-700" : "bg-gray-50 border-gray-200 text-gray-500", href: "/trades/admin/clients?status=follow-up" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Dashboard</h1>
        <p className="text-gray-500 text-sm">{config.company.name} · Admin Overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className={`border rounded-xl p-4 hover:shadow-sm transition-shadow ${s.color}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl">{s.icon}</span>
            </div>
            <p className="text-2xl font-black">{s.value}</p>
            <p className="text-xs font-semibold mt-0.5 opacity-80">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active projects */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-gray-900">Active Jobs</h2>
            <Link href="/trades/admin/projects" className="text-xs font-semibold hover:underline" style={{ color: config.brand.primary }}>View all →</Link>
          </div>
          {activeProjects.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-4">No active jobs</p>
          ) : (
            <div className="space-y-3">
              {activeProjects.slice(0, 4).map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.clientName} · {p.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-700">${p.estimatedValue.toLocaleString()}</p>
                    {p.crew && <p className="text-xs text-gray-400">{p.crew}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent updates */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-gray-900">Recent Project Updates</h2>
            <Link href="/trades/admin/projects" className="text-xs font-semibold hover:underline" style={{ color: config.brand.primary }}>Manage →</Link>
          </div>
          {(() => {
            const allUpdates = projects.flatMap((p) => p.updates.map((u) => ({ ...u, projectName: p.name, clientName: p.clientName })));
            const recent = allUpdates.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
            if (recent.length === 0) return <p className="text-gray-400 text-sm text-center py-4">No updates posted yet</p>;
            return (
              <div className="space-y-3">
                {recent.map((u) => (
                  <div key={u.id} className="text-sm">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-900">{u.title}</p>
                      <p className="text-xs text-gray-400">{new Date(u.date).toLocaleDateString()}</p>
                    </div>
                    <p className="text-gray-500 text-xs mt-0.5">{u.projectName} · {u.clientName}</p>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Completed this month */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Completed This Month</h2>
          {completedThisMonth.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-4">No completions yet this month</p>
          ) : (
            <div className="space-y-2">
              {completedThisMonth.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.clientName}</p>
                  </div>
                  <p className="font-bold text-green-700">${(p.actualValue ?? p.estimatedValue).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: "/trades/admin/projects", label: "➕ New Project", color: config.brand.primary },
              { href: "/trades/admin/clients", label: "👤 Add Client", color: config.brand.accent },
              { href: "/trades/admin/campaigns", label: "✉️ Send Campaign", color: "#059669" },
              { href: "/trades/admin/ai", label: "🤖 AI Assistant", color: "#7c3aed" },
              { href: "/trades/admin/reports", label: "📈 View Reports", color: "#0369a1" },
              { href: "/trades/admin/leads", label: "🔍 Find Leads", color: "#b45309" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="text-white text-xs font-bold px-3 py-2.5 rounded-lg text-center transition-opacity hover:opacity-90" style={{ backgroundColor: a.color }}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
