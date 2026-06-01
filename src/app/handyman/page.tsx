import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY_NAME,
  TAGLINE,
  PHONE,
  PHONE_HREF,
  YEARS_IN_BUSINESS,
  GOOGLE_RATING,
  REVIEW_COUNT,
  SERVICES,
  TESTIMONIALS,
  SERVICE_AREAS,
} from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — Handyman Services in Chagrin Falls, OH`,
  description: `${TAGLINE}. ProHandy Services provides expert home repair and maintenance in Chagrin Falls, Aurora, Solon, and surrounding communities. Call for a free quote.`,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HandymanHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Same-Day Service Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {TAGLINE}
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed max-w-2xl">
              From small repairs to full room makeovers — ProHandy Services has been
              keeping Chagrin Falls homes in top shape for {YEARS_IN_BUSINESS} years.
              Licensed, bonded, and backed by a satisfaction guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/handyman/quote"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-white/40 hover:border-white/60 transition-all"
              >
                Get Free Quote →
              </Link>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-blue-200">
                  <strong className="text-white">{GOOGLE_RATING}</strong> / 5 on Google ({REVIEW_COUNT} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <span className="text-green-400">✓</span>
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <span className="text-green-400">✓</span>
                {YEARS_IN_BUSINESS}+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-blue-50 border-b border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", title: "Licensed & Insured", sub: "Ohio licensed contractor" },
              { icon: "⭐", title: "4.9-Star Rated", sub: `${REVIEW_COUNT}+ Google reviews` },
              { icon: "🏆", title: `${YEARS_IN_BUSINESS}+ Years`, sub: "Serving Chagrin Falls" },
              { icon: "✅", title: "Satisfaction Guaranteed", sub: "We make it right" },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="text-3xl">{badge.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{badge.title}</p>
                  <p className="text-gray-500 text-xs">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Fix, Build & Maintain
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              One call handles it all. No job too small — we show up on time, do quality
              work, and clean up when we&apos;re done.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/handyman/services/${service.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                {service.startingPrice && (
                  <p className="text-xs text-blue-700 font-semibold">
                    Starting at {service.startingPrice}
                  </p>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/handyman/services"
              className="inline-flex items-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              As Easy as 1–2–3
            </h2>
            <p className="text-gray-600 text-lg">Get your home taken care of without the hassle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: "📞",
                title: "Call or Submit a Quote",
                desc: "Tell us what you need — by phone, form, or text. We respond within 2 hours.",
              },
              {
                step: "2",
                icon: "🗓️",
                title: "We Schedule & Show Up",
                desc: "We give you a clear time window. No 4-hour wait gaps. Our techs arrive on time.",
              },
              {
                step: "3",
                icon: "🏠",
                title: "Job Done, Home Clean",
                desc: "We do great work, answer all your questions, and clean up everything before we leave.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-3xl mb-4">
                  {item.icon}
                </div>
                <div className="inline-block bg-blue-800 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
                  Step {item.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Neighbors Say
            </h2>
            <p className="text-gray-600 text-lg">
              {GOOGLE_RATING}-star average across {REVIEW_COUNT}+ Google reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <StarRating rating={t.rating} />
                <p className="text-gray-700 text-sm leading-relaxed mt-3 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/handyman/reviews"
              className="text-blue-800 font-semibold hover:text-blue-600 transition-colors"
            >
              Read all {REVIEW_COUNT} reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Senior & Veteran Discounts */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎖️</div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">
                  Senior & Veteran Discounts
                </h3>
                <p className="text-gray-600">
                  We proudly offer 10% off all services for seniors (65+) and veterans.
                  Thank you for your service.
                </p>
              </div>
            </div>
            <Link
              href="/handyman/quote"
              className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              Claim Your Discount
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Serving Northeast Ohio
            </h2>
            <p className="text-gray-600 text-lg">
              Based in Chagrin Falls, we cover a 30-mile radius across Cuyahoga,
              Geauga, Portage, and Summit counties.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area.name}
                className="bg-white border border-blue-200 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {area.name}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/handyman/service-areas"
              className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-600 transition-colors"
            >
              View full service area map
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Cross It Off Your List?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Call us today for a free, no-obligation quote. Most jobs scheduled within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/handyman/quote"
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Request Online Quote
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Mon–Fri 7am–6pm · Sat 8am–4pm · Emergency service available
          </p>
        </div>
      </section>

      {/* Spacer for mobile CTA bar */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
