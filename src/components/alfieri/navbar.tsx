"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF, SERVICES } from "@/lib/alfieri/data";

export function AlfieriNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a237e] text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span>18100 Lanken Avenue, Cleveland, OH 44119</span>
          <a href={PHONE_HREF} className="font-bold hover:text-yellow-300 transition-colors">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* Logo row */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/alfieri" className="flex items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-[#1a237e] font-black text-xl tracking-wide uppercase">Alfieri Brothers</span>
            <span className="text-[#cc2222] text-xs font-semibold uppercase tracking-widest">Contracting & Excavation</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight border-l-2 border-gray-200 pl-4 ml-1">
            <span className="text-[#7b2d00] font-bold text-sm tracking-wide uppercase">Alfieri</span>
            <span className="text-[#7b2d00] font-bold text-sm tracking-wide uppercase">Management LLC</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/alfieri" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors">Home</Link>

          <div className="relative group">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors flex items-center gap-1">
              Contracting & Excavation <span className="text-xs">▾</span>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/alfieri/services/${s.slug}`}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#1a237e] hover:text-white transition-colors"
                >
                  {s.emoji} {s.name}
                </Link>
              ))}
              <div className="border-t border-gray-100">
                <Link href="/alfieri/services" className="block px-4 py-2.5 text-sm font-semibold text-[#1a237e] hover:bg-blue-50 transition-colors">
                  All Services →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/alfieri/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors">About</Link>
          <Link href="/alfieri/service-areas" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors">Service Areas</Link>
          <Link href="/alfieri/rental" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors">Rental Property</Link>
          <Link href="/alfieri/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 rounded transition-colors">Contact</Link>
          <Link
            href="/alfieri/quote"
            className="ml-2 bg-[#cc2222] hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded text-gray-600 hover:text-[#1a237e]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            <Link href="/alfieri" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>Home</Link>
            <button
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center justify-between"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Contracting & Excavation <span>{servicesOpen ? "▴" : "▾"}</span>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/alfieri/services/${s.slug}`}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.emoji} {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/alfieri/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/alfieri/service-areas" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>Service Areas</Link>
            <Link href="/alfieri/rental" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>Rental Property</Link>
            <Link href="/alfieri/contact" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link
              href="/alfieri/quote"
              className="block text-center bg-[#cc2222] hover:bg-red-700 text-white font-bold px-4 py-3 rounded mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
