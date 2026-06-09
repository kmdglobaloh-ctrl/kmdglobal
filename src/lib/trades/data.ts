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

// ─── Sample Clients (for demo purposes) ───────────────────────────────────────

export const SAMPLE_CLIENTS: TradeClient[] = [
  {
    id: "client-1",
    name: "Tom & Sarah Kowalski",
    phone: "(216) 555-0210",
    email: "tkowalski@email.com",
    address: "4812 Lakeview Dr, Cleveland, OH 44102",
    service: "Kitchen Remodeling",
    status: "in-progress",
    lastContact: "2026-06-02",
    birthday: "1978-03-14",
    notes: "Very detail-oriented. White shaker cabinets confirmed. Wants weekly updates.",
    projectValue: 28500,
    source: "referral",
    tags: ["kitchen", "priority"],
    satisfaction: undefined,
    createdAt: "2026-05-10T09:00:00Z",
  },
  {
    id: "client-2",
    name: "Mark Russo",
    phone: "(216) 555-0334",
    email: "mrusso@gmail.com",
    address: "221 Birchwood Ave, Parma, OH 44134",
    service: "Bathroom Remodeling",
    status: "active",
    lastContact: "2026-05-28",
    birthday: "1985-07-22",
    notes: "Confirmed tile delivery by June 12. Has a second bath he mentioned for later.",
    projectValue: 12800,
    source: "google",
    tags: ["bath"],
    satisfaction: undefined,
    createdAt: "2026-05-28T10:00:00Z",
  },
  {
    id: "client-3",
    name: "Linda Chen",
    phone: "(440) 555-0077",
    email: "lchen@outlook.com",
    address: "905 Elm Street, Strongsville, OH 44136",
    service: "Basement Finishing",
    status: "follow-up",
    lastContact: "2026-06-01",
    birthday: "1990-11-05",
    notes: "Quote sent 6/1 for $22k. Mentioned she's getting 2 other bids. Follow up by 6/8.",
    projectValue: 22000,
    source: "website",
    tags: ["basement", "hot-lead"],
    satisfaction: undefined,
    createdAt: "2026-06-01T14:00:00Z",
  },
  {
    id: "client-4",
    name: "Dave & Pam Horton",
    phone: "(216) 555-0458",
    email: "dhorton@gmail.com",
    address: "1103 Maple Ridge Rd, Lakewood, OH 44107",
    service: "General Contracting",
    status: "completed",
    lastContact: "2026-05-15",
    birthday: "1972-09-30",
    notes: "Full garage conversion to home office. Came in $200 under budget. Extremely happy.",
    projectValue: 18900,
    source: "referral",
    tags: ["garage", "repeat-potential"],
    satisfaction: 5,
    createdAt: "2026-03-12T08:00:00Z",
  },
  {
    id: "client-5",
    name: "Brenda Simmons",
    phone: "(440) 555-0593",
    email: "bsimmons@yahoo.com",
    address: "673 Cedar Lane, Mentor, OH 44060",
    service: "Roofing",
    status: "completed",
    lastContact: "2026-04-28",
    birthday: "1968-01-18",
    notes: "Full roof replacement after hail damage. Insurance paid most of it. Happy with result.",
    projectValue: 14200,
    source: "nextdoor",
    tags: ["roofing", "insurance"],
    satisfaction: 4,
    createdAt: "2026-04-01T11:00:00Z",
  },
  {
    id: "client-6",
    name: "James & Keisha Williams",
    phone: "(216) 555-0712",
    email: "kwilliams@gmail.com",
    address: "2290 Forest Ave, Cleveland Heights, OH 44118",
    service: "Additions",
    status: "lead",
    lastContact: "2026-06-05",
    birthday: "",
    notes: "Wants a sunroom addition off the back of the house. 200 sq ft approx. Budget TBD.",
    projectValue: 35000,
    source: "facebook",
    tags: ["addition", "large-project"],
    satisfaction: undefined,
    createdAt: "2026-06-05T15:00:00Z",
  },
  {
    id: "client-7",
    name: "Rick Palumbo",
    phone: "(440) 555-0831",
    email: "rpalumbo@icloud.com",
    address: "518 Oak Hill Dr, Willoughby, OH 44094",
    service: "Decks & Patios",
    status: "lead",
    lastContact: "2026-06-04",
    birthday: "1980-05-12",
    notes: "Wants a composite deck 16x20 off the back slider. Seen some quotes around $18k elsewhere.",
    projectValue: 16500,
    source: "google",
    tags: ["deck"],
    satisfaction: undefined,
    createdAt: "2026-06-04T10:30:00Z",
  },
  {
    id: "client-8",
    name: "Nancy & Bob Gallagher",
    phone: "(216) 555-0924",
    email: "ngallagher@hotmail.com",
    address: "7741 Ridgewood Blvd, Parma, OH 44129",
    service: "Windows & Doors",
    status: "completed",
    lastContact: "2026-03-22",
    birthday: "1955-08-03",
    notes: "Replaced 12 windows throughout the house. Very neat couple, left great review.",
    projectValue: 9800,
    source: "repeat",
    tags: ["windows", "long-term-customer"],
    satisfaction: 5,
    createdAt: "2026-02-15T09:00:00Z",
  },
  {
    id: "client-9",
    name: "Carlos Mendez",
    phone: "(216) 555-1045",
    email: "cmendez@gmail.com",
    address: "342 Industrial Pkwy, Euclid, OH 44132",
    service: "Siding",
    status: "active",
    lastContact: "2026-06-03",
    birthday: "",
    notes: "Commercial property — full siding replacement. Fiber cement on a 3-unit building.",
    projectValue: 31000,
    source: "other",
    tags: ["commercial", "siding"],
    satisfaction: undefined,
    createdAt: "2026-05-20T13:00:00Z",
  },
  {
    id: "client-10",
    name: "Gina Petroski",
    phone: "(440) 555-1167",
    email: "gpetroski@outlook.com",
    address: "88 Spruce Court, Solon, OH 44139",
    service: "Painting",
    status: "completed",
    lastContact: "2026-04-10",
    birthday: "1975-12-20",
    notes: "Interior paint — whole house, 4 bed/2 bath. Had some drywall repair included. Happy.",
    projectValue: 6200,
    source: "google",
    tags: ["painting"],
    satisfaction: 4,
    createdAt: "2026-03-25T10:00:00Z",
  },
  {
    id: "client-11",
    name: "Tony DeMaio",
    phone: "(216) 555-1288",
    email: "tdemaio@gmail.com",
    address: "1560 Larchmont Ave, Lakewood, OH 44107",
    service: "Drywall & Plastering",
    status: "lost",
    lastContact: "2026-05-18",
    birthday: "",
    notes: "Went with a cheaper competitor. Quote was $4,800 — they went with $3,200 guy. No hard feelings.",
    projectValue: 4800,
    source: "website",
    tags: [],
    satisfaction: undefined,
    createdAt: "2026-05-15T11:00:00Z",
  },
  {
    id: "client-12",
    name: "Diane Wojcik",
    phone: "(440) 555-1399",
    email: "dwojcik@yahoo.com",
    address: "2045 Pinewood Dr, North Olmsted, OH 44070",
    service: "Kitchen Remodeling",
    status: "follow-up",
    lastContact: "2026-05-30",
    birthday: "1963-04-07",
    notes: "Interested in a kitchen update — keeping cabinets but wants new counters, backsplash, and appliances. Priced around $11k.",
    projectValue: 11000,
    source: "referral",
    tags: ["kitchen", "partial-remodel"],
    satisfaction: undefined,
    createdAt: "2026-05-30T14:00:00Z",
  },
];

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
