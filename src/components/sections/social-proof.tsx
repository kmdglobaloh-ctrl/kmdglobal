import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "KMD Global cut our per-patient protocol time from 45 minutes to under 3 minutes. We&apos;ve tripled our patient capacity without adding clinical staff.",
    author: "Dr. Sarah Chen",
    title: "Medical Director",
    clinic: "Apex Longevity Center",
  },
  {
    quote:
      "The biomarker interpretation AI is remarkable. It catches optimization opportunities our team would have missed and patients can actually understand their results for the first time.",
    author: "Dr. Marcus Reid",
    title: "Founder",
    clinic: "Vitality Medicine Institute",
  },
  {
    quote:
      "Our cash-pay revenue grew 40% in 6 months after implementing KMD Global. Patients stay longer because their results are visible and their protocols actually work.",
    author: "Dr. Jennifer Park",
    title: "Owner & Physician",
    clinic: "Healthspan Medical Group",
  },
];

const stats = [
  { value: "45min → 3min", label: "Protocol generation time" },
  { value: "40%+", label: "Average revenue growth" },
  { value: "3x", label: "Patient capacity increase" },
  { value: "94%", label: "Patient retention rate" },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center p-6 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20">
              <span className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <Badge variant="secondary">What Clinics Are Saying</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Longevity Clinics Love KMD Global
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} className="border-border/60">
              <CardContent className="pt-6 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.title} &mdash; {t.clinic}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
