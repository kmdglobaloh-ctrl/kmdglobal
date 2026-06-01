"use client";

import { useState } from "react";

interface SearchSource {
  platform: string;
  icon: string;
  color: string;
  searches: { label: string; url: string; neighborhood?: string }[];
}

const LEAD_SOURCES: SearchSource[] = [
  {
    platform: "Facebook Groups",
    icon: "👥",
    color: "bg-blue-50 border-blue-200",
    searches: [
      { label: "Cleveland Home Improvement", url: "https://www.facebook.com/groups/search/results/?q=sewer+cleveland+ohio", neighborhood: "Cleveland-wide" },
      { label: "Euclid/South Euclid Community", url: "https://www.facebook.com/groups/search/results/?q=plumber+sewer+euclid+ohio", neighborhood: "East Side" },
      { label: "Mentor OH Community", url: "https://www.facebook.com/groups/search/results/?q=excavation+contractor+mentor+ohio", neighborhood: "Mentor" },
      { label: "Willoughby Locals", url: "https://www.facebook.com/groups/search/results/?q=sewer+waterproofing+willoughby+ohio", neighborhood: "Willoughby" },
      { label: "Cleveland Heights/University Heights", url: "https://www.facebook.com/groups/search/results/?q=basement+waterproofing+cleveland+heights", neighborhood: "Heights" },
    ],
  },
  {
    platform: "Nextdoor",
    icon: "🏘️",
    color: "bg-green-50 border-green-200",
    searches: [
      { label: "Search: sewer repair near me", url: "https://nextdoor.com/search/?query=sewer+repair", neighborhood: "All Areas" },
      { label: "Search: basement waterproofing", url: "https://nextdoor.com/search/?query=basement+waterproofing", neighborhood: "All Areas" },
      { label: "Search: excavation contractor", url: "https://nextdoor.com/search/?query=excavation+contractor+cleveland", neighborhood: "Cleveland" },
      { label: "Search: snow removal Cleveland", url: "https://nextdoor.com/search/?query=snow+removal+commercial", neighborhood: "All Areas" },
      { label: "Search: dye test POS violation", url: "https://nextdoor.com/search/?query=dye+test+POS+violation+Ohio", neighborhood: "Cuyahoga" },
    ],
  },
  {
    platform: "Craigslist Cleveland",
    icon: "📋",
    color: "bg-orange-50 border-orange-200",
    searches: [
      { label: "Wanted: Sewer / Plumbing", url: "https://cleveland.craigslist.org/search/sha?query=sewer", neighborhood: "Cleveland" },
      { label: "Wanted: Excavation / Grading", url: "https://cleveland.craigslist.org/search/sha?query=excavation", neighborhood: "Cleveland" },
      { label: "Wanted: Basement Waterproofing", url: "https://cleveland.craigslist.org/search/sha?query=basement+waterproofing", neighborhood: "Cleveland" },
      { label: "Wanted: Demolition", url: "https://cleveland.craigslist.org/search/sha?query=demolition", neighborhood: "Cleveland" },
      { label: "Gigs: General Labor / Contractor", url: "https://cleveland.craigslist.org/search/lbg?query=contractor", neighborhood: "Cleveland" },
    ],
  },
  {
    platform: "Google Search (Local)",
    icon: "🔍",
    color: "bg-yellow-50 border-yellow-200",
    searches: [
      { label: "\"need sewer repair\" Cleveland", url: "https://www.google.com/search?q=%22need+sewer+repair%22+cleveland+ohio+site%3Afacebook.com+OR+site%3Areddit.com", neighborhood: "Cleveland" },
      { label: "\"looking for excavation\" Cleveland", url: "https://www.google.com/search?q=%22looking+for+excavation%22+%22cleveland%22+OR+%22euclid%22+OR+%22mentor%22", neighborhood: "NE Ohio" },
      { label: "Cleveland reddit home improvement", url: "https://www.reddit.com/r/Cleveland/search/?q=sewer+waterproofing+contractor", neighborhood: "Reddit" },
      { label: "\"POS violation\" Cleveland 2024", url: "https://www.google.com/search?q=%22POS+violation%22+%22Cleveland%22+OR+%22Cuyahoga%22+2024+2025", neighborhood: "Cuyahoga" },
    ],
  },
  {
    platform: "Local Forums & Sites",
    icon: "🗞️",
    color: "bg-purple-50 border-purple-200",
    searches: [
      { label: "Cleveland.com: Looking for contractors", url: "https://connect.cleveland.com/search/?q=sewer+contractor", neighborhood: "Cleveland" },
      { label: "Ring Community (sewer/flooding)", url: "https://community.ring.com/search?query=sewer+flooding+cleveland", neighborhood: "All Areas" },
      { label: "Angi Leads (login required)", url: "https://pro.angi.com/leads", neighborhood: "All Areas" },
      { label: "HomeAdvisor Pro Leads", url: "https://www.homeadvisor.com/business-center/", neighborhood: "All Areas" },
    ],
  },
];

