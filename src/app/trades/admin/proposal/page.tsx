"use client";

import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

const tiers = [
  {
    name: "Standard",
    price: 3500,
    monthly: 175,
    headerColor: "#374151",
    features: [
      "Full config-driven website",
      "Blog (4 SEO articles)",
      "Contact & quote forms",
      "Service area pages",
      "Gallery page",
      "Mobile-first responsive design",
      "Local SEO optimization",
      "Schema.org markup",
      "Google Search Console setup",
      "1 year hosting (Vercel)",
      "Monthly backups",
      "Email support",
    ],
    notIncluded: ["Admin CRM", "Project tracker", "Email campaigns", "AI assistant", "Reports"],
  },
  {
    name: "Professional",
    price: 5000,
    monthly: 275,
    recommended: true,
    features: [
      "Everything in Standard",
      "Admin portal with CRM",
      "Project & job management",
      "Customer project update portal",
      "Email campaign manager",
      "Holiday & birthday automation",
      "Post-project follow-up automation",
      "AI-powered email & quote drafting",
      "Lead Monitor (social search links)",
      "Revenue & pipeline reports",
      "Google Business Profile optimization",
      "Priority email support",
    ],
    notIncluded: ["Feature flag settings UI"],
  },
  {
    name: "Premium",
    price: 7000,
    monthly: 450,
    features: [
      "Everything in Professional",
      "Feature flag settings UI",
      "Quarterly SEO audit & reporting",
      "Monthly blog post (AI-assisted)",
      "Google Ads landing page",
      "2 years hosting included",
      "Competitor monitoring",
      "Seasonal campaign automation",
      "Phone support",
      "Quarterly strategy call",
    ],
    notIncluded: [],
  },
];

const lineItems = [
  { item: "Custom website design & development",    standard: "$2,200", professional: "$2,200", premium: "$2,200" },
  { item: "Config-driven service pages (SEO)",      standard: "$600",   professional: "$600",   premium: "$600" },
  { item: "Blog (4 articles)",                      standard: "$300",   professional: "$300",   premium: "$300" },
  { item: "Contact, quote & estimate forms",        standard: "$200",   professional: "$200",   premium: "$200" },
  { item: "Schema.org / local SEO markup",          standard: "$200",   professional: "$200",   premium: "$200" },
  { item: "Admin CRM & client management",          standard: "—",      professional: "$400",   premium: "$400" },
  { item: "Project tracking + customer portal",     standard: "—",      professional: "$400",   premium: "$400" },
  { item: "Email campaign manager (9 types)",       standard: "—",      professional: "$300",   premium: "$300" },
  { item: "AI assistant integration (Claude)",      standard: "—",      professional: "$300",   premium: "$300" },
  { item: "Revenue & pipeline reports",             standard: "—",      professional: "$200",   premium: "$200" },
  { item: "Lead Monitor",                           standard: "—",      professional: "$100",   premium: "$100" },
  { item: "Feature flag settings UI",               standard: "—",      professional: "—",      premium: "$300" },
  { item: "Google Ads landing page",                standard: "—",      professional: "—",      premium: "$400" },
  { item: "2-year hosting (vs 1-year)",             standard: "—",      professional: "—",      premium: "$300" },
];

const monthlyBreakdown = [
  { item: "Vercel hosting",                         standard: "$20",   professional: "$20",   premium: "$20" },
  { item: "Domain renewal (prorated)",              standard: "$2",    professional: "$2",    premium: "$2" },
  { item: "Security updates & maintenance",         standard: "$75",   professional: "$75",   premium: "$75" },
  { item: "Claude API usage (AI features)",         standard: "—",     professional: "$25",   premium: "$50" },
  { item: "Email delivery (Resend)",                standard: "—",     professional: "$10",   premium: "$20" },
  { item: "Monthly performance report",             standard: "—",     professional: "$50",   premium: "$75" },
  { item: "Content creation / blog post",           standard: "—",     professional: "—",     premium: "$150" },
  { item: "SEO monitoring & reporting",             standard: "—",     professional: "—",     premium: "$100" },
  { item: "Agency fee",                             standard: "$78",   professional: "$93",   premium: "$33" },
];

