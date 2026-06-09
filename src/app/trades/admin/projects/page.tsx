"use client";

import { useState, useEffect } from "react";
import { TRADES_DEMO_CONFIG, SAMPLE_PROJECTS, type TradeProject, type ProjectUpdate } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const STORAGE_KEY = "trades_projects";

const STATUS_CONFIG = {
  quoted:       { label: "Quote Sent",   color: "bg-gray-100 text-gray-700" },
  scheduled:    { label: "Scheduled",    color: "bg-blue-100 text-blue-800" },
  "in-progress":{ label: "In Progress",  color: "bg-yellow-100 text-yellow-800" },
  "on-hold":    { label: "On Hold",      color: "bg-orange-100 text-orange-800" },
  completed:    { label: "Completed",    color: "bg-green-100 text-green-800" },
  cancelled:    { label: "Cancelled",    color: "bg-red-100 text-red-800" },
};

function genId() { return `proj-${Date.now()}`; }
function genToken(name: string) { return `tok_${name.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`; }
function genUpdateId() { return `upd-${Date.now()}`; }

const BLANK_PROJECT: Omit<TradeProject, "id" | "publicToken" | "createdAt"> = {
  clientId: "", clientName: "", name: "", service: "", status: "quoted",
  startDate: new Date().toISOString().split("T")[0], estimatedValue: 0,
  depositPaid: false, balanceDue: 0, updates: [], internalNotes: "",
  permitRequired: false,
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<TradeProject[]>(SAMPLE_PROJECTS);
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<TradeProject | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<typeof BLANK_PROJECT>({ ...BLANK_PROJECT });
  const [editId, setEditId] = useState<string | null>(null);
  const [updateForm, setUpdateForm] = useState({ title: "", body: "", milestone: false, visibleToClient: true });
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); if (s) setProjects(JSON.parse(s)); } catch { /* empty */ }
  }, []);

  function save(updated: TradeProject[]) {
    setProjects(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function openAdd() { setForm({ ...BLANK_PROJECT }); setEditId(null); setShowForm(true); }
  function openEdit(p: TradeProject) {
    const { id, publicToken, createdAt, ...rest } = p;
    setForm(rest); setEditId(id); setShowForm(true);
  }

  function submitProject(e: React.FormEvent) {
    e.preventDefault();
    if (editId) {
      save(projects.map((p) => p.id === editId ? { ...p, ...form } : p));
    } else {
      const np: TradeProject = { ...form, id: genId(), publicToken: genToken(form.clientName), createdAt: new Date().toISOString() };
      save([np, ...projects]);
    }
    setShowForm(false);
    setSelected(null);
  }

  function addUpdate(projectId: string) {
    const update: ProjectUpdate = { ...updateForm, id: genUpdateId(), date: new Date().toISOString().split("T")[0] };
    const updated = projects.map((p) => p.id === projectId ? { ...p, updates: [...p.updates, update] } : p);
    save(updated);
    const updatedProject = updated.find((p) => p.id === projectId) ?? null;
    setSelected(updatedProject);
    setUpdateForm({ title: "", body: "", milestone: false, visibleToClient: true });
    setShowUpdateForm(false);
  }

  function deleteUpdate(projectId: string, updateId: string) {
    const updated = projects.map((p) => p.id === projectId ? { ...p, updates: p.updates.filter((u) => u.id !== updateId) } : p);
    save(updated);
    setSelected(updated.find((p) => p.id === projectId) ?? null);
  }

  const filtered = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  if (selected) {
    const publicUrl = `/trades/projects/${selected.publicToken}`;
    return (
      <div className="max-w-3xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <button onClick={() => setSelected(null)} className="text-sm font-semibold hover:underline" style={{ color: config.brand.primary }}>← Back</button>
          <span className="text-gray-400">/</span>
          <span className="text-sm font-semibold text-gray-700">{selected.name}</span>
        </div>

        {/* Project header */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-xl font-black text-gray-900">{selected.name}</h1>
              <p className="text-gray-500 text-sm">{selected.clientName} · {selected.service}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_CONFIG[selected.status]?.color}`}>
                {STATUS_CONFIG[selected.status]?.label}
              </span>
              <button onClick={() => openEdit(selected)} className="text-xs text-white font-bold px-3 py-1.5 rounded-lg" style={{ backgroundColor: config.brand.primary }}>Edit</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><p className="text-xs text-gray-400">Est. Value</p><p className="font-bold text-green-700">${selected.estimatedValue.toLocaleString()}</p></div>
            <div><p className="text-xs text-gray-400">Balance Due</p><p className="font-bold text-red-600">${selected.balanceDue.toLocaleString()}</p></div>
            <div><p className="text-xs text-gray-400">Start Date</p><p className="font-semibold">{selected.startDate}</p></div>
            <div><p className="text-xs text-gray-400">Deposit</p><p className={`font-bold ${selected.depositPaid ? "text-green-600" : "text-red-500"}`}>{selected.depositPaid ? "Paid" : "Outstanding"}</p></div>
          </div>
          {selected.internalNotes && <p className="mt-3 text-xs text-gray-500 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">📝 {selected.internalNotes}</p>}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
            <p className="text-xs text-gray-500">Customer link:</p>
            <a href={publicUrl} target="_blank" rel="noreferrer" className="text-xs font-mono hover:underline" style={{ color: config.brand.primary }}>
              kmdglobal.com{publicUrl}
            </a>
            <button onClick={() => navigator.clipboard.writeText(`${window.location.origin}${publicUrl}`)} className="text-xs text-white px-2 py-0.5 rounded" style={{ backgroundColor: config.brand.accent }}>
              Copy
            </button>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-gray-900">Project Updates</h2>
            <button onClick={() => setShowUpdateForm(!showUpdateForm)} className="text-xs text-white font-bold px-3 py-1.5 rounded-lg" style={{ backgroundColor: config.brand.secondary }}>
              + Add Update
            </button>
          </div>

          {showUpdateForm && (
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4 space-y-3">
              <input type="text" placeholder="Update title (e.g. Demo Day Complete)" value={updateForm.title} onChange={(e) => setUpdateForm({ ...updateForm, title: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              <textarea rows={3} placeholder="Describe what happened today, what's next, any notes for the customer..." value={updateForm.body} onChange={(e) => setUpdateForm({ ...updateForm, body: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none" />
              <div className="flex items-center gap-4 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={updateForm.milestone} onChange={(e) => setUpdateForm({ ...updateForm, milestone: e.target.checked })} className="w-4 h-4" />
                  Mark as milestone
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={updateForm.visibleToClient} onChange={(e) => setUpdateForm({ ...updateForm, visibleToClient: e.target.checked })} className="w-4 h-4" />
                  Visible to customer
                </label>
              </div>
              <div className="flex gap-2">
                <button onClick={() => addUpdate(selected.id)} disabled={!updateForm.title || !updateForm.body} className="text-xs text-white font-bold px-4 py-2 rounded-lg disabled:opacity-40" style={{ backgroundColor: config.brand.primary }}>
                  Post Update
                </button>
                <button onClick={() => setShowUpdateForm(false)} className="text-xs text-gray-600 font-semibold px-3 py-2 rounded-lg bg-gray-100">Cancel</button>
              </div>
            </div>
          )}

          {selected.updates.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-6">No updates posted yet. Add the first one above.</p>
          ) : (
            <div className="space-y-3">
              {[...selected.updates].sort((a, b) => b.date.localeCompare(a.date)).map((u) => (
                <div key={u.id} className={`border rounded-xl p-4 ${u.milestone ? "border-amber-300 bg-amber-50" : "border-gray-100"}`}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm text-gray-900">{u.title}</p>
                      {u.milestone && <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">★ Milestone</span>}
                      {!u.visibleToClient && <span className="text-xs bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded-full">Internal only</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{u.date}</span>
                      <button onClick={() => deleteUpdate(selected.id, u.id)} className="text-xs text-red-400 hover:text-red-600">✕</button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{u.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Projects</h1>
          <p className="text-gray-500 text-sm">Job management & customer update portal</p>
        </div>
        <button onClick={openAdd} className="text-white font-bold px-4 py-2 rounded-lg text-sm" style={{ backgroundColor: config.brand.secondary }}>
          + New Project
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {["all", ...Object.keys(STATUS_CONFIG)].map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors capitalize ${filter === s ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            style={filter === s ? { backgroundColor: config.brand.primary } : {}}>
            {s === "all" ? `All (${projects.length})` : `${STATUS_CONFIG[s as keyof typeof STATUS_CONFIG]?.label} (${projects.filter((p) => p.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Projects list */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <p className="text-4xl mb-2">🔨</p>
            <p className="font-bold text-gray-700">No projects yet</p>
            <button onClick={openAdd} className="mt-3 text-xs text-white font-bold px-4 py-2 rounded-lg" style={{ backgroundColor: config.brand.primary }}>Add First Project</button>
          </div>
        ) : filtered.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${STATUS_CONFIG[p.status]?.color}`}>{STATUS_CONFIG[p.status]?.label}</span>
                  {p.updates.length > 0 && <span className="text-xs text-gray-400">{p.updates.length} update{p.updates.length !== 1 ? "s" : ""}</span>}
                </div>
                <p className="font-bold text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-500">{p.clientName} · {p.service} · Start: {p.startDate}</p>
              </div>
              <div className="text-right ml-4 shrink-0">
                <p className="font-black text-green-700">${p.estimatedValue.toLocaleString()}</p>
                <p className="text-xs text-red-500">Due: ${p.balanceDue.toLocaleString()}</p>
                <div className="flex gap-2 mt-2 justify-end">
                  <button onClick={() => setSelected(p)} className="text-xs text-white font-bold px-3 py-1 rounded-lg" style={{ backgroundColor: config.brand.primary }}>
                    Open →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <h2 className="font-black text-lg mb-4">{editId ? "Edit Project" : "New Project"}</h2>
            <form onSubmit={submitProject} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Project Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder="Kitchen Remodel — Full Gut" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Client Name</label>
                  <input required value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none">
                    <option value="">Select...</option>
                    {config.services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as TradeProject["status"] })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none">
                    {Object.entries(STATUS_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Start Date</label>
                  <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Est. Value ($)</label>
                  <input type="number" value={form.estimatedValue} onChange={(e) => setForm({ ...form, estimatedValue: Number(e.target.value) })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Balance Due ($)</label>
                  <input type="number" value={form.balanceDue} onChange={(e) => setForm({ ...form, balanceDue: Number(e.target.value) })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Crew</label>
                  <input value={form.crew ?? ""} onChange={(e) => setForm({ ...form, crew: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none" placeholder="Mike & Danny" />
                </div>
                <div className="col-span-2 flex gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.depositPaid} onChange={(e) => setForm({ ...form, depositPaid: e.target.checked })} className="w-4 h-4" />
                    Deposit paid
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.permitRequired} onChange={(e) => setForm({ ...form, permitRequired: e.target.checked })} className="w-4 h-4" />
                    Permit required
                  </label>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Internal Notes</label>
                  <textarea rows={2} value={form.internalNotes} onChange={(e) => setForm({ ...form, internalNotes: e.target.value })} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none" />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 text-white font-bold py-2.5 rounded-lg" style={{ backgroundColor: config.brand.primary }}>{editId ? "Save" : "Create Project"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-700 font-bold py-2.5 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
