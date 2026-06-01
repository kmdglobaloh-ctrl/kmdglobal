import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, COMPANY_NAME } from "@/lib/handyman/data";

export const metadata: Metadata = {
  title: "Blog & Home Tips",
  description: `Home maintenance tips, DIY guides, and seasonal checklists from ${COMPANY_NAME}. Practical advice for Northeast Ohio homeowners.`,
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Home Tips & Resources</h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Practical guides and maintenance advice for Northeast Ohio homeowners — from the people who fix homes every day.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/handyman/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-1">📝</div>
                    <span className="text-xs text-blue-600 font-medium px-3 py-1 bg-white/70 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-800 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-800 text-sm font-semibold">
                    Read more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-xl border border-blue-100 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Have a question we haven&apos;t covered?
            </h2>
            <p className="text-gray-600 mb-5">
              We write new articles based on questions our customers ask. Call or reach out —
              we&apos;re always happy to help.
            </p>
            <Link
              href="/handyman/contact"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
