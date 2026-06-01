// ─── Company ────────────────────────────────────────────────────────────────
export const COMPANY = "Alfieri Brothers";
export const COMPANY_FULL = "Alfieri Brothers Contracting and Excavation";
export const TAGLINE = "Cleveland's Trusted Excavation & Contracting Experts Since 1992";
export const PHONE = "216-481-1717";
export const PHONE_HREF = "tel:+12164811717";
export const EMAIL = "sales@alfieribrothers.com";
export const ADDRESS_STREET = "18100 Lanken Avenue";
export const ADDRESS_CITY = "Cleveland";
export const ADDRESS_STATE = "OH";
export const ADDRESS_ZIP = "44119";
export const ADDRESS_FULL = "18100 Lanken Avenue, Cleveland, OH 44119";
export const YEARS_IN_BUSINESS = 33;
export const ESTABLISHED = 1992;
export const SISTER_COMPANY = "Alfieri Management LLC";

// ─── Services ────────────────────────────────────────────────────────────────
export interface Service {
  slug: string;
  name: string;
  shortName: string;
  emoji: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  faqs: { q: string; a: string }[];
  emergency?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "sewer-services",
    name: "Sewer Services",
    shortName: "Sewer",
    emoji: "🔩",
    tagline: "Cleveland's sewer experts — installation, repair & cleaning.",
    shortDesc: "Full-service sewer installation, repair, cleaning, and camera inspection for residential and commercial properties across Northeast Ohio.",
    longDesc: "Cleveland's aging infrastructure means sewer problems are common — and costly if ignored. Alfieri Brothers has been solving sewer issues across Cleveland and surrounding communities for over 30 years. Whether you have a slow drain, a complete line collapse, or need a brand-new sewer lateral installed, our experienced crew handles it all with the right equipment and the right expertise.",
    features: [
      "Sewer line installation & replacement",
      "Sewer repair & spot repairs",
      "Camera inspection & video diagnostics",
      "Hydro-jet cleaning",
      "Sewer lateral connections",
      "Residential & commercial service",
      "Emergency same-day response",
      "NEORSD compliance work",
    ],
    faqs: [
      { q: "How do I know if my sewer line needs repair?", a: "Common signs include slow drains throughout the house, gurgling sounds, foul odors, wet patches in the yard, or sewage backing up into fixtures. A camera inspection gives a definitive answer." },
      { q: "How long does a sewer line replacement take?", a: "Most residential sewer line replacements are completed in one to two days. More complex jobs involving rock or large depths may take longer." },
      { q: "Do you offer emergency sewer service?", a: "Yes. We understand that sewer backups can't wait. Call 216-481-1717 for emergency service." },
    ],
    emergency: true,
  },
  {
    slug: "backflow-prevention",
    name: "Backflow Prevention",
    shortName: "Backflow",
    emoji: "🛡️",
    tagline: "Protect your drinking water with certified backflow services.",
    shortDesc: "Installation, testing, and repair of backflow prevention devices to protect your water supply and meet Cleveland Water and NEORSD compliance requirements.",
    longDesc: "Backflow occurs when contaminated water reverses direction and enters your clean water supply — a serious health hazard. Cleveland Water and NEORSD require certified backflow devices on many commercial and residential properties. Alfieri Brothers installs, tests, and repairs all types of backflow preventers, and we handle the required annual testing paperwork with the municipality so you don't have to.",
    features: [
      "Backflow preventer installation",
      "Annual certification testing",
      "Repair & replacement",
      "Residential & commercial",
      "Cleveland Water compliance",
      "NEORSD compliance documentation",
      "All backflow types: RPZ, PVB, DCVA",
      "Same-day testing available",
    ],
    faqs: [
      { q: "Is backflow testing required by law?", a: "Yes. Cleveland Water and most Northeast Ohio municipalities require annual testing of installed backflow prevention assemblies. Failure to comply can result in water service shutoff." },
      { q: "Who needs a backflow preventer?", a: "Properties with irrigation systems, fire suppression systems, commercial facilities, and any property with a potential cross-connection must have a certified backflow assembly." },
      { q: "How long does backflow testing take?", a: "Standard annual testing typically takes 30–60 minutes. We send compliance reports directly to the municipality." },
    ],
  },
  {
    slug: "basement-waterproofing",
    name: "Basement Waterproofing",
    shortName: "Waterproofing",
    emoji: "💧",
    tagline: "Keep water out — interior & exterior waterproofing solutions.",
    shortDesc: "Interior and exterior basement waterproofing, French drains, sump pump installation and repair for Cleveland-area homes and commercial properties.",
    longDesc: "Cleveland's heavy rainfall, spring snowmelt, and clay-heavy soil create constant pressure on basement walls and floors. Alfieri Brothers offers both interior and exterior waterproofing solutions tailored to your specific situation. We diagnose the root cause — not just the symptom — and install systems that last, backed by our workmanship warranty.",
    features: [
      "Interior waterproofing systems",
      "Exterior excavation & waterproofing",
      "French drain installation",
      "Sump pump installation & repair",
      "Window well installation",
      "Wall crack injection",
      "Vapor barrier installation",
      "Drainage channel systems",
    ],
    faqs: [
      { q: "What's the difference between interior and exterior waterproofing?", a: "Exterior waterproofing stops water at the source by sealing the foundation wall and improving drainage outside. Interior systems collect and redirect water that gets in. Exterior is more comprehensive but more costly; interior is faster and effective for many situations." },
      { q: "How long does basement waterproofing last?", a: "Properly installed systems can last 10–25+ years. We use commercial-grade materials and back our work with a transferable warranty." },
      { q: "Will waterproofing fix my wet basement for good?", a: "Yes, when the source of water intrusion is correctly identified and addressed. We always start with a thorough diagnosis." },
    ],
  },
  {
    slug: "dye-testing",
    name: "Dye Testing",
    shortName: "Dye Testing",
    emoji: "🧪",
    tagline: "Fast, certified dye testing for property sales in Cuyahoga County.",
    shortDesc: "State-required dye testing to verify storm and sanitary sewer separation. Fast turnaround for home sales, POS compliance, and municipal requirements in Cuyahoga County.",
    longDesc: "Dye testing is required by the Northeast Ohio Regional Sewer District (NEORSD) to verify that your home's downspouts, sump pumps, and surface water are not connected to the sanitary sewer system. This test is commonly required during real estate transactions (Point of Sale) throughout Cuyahoga County. Alfieri Brothers performs dye tests quickly and provides the compliance documentation you need to close your sale.",
    features: [
      "NEORSD-compliant dye testing",
      "Point-of-Sale (POS) compliance testing",
      "Fast scheduling — often next day",
      "Detailed written test report",
      "Failure remediation available",
      "Downspout & sump pump disconnection",
      "Permit assistance",
      "Residential & commercial testing",
    ],
    faqs: [
      { q: "What is a dye test?", a: "A dye test introduces colored dye into downspouts, sump pumps, and area drains to determine if water flows into the sanitary sewer. If colored dye appears in the sewer lateral, an illegal connection exists and must be corrected." },
      { q: "When is dye testing required?", a: "Dye testing is required at the Point of Sale (property transfer) throughout most of Cuyahoga County and by many municipalities. It may also be required after certain permit work." },
      { q: "How long does a dye test take?", a: "The test itself typically takes 1–2 hours. We provide the required documentation same day." },
    ],
  },
  {
    slug: "grading",
    name: "Grading",
    shortName: "Grading",
    emoji: "🏔️",
    tagline: "Precision grading for proper drainage and site preparation.",
    shortDesc: "Site grading, lot leveling, drainage correction, and erosion control to protect your property from standing water and foundation damage.",
    longDesc: "Poor grading is one of the leading causes of basement water intrusion and foundation damage. Alfieri Brothers has the heavy equipment and expertise to regrade residential lots, correct drainage problems, and prepare sites for new construction. We evaluate your property's topography and develop a plan that moves water away from structures and toward proper drainage.",
    features: [
      "Residential & commercial lot grading",
      "Drainage correction & re-sloping",
      "Erosion control measures",
      "New construction site preparation",
      "Topsoil placement & seeding",
      "Swale installation",
      "Retention area grading",
      "Permit-ready work",
    ],
    faqs: [
      { q: "How do I know if my property needs regrading?", a: "If water pools near your foundation after rain, your basement takes on water, or you see erosion channels in your yard, improper grading is likely the cause." },
      { q: "Does grading require a permit?", a: "It depends on the scope and municipality. Alfieri Brothers handles permit research and applications as needed." },
      { q: "Will regrading damage my landscaping?", a: "We work carefully to preserve existing landscaping where possible. We can also include topsoil and seeding as part of the project." },
    ],
  },
  {
    slug: "house-demolition",
    name: "House Demolition",
    shortName: "Demolition",
    emoji: "🏚️",
    tagline: "Safe, permitted residential demolition and site clearing.",
    shortDesc: "Full residential demolition, selective interior demo, site clearing, and debris removal. Properly permitted and coordinated with utility disconnects.",
    longDesc: "Whether you need a full tear-down for redevelopment or selective interior demolition for a major renovation, Alfieri Brothers manages the entire process — permits, utility disconnections, demolition, and debris removal. We've demolished dozens of structures across Cleveland and ensure the work is done safely, legally, and efficiently.",
    features: [
      "Full residential demolition",
      "Selective / partial demolition",
      "Interior gut-outs",
      "Site clearing & grubbing",
      "Debris hauling & disposal",
      "Permit acquisition",
      "Utility disconnection coordination",
      "Foundation removal (if required)",
    ],
    faqs: [
      { q: "How long does a house demolition take?", a: "A typical single-family home demolition takes 1–3 days for the teardown, plus additional time for debris hauling and site cleanup." },
      { q: "Do you handle the demolition permit?", a: "Yes. We pull all required demolition permits and coordinate with the city and utility companies for proper shutoff." },
      { q: "What happens to the debris?", a: "All debris is loaded and hauled to an approved disposal facility. We can also sort materials for recycling where applicable." },
    ],
  },
  {
    slug: "new-home-excavation",
    name: "New Home Excavation",
    shortName: "Excavation",
    emoji: "🚜",
    tagline: "Precision excavation for new home construction in Northeast Ohio.",
    shortDesc: "Foundation excavation, utility rough-ins, and site preparation for new residential construction. Coordinated, on-schedule work that keeps your project moving.",
    longDesc: "Starting a new home build in the Cleveland area? Alfieri Brothers provides the critical foundation work that sets the entire project up for success. Our experienced operators handle foundation excavation, footings, utility rough-ins, and all underground work with precision and care. We work closely with builders, GCs, and homeowners to stay on schedule and on budget.",
    features: [
      "Foundation excavation",
      "Basement & crawlspace prep",
      "Footing excavation",
      "Utility rough-in trenching",
      "Storm & sanitary sewer installation",
      "Water & gas service installation",
      "Grade beams & piers",
      "Coordination with GC & inspectors",
    ],
    faqs: [
      { q: "How far in advance should I schedule excavation?", a: "We recommend scheduling 2–4 weeks ahead for new construction excavation, though we can often accommodate tighter timelines. Call early to hold your spot." },
      { q: "Do you coordinate with other trades?", a: "Yes. We work directly with your general contractor, plumber, and other trades to ensure underground work is done in the correct sequence." },
      { q: "What soil conditions do you work in?", a: "We have equipment suited for Cleveland-area clay soils, rock, and challenging subsurface conditions." },
    ],
  },
  {
    slug: "pos-violations",
    name: "POS Violations Corrected",
    shortName: "POS Violations",
    emoji: "📋",
    tagline: "Correct point-of-sale violations fast — so you can close on time.",
    shortDesc: "Expert correction of Point-of-Sale (POS) violations required by Cuyahoga County municipalities. Dye test failures, improper connections, drainage issues — we fix them fast.",
    longDesc: "Point-of-Sale (POS) inspections in Cuyahoga County frequently uncover violations that must be corrected before a property can transfer. Common violations include illegal downspout connections to the sanitary sewer, improper sump pump discharge, and failed dye tests. Alfieri Brothers specializes in correcting these violations quickly so your real estate closing isn't delayed. We know exactly what municipalities require and how to get you compliant fast.",
    features: [
      "Dye test failure remediation",
      "Downspout disconnection & rerouting",
      "Sump pump discharge correction",
      "Illegal sewer connection removal",
      "Municipal inspection coordination",
      "Re-testing after correction",
      "Documentation for closing",
      "Same-week service available",
    ],
    faqs: [
      { q: "What are the most common POS violations in Cleveland?", a: "The most frequent violations involve downspouts or sump pumps connected to the sanitary sewer (illegal under NEORSD rules), which are discovered during mandatory dye testing." },
      { q: "How quickly can violations be corrected?", a: "Many common violations can be corrected within 1–3 days. We understand real estate closing timelines and prioritize accordingly." },
      { q: "Who pays for POS violation corrections — buyer or seller?", a: "Typically the seller is responsible, though this is negotiable in the purchase agreement. We can provide documentation and itemized invoices for your closing attorney." },
    ],
  },
  {
    slug: "snow-removal",
    name: "Snow Removal",
    shortName: "Snow Removal",
    emoji: "❄️",
    tagline: "Reliable commercial and residential snow removal all season.",
    shortDesc: "Commercial and residential snow plowing, salting, and seasonal snow removal contracts for Northeast Ohio properties.",
    longDesc: "Cleveland winters are no joke. Alfieri Brothers provides dependable snow plowing, salting, and snow hauling for commercial properties and residential driveways throughout the Cleveland area. We offer both seasonal contracts and per-event service, and our crews are dispatched as soon as accumulation triggers your service threshold.",
    features: [
      "Commercial snow plowing",
      "Residential driveway plowing",
      "Parking lot clearing",
      "Salting & ice management",
      "Sidewalk clearing",
      "Snow hauling & removal",
      "Seasonal contracts available",
      "Per-event pricing available",
    ],
    faqs: [
      { q: "Do you offer seasonal snow removal contracts?", a: "Yes. Seasonal contracts provide priority service and predictable billing. Contact us before November 1 to secure your spot for the winter season." },
      { q: "When do you dispatch for snow removal?", a: "We typically dispatch at 2 inches of accumulation, though your contract threshold can be customized. Salting can be done at any accumulation or as a precautionary measure." },
      { q: "Do you handle commercial lots?", a: "Yes. We service strip malls, office buildings, industrial facilities, and multi-family properties." },
    ],
  },
  {
    slug: "tree-roots",
    name: "Tree Root Removal",
    shortName: "Tree Roots",
    emoji: "🌳",
    tagline: "Clear tree root intrusions before they destroy your sewer line.",
    shortDesc: "Camera inspection, root cutting, hydro-jetting, and root barrier installation to remove tree roots from sewer lines and prevent recurrence.",
    longDesc: "Tree roots are one of the most common causes of sewer line blockages and damage in Northeast Ohio. Roots enter through cracks and joints, then grow to fill the entire pipe, eventually causing backups or complete line failure. Alfieri Brothers uses camera inspection to diagnose root intrusion precisely, then removes roots via mechanical cutting or hydro-jetting. We also assess whether the pipe has been structurally compromised and repair or replace damaged sections.",
    features: [
      "Camera inspection for root mapping",
      "Mechanical root cutting",
      "Hydro-jet root clearing",
      "Root barrier installation",
      "Pipe repair after root damage",
      "Spot repairs & relining options",
      "Preventive maintenance service",
      "Fast response for blockages",
    ],
    faqs: [
      { q: "Can roots grow back after removal?", a: "Yes, if the crack or joint that allowed entry isn't repaired. We assess and repair the structural issue to prevent recurrence, and root barriers can be added for extra protection." },
      { q: "How do I know if tree roots are causing my slow drain?", a: "Camera inspection is the only definitive way to know. Slow drains, recurring backups, or bubbling toilets are common indicators of root intrusion." },
      { q: "Will you need to dig up my yard?", a: "Not necessarily. Minor root clearing is done through your cleanout access point. Pipe repair may require targeted excavation, but we minimize disturbance." },
    ],
  },
  {
    slug: "water-gas-line-services",
    name: "Water & Gas Line Services",
    shortName: "Water & Gas",
    emoji: "⚙️",
    tagline: "Water main and gas line installation, repair, and replacement.",
    shortDesc: "Water service line installation and replacement, gas line services, meter pit work, and curb stop repair for residential and commercial properties.",
    longDesc: "Aging water and gas service lines are a fact of life in Cleveland's older housing stock. Alfieri Brothers handles everything from water main replacements to gas line installations, working safely and in compliance with utility company and municipal requirements. Our crews are experienced with the city's right-of-way requirements and coordinate all necessary permits and inspections.",
    features: [
      "Water service line replacement",
      "New water service installation",
      "Lead service line replacement",
      "Meter pit installation & repair",
      "Curb stop repair & replacement",
      "Gas service line installation",
      "Gas line repair & testing",
      "Permit & inspection coordination",
    ],
    faqs: [
      { q: "How do I know if my water service line needs replacement?", a: "Low water pressure, discolored water, unexplained increases in your water bill, or wet areas in your yard near the service line are all warning signs. Many Cleveland-area homes still have aging lead or galvanized lines that should be replaced." },
      { q: "What is a lead service line replacement?", a: "The City of Cleveland and USEPA have programs to replace lead water service lines, which can contaminate drinking water. Alfieri Brothers works with the city program to replace these lines efficiently." },
      { q: "Do you coordinate with the gas company?", a: "Yes. We work directly with Dominion Energy and Cleveland Division of Water on all line work, ensuring all permits, inspections, and shutoff/reconnect coordination is handled." },
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Robert K.",
    location: "Euclid, OH",
    rating: 5,
    text: "Alfieri Brothers saved our closing. We had a dye test failure two weeks before we were supposed to sell. They came out the next day, disconnected the downspouts, and had us re-tested and compliant in three days. Incredibly professional and they really understood the urgency.",
    service: "POS Violations / Dye Testing",
    date: "September 2024",
  },
  {
    name: "Carol M.",
    location: "Cleveland Heights, OH",
    rating: 5,
    text: "Our sewer backed up on a Saturday evening. Alfieri was out within two hours, diagnosed a root blockage with their camera, and cleared the line that night. These guys are the real deal — family business with genuine work ethic.",
    service: "Sewer Services",
    date: "March 2024",
  },
  {
    name: "Dan & Sue P.",
    location: "South Euclid, OH",
    rating: 5,
    text: "Had a flooded basement every spring for years. Two other companies gave us expensive quotes that didn't address the real problem. Alfieri diagnosed it as a grading issue, regraded the lot, added a French drain, and installed a new sump pump. First dry spring in 10 years.",
    service: "Basement Waterproofing / Grading",
    date: "June 2024",
  },
  {
    name: "Mike T.",
    location: "Willoughby, OH",
    rating: 5,
    text: "Used them for new home excavation on a spec build. Showed up when scheduled, hit all the depths correctly, coordinated perfectly with my plumber. Second time I've used them and I won't use anyone else.",
    service: "New Home Excavation",
    date: "April 2024",
  },
  {
    name: "Linda F.",
    location: "Mayfield Heights, OH",
    rating: 5,
    text: "The backflow testing and annual paperwork used to be a headache. Alfieri handles everything — they test, submit the forms to the water department, and send me a copy. Set it and forget it. Excellent service.",
    service: "Backflow Prevention",
    date: "January 2025",
  },
  {
    name: "Tom B.",
    location: "Collinwood, Cleveland, OH",
    rating: 5,
    text: "Family-owned and it shows. They treated our property with care, communicated every step, and the price was fair and transparent. The water line replacement was done in a single day. Highly recommend to any neighbor in the area.",
    service: "Water & Gas Line Services",
    date: "November 2024",
  },
];

