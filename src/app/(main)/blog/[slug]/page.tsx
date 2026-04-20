import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
};

const posts: BlogPost[] = [
  {
    slug: "biomarker-interpretation-ai-longevity",
    title: "How AI Biomarker Interpretation Is Changing Longevity Medicine",
    excerpt:
      "Manual lab interpretation used to take 45+ minutes per patient. AI is changing that — and changing the quality of recommendations along the way.",
    date: "2026-03-15",
    category: "AI & Technology",
    readTime: "7 min read",
    content: `
Longevity medicine is fundamentally a data problem. Each patient walks in carrying decades of health history, genetic tendencies, and dozens of lab values — each one a signal in a complex, interconnected system. For years, the bottleneck in high-quality personalized care was the physician's interpretive time.

## The Manual Interpretation Problem

A comprehensive longevity intake typically involves analyzing 80–120 biomarkers: hormones, metabolic panels, inflammatory markers, micronutrients, heavy metals, cardiovascular risk factors, and more. Doing this well — meaning, identifying not just what's "out of range" but what's *optimally suboptimal* given the patient's full picture — requires significant expertise and significant time.

Most physicians in busy practices report spending 45 minutes or more per patient just on lab interpretation, before they've even thought about what to recommend.

## What AI Changes

Modern AI systems trained on clinical evidence and functional medicine frameworks can analyze a complete biomarker panel in seconds — not just flagging out-of-range values, but:

- Cross-referencing biomarkers that interact (e.g., how magnesium status affects thyroid conversion)
- Applying functional reference ranges rather than just lab normals
- Ranking interventions by expected impact given the patient's full biomarker picture
- Generating patient-friendly explanations of what each value means and why it matters

The result isn't just speed — it's a higher ceiling of analytical quality than most clinicians can consistently reach given the time pressure of a busy practice.

## The Clinician's Role Evolves

This doesn't replace physician judgment — it amplifies it. When the interpretive work is handled by AI, physicians can focus on the areas where human judgment is irreplaceable: patient communication, nuanced clinical reasoning, and the therapeutic relationship.

Practices using AI biomarker interpretation report that their physicians shift from "lab reviewer" to "clinical strategist" — spending their time on higher-order thinking rather than data processing.

## Implementation Considerations

For practices considering AI biomarker interpretation, a few things to evaluate:

1. **Does it handle functional ranges?** Standard lab normals are designed to identify disease, not optimize health. An AI system built for longevity medicine should use functional ranges.
2. **Is the reasoning transparent?** Clinicians need to understand and trust the AI's rationale, not just accept its outputs blindly.
3. **Does it integrate with your lab ordering system?** Results should flow automatically into the AI, not require manual entry.

The future of longevity medicine runs on data. The practices building AI infrastructure today are the ones that will scale without limits tomorrow.
    `,
  },
  {
    slug: "peptide-protocol-automation",
    title: "Automating Peptide Protocol Generation: What Clinics Need to Know",
    excerpt:
      "Peptide therapy is one of the fastest-growing areas in longevity medicine. Here's how AI is helping clinics prescribe with precision and consistency.",
    date: "2026-03-08",
    category: "Protocols",
    readTime: "9 min read",
    content: `
Peptide therapy has exploded in popularity within longevity and anti-aging medicine over the past several years. From BPC-157 for tissue repair to Sermorelin for GH optimization, the landscape of clinically-applicable peptides has grown dramatically — creating both opportunity and operational complexity for practices.

## The Protocol Complexity Problem

Unlike a standard supplement recommendation, peptide protocols involve multiple variables: which peptide(s) to use, the form (injectable vs. oral), dosing, cycle length, stacking considerations, contraindications, and patient monitoring requirements. Creating individualized protocols for every patient manually is time-intensive and introduces variability in quality across providers.

## How AI Brings Consistency and Personalization

An AI system trained on peptide clinical evidence and pharmacology can:

- Match peptide candidates to each patient's specific goals and biomarker profile
- Check for contraindications based on health history and current medications
- Generate dosing recommendations based on patient weight, age, and clinical picture
- Create cycle and monitoring plans
- Surface the evidence base for each recommendation

The combination of personalization and consistency is the key benefit: every patient gets a protocol tailored to them, but built on the same evidence-based foundation.

## What AI Can't Replace

AI-generated peptide protocols should always be reviewed and approved by a licensed clinician. The regulatory landscape for peptide therapy continues to evolve, and clinical judgment remains essential for navigating edge cases, managing patient expectations, and handling adverse reactions.

The goal is not to automate away physician oversight — it's to automate the research and formatting work so physicians can review and approve more efficiently.

## Building a Scalable Peptide Program

Practices with strong peptide programs typically have three things in common: a clear clinical protocol framework, a systematic patient selection process, and efficient follow-up systems. AI can systematize all three — creating the infrastructure for a peptide program that scales without requiring proportionally more physician time.
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "KMD Global" },
    publisher: { "@type": "Organization", name: "KMD Global" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/blog" />} className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Button>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          <Separator className="mb-8" />

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside flex flex-col gap-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed my-4">
                    {block.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <Separator className="mt-12 mb-8" />

          {/* CTA */}
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">
              See How KMD Global Automates This for Your Clinic
            </h3>
            <p className="mt-2 text-muted-foreground">
              Book a free 30-minute demo and see the platform in action.
            </p>
            <Button nativeButton={false} render={<Link href="/demo" />} className="mt-4">
              Book a Demo
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
