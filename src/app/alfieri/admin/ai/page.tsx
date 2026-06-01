"use client";

import { useState } from "react";

type AiTask = "email" | "quote" | "blog" | "seo" | "response";

const TASKS: { value: AiTask; label: string; icon: string; desc: string; placeholder: string }[] = [
  {
    value: "email",
    label: "Write Email / Message",
    icon: "✉️",
    desc: "Draft a personalized follow-up, check-in, or outreach email",
    placeholder: "Describe what you need:\n\nExample: Write a follow-up email to John Smith who had his sewer replaced last week. He mentioned he was nervous about the job disrupting his landscaping. We kept it clean and he seemed happy.",
  },
  {
    value: "quote",
    label: "Generate Quote Summary",
    icon: "💰",
    desc: "Turn project notes into a professional written estimate",
    placeholder: "Describe the job:\n\nExample: Customer at 123 Main St, Euclid. Needs 42 feet of sewer lateral replaced, clay to PVC. 8 feet deep. Some concrete sidewalk to cut and replace. Also wants a camera inspection and test tee.",
  },
  {
    value: "blog",
    label: "Write Blog Post",
    icon: "📝",
    desc: "Generate an SEO-friendly blog article for the website",
    placeholder: "Topic and key points:\n\nExample: Write a blog post about why Cleveland homeowners should get their sewer inspected before buying a home. Include: clay pipes common in homes before 1970, tree root intrusion, cost to replace vs repair, what a camera inspection shows.",
  },
  {
    value: "seo",
    label: "Write Service Page Content",
    icon: "🔍",
    desc: "Improve or expand content for a specific service page",
    placeholder: "Which service and what to cover:\n\nExample: Improve the content for our Backflow Prevention page. Explain what backflow is, why Cleveland Water requires annual testing, the different types of backflow devices, and why homeowners should use a licensed contractor.",
  },
  {
    value: "response",
    label: "Respond to Review / Complaint",
    icon: "⭐",
    desc: "Draft a professional response to a customer review or complaint",
    placeholder: "Paste the review or describe the situation:\n\nExample: Customer left a 3-star review saying the crew left mud on their driveway after a sewer job. We did clean up but there were light tire marks. They were otherwise happy with the work.",
  },
];

export default function AIAssistantPage() {
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

    try {
      const systemPrompts: Record<AiTask, string> = {
        email: "You are a friendly, professional assistant for Alfieri Brothers Contracting and Excavation in Cleveland, OH. Write warm, genuine emails on behalf of the Alfieri family. Keep them conversational, not corporate. Sign off from 'The Alfieri Brothers Team' or the family name.",
        quote: "You are helping Alfieri Brothers Contracting and Excavation in Cleveland, OH write professional project summaries and quote letters. Be clear, detailed, and professional. Include scope of work, materials (when relevant), and a note that the final written estimate will be provided after a site visit if needed.",
        blog: "You are a content writer for Alfieri Brothers Contracting and Excavation in Cleveland, OH. Write SEO-friendly blog posts that are educational for Cleveland homeowners. Use a helpful, knowledgeable tone. Include relevant keywords naturally. Format with clear headings.",
        seo: "You are an SEO copywriter for Alfieri Brothers Contracting and Excavation in Cleveland, OH. Write detailed, keyword-rich service page content that educates customers and ranks well in local Google searches. Focus on Cleveland-specific context.",
        response: "You are helping Alfieri Brothers Contracting and Excavation in Cleveland, OH respond professionally to customer reviews. Be gracious, acknowledge any issues, and highlight their commitment to quality and customer satisfaction. Keep it brief and genuine.",
      };

      const res = await fetch("/api/alfieri/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task,
          prompt,
          system: systemPrompts[task],
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "AI request failed");
      }

      const data = await res.json();
      setResult(data.content);
    } catch (e) {
      setError((e as Error).message || "Something went wrong. Check that the Claude API key is configured.");
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
        <h1 className="text-2xl font-black text-[#0d1444]">AI Assistant</h1>
        <p className="text-gray-500 text-sm">Powered by Claude — generate emails, quotes, blog posts, and more</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task selector */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-bold text-[#0d1444] text-sm uppercase tracking-widest mb-4">What to Generate</h2>
          <div className="space-y-1.5">
            {TASKS.map((t) => (
              <button
                key={t.value}
                onClick={() => { setTask(t.value); setPrompt(""); setResult(""); setError(""); }}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${task === t.value ? "bg-[#1a237e] text-white" : "hover:bg-gray-50 text-gray-700"}`}
              >
                <div className="flex items-center gap-2">
                  <span>{t.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{t.label}</p>
                    <p className={`text-xs ${task === t.value ? "text-blue-300" : "text-gray-400"}`}>{t.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input + output */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{currentTask.icon}</span>
              <div>
                <p className="font-bold text-[#0d1444]">{currentTask.label}</p>
                <p className="text-gray-500 text-xs">{currentTask.desc}</p>
              </div>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={8}
              placeholder={currentTask.placeholder}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] resize-none"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="w-full mt-3 bg-[#1a237e] hover:bg-blue-900 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span>
                  Generating with Claude...
                </>
              ) : (
                <>🤖 Generate with AI</>
              )}
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
                <p className="font-bold text-[#0d1444]">Generated Content</p>
                <button
                  onClick={copyResult}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-3 py-1.5 rounded-lg transition-colors"
                >
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
              <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans bg-gray-50 rounded-lg p-4 border border-gray-100 max-h-96 overflow-y-auto">
                {result}
              </pre>
              <p className="text-gray-400 text-xs mt-3">Review and edit before sending. AI-generated content should always be reviewed for accuracy.</p>
            </div>
          )}

          {/* Setup note if no result yet */}
          {!result && !error && !loading && (
            <div className="bg-[#f0f4ff] rounded-xl p-5 border border-blue-100">
              <p className="font-bold text-[#0d1444] mb-1 text-sm">⚙️ Setup Required</p>
              <p className="text-gray-600 text-sm">
                Add your Anthropic API key as <code className="bg-blue-100 px-1 rounded text-xs">ANTHROPIC_API_KEY</code> in your environment variables to enable AI generation.
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
