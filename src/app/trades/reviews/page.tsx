import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import type { Metadata } from "next";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: "Reviews",
  description: `See what ${config.company.addressCity} homeowners say about ${config.company.name}. Honest reviews from real customers.`,
};

const REVIEWS = [
  { name: "Tom & Sarah K.", location: "Cleveland, OH", service: "Kitchen Remodeling", rating: 5, date: "May 2026", text: "We couldn't be happier with our kitchen remodel. The crew was professional, showed up on time every day, and the quality of work exceeded our expectations. The project came in on budget and they kept us informed every step of the way." },
  { name: "Brenda S.", location: "Mentor, OH", service: "Roofing", rating: 5, date: "April 2026", text: "After the hailstorm in March I was dreading the whole insurance and roofing process. These guys made it easy. They worked directly with my insurance adjuster and the new roof looks fantastic. Highly recommend." },
  { name: "Nancy G.", location: "Parma, OH", service: "Windows & Doors", rating: 5, date: "March 2026", text: "Had 12 windows replaced and the difference is night and day — no more drafts and our heating bill dropped noticeably. The crew was in and out in two days and left the house spotless." },
  { name: "Gina P.", location: "Solon, OH", service: "Painting", rating: 4, date: "April 2026", text: "Great job on the whole-house interior repaint. Very clean work, they patched a few drywall cracks while they were at it. Minor scheduling delay but they communicated well. Would hire again." },
  { name: "Dave H.", location: "Lakewood, OH", service: "General Contracting", rating: 5, date: "May 2026", text: "They converted our detached garage into a home office. The finished product looks like it was always part of the house. Came in $200 under budget — I didn't think that was possible." },
  { name: "Mark R.", location: "Parma, OH", service: "Bathroom Remodeling", rating: 5, date: "May 2026", text: "Master bath renovation turned out beautiful. Walk-in tile shower is exactly what we wanted. Mike was great to work with and kept us updated daily. Looking forward to doing the second bath next year." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <span key={i} className={i <= count ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const { brand, company } = config;
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-2">⭐</div>
          <h1 className="text-4xl font-black mb-2">{avgRating} out of 5</h1>
          <p className="text-lg opacity-80">Based on {REVIEWS.length} reviews from {company.addressCity}-area homeowners</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Demo note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 mb-10">
          <span className="font-bold">⭐ Demo mode:</span> These are sample reviews. Connect the Google Business Profile API to pull real reviews automatically.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-black text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">📍 {review.location}</p>
                </div>
                <div className="text-right">
                  <Stars count={review.rating} />
                  <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
                </div>
              </div>
              <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full text-white mb-3" style={{ backgroundColor: brand.secondary }}>
                {review.service}
              </span>
              <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border-2 border-dashed border-gray-300">
          <div className="text-4xl mb-3">⭐</div>
          <h2 className="text-xl font-black text-gray-900 mb-2">Happy with our work?</h2>
          <p className="text-gray-600 text-sm mb-4">Leave us a Google review — it helps other homeowners find reliable contractors.</p>
          <a href={`https://www.google.com/search?q=${encodeURIComponent(company.name + " " + company.addressCity)}`}
            target="_blank" rel="noopener noreferrer"
            className="text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90 inline-block"
            style={{ backgroundColor: brand.primary }}>
            Leave a Google Review →
          </a>
        </div>
      </div>
    </div>
  );
}
