import Link from "next/link";
import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, ADDRESS, SERVICES, SERVICE_AREAS } from "@/lib/handyman/data";

export function HandymanFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔨</span>
              <span className="font-bold text-white text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-blue-300 mb-4 leading-relaxed">
              Reliable handyman and home repair services serving Chagrin Falls and surrounding communities for 15+ years.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
              <span className="flex items-center gap-2 text-blue-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {ADDRESS}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/handyman/services/${s.slug}`}
                    className="text-sm text-blue-300 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/handyman", label: "Home" },
                { href: "/handyman/about", label: "About Us" },
                { href: "/handyman/service-areas", label: "Service Areas" },
                { href: "/handyman/gallery", label: "Gallery" },
                { href: "/handyman/reviews", label: "Reviews" },
                { href: "/handyman/blog", label: "Blog & Tips" },
                { href: "/handyman/contact", label: "Contact" },
                { href: "/handyman/quote", label: "Get Free Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <div className="grid grid-cols-2 gap-1">
              {SERVICE_AREAS.slice(0, 12).map((area) => (
                <span key={area.name} className="text-sm text-blue-300 truncate">
                  {area.name}
                </span>
              ))}
            </div>
            <Link
              href="/handyman/service-areas"
              className="inline-block mt-3 text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              View all areas →
            </Link>

            <div className="mt-6 p-3 bg-blue-900 rounded-lg">
              <p className="text-xs text-blue-300 font-semibold uppercase tracking-wide mb-1">Hours</p>
              <p className="text-sm text-white">Mon–Fri: 7am – 6pm</p>
              <p className="text-sm text-white">Saturday: 8am – 4pm</p>
              <p className="text-sm text-blue-300">Emergency service available</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-400">
            © {year} {COMPANY_NAME}. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex gap-4 text-sm text-blue-400">
            <Link href="/handyman/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/handyman/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
