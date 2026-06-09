"use client";

import { useState } from "react";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

interface SearchSource {
  platform: string;
  icon: string;
  colorClass: string;
  searches: { label: string; url: string; area?: string }[];
}

function buildLeadSources(config: typeof TRADES_DEMO_CONFIG): SearchSource[] {
  const trade = config.trade.singular;
  const areas = config.serviceAreas.map((a) => a.name);
  const city = config.company.addressCity;
  const state = config.company.addressState;
  const services = config.services.slice(0, 3).map((s) => s.name.toLowerCase());
  const serviceQuery = services[0]?.replace(/\s+/g, "+") ?? "contractor";
  const cityQuery = city.toLowerCase().replace(/\s+/g, "+");

  return [
    {
      platform: "Facebook Groups",
      icon: "👥",
      colorClass: "bg-blue-50 border-blue-200",
      searches: [
        { label: `${city} Home Improvement`, url: `https://www.facebook.com/groups/search/results/?q=${serviceQuery}+${cityQuery}+${state.toLowerCase()}`, area: `${city} area` },
        ...areas.slice(0, 4).map((a) => ({
          label: `${a} Community Group`,
          url: `https://www.facebook.com/groups/search/results/?q=${serviceQuery}+${a.toLowerCase().replace(/\s+/g, "+")}`,
          area: a,
        })),
      ],
    },
    {
      platform: "Nextdoor",
      icon: "🏘️",
      colorClass: "bg-green-50 border-green-200",
      searches: [
        { label: `Search: ${services[0] ?? "contractor"} near me`, url: `https://nextdoor.com/search/?query=${serviceQuery}`, area: "All Areas" },
        { label: `Search: ${trade.toLowerCase()} ${city}`, url: `https://nextdoor.com/search/?query=${trade.toLowerCase().replace(/\s+/g, "+")}+${cityQuery}`, area: city },
        { label: `Search: ${services[1] ?? "home improvement"}`, url: `https://nextdoor.com/search/?query=${services[1]?.replace(/\s+/g, "+") ?? "home+improvement"}`, area: "All Areas" },
        { label: "Search: free estimate home", url: `https://nextdoor.com/search/?query=free+estimate+${cityQuery}`, area: "All Areas" },
      ],
    },
    {
      platform: "Craigslist",
      icon: "📋",
      colorClass: "bg-orange-50 border-orange-200",
      searches: [
        { label: `Wanted: ${services[0] ?? "contractor"}`, url: `https://craigslist.org/search/sha?query=${serviceQuery}`, area: city },
        { label: `Wanted: ${services[1] ?? "home improvement"}`, url: `https://craigslist.org/search/sha?query=${services[1]?.replace(/\s+/g, "+") ?? "home+improvement"}`, area: city },
        { label: "Wanted: General Contractor", url: `https://craigslist.org/search/sha?query=contractor+${cityQuery}`, area: city },
        { label: "Gigs: Labor / Construction", url: `https://craigslist.org/search/lbg?query=contractor`, area: city },
      ],
    },
    {
      platform: "Google Search",
      icon: "🔍",
      colorClass: "bg-yellow-50 border-yellow-200",
      searches: [
        { label: `"need ${services[0] ?? "contractor"}" ${city}`, url: `https://www.google.com/search?q=%22need+${serviceQuery}%22+${cityQuery}+${state.toLowerCase()}+site%3Afacebook.com+OR+site%3Areddit.com`, area: city },
        { label: `"looking for ${trade.toLowerCase()}" ${state}`, url: `https://www.google.com/search?q=%22looking+for+${trade.toLowerCase().replace(/\s+/g, "+")}%22+%22${cityQuery}%22`, area: state },
        { label: `${city} reddit home improvement`, url: `https://www.reddit.com/search/?q=${serviceQuery}+${cityQuery}`, area: "Reddit" },
        { label: `${trade} reviews ${city} 2025`, url: `https://www.google.com/search?q=${trade.toLowerCase().replace(/\s+/g, "+")}+reviews+${cityQuery}+2025`, area: "Google" },
      ],
    },
    {
      platform: "Lead Platforms",
      icon: "🗞️",
      colorClass: "bg-purple-50 border-purple-200",
      searches: [
        { label: "Angi Leads (login required)", url: "https://pro.angi.com/leads", area: "All Areas" },
        { label: "HomeAdvisor Pro Leads", url: "https://www.homeadvisor.com/business-center/", area: "All Areas" },
        { label: "Thumbtack Pro Dashboard", url: "https://www.thumbtack.com/pro/", area: "All Areas" },
        { label: "Houzz Pro Leads", url: "https://www.houzz.com/for-pros/", area: "All Areas" },
      ],
    },
  ];
}

