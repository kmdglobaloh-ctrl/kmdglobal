import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import type { Metadata } from "next";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: `Browse completed projects by ${config.company.name} in ${config.company.addressCity}. See our workmanship firsthand.`,
};

const GALLERY_ITEMS = [
  { id: 1, title: "Kitchen Full Gut Remodel", service: "Kitchen Remodeling", location: "Cleveland, OH", desc: "Complete kitchen transformation — new cabinets, quartz countertops, subway tile backsplash, and hardwood floors.", emoji: "🍳" },
  { id: 2, title: "Master Bath Renovation", service: "Bathroom Remodeling", location: "Parma, OH", desc: "Walk-in tiled shower with frameless glass, freestanding soaking tub, and custom double vanity.", emoji: "🚿" },
  { id: 3, title: "Finished Basement Suite", service: "Basement Finishing", location: "Strongsville, OH", desc: "800 sq ft basement converted to a home theater, wet bar, and guest bedroom with egress window.", emoji: "🏠" },
  { id: 4, title: "Second-Story Addition", service: "Additions", location: "Lakewood, OH", desc: "Full second-story addition adding 1,200 sq ft — 3 bedrooms and 2 baths over existing footprint.", emoji: "📐" },
  { id: 5, title: "Composite Deck Build", service: "Decks & Patios", location: "Mentor, OH", desc: "16×24 composite deck with built-in seating, pergola, and outdoor lighting.", emoji: "🌿" },
  { id: 6, title: "Full Roof Replacement", service: "Roofing", location: "Willoughby, OH", desc: "Complete tear-off and replacement with architectural shingles. New flashing, ridge vent, and gutters.", emoji: "🏚️" },
  { id: 7, title: "Whole-Home Window Replacement", service: "Windows & Doors", location: "Euclid, OH", desc: "14 energy-efficient double-hung windows replaced. Noticeable difference in heating bills the first winter.", emoji: "🪟" },
  { id: 8, title: "Fiber Cement Siding", service: "Siding", location: "Solon, OH", desc: "Full exterior siding replacement with James Hardie fiber cement planks. 50-year warranty.", emoji: "🪵" },
  { id: 9, title: "Interior & Exterior Paint", service: "Painting", location: "Westlake, OH", desc: "Full interior repaint (4 bed, 2.5 bath) plus exterior trim and shutters.", emoji: "🎨" },
];

export default function GalleryPage() {
  const { brand, company } = config;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Project Gallery</h1>
          <p className="text-lg opacity-80">A sample of completed projects across {company.addressCity} and surrounding areas.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 mb-10">
          <span className="font-bold">📸 Demo mode:</span> Replace these placeholder cards with real project photos. Each card links to the corresponding service page.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group">
              {/* Placeholder image */}
              <div className="h-48 flex items-center justify-center text-6xl" style={{ backgroundColor: `${brand.primary}10` }}>
                {item.emoji}
              </div>
              <div className="p-5">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: brand.secondary }}>{item.service}</span>
                <h3 className="font-black text-gray-900 mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-2">📍 {item.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Like What You See?</h2>
          <p className="text-gray-600 mb-6">Get a free estimate for your project. We&apos;d love to add your home to our gallery.</p>
          <Link href={`${BASE}/quote`} className="text-white font-bold px-8 py-3 rounded-lg text-sm transition-opacity hover:opacity-90 inline-block"
            style={{ backgroundColor: brand.primary }}>
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
