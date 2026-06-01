import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, PHONE, PHONE_HREF, TESTIMONIALS } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `See what Cleveland homeowners and businesses say about ${COMPANY} Brothers Contracting and Excavation. Trusted for over 30 years.`,
};

export default function ReviewsPage() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Reviews
      </p>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-[#0d1444] mb-3">Customer Reviews</h1>
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl font-black text-[#1a237e]">{avg}</span>
          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-2xl ${i < Math.round(Number(avg)) ? "text-yellow-400" : "text-gray-300"}`}>★</span>
              ))}
            </div>
            <p className="text-gray-500 text-sm">Based on {TESTIMONIALS.length} reviews</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-5">"{t.text}"</p>
            <div className="border-t border-gray-100 pt-4 flex items-start justify-between">
              <div>
                <p className="font-bold text-[#0d1444]">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
              <span className="text-xs bg-[#f0f4ff] text-[#1a237e] px-2 py-1 rounded-full font-semibold">{t.service}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a review */}
      <div className="bg-[#0d1444] text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black mb-2">Had Work Done By Us?</h2>
        <p className="text-blue-300 mb-6">
          We'd love to hear about your experience. Reviews help other Cleveland homeowners find trustworthy contractors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={PHONE_HREF} className="bg-[#cc2222] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            📞 Call {PHONE}
          </a>
          <Link href="/alfieri/contact" className="border border-white hover:bg-white hover:text-[#0d1444] text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
