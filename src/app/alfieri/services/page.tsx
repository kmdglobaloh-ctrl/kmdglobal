import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, PHONE, PHONE_HREF, COMPANY } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "Excavation & Contracting Services",
  description: `${COMPANY} Brothers offers sewer services, backflow prevention, basement waterproofing, dye testing, grading, demolition, snow removal, and more across Northeast Ohio.`,
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-sm text-gray-500 mb-1">
          <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Services
        </p>
        <h1 className="text-4xl font-black text-[#0d1444] mb-3">Our Services</h1>
        <p className="text-gray-600 max-w-2xl">
          From underground sewer work to surface grading and commercial snow removal — {COMPANY} Brothers has been providing expert contracting and excavation services across Northeast Ohio since 1992.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/alfieri/services/${s.slug}`}
            className="group bg-white border border-gray-200 hover:border-[#1a237e] rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{s.emoji}</span>
                <h2 className="font-bold text-[#0d1444] group-hover:text-[#1a237e] transition-colors flex items-center gap-2">
                  {s.name}
                  {s.emergency && <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-semibold">24/7</span>}
                </h2>
              </div>
              <p className="text-[#cc2222] text-xs font-semibold mb-2">{s.tagline}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.shortDesc}</p>
              <p className="text-[#1a237e] text-sm font-semibold group-hover:underline">Full details →</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#0d1444] text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black mb-2">Not Sure What You Need?</h2>
        <p className="text-blue-300 mb-6">Call us and describe the problem — we'll tell you exactly what needs to be done and give you a free estimate.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={PHONE_HREF} className="bg-[#cc2222] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            📞 Call {PHONE}
          </a>
          <Link href="/alfieri/quote" className="border border-white hover:bg-white hover:text-[#0d1444] text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Request Free Estimate
          </Link>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
