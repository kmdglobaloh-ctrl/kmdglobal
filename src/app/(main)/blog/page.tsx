import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Spanish Learning & AI Tools",
  description:
    "Tips, guides, and insights on learning Spanish for travel, AI-powered language learning, and regional dialects of Central America and the Caribbean coast.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "learn-spanish-caribbean-coast",
    title: "What Makes Caribbean Coast Spanish Different (And Why It Matters for Travelers)",
    excerpt:
      "The Spanish spoken in Puerto Viejo and Cocles is a world away from what you learned in school. Here's what to expect and how to prepare.",
    date: "2026-04-10",
    category: "Regional Dialects",
    readTime: "6 min read",
  },
  {
    slug: "ai-conversation-practice-language-learning",
    title: "Why AI Conversation Practice Is the Fastest Way to Learn a Language",
    excerpt:
      "Reps matter more than anything in language learning. AI lets you get hundreds of reps — with instant corrections — without the embarrassment of practicing on real people.",
    date: "2026-04-03",
    category: "AI & Learning",
    readTime: "8 min read",
  },
  {
    slug: "travel-spanish-phrases-central-america",
    title: "20 Spanish Phrases Every Traveler to Central America Needs",
    excerpt:
      "Forget \"¿Dónde está la biblioteca?\" — here are the phrases that actually come up when you're ordering food, catching a tuk-tuk, and navigating a market.",
    date: "2026-03-27",
    category: "Travel Spanish",
    readTime: "5 min read",
  },
  {
    slug: "spanish-slang-costa-rica",
    title: "Costa Rican Slang: A Guide to Talking Like a Tico",
    excerpt:
      "\"Tuanis,\" \"mae,\" \"pura vida\" — Costa Rica has its own vocabulary that'll confuse you if you're not prepared. Here's a primer on the most common terms.",
    date: "2026-03-20",
    category: "Slang & Culture",
    readTime: "7 min read",
  },
  {
    slug: "how-to-practice-spanish-before-travel",
    title: "How to Practice Spanish Before a Trip (Without Boring Yourself to Death)",
    excerpt:
      "The usual advice — flashcards, apps, grammar drills — works but is slow. Here's a more engaging approach that gets you to conversational faster.",
    date: "2026-03-13",
    category: "Study Tips",
    readTime: "9 min read",
  },
  {
    slug: "ordering-food-spanish-central-america",
    title: "How to Order Food in Spanish in Central America",
    excerpt:
      "Walking into a local restaurant and ordering confidently is one of the most satisfying travel experiences. Here's exactly what to say.",
    date: "2026-03-06",
    category: "Travel Spanish",
    readTime: "5 min read",
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
            Learn Spanish for Real Travel
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Tips, guides, and insights on travel Spanish, regional dialects, and AI-powered language learning.
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
