import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, COMPANY } from "@/lib/alfieri/data";

export const metadata: Metadata = {
  title: "Blog — Sewer, Waterproofing & Excavation Tips",
  description: `Expert tips and guides from ${COMPANY} Brothers on sewer maintenance, basement waterproofing, dye testing, POS violations, and Cleveland home improvement.`,
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link> / Blog
      </p>

      <div className="mb-10">
        <h1 className="text-4xl font-black text-[#0d1444] mb-3">Expert Tips & Resources</h1>
        <p className="text-gray-600 max-w-2xl">
          Helpful guides for Cleveland homeowners on sewer maintenance, basement waterproofing, municipal compliance, and more — from the team at {COMPANY} Brothers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-12">
        {BLOG_POSTS.map((post, i) => (
          <Link
            key={post.slug}
            href={`/alfieri/blog/${post.slug}`}
            className={`group bg-white border border-gray-200 hover:border-[#1a237e] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 ${i === 0 ? "sm:col-span-2" : ""}`}
          >
            <div className={`bg-gradient-to-br from-[#0d1444] to-[#1a237e] p-8 ${i === 0 ? "sm:h-40" : "h-32"} flex items-end`}>
              <span className="text-4xl">{post.emoji}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-[#f0f4ff] text-[#1a237e] px-2.5 py-1 rounded-full font-semibold">{post.category}</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="font-black text-[#0d1444] group-hover:text-[#1a237e] transition-colors mb-2 text-lg">{post.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
              <p className="text-[#cc2222] text-sm font-semibold mt-4 group-hover:underline">Read article →</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-[#f0f4ff] rounded-2xl p-8 text-center border border-blue-100">
        <h2 className="text-xl font-black text-[#0d1444] mb-2">Have a Question?</h2>
        <p className="text-gray-600 mb-5">
          Can't find what you're looking for? Call us or send a message — we're happy to answer any questions about your sewer, drainage, or excavation project.
        </p>
        <Link href="/alfieri/contact" className="inline-block bg-[#1a237e] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg transition-colors">
          Contact Us
        </Link>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
