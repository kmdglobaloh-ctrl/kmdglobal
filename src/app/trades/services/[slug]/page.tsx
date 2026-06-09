import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export async function generateStaticParams() {
  return config.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = config.services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: `${config.company.name} provides professional ${service.name.toLowerCase()} in ${config.company.addressCity}, ${config.company.addressState}. ${service.shortDesc}` };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = config.services.find((s) => s.slug === slug);
  if (!service) notFound();
  const { company, brand, services } = config;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href={BASE} className="hover:underline">Home</Link> / <Link href={`${BASE}/services`} className="hover:underline">Services</Link> / {service.name}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl font-black mb-4" style={{ color: brand.primary }}>{service.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{service.shortDesc}</p>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              When it comes to {service.name.toLowerCase()}, {company.name} brings {new Date().getFullYear() - company.established}+ years of experience to every project. We serve homeowners and businesses throughout {company.addressCity} and the surrounding area with reliable, high-quality workmanship at fair prices.
            </p>
            <h2 className="text-xl font-black mt-8 mb-3" style={{ color: brand.primary }}>Why Choose {company.name}?</h2>
            <ul className="space-y-2 mb-6">
              {[
                `${config.trade.licenseLabel} — every job is fully covered`,
                "Free, detailed estimates with no hidden fees",
                "Experienced crew with attention to detail",
                `Serving ${company.addressCity} since ${company.established}`,
                "Responsive communication throughout the project",
                config.features.projectUpdatesPublic ? "Real-time project updates shared with you as we work" : "Regular progress updates so you're never left guessing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 mt-0.5 font-bold">✓</span>{item}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-black mt-8 mb-3" style={{ color: brand.primary }}>Our Process</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Free Estimate", d: "We assess your project and provide a detailed written estimate — no obligation." },
                { n: "2", t: "Scheduling", d: "We work around your schedule to find a start date that works for you." },
                { n: "3", t: "Professional Work", d: "Our crew completes the job to a high standard, keeping the site clean throughout." },
                { n: "4", t: "Final Walkthrough", d: "We walk through the completed work together to make sure you're 100% satisfied." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full text-white text-sm font-black flex items-center justify-center shrink-0" style={{ backgroundColor: brand.primary }}>{step.n}</div>
                  <div>
                    <p className="font-bold text-gray-900">{step.t}</p>
                    <p className="text-gray-600 text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="text-white rounded-2xl p-6" style={{ backgroundColor: brand.primary }}>
            <h3 className="font-black text-lg mb-3">Get a Free Estimate</h3>
            <p className="text-sm opacity-80 mb-4">Tell us about your project and we&apos;ll get back to you quickly.</p>
            <Link href={`${BASE}/quote`} className="block text-center font-bold py-3 rounded-lg mb-2 text-white" style={{ backgroundColor: brand.secondary }}>
              Request a Quote →
            </Link>
            <a href={company.phoneHref} className="block text-center bg-white font-bold py-3 rounded-lg text-sm" style={{ color: brand.primary }}>
              📞 {company.phone}
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">All Services</h3>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`${BASE}/services/${s.slug}`} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${s.slug === slug ? "font-bold" : "text-gray-600 hover:text-gray-900"}`}
                    style={s.slug === slug ? { color: brand.secondary } : {}}>
                    <span>{s.icon}</span>{s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
