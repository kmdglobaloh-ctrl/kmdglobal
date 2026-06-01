"use client";

import Link from "next/link";
import { PHONE_HREF, PHONE } from "@/lib/alfieri/data";

export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-[#1a237e] text-white font-bold py-4 text-sm"
        >
          📞 Call {PHONE}
        </a>
        <Link
          href="/alfieri/quote"
          className="flex items-center justify-center gap-2 bg-[#cc2222] text-white font-bold py-4 text-sm"
        >
          Free Quote →
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </div>
  );
}
