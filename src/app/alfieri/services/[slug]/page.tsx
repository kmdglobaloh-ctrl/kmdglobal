import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, PHONE, PHONE_HREF, COMPANY_FULL, ADDRESS_FULL } from "@/lib/alfieri/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} in Cleveland, OH`,
    description: `${s.shortDesc} Serving Cleveland and Northeast Ohio. Call ${PHONE} for a free estimate.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY_FULL,
      telephone: PHONE,
      address: ADDRESS_FULL,
    },
    areaServed: "Cleveland, OH and Northeast Ohio",
    description: service.shortDesc,
  };

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? SERVICES[currentIndex - 1] : null;
  const nextService = currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link>
        {" / "}
        <Link href="/alfieri/services" className="hover:text-[#1a237e]">Services</Link>
        {" / "}
        <span className="text-gray-700">{service.name}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{service.emoji}</span>
            <div>
              <h1 className="text-3xl font-black text-[#0d1444] flex items-center gap-2">
                {service.name}
                {service.emergency && (
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-0.5 rounded font-semibold">24/7 Emergency</span>
                )}
              </h1>
              <p className="text-[#cc2222] font-semibold">{service.tagline}</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4 mb-6 text-lg">{service.longDesc}</p>

          {/* Features */}
          <div className="bg-[#f0f4ff] rounded-xl p-6 mb-8">
            <h2 className="font-bold text-[#0d1444] text-lg mb-4">What We Provide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="text-[#1a237e] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {service.faqs.length > 0 && (
            <div className="mb-8">
              <h2 className="font-black text-[#0d1444] text-2xl mb-5">
                Frequently Asked Questions — {service.name}
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-5 py-4">
                      <p className="font-bold text-[#0d1444]">{faq.q}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service nav */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            {prevService ? (
              <Link href={`/alfieri/services/${prevService.slug}`} className="text-[#1a237e] hover:underline text-sm font-semibold">
                ← {prevService.name}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link href={`/alfieri/services/${nextService.slug}`} className="text-[#1a237e] hover:underline text-sm font-semibold">
                {nextService.name} →
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* CTA card */}
          <div className="bg-[#0d1444] text-white rounded-2xl p-6 sticky top-24">
            <h3 className="font-black text-lg mb-2">Get a Free Estimate</h3>
            <p className="text-blue-300 text-sm mb-5">
              Tell us about your project and we'll get back to you with a no-obligation quote.
            </p>
            <Link
              href="/alfieri/quote"
              className="block text-center bg-[#cc2222] hover:bg-red-700 text-white font-bold px-4 py-3 rounded-lg transition-colors mb-3"
            >
              Request Quote Online
            </Link>
            <a
              href={PHONE_HREF}
              className="block text-center border border-blue-400 hover:bg-blue-900 text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
            >
              📞 Call {PHONE}
            </a>
            {service.emergency && (
              <p className="text-[#ffcc00] text-xs text-center mt-3 font-semibold">
                🚨 Emergency calls answered 24/7
              </p>
            )}
          </div>

          {/* Other services */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-bold text-[#0d1444] text-sm uppercase tracking-widest mb-4">Our Services</h3>
            <ul className="space-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/alfieri/services/${s.slug}`}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      s.slug === slug
                        ? "bg-[#1a237e] text-white font-semibold"
                        : "text-[#cc2222] hover:bg-red-50 hover:text-red-800"
                    }`}
                  >
                    {s.name}
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
