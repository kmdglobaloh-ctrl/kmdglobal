import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact KMD Global",
  description:
    "Get in touch with KMD Global. Whether you want to discuss a custom AI project, explore partnerships, or learn about our products — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Build Something
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Whether you want to explore our products, discuss a custom AI project, or talk partnerships — we&apos;re always open to interesting conversations.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/15">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@kmdglobal.ai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
