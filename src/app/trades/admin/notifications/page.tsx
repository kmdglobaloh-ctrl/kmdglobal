"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TRADES_DEMO_CONFIG, type TradeClient } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const CLIENTS_KEY = "trades_clients";
const PREFS_KEY = "trades_notif_prefs";

interface AutoMessage {
  id: string;
  clientId: string;
  clientName: string;
  type: string;
  description: string;
  scheduledFor: string;
  enabled: boolean;
}

function daysFromNow(dateStr: string): number {
  return Math.round((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function buildQueue(clients: TradeClient[]): AutoMessage[] {
  const queue: AutoMessage[] = [];
  const today = new Date();

  clients.forEach((c) => {
    const lastContact = new Date(c.lastContact);

    if (c.status === "completed") {
      const followDate = new Date(lastContact);
      followDate.setDate(followDate.getDate() + 7);
      if (followDate >= today) {
        queue.push({ id: `post-${c.id}`, clientId: c.id, clientName: c.name, type: "Post-Project Follow-Up",
          description: `Check in with ${c.name} — 1 week after ${c.service} completion`,
          scheduledFor: followDate.toISOString().split("T")[0], enabled: true });
      }

      const reviewDate = new Date(lastContact);
      reviewDate.setDate(reviewDate.getDate() + 14);
      if (reviewDate >= today) {
        queue.push({ id: `review-${c.id}`, clientId: c.id, clientName: c.name, type: "Google Review Request",
          description: `Ask ${c.name} to leave a review for ${c.service}`,
          scheduledFor: reviewDate.toISOString().split("T")[0], enabled: true });
      }

      const sixMonth = new Date(lastContact);
      sixMonth.setMonth(sixMonth.getMonth() + 6);
      if (sixMonth >= today) {
        queue.push({ id: `6mo-${c.id}`, clientId: c.id, clientName: c.name, type: "6-Month Check-In",
          description: `Reach out to ${c.name} — 6 months since job. Remind them you're available.`,
          scheduledFor: sixMonth.toISOString().split("T")[0], enabled: true });
      }
    }

    if (c.status === "follow-up") {
      queue.push({ id: `fu-${c.id}`, clientId: c.id, clientName: c.name, type: "Follow-Up Due",
        description: `${c.name} is marked for follow-up — contact them about ${c.service}`,
        scheduledFor: today.toISOString().split("T")[0], enabled: true });
    }

    if (c.birthday) {
      const [, m, d] = c.birthday.split("-");
      const bday = new Date(today.getFullYear(), parseInt(m) - 1, parseInt(d));
      if (bday < today) bday.setFullYear(today.getFullYear() + 1);
      const diff = (bday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      if (diff <= 30) {
        queue.push({ id: `bday-${c.id}`, clientId: c.id, clientName: c.name, type: "Birthday Greeting",
          description: `Send birthday message to ${c.name}`,
          scheduledFor: bday.toISOString().split("T")[0], enabled: true });
      }
    }
  });

  return queue.sort((a, b) => a.scheduledFor.localeCompare(b.scheduledFor));
}

const TYPE_COLORS: Record<string, string> = {
  "Post-Project Follow-Up": "bg-green-100 text-green-800",
  "Google Review Request":  "bg-yellow-100 text-yellow-800",
  "6-Month Check-In":       "bg-blue-100 text-blue-800",
  "Follow-Up Due":          "bg-orange-100 text-orange-800",
  "Birthday Greeting":      "bg-pink-100 text-pink-800",
};

const TYPE_ICONS: Record<string, string> = {
  "Post-Project Follow-Up": "✅",
  "Google Review Request":  "⭐",
  "6-Month Check-In":       "📅",
  "Follow-Up Due":          "⏰",
  "Birthday Greeting":      "🎂",
};

export default function TradesNotificationsPage() {
  const [queue, setQueue] = useState<AutoMessage[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CLIENTS_KEY);
      const clients: TradeClient[] = stored ? JSON.parse(stored) : [];
      const built = buildQueue(clients);

      const savedPrefs = localStorage.getItem(PREFS_KEY);
      if (savedPrefs) {
        const prefs: Record<string, boolean> = JSON.parse(savedPrefs);
        built.forEach((m) => { if (prefs[m.id] === false) m.enabled = false; });
      }
      setQueue(built);
    } catch { /* empty */ }
  }, []);

  function toggleMessage(id: string) {
    setQueue((prev) => prev.map((m) => m.id === id ? { ...m, enabled: !m.enabled } : m));
  }

  function savePrefs() {
    const prefs: Record<string, boolean> = {};
    queue.forEach((m) => { prefs[m.id] = m.enabled; });
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  }

  const enabled = queue.filter((m) => m.enabled).length;
  const overdue = queue.filter((m) => daysFromNow(m.scheduledFor) < 0).length;
  const upcoming7 = queue.filter((m) => { const d = daysFromNow(m.scheduledFor); return d >= 0 && d <= 7; }).length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Notification Queue</h1>
          <p className="text-gray-500 text-sm">Manage automated follow-ups, review requests, and reminders</p>
        </div>
        <button onClick={savePrefs} className="text-white font-bold px-4 py-2 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.primary }}>
          Save Preferences
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl p-4 text-center border" style={{ backgroundColor: `${config.brand.primary}10`, borderColor: `${config.brand.primary}30` }}>
          <p className="text-3xl font-black" style={{ color: config.brand.primary }}>{enabled}</p>
          <p className="text-sm font-semibold text-gray-600">Enabled</p>
        </div>
        <div className={`border rounded-xl p-4 text-center ${overdue > 0 ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-200"}`}>
          <p className={`text-3xl font-black ${overdue > 0 ? "text-red-600" : "text-gray-400"}`}>{overdue}</p>
          <p className="text-sm font-semibold text-gray-600">Overdue</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-3xl font-black text-green-700">{upcoming7}</p>
          <p className="text-sm font-semibold text-gray-600">Due This Week</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(TYPE_COLORS).map(([type, color]) => (
          <span key={type} className={`text-xs px-2.5 py-1 rounded-full font-semibold ${color}`}>
            {TYPE_ICONS[type]} {type}
          </span>
        ))}
      </div>

      {queue.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="text-5xl mb-3">📭</div>
          <p className="font-bold text-gray-900 mb-1">No notifications queued</p>
          <p className="text-gray-500 text-sm mb-4">Add clients and mark jobs as complete to generate automated follow-ups</p>
          <Link href="/trades/admin/clients" className="inline-block text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.primary }}>
            Manage Clients →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 w-10">Send</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Client</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Description</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Due</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((msg) => {
                  const days = daysFromNow(msg.scheduledFor);
                  return (
                    <tr key={msg.id} className={`border-b border-gray-50 ${!msg.enabled ? "opacity-40" : ""}`}>
                      <td className="px-4 py-3">
                        <input type="checkbox" checked={msg.enabled} onChange={() => toggleMessage(msg.id)} className="w-4 h-4" />
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${TYPE_COLORS[msg.type] ?? "bg-gray-100 text-gray-700"}`}>
                          {TYPE_ICONS[msg.type]} {msg.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-900 hidden md:table-cell">{msg.clientName}</td>
                      <td className="px-4 py-3 text-gray-600 hidden lg:table-cell text-xs max-w-xs truncate">{msg.description}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`text-xs font-semibold ${days < 0 ? "text-red-600" : days <= 3 ? "text-orange-600" : "text-gray-600"}`}>
                          {days < 0 ? `${Math.abs(days)}d overdue` : days === 0 ? "Today" : `${days}d`}
                        </span>
                        <p className="text-gray-400 text-xs">{msg.scheduledFor}</p>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/trades/admin/campaigns`}
                          className="text-xs text-white px-2.5 py-1 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.primary }}>
                          Draft →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="rounded-xl p-5 border text-sm text-gray-600" style={{ backgroundColor: `${config.brand.primary}08`, borderColor: `${config.brand.primary}20` }}>
        <p className="font-bold text-gray-900 mb-2">ℹ️ How Automated Notifications Work</p>
        <ul className="space-y-1">
          <li>• <strong>Post-Project Follow-Up</strong> — queued 7 days after a job is marked complete</li>
          <li>• <strong>Google Review Request</strong> — queued 14 days after completion</li>
          <li>• <strong>6-Month Check-In</strong> — queued 6 months after last contact</li>
          <li>• <strong>Follow-Up Due</strong> — immediately when a client is marked "follow-up"</li>
          <li>• <strong>Birthday Greeting</strong> — queued 1 day before the client&apos;s birthday</li>
          <li>• Uncheck any message to suppress it. Click &quot;Save Preferences&quot; to persist your choices.</li>
        </ul>
      </div>
    </div>
  );
}
