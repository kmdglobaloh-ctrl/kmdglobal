import type { Metadata } from "next";
import { HandymanNavbar } from "@/components/handyman/navbar";
import { HandymanFooter } from "@/components/handyman/footer";
import { MobileCtaBar } from "@/components/handyman/mobile-cta-bar";
import { COMPANY_NAME, TAGLINE, PHONE, ADDRESS } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} — ${TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "ProHandy Services provides reliable handyman, home repair, and maintenance services in Chagrin Falls, OH and surrounding communities. Licensed, insured, and satisfaction guaranteed.",
  keywords: [
    "handyman Chagrin Falls",
    "home repair Ohio",
    "handyman near me",
    "home maintenance Geauga County",
    "handyman Solon Aurora Ohio",
  ],
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description:
      "Reliable handyman and home repair services in Chagrin Falls, OH. Licensed, bonded, and insured. Same-day service available.",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY_NAME,
  description: TAGLINE,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chagrin Falls",
    addressRegion: "OH",
    postalCode: "44022",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.4273,
      longitude: -81.3884,
    },
    geoRadius: "48000",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },
};

export default function HandymanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" style={{ colorScheme: "light" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HandymanNavbar />
      <main className="flex-1">{children}</main>
      <HandymanFooter />
      <MobileCtaBar />
    </div>
  );
}
