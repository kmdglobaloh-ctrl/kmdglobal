"use client";

import { useState, useEffect } from "react";
import { TRADES_DEMO_CONFIG, type TradeClient } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const CLIENTS_KEY = "trades_clients";

type CampaignType = "post-project" | "checkin" | "followup-6mo" | "birthday" | "holiday-xmas" | "holiday-thanksgiving" | "holiday-4th" | "winter-prep" | "spring-start";

const CAMPAIGNS: { value: CampaignType; label: string; icon: string; desc: string }[] = [
  { value: "post-project",      label: "Post-Project Follow-Up", icon: "✅", desc: "Send 1 week after job completion" },
  { value: "checkin",           label: "Check-In",               icon: "👋", desc: "General how-are-you follow-up" },
  { value: "followup-6mo",      label: "6-Month Follow-Up",      icon: "📅", desc: "Remind past clients you're available" },
  { value: "birthday",          label: "Birthday Greeting",      icon: "🎂", desc: "Personalized birthday message" },
  { value: "holiday-xmas",      label: "Christmas / New Year",   icon: "🎄", desc: "Holiday season greetings" },
  { value: "holiday-thanksgiving", label: "Thanksgiving",        icon: "🦃", desc: "Thanksgiving message" },
  { value: "holiday-4th",       label: "Fourth of July",         icon: "🇺🇸", desc: "Summer holiday greetings" },
  { value: "winter-prep",       label: "Winter Prep Reminder",   icon: "❄️", desc: "Seasonal maintenance reminder" },
  { value: "spring-start",      label: "Spring Season Kickoff",  icon: "🌱", desc: "Book spring projects early" },
];

function buildTemplate(type: CampaignType, client: { name: string; service?: string }): string {
  const firstName = client.name.split(" ")[0];
  const co = config.company.name;
  const phone = config.company.phone;
  const service = client.service || "your recent project";

  switch (type) {
    case "post-project":
      return `Hi ${firstName},\n\nThank you for choosing ${co} for your recent ${service}! We hope everything looks great.\n\nIf you have any questions or notice anything that needs attention, don't hesitate to reach out. We stand behind our work 100%.\n\nWe'd also love it if you could leave us a Google review — it means a lot to a local business like ours and helps other homeowners find reliable contractors.\n\nThank you again for your business!\n\nBest regards,\n${co}\n📞 ${phone}`;

    case "checkin":
      return `Hi ${firstName},\n\nHope you're doing well! We just wanted to check in and see how things are going since we completed your ${service}.\n\nIf you've noticed anything or have new projects coming up, we'd be happy to take a look and provide a free estimate.\n\nDon't hesitate to give us a call!\n\nWarm regards,\n${co}\n📞 ${phone}`;

    case "followup-6mo":
      return `Hi ${firstName},\n\nIt's been a little while since we worked together, and we just wanted to say hello and remind you that we're still here if you ever need us.\n\nWe offer free estimates — no pressure, just an honest assessment. Hope to hear from you soon!\n\n${co}\n📞 ${phone}`;

    case "birthday":
      return `Happy Birthday, ${firstName}! 🎉\n\nWishing you a wonderful day from everyone at ${co}. It's been a pleasure working with you, and we hope your day is as great as you are.\n\nHave a fantastic birthday!\n\nWarm wishes,\n${co}\n📞 ${phone}`;

    case "holiday-xmas":
      return `Dear ${firstName},\n\nWishing you and your family a very Merry Christmas and a Happy New Year! 🎄\n\nThank you for being a valued customer of ${co}. It's been our privilege to serve you this year.\n\nHappy Holidays!\n\n${co}\n📞 ${phone}`;

    case "holiday-thanksgiving":
      return `Dear ${firstName},\n\nHappy Thanksgiving! 🦃\n\nWe're grateful for customers like you who trust us with their homes. Wishing you a warm holiday surrounded by family and great food.\n\nWith gratitude,\n${co}\n📞 ${phone}`;

    case "holiday-4th":
      return `Hi ${firstName},\n\nHappy Fourth of July! 🇺🇸🎆\n\nHope you're enjoying the holiday with family and friends. We'll be back at it tomorrow if you need anything.\n\nEnjoy the fireworks!\n\n${co}\n📞 ${phone}`;

    case "winter-prep":
      return `Hi ${firstName},\n\nWinter is right around the corner, and we wanted to send along a few reminders to help protect your home this season.\n\nNow is a great time to schedule any outstanding work before the ground freezes. We're booking quickly — give us a call for a free estimate!\n\nStay warm,\n${co}\n📞 ${phone}`;

    case "spring-start":
      return `Hi ${firstName},\n\nSpring is here and it's a great time to tackle any home improvement projects you've been planning!\n\nWe're booking spring appointments now. Give us a call to get on the schedule before we fill up.\n\nHappy Spring!\n${co}\n📞 ${phone}`;

    default: return "";
  }
}

