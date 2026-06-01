import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, PHONE_HREF, PHONE } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ProHandy Services offers general repairs, painting, drywall, furniture assembly, deck repair, TV mounting, minor plumbing, and junk removal in Chagrin Falls, OH.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            From a squeaky door to a full deck rebuild — one call handles it all.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl shrink-0">{service.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-xl font-bold text-gray-900">{service.name}</h2>
                      {service.startingPrice && (
                        <span className="shrink-0 text-sm font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                          From {service.startingPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.longDesc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/handyman/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-blue-800 font-semibold text-sm hover:text-blue-600 transition-colors"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Don&apos;t see exactly what you need?
          </h2>
          <p className="text-gray-600 mb-6">
            If it needs to be fixed, built, or maintained around your home, there&apos;s a
            good chance we can help. Just give us a call and describe the job.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/handyman/quote"
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
