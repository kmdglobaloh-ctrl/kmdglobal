import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import type { Metadata } from "next";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${config.company.name} — ${config.trade.plural} serving ${config.company.addressCity} since ${config.company.established}.`,
};

export default function AboutPage() {
  const { brand, company, trade, services, serviceAreas } = config;
  const yearsInBusiness = new Date().getFullYear() - company.established;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-20 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-2">{trade.licenseLabel}</p>
          <h1 className="text-4xl font-black mb-3">About {company.name}</h1>
          <p className="text-xl opacity-80 max-w-2xl">Serving {company.addressCity} and the surrounding area with quality craftsmanship since {company.established}.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${yearsInBusiness}+`, label: "Years in Business" },
            { value: "500+", label: "Projects Completed" },
            { value: "4.9★", label: "Avg. Review" },
            { value: "100%", label: "Licensed & Insured" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black" style={{ color: brand.primary }}>{stat.value}</p>
              <p className="text-sm text-gray-600 font-semibold mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Our story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {company.name} was founded in {company.established} with a simple goal: do honest work at a fair price and stand behind every job. Since then, we&apos;ve grown into one of the most trusted {trade.plural.toLowerCase()} in the {company.addressCity} area.
              </p>
              <p>
                We&apos;re a locally owned and operated business — not a franchise, not a national chain. When you call us, you&apos;re talking to the people who will actually show up at your door and do the work.
              </p>
              <p>
                Our team consists of experienced, background-checked tradespeople who take pride in their work. We don&apos;t cut corners, we clean up after ourselves, and we communicate clearly so you&apos;re never left wondering what&apos;s happening on your project.
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-8 text-center text-white" style={{ backgroundColor: brand.primary }}>
            <div className="text-6xl mb-4">🏗️</div>
            <p className="font-black text-2xl mb-1">{company.name}</p>
            <p className="opacity-70 text-sm">Est. {company.established} · {company.addressCity}, {company.addressState}</p>
            {company.licenseNumber && (
              <p className="mt-3 text-xs opacity-60">License #{company.licenseNumber}</p>
            )}
          </div>
        </div>

        {/* Why us */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Why Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔒", title: "Licensed & Insured", desc: `Fully licensed in ${company.addressState} and carrying full liability and workers' comp insurance on every job.` },
              { icon: "💬", title: "Clear Communication", desc: "We explain everything upfront, provide written estimates, and keep you updated throughout the project." },
              { icon: "✅", title: "We Stand Behind Our Work", desc: "Every project comes with a warranty. If something isn't right, we come back and make it right. Period." },
              { icon: "⏱️", title: "On Time, On Budget", desc: "We set realistic timelines and stick to them. Cost overruns are discussed proactively, never sprung on you." },
              { icon: "🧹", title: "Clean Jobsite", desc: "We treat your home with respect. That means daily cleanup, protected surfaces, and a clean final walkthrough." },
              { icon: "📸", title: "Project Updates", desc: "Clients with our project tracker receive regular photo updates so you always know where things stand." },
            ].map((item) => (
              <div key={item.title} className="p-5 border-2 border-gray-200 rounded-2xl hover:border-current transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service areas */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area.name}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border ${area.highlight ? "text-white border-transparent" : "bg-gray-100 text-gray-700 border-gray-200"}`}
                style={area.highlight ? { backgroundColor: brand.primary } : {}}>
                {area.name}
                {area.county ? ` · ${area.county} Co.` : ""}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.secondary }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Let&apos;s Work Together</h2>
          <p className="opacity-90 mb-6">Reach out for a free, no-pressure estimate on your project.</p>
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
