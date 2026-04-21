import { getSession } from "@/lib/session";
import { getAllUsers, getAllNotes, getAllListings } from "@/lib/store";
import { Users, StickyNote, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getSession();
  const users = getAllUsers();
  const notes = getAllNotes();
  const listings = getAllListings();
  const pendingListings = listings.filter(l => !l.approved);

  const stats = [
    { label: "Total Users", value: users.length, icon: Users, href: "/admin/users", color: "text-blue-500" },
    { label: "Notes", value: notes.length, icon: StickyNote, href: "/admin/notes", color: "text-amber-500" },
    { label: "Directory Listings", value: listings.length, icon: MapPin, href: "/admin/directory", color: "text-green-500" },
    { label: "Pending Approval", value: pendingListings.length, icon: CheckCircle2, href: "/admin/directory", color: "text-rose-500" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Welcome back, {session.user?.name}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <Link key={s.label} href={s.href} className="bg-card rounded-xl border border-border p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
                <Icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground">{s.value}</div>
            </Link>
          );
        })}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent users */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground text-sm">Recent Users</h2>
            <Link href="/admin/users" className="text-xs text-primary hover:underline">View all</Link>
          </div>
          <div className="flex flex-col gap-2">
            {users.slice(0, 5).map(u => (
              <div key={u.id} className="flex items-center justify-between text-sm">
                <div>
                  <span className="font-medium text-foreground">{u.name}</span>
                  <span className="text-muted-foreground ml-2 text-xs">{u.email}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {u.role}
                </span>
              </div>
            ))}
            {users.length === 0 && <p className="text-sm text-muted-foreground">No users yet.</p>}
          </div>
        </div>

        {/* Recent notes */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground text-sm">Recent Notes</h2>
            <Link href="/admin/notes" className="text-xs text-primary hover:underline">View all</Link>
          </div>
          <div className="flex flex-col gap-3">
            {notes.slice(0, 4).map(n => (
              <div key={n.id} className="text-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-medium text-foreground">{n.subject}</span>
                  <span className="text-xs text-muted-foreground">{new Date(n.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-muted-foreground text-xs line-clamp-1">{n.content}</p>
              </div>
            ))}
            {notes.length === 0 && <p className="text-sm text-muted-foreground">No notes yet.</p>}
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs text-muted-foreground bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
        ⚠️ Prototype mode — user and note data resets on server restart. Connect a database (Vercel KV, Postgres) for persistence.
      </p>
    </div>
  );
}
