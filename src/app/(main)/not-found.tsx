import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-32 text-center px-4">
      <h1 className="text-6xl font-bold text-border">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button nativeButton={false} render={<Link href="/" />} className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
