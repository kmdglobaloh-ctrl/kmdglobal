import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS, PHONE_HREF, PHONE, COMPANY_NAME } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${COMPANY_NAME} serves Chagrin Falls and surrounding communities including Aurora, Solon, Chardon, Bainbridge, Pepper Pike, and more across Northeast Ohio.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Based in Chagrin Falls, OH — we cover a 30-mile radius across Cuyahoga,
            Geauga, Portage, and Summit counties.
          </p>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md h-80 bg-blue-100 flex items-center justify-center">
            {/* Replace with Google Maps embed:
                <iframe
                  src="https://www.google.com/maps/embed?..."
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
            */}
            <div className="text-center text-gray-500 p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="font-semibold text-gray-700 text-lg mb-1">Service Area Map</p>
              <p className="text-sm">Replace with Google Maps embed centered on Chagrin Falls, OH (41.4273, -81.3884)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Communities We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              All of the following communities are within our standard service area with
              no additional travel fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className={`rounded-xl border p-5 ${
                  area.distance === "Home Base"
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 bg-white"
                } shadow-sm`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{area.name}</h3>
                  {area.distance === "Home Base" && (
                    <span className="bg-blue-800 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Base
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{area.county} County</p>
                {area.distance !== "Home Base" && (
                  <p className="text-xs text-blue-600 mt-1 font-medium">{area.distance} from Chagrin Falls</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 text-xl mb-2">
              Don&apos;t see your town listed?
            </h3>
            <p className="text-gray-600 mb-4">
              We occasionally take jobs outside our standard area. Give us a call — if
              it&apos;s within a reasonable drive, we&apos;ll make it work.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
