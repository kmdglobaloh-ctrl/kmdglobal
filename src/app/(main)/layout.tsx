import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kmdglobal.ai"),
  title: {
    default: "KMD Global | AI Automation for Longevity & Anti-Aging Clinics",
    template: "%s | KMD Global",
  },
  description:
    "KMD Global automates biomarker interpretation, personalized protocols, patient onboarding, and progress tracking for anti-aging and longevity clinics. Scale your practice with AI.",
  keywords: [
    "AI for longevity clinics",
    "automate functional medicine protocols",
    "longevity practice AI automation",
    "anti-aging clinic software",
    "biomarker interpretation AI",
    "personalized longevity protocols",
    "functional medicine AI",
    "healthspan clinic automation",
    "peptide protocol automation",
    "biological age tracking",
  ],
  authors: [{ name: "KMD Global" }],
  creator: "KMD Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kmdglobal.ai",
    siteName: "KMD Global",
    title: "KMD Global | AI Automation for Longevity & Anti-Aging Clinics",
    description:
      "Automate biomarker interpretation, personalized protocols, and patient management for your longevity clinic. Book a demo today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KMD Global - AI for Longevity Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KMD Global | AI Automation for Longevity & Anti-Aging Clinics",
    description:
      "Automate biomarker interpretation, personalized protocols, and patient management for your longevity clinic.",
    images: ["/og-image.png"],
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
