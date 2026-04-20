import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
};

const posts: BlogPost[] = [
  {
    slug: "learn-spanish-caribbean-coast",
    title: "What Makes Caribbean Coast Spanish Different (And Why It Matters for Travelers)",
    excerpt:
      "The Spanish spoken in Puerto Viejo and Cocles is a world away from what you learned in school. Here's what to expect and how to prepare.",
    date: "2026-04-10",
    category: "Regional Dialects",
    readTime: "6 min read",
    content: `
If you've studied Spanish before, you might feel pretty confident heading to Costa Rica. Then you'll arrive in Puerto Viejo, ask someone a question, and realize the Spanish you learned isn't quite what's being spoken here.

## The Caribbean Influence

The Caribbean coast of Costa Rica — including towns like Cocles, Puerto Viejo, Cahuita, and Manzanillo — has a linguistic identity shaped by Afro-Caribbean culture, Jamaican Creole, and Central American Spanish all mixed together. The result is a dialect that's warmer, more musical, and packed with expressions you won't find in any textbook.

## Key Differences You'll Notice

**Rhythm and intonation.** Caribbean Coast Spanish has a different cadence than the Spanish you might have learned. It's often more relaxed and melodic.

**Unique vocabulary.** Words like "tuanis" (cool), "mae" (dude/friend), and "pura vida" (pure life — used for everything from hello to you're welcome to great) are everywhere. You'll also hear Creole-influenced expressions that have no direct Spanish equivalent.

**Dropped consonants.** In casual speech, final consonants are often softened or dropped — "para" might sound like "pa," and "usted" might become "usté."

**Mixing languages.** It's common to hear Spanish, Creole, and sometimes English mixed in the same sentence, especially in more tourist-friendly areas.

## Why It Matters for Travelers

The practical reason to learn regional Spanish (not generic Spanish) is connection. Locals are genuinely delighted when visitors make the effort to use local expressions correctly. Saying "tuanis, mae" instead of just "bien" in the right context will get you a laugh and an instant warmer reception.

The other reason is comprehension. If all you've studied is Castilian or textbook Latin American Spanish, you may find yourself nodding along without fully understanding what's being said to you — which creates real problems when you're trying to negotiate a price, understand directions, or figure out what's in your food.

## How to Prepare

The best approach is to study in context — learn the language as it's actually spoken in the region, through real scenarios you'll face. That means learning how to order food at a local soda, how to hail a tuk-tuk, how to greet someone in a way that feels natural rather than formal.

Spanish Training's Caribbean Costa Rica region is built exactly for this: region-specific vocabulary, local slang explained in context, and AI conversation practice that puts you in real scenarios before you arrive.
    `,
  },
  {
    slug: "ai-conversation-practice-language-learning",
    title: "Why AI Conversation Practice Is the Fastest Way to Learn a Language",
    excerpt:
      "Reps matter more than anything in language learning. AI lets you get hundreds of reps — with instant corrections — without the embarrassment of practicing on real people.",
    date: "2026-04-03",
    category: "AI & Learning",
    readTime: "8 min read",
    content: `
The research on language acquisition is pretty clear: you learn to speak by speaking. Reading vocabulary lists, watching videos, and completing grammar exercises all have their place, but none of them replace the experience of actually producing language in a real exchange.

The problem is that getting enough speaking practice is hard. Classes move slowly. Language exchange partners are inconsistent. Practicing with real speakers when you barely know anything is embarrassing and exhausting for both parties.

## The Reps Problem

In any skill, volume matters. A musician gets better by playing scales thousands of times. A basketball player gets better by shooting thousands of free throws. A language learner gets better by having thousands of conversations.

The challenge: arranging thousands of real conversations is logistically impossible for most people. You'd need a tireless, always-available partner who happens to speak the language you're learning, never gets bored, and is willing to correct you every single time you make a mistake.

## What AI Changes

AI conversation partners solve this problem directly. They're available any time, they never get tired, and — crucially — they can give you instant, specific feedback on every single thing you say.

When you make a grammatical mistake mid-conversation with a real person, they might correct you, or they might just let it go to keep the conversation moving. With an AI, every mistake gets addressed, every correction gets explained, and you can immediately try again.

## The Psychological Factor

There's another less-discussed benefit: removing the social pressure that makes speaking a second language so stressful.

Most language learners report that fear of embarrassment is the single biggest barrier to speaking practice. With an AI, that barrier disappears entirely. You can make the same mistake ten times in a row while you work out the correct form. You can ask the AI to slow down, repeat itself, or explain something three different ways. You can start over from the beginning without any awkwardness.

That reduced friction means more practice, and more practice means faster progress.

## Where AI Falls Short

AI conversation practice is not a replacement for real human connection — and it shouldn't try to be. The goal is to get enough reps that when you do have a real conversation, you're not starting from zero. You've already been in a hundred similar situations (virtually), so the real one feels manageable rather than terrifying.

Think of it like a flight simulator. Pilots don't learn to fly exclusively in simulators — but the simulator lets them build skills, make mistakes safely, and build the reflexes they need before putting real passengers at risk.

## How to Use It Effectively

The key is specificity. Generic conversation practice helps, but practice built around the exact scenarios you'll face is far more effective. If you're going to Central America, practice ordering food at a local restaurant, not discussing abstract topics in formal Spanish. The closer the practice scenarios are to your real-world situations, the more directly it transfers.
    `,
  },
  {
    slug: "travel-spanish-phrases-central-america",
    title: "20 Spanish Phrases Every Traveler to Central America Needs",
    excerpt:
      "Forget \"¿Dónde está la biblioteca?\" — here are the phrases that actually come up when you're ordering food, catching a tuk-tuk, and navigating a market.",
    date: "2026-03-27",
    category: "Travel Spanish",
    readTime: "5 min read",
    content: `
Spanish classes love to teach you how to ask where the library is. This is rarely useful. Here are the phrases you'll actually use.

## Greetings and Basic Social Phrases

**"¿Qué tal?"** — How's it going? More casual than "¿Cómo está usted?" and far more natural in everyday conversation.

**"Pura vida."** — Pure life. In Costa Rica especially, this phrase does everything: hello, goodbye, you're welcome, I'm doing great. Learn it, use it often.

**"Mae / Maé"** — Dude/friend. Informal but friendly, used constantly in Costa Rica between peers.

**"¿Todo bien?"** — Everything good? A casual check-in that works in almost any situation.

## Ordering Food

**"¿Qué recomienda?"** — What do you recommend? Shows respect and often gets you better food than the tourist default.

**"Sin [ingredient], por favor."** — Without [ingredient], please. Essential if you have food preferences or allergies.

**"La cuenta, por favor."** — The check, please. Don't wait for the server to bring it unprompted — this is standard practice.

**"¿Está picante?"** — Is it spicy? Crucial question, especially in places where "a little spicy" means "you will cry."

## Transportation

**"¿Cuánto cuesta ir a [place]?"** — How much does it cost to go to [place]? Ask before getting in any tuk-tuk or taxi.

**"¿Puede parar aquí?"** — Can you stop here? For when you need to get out.

**"¿Cuánto tarda?"** — How long does it take? Good to know before you commit to a ride.

## Shopping and Markets

**"¿Cuánto cuesta?"** — How much does this cost? The most important shopping phrase.

**"¿Tiene cambio?"** — Do you have change? Many small vendors don't have change for large bills.

**"¿Me puede dar descuento?"** — Can you give me a discount? Appropriate at markets; not at restaurants or fixed-price shops.

## Getting Around

**"¿Dónde queda [place]?"** — Where is [place]? More natural than "¿Dónde está?" in most Latin American countries.

**"¿Está lejos?"** — Is it far? Follow-up for any directions.

**"A la derecha / a la izquierda / recto."** — Right / left / straight ahead. Know these so you can understand directions, not just ask for them.

## Emergencies and Politeness

**"Con permiso."** — Excuse me (to pass through). More polite than just pushing through a crowd.

**"Lo siento."** — I'm sorry. Works for small collisions, minor mistakes, and genuine apologies.

**"No entiendo. ¿Puede repetir más despacio?"** — I don't understand. Can you repeat more slowly? This one will save you many awkward nodding-along situations.

The best way to internalize these is through practice — hearing them used in context, and then using them yourself. That's exactly what Spanish Training's AI conversation mode is for.
    `,
  },
  {
    slug: "spanish-slang-costa-rica",
    title: "Costa Rican Slang: A Guide to Talking Like a Tico",
    excerpt:
      "\"Tuanis,\" \"mae,\" \"pura vida\" — Costa Rica has its own vocabulary that'll confuse you if you're not prepared. Here's a primer on the most common terms.",
    date: "2026-03-20",
    category: "Slang & Culture",
    readTime: "7 min read",
    content: `
Costa Ricans — called Ticos (men) and Ticas (women) — have developed a distinctly local flavor of Spanish over the decades. If you've studied Spanish elsewhere and arrive in Costa Rica expecting to feel fluent, some of this vocabulary will throw you off.

Here's a guide to the most common Costa Rican slang you'll encounter.

## The Big Three

**Pura Vida** — Literally "pure life," this phrase is the soul of Costa Rica. You'll hear it used as a greeting, farewell, expression of gratitude, and general affirmation that life is good. If someone does you a favor and you say "gracias," a typical response is "pura vida." Use it freely — locals appreciate it.

**Mae** — Pronounced like "mah-ay," this is the equivalent of "dude," "man," or "bro." It's used between friends constantly. "¿Qué hacés, mae?" (What are you up to, dude?) is a completely normal greeting between peers. Use it with people your age or younger; it might feel too casual with elders.

**Tuanis** — Cool, great, awesome. "Ese lugar es muy tuanis" means "That place is really cool." It's enthusiastic, positive, and very Tico.

## Common Everyday Expressions

**Diay** — A filler word that roughly translates to "well" or "so." It's often used to start sentences or express mild surprise. "Diay, ¿qué pasó?" (Well, what happened?)

**Cacique** — Boss or leader, used casually. Sometimes used sarcastically.

**Chunche** — A thing or stuff. When you don't know the name of something, "ese chunche" (that thing) covers it. Incredibly versatile.

**Brete** — Work, job. "Tengo brete" means "I have work" or "I'm busy with work."

**Maje** — Similar to "mae" but slightly more informal and sometimes used to express surprise or emphasis.

## Food and Eating

**Soda** — Not the drink. A soda is a small, family-run local restaurant. Some of the best food in Costa Rica is at sodas. If someone recommends "a great soda nearby," they mean a local eatery.

**Casado** — The classic Costa Rican lunch plate: rice, beans, a protein, salad, and plantains. Asking for "un casado" at a soda is one of the most local things you can do.

## Transportation

**Buseta** — A small bus. Different from a big intercity bus; busetas operate shorter local routes.

## How to Use This

Learning slang without context is only half the battle — you also need to know when and how to use it naturally. That's why practicing in scenario-based conversations matters. The AI conversation practice in Spanish Training is built to use authentic Costa Rican expressions so you hear them in context before you land.
    `,
  },
  {
    slug: "how-to-practice-spanish-before-travel",
    title: "How to Practice Spanish Before a Trip (Without Boring Yourself to Death)",
    excerpt:
      "The usual advice — flashcards, apps, grammar drills — works but is slow. Here's a more engaging approach that gets you to conversational faster.",
    date: "2026-03-13",
    category: "Study Tips",
    readTime: "9 min read",
    content: `
Most language learning advice sounds the same: do Duolingo every day, use Anki flashcards, watch Spanish TV shows. This advice isn't wrong — it's just incomplete, and it's often not very motivating.

If you have a specific trip coming up, you have an advantage most language learners don't: you know exactly what you need. You don't need to discuss politics in Spanish. You need to order food, take transportation, navigate a market, and have basic social interactions. That specificity is incredibly powerful if you use it.

## Start With Scenarios, Not Grammar

The traditional approach starts with grammar rules and vocabulary lists, then tries to apply them in conversation later. This works eventually, but it's slow and demotivating.

A faster approach: start with the situations you'll actually be in. What does ordering at a local restaurant in Costa Rica actually sound like? What do you say when you get in a tuk-tuk? What's the natural way to ask someone where something is?

When you learn vocabulary and grammar *in the context of a specific scenario you care about*, retention is much higher. You're not memorizing abstract conjugations — you're learning what to say in a situation you can already picture.

## The Role of Grammar Notes

Grammar still matters — but learn it as an explanation of patterns you've already noticed, not as a prerequisite to speaking. When you see "tengo" and "tienes" and "tiene" in the same conversation, a quick note explaining how verb conjugation works for "tener" makes everything click. That sticks better than learning the full conjugation table out of context.

## Why Flashcards Are Only Half the Picture

Flashcards help you recognize and recall vocabulary. What they don't do is train you to produce that vocabulary under conversational pressure — when you're trying to speak, listen, process, and respond all at the same time.

That's a different skill, and the only way to build it is through practice that replicates those conditions.

## Using AI Practice Effectively

AI conversation practice is most valuable when you do it repeatedly. The first time you try to order food in Spanish with an AI, you'll be slow and make mistakes. The tenth time, it'll start to feel natural. The twentieth time, you won't be thinking about it anymore.

That's the goal: automaticity. Getting to the point where the basic phrases come without deliberate effort, so your conscious attention can handle the harder parts of the conversation.

## A Simple Pre-Trip Practice Routine

1. **Week one**: Learn vocabulary and phrases for your first two or three priority scenarios (greetings + ordering food is a good start). Use pronunciation practice to get comfortable with the sounds.

2. **Week two**: Start AI conversation practice for those scenarios. Do it daily. It doesn't need to be long — even 10-15 minutes of focused practice is valuable.

3. **Week three**: Add new scenarios. Keep practicing old ones. Notice which phrases feel automatic and which still require effort.

4. **Final days before the trip**: Focus on the scenarios you're least confident about. Do one or two full conversation run-throughs for each.

By the time you arrive, you won't be fluent — but you'll be functional. And functional is what matters for travel.
    `,
  },
  {
    slug: "ordering-food-spanish-central-america",
    title: "How to Order Food in Spanish in Central America",
    excerpt:
      "Walking into a local restaurant and ordering confidently is one of the most satisfying travel experiences. Here's exactly what to say.",
    date: "2026-03-06",
    category: "Travel Spanish",
    readTime: "5 min read",
    content: `
Ordering food at a local restaurant — not the tourist spot with the English menu, but the actual neighborhood soda where locals eat — is one of the most rewarding things you can do as a traveler. It's also one of the most practical situations where a few key Spanish phrases make an enormous difference.

Here's how to do it confidently.

## When You Sit Down

In most Central American restaurants, someone will greet you shortly after you sit. Common greetings you'll hear:

- **"¿Qué le traigo?"** — What can I bring you? (What can I get you?)
- **"¿Qué va a querer?"** — What are you going to have?
- **"¿Listo para ordenar?"** — Ready to order?

A good response while you're still looking at the menu: **"Un momento, por favor."** (One moment, please.)

## Ordering Food

The simplest structure: **"Quisiera [item], por favor."** — I would like [item], please. "Quisiera" is polite and natural; it's the conditional form of "querer."

Examples:
- "Quisiera el casado con pollo, por favor." (I would like the casado with chicken, please.)
- "Quisiera un arroz con leche, por favor." (I would like a rice pudding, please.)

If you're not sure what something is: **"¿Qué lleva este plato?"** — What does this dish have in it?

If you want a recommendation: **"¿Qué recomienda?"** — What do you recommend?

## Ordering Drinks

Drinks are often ordered separately, or at the same time. Common drinks in Central America:

- **Agua** — water (ask for "agua sin gas" for still water, "agua con gas" for sparkling)
- **Refresco natural** — fresh fruit juice
- **Café** — coffee (often served black; ask for "con leche" if you want it with milk)
- **Cerveza** — beer

"¿Me puede traer una agua, por favor?" — Can you bring me a water, please?

## Dietary Needs and Preferences

- **"Soy vegetariano/a."** — I'm vegetarian.
- **"No como carne."** — I don't eat meat.
- **"Sin [ingredient], por favor."** — Without [ingredient], please.
- **"¿Tiene algo sin gluten?"** — Do you have anything gluten-free?

## Paying the Bill

Don't wait for the check to appear automatically — it's polite to ask when you're ready.

**"La cuenta, por favor."** — The check, please.

In most Central American restaurants, service is included in the bill. Check before adding a tip; if it's not included, 10% is a common tip for good service.

If paying with cash: **"¿Tiene cambio para [amount]?"** — Do you have change for [amount]?

## Putting It Together

The whole interaction, from sitting down to paying, involves maybe 10-15 phrases. Once you've practiced them, the experience of eating at a local restaurant goes from stressful to genuinely enjoyable. That's the payoff for the practice.

Spanish Training's "Ordering Food" chapter is built around exactly this scenario — with vocabulary, grammar notes, and AI conversation practice so you can run through the full interaction before you're sitting at a real table.
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "KMD Global" },
    publisher: { "@type": "Organization", name: "KMD Global" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-12 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/blog" />} className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Button>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          </header>

          <Separator className="mb-8" />

          {/* Content */}
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside flex flex-col gap-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.trim()) {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed my-4">
                    {block.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <Separator className="mt-12 mb-8" />

          {/* CTA */}
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">
              Practice What You Just Learned
            </h3>
            <p className="mt-2 text-muted-foreground">
              Spanish Training puts you in real conversations with an AI local. Start for free — no account needed.
            </p>
            <Button nativeButton={false} render={<Link href="/spanish-training" />} className="mt-4 gap-2">
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
