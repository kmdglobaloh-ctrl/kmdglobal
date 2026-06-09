// ─── Trade Configuration System ───────────────────────────────────────────────
// This is the single file you change to customize the template for a new client.
// Every feature, page, color, and service is driven from this config.

export type TradeType =
  | "general-contractor"
  | "plumbing"
  | "electrical"
  | "roofing"
  | "hvac"
  | "landscaping"
  | "painting"
  | "flooring"
  | "handyman"
  | "pest-control"
  | "custom";

export interface TradeService {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  emergency?: boolean;
}

export interface TradeServiceArea {
  name: string;
  county?: string;
  highlight?: boolean;
  note?: string;
}

export interface TradeFeatureFlags {
  // Public site
  blog: boolean;
  gallery: boolean;
  reviews: boolean;
  serviceAreas: boolean;
  rentalSection: boolean;
  emergencyBanner: boolean;
  projectUpdatesPublic: boolean; // customer-facing project tracker
  previewGate: boolean;

  // Admin
  adminCRM: boolean;
  adminCampaigns: boolean;
  adminNotifications: boolean;
  adminAI: boolean;
  adminLeads: boolean;
  adminProjectTracking: boolean; // NEW: job/project management
  adminReports: boolean;         // NEW: revenue & job reporting
  adminSettings: boolean;        // NEW: feature flag management UI
}

export interface TradeConfig {
  // ── Identity ──
  company: {
    name: string;
    legalName: string;
    tagline: string;
    phone: string;
    phoneHref: string;
    email: string;
    addressStreet: string;
    addressCity: string;
    addressState: string;
    addressZip: string;
    established: number;
    licenseNumber?: string;
  };

  // ── Trade type ──
  trade: {
    type: TradeType;
    singular: string;       // "Plumber" | "Roofer" | "Contractor"
    plural: string;         // "Plumbers" | "Roofers" | "Contractors"
    licenseLabel: string;   // "Licensed & Insured" | "Master Plumber"
    emergencyLabel: string; // "24/7 Emergency Service" | "Storm Response"
    hasEmergency: boolean;
  };

  // ── Branding ──
  brand: {
    primary: string;   // e.g. "#0d1444"
    secondary: string; // e.g. "#cc2222"
    accent: string;    // e.g. "#1a237e"
  };

  // ── Content ──
  services: TradeService[];
  serviceAreas: TradeServiceArea[];

  // ── Feature flags ──
  features: TradeFeatureFlags;

  // ── SEO ──
  seo: {
    baseUrl: string;
    robotsIndex: boolean;
  };
}

// ─── Default feature set per tier ─────────────────────────────────────────────

export const STANDARD_FEATURES: TradeFeatureFlags = {
  blog: true,
  gallery: true,
  reviews: true,
  serviceAreas: true,
  rentalSection: false,
  emergencyBanner: true,
  projectUpdatesPublic: false,
  previewGate: true,
  adminCRM: false,
  adminCampaigns: false,
  adminNotifications: false,
  adminAI: false,
  adminLeads: false,
  adminProjectTracking: false,
  adminReports: false,
  adminSettings: false,
};

export const PROFESSIONAL_FEATURES: TradeFeatureFlags = {
  ...STANDARD_FEATURES,
  previewGate: true,
  projectUpdatesPublic: true,
  adminCRM: true,
  adminCampaigns: true,
  adminNotifications: true,
  adminAI: true,
  adminLeads: true,
  adminProjectTracking: true,
  adminReports: true,
  adminSettings: false,
};

export const PREMIUM_FEATURES: TradeFeatureFlags = {
  ...PROFESSIONAL_FEATURES,
  adminSettings: true,
};

// ─── Trade-type defaults ───────────────────────────────────────────────────────
// When cloning for a new client, pick a tradeDefaults spread and override.

export const TRADE_DEFAULTS: Record<TradeType, Pick<TradeConfig["trade"], "singular" | "plural" | "licenseLabel" | "emergencyLabel" | "hasEmergency">> = {
  "general-contractor": { singular: "Contractor", plural: "Contractors", licenseLabel: "Licensed & Insured", emergencyLabel: "Emergency Response Available", hasEmergency: false },
  "plumbing":           { singular: "Plumber", plural: "Plumbers", licenseLabel: "Licensed Master Plumber", emergencyLabel: "24/7 Emergency Plumbing", hasEmergency: true },
  "electrical":         { singular: "Electrician", plural: "Electricians", licenseLabel: "Licensed Electrician", emergencyLabel: "24/7 Emergency Electrical", hasEmergency: true },
  "roofing":            { singular: "Roofer", plural: "Roofers", licenseLabel: "Licensed & Bonded", emergencyLabel: "Emergency Storm Response", hasEmergency: true },
  "hvac":               { singular: "HVAC Technician", plural: "HVAC Technicians", licenseLabel: "EPA Certified", emergencyLabel: "24/7 Emergency HVAC", hasEmergency: true },
  "landscaping":        { singular: "Landscaper", plural: "Landscapers", licenseLabel: "Licensed & Insured", emergencyLabel: "Storm Cleanup Available", hasEmergency: false },
  "painting":           { singular: "Painter", plural: "Painters", licenseLabel: "Licensed & Insured", emergencyLabel: "Rapid Response Available", hasEmergency: false },
  "flooring":           { singular: "Flooring Specialist", plural: "Flooring Specialists", licenseLabel: "Licensed & Insured", emergencyLabel: "Emergency Water Damage Response", hasEmergency: false },
  "handyman":           { singular: "Handyman", plural: "Handymen", licenseLabel: "Licensed & Insured", emergencyLabel: "Same-Day Service Available", hasEmergency: false },
  "pest-control":       { singular: "Pest Control Specialist", plural: "Pest Control Specialists", licenseLabel: "State Licensed Applicator", emergencyLabel: "Emergency Treatment Available", hasEmergency: false },
  "custom":             { singular: "Specialist", plural: "Specialists", licenseLabel: "Licensed & Insured", emergencyLabel: "Emergency Service Available", hasEmergency: false },
};
