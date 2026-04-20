import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FlaskConical,
  ClipboardList,
  TrendingUp,
  FileText,
  CalendarCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    id: "biomarkers",
    title: "Biomarker Interpretation",
    description:
      "AI analyzes labs, hormones, metabolic panels, and micronutrients instantly — generating patient-specific insights and ranked interventions in seconds, not hours.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ClipboardList,
    id: "protocols",
    title: "Personalized Protocol Generation",
    description:
      "Automatically create tailored nutrition, exercise, supplement, and peptide protocols based on each patient's biomarker profile, goals, and health history.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: CalendarCheck,
    id: "onboarding",
    title: "Patient Intake & Onboarding",
    description:
      "Streamline the entire intake process — from intake forms and consent to goal-setting and initial consultation prep — all automated and personalized.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    id: "tracking",
    title: "Progress & Biological Age Tracking",
    description:
      "Track biological age, lab trends, body composition, and protocol adherence over time with automated reports patients love and clinicians trust.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: FileText,
    id: "content",
    title: "Clinic Content Generation",
    description:
      "Generate email campaigns, educational content, social posts, and patient follow-up messages — all personalized to your brand and patient segments.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    id: "automation",
    title: "Workflow Automation",
    description:
      "Connect your existing EHR, scheduling, and billing tools. Automate follow-ups, lab reminders, and re-engagement sequences with zero manual effort.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28" id="features">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything Your Longevity Clinic Needs to Scale
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            From the first patient touchpoint to long-term outcome tracking, KMD Global automates the clinical and operational work that holds practices back.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                id={feature.id}
                className="border border-border/60 hover:border-border transition-colors hover:shadow-md"
              >
                <CardHeader className="pb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} mb-3`}>
                    <Icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
