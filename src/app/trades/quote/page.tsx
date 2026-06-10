"use client";

import { useState } from "react";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

const STEPS = ["Your Info", "Project Details", "Confirm"];

export default function QuotePage() {
  const { brand, company, services, serviceAreas } = config;
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "",
    service: "", area: "", timeline: "", budget: "", description: "",
  });

  function next() { setStep((s) => Math.min(s + 1, STEPS.length - 1)); }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center py-16">
          <div className="text-6xl mb-5">🎉</div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Request Received!</h1>
          <p className="text-gray-600 mb-2">Thanks, <strong>{form.name.split(" ")[0]}</strong>. We&apos;ll review your project and reach out within one business day.</p>
          <p className="text-gray-500 text-sm mb-8">We&apos;ll call you at <strong>{form.phone}</strong> to schedule a free on-site estimate.</p>
          <a href="/trades" className="text-white font-bold px-8 py-3 rounded-lg inline-block transition-opacity hover:opacity-90"
            style={{ backgroundColor: brand.primary }}>
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="text-white py-12 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-black mb-2">Get a Free Quote</h1>
          <p className="opacity-80">Takes 2 minutes. No obligation. We&apos;ll call to schedule your free estimate.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Step indicators */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${i <= step ? "text-white" : "bg-gray-200 text-gray-400"}`}
                style={i <= step ? { backgroundColor: brand.primary } : {}}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`ml-2 text-sm font-semibold ${i === step ? "text-gray-900" : "text-gray-400"} ${i < STEPS.length - 1 ? "mr-6" : ""}`}>{label}</span>
              {i < STEPS.length - 1 && <div className={`h-0.5 w-8 mx-2 ${i < step ? "" : "bg-gray-200"}`} style={i < step ? { backgroundColor: brand.primary } : {}} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 space-y-5">
            {step === 0 && (
              <>
                <h2 className="text-xl font-black text-gray-900">Your Contact Info</h2>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Property Address</label>
                  <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Street address where work will be done"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none" />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="text-xl font-black text-gray-900">Project Details</h2>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Service Needed *</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none bg-white">
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s.slug} value={s.name}>{s.icon} {s.name}</option>)}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Area</label>
                    <select value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none bg-white">
                      <option value="">Select...</option>
                      {serviceAreas.map((a) => <option key={a.name}>{a.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Timeline</label>
                    <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none bg-white">
                      <option value="">Select...</option>
                      <option>ASAP</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Approximate Budget</label>
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none bg-white">
                    <option value="">Select...</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $30,000</option>
                    <option>$30,000 – $60,000</option>
                    <option>$60,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Project Description</label>
                  <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4}
                    placeholder="Tell us about what you're looking to do..."
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none resize-none" />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-black text-gray-900">Confirm Your Request</h2>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Name", value: form.name },
                    { label: "Phone", value: form.phone },
                    { label: "Email", value: form.email || "—" },
                    { label: "Address", value: form.address || "—" },
                    { label: "Service", value: form.service },
                    { label: "Area", value: form.area || "—" },
                    { label: "Timeline", value: form.timeline || "—" },
                    { label: "Budget", value: form.budget || "—" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-semibold text-gray-500">{row.label}</span>
                      <span className="text-gray-900 font-semibold text-right">{row.value}</span>
                    </div>
                  ))}
                  {form.description && (
                    <div className="py-2">
                      <p className="font-semibold text-gray-500 mb-1">Description</p>
                      <p className="text-gray-700">{form.description}</p>
                    </div>
                  )}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  We&apos;ll call <strong>{form.phone}</strong> within one business day to schedule your free on-site estimate. No obligation.
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-5">
            {step > 0 && (
              <button type="button" onClick={back} className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                ← Back
              </button>
            )}
            {step < STEPS.length - 1 ? (
              <button type="button" onClick={next} disabled={step === 0 && (!form.name || !form.phone)}
                className="flex-[2] text-white font-bold py-3 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: brand.primary }}>
                Next →
              </button>
            ) : (
              <button type="submit" disabled={loading}
                className="flex-[2] text-white font-bold py-3 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: brand.secondary }}>
                {loading ? "Submitting…" : "Submit Quote Request"}
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Prefer to call? <a href={company.phoneHref} className="font-semibold hover:underline">{company.phone}</a>
        </p>
      </div>
    </div>
  );
}
