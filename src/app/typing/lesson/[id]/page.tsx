import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LESSONS, FINGER_INFO, KEY_FINGER } from "@/lib/typing/data";
import { TypingPractice } from "@/components/typing/typing-practice";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) return {};
  return { title: `Lesson ${id}: ${lesson.title}` };
}

export default async function LessonPage({ params }: Props) {
  const { id } = await params;
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) notFound();

  const lessonIndex = LESSONS.findIndex((l) => l.id === id);
  const prevLesson = lessonIndex > 0 ? LESSONS[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < LESSONS.length - 1 ? LESSONS[lessonIndex + 1] : null;

  // Unique fingers used in this lesson
  const fingerSet = new Set(lesson.focusKeys.map((k) => KEY_FINGER[k]).filter(Boolean));
  const fingers = [...fingerSet].map((f) => FINGER_INFO[f!]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/typing" className="hover:text-slate-300 transition-colors">⌨️ Typing Trainer</Link>
        <span>/</span>
        <span className="text-slate-300">Lesson {lessonIndex + 1}</span>
      </div>

      {/* Lesson header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${lesson.color} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
          {lesson.emoji}
        </div>
        <div>
          <p className="text-slate-400 text-sm">Lesson {lessonIndex + 1} of {LESSONS.length}</p>
          <h1 className="text-2xl font-bold text-white">{lesson.title}</h1>
          <p className="text-slate-400 text-sm mt-0.5">{lesson.subtitle}</p>
        </div>
      </div>

      {/* Finger callout (if this lesson focuses on specific fingers) */}
      {fingers.length > 0 && (
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 mb-6">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">
            Fingers used this lesson
          </p>
          <div className="flex flex-wrap gap-3">
            {fingers.map((fi) => (
              <div key={fi.finger} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${fi.color}`}>
                <span className="text-xl">{fi.emoji}</span>
                <div>
                  <p className="font-bold text-white text-sm">{fi.label}</p>
                  <p className="text-white/70 text-xs">
                    Keys: {lesson.focusKeys.filter((k) => KEY_FINGER[k] === fi.finger).map((k) => k.toUpperCase()).join(" ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practice component */}
      <TypingPractice lesson={lesson} />

      {/* Lesson navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800">
        {prevLesson ? (
          <Link
            href={`/typing/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← {prevLesson.title}
          </Link>
        ) : <div />}
        <Link href="/typing" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
          All Lessons
        </Link>
        {nextLesson ? (
          <Link
            href={`/typing/lesson/${nextLesson.id}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            {nextLesson.title} →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
