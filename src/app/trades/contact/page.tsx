"use client";

import { useState } from "react";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

export default function ContactPage() {
  const { brand, company, services, serviceAreas } = config;
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="text-white py-16 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-3">Contact Us</h1>
          <p className="text-lg opacity-80">We respond to all inquiries within one business day.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: "📞", label: "Phone", value: company.phone, href: company.phoneHref },
                { icon: "✉️", label: "Email", value: company.email, href: `mailto:${company.email}` },
                { icon: "📍", label: "Address", value: `${company.addressStreet}, ${company.addressCity}, ${company.addressState} ${company.addressZip}`, href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-gray-900 hover:underline">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.filter((a) => a.highlight).map((a) => (
                <span key={a.name} className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: brand.primary }}>
                  {a.name}
                </span>
              ))}
              {serviceAreas.filter((a) => !a.highlight).map((a) => (
                <span key={a.name} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">{a.name}</span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl text-white" style={{ backgroundColor: brand.secondary }}>
            <p className="font-bold mb-1">Prefer to talk?</p>
            <p className="text-sm opacity-80 mb-3">We&apos;re available Monday–Saturday, 7am–6pm.</p>
            <a href={company.phoneHref} className="bg-white font-bold px-4 py-2 rounded-lg text-sm inline-block transition-opacity hover:opacity-90"
              style={{ color: brand.secondary }}>
              📞 Call {company.phone}
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600">Thanks for reaching out. We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-black text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-current"
                      style={{ "--tw-border-opacity": "1" } as React.CSSProperties} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Service Needed</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white">
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                      placeholder="Describe your project or question..."
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none resize-none" />
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full text-white font-bold py-3 rounded-lg text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: brand.primary }}>
                  {loading ? "Sending…" : "Send Message"}
                </button>
                <p className="text-xs text-gray-400 text-center">We respond within one business day. No spam, ever.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
