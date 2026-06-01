import type { Metadata } from "next";
import { AlfieriNavbar } from "@/components/alfieri/navbar";
import { AlfieriFooter } from "@/components/alfieri/footer";
import { MobileCtaBar } from "@/components/alfieri/mobile-cta-bar";
import { PreviewGate } from "@/components/alfieri/preview-gate";
import {
  COMPANY_FULL, TAGLINE, PHONE, EMAIL,
  ADDRESS_STREET, ADDRESS_CITY, ADDRESS_STATE, ADDRESS_ZIP,
  ESTABLISHED,
} from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: { default: "Alfieri Brothers Contracting & Excavation | Cleveland, OH", template: "%s | Alfieri Brothers" },
  description: `${COMPANY_FULL} — ${TAGLINE}. Serving Cleveland and Northeast Ohio since ${ESTABLISHED}.`,
  robots: { index: false, follow: false },
};

export default function AlfieriLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY_FULL,
    url: "https://kmdglobal.com/alfieri",
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_CITY,
      addressRegion: ADDRESS_STATE,
      postalCode: ADDRESS_ZIP,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.5827, longitude: -81.5546 },
    foundingDate: String(ESTABLISHED),
    areaServed: "Cleveland, OH and Northeast Ohio",
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-17:00",
  };

  return (
    <PreviewGate>
      <div className="min-h-screen bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <AlfieriNavbar />
        <main>{children}</main>
        <MobileCtaBar />
        <AlfieriFooter />
      </div>
    </PreviewGate>
  );
}
