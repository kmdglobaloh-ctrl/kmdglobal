"use client";

import { useState, useEffect } from "react";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  birthday?: string;
  lastContact?: string;
}

type CampaignType = "checkin" | "birthday" | "holiday-xmas" | "holiday-4th" | "holiday-thanksgiving" | "post-project" | "followup-6mo" | "winter-prep" | "spring-cleanup";

const CAMPAIGNS: { value: CampaignType; label: string; icon: string; desc: string }[] = [
  { value: "post-project", label: "Post-Project Follow-Up", icon: "✅", desc: "Send 1 week after job completion" },
  { value: "checkin", label: "Check-In", icon: "👋", desc: "General how-are-you follow-up" },
  { value: "followup-6mo", label: "6-Month Follow-Up", icon: "📅", desc: "Remind past clients you're available" },
  { value: "birthday", label: "Birthday Greeting", icon: "🎂", desc: "Personalized birthday message" },
  { value: "holiday-xmas", label: "Christmas / New Year", icon: "🎄", desc: "Holiday season greetings" },
  { value: "holiday-thanksgiving", label: "Thanksgiving", icon: "🦃", desc: "Thanksgiving message" },
  { value: "holiday-4th", label: "Fourth of July", icon: "🇺🇸", desc: "Summer holiday greetings" },
  { value: "winter-prep", label: "Winter Prep Reminder", icon: "❄️", desc: "Snow removal & sewer freeze-prevention tips" },
  { value: "spring-cleanup", label: "Spring Cleanup", icon: "🌱", desc: "Drainage, grading & sewer inspection" },
];

function buildTemplate(type: CampaignType, client: { name: string; service?: string }): string {
  const firstName = client.name.split(" ")[0];
  switch (type) {
    case "post-project":
      return `Hi ${firstName},\n\nThank you for choosing Alfieri Brothers for your recent ${client.service || "project"}! We hope everything is looking great.\n\nIf you have any questions or notice anything that needs attention, don't hesitate to reach out. We stand behind our work and are always just a call away.\n\nWe'd also love it if you could leave us a Google review — it helps other Cleveland homeowners find reliable contractors like us.\n\nThank you again for your business!\n\nBest regards,\nThe Alfieri Brothers Team\n📞 216-481-1717`;

    case "checkin":
      return `Hi ${firstName},\n\nHope you're doing well! We just wanted to check in and see how things are going since we completed your ${client.service || "project"}.\n\nIf you've noticed any issues or have new projects coming up — whether it's sewer work, waterproofing, or anything else around the house — we'd be happy to take a look and give you a free estimate.\n\nDon't hesitate to give us a call!\n\nWarm regards,\nAlfieri Brothers Contracting\n📞 216-481-1717`;

    case "followup-6mo":
      return `Hi ${firstName},\n\nIt's been a little while since we worked together on your ${client.service || "project"}, and we just wanted to say hello and remind you that we're still here if you ever need us.\n\nWith Cleveland's weather and aging infrastructure, it's always a good idea to have your sewer, drainage, and foundation checked periodically. We offer free estimates — no pressure, just an honest assessment.\n\nHope to hear from you soon!\n\nThe Alfieri Brothers Team\n📞 216-481-1717`;

    case "birthday":
      return `Happy Birthday, ${firstName}! 🎉\n\nWishing you a wonderful day from everyone at Alfieri Brothers. It's been a pleasure working with you, and we hope your day is as great as you are.\n\nAs a small thank-you, give us a call for your next project and mention this message — we'll make sure to take good care of you.\n\nHave a fantastic birthday!\n\nWarm wishes,\nAlfieri Brothers Contracting\n📞 216-481-1717`;

    case "holiday-xmas":
      return `Dear ${firstName},\n\nWishing you and your family a very Merry Christmas and a Happy New Year! 🎄\n\nThank you for being a valued customer of Alfieri Brothers. It's been our privilege to serve you this year, and we look forward to continuing that relationship in the new year.\n\nStay warm out there — and remember, if you're dealing with frozen pipes or sewer issues this winter, we're just a call away.\n\nHappy Holidays!\n\nThe Alfieri Brothers Family\n📞 216-481-1717`;

    case "holiday-thanksgiving":
      return `Dear ${firstName},\n\nHappy Thanksgiving! 🦃\n\nWe're grateful for customers like you who trust us with their homes and businesses. This time of year, we count our blessings — and you're on that list.\n\nWishing you a warm holiday surrounded by family and great food.\n\nWith gratitude,\nAlfieri Brothers Contracting and Excavation\n📞 216-481-1717`;

    case "holiday-4th":
      return `Hi ${firstName},\n\nHappy Fourth of July! 🇺🇸🎆\n\nHope you're enjoying the holiday with family and friends. We're taking a well-deserved day off, but we'll be back at it tomorrow if you need anything.\n\nEnjoy the fireworks!\n\nYour neighbors at Alfieri Brothers\n📞 216-481-1717`;

    case "winter-prep":
      return `Hi ${firstName},\n\nWinter is right around the corner here in Cleveland, and we wanted to share a few tips to protect your home:\n\n❄️ Have your sewer lateral inspected before the ground freezes — root intrusion gets worse in cold weather.\n🌡️ Make sure your basement drainage is clear to handle snowmelt.\n🚗 If you need commercial snow removal this season, our bids go out in October — reach out soon!\n\nWe're happy to schedule a free inspection before winter hits. Give us a call!\n\nStay warm,\nAlfieri Brothers\n📞 216-481-1717`;

    case "spring-cleanup":
      return `Hi ${firstName},\n\nSpring is here and that means it's a great time to assess any winter damage to your property!\n\n🌱 Check your drainage and grading after the ground thaws\n💧 Inspect your basement for moisture after snowmelt\n🔩 Have your sewer camera-inspected to catch any root intrusion from the winter\n\nWe're booking spring appointments now — give us a call for a free estimate!\n\nHappy Spring!\nAlfieri Brothers Contracting\n📞 216-481-1717`;

    default:
      return "";
  }
}