// Cleveland neighborhoods with typical sewer/excavation demand
const CLEVELAND_HOTSPOTS = [
  { name: "Euclid", county: "Cuyahoga", lat: 41.5931, lng: -81.5268, note: "High sewer work demand — aging 1950s infrastructure", hotness: 5 },
  { name: "Cleveland (Collinwood)", county: "Cuyahoga", lat: 41.5617, lng: -81.5529, note: "Older housing stock, frequent sewer issues", hotness: 5 },
  { name: "South Euclid", county: "Cuyahoga", lat: 41.5245, lng: -81.5185, note: "Active POS violation area, backflow work", hotness: 4 },
  { name: "Cleveland Heights", county: "Cuyahoga", lat: 41.5120, lng: -81.5570, note: "Basement waterproofing high demand", hotness: 4 },
  { name: "Mentor", county: "Lake", lat: 41.6661, lng: -81.3395, note: "New construction excavation, water lines", hotness: 4 },
  { name: "Willoughby", county: "Lake", lat: 41.6401, lng: -81.4074, note: "Growing area, new home excavation", hotness: 4 },
  { name: "Lyndhurst", county: "Cuyahoga", lat: 41.5197, lng: -81.4971, note: "Snow removal contracts available", hotness: 3 },
  { name: "Wickliffe", county: "Lake", lat: 41.6043, lng: -81.4657, note: "Grading and drainage work", hotness: 3 },
  { name: "Richmond Heights", county: "Cuyahoga", lat: 41.5534, lng: -81.5018, note: "Dye testing required many areas", hotness: 3 },
];

export default function LeadMonitorPage() {
  const [activeSource, setActiveSource] = useState<string>("Facebook Groups");

  const active = LEAD_SOURCES.find((s) => s.platform === activeSource)!;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-black text-[#0d1444]">Lead Monitor</h1>
        <p className="text-gray-500 text-sm">Find people actively looking for your services on local platforms</p>
      </div>

      {/* How to use */}
      <div className="bg-[#f0f4ff] rounded-xl p-5 border border-blue-100">
        <p className="font-bold text-[#0d1444] mb-1">💡 How to Use This</p>
        <p className="text-gray-600 text-sm">
          Click any search link below to open that platform and search for people looking for your services. Check these 2–3 times per week for best results. When you find a lead, add them to your <a href="/alfieri/admin/clients" className="text-[#1a237e] hover:underline font-semibold">Clients list</a>.
        </p>
      </div>

      {/* Platform tabs */}
      <div className="flex flex-wrap gap-2">
        {LEAD_SOURCES.map((s) => (
          <button
            key={s.platform}
            onClick={() => setActiveSource(s.platform)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${activeSource === s.platform ? "bg-[#1a237e] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {s.icon} {s.platform}
          </button>
        ))}
      </div>

      {/* Search links */}
      <div className={`rounded-xl border p-5 ${active.color}`}>
        <h2 className="font-bold text-[#0d1444] mb-4">{active.icon} {active.platform} — Search Links</h2>
        <div className="space-y-3">
          {active.searches.map((search) => (
            <div key={search.label} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
              <div>
                <p className="font-semibold text-[#0d1444] text-sm">{search.label}</p>
                {search.neighborhood && <p className="text-gray-500 text-xs mt-0.5">📍 {search.neighborhood}</p>}
              </div>
              <a
                href={search.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a237e] hover:bg-blue-900 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap ml-4"
              >
                Search Now →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Cleveland hotspot map */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="font-bold text-[#0d1444] mb-2">🗺️ High-Demand Areas</h2>
        <p className="text-gray-500 text-sm mb-5">Cleveland neighborhoods with highest demand for your services</p>
        <div className="space-y-3">
          {CLEVELAND_HOTSPOTS.map((spot) => (
            <div key={spot.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`w-2 h-4 rounded-sm ${i < spot.hotness ? "bg-[#cc2222]" : "bg-gray-200"}`} />
                ))}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0d1444] text-sm">{spot.name}</span>
                  <span className="text-xs text-gray-500">{spot.county} County</span>
                </div>
                <p className="text-gray-600 text-xs">{spot.note}</p>
              </div>
              <a
                href={`https://nextdoor.com/search/?query=contractor+${spot.name.toLowerCase().replace(" ", "+")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1a237e] hover:underline whitespace-nowrap"
              >
                Search Nextdoor →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-[#0d1444] text-white rounded-xl p-5">
        <h2 className="font-bold mb-3">📣 Lead Generation Tips</h2>
        <ul className="space-y-2 text-sm text-blue-200">
          <li>• Respond to posts quickly — contractors who respond within the hour win most residential jobs</li>
          <li>• In Facebook groups, offer a free estimate in the comments, then DM with details</li>
          <li>• On NextDoor, your profile appears with your neighborhood — make sure it's set to Collinwood/North Shore</li>
          <li>• POS violation searches spike in spring (real estate season) — check daily March–June</li>
          <li>• Snow removal contracts are booked in October — run outreach August–September</li>
        </ul>
      </div>
    </div>
  );
}
