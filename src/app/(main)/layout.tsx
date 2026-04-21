import type { Metadata } from "next";
import { NavbarWrapper } from "@/components/layout/navbar-wrapper";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kmdglobal.ai"),
  title: {
    default: "KMD Global | AI Products",
    template: "%s | KMD Global",
  },
  description:
    "KMD Global builds focused AI-powered software products. Our first product is Spanish Training — learn practical Spanish for travel through AI-powered conversation practice.",
  keywords: [
    "AI tools",
    "Spanish learning app",
    "learn Spanish for travel",
    "AI conversation practice",
    "Spanish training",
    "travel Spanish",
    "Central America Spanish",
    "Caribbean Spanish",
    "AI language learning",
    "KMD Global",
  ],
  authors: [{ name: "KMD Global" }],
  creator: "KMD Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kmdglobal.ai",
    siteName: "KMD Global",
    title: "KMD Global | AI Products",
    description:
      "KMD Global builds focused AI-powered software products. Try Spanish Training — AI conversation practice for real-world travel.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KMD Global - AI Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KMD Global | AI Products",
    description:
      "KMD Global builds focused AI-powered software products. Try Spanish Training — AI conversation practice for real-world travel.",
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
      <NavbarWrapper />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
