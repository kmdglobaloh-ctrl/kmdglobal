"use client";

import { useState, useEffect, useMemo } from "react";
import { TRADES_DEMO_CONFIG, SAMPLE_CLIENTS, SAMPLE_PROJECTS, type TradeClient, type TradeProject } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const CLIENTS_KEY = "trades_clients";
const PROJECTS_KEY = "trades_projects";

type DateRange = "30" | "90" | "365" | "all";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function StatCard({ label, value, sub, color }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-2xl font-black text-gray-900" style={color ? { color } : {}}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function BarRow({ label, value, max, color, suffix = "" }: { label: string; value: number; max: number; color: string; suffix?: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-28 shrink-0 truncate">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-sm font-bold text-gray-800 w-20 text-right shrink-0">
        {suffix === "$" ? `$${value.toLocaleString()}` : `${value}${suffix}`}
      </span>
    </div>
  );
}

export default function TradesReportsPage() {
  const [clients, setClients] = useState<TradeClient[]>(SAMPLE_CLIENTS);
  const [projects, setProjects] = useState<TradeProject[]>(SAMPLE_PROJECTS);
  const [range, setRange] = useState<DateRange>("365");

  useEffect(() => {
    try {
      const c = localStorage.getItem(CLIENTS_KEY);
      if (c) setClients(JSON.parse(c));
      const p = localStorage.getItem(PROJECTS_KEY);
      if (p) setProjects(JSON.parse(p));
    } catch { /* empty */ }
  }, []);

  const cutoff = useMemo(() => {
    if (range === "all") return null;
    const d = new Date();
    d.setDate(d.getDate() - parseInt(range));
    return d;
  }, [range]);

  const filteredProjects = useMemo(() =>
    cutoff ? projects.filter((p) => new Date(p.createdAt) >= cutoff) : projects,
    [projects, cutoff]
  );

  const filteredClients = useMemo(() =>
    cutoff ? clients.filter((c) => new Date(c.createdAt) >= cutoff) : clients,
    [clients, cutoff]
  );

  // Revenue metrics
  const completedProjects = filteredProjects.filter((p) => p.status === "completed");
  const totalRevenue = completedProjects.reduce((sum, p) => sum + (p.actualValue ?? p.estimatedValue), 0);
  const avgJobValue = completedProjects.length > 0 ? Math.round(totalRevenue / completedProjects.length) : 0;

  // Pipeline
  const pipelineStatuses = ["quoted", "scheduled", "in-progress", "on-hold"];
  const pipelineProjects = filteredProjects.filter((p) => pipelineStatuses.includes(p.status));
  const pipelineValue = pipelineProjects.reduce((sum, p) => sum + p.estimatedValue, 0);

  // Balance due (outstanding receivables)
  const outstandingBalance = filteredProjects
    .filter((p) => !["cancelled"].includes(p.status))
    .reduce((sum, p) => sum + p.balanceDue, 0);

  // Revenue by month (last 6 months)
  const revenueByMonth = useMemo(() => {
    const months: { label: string; revenue: number; count: number }[] = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const label = `${MONTH_NAMES[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`;
      const monthProjects = projects.filter((p) => {
        if (p.status !== "completed" || !p.endDate) return false;
        const end = new Date(p.endDate);
        return end.getMonth() === d.getMonth() && end.getFullYear() === d.getFullYear();
      });
      months.push({
        label,
        revenue: monthProjects.reduce((sum, p) => sum + (p.actualValue ?? p.estimatedValue), 0),
        count: monthProjects.length,
      });
    }
    return months;
  }, [projects]);

  const maxMonthRevenue = Math.max(...revenueByMonth.map((m) => m.revenue), 1);

  // Revenue by service
  const revenueByService = useMemo(() => {
    const map: Record<string, { revenue: number; count: number }> = {};
    completedProjects.forEach((p) => {
      if (!map[p.service]) map[p.service] = { revenue: 0, count: 0 };
      map[p.service].revenue += p.actualValue ?? p.estimatedValue;
      map[p.service].count += 1;
    });
    return Object.entries(map)
      .map(([service, data]) => ({ service, ...data }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 8);
  }, [completedProjects]);

  const maxServiceRevenue = Math.max(...revenueByService.map((s) => s.revenue), 1);

  // Lead source breakdown
  const leadSourceMap = useMemo(() => {
    const map: Record<string, number> = {};
    filteredClients.forEach((c) => {
      map[c.source] = (map[c.source] ?? 0) + 1;
    });
    return Object.entries(map)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);
  }, [filteredClients]);

  const maxLeads = Math.max(...leadSourceMap.map((s) => s.count), 1);

  // Status breakdown
  const statusCounts = useMemo(() => {
    const statuses = ["quoted", "scheduled", "in-progress", "on-hold", "completed", "cancelled"];
    return statuses.map((s) => ({
      status: s,
      count: filteredProjects.filter((p) => p.status === s).length,
    })).filter((s) => s.count > 0);
  }, [filteredProjects]);

  const maxStatus = Math.max(...statusCounts.map((s) => s.count), 1);

  // Satisfaction
  const ratedClients = filteredClients.filter((c) => c.satisfaction != null);
  const avgSatisfaction = ratedClients.length > 0
    ? (ratedClients.reduce((sum, c) => sum + (c.satisfaction ?? 0), 0) / ratedClients.length).toFixed(1)
    : "—";
  const satisfactionDist = useMemo(() => {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ratedClients.forEach((c) => { dist[c.satisfaction!] += 1; });
    return dist;
  }, [ratedClients]);

  // Win rate
  const closedProjects = filteredProjects.filter((p) => ["completed", "cancelled"].includes(p.status));
  const winRate = closedProjects.length > 0
    ? Math.round((completedProjects.length / closedProjects.length) * 100)
    : 0;

  // Conversion rate (clients → completed projects)
  const activeClientCount = filteredClients.filter((c) => c.status !== "lost").length;
  const conversionRate = activeClientCount > 0
    ? Math.round((completedProjects.length / activeClientCount) * 100)
    : 0;

  const STATUS_COLORS: Record<string, string> = {
    quoted: "#6b7280",
    scheduled: "#3b82f6",
    "in-progress": "#f59e0b",
    "on-hold": "#f97316",
    completed: "#10b981",
    cancelled: "#ef4444",
  };

  const SOURCE_LABELS: Record<string, string> = {
    referral: "Referral",
    google: "Google",
    facebook: "Facebook",
    nextdoor: "Nextdoor",
    website: "Website",
    repeat: "Repeat",
    other: "Other",
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Reports</h1>
          <p className="text-gray-500 text-sm">{config.company.name} · Business Intelligence</p>
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {(["30", "90", "365", "all"] as DateRange[]).map((r) => (
            <button key={r} onClick={() => setRange(r)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${range === r ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
              {r === "all" ? "All Time" : `${r}d`}
            </button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} sub={`${completedProjects.length} completed jobs`} color={config.brand.primary} />
        <StatCard label="Pipeline Value" value={`$${pipelineValue.toLocaleString()}`} sub={`${pipelineProjects.length} open jobs`} color="#0369a1" />
        <StatCard label="Avg. Job Value" value={avgJobValue > 0 ? `$${avgJobValue.toLocaleString()}` : "—"} sub="completed projects" />
        <StatCard label="Outstanding Balance" value={`$${outstandingBalance.toLocaleString()}`} sub="across all active jobs" color={outstandingBalance > 0 ? "#d97706" : "#10b981"} />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Clients" value={filteredClients.length} sub={`${filteredClients.filter((c) => c.status === "lead").length} leads`} />
        <StatCard label="Win Rate" value={`${winRate}%`} sub="quoted → completed" color={winRate >= 70 ? "#10b981" : winRate >= 50 ? "#f59e0b" : "#ef4444"} />
        <StatCard label="Conversion Rate" value={`${conversionRate}%`} sub="clients → completed" />
        <StatCard label="Avg. Satisfaction" value={avgSatisfaction} sub={`${ratedClients.length} rated clients`} color={parseFloat(avgSatisfaction as string) >= 4.5 ? "#10b981" : "#f59e0b"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by month */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Revenue — Last 6 Months</h2>
          {revenueByMonth.every((m) => m.revenue === 0) ? (
            <p className="text-gray-400 text-sm text-center py-6">No completed jobs in this period</p>
          ) : (
            <div className="space-y-3">
              {revenueByMonth.map((m) => (
                <div key={m.label}>
                  <BarRow label={m.label} value={m.revenue} max={maxMonthRevenue} color={config.brand.primary} suffix="$" />
                  {m.count > 0 && <p className="text-xs text-gray-400 ml-[7.5rem] mt-0.5">{m.count} job{m.count !== 1 ? "s" : ""}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Revenue by service */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Revenue by Service</h2>
          {revenueByService.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-6">No completed jobs yet</p>
          ) : (
            <div className="space-y-3">
              {revenueByService.map((s) => (
                <div key={s.service}>
                  <BarRow label={s.service} value={s.revenue} max={maxServiceRevenue} color={config.brand.secondary} suffix="$" />
                  <p className="text-xs text-gray-400 ml-[7.5rem] mt-0.5">{s.count} job{s.count !== 1 ? "s" : ""}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lead sources */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Lead Sources</h2>
          {leadSourceMap.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-6">No client data yet</p>
          ) : (
            <div className="space-y-3">
              {leadSourceMap.map((s) => (
                <BarRow key={s.source} label={SOURCE_LABELS[s.source] ?? s.source} value={s.count} max={maxLeads} color="#8b5cf6" suffix=" clients" />
              ))}
            </div>
          )}
        </div>

        {/* Job status breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Jobs by Status</h2>
          {statusCounts.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-6">No projects yet</p>
          ) : (
            <div className="space-y-3">
              {statusCounts.map((s) => (
                <BarRow key={s.status} label={s.status.replace("-", " ")} value={s.count} max={maxStatus} color={STATUS_COLORS[s.status] ?? "#6b7280"} suffix=" jobs" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Satisfaction distribution */}
      {ratedClients.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Customer Satisfaction Breakdown</h2>
          <div className="grid grid-cols-5 gap-3">
            {([5, 4, 3, 2, 1] as const).map((rating) => {
              const count = satisfactionDist[rating] ?? 0;
              const pct = ratedClients.length > 0 ? Math.round((count / ratedClients.length) * 100) : 0;
              const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
              return (
                <div key={rating} className="text-center">
                  <div className="relative h-24 bg-gray-100 rounded-lg overflow-hidden mb-2 flex items-end">
                    <div className="w-full rounded-b-lg transition-all duration-500"
                      style={{ height: `${pct}%`, backgroundColor: rating >= 4 ? "#10b981" : rating === 3 ? "#f59e0b" : "#ef4444", minHeight: count > 0 ? "8px" : "0" }} />
                  </div>
                  <p className="text-xs font-black text-gray-700">{pct}%</p>
                  <p className="text-xs text-yellow-500 font-bold">{stars}</p>
                  <p className="text-xs text-gray-400">{count} review{count !== 1 ? "s" : ""}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent completed jobs table */}
      {completedProjects.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">Completed Jobs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Project</th>
                  <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Client</th>
                  <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Service</th>
                  <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Value</th>
                  <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Completed</th>
                </tr>
              </thead>
              <tbody>
                {completedProjects
                  .sort((a, b) => (b.endDate ?? "").localeCompare(a.endDate ?? ""))
                  .slice(0, 10)
                  .map((p) => (
                    <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2.5 font-semibold text-gray-900">{p.name}</td>
                      <td className="py-2.5 text-gray-600">{p.clientName}</td>
                      <td className="py-2.5 text-gray-500">{p.service}</td>
                      <td className="py-2.5 text-right font-bold text-green-700">${(p.actualValue ?? p.estimatedValue).toLocaleString()}</td>
                      <td className="py-2.5 text-right text-gray-400">{p.endDate ? new Date(p.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}</td>
                    </tr>
                  ))}
              </tbody>
              {completedProjects.length > 10 && (
                <tfoot>
                  <tr>
                    <td colSpan={5} className="pt-3 text-xs text-gray-400 text-center">Showing 10 of {completedProjects.length} completed jobs</td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
