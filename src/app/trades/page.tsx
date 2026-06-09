import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export default function TradesHome() {
  const { company, trade, brand, services, serviceAreas, features } = config;

  return (
    <div>
      {/* Emergency banner */}
      {features.emergencyBanner && trade.hasEmergency && (
        <div className="text-white text-sm py-2 px-4 text-center font-semibold" style={{ backgroundColor: brand.secondary }}>
          🚨 {trade.emergencyLabel} — <a href={company.phoneHref} className="underline">{company.phone}</a>
        </div>
      )}

      {/* Hero */}
      <section className="text-white py-20 px-4" style={{ background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.accent} 100%)` }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">{company.addressCity}, {company.addressState} · Est. {company.established}</p>
          <h1 className="text-5xl font-black mb-4 leading-tight">{company.name}</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{company.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`${BASE}/quote`} className="text-white font-black px-8 py-4 rounded-xl text-lg transition-colors" style={{ backgroundColor: brand.secondary }}>
              Get a Free Quote →
            </Link>
            <a href={company.phoneHref} className="bg-white font-black px-8 py-4 rounded-xl text-lg transition-colors" style={{ color: brand.primary }}>
              📞 {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100 py-6 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🏆", label: trade.licenseLabel },
            { icon: "📅", label: `${new Date().getFullYear() - company.established}+ Years Experience` },
            { icon: "⭐", label: "5-Star Rated" },
            { icon: "🤝", label: "Free Estimates" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-center gap-2">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-sm font-bold text-gray-700">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2" style={{ color: brand.primary }}>Our Services</h2>
            <p className="text-gray-500">Professional {trade.plural.toLowerCase()} serving {company.addressCity} and the surrounding area.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.slug} href={`${BASE}/services/${s.slug}`} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-black text-lg mb-1" style={{ color: brand.primary }}>{s.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{s.shortDesc}</p>
                <span className="text-sm font-semibold group-hover:underline" style={{ color: brand.secondary }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Updates highlight (if enabled) */}
      {features.projectUpdatesPublic && (
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-2xl font-black mb-3" style={{ color: brand.primary }}>Real-Time Project Updates</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              When we work on your home, you get a private link with real-time updates, milestone photos, and progress notes — so you always know exactly what's happening.
            </p>
            <Link href={`${BASE}/quote`} className="inline-block text-white font-bold px-6 py-3 rounded-xl" style={{ backgroundColor: brand.primary }}>
              Request a Quote to Get Started
            </Link>
          </div>
        </section>
      )}

      {/* Service areas */}
      {features.serviceAreas && (
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-8" style={{ color: brand.primary }}>Service Areas</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceAreas.map((a) => (
                <span key={a.name} className={`px-4 py-2 rounded-full text-sm font-semibold border ${a.highlight ? "border-current text-white" : "border-gray-300 text-gray-700 bg-gray-50"}`}
                  style={a.highlight ? { backgroundColor: brand.primary, borderColor: brand.primary } : {}}>
                  {a.name}{a.county ? `, ${a.county} Co.` : ""}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 text-white text-center" style={{ backgroundColor: brand.primary }}>
        <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
        <p className="text-lg opacity-80 mb-8">Free estimates · No obligation · Fast response</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={`${BASE}/quote`} className="text-white font-black px-8 py-4 rounded-xl" style={{ backgroundColor: brand.secondary }}>
            Request a Free Quote
          </Link>
          <a href={company.phoneHref} className="bg-white font-black px-8 py-4 rounded-xl" style={{ color: brand.primary }}>
            Call {company.phone}
          </a>
        </div>
      </section>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
