import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegionById } from "@/lib/spanish-training/regions";
import { getChapters } from "@/lib/spanish-training/curriculum";

interface Props {
  params: Promise<{ regionId: string }>;
}

export default async function RegionPage({ params }: Props) {
  const { regionId } = await params;
  const region = getRegionById(regionId);
  if (!region) notFound();

  const chapters = getChapters(regionId);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-teal-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Back + Header */}
        <div className="mb-8">
          <Link href="/spanish-training" className="text-green-300 hover:text-white text-sm transition-colors">
            ← Back to regions
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="text-5xl">{region.emoji}</div>
            <div>
              <h1 className="text-3xl font-bold text-white">{region.name}</h1>
              <p className="text-green-300 text-sm mt-1">{region.tagline}</p>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <h2 className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
          6 Chapters
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/spanish-training/region/${regionId}/chapter/${chapter.id}`}
              className="group bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-200 rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{chapter.emoji}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-green-300 uppercase tracking-wide">
                    Chapter {chapter.id}
                  </span>
                  <h3 className="text-white font-semibold text-lg leading-tight mt-1 mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-green-200 text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-green-300 text-sm group-hover:text-white transition-colors">
                <span>Start lesson</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