export default function CampaignsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedType, setSelectedType] = useState<CampaignType>("post-project");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [previewClient, setPreviewClient] = useState<Client | null>(null);
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("alfieri_clients");
      if (stored) {
        const parsed: Client[] = JSON.parse(stored);
        setClients(parsed);
        if (parsed.length > 0) setPreviewClient(parsed[0]);
      }
    } catch { /* empty */ }
  }, []);

  useEffect(() => {
    const campaign = CAMPAIGNS.find((c) => c.value === selectedType);
    if (previewClient) {
      setBody(buildTemplate(selectedType, { name: previewClient.name, service: previewClient.service }));
    }
    const subjectMap: Record<CampaignType, string> = {
      "post-project": "Thank You — How Is Everything Looking?",
      "checkin": "Just Checking In!",
      "followup-6mo": "Checking In from Alfieri Brothers",
      "birthday": `Happy Birthday, ${previewClient?.name.split(" ")[0] || ""}! 🎉`,
      "holiday-xmas": "Happy Holidays from Alfieri Brothers 🎄",
      "holiday-thanksgiving": "Happy Thanksgiving from Alfieri Brothers 🦃",
      "holiday-4th": "Happy Fourth of July! 🇺🇸",
      "winter-prep": "Winter Prep Tips from Alfieri Brothers ❄️",
      "spring-cleanup": "Spring is Here — Time for a Checkup 🌱",
    };
    setSubject(subjectMap[selectedType] || campaign?.label || "");
  }, [selectedType, previewClient]);

  function toggleClient(id: string) {
    setSelectedClients((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  }

  function selectAll() {
    setSelectedClients(clients.map((c) => c.id));
  }

  function handleSend() {
    // In production, post to /api/alfieri/campaigns to send via Resend/SendGrid
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const campaign = CAMPAIGNS.find((c) => c.value === selectedType)!;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-[#0d1444]">Email Campaigns</h1>
        <p className="text-gray-500 text-sm">Create and send targeted emails to your clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign type selector */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-[#0d1444] text-sm uppercase tracking-widest mb-4">Campaign Type</h2>
          <div className="space-y-1.5">
            {CAMPAIGNS.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedType(c.value)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${selectedType === c.value ? "bg-[#1a237e] text-white" : "hover:bg-gray-50 text-gray-700"}`}
              >
                <div className="flex items-center gap-2">
                  <span>{c.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{c.label}</p>
                    <p className={`text-xs ${selectedType === c.value ? "text-blue-300" : "text-gray-400"}`}>{c.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Campaign info */}
          <div className="bg-[#f0f4ff] rounded-xl p-4 border border-blue-100 flex items-center gap-3">
            <span className="text-3xl">{campaign.icon}</span>
            <div>
              <p className="font-bold text-[#0d1444]">{campaign.label}</p>
              <p className="text-gray-600 text-sm">{campaign.desc}</p>
            </div>
          </div>

          {/* Subject line */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a237e]"
            />
          </div>

          {/* Message body */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">Message Body</label>
              {previewClient && (
                <select
                  className="text-xs border border-gray-200 rounded px-2 py-1 bg-white focus:outline-none"
                  value={previewClient.id}
                  onChange={(e) => {
                    const c = clients.find((cl) => cl.id === e.target.value);
                    if (c) setPreviewClient(c);
                  }}
                >
                  {clients.map((c) => <option key={c.id} value={c.id}>Preview: {c.name}</option>)}
                </select>
              )}
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#1a237e] resize-none"
            />
          </div>

          {/* Recipient selector */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-gray-700">Recipients ({selectedClients.length} selected)</label>
              <button onClick={selectAll} className="text-xs text-[#1a237e] hover:underline">Select All</button>
            </div>
            {clients.length === 0 ? (
              <p className="text-gray-500 text-sm">No clients yet. <a href="/alfieri/admin/clients" className="text-[#1a237e] hover:underline">Add clients →</a></p>
            ) : (
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {clients.map((c) => (
                  <label key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedClients.includes(c.id)}
                      onChange={() => toggleClient(c.id)}
                      className="accent-[#1a237e]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#0d1444] text-sm">{c.name}</p>
                      <p className="text-gray-500 text-xs truncate">{c.email} · {c.service}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Send button */}
          <div className="flex gap-3">
            <button
              onClick={handleSend}
              disabled={selectedClients.length === 0 || !subject || !body}
              className="flex-1 bg-[#cc2222] hover:bg-red-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {sent ? "✅ Campaign Queued!" : `Send to ${selectedClients.length || 0} Client${selectedClients.length !== 1 ? "s" : ""}`}
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-5 py-3 rounded-lg text-sm transition-colors">
              Preview
            </button>
          </div>
          <p className="text-gray-400 text-xs text-center">Connect Resend or SendGrid in Settings to enable actual email delivery</p>
        </div>
      </div>
    </div>
  );
}
