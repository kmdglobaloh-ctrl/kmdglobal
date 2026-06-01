import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY, COMPANY_FULL, TAGLINE, PHONE, PHONE_HREF, EMAIL,
  ESTABLISHED, YEARS_IN_BUSINESS, SISTER_COMPANY,
  SERVICES, TESTIMONIALS, SERVICE_AREAS,
} from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: `${COMPANY_FULL} | Cleveland, OH Excavation & Contracting`,
  description: `${TAGLINE}. Sewer services, backflow prevention, basement waterproofing, demolition, grading, snow removal and more. Call ${PHONE}.`,
};

export default function AlfieriHomePage() {
  const emergency = SERVICES.find((s) => s.emergency);
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1444] via-[#1a237e] to-[#0d1444] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#ffcc00] text-sm font-bold uppercase tracking-widest mb-3">Serving Cleveland Since {ESTABLISHED}</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Northeast Ohio's Trusted<br />
            <span className="text-[#cc2222]">Excavation & Contracting</span> Experts
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Family-owned and operated for over {YEARS_IN_BUSINESS} years. From sewer services and basement waterproofing to demolition and snow removal — we do it right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/alfieri/quote"
              className="bg-[#cc2222] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-white hover:bg-white hover:text-[#1a237e] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              📞 Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Emergency sewer banner */}
      {emergency && (
        <div className="bg-[#cc2222] text-white py-3 px-4 text-center">
          <p className="text-sm font-semibold">
            🚨 24/7 Emergency Sewer Service Available —{" "}
            <a href={PHONE_HREF} className="underline font-bold hover:text-yellow-300">Call {PHONE} Now</a>
          </p>
        </div>
      )}

      {/* Trust badges */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🏆", label: `${YEARS_IN_BUSINESS}+ Years`, sub: "in Business" },
            { icon: "👨‍👩‍👧‍👦", label: "Family", sub: "Owned & Operated" },
            { icon: "📋", label: "Licensed", sub: "& Fully Insured" },
            { icon: "🤝", label: "COSE", sub: "Member" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <span className="text-3xl mb-1">{b.icon}</span>
              <p className="font-bold text-[#1a237e] text-sm">{b.label}</p>
              <p className="text-gray-500 text-xs">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#0d1444] mb-2">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From underground utility work to surface grading and everything in between — {COMPANY} has the equipment and experience to get the job done.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/alfieri/services/${s.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#1a237e] rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <div>
                    <h3 className="font-bold text-[#0d1444] group-hover:text-[#1a237e] transition-colors mb-1 flex items-center gap-2">
                      {s.name}
                      {s.emergency && <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-semibold">24/7</span>}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.shortDesc}</p>
                  </div>
                </div>
                <p className="text-[#1a237e] text-sm font-semibold mt-4 group-hover:underline">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#f0f4ff] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#0d1444] mb-2">Why Cleveland Chooses Alfieri Brothers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", title: "Over 30 Years Experience", desc: `Founded in ${ESTABLISHED}, we've handled thousands of projects across Northeast Ohio — from small repairs to full-scale excavation.` },
              { icon: "🔧", title: "We Own Our Equipment", desc: "No subcontractors, no rented equipment. Our crews use our own machines, meaning tighter schedules and direct accountability." },
              { icon: "🏠", title: "Family Values", desc: "We treat every job site like it's our own home. Our reputation in the Cleveland community is built on honesty and quality work." },
              { icon: "⚡", title: "Emergency Response", desc: "Sewer backups don't follow business hours. We offer emergency response services to get you taken care of fast." },
              { icon: "📝", title: "Municipality Compliance", desc: "We know NEORSD, Cleveland Water, and Cuyahoga County requirements inside and out. We handle the paperwork so you don't have to." },
              { icon: "💰", title: "Fair, Honest Pricing", desc: "We provide detailed estimates with no hidden fees. You'll know exactly what the job costs before we ever break ground." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#0d1444] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#0d1444] text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-[#0d1444] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location} · {t.service}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/alfieri/reviews" className="text-[#1a237e] font-semibold hover:underline">
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas preview */}
      <section className="bg-[#0d1444] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Serving Northeast Ohio</h2>
          <p className="text-blue-300 mb-8 max-w-xl mx-auto">
            We serve Cleveland and surrounding communities across Cuyahoga and Lake County.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SERVICE_AREAS.slice(0, 12).map((a) => (
              <span key={a.name} className="bg-[#1a237e] px-3 py-1.5 rounded-full text-sm text-blue-200">
                {a.name}
              </span>
            ))}
            <Link href="/alfieri/service-areas" className="bg-[#cc2222] hover:bg-red-700 px-3 py-1.5 rounded-full text-sm text-white font-semibold transition-colors">
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* About + sister company */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0d1444] mb-4">Two Companies, One Family</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#0d1444]">{COMPANY_FULL}</strong> has been the backbone of Cleveland's underground and excavation work since {ESTABLISHED}. From sewer laterals to full demolitions, our crews have seen it all.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our sister company, <strong className="text-[#7b2d00]">{SISTER_COMPANY}</strong>, manages residential rental properties in the Cleveland area — providing quality housing with the same family-owned values.
            </p>
            <div className="flex gap-4">
              <Link href="/alfieri/about" className="bg-[#1a237e] hover:bg-blue-900 text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm">
                Our Story
              </Link>
              <Link href="/alfieri/rental" className="border border-[#7b2d00] hover:bg-[#7b2d00] hover:text-white text-[#7b2d00] font-bold px-5 py-3 rounded-lg transition-colors text-sm">
                Rental Properties
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: `${YEARS_IN_BUSINESS}+`, label: "Years in Business" },
                { num: "1,000+", label: "Projects Completed" },
                { num: "2", label: "Cleveland Companies" },
                { num: "24/7", label: "Emergency Service" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-3xl font-black text-[#1a237e]">{s.num}</p>
                  <p className="text-gray-600 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#cc2222] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="text-red-100 mb-8">
            Contact us for a free estimate. We respond quickly and show up when we say we will.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/alfieri/quote"
              className="bg-white text-[#cc2222] hover:bg-gray-100 font-black px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Request Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="border-2 border-white hover:bg-white hover:text-[#cc2222] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>
          <p className="text-red-200 text-sm mt-4">Or email us at <a href={`mailto:${EMAIL}`} className="underline hover:text-white">{EMAIL}</a></p>
        </div>
      </section>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
