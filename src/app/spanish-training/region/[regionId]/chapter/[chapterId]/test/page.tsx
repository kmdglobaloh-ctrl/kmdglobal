"use client";

import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  params: Promise<{ regionId: string; chapterId: string }>;
}

export default function TestPage({ params }: Props) {
  const { regionId, chapterId } = use(params);

  const [chapterData, setChapterData] = useState<{
    title: string;
    emoji: string;
    testScenario: string;
    testSystemPrompt: string;
    regionName: string;
  } | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    async function loadChapter() {
      const [{ getChapter }, { getRegionById }] = await Promise.all([
        import("@/lib/spanish-training/curriculum"),
        import("@/lib/spanish-training/regions"),
      ]);
      const chapter = getChapter(regionId, parseInt(chapterId));
      const region = getRegionById(regionId);
      if (chapter && region) {
        setChapterData({
          title: chapter.title,
          emoji: chapter.emoji,
          testScenario: chapter.testScenario,
          testSystemPrompt: chapter.testSystemPrompt,
          regionName: region.name,
        });
      }
    }
    loadChapter();
  }, [regionId, chapterId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function startConversation() {
    if (!chapterData) return;
    setStarted(true);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: chapterData.testSystemPrompt,
          messages: [
            {
              role: "user",
              content: "[START] Begin the conversation naturally in character. Greet the student and set the scene.",
            },
          ],
        }),
      });
      if (!res.ok) throw new Error("Failed to start conversation");
      const data = await res.json();
      setMessages([{ role: "assistant", content: data.message }]);
    } catch {
      setError("Couldn't connect to the AI. Check your ANTHROPIC_API_KEY.");
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage() {
    if (!input.trim() || loading || !chapterData) return;
    const userMessage = input.trim();
    setInput("");
    setError(null);

    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt: chapterData.testSystemPrompt,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok) throw new Error("Failed to get response");
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setError("Something went wrong. Try again.");
      setMessages(messages);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function renderMessage(content: string) {
    return content
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("✓")) {
          return (
            <div key={i} className="mt-2 text-green-300 text-sm bg-green-950/40 rounded-lg px-3 py-2 border border-green-500/20">
              {line}
            </div>
          );
        }
        if (line.startsWith("✗")) {
          return (
            <div key={i} className="mt-2 text-amber-300 text-sm bg-amber-950/40 rounded-lg px-3 py-2 border border-amber-500/20">
              {line}
            </div>
          );
        }
        return <p key={i} className={line === "" ? "mt-2" : ""}>{line}</p>;
      });
  }

  if (!chapterData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-green-900 flex items-center justify-center">
        <div className="text-white/50">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-green-950 flex flex-col">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link
            href={`/spanish-training/region/${regionId}/chapter/${chapterId}`}
            className="text-green-300 hover:text-white text-sm transition-colors"
          >
            ← Back to lesson
          </Link>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <span className="text-xl">{chapterData.emoji}</span>
            <div>
              <div className="text-white text-sm font-semibold leading-tight">{chapterData.title}</div>
              <div className="text-green-400 text-xs">{chapterData.regionName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario banner */}
      <div className="bg-green-900/40 border-b border-white/5 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs text-green-300 font-semibold uppercase tracking-wide mb-1">Scenario</div>
          <p className="text-green-100 text-sm leading-relaxed">{chapterData.testScenario}</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {!started ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-white text-2xl font-bold mb-3">Conversation Practice</h2>
              <p className="text-green-200 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                You&apos;ll chat with an AI character who plays a local. Respond in Spanish — they&apos;ll correct mistakes and give you feedback as you go. There are no wrong answers, only learning moments.
              </p>
              <div className="bg-white/5 rounded-xl p-4 text-left max-w-md mx-auto mb-8 border border-white/10">
                <div className="text-green-300 text-xs font-semibold uppercase mb-2">Tips</div>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>✓ marks mean you did it right</li>
                  <li>✗ marks show a correction with explanation</li>
                  <li>Don&apos;t be afraid to make mistakes — that&apos;s how you learn</li>
                  <li>Press Enter to send, Shift+Enter for a new line</li>
                </ul>
              </div>
              <button
                onClick={startConversation}
                disabled={loading}
                className="bg-green-500 hover:bg-green-400 disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                {loading ? "Starting..." : "Begin Conversation"}
              </button>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                    ${msg.role === "user" ? "bg-green-600" : "bg-white/20"} text-white`}>
                    {msg.role === "user" ? "Y" : "🎭"}
                  </div>
                  <div className={`max-w-[80%] flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <span className="text-xs text-green-400 mb-1">
                      {msg.role === "user" ? "You" : "Local"}
                    </span>
                    <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed
                      ${msg.role === "user"
                        ? "bg-green-700/60 text-white rounded-tr-none"
                        : "bg-white/10 text-white rounded-tl-none"
                      }`}>
                      {renderMessage(msg.content)}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm shrink-0">
                    🎭
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="text-red-300 text-sm text-center bg-red-900/20 rounded-xl p-3 border border-red-500/20">
                  {error}
                </div>
              )}
            </>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      {started && (
        <div className="bg-black/30 backdrop-blur border-t border-white/10 px-4 py-3">
          <div className="max-w-3xl mx-auto flex gap-3 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type in Spanish... (Enter to send)"
              rows={1}
              className="flex-1 bg-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm resize-none border border-white/10 focus:outline-none focus:border-green-500/50 transition-colors"
              style={{ maxHeight: "120px" }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-green-500 hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition-colors shrink-0 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
