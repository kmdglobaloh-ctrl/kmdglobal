"use client";

import { useParams } from "next/navigation";
import { SAMPLE_PROJECTS } from "@/lib/trades/data";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;

const STATUS_LABELS: Record<string, { label: string; color: string; icon: string }> = {
  quoted:      { label: "Quote Sent",   color: "bg-gray-100 text-gray-700",   icon: "📋" },
  scheduled:   { label: "Scheduled",    color: "bg-blue-100 text-blue-800",   icon: "📅" },
  "in-progress":{ label: "In Progress", color: "bg-yellow-100 text-yellow-800", icon: "🔨" },
  "on-hold":   { label: "On Hold",      color: "bg-orange-100 text-orange-800", icon: "⏸️" },
  completed:   { label: "Completed",    color: "bg-green-100 text-green-800", icon: "✅" },
  cancelled:   { label: "Cancelled",    color: "bg-red-100 text-red-800",     icon: "❌" },
};

export default function ProjectTrackerPage() {
  const { token } = useParams<{ token: string }>();
  const project = SAMPLE_PROJECTS.find((p) => p.publicToken === token);
  const { company, brand } = config;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: brand.primary }}>
        <div className="bg-white rounded-2xl p-10 text-center max-w-sm">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="font-black text-xl text-gray-900 mb-2">Project Not Found</h1>
          <p className="text-gray-500 text-sm mb-6">This link may be invalid or expired. Contact us for help.</p>
          <a href={company.phoneHref} className="block text-center text-white font-bold py-3 rounded-lg" style={{ backgroundColor: brand.primary }}>
            Call {company.phone}
          </a>
        </div>
      </div>
    );
  }

  const visibleUpdates = project.updates.filter((u) => u.visibleToClient).sort((a, b) => b.date.localeCompare(a.date));
  const status = STATUS_LABELS[project.status] ?? STATUS_LABELS.quoted;

  const progressSteps = ["quoted", "scheduled", "in-progress", "completed"];
  const currentStep = progressSteps.indexOf(project.status);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white py-8 px-4" style={{ backgroundColor: brand.primary }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-sm opacity-70 mb-1">{company.name} · Project Update Portal</p>
          <h1 className="text-2xl font-black mb-1">{project.name}</h1>
          <p className="text-sm opacity-80">{project.clientName}</p>
          <div className="mt-3">
            <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${status.color}`}>
              {status.icon} {status.label}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Progress bar */}
        {project.status !== "cancelled" && project.status !== "on-hold" && (
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm font-bold text-gray-700 mb-4">Project Progress</p>
            <div className="flex items-center gap-0">
              {progressSteps.map((step, i) => {
                const done = i <= currentStep;
                const active = i === currentStep;
                return (
                  <div key={step} className="flex items-center flex-1 last:flex-none">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${done ? "text-white" : "bg-gray-200 text-gray-400"}`}
                      style={done ? { backgroundColor: brand.primary } : {}}>
                      {done && i < currentStep ? "✓" : i + 1}
                    </div>
                    <div className="flex-1 text-center mx-1 last:hidden">
                      <div className={`h-1.5 rounded-full ${i < currentStep ? "bg-current" : "bg-gray-200"}`}
                        style={i < currentStep ? { backgroundColor: brand.primary } : {}} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between mt-2">
              {progressSteps.map((step, i) => (
                <p key={step} className={`text-xs capitalize ${i <= currentStep ? "font-semibold text-gray-800" : "text-gray-400"}`}
                  style={i === currentStep ? { color: brand.primary } : {}}>
                  {step.replace("-", " ")}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Project details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <p className="text-sm font-bold text-gray-700 mb-3">Project Details</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500 text-xs">Service</p>
              <p className="font-semibold text-gray-900">{project.service}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">Start Date</p>
              <p className="font-semibold text-gray-900">{new Date(project.startDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            </div>
            {project.endDate && (
              <div>
                <p className="text-gray-500 text-xs">Est. Completion</p>
                <p className="font-semibold text-gray-900">{new Date(project.endDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              </div>
            )}
            {project.crew && (
              <div>
                <p className="text-gray-500 text-xs">Your Crew</p>
                <p className="font-semibold text-gray-900">{project.crew}</p>
              </div>
            )}
            {project.permitRequired && (
              <div className="col-span-2">
                <p className="text-gray-500 text-xs">Permit</p>
                <p className="font-semibold text-gray-900">{project.permitNumber ? `#${project.permitNumber} — Issued` : "Permit Applied For"}</p>
              </div>
            )}
          </div>
        </div>

        {/* Updates timeline */}
        <div>
          <h2 className="font-black text-lg mb-4" style={{ color: brand.primary }}>Project Updates</h2>
          {visibleUpdates.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
              <div className="text-4xl mb-2">📋</div>
              <p className="font-semibold text-gray-700">No updates yet</p>
              <p className="text-sm text-gray-500 mt-1">Updates will appear here as work progresses.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {visibleUpdates.map((update, i) => (
                <div key={update.id} className={`bg-white rounded-2xl border p-5 ${update.milestone ? "border-current shadow-sm" : "border-gray-200"}`}
                  style={update.milestone ? { borderColor: brand.secondary } : {}}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {update.milestone && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: brand.secondary }}>
                          ★ Milestone
                        </span>
                      )}
                      {i === 0 && <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Latest</span>}
                    </div>
                    <p className="text-xs text-gray-400">{new Date(update.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}</p>
                  </div>
                  <h3 className="font-black text-gray-900 mb-1">{update.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{update.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact card */}
        <div className="text-white rounded-2xl p-5 text-center" style={{ backgroundColor: brand.primary }}>
          <p className="font-bold mb-1">Questions about your project?</p>
          <p className="text-sm opacity-80 mb-3">We&apos;re always happy to talk through the details.</p>
          <a href={company.phoneHref} className="inline-block text-white font-bold px-6 py-3 rounded-lg text-sm" style={{ backgroundColor: brand.secondary }}>
            📞 Call {company.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
