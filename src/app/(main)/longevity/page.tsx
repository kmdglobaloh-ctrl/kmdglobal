import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Longevity AI | AI Automation for Anti-Aging & Longevity Clinics",
  description:
    "KMD Global's Longevity AI automates biomarker interpretation, personalized protocols, patient onboarding, and progress tracking for anti-aging and longevity clinics.",
  alternates: {
    canonical: "/longevity",
  },
};

export default function LongevityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "KMD Global Longevity AI",
    applicationCategory: "HealthcareApplication",
    url: "https://kmdglobal.ai/longevity",
    description:
      "AI automation platform purpose-built for anti-aging and longevity clinics.",
    provider: {
      "@type": "Organization",
      name: "KMD Global",
      url: "https://kmdglobal.ai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <CtaBanner />
    </>
  );
}
