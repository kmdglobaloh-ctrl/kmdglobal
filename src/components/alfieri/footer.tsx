import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS_FULL, ESTABLISHED, SISTER_COMPANY, SERVICES, COMPANY } from "@/lib/alfieri/data";

export function AlfieriFooter() {
  return (
    <footer className="bg-[#0d1444] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="text-white font-black text-lg uppercase tracking-wide">Alfieri Brothers</p>
            <p className="text-[#cc2222] text-xs font-semibold uppercase tracking-widest">Contracting & Excavation</p>
            <p className="text-gray-400 text-xs mt-1">{SISTER_COMPANY}</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Serving Cleveland and Northeast Ohio since {ESTABLISHED}. Family-owned, locally trusted.
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p>📍 {ADDRESS_FULL}</p>
            <p><a href={PHONE_HREF} className="hover:text-white transition-colors">📞 {PHONE}</a></p>
            <p><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">✉️ {EMAIL}</a></p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Our Services</h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/alfieri/services/${s.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              { href: "/alfieri", label: "Home" },
              { href: "/alfieri/about", label: "About Us" },
              { href: "/alfieri/service-areas", label: "Service Areas" },
              { href: "/alfieri/gallery", label: "Project Gallery" },
              { href: "/alfieri/reviews", label: "Reviews" },
              { href: "/alfieri/blog", label: "Blog" },
              { href: "/alfieri/rental", label: "Rental Property" },
              { href: "/alfieri/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours + CTA */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Hours & Contact</h3>
          <div className="text-sm text-gray-400 space-y-1 mb-5">
            <p>Mon–Fri: 7:00 AM – 5:00 PM</p>
            <p>Saturday: By appointment</p>
            <p>Sunday: Closed</p>
            <p className="text-[#cc2222] font-semibold mt-2">24/7 Emergency Sewer Service</p>
          </div>
          <Link
            href="/alfieri/quote"
            className="block text-center bg-[#cc2222] hover:bg-red-700 text-white font-bold px-4 py-3 rounded transition-colors text-sm"
          >
            Get a Free Quote
          </Link>
          <a
            href={PHONE_HREF}
            className="block text-center border border-gray-600 hover:border-white text-gray-400 hover:text-white font-semibold px-4 py-3 rounded transition-colors text-sm mt-2"
          >
            Call {PHONE}
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY} Contracting and Excavation. All rights reserved.</p>
          <p>Licensed & Insured · Cleveland, OH · Member COSE</p>
        </div>
      </div>
    </footer>
  );
}
