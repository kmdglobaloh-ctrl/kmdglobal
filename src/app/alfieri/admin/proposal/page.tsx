"use client";

const tiers = [
  {
    name: "Standard",
    price: 3500,
    monthly: 175,
    headerColor: "bg-slate-700",
    features: [
      "Full 11-service website",
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
    notIncluded: ["Admin CRM", "Email campaigns", "AI assistant", "Lead monitor"],
  },
  {
    name: "Professional",
    price: 5000,
    monthly: 275,
    headerColor: "bg-[#1a237e]",
    recommended: true,
    features: [
      "Everything in Standard",
      "Admin portal with CRM",
      "Client database & management",
      "9 automated email campaign types",
      "Birthday & holiday automation",
      "Post-project follow-up automation",
      "AI-powered email drafting",
      "AI quote generation",
      "Lead Monitor (social search links)",
      "Google Business Profile optimization",
      "Monthly performance report",
      "Priority email support",
    ],
    notIncluded: ["Ongoing content creation"],
  },
  {
    name: "Premium",
    price: 7000,
    monthly: 450,
    headerColor: "bg-purple-900",
    features: [
      "Everything in Professional",
      "Quarterly SEO audit & reporting",
      "Monthly blog post (AI-assisted)",
      "Google Ads landing page",
      "Review request automation",
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
  { item: "Custom website design & development", standard: "$2,200", professional: "$2,200", premium: "$2,200" },
  { item: "11 SEO service pages (rich content)", standard: "$600", professional: "$600", premium: "$600" },
  { item: "Blog (4 articles)", standard: "$300", professional: "$300", premium: "$300" },
  { item: "Contact, quote & rental forms", standard: "$200", professional: "$200", premium: "$200" },
  { item: "Schema.org / local SEO markup", standard: "$200", professional: "$200", premium: "$200" },
  { item: "Admin CRM & client management", standard: "—", professional: "$500", premium: "$500" },
  { item: "Email campaign manager (9 types)", standard: "—", professional: "$400", premium: "$400" },
  { item: "AI assistant integration (Claude)", standard: "—", professional: "$300", premium: "$300" },
  { item: "Lead Monitor", standard: "—", professional: "$200", premium: "$200" },
  { item: "Google Business Profile setup", standard: "—", professional: "$200", premium: "$200" },
  { item: "Google Ads landing page", standard: "—", professional: "—", premium: "$400" },
  { item: "2-year hosting (vs 1-year)", standard: "—", professional: "—", premium: "$400" },
  { item: "Quarterly SEO audit setup", standard: "—", professional: "—", premium: "$300" },
];

const monthlyBreakdown = [
  { item: "Vercel hosting", standard: "$20", professional: "$20", premium: "$20" },
  { item: "Domain renewal (prorated)", standard: "$2", professional: "$2", premium: "$2" },
  { item: "Security updates & maintenance", standard: "$75", professional: "$75", premium: "$75" },
  { item: "Claude API usage (AI features)", standard: "—", professional: "$25", premium: "$50" },
  { item: "Email delivery service (Resend)", standard: "—", professional: "$10", premium: "$20" },
  { item: "Monthly performance report", standard: "—", professional: "$50", premium: "$75" },
  { item: "Content creation / blog post", standard: "—", professional: "—", premium: "$150" },
  { item: "SEO monitoring & reporting", standard: "—", professional: "—", premium: "$100" },
  { item: "Agency fee", standard: "$78", professional: "$93", premium: "$33" },
];

export default function ProposalPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d1444] to-[#1a237e] text-white rounded-2xl p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-1">Website Proposal</p>
            <h1 className="text-3xl font-black mb-1">Alfieri Brothers Contracting</h1>
            <p className="text-blue-200">Cleveland, OH · Excavation & Contracting · alfieribrothers.com</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-blue-300 text-xs">Prepared by</p>
            <p className="font-bold text-white">KMD Global</p>
            <p className="text-blue-300 text-xs mt-1">June 2026</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Services", value: "11 service pages" },
            { label: "SEO Articles", value: "4 blog posts" },
            { label: "Admin Features", value: "CRM + AI + Campaigns" },
            { label: "Market", value: "Cleveland, OH" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl px-4 py-3">
              <p className="text-blue-300 text-xs">{s.label}</p>
              <p className="text-white font-bold text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing tiers */}
      <div>
        <h2 className="text-xl font-black text-[#0d1444] mb-4">Pricing Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div key={tier.name} className="border-2 border-gray-200 rounded-2xl overflow-hidden relative bg-white">
              {tier.recommended && (
                <div className="absolute top-3 right-3 bg-[#1a237e] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <div className={`${tier.headerColor} text-white p-5`}>
                <p className="font-bold text-sm uppercase tracking-wider opacity-80">{tier.name}</p>
                <p className="text-4xl font-black mt-1">${tier.price.toLocaleString()}</p>
                <p className="text-white/70 text-sm">one-time · then ${tier.monthly}/mo</p>
              </div>
              <div className="p-5">
                <ul className="space-y-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400 line-through">
                      <span className="mt-0.5 shrink-0">✗</span>
                      {f}
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
        <h2 className="text-xl font-black text-[#0d1444] mb-4">Detailed Line Items — One-Time Build</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                <th className="text-center px-3 py-3 font-semibold text-gray-700">Standard</th>
                <th className="text-center px-3 py-3 font-semibold text-[#1a237e]">Professional</th>
                <th className="text-center px-3 py-3 font-semibold text-purple-700">Premium</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 text-gray-700">{row.item}</td>
                  <td className="text-center px-3 py-3 text-gray-500">{row.standard}</td>
                  <td className="text-center px-3 py-3 font-semibold text-[#1a237e]">{row.professional}</td>
                  <td className="text-center px-3 py-3 font-semibold text-purple-700">{row.premium}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 bg-gray-100 font-bold">
                <td className="px-5 py-3 text-gray-800">Total</td>
                <td className="text-center px-3 py-3 text-gray-800">$3,500</td>
                <td className="text-center px-3 py-3 text-[#1a237e]">$5,000</td>
                <td className="text-center px-3 py-3 text-purple-700">$7,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly breakdown */}
      <div>
        <h2 className="text-xl font-black text-[#0d1444] mb-4">Monthly Retainer Breakdown</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                <th className="text-center px-3 py-3 font-semibold text-gray-700">Standard</th>
                <th className="text-center px-3 py-3 font-semibold text-[#1a237e]">Professional</th>
                <th className="text-center px-3 py-3 font-semibold text-purple-700">Premium</th>
              </tr>
            </thead>
            <tbody>
              {monthlyBreakdown.map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 text-gray-700">{row.item}</td>
                  <td className="text-center px-3 py-3 text-gray-500">{row.standard}</td>
                  <td className="text-center px-3 py-3 text-[#1a237e]">{row.professional}</td>
                  <td className="text-center px-3 py-3 text-purple-700">{row.premium}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200 bg-gray-100 font-bold">
                <td className="px-5 py-3 text-gray-800">Monthly Total</td>
                <td className="text-center px-3 py-3 text-gray-800">$175/mo</td>
                <td className="text-center px-3 py-3 text-[#1a237e]">$275/mo</td>
                <td className="text-center px-3 py-3 text-purple-700">$450/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Market context */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-[#0d1444] mb-3">📍 Cleveland Market Context</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Average Cleveland-area contractor website: $1,500–$4,000 (basic, no admin)</li>
          <li>• This proposal includes significantly more: admin portal, CRM, AI integration, campaign manager, lead monitor</li>
          <li>• Monthly retainer is below the $300–$800/month typical for Cleveland digital agencies</li>
          <li>• Alfieri&apos;s current site has no SEO content — improvement potential is very high with this proposal</li>
          <li>• Snow removal alone (commercial clients) is worth 10–20x the monthly retainer per signed account</li>
          <li>• POS violation season (spring) generates significant lead volume — the Lead Monitor directly addresses this</li>
        </ul>
      </div>

      {/* What's next */}
      <div className="bg-[#0d1444] text-white rounded-xl p-6">
        <h3 className="font-bold mb-3">🚀 What Gets Connected at Launch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { icon: "✉️", title: "Email Delivery", desc: "Connect Resend or SendGrid — contact form and campaigns send real emails (~15 min setup)" },
            { icon: "⭐", title: "Google Reviews", desc: "Link your Google Business Profile to pull real reviews automatically onto the site" },
            { icon: "🗄️", title: "Cloud Database", desc: "Upgrade client CRM from browser storage to cloud — enables multi-device access and reporting" },
            { icon: "🤖", title: "AI Assistant", desc: "Already live using Claude API — draft emails, quotes, and review responses instantly" },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold text-white mb-1">{item.icon} {item.title}</p>
              <p className="text-blue-300 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
