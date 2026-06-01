"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your project (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

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
  "Other / Not Sure",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setError("");
    try {
      const res = await fetch("/api/alfieri/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 216-481-1717.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">We'll get back to you within one business day. For urgent needs, call 216-481-1717.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
          <input
            {...register("name")}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="216-555-0123"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
        <select
          {...register("service")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] bg-white"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Describe Your Project *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about the issue or project. Include your address and any relevant details..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] resize-none"
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#cc2222] hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-colors text-lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p className="text-center text-gray-500 text-xs">
        We typically respond within 1 business day. For emergencies, call <a href="tel:+12164811717" className="text-[#1a237e] hover:underline">216-481-1717</a>.
      </p>
    </form>
  );
}
