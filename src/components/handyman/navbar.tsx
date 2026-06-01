"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_NAME, PHONE, PHONE_HREF } from "@/lib/handyman/data";

const NAV_LINKS = [
  { href: "/handyman", label: "Home" },
  { href: "/handyman/services", label: "Services" },
  { href: "/handyman/service-areas", label: "Service Areas" },
  { href: "/handyman/gallery", label: "Gallery" },
  { href: "/handyman/reviews", label: "Reviews" },
  { href: "/handyman/blog", label: "Blog" },
  { href: "/handyman/about", label: "About" },
  { href: "/handyman/contact", label: "Contact" },
];

export function HandymanNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/handyman" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🔨</span>
            <span className="font-bold text-blue-900 text-lg leading-tight">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
            <Link
              href="/handyman/quote"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white pb-4">
          <nav className="flex flex-col px-4 pt-2 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 px-4 pt-3">
            <a
              href={PHONE_HREF}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-900 text-white font-semibold text-sm px-4 py-2.5 rounded-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <Link
              href="/handyman/quote"
              onClick={() => setMenuOpen(false)}
              className="flex-1 flex items-center justify-center bg-amber-500 text-white font-semibold text-sm px-4 py-2.5 rounded-lg"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
