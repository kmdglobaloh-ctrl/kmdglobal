import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, COMPANY_FULL } from "@/lib/alfieri/data";
import { QuoteForm } from "@/components/alfieri/quote-form";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description: `Request a free estimate from ${COMPANY_FULL}. We provide quotes for sewer services, excavation, waterproofing, demolition, and more across Northeast Ohio.`,
};

export default function QuotePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Get a Quote
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-black text-[#0d1444] mb-2">Request a Free Estimate</h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll prepare a detailed estimate for your project. No obligations, no pressure.
          </p>
          <QuoteForm />
        </div>

        <div className="space-y-5">
          <div className="bg-[#0d1444] text-white rounded-2xl p-6">
            <h3 className="font-black text-lg mb-3">Prefer to Call?</h3>
            <p className="text-blue-300 text-sm mb-4">Talk directly with our team — we're happy to answer questions and give estimates over the phone.</p>
            <a href={PHONE_HREF} className="block text-center bg-[#cc2222] hover:bg-red-700 font-bold py-3 rounded-lg transition-colors">
              📞 {PHONE}
            </a>
            <p className="text-blue-400 text-xs text-center mt-2">Emergency sewer service 24/7</p>
          </div>

          <div className="bg-[#f0f4ff] rounded-xl p-5 border border-blue-100">
            <h3 className="font-bold text-[#0d1444] mb-3">What to Expect</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                { n: "1", t: "We review your request", d: "Usually within a few hours during business days" },
                { n: "2", t: "We contact you", d: "By phone or email based on your preference" },
                { n: "3", t: "Site visit if needed", d: "For larger jobs, we'll schedule a free on-site estimate" },
                { n: "4", t: "Written estimate", d: "Detailed pricing with no hidden costs" },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1a237e] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{s.n}</div>
                  <div>
                    <p className="font-semibold text-[#0d1444]">{s.t}</p>
                    <p className="text-gray-500 text-xs">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
