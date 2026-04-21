import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Longevity Clinic AI Insights",
  description:
    "Expert insights on AI automation, biomarker optimization, and scaling longevity medical practices. Written for longevity clinic owners and physicians.",
  alternates: { canonical: "/longevity/blog" },
};

const posts = [
  {
    slug: "biomarker-interpretation-ai-longevity",
    title: "How AI Biomarker Interpretation Is Changing Longevity Medicine",
    excerpt:
      "Manual lab interpretation used to take 45+ minutes per patient. AI is changing that — and changing the quality of recommendations along the way.",
    date: "2026-03-15",
    category: "AI & Technology",
    readTime: "7 min read",
  },
  {
    slug: "peptide-protocol-automation",
    title: "Automating Peptide Protocol Generation: What Clinics Need to Know",
    excerpt:
      "Peptide therapy is one of the fastest-growing areas in longevity medicine. Here's how AI is helping clinics prescribe with precision and consistency.",
    date: "2026-03-08",
    category: "Protocols",
    readTime: "9 min read",
  },
  {
    slug: "biological-age-tracking-outcomes",
    title: "Biological Age Tracking: The Metric That Makes Patients Stay",
    excerpt:
      "Practices that show patients their biological age trajectory see dramatically higher retention. Here's the science and the strategy.",
    date: "2026-03-01",
    category: "Patient Outcomes",
    readTime: "6 min read",
  },
  {
    slug: "scaling-cash-pay-longevity-practice",
    title: "How to Scale a Cash-Pay Longevity Practice Without Burning Out Your Team",
    excerpt:
      "The bottleneck for most high-revenue longevity clinics isn't demand — it's clinical capacity. AI automation is the unlock.",
    date: "2026-02-22",
    category: "Practice Growth",
    readTime: "8 min read",
  },
  {
    slug: "functional-medicine-ai-integration",
    title: "Integrating AI Into a Functional Medicine Practice: A Practical Guide",
    excerpt:
      "Not all AI tools are built for functional medicine. This guide covers what to look for, what to avoid, and how to onboard your team.",
    date: "2026-02-14",
    category: "Guides",
    readTime: "11 min read",
  },
  {
    slug: "patient-onboarding-automation-longevity",
    title: "The Longevity Clinic Onboarding System That Converts 3x Better",
    excerpt:
      "First impressions determine whether patients invest in long-term programs. Here's how automated onboarding creates immediate perceived value.",
    date: "2026-02-07",
    category: "Patient Experience",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Blog</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Insights for Longevity Clinic Leaders
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Practical strategies on AI, clinical automation, biomarker optimization, and scaling high-revenue longevity practices.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full border-border/60 transition-shadow hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
