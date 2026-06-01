"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Sewer", "Excavation", "Demolition", "Waterproofing", "Snow Removal"] as const;
type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  category: Exclude<Category, "All">;
  title: string;
  location: string;
  desc: string;
  emoji: string;
}

const GALLERY: GalleryItem[] = [
  { category: "Sewer", title: "Sewer Lateral Replacement", location: "Cleveland, OH", desc: "Full lateral replacement on a 1940s home with collapsed clay pipe. New 6\" PVC installed.", emoji: "🔩" },
  { category: "Sewer", title: "Emergency Sewer Repair", location: "Euclid, OH", desc: "Emergency same-day response for a backup caused by root intrusion. Camera inspection and spot repair completed.", emoji: "🚨" },
  { category: "Sewer", title: "New Sewer Installation", location: "Mentor, OH", desc: "Full sewer lateral installation for new construction project, connected to NEORSD main.", emoji: "🔧" },
  { category: "Excavation", title: "New Home Excavation", location: "Willoughby, OH", desc: "Full foundation excavation for a new single-family home. Site prep, grading, and utility rough-ins.", emoji: "🏗️" },
  { category: "Excavation", title: "Basement Excavation", location: "South Euclid, OH", desc: "Excavation to lower basement floor and install new drainage system.", emoji: "⛏️" },
  { category: "Excavation", title: "Site Grading", location: "Cleveland Heights, OH", desc: "Re-grading residential lot to correct drainage away from foundation after persistent flooding.", emoji: "🌱" },
  { category: "Demolition", title: "House Demolition", location: "Cleveland, OH", desc: "Full residential demolition, debris removal, site leveling, and backfill for redevelopment project.", emoji: "🏚️" },
  { category: "Demolition", title: "Garage Demolition", location: "Lyndhurst, OH", desc: "Detached garage removal and slab break-out for new ADU construction.", emoji: "🔨" },
  { category: "Waterproofing", title: "Basement Waterproofing", location: "Wickliffe, OH", desc: "Interior drainage system, sump pump installation, and exterior grading correction.", emoji: "💧" },
  { category: "Waterproofing", title: "Foundation Crack Repair", location: "Richmond Heights, OH", desc: "Exterior excavation and membrane application to seal active foundation crack.", emoji: "🛡️" },
  { category: "Snow Removal", title: "Commercial Lot Plowing", location: "Willoughby, OH", desc: "Seasonal contract for retail shopping center — plowing, salting, and calcium application.", emoji: "❄️" },
  { category: "Snow Removal", title: "Medical Facility", location: "Mentor, OH", desc: "24/7 on-call snow removal for a medical office park. Priority cleared before 6 AM.", emoji: "🌨️" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Gallery
      </p>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-[#0d1444] mb-3">Project Gallery</h1>
        <p className="text-gray-600">A sample of our work across Northeast Ohio.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-[#1a237e] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {filtered.map((item) => (
          <div key={item.title + item.location} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e8ecf8] h-40 flex items-center justify-center">
              <span className="text-6xl">{item.emoji}</span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-[#0d1444]">{item.title}</h3>
                <span className="text-xs bg-[#f0f4ff] text-[#1a237e] px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2">{item.category}</span>
              </div>
              <p className="text-[#cc2222] text-xs font-semibold mb-2">📍 {item.location}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0d1444] text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black mb-2">Want to See More?</h2>
        <p className="text-blue-300 mb-5">Call us to discuss your project — we have decades of completed work across Northeast Ohio.</p>
        <Link href="/alfieri/quote" className="inline-block bg-[#cc2222] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
          Get a Free Estimate
        </Link>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
