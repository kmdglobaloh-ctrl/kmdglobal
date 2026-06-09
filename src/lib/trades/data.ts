// ─── Template Demo Config ─────────────────────────────────────────────────────
// This is the TEMPLATE / demo config shown at /trades on KMDGlobal.
// When cloning for a real client, copy this file, rename it, and fill in their details.
// Then import it in the layout and all config-driven components.

import type { TradeConfig } from "./config";
import { PROFESSIONAL_FEATURES } from "./config";

export const TRADES_DEMO_CONFIG: TradeConfig = {
  company: {
    name: "ProTrades Co.",
    legalName: "ProTrades Co. LLC",
    tagline: "Quality Work. Honest Pricing. Done Right.",
    phone: "(216) 555-0100",
    phoneHref: "tel:+12165550100",
    email: "info@protradesco.com",
    addressStreet: "123 Main Street",
    addressCity: "Cleveland",
    addressState: "OH",
    addressZip: "44101",
    established: 2005,
    licenseNumber: "OH-12345",
  },
  trade: {
    type: "general-contractor",
    singular: "Contractor",
    plural: "Contractors",
    licenseLabel: "Licensed, Bonded & Insured",
    emergencyLabel: "Emergency Response Available",
    hasEmergency: false,
  },
  brand: {
    primary: "#1a3a5c",
    secondary: "#e85d04",
    accent: "#023e8a",
  },
  features: PROFESSIONAL_FEATURES,
  seo: {
    baseUrl: "https://kmdglobal.com/trades",
    robotsIndex: false,
  },
  services: [
    { slug: "general-contracting", name: "General Contracting", shortDesc: "Full-service contracting for residential and commercial projects.", icon: "🏗️" },
    { slug: "kitchen-remodeling", name: "Kitchen Remodeling", shortDesc: "Complete kitchen renovations from design to final install.", icon: "🍳" },
    { slug: "bathroom-remodeling", name: "Bathroom Remodeling", shortDesc: "Full bath renovations, tile work, fixtures, and more.", icon: "🚿" },
    { slug: "basement-finishing", name: "Basement Finishing", shortDesc: "Turn your basement into livable, functional space.", icon: "🏠" },
    { slug: "additions", name: "Home Additions", shortDesc: "Room additions, garage conversions, and square footage expansions.", icon: "📐" },
    { slug: "roofing", name: "Roofing", shortDesc: "Roof replacement, repair, and inspection services.", icon: "🏚️" },
    { slug: "siding", name: "Siding", shortDesc: "Vinyl, fiber cement, and wood siding installation and repair.", icon: "🪵" },
    { slug: "windows-doors", name: "Windows & Doors", shortDesc: "Energy-efficient window and door replacement and installation.", icon: "🪟" },
    { slug: "decks-patios", name: "Decks & Patios", shortDesc: "Custom deck and patio design and construction.", icon: "🌿" },
    { slug: "drywall", name: "Drywall & Plastering", shortDesc: "Drywall installation, finishing, and plaster repair.", icon: "🔨" },
    { slug: "painting", name: "Interior & Exterior Painting", shortDesc: "Professional painting for homes and commercial spaces.", icon: "🎨" },
  ],
  serviceAreas: [
    { name: "Cleveland", county: "Cuyahoga", highlight: true },
    { name: "Parma", county: "Cuyahoga", highlight: true },
    { name: "Lakewood", county: "Cuyahoga" },
    { name: "Strongsville", county: "Cuyahoga" },
    { name: "Brooklyn", county: "Cuyahoga" },
    { name: "Mentor", county: "Lake", highlight: true },
    { name: "Willoughby", county: "Lake" },
    { name: "Euclid", county: "Cuyahoga" },
    { name: "Solon", county: "Cuyahoga" },
    { name: "Westlake", county: "Cuyahoga" },
    { name: "North Olmsted", county: "Cuyahoga" },
  ],
};

