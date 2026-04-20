import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  FlaskConical,
  ClipboardList,
  CalendarCheck,
  TrendingUp,
  FileText,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — AI Automation for Longevity Clinics",
  description:
    "Explore KMD Global's full suite of AI automation tools: biomarker interpretation, protocol generation, patient onboarding, outcome tracking, and content marketing.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "biomarkers",
    icon: FlaskConical,
    title: "Biomarker Interpretation",
    subtitle: "From raw labs to actionable insights in seconds",
    description:
      "Our AI engine analyzes comprehensive panels — hormones, metabolic markers, micronutrients, inflammatory markers, and more — cross-referencing each value against clinical evidence to surface the most impactful optimization opportunities for each patient.",
    capabilities: [
      "Comprehensive lab panel analysis (100+ biomarkers)",
      "Functional reference range interpretation",
      "Ranked intervention recommendations by impact",
      "Patient-friendly plain-language summaries",
      "Clinician-facing detailed clinical rationale",
      "Trend analysis across multiple lab draws",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "protocols",
    icon: ClipboardList,
    title: "Personalized Protocol Generation",
    subtitle: "Evidence-based, individualized, instantly delivered",
    description:
      "KMD Global generates fully personalized protocols for each patient — covering nutrition, targeted supplementation, exercise prescriptions, and peptide recommendations — all based on their unique biomarker picture, health history, and stated goals.",
    capabilities: [
      "Personalized nutrition plans with macro targets",
      "Targeted supplement stacks with dosing",
      "Exercise prescriptions by phase and ability",
      "Peptide protocol recommendations",
      "HRT and hormone optimization guidance",
      "Automatic protocol updates as labs change",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "onboarding",
    icon: CalendarCheck,
    title: "Patient Intake & Onboarding",
    subtitle: "A frictionless first experience for every new patient",
    description:
      "Automate every step of the patient journey from initial inquiry to first consultation — intake forms, health history, goal-setting, consent, and pre-visit education — so your team walks into every appointment fully prepared.",
    capabilities: [
      "Automated intake form collection and analysis",
      "AI-powered health history summarization",
      "Goal-setting questionnaire and risk stratification",
      "Pre-visit preparation checklists",
      "Consent and policy document management",
      "Welcome sequences and pre-education delivery",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "tracking",
    icon: TrendingUp,
    title: "Progress & Biological Age Tracking",
    subtitle: "Make outcomes visible — and keep patients coming back",
    description:
      "Show patients their progress in clear, compelling ways. Track biological age, biomarker trajectories, body composition, and protocol adherence over time with automated reports that make the value of your program undeniable.",
    capabilities: [
      "Biological age calculation and trend tracking",
      "Lab value trend visualization",
      "Body composition monitoring integration",
      "Protocol adherence tracking",
      "Automated progress reports for patients",
      "Clinical outcome dashboards for providers",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "content",
    icon: FileText,
    title: "Clinic Content Generation",
    subtitle: "Stay top-of-mind without the content burden",
    description:
      "Generate a consistent stream of high-quality, on-brand content — educational emails, social media posts, patient follow-up messages, and blog articles — all tailored to your patient segments and clinic voice.",
    capabilities: [
      "Email campaign generation by patient segment",
      "Social media content calendar",
      "Educational blog article drafts",
      "Patient follow-up message sequences",
      "Re-engagement campaigns for inactive patients",
      "Lab result explanation content",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Workflow Automation",
    subtitle: "Connect your existing tools and eliminate manual work",
    description:
      "KMD Global integrates with your EHR, lab ordering, scheduling, and billing platforms to create seamless automated workflows — from lab result routing to follow-up scheduling to billing triggers.",
    capabilities: [
      "EHR integration (major platforms supported)",
      "Lab ordering platform connections",
      "Automated follow-up scheduling",
      "Lab result routing and notifications",
      "Billing trigger automation",
      "Custom workflow builder",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation for Longevity Clinics",
    provider: {
      "@type": "Organization",
      name: "KMD Global",
    },
    description:
      "Comprehensive AI automation platform for anti-aging and longevity medical practices.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Services</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Complete AI Stack for<br className="hidden sm:block" /> Longevity Clinics
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every tool you need to automate clinical operations, personalize patient care, and scale your practice — built specifically for functional medicine and longevity.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.bg} mb-4`}>
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                    <p className="mt-1 text-base font-medium text-muted-foreground">{service.subtitle}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {/* Capabilities card */}
                  <div className="flex-1">
                    <Card className="border-border/60 h-full">
                      <CardHeader className="pb-3">
                        <h3 className="font-semibold text-foreground">What&apos;s Included</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="flex flex-col gap-3">
                          {service.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${service.color}`} />
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

      <CtaBanner />
    </>
  );
}
