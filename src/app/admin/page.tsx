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

      {/* Site Proposals & Templates */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-foreground mb-5">🏗️ Client Sites & Templates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Templates */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">Template</span>
            </div>
            <h3 className="font-bold text-foreground text-base mt-2 mb-1">🔨 ProHandy Services</h3>
            <p className="text-muted-foreground text-xs mb-4">Handyman business website template. 8 services, 16 service areas, gallery, reviews, blog, 3-step quote form, mobile CTA bar.</p>
            <div className="flex gap-2">
              <Link href="/handyman" target="_blank" className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                View Site ↗
              </Link>
              <Link href="/handyman/quote" target="_blank" className="text-xs bg-muted text-muted-foreground font-semibold px-3 py-1.5 rounded-lg hover:bg-muted/80 transition-colors">
                Quote Form ↗
              </Link>
            </div>
          </div>

          {/* Alfieri Brothers — Company Proposal */}
          <div className="bg-card border-2 border-[#1a237e]/30 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1a237e]/5 rounded-full -translate-y-8 translate-x-8" />
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">Company Proposal</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">🔒 Unlisted</span>
            </div>
            <h3 className="font-bold text-foreground text-base mt-2 mb-1">🏗️ Alfieri Brothers Contracting</h3>
            <p className="text-muted-foreground text-xs mb-3">Cleveland, OH excavation & contracting. 11 service pages, admin CRM, email campaigns, AI assistant, lead monitor.</p>

            {/* Pricing tiers */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { tier: "Standard", price: "$3,500", mo: "$175/mo", color: "bg-slate-50 border-slate-200" },
                { tier: "Professional", price: "$5,000", mo: "$275/mo", color: "bg-blue-50 border-blue-200", recommended: true },
                { tier: "Premium", price: "$7,000", mo: "$450/mo", color: "bg-purple-50 border-purple-200" },
              ].map((p) => (
                <div key={p.tier} className={`border rounded-lg p-2.5 text-center ${p.color} relative`}>
                  {p.recommended && <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] bg-[#1a237e] text-white px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap">Recommended</span>}
                  <p className="text-xs text-gray-500 font-medium mt-1">{p.tier}</p>
                  <p className="font-black text-[#0d1444] text-sm">{p.price}</p>
                  <p className="text-[10px] text-gray-500">{p.mo}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <Link href="/alfieri" target="_blank" className="text-xs bg-[#1a237e] text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-900 transition-colors">
                Preview Site ↗
              </Link>
              <Link href="/alfieri/admin/login" target="_blank" className="text-xs bg-[#cc2222] text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors">
                Admin Portal ↗
              </Link>
              <Link href="/admin/proposals/alfieri" className="text-xs bg-muted text-muted-foreground font-semibold px-3 py-1.5 rounded-lg hover:bg-muted/80 transition-colors">
                Full Proposal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