// ─── CRM Data Types ────────────────────────────────────────────────────────────

export interface TradeClient {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  status: "lead" | "active" | "in-progress" | "completed" | "follow-up" | "lost";
  lastContact: string;
  birthday?: string;
  notes: string;
  projectValue: number;
  source: "referral" | "google" | "facebook" | "nextdoor" | "website" | "repeat" | "other";
  tags: string[];
  satisfaction?: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
}

export interface ProjectUpdate {
  id: string;
  date: string;
  title: string;
  body: string;
  milestone: boolean;
  visibleToClient: boolean;
}

export interface TradeProject {
  id: string;
  clientId: string;
  clientName: string;
  name: string;
  service: string;
  status: "quoted" | "scheduled" | "in-progress" | "on-hold" | "completed" | "cancelled";
  startDate: string;
  endDate?: string;
  estimatedValue: number;
  actualValue?: number;
  depositPaid: boolean;
  balanceDue: number;
  updates: ProjectUpdate[];
  publicToken: string; // shared with customer to view updates
  internalNotes: string;
  crew?: string;
  permitRequired: boolean;
  permitNumber?: string;
  createdAt: string;
}

// ─── Sample Projects (for demo purposes) ──────────────────────────────────────

export const SAMPLE_PROJECTS: TradeProject[] = [
  {
    id: "proj-1",
    clientId: "client-1",
    clientName: "Tom & Sarah Kowalski",
    name: "Kitchen Remodel — Full Gut",
    service: "Kitchen Remodeling",
    status: "in-progress",
    startDate: "2026-05-20",
    endDate: "2026-06-30",
    estimatedValue: 28500,
    depositPaid: true,
    balanceDue: 14250,
    publicToken: "tok_kowalski_kitchen_2026",
    internalNotes: "Client wants white shaker cabinets. Confirm appliance delivery date.",
    crew: "Mike & Danny",
    permitRequired: true,
    permitNumber: "CLV-2026-4421",
    updates: [
      { id: "upd-1", date: "2026-05-20", title: "Demo Day Complete", body: "Removed all existing cabinets, flooring, and drywall. Space is clean and ready for rough-in work. No surprises behind the walls — studs are solid.", milestone: true, visibleToClient: true },
      { id: "upd-2", date: "2026-05-27", title: "Electrical & Plumbing Rough-In", body: "New electrical circuits run for under-cabinet lighting and dedicated appliance circuits. Plumber relocated sink drain. Passed rough-in inspection.", milestone: true, visibleToClient: true },
      { id: "upd-3", date: "2026-06-02", title: "Drywall & Backer Board", body: "New drywall hung and taped. Cement backer board installed for backsplash area. Primer coat applied.", milestone: false, visibleToClient: true },
    ],
    createdAt: "2026-05-10T09:00:00Z",
  },
  {
    id: "proj-2",
    clientId: "client-2",
    clientName: "Mark Russo",
    name: "Master Bath Renovation",
    service: "Bathroom Remodeling",
    status: "scheduled",
    startDate: "2026-06-15",
    estimatedValue: 12800,
    depositPaid: true,
    balanceDue: 6400,
    publicToken: "tok_russo_bath_2026",
    internalNotes: "Confirm tile order arrives by June 12.",
    crew: "Mike",
    permitRequired: false,
    updates: [],
    createdAt: "2026-05-28T10:00:00Z",
  },
  {
    id: "proj-3",
    clientId: "client-3",
    clientName: "Linda Chen",
    name: "Basement Finishing",
    service: "Basement Finishing",
    status: "quoted",
    startDate: "2026-07-01",
    estimatedValue: 22000,
    depositPaid: false,
    balanceDue: 22000,
    publicToken: "tok_chen_basement_2026",
    internalNotes: "Quote sent 6/1. Follow up 6/8.",
    permitRequired: true,
    updates: [],
    createdAt: "2026-06-01T14:00:00Z",
  },
];
