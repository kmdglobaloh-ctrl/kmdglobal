/**
 * In-memory store — prototype only.
 * Data persists within a warm server process but resets on cold starts.
 * Replace with a real database (Vercel KV, Postgres, etc.) for production.
 */

import bcrypt from "bcryptjs";

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "admin" | "user";
  createdAt: string;
}

export interface Note {
  id: string;
  subject: string;
  content: string;
  createdAt: string;
  createdBy: string;
}

export interface Listing {
  id: string;
  name: string;
  category: string;
  contactPerson: string;
  phone: string;
  email: string;
  website?: string;
  location: string;
  description: string;
  featured: boolean;
  approved: boolean;
  createdAt: string;
}

// ─── Seed users ──────────────────────────────────────────────────────────────

const adminEmail = process.env.ADMIN_EMAIL ?? "admin@kmdglobal.ai";
const adminPassword = process.env.ADMIN_PASSWORD ?? "admin1234";

const users = new Map<string, User>([
  [
    "admin-1",
    {
      id: "admin-1",
      name: "Admin",
      email: adminEmail,
      passwordHash: bcrypt.hashSync(adminPassword, 10),
      role: "admin",
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "demo-user",
    {
      id: "demo-user",
      name: "Demo User",
      email: "demo@example.com",
      passwordHash: bcrypt.hashSync("demo1234", 10),
      role: "user",
      createdAt: new Date().toISOString(),
    },
  ],
]);

const notes = new Map<string, Note>();

const listings = new Map<string, Listing>([
  [
    "lst-1",
    {
      id: "lst-1",
      name: "Caribbean Coast Property Management",
      category: "Property Management",
      contactPerson: "Marco Solano",
      phone: "+506 8821-4455",
      email: "marco@caribbeanpm.cr",
      website: "https://caribbeanpm.cr",
      location: "Puerto Viejo",
      description: "Full-service property management for vacation rentals and long-term properties. Handles guest check-in, cleaning coordination, maintenance, and owner reporting.",
      featured: true,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-2",
    {
      id: "lst-2",
      name: "Tico Fix-It Handyman Services",
      category: "Handyman",
      contactPerson: "Luis Vargas",
      phone: "+506 8734-2211",
      email: "luis@ticofixcr.com",
      location: "Puerto Viejo / Cahuita",
      description: "General repairs, carpentry, plumbing basics, and electrical work for homes and rental properties. Available weekdays and emergencies on request.",
      featured: false,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-3",
    {
      id: "lst-3",
      name: "Pura Pool & AC",
      category: "Pool & AC",
      contactPerson: "Roberto Méndez",
      phone: "+506 8990-1234",
      email: "roberto@purapool.cr",
      location: "Puerto Viejo / Playa Cocles",
      description: "Weekly and bi-weekly pool maintenance, chemical balancing, and repairs. Also installs and services split AC units and mini-split systems for residential and commercial properties.",
      featured: true,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-4",
    {
      id: "lst-4",
      name: "Limpieza Caribe Cleaning Services",
      category: "Cleaning",
      contactPerson: "Ana Torres",
      phone: "+506 8556-7788",
      email: "ana@limpiezacaribe.com",
      location: "Puerto Viejo / Manzanillo",
      description: "Vacation rental turnover cleaning, deep cleans, and ongoing weekly service. Team of 3-6 cleaners. Short notice available for last-minute bookings.",
      featured: false,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-5",
    {
      id: "lst-5",
      name: "Selva Verde Landscaping",
      category: "Landscaping",
      contactPerson: "Héctor Jiménez",
      phone: "+506 8441-9900",
      email: "hector@selvaverde.cr",
      location: "Puerto Viejo area",
      description: "Garden maintenance, lawn mowing, tropical planting, irrigation setup, and jungle clearing. Weekly or monthly contracts available for rental properties and private residences.",
      featured: false,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-6",
    {
      id: "lst-6",
      name: "Caribbean Shuttle & Transport",
      category: "Transportation",
      contactPerson: "Diego Arce",
      phone: "+506 8123-5566",
      email: "diego@caribbeanshuttle.cr",
      location: "Puerto Viejo / Limón / San José",
      description: "Private shuttles from San José, Limón, and regional airports to Puerto Viejo, Cahuita, and Manzanillo. Also rents tuk-tuks and bikes by the day for local getting around.",
      featured: false,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
  [
    "lst-7",
    {
      id: "lst-7",
      name: "Cocles Vacation Rentals",
      category: "Property Management",
      contactPerson: "Sarah Mitchell",
      phone: "+506 8867-3344",
      email: "sarah@coclesrentals.com",
      website: "https://coclesrentals.com",
      location: "Playa Cocles",
      description: "Boutique vacation rental management specializing in beachfront and jungle properties near Cocles. Full booking management including Airbnb, VRBO, and direct reservations.",
      featured: true,
      approved: true,
      createdAt: new Date().toISOString(),
    },
  ],
]);

// ─── User CRUD ────────────────────────────────────────────────────────────────

export function getUserByEmail(email: string): User | undefined {
  return [...users.values()].find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function getUserById(id: string): User | undefined {
  return users.get(id);
}

export function getAllUsers(): User[] {
  return [...users.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createUser(data: Omit<User, "id" | "createdAt">): User {
  const id = `user-${Date.now()}`;
  const user: User = { ...data, id, createdAt: new Date().toISOString() };
  users.set(id, user);
  return user;
}

export function deleteUser(id: string): boolean {
  return users.delete(id);
}

// ─── Notes CRUD ───────────────────────────────────────────────────────────────

export function getAllNotes(): Note[] {
  return [...notes.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createNote(data: Omit<Note, "id" | "createdAt">): Note {
  const id = `note-${Date.now()}`;
  const note: Note = { ...data, id, createdAt: new Date().toISOString() };
  notes.set(id, note);
  return note;
}

export function deleteNote(id: string): boolean {
  return notes.delete(id);
}

// ─── Listings CRUD ────────────────────────────────────────────────────────────

export function getAllListings(): Listing[] {
  return [...listings.values()].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function getApprovedListings(): Listing[] {
  return getAllListings().filter((l) => l.approved);
}

export function createListing(data: Omit<Listing, "id" | "createdAt">): Listing {
  const id = `lst-${Date.now()}`;
  const listing: Listing = { ...data, id, createdAt: new Date().toISOString() };
  listings.set(id, listing);
  return listing;
}

export function updateListing(id: string, data: Partial<Listing>): Listing | null {
  const existing = listings.get(id);
  if (!existing) return null;
  const updated = { ...existing, ...data };
  listings.set(id, updated);
  return updated;
}

export function deleteListing(id: string): boolean {
  return listings.delete(id);
}

export const LISTING_CATEGORIES = [
  "Property Management",
  "Handyman",
  "Pool & AC",
  "Cleaning",
  "Landscaping",
  "Transportation",
  "Tours & Activities",
  "Other",
] as const;
