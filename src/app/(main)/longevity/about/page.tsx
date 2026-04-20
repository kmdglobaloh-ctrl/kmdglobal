import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About KMD Global — AI for Longevity Clinics",
  description:
    "KMD Global was founded to give longevity and functional medicine clinics the AI infrastructure to scale patient care without sacrificing personalization.",
  alternates: { canonical: "/longevity/about" },
};

const values = [
  {
    icon: Target,
    title: "Precision Over Volume",
    description:
      "We believe the future of healthcare is deeply personalized. Every patient is unique, and their care should reflect that — not generic recommendations, but specific, evidence-driven protocols built for them.",
  },
  {
    icon: Eye,
    title: "Transparency in AI",
    description:
      "Our AI doesn't black-box its reasoning. Every recommendation comes with clinical rationale so clinicians can trust, verify, and customize what the AI produces. You stay in control.",
  },
  {
    icon: Heart,
    title: "Built for Clinicians",
    description:
      "We built KMD Global alongside practicing longevity physicians. Every feature exists to reduce clinical burden, not add to it. If it doesn't save time or improve outcomes, it doesn't ship.",
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
              We Built the AI We Wished Longevity Clinics Had
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              KMD Global was founded by a team of physicians, clinical data scientists, and healthcare technologists who saw the same problem everywhere: exceptional longevity clinics were being held back by manual, time-intensive clinical processes that limited their ability to scale without sacrificing quality.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We built the platform we wished existed — an AI system that could do the interpretive and administrative heavy lifting, freeing clinicians to do what they do best: think critically, build relationships, and change patients&apos; lives.
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
                Our Mission
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To accelerate the adoption of personalized longevity medicine by giving clinics the AI infrastructure to deliver exceptional, individualized care at scale — without burning out their teams or compromising clinical quality.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We envision a world where every patient who walks into a longevity clinic receives a protocol as personalized as their DNA, delivered in minutes, and tracked with the rigor of a clinical trial.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-primary/5 dark:bg-primary/10 p-6 border border-primary/10 dark:border-primary/20">
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="mt-1 text-sm text-muted-foreground">Faster protocol generation vs. manual</div>
              </div>
              <div className="rounded-xl bg-accent/5 dark:bg-accent/10 p-6 border border-accent/10 dark:border-accent/20">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="mt-1 text-sm text-muted-foreground">Biomarkers analyzed per patient</div>
              </div>
              <div className="rounded-xl bg-accent/5 dark:bg-accent/10 p-6 border border-accent/10 dark:border-accent/20">
                <div className="text-3xl font-bold text-accent">94%</div>
                <div className="mt-1 text-sm text-muted-foreground">Patient retention rate reported</div>
              </div>
              <div className="rounded-xl bg-primary/5 dark:bg-primary/10 p-6 border border-primary/10 dark:border-primary/20">
                <div className="text-3xl font-bold text-primary">0 hr</div>
                <div className="mt-1 text-sm text-muted-foreground">Manual protocol writing with KMD</div>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
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

      <CtaBanner />
    </>
  );
}
