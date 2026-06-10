import Link from "next/link";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import type { Metadata } from "next";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: "Blog",
  description: `Home improvement tips, project guides, and expert advice from ${config.company.name} in ${config.company.addressCity}.`,
};

const POSTS = [
  {
    slug: "kitchen-remodel-planning-guide",
    title: "The Complete Kitchen Remodel Planning Guide for Homeowners",
    excerpt: "Thinking about remodeling your kitchen? Before you swing a hammer, here's everything you need to know — from setting a realistic budget to choosing the right contractor.",
    category: "Kitchen Remodeling",
    date: "2026-05-15",
    readTime: "8 min read",
    emoji: "🍳",
  },
  {
    slug: "signs-you-need-new-roof",
    title: "7 Signs Your Roof Needs to Be Replaced (Not Just Repaired)",
    excerpt: "Most homeowners wait too long to replace their roof. Learn the warning signs that mean a repair won't cut it anymore — and what a full replacement actually involves.",
    category: "Roofing",
    date: "2026-05-01",
    readTime: "6 min read",
    emoji: "🏚️",
  },
  {
    slug: "basement-finishing-roi",
    title: "Finished Basement ROI: Is It Worth the Investment?",
    excerpt: "A finished basement can add 10–20% to your home's value. We break down the real costs, what buyers are looking for, and how to make the most of the space.",
    category: "Basement Finishing",
    date: "2026-04-18",
    readTime: "7 min read",
    emoji: "🏠",
  },
  {
    slug: "choosing-contractor-guide",
    title: "How to Choose a General Contractor: A Step-by-Step Guide",
    excerpt: "Don't hire the first contractor you find. Here's how to vet bids, check licenses, read contracts, and protect yourself from common scams in the Cleveland area.",
    category: "General Contracting",
    date: "2026-04-05",
    readTime: "9 min read",
    emoji: "🏗️",
  },
];

export default function BlogPage() {
  const { brand } = config;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Blog & Resources</h1>
          <p className="text-lg opacity-80">Home improvement tips, project guides, and expert advice for Cleveland homeowners.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Demo note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 mb-10">
          <span className="font-bold">📝 Demo mode:</span> These are placeholder articles. In production, connect a CMS (Contentful, Sanity) or write posts in MDX for real SEO content.
        </div>

        <div className="space-y-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex items-start gap-5">
                <div className="text-5xl hidden sm:block shrink-0">{post.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: brand.secondary }}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-black text-gray-900 mb-2 hover:text-current transition-colors" style={{ color: "inherit" }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="text-sm font-bold" style={{ color: brand.primary }}>Read article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-6">Skip the research and get a straight answer from our team.</p>
          <Link href={`${BASE}/quote`} className="text-white font-bold px-8 py-3 rounded-lg text-sm transition-opacity hover:opacity-90 inline-block"
            style={{ backgroundColor: brand.primary }}>
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
