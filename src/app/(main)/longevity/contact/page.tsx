import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact KMD Global — Get in Touch",
  description:
    "Have questions about KMD Global? Get in touch with our team. We work with longevity clinics, functional medicine practices, and healthspan-focused providers.",
  alternates: { canonical: "/longevity/contact" },
};

const faqs = [
  {
    question: "How long does onboarding take?",
    answer:
      "Most clinics are fully onboarded within 2 weeks. Our team handles the technical integrations and your clinical team gets hands-on training before going live.",
  },
  {
    question: "Does KMD Global integrate with our EHR?",
    answer:
      "We integrate with most major EHR platforms used by longevity and functional medicine clinics. Contact us to confirm compatibility with your specific system.",
  },
  {
    question: "Can we customize the protocols the AI generates?",
    answer:
      "Yes. You can configure the AI to follow your clinic's specific protocols, preferred supplements and brands, prescribing preferences, and treatment philosophies.",
  },
  {
    question: "Is patient data secure and HIPAA-compliant?",
    answer:
      "Absolutely. KMD Global is fully HIPAA-compliant, with end-to-end encryption, Business Associate Agreements, audit logging, and enterprise-grade security infrastructure.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Every clinic gets a dedicated onboarding specialist and ongoing support via Slack or email. Enterprise plans include a dedicated account manager.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is based on active patient volume. We offer plans for solo practitioners through large multi-provider clinics. Book a demo for a custom quote.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have questions about KMD Global? Want to see if it&apos;s the right fit for your clinic? We&apos;d love to hear from you.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@kmdglobal.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Book a Demo</p>
                    <p className="text-muted-foreground">Schedule a free 30-minute walkthrough of the platform with our team.</p>
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

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-white/[0.03]" id="faq">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
