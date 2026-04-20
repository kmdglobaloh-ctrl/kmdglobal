export type { Chapter, Lesson, VocabItem, GrammarNote } from "./curriculum-types";

import { chapters as caribbeanChapters } from "./curriculum-caribbean-cr";
import { chapters as centralAmericanChapters } from "./curriculum-central-american";

const curriculumMap: Record<string, typeof caribbeanChapters> = {
  "caribbean-cr": caribbeanChapters,
  "central-american": centralAmericanChapters,
};

export function getChapters(regionId: string) {
  return curriculumMap[regionId] ?? caribbeanChapters;
}

export function getChapter(regionId: string, chapterId: number) {
  return getChapters(regionId).find((c) => c.id === chapterId);
}
