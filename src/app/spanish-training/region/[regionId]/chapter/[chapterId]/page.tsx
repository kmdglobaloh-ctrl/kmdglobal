import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById } from "@/lib/spanish-training/regions";
import { getChapter } from "@/lib/spanish-training/curriculum";
import PronounceButton from "@/components/spanish-training/PronounceButton";
import SpeechSpeedControl from "@/components/spanish-training/SpeechSpeedControl";

interface Props {
  params: Promise<{ regionId: string; chapterId: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { regionId, chapterId } = await params;
  const region = getRegionById(regionId);
  if (!region) notFound();

  const chapter = getChapter(regionId, parseInt(chapterId));
  if (!chapter) notFound();

  const { lesson } = chapter;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-teal-900">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Nav */}
        <div className="flex items-center gap-2 text-sm text-green-300 mb-8 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/region/${regionId}`} className="hover:text-white transition-colors">{region.name}</Link>
          <span>/</span>
          <span className="text-white">Chapter {chapter.id}</span>
          <div className="ml-auto">
            <SpeechSpeedControl />
          </div>
        </div>

        {/* Chapter header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{chapter.emoji}</span>
            <div>
              <span className="text-xs text-green-300 uppercase tracking-widest font-semibold">Chapter {chapter.id}</span>
              <h1 className="text-2xl font-bold text-white">{chapter.title}</h1>
            </div>
          </div>
          <p className="text-green-200 leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10">
            {lesson.intro}
          </p>
        </div>

        {/* Vocabulary */}
        <section className="mb-8">
          <h2 className="text-white font-bold text-xl mb-4">📚 Vocabulary</h2>
          <div className="space-y-2">
            {lesson.vocab.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white font-semibold text-lg">{item.spanish}</span>
                      <PronounceButton text={item.spanish} />
                      <span className="text-green-300 text-sm italic">/{item.pronunciation}/</span>
                      {item.slang && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-300 rounded-full px-2 py-0.5 border border-yellow-500/30">
                          slang
                        </span>
                      )}
                    </div>
                    <div className="text-green-200 mt-0.5">{item.english}</div>
                    {item.slang && item.slangNote && (
                      <div className="mt-2 text-yellow-200/80 text-sm bg-yellow-500/10 rounded-lg p-2 border border-yellow-500/20">
                        💡 {item.slangNote}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grammar */}
        {lesson.grammar && lesson.grammar.length > 0 && (
          <section className="mb-8">
            <h2 className="text-white font-bold text-xl mb-4">📐 Grammar Notes</h2>
            <div className="space-y-4">
              {lesson.grammar.map((note, i) => (
                <div key={i} className="bg-blue-900/30 rounded-xl p-5 border border-blue-400/20">
                  <h3 className="text-blue-200 font-semibold mb-2">{note.title}</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-3">{note.explanation}</p>
                  <div className="space-y-2">
                    {note.examples.map((ex, j) => (
                      <div key={j} className="bg-blue-950/40 rounded-lg p-3">
                        <div className="text-white font-medium">{ex.spanish}</div>
                        <div className="text-blue-200 text-sm">{ex.english}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Phrases */}
        <section className="mb-8">
          <h2 className="text-white font-bold text-xl mb-4">🗣️ Key Phrases</h2>
          <div className="space-y-2">
            {lesson.phrases.map((phrase, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium flex-1">{phrase.spanish}</span>
                  <PronounceButton text={phrase.spanish} />
                </div>
                <div className="text-green-200 text-sm mt-0.5">{phrase.english}</div>
                {phrase.note && (
                  <div className="text-green-300/70 text-xs mt-1 italic">{phrase.note}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sample Dialogue */}
        <section className="mb-10">
          <h2 className="text-white font-bold text-xl mb-4">💬 Sample Dialogue</h2>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3">
            {lesson.dialogue.map((line, i) => (
              <div
                key={i}
                className={`flex gap-3 ${line.speaker === "You" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${line.speaker === 'You' ? 'bg-green-600 text-white' : 'bg-white/20 text-white'}">
                  {line.speaker === "You" ? "Y" : line.speaker[0]}
                </div>
                <div className={`max-w-[80%] ${line.speaker === "You" ? "items-end" : "items-start"} flex flex-col`}>
                  <span className="text-xs text-green-400 mb-1">{line.speaker}</span>
                  <div className={`rounded-2xl p-3 ${line.speaker === "You"
                    ? "bg-green-700/50 text-white rounded-tr-none"
                    : "bg-white/10 text-white rounded-tl-none"
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium flex-1">{line.spanish}</span>
                      <PronounceButton text={line.spanish} />
                    </div>
                    <div className="text-sm text-green-200 mt-0.5 italic">{line.english}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA: Start Test */}
        <div className="bg-gradient-to-r from-green-800/60 to-teal-800/60 rounded-2xl p-6 border border-green-500/30 text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-white font-bold text-xl mb-2">Ready to practice?</h3>
          <p className="text-green-200 text-sm mb-5">
            {chapter.testScenario}
          </p>
          <Link
            href={`/region/${regionId}/chapter/${chapter.id}/test`}
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Start Conversation Practice →
          </Link>
        </div>
      </div>
    </main>
  );
}
