"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Note { id: string; subject: string; content: string; createdAt: string; createdBy: string; }

export default function AdminNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/notes");
    if (res.ok) setNotes(await res.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setSaving(true);
    const res = await fetch("/api/admin/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: subject || "General", content }),
    });
    if (res.ok) {
      const note = await res.json();
      setNotes(n => [note, ...n]);
      setSubject(""); setContent("");
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    await fetch("/api/admin/notes", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setNotes(n => n.filter(x => x.id !== id));
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Notes</h1>
        <p className="text-sm text-muted-foreground mt-1">Internal notes about businesses, users, or anything else</p>
      </div>

      {/* Add note */}
      <form onSubmit={handleCreate} className="bg-card border border-border rounded-xl p-5 mb-8 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Label>Subject <span className="text-muted-foreground font-normal">(optional)</span></Label>
          <Input value={subject} onChange={e => setSubject(e.target.value)} placeholder="e.g. Caribbean PM, Pool guy Luis, Feature idea…" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Note</Label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={3}
            placeholder="Write your note here…"
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            required
          />
        </div>
        <Button type="submit" size="sm" disabled={saving} className="w-fit gap-2">
          <Plus className="h-3.5 w-3.5" />
          {saving ? "Saving…" : "Add Note"}
        </Button>
      </form>

      {/* Notes list */}
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : notes.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <StickyNote className="h-8 w-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No notes yet. Add your first one above.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {notes.map(n => (
            <div key={n.id} className="bg-card border border-border rounded-xl p-4 group">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-foreground bg-primary/10 text-primary px-2 py-0.5 rounded-full">{n.subject}</span>
                    <span className="text-xs text-muted-foreground">{new Date(n.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{n.content}</p>
                </div>
                <button onClick={() => handleDelete(n.id)} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all shrink-0">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