export default function TradesLeadsPage() {
  const [activeSource, setActiveSource] = useState("Facebook Groups");
  const sources = buildLeadSources(config);
  const active = sources.find((s) => s.platform === activeSource) ?? sources[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Lead Monitor</h1>
        <p className="text-gray-500 text-sm">Find people actively looking for {config.trade.plural.toLowerCase()} on local platforms</p>
      </div>

      <div className="rounded-xl p-5 border text-sm text-gray-600" style={{ backgroundColor: `${config.brand.primary}08`, borderColor: `${config.brand.primary}20` }}>
        <p className="font-bold text-gray-900 mb-1">💡 How to Use This</p>
        <p>Click any search link below to open that platform and search for people looking for your services. Check these 2–3 times per week for best results. When you find a lead, add them to your{" "}
          <a href="/trades/admin/clients" className="font-semibold hover:underline" style={{ color: config.brand.primary }}>Clients list</a>.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {sources.map((s) => (
          <button key={s.platform} onClick={() => setActiveSource(s.platform)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${activeSource === s.platform ? "text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            style={activeSource === s.platform ? { backgroundColor: config.brand.primary } : {}}>
            {s.icon} {s.platform}
          </button>
        ))}
      </div>

      <div className={`rounded-xl border p-5 ${active.colorClass}`}>
        <h2 className="font-bold text-gray-900 mb-4">{active.icon} {active.platform} — Search Links</h2>
        <div className="space-y-3">
          {active.searches.map((search) => (
            <div key={search.label} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
              <div>
                <p className="font-semibold text-gray-900 text-sm">{search.label}</p>
                {search.area && <p className="text-gray-500 text-xs mt-0.5">📍 {search.area}</p>}
              </div>
              <a href={search.url} target="_blank" rel="noopener noreferrer"
                className="text-xs text-white font-bold px-3 py-2 rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap ml-4"
                style={{ backgroundColor: config.brand.primary }}>
                Search Now →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Service areas demand */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-bold text-gray-900 mb-2">📍 Your Service Areas</h2>
        <p className="text-gray-500 text-sm mb-4">High-priority areas for your business</p>
        <div className="space-y-2">
          {config.serviceAreas.map((area) => (
            <div key={area.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`w-2 h-8 rounded-full ${area.highlight ? "" : "bg-gray-200"}`}
                style={area.highlight ? { backgroundColor: config.brand.secondary } : {}} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">{area.name}</span>
                  {area.county && <span className="text-xs text-gray-500">{area.county} County</span>}
                  {area.highlight && <span className="text-xs font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: config.brand.secondary }}>Priority</span>}
                </div>
                {area.note && <p className="text-gray-500 text-xs">{area.note}</p>}
              </div>
              <a href={`https://nextdoor.com/search/?query=${config.trade.singular.toLowerCase().replace(/\s+/g, "+")}+${area.name.toLowerCase().replace(/\s+/g, "+")}`}
                target="_blank" rel="noopener noreferrer"
                className="text-xs hover:underline whitespace-nowrap" style={{ color: config.brand.primary }}>
                Search Nextdoor →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white rounded-xl p-5" style={{ backgroundColor: config.brand.primary }}>
        <h2 className="font-bold mb-3">📣 Lead Generation Tips</h2>
        <ul className="space-y-2 text-sm opacity-80">
          <li>• Respond to posts quickly — contractors who respond within the hour win most residential jobs</li>
          <li>• In Facebook groups, offer a free estimate in the comments, then follow up by DM</li>
          <li>• On Nextdoor, ensure your business profile is set to the right neighborhood</li>
          <li>• Ask every happy customer for a Google review — this drives organic inbound leads</li>
          <li>• Keep your Google Business Profile updated with photos and recent project descriptions</li>
        </ul>
      </div>
    </div>
  );
}
