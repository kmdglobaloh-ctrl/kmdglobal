import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, PHONE, PHONE_HREF, SERVICE_AREAS } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "Service Areas — Cleveland & Northeast Ohio",
  description: `${COMPANY} Brothers serves Cleveland and communities across Cuyahoga and Lake County, OH. See if we service your area.`,
};

const cuyahoga = SERVICE_AREAS.filter((a) => a.county === "Cuyahoga");
const lake = SERVICE_AREAS.filter((a) => a.county === "Lake");
const other = SERVICE_AREAS.filter((a) => a.county !== "Cuyahoga" && a.county !== "Lake");

export default function ServiceAreasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Service Areas
      </p>

      <div className="mb-10">
        <h1 className="text-4xl font-black text-[#0d1444] mb-3">Service Areas</h1>
        <p className="text-gray-600 max-w-2xl">
          {COMPANY} Brothers is based in Cleveland, OH and serves communities throughout Cuyahoga County and Lake County. If you don't see your city listed, give us a call — we may still be able to help.
        </p>
      </div>

      {/* Map placeholder */}
      <div className="bg-[#f0f4ff] border border-blue-200 rounded-2xl p-8 mb-10 text-center">
        <div className="text-5xl mb-3">🗺️</div>
        <h2 className="font-black text-[#0d1444] text-xl mb-2">Cleveland & Northeast Ohio</h2>
        <p className="text-gray-600 text-sm">Based in Cleveland, OH · 18100 Lanken Avenue · 44119</p>
        <p className="text-gray-500 text-sm mt-1">Serving a ~30-mile radius from Cleveland</p>
      </div>

      {/* Cuyahoga */}
      <div className="mb-10">
        <h2 className="text-2xl font-black text-[#0d1444] mb-5 flex items-center gap-2">
          <span className="w-2 h-6 bg-[#1a237e] rounded-full inline-block" />
          Cuyahoga County
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cuyahoga.map((a) => (
            <div key={a.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-[#0d1444] mb-1">{a.name}, OH</h3>
              {a.note && <p className="text-gray-600 text-xs leading-relaxed">{a.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Lake County */}
      {lake.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-black text-[#0d1444] mb-5 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#cc2222] rounded-full inline-block" />
            Lake County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lake.map((a) => (
              <div key={a.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#0d1444] mb-1">{a.name}, OH</h3>
                {a.note && <p className="text-gray-600 text-xs leading-relaxed">{a.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other */}
      {other.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-black text-[#0d1444] mb-5 flex items-center gap-2">
            <span className="w-2 h-6 bg-gray-400 rounded-full inline-block" />
            Additional Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {other.map((a) => (
              <div key={a.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#0d1444] mb-1">{a.name}, OH</h3>
                {a.note && <p className="text-gray-600 text-xs leading-relaxed">{a.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#0d1444] text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black mb-2">Don't See Your City?</h2>
        <p className="text-blue-300 mb-6">Call us — we regularly work outside our listed service area for the right job.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={PHONE_HREF} className="bg-[#cc2222] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            📞 {PHONE}
          </a>
          <Link href="/alfieri/contact" className="border border-white hover:bg-white hover:text-[#0d1444] text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Send Us a Message
          </Link>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
