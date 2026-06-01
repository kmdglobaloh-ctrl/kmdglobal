import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, PHONE, PHONE_HREF, COMPANY } from "@/lib/alfieri/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-black text-[#0d1444] mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-lg font-bold text-[#0d1444] mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [line.slice(2)];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        items.push(lines[i].slice(2));
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 text-gray-700 mb-4 pl-2">
          {items.map((item, j) => <li key={j} className="text-sm leading-relaxed">{item}</li>)}
        </ul>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="font-bold text-[#0d1444] mb-2">{line.slice(2, -2)}</p>);
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(<p key={key++} className="text-gray-700 leading-relaxed mb-4 text-sm">{line}</p>);
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prev = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const next = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/alfieri" className="hover:text-[#1a237e]">Home</Link>
        {" / "}
        <Link href="/alfieri/blog" className="hover:text-[#1a237e]">Blog</Link>
        {" / "}
        <span className="text-gray-700">{post.title}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0d1444] to-[#1a237e] rounded-2xl p-8 mb-8 flex items-end gap-4">
            <span className="text-5xl">{post.emoji}</span>
            <div>
              <span className="text-xs bg-blue-700 text-blue-200 px-2.5 py-1 rounded-full font-semibold">{post.category}</span>
              <p className="text-blue-300 text-xs mt-2">{post.date} · By {COMPANY} Brothers Team</p>
            </div>
          </div>

          <h1 className="text-3xl font-black text-[#0d1444] mb-3">{post.title}</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="prose max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {/* Author box */}
          <div className="mt-10 bg-[#f0f4ff] rounded-xl p-6 border border-blue-100">
            <p className="font-bold text-[#0d1444] mb-1">{COMPANY} Brothers Team</p>
            <p className="text-gray-600 text-sm">
              With over 30 years of experience in Cleveland excavation and contracting, our team writes educational content to help Northeast Ohio homeowners understand their infrastructure and make informed decisions.
            </p>
          </div>

          {/* Post nav */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            {prev ? (
              <Link href={`/alfieri/blog/${prev.slug}`} className="text-[#1a237e] hover:underline text-sm font-semibold">← {prev.title}</Link>
            ) : <div />}
            {next ? (
              <Link href={`/alfieri/blog/${next.slug}`} className="text-[#1a237e] hover:underline text-sm font-semibold">{next.title} →</Link>
            ) : <div />}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-[#0d1444] text-white rounded-2xl p-6 sticky top-24">
            <h3 className="font-black mb-2">Need Help?</h3>
            <p className="text-blue-300 text-sm mb-5">
              Questions about your sewer, drainage, or excavation project? We're happy to help.
            </p>
            <Link href="/alfieri/quote" className="block text-center bg-[#cc2222] hover:bg-red-700 font-bold px-4 py-3 rounded-lg mb-3 transition-colors">
              Free Estimate
            </Link>
            <a href={PHONE_HREF} className="block text-center border border-blue-400 text-white font-semibold px-4 py-3 rounded-lg text-sm hover:bg-blue-900 transition-colors">
              📞 {PHONE}
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-bold text-[#0d1444] text-sm uppercase tracking-widest mb-4">More Articles</h3>
            <ul className="space-y-3">
              {BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => (
                <li key={p.slug}>
                  <Link href={`/alfieri/blog/${p.slug}`} className="text-[#cc2222] hover:text-red-800 text-sm font-medium hover:underline flex items-start gap-2">
                    <span>{p.emoji}</span>
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </div>
  );
}
