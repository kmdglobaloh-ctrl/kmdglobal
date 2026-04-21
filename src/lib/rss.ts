export interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  pubDateMs: number;
  description: string;
  categories: string[];
  source: string;
  sourceUrl: string;
  isCaribbean: boolean;
}

const CARIBBEAN_KEYWORDS = [
  "limón", "limon", "caribbean", "cahuita", "puerto viejo",
  "tortuguero", "atlantic coast", "bocas", "manzanillo", "gandoca",
];

function extractCdata(xml: string, tag: string): string {
  const r = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i");
  const m = xml.match(r);
  return m ? m[1].trim() : "";
}

function extractPlain(xml: string, tag: string): string {
  const r = new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, "i");
  const m = xml.match(r);
  return m ? m[1].trim() : "";
}

function extractField(xml: string, tag: string): string {
  return extractCdata(xml, tag) || extractPlain(xml, tag);
}

function extractAllCdata(xml: string, tag: string): string[] {
  const results: string[] = [];
  const r = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "gi");
  let m;
  while ((m = r.exec(xml)) !== null) results.push(m[1].trim());
  if (results.length > 0) return results;
  const r2 = new RegExp(`<${tag}[^>]*>([^<]+)<\\/${tag}>`, "gi");
  while ((m = r2.exec(xml)) !== null) results.push(m[1].trim());
  return results;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .replace(/&#[0-9]+;/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCaribbean(text: string): boolean {
  const lower = text.toLowerCase();
  return CARIBBEAN_KEYWORDS.some((kw) => lower.includes(kw));
}

export async function fetchFeed(
  url: string,
  sourceName: string,
  sourceUrl: string
): Promise<RssItem[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
    });
    if (!res.ok) return [];
    const text = await res.text();

    const itemBlocks = text.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? [];

    return itemBlocks
      .map((block): RssItem => {
        const title = stripHtml(extractField(block, "title"));
        const link = extractPlain(block, "link") || extractField(block, "guid");
        const pubDate = extractField(block, "pubDate");
        const rawDesc = extractField(block, "description");
        const plain = stripHtml(rawDesc);
        const description = plain.length > 220 ? plain.slice(0, 217) + "..." : plain;
        const categories = extractAllCdata(block, "category");
        const combined = (title + " " + description + " " + categories.join(" ")).toLowerCase();

        return {
          title,
          link,
          pubDate,
          pubDateMs: pubDate ? new Date(pubDate).getTime() : 0,
          description,
          categories,
          source: sourceName,
          sourceUrl,
          isCaribbean: isCaribbean(combined),
        };
      })
      .filter((item) => item.title && item.link);
  } catch {
    return [];
  }
}

export async function fetchAllFeeds(): Promise<{
  caribbean: RssItem[];
  general: RssItem[];
  sources: string[];
}> {
  const [ticoItems, qItems] = await Promise.all([
    fetchFeed("https://ticotimes.net/feed", "The Tico Times", "https://ticotimes.net"),
    fetchFeed("https://qcostarica.com/feed/", "Q Costa Rica", "https://qcostarica.com"),
  ]);

  const all = [...ticoItems, ...qItems].sort((a, b) => b.pubDateMs - a.pubDateMs);

  return {
    caribbean: all.filter((i) => i.isCaribbean),
    general: all.filter((i) => !i.isCaribbean),
    sources: ["The Tico Times", "Q Costa Rica"],
  };
}
