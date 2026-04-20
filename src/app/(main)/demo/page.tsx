import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Try Spanish Training Free",
  description:
    "Try Spanish Training — AI-powered conversation practice for real-world travel Spanish. No account required.",
  alternates: { canonical: "/demo" },
};

const steps = [
  {
    icon: Globe,
    step: "1",
    title: "Pick Your Region",
    description: "Choose between Caribbean Costa Rica or General Central American Spanish — each with its own dialect, slang, and scenarios.",
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Work Through Chapters",
    description: "Each chapter covers a real travel scenario — restaurants, transportation, markets, and more. Learn vocabulary, grammar notes, and local context.",
  },
  {
    icon: Zap,
    step: "3",
    title: "Practice with AI",
    description: "End each chapter with an AI conversation. Chat with a virtual local, get instant corrections, and build real speaking confidence.",
  },
];

export default function DemoPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <Badge variant="secondary" className="mb-4">Free — No Account Needed</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              Try Spanish Training
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              In a few minutes, you&apos;ll be having your first AI conversation in Spanish. Here&apos;s how it works:
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6">
              <p className="text-sm font-medium text-foreground mb-1">No pressure. No commitment.</p>
              <p className="text-sm text-muted-foreground">
                Start for free with no account. Come back whenever you want to practice more.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-2">Ready to Start?</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Jump straight into Spanish Training. Pick your region and start Chapter 1.
              </p>
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/spanish-training" />}
                className="w-full gap-2 font-semibold"
              >
                Start Learning Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-4 text-xs text-center text-muted-foreground">
                No account, no credit card, no download required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
