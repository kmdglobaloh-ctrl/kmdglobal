import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, PHONE_HREF, PHONE, COMPANY_NAME } from "@/lib/handyman/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.shortDesc} ${COMPANY_NAME} serves Chagrin Falls, OH and surrounding communities.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/handyman/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.emoji}</span>
            <h1 className="text-4xl sm:text-5xl font-bold">{service.name}</h1>
          </div>
          <p className="text-blue-200 text-xl max-w-2xl">{service.shortDesc}</p>
          {service.startingPrice && (
            <div className="mt-4 inline-block bg-amber-500 text-white font-bold px-4 py-1.5 rounded-full text-sm">
              Starting at {service.startingPrice}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.longDesc}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-green-50 rounded-lg p-3 border border-green-100">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Our Process</h3>
              <ol className="space-y-3">
                {[
                  "You call or submit a quote — we respond within 2 hours.",
                  "We schedule a convenient time and provide a firm price before starting.",
                  "Our technician arrives on time and completes the work to your satisfaction.",
                  "We clean up completely before leaving. You approve the work.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Book CTA */}
            <div className="bg-blue-900 rounded-xl p-6 text-white sticky top-24">
              <h3 className="font-bold text-xl mb-2">Book This Service</h3>
              <p className="text-blue-200 text-sm mb-5">
                Free estimates. Most jobs scheduled within 48 hours.
              </p>
              <div className="space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-lg transition-colors w-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call {PHONE}
                </a>
                <Link
                  href="/handyman/quote"
                  className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 rounded-lg transition-colors w-full"
                >
                  Request Online Quote
                </Link>
              </div>
              <div className="mt-5 pt-5 border-t border-blue-800 space-y-2">
                {[
                  "Free estimates",
                  "No hidden fees",
                  "Satisfaction guaranteed",
                  "Licensed & insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/handyman/services/${s.slug}`}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-sm font-medium text-gray-800">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 lg:hidden" />
    </>
  );
}
