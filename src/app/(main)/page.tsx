import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Brain, Cpu, Globe, Zap, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "KMD Global | AI Innovation Company",
  description:
    "KMD Global builds AI-powered software products that transform industries. We create intelligent systems that automate complex workflows, surface deep insights, and help businesses scale.",
  alternates: { canonical: "/" },
};

const products = [
  {
    href: "/longevity",
    badge: "Live",
    badgeVariant: "default" as const,
    icon: Brain,
    name: "Longevity AI",
    tagline: "AI Automation for Anti-Aging & Longevity Clinics",
    description:
      "Automates biomarker interpretation, personalized protocols, patient onboarding, and progress tracking for longevity and functional medicine practices.",
    cta: "Explore Longevity AI",
    accent: "text-primary",
    accentBg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    href: "#",
    badge: "Coming Soon",
    badgeVariant: "secondary" as const,
    icon: Cpu,
    name: "Enterprise AI Platform",
    tagline: "Intelligent Workflow Automation for Operations Teams",
    description:
      "A horizontal AI platform that connects your data, automates repetitive decision-making, and delivers insights across finance, HR, and supply chain.",
    cta: "Join Waitlist",
    accent: "text-accent",
    accentBg: "bg-accent/10 dark:bg-accent/15",
  },
];

const pillars = [
  {
    icon: Brain,
    title: "AI-Native by Design",
    description:
      "Every product we build puts AI at the core — not as a bolt-on feature, but as the fundamental architecture that makes each system smarter over time.",
  },
  {
    icon: Globe,
    title: "Vertical Depth",
    description:
      "We go deep into specific industries to build AI that understands domain context, clinical nuance, and operational reality — not generic tools.",
  },
  {
    icon: Zap,
    title: "Measurable Impact",
    description:
      "We don't ship features. We ship outcomes. Every product is built around a clear value metric: time saved, revenue generated, quality improved.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KMD Global",
    url: "https://kmdglobal.ai",
    description:
      "AI innovation company building intelligent software products that transform industries.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@kmdglobal.ai",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 dark:from-primary/15 via-background to-background py-24 sm:py-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-primary/8 dark:bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/8 dark:bg-accent/20 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              Tech Innovation
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              We Build AI That{" "}
              <span className="text-primary">Changes Industries</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              KMD Global is a technology company focused on building AI-native software products that automate complex workflows, surface deep insights, and help businesses scale without limits.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/longevity" />} className="gap-2">
                See Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/contact" />}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-28" id="products">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Badge variant="secondary" className="mb-4">Our Products</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI Built for the Industries That Matter
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Each product is a focused, vertical AI system — purpose-built for a specific industry with deep domain knowledge baked in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="group relative overflow-hidden border-border/60 hover:border-border transition-all hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${product.accentBg}`}>
                        <Icon className={`h-6 w-6 ${product.accent}`} />
                      </div>
                      <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <p className={`text-sm font-medium ${product.accent}`}>{product.tagline}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    {product.href !== "#" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        nativeButton={false}
                        render={<Link href={product.href} />}
                        className={`w-fit gap-1.5 px-0 hover:px-2 transition-all ${product.accent} hover:bg-transparent`}
                      >
                        {product.cta}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className={`w-fit gap-1.5 px-0 ${product.accent} hover:bg-transparent`} disabled>
                        {product.cta}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-28 bg-muted/30 dark:bg-white/[0.03]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Build
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
              Three principles that drive every product decision at KMD Global.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company CTA */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 sm:px-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                Building Something That Could Use AI?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                We work with select partners and enterprises to build custom AI solutions. If you have a problem that deserves an intelligent system, let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  className="gap-2 font-semibold"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
