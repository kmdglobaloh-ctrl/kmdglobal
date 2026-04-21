import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Globe, Zap, BookOpen, ChevronRight, MessageSquare, Newspaper, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "KMD Global | AI Products",
  description:
    "KMD Global builds AI-powered software products. Our first product is Spanish Training — learn practical Spanish for travel through AI-powered conversation practice.",
  alternates: { canonical: "/" },
};

const products = [
  {
    href: "/spanish-training",
    badge: "Live",
    badgeVariant: "default" as const,
    icon: Globe,
    name: "Spanish Training",
    tagline: "Learn Spanish for Real Travel — AI Conversation Practice",
    description:
      "Learn practical Spanish for Central America and the Caribbean coast. Region-specific dialects, local slang, real-world scenarios like restaurants and tuk-tuks, and AI conversation practice with instant grammar feedback.",
    cta: "Start Learning",
    accent: "text-primary",
    accentBg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    href: "/local-news",
    badge: "Live",
    badgeVariant: "default" as const,
    icon: Newspaper,
    name: "Local News",
    tagline: "Caribbean Coast & Costa Rica — Updated Hourly",
    description:
      "Live news feed for travelers and locals in Limón, Costa Rica. Caribbean coast stories highlighted, plus general Costa Rica news from The Tico Times and Q Costa Rica.",
    cta: "Read News",
    accent: "text-primary",
    accentBg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    href: "/things-to-do",
    badge: "Live",
    badgeVariant: "default" as const,
    icon: Map,
    name: "Things To Do",
    tagline: "Restaurants, Adventures, Tours & Beaches — Limón, CR",
    description:
      "Curated guide to the best experiences on Costa Rica's Caribbean coast. Restaurants, surf spots, wildlife tours, hidden beaches, and more — filtered by category.",
    cta: "Explore",
    accent: "text-primary",
    accentBg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    href: "#",
    badge: "Coming Soon",
    badgeVariant: "secondary" as const,
    icon: MessageSquare,
    name: "More Coming",
    tagline: "More destinations and tools in development",
    description:
      "We're expanding to more travel destinations and building more focused tools. More regions, more features, coming soon.",
    cta: "Coming Soon",
    accent: "text-muted-foreground",
    accentBg: "bg-muted/50",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Learn by Doing",
    description:
      "Every product is built around active practice — not passive reading. Our Spanish Training app puts you in real conversations from day one.",
  },
  {
    icon: Globe,
    title: "Local & Specific",
    description:
      "We go deep into context. Spanish Training isn't generic — it's built for specific regions, dialects, and real situations you'll actually face.",
  },
  {
    icon: Zap,
    title: "AI-Powered Feedback",
    description:
      "Instant corrections with clear explanations. Every mistake becomes a lesson, and every correct answer gets reinforced — automatically.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 dark:from-primary/15 via-background to-background py-24 sm:py-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-primary/8 dark:bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/8 dark:bg-accent/20 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              AI-Powered Learning
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              AI Tools That{" "}
              <span className="text-primary">Actually Help</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              KMD Global builds focused AI products for real-world use. Our first: a Spanish language trainer built for travelers — with local slang, AI conversation practice, and instant feedback.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" nativeButton={false} render={<Link href="/spanish-training" />} className="gap-2">
                Try Spanish Training
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
              Focused Tools. Real Results.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Each product is built for a specific purpose — no bloat, no generic features. Just the thing you need, done well.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
              Three principles behind every product we ship.
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

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 sm:px-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                Ready to Learn Spanish?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Start with Chapter 1 — greetings and basics — and work your way through real conversations with an AI local. No account needed.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  nativeButton={false}
                  render={<Link href="/spanish-training" />}
                  className="gap-2 font-semibold"
                >
                  Start Learning Free
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
