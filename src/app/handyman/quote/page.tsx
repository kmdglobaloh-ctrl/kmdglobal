import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, PHONE, PHONE_HREF } from "@/lib/handyman/data";
import { QuoteForm } from "@/components/handyman/quote-form";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: `Request a free, no-obligation quote from ${COMPANY_NAME}. Describe your project, upload photos, and get a response within 2 hours.`,
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Get a Free Quote</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Tell us about your project. We&apos;ll respond within 2 hours with a clear, upfront price.
            No pressure, no commitment.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            {[
              "Free & no-obligation",
              "Response within 2 hours",
              "Upfront pricing — no surprises",
              "Most jobs scheduled within 48 hours",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-blue-200">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Prefer to call?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We&apos;re always happy to take your call — no hold times, no phone trees.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {PHONE}
                </a>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                <h3 className="font-bold text-gray-900">What happens next?</h3>
                {[
                  { step: "1", text: "We review your request and photos" },
                  { step: "2", text: "We call or email with a firm quote" },
                  { step: "3", text: "You approve, we schedule & show up" },
                  { step: "4", text: "Job done — you pay only after satisfied" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-900 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-800 mb-1">🎖️ Senior & Veteran Discount</p>
                <p className="text-sm text-amber-700">
                  Mention your status in the form and we&apos;ll apply your 10% discount automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