// ─── Service Areas ────────────────────────────────────────────────────────────
export interface ServiceArea {
  name: string;
  county: string;
  highlight?: boolean;
  note?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Cleveland", county: "Cuyahoga", highlight: true, note: "Home Base" },
  { name: "Euclid", county: "Cuyahoga", note: "Sister company rentals here" },
  { name: "South Euclid", county: "Cuyahoga" },
  { name: "Cleveland Heights", county: "Cuyahoga" },
  { name: "University Heights", county: "Cuyahoga" },
  { name: "Lyndhurst", county: "Cuyahoga" },
  { name: "Mayfield Heights", county: "Cuyahoga" },
  { name: "Richmond Heights", county: "Cuyahoga" },
  { name: "Wickliffe", county: "Lake" },
  { name: "Willoughby", county: "Lake" },
  { name: "Eastlake", county: "Lake" },
  { name: "Mentor", county: "Lake" },
  { name: "East Cleveland", county: "Cuyahoga" },
  { name: "Collinwood", county: "Cuyahoga", note: "Cleveland neighborhood" },
  { name: "Garfield Heights", county: "Cuyahoga" },
  { name: "Maple Heights", county: "Cuyahoga" },
];

// ─── Blog ─────────────────────────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dye-testing-cleveland-homeowners-guide",
    title: "What Is Dye Testing? A Cleveland Homeowner's Complete Guide",
    excerpt: "Dye testing is required during most property sales in Cuyahoga County — but many homeowners don't know what it is until it holds up their closing. Here's everything you need to know.",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "POS & Compliance",
    emoji: "🧪",
    content: `Dye testing is one of those things most Cleveland homeowners have never heard of — until they're trying to sell their house and suddenly it's holding up the closing.

## What Is a Dye Test?

A dye test is a simple but important inspection required by the Northeast Ohio Regional Sewer District (NEORSD) that checks whether your home's stormwater drainage is illegally connected to the sanitary sewer system.

Here's the problem: older Cleveland-area homes were often built with downspouts, sump pumps, and area drains connected directly to the sanitary sewer. This was common practice for decades. But it's now illegal — stormwater overloads the sanitary system, causing basement backups and sewage overflows into Lake Erie.

During a dye test, a technician introduces colored dye into:
- Downspouts and gutters
- Sump pump discharge lines
- Floor drains
- Window well drains

If that colored dye shows up in the sanitary sewer lateral, you have an illegal connection that must be corrected.

## When Is Dye Testing Required?

In Cuyahoga County, dye testing is required:

**At Point of Sale (POS)** — When a property transfers ownership, the seller is typically required to have a dye test performed and provide documentation to the buyer. This is required in Cleveland, Euclid, South Euclid, Cleveland Heights, and most surrounding communities.

**After permit work** — Some municipalities require dye testing after sewer repair or renovation permit work.

**For compliance notices** — NEORSD may require testing based on inspection results or complaints.

## What Happens If You Fail?

A failed dye test means an illegal connection was found. Common failures include:

- Downspouts connected to a sanitary line (very common in homes built before 1980)
- Sump pump discharge going into the sanitary sewer
- Area drains connected to sanitary

The good news: most failures are correctable in 1–3 days. Downspout disconnections and rerouting to daylight or a dry well are the most common fix.

## What Does Dye Testing Cost?

Dye testing in the Cleveland area typically runs $150–$300 for a standard residential property. If violations are found and corrections are needed, that adds cost — but corrections are usually straightforward for a licensed contractor who knows exactly what municipalities require.

## How to Pass Your Dye Test

The best way to prepare is to have a contractor evaluate your property before the dye test. We can often spot likely failures (downspouts going into the foundation wall, old sump discharge lines) before the test and correct them proactively.

If you're selling a Cuyahoga County home and need dye testing or violation corrections, call Alfieri Brothers at 216-481-1717. We do same-week testing and have corrected hundreds of POS violations across the Cleveland area.`,
  },
  {
    slug: "basement-waterproofing-warning-signs",
    title: "5 Warning Signs Your Cleveland Home Needs Basement Waterproofing This Year",
    excerpt: "Cleveland's clay soil and heavy spring rains create ideal conditions for basement water intrusion. These five warning signs mean you shouldn't wait another season.",
    date: "February 8, 2025",
    readTime: "5 min read",
    category: "Basement Waterproofing",
    emoji: "💧",
    content: `Cleveland's combination of heavy rainfall, rapid freeze-thaw cycles, and clay-heavy soil creates relentless pressure on basement walls and floors. If you're seeing any of these five warning signs, waiting another season could mean significant structural damage and much higher repair costs.

## 1. White or Gray Powder on Basement Walls (Efflorescence)

That white, chalky deposit you see on concrete block or poured concrete walls isn't just cosmetic — it's a sign that water is actively moving through your foundation wall.

Efflorescence is the residue left behind when mineral-laden groundwater seeps through concrete and evaporates on the surface. It tells you water is making contact with your foundation regularly. Left unchecked, it can accelerate cracking and spalling of the concrete.

## 2. Horizontal Cracks in Block Foundation Walls

Not all cracks are equal. Vertical cracks in poured concrete walls are often the result of curing shrinkage and may be minor. But horizontal cracks in block walls are serious — they indicate lateral soil pressure is causing the wall to bow inward.

In Cleveland's clay soils, this is more common than you might think. Clay expands dramatically when wet and contracts when dry, creating cyclical pressure that eventually wins. A bowing wall won't fix itself and can become a structural emergency if ignored.

## 3. Musty Smell Even When the Basement Looks Dry

Mold doesn't need standing water to grow — it needs moisture. If your basement smells like a damp cellar even on dry days, you likely have chronic moisture coming through the walls or floor slab.

Many Cleveland homes have no vapor barrier on the floor slab, and groundwater pressure pushes moisture vapor continuously through the concrete. Mold follows. This is also a significant indoor air quality concern for the entire home, since basement air circulates throughout.

## 4. Peeling Paint or Rust Stains on Walls or HVAC Equipment

Rust streaks on your HVAC system, hot water tank, or steel support columns indicate chronic moisture exposure. Peeling paint or bubbling on painted walls is often the result of water vapor pushing outward from behind.

These are signs that your basement has been wet consistently — not just during the last big rainstorm.

## 5. Water Pooling Against Your Foundation After Rain

Walk around your home during or after a heavy rain and watch where the water goes. If it pools against the foundation rather than draining away, that water is finding its way in. Poor grading, settled soil against the foundation, or clogged window wells all feed water directly to your basement walls.

## What to Do Next

If you're seeing any of these signs, the right first step is an honest assessment — not an immediate sales pitch. At Alfieri Brothers, we'll look at your specific situation and tell you exactly what's causing the problem before recommending a solution.

Sometimes the fix is simple: improved grading and better gutter extensions. Other times, an interior drainage system or exterior waterproofing is needed. Either way, you deserve a straight answer.

Call us at 216-481-1717 or request a free assessment online.`,
  },
  {
    slug: "pos-violations-cuyahoga-county",
    title: "Understanding Point-of-Sale Violations in Cuyahoga County Before You Sell",
    excerpt: "POS violations are the #1 surprise that delays real estate closings in the Cleveland area. Here's what they are, which municipalities require inspections, and how to get ahead of them.",
    date: "January 22, 2025",
    readTime: "7 min read",
    category: "POS & Compliance",
    emoji: "📋",
    content: `If you're selling a home in Cuyahoga County, Point-of-Sale (POS) requirements are one of the most important things to understand before you list — because discovering violations after you're under contract can seriously delay or derail your closing.

## What Is a Point-of-Sale Inspection?

Many municipalities in Cuyahoga County require one or more inspections when a property changes hands. These typically include:

**NEORSD Dye Test** — Required in most of Cuyahoga County. Tests whether stormwater drainage (downspouts, sump pumps) is illegally connected to the sanitary sewer. Nearly universal requirement at POS.

**Residential Property Maintenance Inspection** — Some cities (including Cleveland) require a municipal inspection of the property's general condition. This can flag code violations that must be corrected before sale.

**Building Department Review** — Open permits or unpermitted work can surface at POS.

## Which Municipalities Require POS Inspections?

Requirements vary by city. Most Cleveland-area municipalities require at minimum the NEORSD dye test. Many also require municipal property inspections.

Common requirements in our service area:
- **Cleveland**: NEORSD dye test required
- **Euclid**: NEORSD dye test + city inspection
- **South Euclid**: NEORSD dye test required
- **Cleveland Heights**: NEORSD dye test + city inspection
- **Lyndhurst**: NEORSD dye test required
- **Mayfield Heights**: NEORSD dye test required

Always verify current requirements with your municipality — they can change.

## The Most Common Violations We Fix

**Failed dye test (illegal stormwater connections)** — By far the most common. Downspouts or sump pumps connected to the sanitary sewer must be disconnected and rerouted. Usually correctable in 1–2 days.

**Open or unpermitted work** — A prior addition, finished basement, or electrical work done without permits can trigger a violation. Resolution varies — sometimes a retroactive inspection; sometimes demolition and redo.

**Structural and code violations** — Handrails, smoke detectors, GFCI outlets, and similar code items are commonly flagged in municipal inspections.

## How to Get Ahead of POS Requirements

The single best thing you can do is order the dye test and any required municipal inspection before you list. Here's why:

1. You know what you're dealing with before a buyer is involved
2. You have time to correct violations without closing pressure
3. Buyers see a clean inspection — less negotiating leverage for them
4. You control the contractor selection and cost

Alfieri Brothers performs dye tests and POS violation corrections across all Cuyahoga County municipalities. We know exactly what each city requires and how to get you compliant quickly.

Call 216-481-1717 or submit a request online and we'll walk you through what's needed for your specific property and municipality.`,
  },
  {
    slug: "cleveland-sewer-aging-infrastructure",
    title: "How Cleveland's Aging Sewer Lines Can Cost You Thousands — and What to Do About It",
    excerpt: "Most homes in Cleveland's east side were built 60–100 years ago. The sewer lines under them are just as old. Here's how to know if yours is a problem waiting to happen.",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Sewer Services",
    emoji: "🔩",
    content: `If you own an older home on Cleveland's east side — Collinwood, Euclid, South Euclid, Cleveland Heights — there's a good chance the sewer line running from your house to the street is original to the structure. That means it could be 60, 70, or even 100 years old.

## What Cleveland's Sewer Lines Are Made Of

Older homes in the Cleveland area typically have one of three types of sewer laterals:

**Clay tile (orangeburg)** — The most common material in pre-1970 construction. Clay tile is brittle, prone to root intrusion, and often has settled or separated joints after decades of soil movement.

**Cast iron** — Durable but corrodes over time. Scale buildup inside the pipe reduces flow capacity. Common in 1930s–1960s construction.

**Orangeburg pipe** — A post-WWII material made from compressed paper and pitch. It softens and collapses over time. If your home was built in the late 1940s or 1950s, you may have Orangeburg. It almost always needs replacement.

## The Warning Signs

You may have a failing sewer line if you're experiencing:

- Slow drains in multiple fixtures (not just one)
- Gurgling or bubbling in toilets when running water elsewhere
- Sewage odors inside the home
- Recurring clogs that rooter service temporarily fixes but don't last
- Wet or sunken areas in your yard along the path of the sewer line
- Cracks appearing in your foundation (in extreme cases)

## What a Camera Inspection Shows

A sewer camera inspection is the only way to know the true condition of your line. We run a flexible camera through the lateral from your cleanout and stream live video. Common findings include:

- Root intrusion (extremely common with clay tile)
- Offset or separated joints
- Bellies (sags where the pipe has settled and water pools)
- Cracks or breaks in the pipe
- Corrosion and buildup in cast iron lines

For most older Cleveland-area homes, we recommend a camera inspection every 5–7 years as preventive maintenance — or immediately if you're having any symptoms.

## Repair vs. Replace

Not every problem requires full replacement. Options include:

**Spot repair** — If damage is isolated to one section, we can excavate just that area and replace the damaged segment.

**Pipe relining** — In some cases, a structural liner can be installed inside the existing pipe without full excavation.

**Full replacement** — When a line is extensively damaged, collapsed, or made of Orangeburg, full replacement is the right call.

A camera inspection tells us exactly which option is appropriate for your situation.

## The Cost of Waiting

The biggest mistake homeowners make is temporary fixes. Rooter service clears the immediate clog but does nothing for a cracked, offset, or root-infiltrated line. You'll be calling again in 6 months — or dealing with a full backup. Each cycle costs money and risk.

A proactive camera inspection and repair now is almost always significantly cheaper than emergency replacement after a complete failure.

Call Alfieri Brothers at 216-481-1717 to schedule a sewer camera inspection. We serve the entire east side of Cleveland and surrounding communities.`,
  },
];
