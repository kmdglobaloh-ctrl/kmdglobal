import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: "01",
    title: "Connect Your Clinic Data",
    description:
      "Integrate with your EHR, lab ordering platform, and scheduling tools in minutes. KMD Global works with the systems you already use.",
  },
  {
    step: "02",
    title: "AI Analyzes Patient Biomarkers",
    description:
      "As labs come in, our AI engine interprets results, flags optimization opportunities, and generates ranked interventions based on clinical evidence.",
  },
  {
    step: "03",
    title: "Protocols Are Generated Automatically",
    description:
      "Personalized nutrition, exercise, supplement, and peptide protocols are generated for each patient based on their unique biomarker profile and goals.",
  },
  {
    step: "04",
    title: "Patients Receive Personalized Guidance",
    description:
      "Patients get clear, actionable reports and follow-up communications. They understand their results, feel supported, and stay engaged long-term.",
  },
  {
    step: "05",
    title: "Track Outcomes & Optimize",
    description:
      "Monitor biological age trajectories, protocol adherence, and clinical outcomes over time. Continuously improve your protocols with real-world data.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 dark:bg-white/[0.03]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge variant="secondary">How It Works</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Lab Results to Personalized Protocols in Minutes
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            KMD Global fits into your existing clinical workflow, amplifying your team&apos;s capacity without changing how you practice medicine.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="flex gap-6 items-start">
              {/* Step indicator */}
              <div className="flex flex-col items-center shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.step}
                </div>
              </div>
              {/* Content */}
              <div className="pt-1 pb-6 border-b border-border/50 flex-1 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
