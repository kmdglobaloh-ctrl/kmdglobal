export const COMPANY_NAME = "ProHandy Services";
export const TAGLINE = "Reliable Handyman Services You Can Trust";
export const PHONE = "(440) 555-1234";
export const PHONE_HREF = "tel:+14405551234";
export const EMAIL = "hello@prohandyservices.com";
export const ADDRESS = "Chagrin Falls, OH 44022";
export const YEARS_IN_BUSINESS = 15;
export const GOOGLE_RATING = 4.9;
export const REVIEW_COUNT = 187;

export interface Service {
  slug: string;
  name: string;
  emoji: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  startingPrice?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "general-repairs",
    name: "General Repairs & Maintenance",
    emoji: "🔧",
    shortDesc:
      "From sticky doors to squeaky floors, we handle all those nagging home repairs quickly and professionally.",
    longDesc:
      "Your home is your biggest investment. Our general repair and maintenance services keep it in top shape year-round. No job is too small — we show up on time, fix it right, and clean up when we're done.",
    features: [
      "Door & lock adjustments",
      "Weatherstripping & caulking",
      "Gutter cleaning & minor repairs",
      "Attic & crawlspace inspections",
      "Seasonal maintenance checklists",
      "Squeaky floor repairs",
    ],
    startingPrice: "$85",
  },
  {
    slug: "painting-drywall",
    name: "Painting & Drywall",
    emoji: "🖌️",
    shortDesc:
      "Interior and exterior painting, drywall patching, and texture matching for a flawless finish.",
    longDesc:
      "Whether you need a single room refreshed or a full exterior repaint, our team delivers clean, crisp results. We properly prep every surface, use premium paints, and protect your home throughout the job.",
    features: [
      "Interior & exterior painting",
      "Drywall hole patching",
      "Texture matching",
      "Trim & baseboard painting",
      "Popcorn ceiling removal",
      "Paint color consulting",
    ],
    startingPrice: "$150",
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    emoji: "🪑",
    shortDesc:
      "IKEA, Wayfair, Amazon — we assemble any flat-pack furniture quickly and correctly, the first time.",
    longDesc:
      "Flat-pack furniture instructions shouldn't take your entire weekend. Our team has assembled thousands of pieces and can handle anything from a single bed frame to a full home office setup.",
    features: [
      "IKEA, Wayfair & Amazon assembly",
      "Bed frames & bedroom sets",
      "Desks, shelves & bookcases",
      "Patio & outdoor furniture",
      "Exercise equipment",
      "Same-day service available",
    ],
    startingPrice: "$65",
  },
  {
    slug: "door-window-repair",
    name: "Door & Window Repair",
    emoji: "🚪",
    shortDesc:
      "Sticking doors, broken locks, drafty windows — we repair, replace, and weatherize all entry points.",
    longDesc:
      "A properly functioning door or window improves your home's security, energy efficiency, and curb appeal. We repair what can be fixed and replace what can't, ensuring a perfect fit and smooth operation.",
    features: [
      "Door installation & adjustment",
      "Lock & deadbolt replacement",
      "Window seal & glazing repair",
      "Screen replacement",
      "Storm door installation",
      "Sliding door track repair",
    ],
    startingPrice: "$95",
  },
  {
    slug: "deck-fence-repair",
    name: "Deck & Fence Repair",
    emoji: "🏡",
    shortDesc:
      "Rotting boards, loose rails, leaning fences — we restore your outdoor spaces safely and beautifully.",
    longDesc:
      "Ohio winters are hard on decks and fences. We assess the damage, replace compromised boards and posts, and seal or stain the entire structure to protect it for years to come.",
    features: [
      "Deck board replacement",
      "Railing repair & replacement",
      "Post & footer repair",
      "Deck staining & sealing",
      "Fence board replacement",
      "Gate installation & adjustment",
    ],
    startingPrice: "$125",
  },
  {
    slug: "tv-mounting-shelving",
    name: "TV Mounting & Shelving",
    emoji: "📺",
    shortDesc:
      "Clean wall-mount installs, floating shelves, and cord concealment for a professional finished look.",
    longDesc:
      "We find studs, choose the right hardware, and mount your TV at the perfect height and angle. We also install floating shelves, garage shelving, and closet organizers — all level and properly anchored.",
    features: [
      "TV wall mounting (any size)",
      "Cord concealment & management",
      "Floating shelf installation",
      "Garage shelving systems",
      "Closet organizer installation",
      "Picture & mirror hanging",
    ],
    startingPrice: "$75",
  },
  {
    slug: "minor-plumbing-electrical",
    name: "Minor Plumbing & Electrical",
    emoji: "⚡",
    shortDesc:
      "Leaky faucets, running toilets, outlet replacements — small fixes before they become big problems.",
    longDesc:
      "Many plumbing and electrical issues don't require a licensed specialist — they just need someone who knows what they're doing. We handle the common residential fixes quickly and safely. For major work, we recommend a licensed contractor.",
    features: [
      "Faucet & fixture replacement",
      "Toilet repair & replacement",
      "P-trap & drain cleaning",
      "Outlet & switch replacement",
      "Light fixture installation",
      "Ceiling fan installation",
    ],
    startingPrice: "$90",
  },
  {
    slug: "junk-removal",
    name: "Junk Removal & Hauling",
    emoji: "🚛",
    shortDesc:
      "Basement, garage, attic cleanouts — we remove, haul, and dispose of unwanted items responsibly.",
    longDesc:
      "Reclaim your space. We remove old furniture, appliances, yard waste, construction debris, and general clutter. We sort what can be donated, recycled, or disposed of and handle everything from pickup to drop-off.",
    features: [
      "Full basement & garage cleanouts",
      "Appliance & furniture removal",
      "Yard waste & brush hauling",
      "Construction debris removal",
      "Estate cleanouts",
      "Same-day availability",
    ],
    startingPrice: "$100",
  },
];

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
    name: "Margaret H.",
    location: "Chagrin Falls, OH",
    rating: 5,
    text: "ProHandy fixed our sticky back door, replaced three outlets, and patched a hole in the garage drywall — all in one afternoon. Incredibly efficient and fair pricing. Already booked them for spring touchups.",
    service: "General Repairs",
    date: "March 2025",
  },
  {
    name: "Tom & Lisa R.",
    location: "Solon, OH",
    rating: 5,
    text: "Had our deck completely reboarded and stained before summer. The crew was on time, professional, and the work exceeded our expectations. Our neighbors keep asking who did it.",
    service: "Deck & Fence Repair",
    date: "June 2025",
  },
  {
    name: "Dave K.",
    location: "Aurora, OH",
    rating: 5,
    text: "Needed a 75-inch TV mounted above the fireplace with all cords hidden in the wall. Perfect job — cleaner than I imagined. Highly recommend for any AV mounting work.",
    service: "TV Mounting",
    date: "January 2025",
  },
  {
    name: "Patricia M.",
    location: "Pepper Pike, OH",
    rating: 5,
    text: "We bought a whole house worth of IKEA furniture and ProHandy assembled everything in one long day. Two guys, fast, organized, and nothing was scratched. Worth every penny.",
    service: "Furniture Assembly",
    date: "April 2025",
  },
  {
    name: "Bob & Carol S.",
    location: "Chesterland, OH",
    rating: 5,
    text: "Used them for a full basement cleanout after 25 years of stuff piling up. They were respectful of sentimental items, donated what could be donated, and had everything cleared in half a day.",
    service: "Junk Removal",
    date: "May 2025",
  },
  {
    name: "Jennifer W.",
    location: "Bainbridge, OH",
    rating: 5,
    text: "Repainted our living room, dining room, and hallway over two days. Immaculate prep work, no drips, perfect edge lines. The house looks brand new. Already scheduled the master bedroom.",
    service: "Painting & Drywall",
    date: "February 2025",
  },
];

