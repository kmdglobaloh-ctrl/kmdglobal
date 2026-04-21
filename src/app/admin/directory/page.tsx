"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, Star, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { LISTING_CATEGORIES } from "@/lib/store";

interface Listing { id: string; name: string; category: string; contactPerson: string; phone: string; email: string; website?: string; location: string; description: string; featured: boolean; approved: boolean; }

interface FormState { name: string; category: string; contactPerson: string; phone: string; email: string; website: string; location: string; description: string; featured: boolean; approved: boolean; }
const blank: FormState = { name: "", category: LISTING_CATEGORIES[0], contactPerson: "", phone: "", email: "", website: "", location: "", description: "", featured: false, approved: true };

export default function AdminDirectory() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(blank);
  const [saving, setSaving] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/listings");
    if (res.ok) setListings(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/listings", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
    });
    if (res.ok) { const l = await res.json(); setListings(prev => [l, ...prev]); setForm(blank); setShowForm(false); }
    setSaving(false);
  }

  async function toggle(id: string, field: "featured" | "approved", value: boolean) {
    const res = await fetch("/api/admin/listings", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, [field]: value }) });
    if (res.ok) setListings(prev => prev.map(l => l.id === id ? { ...l, [field]: value } : l));
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this listing?")) return;
    await fetch("/api/admin/listings", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setListings(prev => prev.filter(l => l.id !== id));
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Directory</h1>
          <p className="text-sm text-muted-foreground mt-1">{listings.length} listings · {listings.filter(l => !l.approved).length} pending</p>
        </div>
        <Button size="sm" onClick={() => setShowForm(s => !s)} className="gap-2">
          <Plus className="h-4 w-4" /> Add Listing
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-card border border-border rounded-xl p-6 mb-6 flex flex-col gap-4">
          <h2 className="font-semibold text-foreground">New Listing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {([["Business Name", "name", "text", "Puerto Viejo Pool Co."], ["Contact Person", "contactPerson", "text", "Roberto M."], ["Phone", "phone", "tel", "+506 8xxx-xxxx"], ["Email", "email", "email", "hello@business.cr"], ["Website", "website", "url", "https://..."], ["Location", "location", "text", "Puerto Viejo"]] as const).map(([label, key, type, ph]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <Label>{label}</Label>
                <Input type={type} value={(form as unknown as Record<string, string>)[key] ?? ""} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={ph} required={["name","contactPerson","phone","email","location"].includes(key)} />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <Label>Category</Label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {LISTING_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} className="rounded" />
                Featured
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={form.approved} onChange={e => setForm(f => ({ ...f, approved: e.target.checked }))} className="rounded" />
                Approved
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Description</Label>
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={3} placeholder="Describe the business…" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" required />
          </div>
          <div className="flex gap-2">
            <Button type="submit" size="sm" disabled={saving}>{saving ? "Saving…" : "Add Listing"}</Button>
            <Button type="button" size="sm" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-3">
        {loading ? <p className="text-sm text-muted-foreground">Loading…</p> : listings.map(l => (
          <div key={l.id} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{l.name}</span>
                  <Badge variant="secondary" className="text-xs">{l.category}</Badge>
                  {l.featured && <span className="text-xs bg-amber-500/15 text-amber-600 border border-amber-500/20 rounded-full px-2 py-0.5 flex items-center gap-1"><Star className="h-3 w-3" />Featured</span>}
                  {l.approved ? <span className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" />Live</span> : <span className="text-xs text-rose-500 flex items-center gap-1"><XCircle className="h-3 w-3" />Pending</span>}
                </div>
                <p className="text-xs text-muted-foreground mb-1">{l.location} · {l.contactPerson} · {l.phone} · {l.email}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{l.description}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => toggle(l.id, "featured", !l.featured)} title="Toggle featured" className={`p-1.5 rounded hover:bg-muted transition-colors ${l.featured ? "text-amber-500" : "text-muted-foreground"}`}><Star className="h-4 w-4" /></button>
                <button onClick={() => toggle(l.id, "approved", !l.approved)} title="Toggle approved" className={`p-1.5 rounded hover:bg-muted transition-colors ${l.approved ? "text-green-500" : "text-muted-foreground"}`}><CheckCircle2 className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(l.id)} className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
