import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, PHONE, PHONE_HREF, YEARS_IN_BUSINESS, GOOGLE_RATING, REVIEW_COUNT } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY_NAME} — ${YEARS_IN_BUSINESS}+ years serving Chagrin Falls and Northeast Ohio with reliable, professional handyman and home repair services.`,
};

const VALUES = [
  {
    icon: "🕐",
    title: "We Show Up On Time",
    desc: "We give you a precise window, not a 4-hour guessing game. If something changes, we call you first.",
  },
  {
    icon: "💬",
    title: "Transparent Pricing",
    desc: "We quote before we start. No hidden fees, no surprises on the invoice.",
  },
  {
    icon: "🔧",
    title: "We Fix It Right",
    desc: "If something isn't right, we come back and make it right — at no additional cost. That's our guarantee.",
  },
  {
    icon: "🏠",
    title: "We Treat Your Home With Respect",
    desc: "Shoe covers, drop cloths, cleanup — we leave your home as clean as we found it. Often cleaner.",
  },
];

const CREDENTIALS = [
  "Ohio Home Improvement Contractor License",
  "General Liability Insurance",
  "Workers Compensation Coverage",
  "Background-Checked Technicians",
  "Member, National Association of the Remodeling Industry",
  "BBB Accredited Business (A+ Rating)",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About {COMPANY_NAME}</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            {YEARS_IN_BUSINESS}+ years of reliable home repair and maintenance in Chagrin Falls and surrounding communities.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ProHandy Services started in a garage in Chagrin Falls with a pickup truck,
                  a solid set of tools, and a simple belief: homeowners deserve a handyman who
                  actually shows up when they say they will.
                </p>
                <p>
                  After {YEARS_IN_BUSINESS} years, that belief hasn&apos;t changed. What has changed is
                  the size of our team, the depth of our skills, and the trust we&apos;ve built in
                  communities across Northeast Ohio. We&apos;ve completed thousands of jobs — from
                  quick afternoon fixes to multi-day projects — and every single one has been
                  backed by our satisfaction guarantee.
                </p>
                <p>
                  We hire only experienced, background-checked technicians who share our commitment
                  to quality. When you book with ProHandy, you know you&apos;re getting a professional
                  who takes pride in their work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: `${YEARS_IN_BUSINESS}+`, label: "Years in Business" },
                { number: "3,400+", label: "Jobs Completed" },
                { number: `${GOOGLE_RATING}★`, label: "Google Rating" },
                { number: `${REVIEW_COUNT}+`, label: "5-Star Reviews" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100"
                >
                  <p className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four commitments we make to every customer, on every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Licensed, Bonded & Insured
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hiring an unlicensed contractor puts your home and your wallet at risk. With
                ProHandy Services, you can verify our credentials, trust our background-checked
                team, and know that every project is fully covered.
              </p>
              <ul className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Satisfaction Guarantee</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                If you&apos;re not completely satisfied with any work we perform, tell us within
                7 days and we&apos;ll return to correct it at no charge. No arguments. No hassle.
                That&apos;s our promise.
              </p>
              <div className="border-t border-blue-800 pt-6">
                <p className="text-blue-200 text-sm mb-4">
                  Ready to experience the ProHandy difference?
                </p>
                <div className="flex gap-3 flex-col sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Call {PHONE}
                  </a>
                  <Link
                    href="/handyman/quote"
                    className="flex-1 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 rounded-lg transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