export default function TradesProposalPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-white rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${config.brand.primary}, ${config.brand.accent})` }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-1 opacity-70">Website Proposal</p>
            <h1 className="text-3xl font-black mb-1">ProTrades Template</h1>
            <p className="opacity-80">Multi-Trade · Plumbers · Roofers · Contractors · HVAC</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs opacity-60">Prepared by</p>
            <p className="font-bold text-white">KMD Global</p>
            <p className="text-xs opacity-60 mt-1">2026</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Trade Types",     value: "11 trade types" },
            { label: "Admin Features",  value: "CRM + Projects + AI" },
            { label: "Feature Flags",   value: "15 toggles" },
            { label: "Customer Portal", value: "Project tracker" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl px-4 py-3">
              <p className="text-xs opacity-60">{s.label}</p>
              <p className="text-white font-bold text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing tiers */}
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4">Pricing Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div key={tier.name} className="border-2 border-gray-200 rounded-2xl overflow-hidden relative bg-white">
              {tier.recommended && (
                <div className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: config.brand.primary }}>
                  Recommended
                </div>
              )}
              <div className="text-white p-5" style={{ backgroundColor: tier.headerColor ?? config.brand.primary }}>
                <p className="font-bold text-sm uppercase tracking-wider opacity-80">{tier.name}</p>
                <p className="text-4xl font-black mt-1">${tier.price.toLocaleString()}</p>
                <p className="text-white/70 text-sm">one-time · then ${tier.monthly}/mo</p>
              </div>
              <div className="p-5">
                <ul className="space-y-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5 shrink-0">✓</span>{f}
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400 line-through">
                      <span className="mt-0.5 shrink-0">✗</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line items */}
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4">Detailed Line Items — One-Time Build</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                <th className="text-center px-3 py-3 font-semibold text-gray-600">Standard</th>
                <th className="text-center px-3 py-3 font-semibold" style={{ color: config.brand.primary }}>Professional</th>
                <th className="text-center px-3 py-3 font-semibold text-purple-700">Premium</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 text-gray-700">{row.item}</td>
                  <td className="text-center px-3 py-3 text-gray-500">{row.standard}</td>
                  <td className="text-center px-3 py-3 font-semibold" style={{ color: config.brand.primary }}>{row.professional}</td>
                  <td className="text-center px-3 py-3 font-semibold text-purple-700">{row.premium}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 bg-gray-100 font-bold">
                <td className="px-5 py-3 text-gray-800">Total</td>
                <td className="text-center px-3 py-3 text-gray-800">$3,500</td>
                <td className="text-center px-3 py-3" style={{ color: config.brand.primary }}>$5,000</td>
                <td className="text-center px-3 py-3 text-purple-700">$7,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly breakdown */}
      <div>
        <h2 className="text-xl font-black text-gray-900 mb-4">Monthly Retainer Breakdown</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                <th className="text-center px-3 py-3 font-semibold text-gray-600">Standard</th>
                <th className="text-center px-3 py-3 font-semibold" style={{ color: config.brand.primary }}>Professional</th>
                <th className="text-center px-3 py-3 font-semibold text-purple-700">Premium</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBreakdown.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 text-gray-700">{row.item}</td>
                  <td className="text-center px-3 py-3 text-gray-500">{row.standard}</td>
                  <td className="text-center px-3 py-3" style={{ color: config.brand.primary }}>{row.professional}</td>
                  <td className="text-center px-3 py-3 text-purple-700">{row.premium}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 bg-gray-100 font-bold">
                <td className="px-5 py-3 text-gray-800">Monthly Total</td>
                <td className="text-center px-3 py-3 text-gray-800">$175/mo</td>
                <td className="text-center px-3 py-3" style={{ color: config.brand.primary }}>$275/mo</td>
                <td className="text-center px-3 py-3 text-purple-700">$450/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* What gets connected */}
      <div className="text-white rounded-xl p-6" style={{ backgroundColor: config.brand.primary }}>
        <h3 className="font-bold mb-3">🚀 What Gets Connected at Launch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { icon: "✉️", title: "Email Delivery",    desc: "Connect Resend or SendGrid — contact forms and campaigns send real emails (~15 min setup)" },
            { icon: "⭐", title: "Google Reviews",    desc: "Link your Google Business Profile to pull real reviews automatically onto the site" },
            { icon: "🗄️", title: "Cloud Database",   desc: "Upgrade client CRM from browser storage to cloud — enables multi-device access and full reporting" },
            { icon: "🤖", title: "AI Assistant",      desc: "Already live using Claude API — draft emails, quotes, and review responses instantly" },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold text-white mb-1">{item.icon} {item.title}</p>
              <p className="opacity-70 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