export interface ServiceArea {
  name: string;
  county: string;
  distance: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Chagrin Falls", county: "Cuyahoga / Geauga", distance: "Home Base" },
  { name: "Aurora", county: "Portage", distance: "8 mi" },
  { name: "Bainbridge Township", county: "Geauga", distance: "5 mi" },
  { name: "Bentleyville", county: "Cuyahoga", distance: "4 mi" },
  { name: "Burton", county: "Geauga", distance: "18 mi" },
  { name: "Chardon", county: "Geauga", distance: "14 mi" },
  { name: "Chesterland", county: "Geauga", distance: "10 mi" },
  { name: "Hunting Valley", county: "Cuyahoga", distance: "7 mi" },
  { name: "Moreland Hills", county: "Cuyahoga", distance: "9 mi" },
  { name: "Novelty", county: "Geauga", distance: "6 mi" },
  { name: "Orange Village", county: "Cuyahoga", distance: "11 mi" },
  { name: "Pepper Pike", county: "Cuyahoga", distance: "13 mi" },
  { name: "Russell Township", county: "Geauga", distance: "7 mi" },
  { name: "Solon", county: "Cuyahoga", distance: "14 mi" },
  { name: "Twinsburg", county: "Summit", distance: "16 mi" },
  { name: "Willoughby Hills", county: "Lake", distance: "20 mi" },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "spring-home-maintenance-checklist",
    title: "Your Complete Spring Home Maintenance Checklist",
    excerpt:
      "Ohio winters are tough on homes. Use this room-by-room checklist to catch small problems before they become expensive repairs.",
    date: "April 10, 2025",
    readTime: "5 min read",
    category: "Maintenance Tips",
    content: `Ohio winters are tough on homes. As temperatures warm up, it's the perfect time to walk through your property and catch anything that needs attention before it turns into a costly repair.

## Exterior Checklist

**Roof & Gutters**
- Clear winter debris from gutters and downspouts
- Check for missing or cracked shingles
- Inspect flashing around chimneys and skylights
- Look for ice dam damage on eaves

**Deck & Fence**
- Check all boards for rot, cracks, or loose fasteners
- Test railings — they should feel solid with no give
- Look for posts sinking or leaning
- Plan for staining/sealing if it's been 2+ years

**Siding & Foundation**
- Walk the perimeter looking for cracks, gaps, or damage
- Caulk any gaps around windows, doors, and utility penetrations
- Clear soil away from the foundation if it's building up

## Interior Checklist

**HVAC**
- Replace furnace filter (do this quarterly)
- Schedule AC tune-up before summer
- Check that all vents are open and unobstructed

**Plumbing**
- Turn on outdoor hose bibs slowly and check for winter pipe damage
- Check under sinks for slow drips
- Test sump pump before rainy season

**Safety Devices**
- Test all smoke and CO detectors
- Replace batteries if needed
- Check fire extinguisher pressure gauge

## When to Call a Pro

Not everything on this list is a DIY project. If you find rotted deck boards, cracked foundation sections, or any electrical concerns, give us a call. ProHandy Services handles all of these — usually same week.`,
  },
  {
    slug: "how-to-fix-a-leaky-faucet",
    title: "How to Fix a Leaky Faucet (And When to Call Us Instead)",
    excerpt:
      "A dripping faucet wastes over 3,000 gallons a year. Here's how to diagnose the problem — and a clear line for when a pro makes more sense.",
    date: "March 3, 2025",
    readTime: "4 min read",
    category: "DIY Guides",
    content: `A dripping faucet might seem minor, but the EPA estimates a single leaky faucet can waste more than 3,000 gallons of water per year. Here's how to diagnose and fix the most common types.

## Step 1: Identify Your Faucet Type

There are four main types:
- **Ball faucets** — single handle that rotates over a rounded ball-shaped cap
- **Cartridge faucets** — single or double handle with a cartridge inside
- **Ceramic disc** — single handle over wide cylindrical body
- **Compression faucets** — older two-handle style that compresses a rubber washer to stop flow

## Step 2: Turn Off the Water

Locate the shutoff valves under the sink (or the main shutoff if there are none) and turn clockwise to close. Turn on the faucet to release pressure and any remaining water.

## Step 3: Disassemble and Inspect

Remove the handle — usually by prying off a decorative cap and unscrewing the screw underneath. Then remove the cartridge or ball assembly. In most cases, you're looking for:

- **Worn O-rings** (most common cause of base leaks)
- **Damaged washers** (compression faucets)
- **Cracked cartridge** (cartridge and ball faucets)

Bring the old part to a hardware store to find an exact replacement.

## Step 4: Reassemble

Replace the worn component, reassemble in reverse order, and slowly turn the water back on. Test for leaks.

## When to Call ProHandy

- The shutoff valve itself is leaking or won't close
- The leak is coming from the supply lines under the sink
- The faucet is very old and the cartridge/parts aren't available
- You've replaced the parts and it still drips

We handle all of these quickly and at transparent pricing. Give us a call.`,
  },
  {
    slug: "tv-mounting-guide",
    title: "TV Mounting: What You Need to Know Before Drilling",
    excerpt:
      "Mounting a TV looks simple but there are wall type, stud location, and weight rating mistakes that cause expensive damage. Read this first.",
    date: "February 14, 2025",
    readTime: "6 min read",
    category: "Home Tips",
    content: `Mounting a TV is one of the most common jobs we do, and one of the most common DIY projects that goes wrong. Here's what to know before you pick up a drill.

## Know Your Wall Type

**Drywall over wood studs** (most common): Find the studs — they're typically 16" on center — and anchor directly into them. Never mount a TV with only drywall anchors.

**Drywall over metal studs**: Common in newer construction and condos. Metal studs can hold a TV but require special toggle bolts and brackets. Standard wood screws will strip out.

**Concrete or brick**: Requires a hammer drill and masonry anchors. Not a beginner project.

**Plaster walls**: Older homes often have plaster over wood lath. Harder to work with, easy to crack. Worth calling a pro.

## Stud Finding

A good stud finder (not the $10 magnetic kind) is worth the investment. Verify stud locations by driving a small finish nail as a test before committing with a larger screw. Studs should be solid and consistent.

## Weight Ratings Matter

Every TV mount has a maximum weight rating. Add a margin — if your TV weighs 60 lbs, don't use a mount rated for 65 lbs. Heavier mounts and tilting/articulating arms put more stress on the wall connection.

## Height and Viewing Angle

A common mistake: mounting too high. Center of the screen should typically be at seated eye level (roughly 42–48" from the floor for most rooms). Above a fireplace looks dramatic but often requires an uncomfortable neck angle — consider a tilting mount if you go this route.

## Cord Concealment

The cleanest installs hide cords in the wall via an in-wall power kit (requires an outlet behind the TV or a nearby outlet extended) or run them through surface-mount raceways painted to match the wall.

## When to Call Us

- Mounting above a fireplace (masonry, angles, heat concerns)
- Metal stud walls
- Large/heavy TVs over 65"
- You want cords hidden inside the wall
- You don't own a stud finder and level

Our TV mounting jobs start at $75 and include stud finding, level mounting, and cord management advice.`,
  },
];

