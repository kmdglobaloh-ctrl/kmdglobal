import Link from "next/link";
import { regions } from "@/lib/spanish-training/regions";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-teal-900">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌎</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Spanish Training
          </h1>
          <p className="text-lg text-green-200 mb-1">
            Learn practical Spanish for real travel situations
          </p>
          <p className="text-green-300 text-sm">
            AI conversation practice · Local slang · Grammar explained simply
          </p>
        </div>

        {/* Region selection */}
        <div className="mb-8">
          <h2 className="text-white/70 text-sm font-semibold uppercase tracking-widest text-center mb-6">
            Choose your region
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={`/region/${region.id}`}
                className="group bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-200 rounded-2xl p-6 border border-white/10 hover:border-white/40 hover:scale-[1.02] block"
              >
                <div className="text-4xl mb-3">{region.emoji}</div>
                <h3 className="text-white font-bold text-xl mb-1">
                  {region.name}
                </h3>
                <p className="text-green-300 text-sm font-medium mb-3">
                  {region.tagline}
                </p>
                <p className="text-green-200 text-sm leading-relaxed mb-4">
                  {region.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-white/10 text-green-200 rounded-full px-3 py-1">
                    {region.badge}
                  </span>
                  <span className="text-green-300 group-hover:text-white transition-colors text-sm">
                    Start →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-semibold mb-4 text-center">How it works</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-2">📖</div>
              <div className="text-green-200 text-sm font-medium">Study</div>
              <div className="text-green-300 text-xs mt-1">Vocab, grammar, example dialogues</div>
            </div>
            <div>
              <div className="text-2xl mb-2">💬</div>
              <div className="text-green-200 text-sm font-medium">Converse</div>
              <div className="text-green-300 text-xs mt-1">Chat with an AI local character</div>
            </div>
            <div>
              <div className="text-2xl mb-2">✅</div>
              <div className="text-green-200 text-sm font-medium">Get feedback</div>
              <div className="text-green-300 text-xs mt-1">Instant corrections with explanations</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
