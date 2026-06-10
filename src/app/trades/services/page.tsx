import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import type { Metadata } from "next";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: "Services",
  description: `${config.company.name} offers ${config.services.length} professional services in ${config.company.addressCity}. ${config.company.tagline}`,
};

export default function ServicesPage() {
  const { services, brand, company } = config;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Our Services</h1>
          <p className="text-lg opacity-80">Professional {config.trade.plural.toLowerCase()} serving {company.addressCity} and surrounding areas.</p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.slug} href={`${BASE}/services/${service.slug}`}
              className="group border-2 border-gray-200 rounded-2xl p-6 hover:border-current hover:shadow-md transition-all"
              style={{ "--hover-color": brand.primary } as React.CSSProperties}>
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-black text-gray-900 mb-2 group-hover:text-current transition-colors"
                style={{ color: "inherit" }}>{service.name}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
              <span className="text-sm font-bold" style={{ color: brand.primary }}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.secondary }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="opacity-90 mb-6">Contact us today for a free estimate on any of our services.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`${BASE}/quote`} className="bg-white font-bold px-8 py-3 rounded-lg text-sm transition-opacity hover:opacity-90"
              style={{ color: brand.secondary }}>
              Get a Free Quote
            </Link>
            <a href={company.phoneHref} className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg text-sm hover:bg-white/10 transition-colors">
              Call {company.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
