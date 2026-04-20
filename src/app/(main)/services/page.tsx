import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Globe, BookOpen, Zap, Map, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Spanish Training",
  description:
    "Explore what makes Spanish Training different: region-specific dialects, real-world scenarios, AI conversation practice, instant grammar feedback, and pronunciation tools.",
  alternates: { canonical: "/services" },
};

const features = [
  {
    id: "dialects",
    icon: Globe,
    title: "Region-Specific Dialects",
    subtitle: "Learn the Spanish people actually speak where you're going",
    description:
      "Generic Spanish courses teach you Castilian Spanish or textbook Latin American. Spanish Training is built around specific regions — Caribbean Costa Rica, General Central American — with the local slang, idioms, and expressions you'll actually hear.",
    capabilities: [
      "Caribbean Costa Rica dialect (Cocles, Puerto Viejo, Cahuita)",
      "General Central American Spanish",
      "Local slang and idioms, not just textbook phrases",
      "Regional vocabulary differences explained",
      "Cultural context alongside language",
      "More regions being added continuously",
    ],
    color: "text-primary",
    bg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    id: "scenarios",
    icon: Map,
    title: "Real-World Scenarios",
    subtitle: "Practice conversations you'll actually have",
    description:
      "Every chapter is built around situations you'll face as a traveler — ordering food, taking a tuk-tuk, asking for directions, shopping at markets, checking into accommodation. No abstract grammar drills; just the language you need.",
    capabilities: [
      "Restaurants and food ordering",
      "Transportation (tuk-tuks, buses, taxis)",
      "Accommodation and hotels",
      "Markets and shopping",
      "Asking for directions",
      "Social greetings and small talk",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "conversation",
    icon: MessageSquare,
    title: "AI Conversation Practice",
    subtitle: "Talk to an AI local — anytime, as many times as you want",
    description:
      "Each chapter ends with a conversation test where you chat with an AI character playing a local. They stay in character, respond naturally, and correct your Spanish as you go — giving you the reps you need without the awkwardness of practicing with a real person.",
    capabilities: [
      "AI character stays in-scenario the whole conversation",
      "Responds naturally to what you actually say",
      "Corrects grammar and vocabulary mistakes inline",
      "Explains why corrections were made",
      "No judgment — make mistakes freely",
      "Replay as many times as you want",
    ],
    color: "text-primary",
    bg: "bg-primary/10 dark:bg-primary/15",
  },
  {
    id: "feedback",
    icon: Zap,
    title: "Instant Grammar Feedback",
    subtitle: "Every mistake becomes a lesson",
    description:
      "When you get something right or wrong, the AI tells you immediately — with a clear explanation, not just a check or an X. You see exactly what you got right, what needs fixing, and why. Over time, patterns emerge and your Spanish improves.",
    capabilities: [
      "✓ marks for correct usage",
      "✗ marks with corrections and explanations",
      "Verb tense and conjugation guidance",
      "Vocabulary alternatives suggested",
      "Encouragement built into the feedback style",
      "Feedback calibrated to your current level",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "pronunciation",
    icon: BookOpen,
    title: "Pronunciation Tools",
    subtitle: "Hear how words actually sound before you say them",
    description:
      "Every vocabulary item and phrase has a pronunciation play button. Adjust the speed from very slow to normal so you can catch every syllable before trying it yourself. Uses your browser's built-in speech synthesis — no extra apps or accounts required.",
    capabilities: [
      "One-tap pronunciation for every phrase",
      "Adjustable speed (very slow to normal)",
      "Preferred Spanish voice selection",
      "Punctuation stripped for clean audio",
      "Works on mobile and desktop",
      "No account or download required",
    ],
    color: "text-primary",
    bg: "bg-primary/10 dark:bg-primary/15",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Makes Spanish Training Different
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Built for travelers, not classrooms. Region-specific, AI-powered, and designed to get you speaking in real situations fast.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{feature.title}</h2>
                    <p className="mt-1 text-base font-medium text-muted-foreground">{feature.subtitle}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="flex-1">
                    <Card className="border-border/60 h-full">
                      <CardHeader className="pb-3">
                        <h3 className="font-semibold text-foreground">What&apos;s Included</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="flex flex-col gap-3">
                          {feature.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${feature.color}`} />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
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
              Ready to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              No account required. Start with Chapter 1 and have your first AI conversation in minutes.
            </p>
            <div className="mt-8">
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
      </section>
    </>
  );
}