export const GALLERY_ITEMS = [
  { id: 1, category: "Deck & Outdoor", title: "Cedar Deck Reboard & Stain", before: true },
  { id: 2, category: "Painting", title: "Living Room Interior Repaint", before: true },
  { id: 3, category: "TV & Shelving", title: "75\" TV Fireplace Mount + Cord Concealment", before: false },
  { id: 4, category: "Deck & Outdoor", title: "Fence Post & Board Replacement", before: true },
  { id: 5, category: "Drywall", title: "Water Damage Drywall Patch", before: true },
  { id: 6, category: "Assembly", title: "Home Office Build-Out (IKEA)", before: false },
  { id: 7, category: "Painting", title: "Exterior Trim & Shutters", before: true },
  { id: 8, category: "Junk Removal", title: "Full Basement Cleanout", before: true },
  { id: 9, category: "Doors & Windows", title: "Storm Door Installation", before: false },
  { id: 10, category: "TV & Shelving", title: "Floating Shelf Gallery Wall", before: false },
  { id: 11, category: "Deck & Outdoor", title: "Deck Railing Replacement", before: true },
  { id: 12, category: "Painting", title: "Kitchen Cabinet Refresh", before: true },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Deck & Outdoor",
  "Painting",
  "TV & Shelving",
  "Drywall",
  "Assembly",
  "Doors & Windows",
  "Junk Removal",
];
