import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, SISTER_COMPANY } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "Rental Property — Alfieri Management LLC",
  description: `${SISTER_COMPANY} manages residential rental properties in the Cleveland, OH area. Contact us to inquire about available units.`,
};

export default function RentalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Rental Property
      </p>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🏠</div>
            <div>
              <h1 className="text-3xl font-black text-[#7b2d00]">{SISTER_COMPANY}</h1>
              <p className="text-gray-600 text-sm">Residential Rental Properties · Cleveland, OH</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            {SISTER_COMPANY} is the property management arm of the Alfieri family business. We own and manage residential rental properties in the Cleveland area, providing well-maintained housing with the same care and attention to detail that defines our contracting work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We take pride in maintaining our properties to a high standard — as contractors, we handle repairs and improvements ourselves, which means our tenants enjoy well-kept homes without the delays common with outside maintenance services.
          </p>

          {/* No current listings notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-bold text-amber-800 mb-1">No Units Currently Available</h3>
                <p className="text-amber-700 text-sm">
                  We don't have any rental units available at this time. If you'd like to be notified when a unit becomes available, please fill out the interest form below or contact us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Interest form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-black text-[#0d1444] text-xl mb-2">Rental Interest Form</h2>
            <p className="text-gray-600 text-sm mb-5">
              Tell us about what you're looking for and we'll contact you when a suitable unit becomes available.
            </p>
            <form className="space-y-4" action="/api/alfieri/contact" method="POST">
              <input type="hidden" name="type" value="rental-inquiry" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                  <input type="text" name="name" required placeholder="Jane Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] focus:ring-1 focus:ring-[#7b2d00]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" required placeholder="216-555-0123" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] focus:ring-1 focus:ring-[#7b2d00]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required placeholder="jane@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] focus:ring-1 focus:ring-[#7b2d00]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Bedrooms Needed</label>
                  <select name="bedrooms" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] bg-white">
                    <option value="">Select...</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>3+ Bedrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Move-in Timeframe</label>
                  <select name="timeframe" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] bg-white">
                    <option value="">Select...</option>
                    <option>ASAP</option>
                    <option>Within 30 days</option>
                    <option>Within 60 days</option>
                    <option>Within 90 days</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
                <textarea name="message" rows={3} placeholder="Any specific requirements, pets, etc." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7b2d00] resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#7b2d00] hover:bg-amber-900 text-white font-bold py-4 rounded-lg transition-colors">
                Submit Rental Interest
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-[#7b2d00] text-white rounded-2xl p-6">
            <h3 className="font-black text-lg mb-3">Contact Alfieri Management</h3>
            <p className="text-amber-200 text-sm mb-4">Questions about rentals? We're happy to chat.</p>
            <a href={PHONE_HREF} className="block text-center bg-white text-[#7b2d00] font-bold py-3 rounded-lg mb-2 hover:bg-gray-100 transition-colors">
              📞 {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block text-center border border-amber-400 text-white font-semibold py-3 rounded-lg text-sm hover:bg-amber-900 transition-colors">
              ✉️ {EMAIL}
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-bold text-[#0d1444] mb-3">Why Rent from Alfieri?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Family-owned — responsive landlord",
                "Maintenance handled in-house",
                "Well-maintained properties",
                "Cleveland area locations",
                "Fair, competitive pricing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#7b2d00] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/alfieri/contact" className="block text-center bg-[#0d1444] hover:bg-blue-950 text-white font-bold py-3 rounded-xl transition-colors text-sm">
            General Contact →
          </Link>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
