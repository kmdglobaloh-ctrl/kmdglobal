"use client";

import { useState } from "react";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import { STANDARD_FEATURES, PROFESSIONAL_FEATURES, PREMIUM_FEATURES, type TradeFeatureFlags } from "@/lib/trades/config";

const config = TRADES_DEMO_CONFIG;

type Tier = "standard" | "professional" | "premium" | "custom";

const TIERS: { id: Tier; label: string; price: string; desc: string; color: string }[] = [
  { id: "standard",     label: "Standard",     price: "$3,500 + $175/mo",  desc: "Public site, reviews, gallery, emergency banner", color: "#6b7280" },
  { id: "professional", label: "Professional", price: "$5,000 + $275/mo",  desc: "CRM, project tracking, campaigns, AI assistant, reports", color: config.brand.primary },
  { id: "premium",      label: "Premium",      price: "$7,000 + $450/mo",  desc: "Everything + feature flag settings UI", color: config.brand.secondary },
  { id: "custom",       label: "Custom",       price: "Quote",             desc: "Manually configure individual features", color: "#7c3aed" },
];

const FLAG_GROUPS: { group: string; flags: { key: keyof TradeFeatureFlags; label: string; desc: string }[] }[] = [
  {
    group: "Public Site",
    flags: [
      { key: "blog", label: "Blog / Articles", desc: "SEO blog with project write-ups and trade tips" },
      { key: "gallery", label: "Photo Gallery", desc: "Before/after project photos on the public site" },
      { key: "reviews", label: "Reviews Section", desc: "Customer reviews displayed on the homepage" },
      { key: "serviceAreas", label: "Service Areas", desc: "Service area map and city list on public site" },
      { key: "rentalSection", label: "Equipment Rental", desc: "Equipment rental listings (landscaping, specialty)" },
      { key: "emergencyBanner", label: "Emergency Banner", desc: "Prominent \"Call Now\" emergency banner at top of site" },
      { key: "projectUpdatesPublic", label: "Project Update Portal", desc: "Customer-facing project tracker via unique token URL" },
      { key: "previewGate", label: "Preview Gate", desc: "Require access code to view the demo site (for prospects)" },
    ],
  },
  {
    group: "Admin Portal",
    flags: [
      { key: "adminCRM", label: "CRM", desc: "Client database with lead tracking and follow-ups" },
      { key: "adminProjectTracking", label: "Project Management", desc: "Job tracking with crew notes and client update posts" },
      { key: "adminCampaigns", label: "Email Campaigns", desc: "Send seasonal promotions and follow-up sequences" },
      { key: "adminNotifications", label: "Notifications", desc: "In-app alerts for follow-ups, milestones, and leads" },
      { key: "adminAI", label: "AI Assistant", desc: "AI-generated quotes, follow-up messages, and proposals" },
      { key: "adminLeads", label: "Lead Monitor", desc: "Lead capture tracking and source analytics" },
      { key: "adminReports", label: "Reports", desc: "Revenue, pipeline, and client analytics dashboard" },
      { key: "adminSettings", label: "Feature Settings", desc: "This page — manage feature flags within the admin portal" },
    ],
  },
];

const TIER_FEATURES: Record<Tier, TradeFeatureFlags> = {
  standard:     STANDARD_FEATURES,
  professional: PROFESSIONAL_FEATURES,
  premium:      PREMIUM_FEATURES,
  custom:       PREMIUM_FEATURES,
};

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? "bg-current" : "bg-gray-200"}`}
      style={checked ? { color: config.brand.primary } : {}}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow ${checked ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export default function TradesSettingsPage() {
  const [tier, setTier] = useState<Tier>("professional");
  const [flags, setFlags] = useState<TradeFeatureFlags>({ ...PROFESSIONAL_FEATURES });
  const [saved, setSaved] = useState(false);

  function applyTier(t: Tier) {
    setTier(t);
    setFlags({ ...TIER_FEATURES[t] });
    setSaved(false);
  }

  function toggleFlag(key: keyof TradeFeatureFlags) {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
    setTier("custom");
    setSaved(false);
  }

  function handleSave() {
    // In a real deployment this would write to the config file or DB.
    // For the demo this just shows a success state.
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const activeCount = Object.values(flags).filter(Boolean).length;
  const totalCount = Object.keys(flags).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Feature Settings</h1>
          <p className="text-gray-500 text-sm">{config.company.name} · {activeCount} of {totalCount} features enabled</p>
        </div>
        <button onClick={handleSave}
          className={`px-5 py-2 rounded-lg text-sm font-bold text-white transition-colors ${saved ? "bg-green-600" : "hover:opacity-90"}`}
          style={saved ? {} : { backgroundColor: config.brand.primary }}>
          {saved ? "✓ Saved" : "Save Changes"}
        </button>
      </div>

      {/* Tier presets */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-black text-gray-900 mb-1">Pricing Tier</h2>
        <p className="text-xs text-gray-500 mb-4">Select a tier to apply its feature set, or choose Custom to configure individually.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {TIERS.map((t) => (
            <button key={t.id} onClick={() => applyTier(t.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all ${tier === t.id ? "border-current shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
              style={tier === t.id ? { borderColor: t.color, backgroundColor: `${t.color}08` } : {}}>
              <p className="font-black text-sm" style={{ color: t.color }}>{t.label}</p>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">{t.price}</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Comparison: what differs between current and the preset shown */}
      {tier !== "custom" && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 text-sm text-blue-800">
          <span className="font-bold">Tip:</span> You can switch to <strong>Custom</strong> and toggle individual flags after applying a tier preset.
        </div>
      )}

      {/* Flag groups */}
      {FLAG_GROUPS.map((group) => (
        <div key={group.group} className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-black text-gray-900 mb-4">{group.group}</h2>
          <div className="space-y-1">
            {group.flags.map((f) => {
              const active = flags[f.key];
              return (
                <div key={f.key} className={`flex items-center justify-between p-3 rounded-lg transition-colors ${active ? "bg-gray-50" : ""}`}>
                  <div className="flex-1 min-w-0 pr-4">
                    <p className={`text-sm font-semibold ${active ? "text-gray-900" : "text-gray-400"}`}>{f.label}</p>
                    <p className={`text-xs mt-0.5 ${active ? "text-gray-500" : "text-gray-300"}`}>{f.desc}</p>
                  </div>
                  <Toggle checked={!!active} onChange={() => toggleFlag(f.key)} />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Save footer */}
      <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-5">
        <div>
          <p className="font-semibold text-gray-900 text-sm">{activeCount} of {totalCount} features active</p>
          <p className="text-xs text-gray-500 mt-0.5">Changes take effect on next deploy. In production, this writes directly to the client config.</p>
        </div>
        <button onClick={handleSave}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-colors ${saved ? "bg-green-600" : "hover:opacity-90"}`}
          style={saved ? {} : { backgroundColor: config.brand.primary }}>
          {saved ? "✓ Saved" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
