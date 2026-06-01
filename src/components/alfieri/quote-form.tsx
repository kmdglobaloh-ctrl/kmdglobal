"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SERVICES = [
  "Sewer Services",
  "Backflow Prevention",
  "Basement Waterproofing",
  "Dye Testing",
  "Grading",
  "House Demolition",
  "New Home Excavation",
  "POS Violations",
  "Snow Removal",
  "Tree Roots",
  "Water & Gas Line Services",
  "Other",
] as const;

const URGENCY_OPTIONS = [
  { value: "emergency", label: "Emergency (ASAP)", sub: "Same-day or next-day" },
  { value: "urgent", label: "Urgent", sub: "Within the week" },
  { value: "normal", label: "Normal", sub: "Within a few weeks" },
  { value: "planning", label: "Planning Ahead", sub: "Next 1–3 months" },
] as const;

const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial", "Municipal"] as const;

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone required"),
  address: z.string().min(5, "Project address required"),
  service: z.string().min(1, "Select a service"),
  propertyType: z.string().min(1, "Select property type"),
  urgency: z.string().min(1, "Select urgency"),
  description: z.string().min(15, "Please describe your project"),
  preferredContact: z.enum(["phone", "email", "either"]),
});

type FormData = z.infer<typeof schema>;

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: "either" },
  });

  async function nextStep() {
    const valid = await trigger(step === 1
      ? ["name", "email", "phone"]
      : ["address", "service", "propertyType", "urgency"]
    );
    if (valid) setStep((s) => s + 1);
  }

  async function onSubmit(data: FormData) {
    setError("");
    try {
      const res = await fetch("/api/alfieri/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "quote" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call 216-481-1717.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
        <p className="text-green-700">We'll review your project and get back to you within 1 business day. For emergencies, call <a href="tel:+12164811717" className="font-bold underline">216-481-1717</a>.</p>
      </div>
    );
  }

  const steps = ["Your Info", "Project Details", "Review"];

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
              i + 1 < step ? "bg-green-500 text-white" :
              i + 1 === step ? "bg-[#1a237e] text-white" :
              "bg-gray-200 text-gray-500"
            }`}>
              {i + 1 < step ? "✓" : i + 1}
            </div>
            <span className={`text-sm font-medium hidden sm:block ${i + 1 === step ? "text-[#0d1444]" : "text-gray-400"}`}>{s}</span>
            {i < steps.length - 1 && <div className="w-8 h-0.5 bg-gray-200 mx-1" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1: Contact info */}
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#0d1444] mb-4">Your Contact Information</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
              <input {...register("name")} placeholder="John Smith" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]" />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input {...register("email")} type="email" placeholder="john@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]" />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                <input {...register("phone")} type="tel" placeholder="216-555-0123" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]" />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
              <div className="flex gap-3">
                {(["phone", "email", "either"] as const).map((v) => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" {...register("preferredContact")} value={v} className="accent-[#1a237e]" />
                    <span className="text-sm capitalize text-gray-700">{v}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="button" onClick={nextStep} className="w-full bg-[#1a237e] hover:bg-blue-900 text-white font-bold py-4 rounded-lg transition-colors">
              Next: Project Details →
            </button>
          </div>
        )}

        {/* Step 2: Project details */}
        {step === 2 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#0d1444] mb-4">Project Details</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Project Address *</label>
              <input {...register("address")} placeholder="123 Main St, Cleveland, OH 44119" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]" />
              {errors.address && <p className="text-red-600 text-xs mt-1">{errors.address.message}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                <select {...register("service")} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] bg-white">
                  <option value="">Select...</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Property Type *</label>
                <select {...register("propertyType")} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] bg-white">
                  <option value="">Select...</option>
                  {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.propertyType && <p className="text-red-600 text-xs mt-1">{errors.propertyType.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency *</label>
              <div className="grid grid-cols-2 gap-3">
                {URGENCY_OPTIONS.map((opt) => (
                  <label key={opt.value} className="cursor-pointer">
                    <input type="radio" {...register("urgency")} value={opt.value} className="sr-only peer" />
                    <div className="border-2 border-gray-200 peer-checked:border-[#1a237e] peer-checked:bg-[#f0f4ff] rounded-lg p-3 transition-all">
                      <p className="font-semibold text-[#0d1444] text-sm">{opt.label}</p>
                      <p className="text-gray-500 text-xs">{opt.sub}</p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.urgency && <p className="text-red-600 text-xs mt-1">{errors.urgency.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Project *</label>
              <textarea {...register("description")} rows={4} placeholder="Tell us what's happening. The more detail, the better the estimate." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] resize-none" />
              {errors.description && <p className="text-red-600 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition-colors">
                ← Back
              </button>
              <button type="button" onClick={nextStep} className="flex-[2] bg-[#1a237e] hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors">
                Review & Submit →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#0d1444] mb-4">Review Your Request</h2>
            <div className="bg-gray-50 rounded-xl p-5 text-sm space-y-2">
              <p><span className="font-semibold text-gray-500 w-32 inline-block">Service:</span> <span className="text-[#0d1444]">{(document.querySelector('[name=service]') as HTMLSelectElement)?.value || "—"}</span></p>
            </div>
            <div className="bg-[#f0f4ff] rounded-xl p-5 text-sm text-blue-900">
              <p className="font-semibold mb-1">Ready to submit?</p>
              <p className="text-sm text-gray-600">We'll review your quote request and contact you within 1 business day. For same-day or emergency service, call <a href="tel:+12164811717" className="font-bold text-[#1a237e]">216-481-1717</a>.</p>
            </div>
            {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>}
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-lg transition-colors">
                ← Back
              </button>
              <button type="submit" disabled={isSubmitting} className="flex-[2] bg-[#cc2222] hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors">
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
