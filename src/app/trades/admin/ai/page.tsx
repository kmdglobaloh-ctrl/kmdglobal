"use client";

import { useState } from "react";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

type AiTask = "email" | "quote" | "blog" | "seo" | "response";

const TASKS: { value: AiTask; label: string; icon: string; desc: string; placeholder: string }[] = [
  {
    value: "email",
    label: "Write Email / Message",
    icon: "✉️",
    desc: "Draft a personalized follow-up, check-in, or outreach email",
    placeholder: `Describe what you need:\n\nExample: Write a follow-up email to John Smith who had a kitchen remodel completed last week. He was really happy with the crew and mentioned he has a bathroom he wants to redo next year.`,
  },
  {
    value: "quote",
    label: "Generate Quote Summary",
    icon: "💰",
    desc: "Turn project notes into a professional written estimate",
    placeholder: `Describe the job:\n\nExample: Customer at 456 Oak Ave. Wants a full bathroom renovation — demo existing tile, new walk-in shower with bench, new vanity, toilet, and heated floor. About 90 sq ft. Timeline 2–3 weeks.`,
  },
  {
    value: "blog",
    label: "Write Blog Post",
    icon: "📝",
    desc: "Generate an SEO-friendly blog article for the website",
    placeholder: `Topic and key points:\n\nExample: Write a blog post about the top signs a homeowner should remodel their kitchen. Include: outdated layout, poor storage, low ROI on resale, safety hazards like old wiring, and how to budget for a kitchen remodel.`,
  },
  {
    value: "seo",
    label: "Write Service Page Content",
    icon: "🔍",
    desc: "Improve or expand content for a specific service page",
    placeholder: `Which service and what to cover:\n\nExample: Write content for our Kitchen Remodeling page. Explain the process from design to install, typical project timelines, what's included in our quote, and why hiring a licensed contractor matters.`,
  },
  {
    value: "response",
    label: "Respond to Review / Complaint",
    icon: "⭐",
    desc: "Draft a professional response to a customer review or complaint",
    placeholder: `Paste the review or describe the situation:\n\nExample: Customer left a 4-star review saying the work was great but the job took 2 days longer than expected. We had a supply delay we explained up front.`,
  },
];

export default function TradesAIPage() {
  const [task, setTask] = useState<AiTask>("email");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const currentTask = TASKS.find((t) => t.value === task)!;

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    const systemPrompts: Record<AiTask, string> = {
      email:    `You are a friendly, professional assistant for ${config.company.name} in ${config.company.addressCity}, ${config.company.addressState}. Write warm, genuine emails on behalf of the business. Keep them conversational, not corporate. Sign off from "${config.company.name}".`,
      quote:    `You are helping ${config.company.name} write professional project summaries and quote letters. Be clear, detailed, and professional. Include scope of work and a note that the final written estimate will be provided after a site visit if needed.`,
      blog:     `You are a content writer for ${config.company.name} in ${config.company.addressCity}, ${config.company.addressState}. Write SEO-friendly blog posts that are educational for local homeowners. Use a helpful, knowledgeable tone. Format with clear headings.`,
      seo:      `You are an SEO copywriter for ${config.company.name} in ${config.company.addressCity}, ${config.company.addressState}. Write detailed, keyword-rich service page content that educates customers and ranks well in local Google searches.`,
      response: `You are helping ${config.company.name} respond professionally to customer reviews. Be gracious, acknowledge any issues, and highlight their commitment to quality and customer satisfaction. Keep it brief and genuine.`,
    };

    try {
      const res = await fetch("/api/trades/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, prompt, system: systemPrompts[task] }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "AI request failed");
      }

      const data = await res.json();
      setResult(data.content);
    } catch (e) {
      setError((e as Error).message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>AI Assistant</h1>
        <p className="text-gray-500 text-sm">Powered by Claude — generate emails, quotes, blog posts, and more</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-4">What to Generate</h2>
          <div className="space-y-1.5">
            {TASKS.map((t) => (
              <button key={t.value}
                onClick={() => { setTask(t.value); setPrompt(""); setResult(""); setError(""); }}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${task === t.value ? "text-white" : "hover:bg-gray-50 text-gray-700"}`}
                style={task === t.value ? { backgroundColor: config.brand.primary } : {}}>
                <div className="flex items-center gap-2">
                  <span>{t.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{t.label}</p>
                    <p className={`text-xs ${task === t.value ? "opacity-70" : "text-gray-400"}`}>{t.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{currentTask.icon}</span>
              <div>
                <p className="font-bold text-gray-900">{currentTask.label}</p>
                <p className="text-gray-500 text-xs">{currentTask.desc}</p>
              </div>
            </div>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={8}
              placeholder={currentTask.placeholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none resize-none" />
            <button onClick={handleGenerate} disabled={loading || !prompt.trim()}
              className="w-full mt-3 text-white font-bold py-3 rounded-lg transition-opacity disabled:bg-gray-300 hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: config.brand.primary }}>
              {loading ? <><span className="animate-spin inline-block">⟳</span> Generating with Claude...</> : <>🤖 Generate with AI</>}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700 text-sm font-semibold mb-1">Error</p>
              <p className="text-red-600 text-sm">{error}</p>
              <p className="text-red-500 text-xs mt-2">Make sure <code className="bg-red-100 px-1 rounded">ANTHROPIC_API_KEY</code> is set in your environment variables.</p>
            </div>
          )}

          {result && (
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">Generated Content</p>
                <button onClick={copyResult} className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-lg transition-colors">
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
              <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans bg-gray-50 rounded-lg p-4 border border-gray-100 max-h-96 overflow-y-auto">
                {result}
              </pre>
              <p className="text-gray-400 text-xs mt-3">Review and edit before sending. AI-generated content should always be reviewed for accuracy.</p>
            </div>
          )}

          {!result && !error && !loading && (
            <div className="rounded-xl p-5 border text-sm" style={{ backgroundColor: `${config.brand.primary}08`, borderColor: `${config.brand.primary}20` }}>
              <p className="font-bold text-gray-900 mb-1 text-sm">⚙️ Setup Required</p>
              <p className="text-gray-600">
                Add your Anthropic API key as <code className="bg-blue-100 px-1 rounded text-xs">ANTHROPIC_API_KEY</code> in your Vercel environment variables to enable AI generation.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Current Claude pricing: ~$0.003 per generated email. A typical 50-email campaign costs under $0.15.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
