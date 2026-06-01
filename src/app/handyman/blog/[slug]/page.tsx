import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, COMPANY_NAME, PHONE_HREF, PHONE } from "@/lib/handyman/data";

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

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-gray-900 mt-5 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-800 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-5 text-gray-600 text-base leading-relaxed list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="mb-2" />);
    } else {
      elements.push(
        <p key={key++} className="text-gray-600 text-base leading-relaxed mb-3">
          {line}
        </p>
      );
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-300 mb-6">
            <Link href="/handyman" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/handyman/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white truncate">{post.title}</span>
          </nav>
          <div className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{COMPANY_NAME}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Post body */}
            <div className="lg:col-span-2">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-blue-300 pl-4">
                {post.excerpt}
              </p>
              <div>{renderMarkdown(post.content)}</div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Written by the team at {COMPANY_NAME} — serving Chagrin Falls and Northeast Ohio for 15+ years.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-900 rounded-xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-lg mb-2">Need a hand?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Don&apos;t want to DIY? We can take care of it. Free estimates, prompt scheduling.
                </p>
                <div className="space-y-3">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2.5 rounded-lg transition-colors w-full text-sm"
                  >
                    Call {PHONE}
                  </a>
                  <Link
                    href="/handyman/quote"
                    className="flex items-center justify-center border border-white/50 text-white hover:bg-white/10 font-semibold py-2.5 rounded-lg transition-colors w-full text-sm"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>

              {/* Other posts */}
              {otherPosts.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">More Articles</h3>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/handyman/blog/${p.slug}`}
                        className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                      >
                        <span className="text-xs text-blue-600 font-medium">{p.category}</span>
                        <p className="text-sm font-semibold text-gray-800 mt-1 leading-snug">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{p.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      <div className="h-16 lg:hidden" />
    </>
  );
}
