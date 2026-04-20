import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Learn Spanish?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Start with Chapter 1 — greetings and basics — and work your way through real conversations with an AI local.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<Link href="/spanish-training" />}
              className="gap-2 font-semibold"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<Link href="/services" />}
              className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              See Features
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/60">
            No account required. Free to start.
          </p>
        </div>
      </div>
    </section>
  );
}
