import Link from "next/link";
import { PHONE_HREF, PHONE } from "@/lib/handyman/data";

export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-200 bg-white shadow-lg">
      <a
        href={PHONE_HREF}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 bg-blue-900 text-white"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="text-xs font-semibold">Call Now</span>
      </a>
      <Link
        href="/handyman/quote"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 bg-amber-500 text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-xs font-semibold">Free Quote</span>
      </Link>
    </div>
  );
}
