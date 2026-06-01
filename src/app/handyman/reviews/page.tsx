import type { Metadata } from "next";
import Link from "next/link";
import { TESTIMONIALS, GOOGLE_RATING, REVIEW_COUNT, PHONE_HREF, COMPANY_NAME } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description: `Read what customers say about ${COMPANY_NAME}. ${GOOGLE_RATING}-star average from ${REVIEW_COUNT}+ Google reviews in Chagrin Falls and Northeast Ohio.`,
};

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const cls = size === "lg" ? "w-7 h-7" : size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`${cls} ${i <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Customer Reviews</h1>
          <div className="flex items-center gap-4 mt-4">
            <StarRating rating={5} size="lg" />
            <div>
              <span className="text-3xl font-bold">{GOOGLE_RATING}</span>
              <span className="text-blue-200 text-xl"> / 5</span>
              <p className="text-blue-300 text-sm">Based on {REVIEW_COUNT}+ Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary bar */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "5-star reviews", pct: 94 },
              { label: "4-star reviews", pct: 5 },
              { label: "3-star or below", pct: 1 },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3 min-w-64">
                <span className="text-sm text-gray-600 w-36 shrink-0">{row.label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-400 h-2 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 w-8">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <StarRating rating={t.rating} />
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-1 rounded">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Google link */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-bold text-gray-900 text-lg">See all {REVIEW_COUNT}+ reviews on Google</span>
              </div>
              <p className="text-gray-500 text-sm">
                Search &ldquo;ProHandy Services Chagrin Falls&rdquo; on Google Maps to read and leave reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Had a great experience? Tell your neighbors.
          </h2>
          <p className="text-gray-600 mb-6">
            Google reviews help homeowners in your area find trustworthy local services.
            We genuinely appreciate every review.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book a Service
            </a>
            <Link
              href="/handyman/contact"
              className="flex items-center justify-center border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
