import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, COMPANY_NAME } from "@/lib/handyman/data";
import { ContactForm } from "@/components/handyman/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY_NAME} for handyman and home repair services in Chagrin Falls, OH. Call, email, or submit a message — we respond within 2 hours.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Call, text, or send a message. We respond within 2 hours during business hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone / Text</p>
                      <a href={PHONE_HREF} className="text-blue-800 hover:text-blue-600 font-medium transition-colors">
                        {PHONE}
                      </a>
                      <p className="text-gray-500 text-sm mt-0.5">Calls and texts welcome</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-blue-800 hover:text-blue-600 font-medium transition-colors">
                        {EMAIL}
                      </a>
                      <p className="text-gray-500 text-sm mt-0.5">We reply within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-700">{ADDRESS}</p>
                      <Link href="/handyman/service-areas" className="text-blue-800 hover:text-blue-600 text-sm transition-colors">
                        View all service areas →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {[
                    { days: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
                    { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
                    { days: "Sunday", hours: "Closed (emergencies only)" },
                  ].map((row) => (
                    <div key={row.days} className="flex justify-between text-sm">
                      <span className="text-gray-600">{row.days}</span>
                      <span className="font-medium text-gray-900">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                  <span>⚡</span>
                  <span>Emergency service available — call anytime</span>
                </div>
              </div>

              <div className="bg-blue-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Prefer a full quote request?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Use our detailed quote form to describe your project, upload photos, and
                  get a faster, more accurate estimate.
                </p>
                <Link
                  href="/handyman/quote"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Request a Quote →
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
