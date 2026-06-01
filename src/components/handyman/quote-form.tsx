"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SERVICES } from "@/lib/handyman/data";

const URGENCY_OPTIONS = [
  { value: "flexible" as const, label: "Flexible", sub: "Whenever works" },
  { value: "this-week" as const, label: "This Week", sub: "In the next 7 days" },
  { value: "today" as const, label: "ASAP", sub: "Today / tomorrow" },
];

const schema = z.object({
  serviceType: z.string().min(1, "Please select a service"),
  description: z.string().min(10, "Please describe the job in more detail"),
  urgency: z.enum(["flexible", "this-week", "today"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  address: z.string().min(5, "Please provide your address or zip code"),
  discount: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const STEPS = ["Service Details", "Contact Info", "Review & Submit"];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: "flexible" },
  });

  async function nextStep() {
    const fieldsToValidate: (keyof FormData)[] =
      step === 0 ? ["serviceType", "description", "urgency"] : ["name", "email", "phone", "address"];
    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((s) => s + 1);
  }

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/handyman/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "quote" }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    const values = getValues();
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 mb-4">
          Thanks, <strong>{values.name}</strong>! We&apos;ll review your request and reach out
          to <strong>{values.email}</strong> or <strong>{values.phone}</strong> within 2 hours.
        </p>
        <p className="text-gray-500 text-sm">
          For urgent needs, call us directly — we&apos;re here to help.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                i < step
                  ? "bg-green-500 text-white"
                  : i === step
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </div>
            <span
              className={`text-sm font-medium truncate hidden sm:block ${
                i === step ? "text-blue-900" : "text-gray-400"
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 ${i < step ? "bg-green-400" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 0: Service Details */}
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                What service do you need? <span className="text-red-500">*</span>
              </label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.emoji} {s.name}
                  </option>
                ))}
                <option value="Other / Not Sure">Other / Not sure yet</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Describe the job <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description")}
                rows={5}
                placeholder="The more detail, the better — location in home, approximate size, existing materials, etc."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How soon do you need this? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {URGENCY_OPTIONS.map(({ value, label, sub }) => {
                  const selected = getValues("urgency") === value;
                  return (
                    <label
                      key={value}
                      className={`flex flex-col items-center cursor-pointer border-2 rounded-lg p-3 text-center transition-colors ${
                        selected ? "border-blue-700 bg-blue-50" : "border-gray-200 hover:border-blue-200"
                      }`}
                    >
                      <input {...register("urgency")} type="radio" value={value} className="sr-only" />
                      <span className="font-semibold text-sm text-gray-800">{label}</span>
                      <span className="text-xs text-gray-400">{sub}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-lg transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 1: Contact Info */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="(440) 555-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Address / Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder="123 Main St, Chagrin Falls, OH 44022"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Discount Code <span className="text-gray-400 font-normal">(optional — senior/veteran)</span>
              </label>
              <input
                {...register("discount")}
                type="text"
                placeholder="e.g. SENIOR10 or VETERAN10"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Review →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-3">
              <h3 className="font-bold text-gray-900">Review Your Request</h3>
              {(
                [
                  ["Service", getValues("serviceType")],
                  ["Timing", { flexible: "Flexible", "this-week": "This week", today: "ASAP" }[getValues("urgency")]],
                  ["Description", getValues("description")],
                  ["Name", getValues("name")],
                  ["Phone", getValues("phone")],
                  ["Email", getValues("email")],
                  ["Address", getValues("address")],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div key={label} className="flex gap-3 text-sm">
                  <span className="font-medium text-gray-500 w-24 shrink-0">{label}</span>
                  <span className="text-gray-800">{value}</span>
                </div>
              ))}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors"
              >
                {submitting ? "Submitting…" : "Submit Quote Request"}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center">
              By submitting you agree to be contacted about this request. We never share your info.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
