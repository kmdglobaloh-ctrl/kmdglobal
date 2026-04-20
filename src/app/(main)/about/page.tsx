import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About KMD Global",
  description:
    "KMD Global builds focused AI-powered software products for real-world use. Learn about who we are and what we're building.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Focused Over Broad",
    description:
      "We don't build general-purpose tools. Every product we ship is built for a specific use case, a specific user, and a specific problem. We'd rather do one thing extremely well than ten things adequately.",
  },
  {
    icon: Globe,
    title: "Real-World Utility",
    description:
      "Our products are designed for situations you'll actually face — not abstract exercises. Spanish Training exists because we believe the best way to learn a language is through real conversations in real contexts.",
  },
  {
    icon: Zap,
    title: "AI as the Engine",
    description:
      "We use AI to do what it does best: give instant, personalized feedback at scale. Every product we build uses AI to make the experience better than anything a static tool could offer.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              We Build AI Tools That Actually Get Used
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              KMD Global is a small team building focused AI-powered software products. We&apos;re not trying to build everything — we&apos;re trying to build the right things, done well.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our first product is Spanish Training — a language learning app built specifically for travelers heading to Central America and the Caribbean coast. Region-specific slang, real-world scenarios, and AI conversation practice with instant feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We identify specific problems where AI can make a meaningful difference — and we build tight, polished tools around those problems. No bloat. No feature creep. Just the thing you need, done well.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every product is built around active use, not passive consumption. You learn Spanish by having conversations, not by watching videos. You get better by making mistakes and understanding why — automatically, in real time.
              </p>
              <div className="mt-8">
                <Button nativeButton={false} render={<Link href="/spanish-training" />} className="gap-2">
                  Try Spanish Training
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="mt-1 text-sm text-muted-foreground">Live product, ready to use</div>
              </div>
              <div className="rounded-xl bg-accent/5 p-6 border border-accent/10">
                <div className="text-3xl font-bold text-accent">Free</div>
                <div className="mt-1 text-sm text-muted-foreground">No account required to start</div>
              </div>
              <div className="rounded-xl bg-accent/5 p-6 border border-accent/10">
                <div className="text-3xl font-bold text-accent">AI</div>
                <div className="mt-1 text-sm text-muted-foreground">Powered conversation practice</div>
              </div>
              <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="mt-1 text-sm text-muted-foreground">Regional dialects covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-white/[0.03]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to Try It?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Spanish Training is free to start — no account needed. Jump in and have your first AI conversation in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
              <Button
                size="lg"
                variant="ghost"
                nativeButton={false}
                render={<Link href="/contact" />}
                className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
