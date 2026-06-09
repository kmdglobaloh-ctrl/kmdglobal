import Link from "next/link";
import type { TradeConfig } from "@/lib/trades/config";

export function TradesFooter({ config, basePath }: { config: TradeConfig; basePath: string }) {
  const { company, brand, services, features } = config;
  const p = basePath;

  return (
    <footer className="text-white pt-12 pb-6 mt-16" style={{ backgroundColor: brand.primary }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-black text-lg uppercase tracking-wide mb-1">{company.name}</p>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: brand.secondary }}>{company.tagline}</p>
            <p className="text-sm text-gray-300 mb-3">Serving {company.addressCity} and the surrounding area since {company.established}.</p>
            <p className="text-sm text-gray-300">{company.licenseNumber && `License #${company.licenseNumber}`}</p>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-400">Services</p>
            <ul className="space-y-1.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`${p}/services/${s.slug}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-400">Company</p>
            <ul className="space-y-1.5">
              {[
                { href: p, label: "Home" },
                { href: `${p}/about`, label: "About Us" },
                ...(features.gallery ? [{ href: `${p}/gallery`, label: "Project Gallery" }] : []),
                ...(features.reviews ? [{ href: `${p}/reviews`, label: "Reviews" }] : []),
                ...(features.blog ? [{ href: `${p}/blog`, label: "Blog" }] : []),
                { href: `${p}/service-areas`, label: "Service Areas" },
                { href: `${p}/contact`, label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wide mb-3 text-gray-400">Contact</p>
            <div className="space-y-2 text-sm text-gray-300 mb-5">
              <p><a href={company.phoneHref} className="hover:text-white">{company.phone}</a></p>
              <p><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></p>
              <p>{company.addressStreet}<br />{company.addressCity}, {company.addressState} {company.addressZip}</p>
            </div>
            <Link href={`${p}/quote`} className="block text-center text-white font-bold py-3 rounded-lg text-sm transition-colors" style={{ backgroundColor: brand.secondary }}>
              Get a Free Quote →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">Website by <a href="https://kmdglobal.com" className="hover:text-gray-300">KMD Global</a></p>
        </div>
      </div>
    </footer>
  );
}
