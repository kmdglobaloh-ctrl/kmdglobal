import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS_FULL, COMPANY_FULL } from "@/lib/alfieri/data";
import { ContactForm } from "@/components/alfieri/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${COMPANY_FULL}. Call 216-481-1717 or fill out our form. Located at ${ADDRESS_FULL}. Serving Cleveland and Northeast Ohio.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Contact
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h1 className="text-4xl font-black text-[#0d1444] mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within one business day. For urgent or emergency work, please call us directly.
          </p>
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-[#f0f4ff] rounded-2xl p-6">
            <h2 className="font-black text-[#0d1444] text-lg mb-5">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-semibold text-[#0d1444] text-sm">Phone</p>
                  <a href={PHONE_HREF} className="text-[#1a237e] hover:underline font-bold">{PHONE}</a>
                  <p className="text-gray-500 text-xs mt-0.5">Emergency sewer service 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-semibold text-[#0d1444] text-sm">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-[#1a237e] hover:underline">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-[#0d1444] text-sm">Location</p>
                  <p className="text-gray-700 text-sm">{ADDRESS_FULL}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-semibold text-[#0d1444] text-sm">Hours</p>
                  <p className="text-gray-700 text-sm">Mon–Fri: 7:00 AM – 5:00 PM</p>
                  <p className="text-gray-700 text-sm">Saturday: By appointment</p>
                  <p className="text-[#cc2222] text-sm font-semibold">24/7 Emergency Sewer Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-2xl h-56 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <p className="font-bold text-[#0d1444] text-sm">18100 Lanken Avenue</p>
              <p className="text-gray-500 text-sm">Cleveland, OH 44119</p>
              <a
                href="https://maps.google.com/?q=18100+Lanken+Avenue+Cleveland+OH+44119"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a237e] hover:underline text-xs mt-2 block"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="bg-[#cc2222] text-white rounded-2xl p-5 text-center">
            <p className="font-black text-lg mb-1">🚨 Sewer Emergency?</p>
            <p className="text-red-200 text-sm mb-3">Don't wait — sewer backups can cause serious damage fast.</p>
            <a href={PHONE_HREF} className="inline-block bg-white text-[#cc2222] font-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Call {PHONE} Now
            </a>
          </div>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
