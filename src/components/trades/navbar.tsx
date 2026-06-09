"use client";

import { useState } from "react";
import Link from "next/link";
import type { TradeConfig } from "@/lib/trades/config";

export function TradesNavbar({ config, basePath }: { config: TradeConfig; basePath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { company, trade, brand, services, features } = config;
  const p = basePath;

  return (
    <header style={{ "--brand-primary": brand.primary, "--brand-secondary": brand.secondary } as React.CSSProperties}>
      {/* Top bar */}
      <div className="text-white text-xs py-1.5 px-4 flex items-center justify-between" style={{ backgroundColor: brand.primary }}>
        <span>{trade.licenseLabel} · Est. {company.established}</span>
        <div className="flex items-center gap-4">
          {trade.hasEmergency && <span className="text-yellow-300 font-semibold">{trade.emergencyLabel}</span>}
          <a href={company.phoneHref} className="font-bold hover:underline">{company.phone}</a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={p} className="flex flex-col leading-tight">
            <span className="font-black text-xl uppercase tracking-tight" style={{ color: brand.primary }}>{company.name}</span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: brand.secondary }}>{company.tagline.split(".")[0]}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link href={p} className="hover:text-gray-900">Home</Link>
            <div className="relative group">
              <Link href={`${p}/services`} className="hover:text-gray-900">Services ▾</Link>
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {services.slice(0, 8).map((s) => (
                  <Link key={s.slug} href={`${p}/services/${s.slug}`} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-gray-900">
                    <span>{s.icon}</span>{s.name}
                  </Link>
                ))}
              </div>
            </div>
            {features.gallery && <Link href={`${p}/gallery`} className="hover:text-gray-900">Gallery</Link>}
            {features.blog && <Link href={`${p}/blog`} className="hover:text-gray-900">Blog</Link>}
            {features.reviews && <Link href={`${p}/reviews`} className="hover:text-gray-900">Reviews</Link>}
            <Link href={`${p}/about`} className="hover:text-gray-900">About</Link>
            <Link href={`${p}/contact`} className="hover:text-gray-900">Contact</Link>
            <Link href={`${p}/quote`} className="text-white font-bold px-4 py-2 rounded-lg transition-colors" style={{ backgroundColor: brand.secondary }}>
              Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 py-3 space-y-2 bg-white">
            {[
              { href: p, label: "Home" },
              { href: `${p}/services`, label: "Services" },
              ...(features.gallery ? [{ href: `${p}/gallery`, label: "Gallery" }] : []),
              ...(features.blog ? [{ href: `${p}/blog`, label: "Blog" }] : []),
              ...(features.reviews ? [{ href: `${p}/reviews`, label: "Reviews" }] : []),
              { href: `${p}/about`, label: "About" },
              { href: `${p}/contact`, label: "Contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-semibold text-gray-700 hover:text-gray-900">
                {item.label}
              </Link>
            ))}
            <a href={`${p}/quote`} className="block text-center text-white font-bold py-3 rounded-lg mt-2" style={{ backgroundColor: brand.secondary }}>
              Get a Free Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
