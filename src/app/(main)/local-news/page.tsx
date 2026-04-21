import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, ExternalLink, RefreshCw } from "lucide-react";
import { fetchAllFeeds, type RssItem } from "@/lib/rss";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Local News — Limón, Costa Rica",
  description:
    "Latest news for travelers and locals in Limón, Costa Rica — Caribbean coast updates, travel tips, and general Costa Rica news from The Tico Times and Q Costa Rica.",
  alternates: { canonical: "/local-news" },
};

const SOURCE_COLORS: Record<string, string> = {
  "The Tico Times": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Q Costa Rica": "bg-orange-500/15 text-orange-400 border-orange-500/20",
};

function formatDate(pubDate: string): string {
  if (!pubDate) return "";
  try {
    return new Date(pubDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return pubDate;
  }
}

function NewsCard({ item }: { item: RssItem }) {
  const sourceColor = SOURCE_COLORS[item.source] ?? "bg-muted text-muted-foreground border-border";

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="h-full border-border/60 transition-all hover:shadow-md hover:border-border group-hover:scale-[1.01]">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${sourceColor}`}>
              {item.source}
            </span>
            {item.isCaribbean && (
              <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/15 text-green-500 border border-green-500/20">
                <MapPin className="h-3 w-3" />
                Caribbean
              </span>
            )}
            {item.categories.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs py-0">
                {cat}
              </Badge>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
            {item.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{formatDate(item.pubDate)}</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export default async function LocalNewsPage() {
  const { caribbean, general, sources } = await fetchAllFeeds();
  const hasCaribbean = caribbean.length > 0;
  const totalCount = caribbean.length + general.length;

  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Limón, Costa Rica
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Local News
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Latest news from Costa Rica&apos;s Caribbean coast and beyond — curated for travelers and locals. Updated hourly.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" />
                {totalCount} articles
              </span>
              <span>Sources: {sources.join(" · ")}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">

        {/* Caribbean section */}
        {hasCaribbean && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/15">
                <MapPin className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Caribbean Coast & Limón</h2>
                <p className="text-sm text-muted-foreground">Stories relevant to the region</p>
              </div>
              <Badge variant="secondary" className="ml-auto">{caribbean.length}</Badge>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caribbean.map((item) => (
                <NewsCard key={item.link} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* General CR news */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/15">
              <span className="text-sm">🇨🇷</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Costa Rica News</h2>
              <p className="text-sm text-muted-foreground">General national updates</p>
            </div>
            <Badge variant="secondary" className="ml-auto">{general.length}</Badge>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {general.map((item) => (
              <NewsCard key={item.link} item={item} />
            ))}
          </div>
        </section>

        {/* Source attribution */}
        <div className="mt-16 rounded-xl bg-muted/40 border border-border/60 p-6">
          <p className="text-sm font-medium text-foreground mb-3">Sources & Attribution</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a
              href="https://ticotimes.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              The Tico Times — ticotimes.net
            </a>
            <a
              href="https://qcostarica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Q Costa Rica — qcostarica.com
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            All articles are sourced directly from their original publishers via RSS feeds. KMD Global does not own or modify the content. Click any article to read the full story on the source site.
          </p>
        </div>

        {/* Future destinations teaser */}
        <div className="mt-8 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-medium text-foreground">More destinations coming</p>
            <p className="text-sm text-muted-foreground mt-1">
              We&apos;re building local news feeds for other popular travel destinations.
              <Link href="/contact" className="text-primary hover:underline ml-1">Let us know where you&apos;re headed.</Link>
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">Coming Soon</Badge>
        </div>

      </div>
    </>
  );
}
