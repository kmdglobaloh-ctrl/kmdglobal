"use client";

import { useState, useEffect, useCallback } from "react";
import { TRADES_DEMO_CONFIG, type TradeClient } from "@/lib/trades/data";

const config = TRADES_DEMO_CONFIG;
const CLIENTS_KEY = "trades_clients";

const STATUS_COLORS: Record<TradeClient["status"], string> = {
  lead:        "bg-yellow-100 text-yellow-800",
  active:      "bg-green-100 text-green-800",
  "in-progress": "bg-blue-100 text-blue-800",
  completed:   "bg-gray-100 text-gray-700",
  "follow-up": "bg-orange-100 text-orange-800",
  lost:        "bg-red-100 text-red-700",
};

type FormData = Omit<TradeClient, "id" | "createdAt">;

const EMPTY: FormData = {
  name: "", phone: "", email: "", address: "", service: "", status: "lead",
  lastContact: new Date().toISOString().split("T")[0], birthday: "", notes: "",
  projectValue: 0, source: "other", tags: [], satisfaction: undefined,
};

export default function TradesClientsPage() {
  const [clients, setClients] = useState<TradeClient[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState<TradeClient | null>(null);
  const [form, setForm] = useState<FormData>(EMPTY);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CLIENTS_KEY);
      if (stored) setClients(JSON.parse(stored));
    } catch { /* empty */ }
  }, []);

  const save = useCallback((updated: TradeClient[]) => {
    setClients(updated);
    localStorage.setItem(CLIENTS_KEY, JSON.stringify(updated));
  }, []);

  function openNew() {
    setEditClient(null);
    setForm(EMPTY);
    setShowForm(true);
  }

  function openEdit(c: TradeClient) {
    setEditClient(c);
    setForm({
      name: c.name, phone: c.phone, email: c.email, address: c.address,
      service: c.service, status: c.status, lastContact: c.lastContact,
      birthday: c.birthday ?? "", notes: c.notes, projectValue: c.projectValue,
      source: c.source, tags: c.tags, satisfaction: c.satisfaction,
    });
    setShowForm(true);
  }

  function submitForm() {
    if (!form.name || !form.phone) return;
    if (editClient) {
      save(clients.map((c) => c.id === editClient.id ? { ...editClient, ...form } : c));
    } else {
      save([...clients, {
        ...form,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      }]);
    }
    setShowForm(false);
  }

  function deleteClient(id: string) {
    if (!confirm("Delete this client?")) return;
    save(clients.filter((c) => c.id !== id));
  }

  const filtered = clients.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search) || c.service.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const services = config.services.map((s) => s.name);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: config.brand.primary }}>Clients</h1>
          <p className="text-gray-500 text-sm">{clients.length} total · {clients.filter((c) => c.status === "active" || c.status === "in-progress").length} active</p>
        </div>
        <button onClick={openNew} className="text-white font-bold px-4 py-2 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.secondary }}>
          + Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <input type="search" placeholder="Search name, phone, service..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none" />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none">
          <option value="all">All Statuses</option>
          <option value="lead">Leads</option>
          <option value="active">Active</option>
          <option value="in-progress">In Progress</option>
          <option value="follow-up">Follow-Up</option>
          <option value="completed">Completed</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <div className="text-5xl mb-3">👥</div>
          <p className="font-bold text-gray-900 mb-1">No clients yet</p>
          <p className="text-gray-500 text-sm mb-4">Add your first client to get started</p>
          <button onClick={openNew} className="text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.primary }}>
            Add First Client
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden sm:table-cell">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Service</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Value</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden lg:table-cell">Source</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-gray-500 text-xs">{c.email}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-700 hidden sm:table-cell">
                      <a href={`tel:${c.phone}`} className="hover:underline">{c.phone}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-700 hidden md:table-cell">{c.service}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${STATUS_COLORS[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700 hidden lg:table-cell font-semibold">
                      {c.projectValue > 0 ? `$${c.projectValue.toLocaleString()}` : "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell capitalize">{c.source}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(c)} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors">Edit</button>
                        <button onClick={() => deleteClient(c.id)} className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded hover:bg-red-100 transition-colors">✕</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-black text-gray-900">{editClient ? "Edit Client" : "Add New Client"}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                  <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white">
                    <option value="">Select...</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as TradeClient["status"] })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white">
                    <option value="lead">Lead</option>
                    <option value="active">Active</option>
                    <option value="in-progress">In Progress</option>
                    <option value="follow-up">Follow-Up</option>
                    <option value="completed">Completed</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Project Value ($)</label>
                  <input type="number" value={form.projectValue || ""} onChange={(e) => setForm({ ...form, projectValue: parseInt(e.target.value) || 0 })}
                    placeholder="e.g. 5000" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Source</label>
                  <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value as TradeClient["source"] })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white">
                    <option value="referral">Referral</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                    <option value="nextdoor">Nextdoor</option>
                    <option value="website">Website</option>
                    <option value="repeat">Repeat Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Last Contact</label>
                  <input type="date" value={form.lastContact} onChange={(e) => setForm({ ...form, lastContact: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Birthday</label>
                  <input type="date" value={form.birthday} onChange={(e) => setForm({ ...form, birthday: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Satisfaction (1–5)</label>
                  <select value={form.satisfaction ?? ""} onChange={(e) => setForm({ ...form, satisfaction: e.target.value ? parseInt(e.target.value) as 1|2|3|4|5 : undefined })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white">
                    <option value="">Not rated</option>
                    <option value="5">★★★★★ Excellent</option>
                    <option value="4">★★★★☆ Good</option>
                    <option value="3">★★★☆☆ Average</option>
                    <option value="2">★★☆☆☆ Poor</option>
                    <option value="1">★☆☆☆☆ Very Poor</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Notes</label>
                  <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none resize-none" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)} className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button onClick={submitForm} className="flex-[2] text-white font-bold py-3 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: config.brand.primary }}>
                  {editClient ? "Save Changes" : "Add Client"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