export default function TradesCampaignsPage() {
  const [clients, setClients] = useState<TradeClient[]>([]);
  const [selectedType, setSelectedType] = useState<CampaignType>("post-project");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [previewClient, setPreviewClient] = useState<TradeClient | null>(null);
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CLIENTS_KEY);
      if (stored) {
        const parsed: TradeClient[] = JSON.parse(stored);
        setClients(parsed);
        if (parsed.length > 0) setPreviewClient(parsed[0]);
      }
    } catch { /* empty */ }
  }, []);

  useEffect(() => {
    if (previewClient) setBody(buildTemplate(selectedType, { name: previewClient.name, service: previewClient.service }));
    const subjectMap: Record<CampaignType, string> = {
      "post-project":        "Thank You — How Is Everything Looking?",
      "checkin":             "Just Checking In!",
      "followup-6mo":        `Checking In from ${config.company.name}`,
      "birthday":            `Happy Birthday, ${previewClient?.name.split(" ")[0] ?? ""}! 🎉`,
      "holiday-xmas":        `Happy Holidays from ${config.company.name} 🎄`,
      "holiday-thanksgiving":`Happy Thanksgiving from ${config.company.name} 🦃`,
      "holiday-4th":         "Happy Fourth of July! 🇺🇸",
      "winter-prep":         `Winter Prep Reminder from ${config.company.name} ❄️`,
      "spring-start":        "Spring Is Here — Let's Get Started 🌱",
    };
    setSubject(subjectMap[selectedType] ?? "");
  }, [selectedType, previewClient]);

  function toggleClient(id: string) {
    setSelectedClients((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  }

  function handleSend() {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const campaign = CAMPAIGNS.find((c) => c.value === selectedType)!;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Email Campaigns</h1>
        <p className="text-gray-500 text-sm">Create and send targeted emails to your clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign type selector */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-4">Campaign Type</h2>
          <div className="space-y-1.5">
            {CAMPAIGNS.map((c) => (
              <button key={c.value} onClick={() => setSelectedType(c.value)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${selectedType === c.value ? "text-white" : "hover:bg-gray-50 text-gray-700"}`}
                style={selectedType === c.value ? { backgroundColor: config.brand.primary } : {}}>
                <div className="flex items-center gap-2">
                  <span>{c.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{c.label}</p>
                    <p className={`text-xs ${selectedType === c.value ? "opacity-70" : "text-gray-400"}`}>{c.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-5">
          {/* Campaign info banner */}
          <div className="rounded-xl p-4 border flex items-center gap-3 bg-gray-50 border-gray-200">
            <span className="text-3xl">{campaign.icon}</span>
            <div>
              <p className="font-bold text-gray-900">{campaign.label}</p>
              <p className="text-gray-600 text-sm">{campaign.desc}</p>
            </div>
          </div>

          {/* Subject */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Subject</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
          </div>

          {/* Body */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">Message Body</label>
              {clients.length > 0 && (
                <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-white focus:outline-none"
                  value={previewClient?.id ?? ""}
                  onChange={(e) => { const c = clients.find((cl) => cl.id === e.target.value); if (c) setPreviewClient(c); }}>
                  {clients.map((c) => <option key={c.id} value={c.id}>Preview: {c.name}</option>)}
                </select>
              )}
            </div>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={12}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-mono focus:outline-none resize-none" />
          </div>

          {/* Recipients */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700">Recipients ({selectedClients.length} selected)</label>
              <button onClick={() => setSelectedClients(clients.map((c) => c.id))} className="text-xs hover:underline" style={{ color: config.brand.primary }}>
                Select All
              </button>
            </div>
            {clients.length === 0 ? (
              <p className="text-gray-500 text-sm">No clients yet. <a href="/trades/admin/clients" className="hover:underline font-semibold" style={{ color: config.brand.primary }}>Add clients →</a></p>
            ) : (
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {clients.map((c) => (
                  <label key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" checked={selectedClients.includes(c.id)} onChange={() => toggleClient(c.id)} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                      <p className="text-gray-500 text-xs truncate">{c.email} · {c.service}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button onClick={handleSend} disabled={selectedClients.length === 0 || !subject || !body}
              className="flex-1 text-white font-bold py-3 rounded-lg transition-opacity disabled:bg-gray-300 hover:opacity-90"
              style={{ backgroundColor: config.brand.secondary }}>
              {sent ? "✅ Campaign Queued!" : `Send to ${selectedClients.length || 0} Client${selectedClients.length !== 1 ? "s" : ""}`}
            </button>
          </div>
          <p className="text-gray-400 text-xs text-center">Connect Resend or SendGrid in Settings to enable actual email delivery</p>
        </div>
      </div>
    </div>
  );
}
