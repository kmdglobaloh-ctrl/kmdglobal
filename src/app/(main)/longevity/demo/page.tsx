import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { DemoForm } from "@/components/sections/demo-form";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo — See KMD Global in Action",
  description:
    "Book a free 30-minute demo of KMD Global. See how our AI automates biomarker interpretation, protocol generation, and patient management for longevity clinics.",
  alternates: { canonical: "/longevity/demo" },
};

const demoPoints = [
  "Live walkthrough of biomarker interpretation AI",
  "See a full personalized protocol generated in real-time",
  "Review integration options with your existing systems",
  "Custom Q&A for your specific practice needs",
  "Pricing discussion based on your patient volume",
];

export default function DemoPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: value prop */}
          <div>
            <Badge variant="secondary" className="mb-4">Free 30-Minute Demo</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              See KMD Global in Action
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              In 30 minutes, we&apos;ll walk you through how KMD Global automates the most time-intensive parts of running a longevity clinic — and show you exactly how it would work for your practice.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                What We&apos;ll Cover
              </p>
              {demoPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 p-6">
              <p className="text-sm font-medium text-foreground mb-1">No pressure. No commitment.</p>
              <p className="text-sm text-muted-foreground">
                This is a discovery call as much as a demo. If KMD Global isn&apos;t the right fit for your clinic right now, we&apos;ll tell you honestly.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-24">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
