export interface VocabItem {
  spanish: string;
  english: string;
  pronunciation: string;
  slang?: boolean;
  slangNote?: string;
}

export interface GrammarNote {
  title: string;
  explanation: string;
  examples: { spanish: string; english: string }[];
}

export interface Lesson {
  title: string;
  intro: string;
  vocab: VocabItem[];
  grammar?: GrammarNote[];
  phrases: { spanish: string; english: string; note?: string }[];
  dialogue: { speaker: string; spanish: string; english: string }[];
}

export interface Chapter {
  id: number;
  title: string;
  emoji: string;
  description: string;
  lesson: Lesson;
  testScenario: string;
  testSystemPrompt: string;
}
