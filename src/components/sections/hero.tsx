import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "No manual protocol writing",
  "Automated patient onboarding",
  "Real-time biomarker insights",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 dark:from-primary/15 via-background to-background py-20 sm:py-28 lg:py-36">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/8 dark:bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/8 dark:bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
            Purpose-Built for Longevity Clinics
          </Badge>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI That Runs Your{" "}
            <span className="text-primary">Longevity Practice</span>{" "}
            On Autopilot
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Automate biomarker interpretation, personalized nutrition and peptide protocols, patient onboarding, and biological age tracking — so your clinicians focus on patients, not paperwork.
          </p>

          {/* Trust signals */}
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href="/longevity/demo" />} className="gap-2">
              Book a Free Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/longevity/services" />}>
              See How It Works
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-xs text-muted-foreground">
            Trusted by forward-thinking longevity practices
          </p>
        </div>
      </div>
    </section>
  );
}
