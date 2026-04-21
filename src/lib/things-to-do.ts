export type Category =
  | "Restaurants"
  | "Adventures"
  | "Tours"
  | "Beaches"
  | "Nature"
  | "Shopping";

export interface Place {
  name: string;
  category: Category;
  location: string;
  price: "$" | "$$" | "$$$";
  description: string;
  tags: string[];
  mapsUrl?: string;
  websiteUrl?: string;
}

export const CATEGORIES: { id: Category | "All"; label: string; emoji: string }[] = [
  { id: "All", label: "All", emoji: "🗺️" },
  { id: "Restaurants", label: "Restaurants", emoji: "🍽️" },
  { id: "Adventures", label: "Adventures", emoji: "🏄" },
  { id: "Tours", label: "Tours", emoji: "🌿" },
  { id: "Beaches", label: "Beaches", emoji: "🏖️" },
  { id: "Nature", label: "Nature", emoji: "🦥" },
  { id: "Shopping", label: "Shopping", emoji: "🛍️" },
];

export const PLACES: Place[] = [
  // Restaurants
  {
    name: "Bread & Chocolate",
    category: "Restaurants",
    location: "Puerto Viejo",
    price: "$",
    description:
      "A beloved breakfast and brunch spot in the heart of Puerto Viejo. Known for fresh-baked bread, thick French toast, and strong local coffee. Expect a line on weekends — worth every minute of the wait.",
    tags: ["breakfast", "vegetarian-friendly", "coffee", "casual"],
    mapsUrl: "https://maps.google.com/?q=Bread+and+Chocolate+Puerto+Viejo",
  },
  {
    name: "Soda Tamara",
    category: "Restaurants",
    location: "Puerto Viejo",
    price: "$",
    description:
      "The definitive local Caribbean lunch spot. Tamara serves rice and beans cooked in coconut milk, fresh fish, and pinto in the classic Caribbean style. A true taste of the region — cheap, filling, and authentic.",
    tags: ["caribbean food", "local", "casado", "seafood"],
    mapsUrl: "https://maps.google.com/?q=Soda+Tamara+Puerto+Viejo",
  },
  {
    name: "Stashu's Con Fusion",
    category: "Restaurants",
    location: "Puerto Viejo",
    price: "$$",
    description:
      "Creative fusion cooking in a relaxed open-air setting. The menu mixes Caribbean, Asian, and Mediterranean influences with local ingredients. The fresh fish dishes and daily specials are consistently outstanding.",
    tags: ["fusion", "dinner", "creative", "open-air"],
    mapsUrl: "https://maps.google.com/?q=Stashu+Con+Fusion+Puerto+Viejo",
  },
  {
    name: "Miss Edith's",
    category: "Restaurants",
    location: "Cahuita",
    price: "$",
    description:
      "An institution in Cahuita for over 30 years. Miss Edith's serves home-cooked Caribbean food — rice and beans, rondon stew, fresh lobster when in season. The portions are generous and the atmosphere feels like eating at someone's home.",
    tags: ["caribbean food", "local legend", "rondon", "lobster"],
    mapsUrl: "https://maps.google.com/?q=Miss+Edith+Cahuita",
  },
  {
    name: "La Pecora Nera",
    category: "Restaurants",
    location: "Puerto Viejo",
    price: "$$$",
    description:
      "Surprising Italian fine dining in the jungle. Fresh-made pasta, wood-fired dishes, and an extensive wine list. Run by an Italian family who settled on the Caribbean coast and never left. Best dinner option in Puerto Viejo for a special night.",
    tags: ["italian", "fine dining", "pasta", "romantic"],
    mapsUrl: "https://maps.google.com/?q=La+Pecora+Nera+Puerto+Viejo",
  },
  {
    name: "Selvin's Restaurant",
    category: "Restaurants",
    location: "Manzanillo",
    price: "$$",
    description:
      "At the far end of the road in Manzanillo, Selvin Brown has been serving fresh Caribbean seafood for decades. The lobster and whole snapper are exceptional. Getting here feels like discovering a secret — the food rewards the effort.",
    tags: ["seafood", "lobster", "local institution", "end-of-road"],
    mapsUrl: "https://maps.google.com/?q=Selvin+Restaurant+Manzanillo+Costa+Rica",
  },

  // Adventures
  {
    name: "Surfing at Salsa Brava",
    category: "Adventures",
    location: "Puerto Viejo",
    price: "$",
    description:
      "One of the heaviest reef breaks in Central America. Salsa Brava breaks over a shallow coral reef and is strictly for experienced surfers. But even if you're not paddling out, watching locals ride it is a spectacle. Beginner breaks nearby at Playa Cocles.",
    tags: ["surfing", "advanced", "reef break", "spectator-friendly"],
    mapsUrl: "https://maps.google.com/?q=Salsa+Brava+Puerto+Viejo",
  },
  {
    name: "Surfing at Playa Cocles",
    category: "Adventures",
    location: "Cocles",
    price: "$",
    description:
      "The best beginner and intermediate surf spot on the Caribbean coast. Long, consistent beach break waves with a forgiving bottom. Rentals available on the beach, and a few surf schools offer lessons for complete beginners.",
    tags: ["surfing", "beginner-friendly", "lessons", "rentals"],
    mapsUrl: "https://maps.google.com/?q=Playa+Cocles",
  },
  {
    name: "Snorkeling at Cahuita National Park",
    category: "Adventures",
    location: "Cahuita",
    price: "$",
    description:
      "The coral reef at Cahuita is the largest in Costa Rica. Snorkel directly off Playa Blanca inside the national park — no boat needed. Parrotfish, angelfish, sea turtles, and nurse sharks are common sightings on a clear day.",
    tags: ["snorkeling", "reef", "national park", "sea turtles"],
    mapsUrl: "https://maps.google.com/?q=Cahuita+National+Park",
  },
  {
    name: "Kayak & Dolphin Watch, Gandoca-Manzanillo",
    category: "Adventures",
    location: "Manzanillo",
    price: "$$",
    description:
      "Paddle through the protected Gandoca-Manzanillo Wildlife Refuge — mangrove channels, hidden beaches, and some of the best dolphin watching on Costa Rica's Caribbean coast. Spinner and bottlenose dolphins frequently follow kayaks through the bay.",
    tags: ["kayaking", "dolphins", "wildlife refuge", "mangroves"],
    mapsUrl: "https://maps.google.com/?q=Manzanillo+Wildlife+Refuge",
  },
  {
    name: "Zip-lining in the Rainforest",
    category: "Adventures",
    location: "Puerto Viejo area",
    price: "$$",
    description:
      "Multiple operators run zip-line tours through the Caribbean rainforest canopy near Puerto Viejo. Platforms are set high in the forest with views over the jungle to the sea. A good option for families and anyone who wants an adrenaline hit with a safety net.",
    tags: ["zip-lining", "canopy", "family-friendly", "adrenaline"],
    mapsUrl: "https://maps.google.com/?q=Terraventuras+Puerto+Viejo",
  },

  // Tours
  {
    name: "Tortuguero Canal Boat Tour",
    category: "Tours",
    location: "Tortuguero",
    price: "$$",
    description:
      "Glide through Tortuguero's network of jungle canals by boat — the only way to get around this roadless village. Guides spot caimans, river otters, three species of monkeys, and dozens of bird species. During nesting season (July–October), night turtle tours run on the beach.",
    tags: ["boat tour", "wildlife", "turtles", "canals", "guided"],
    mapsUrl: "https://maps.google.com/?q=Tortuguero+National+Park",
  },
  {
    name: "Chocolate Farm Tour",
    category: "Tours",
    location: "Puerto Viejo area",
    price: "$",
    description:
      "See how cacao goes from tree to bar on a small Caribbean farm. Tours include walking the plantation, cracking cacao pods, fermenting and roasting beans, and grinding your own chocolate. Educational, delicious, and a genuine taste of the local agricultural tradition.",
    tags: ["chocolate", "farm tour", "educational", "family-friendly"],
    mapsUrl: "https://maps.google.com/?q=Cariblue+Chocolate+Tour",
  },
  {
    name: "Cahuita National Park Guided Walk",
    category: "Tours",
    location: "Cahuita",
    price: "$",
    description:
      "Walk the jungle trail through Cahuita National Park with a local naturalist guide. The 8km path follows the coastline through primary rainforest — sloths, howler monkeys, coatis, and countless bird species along the way. The park entrance at Puerto Vargas has no entry fee (donation appreciated).",
    tags: ["guided walk", "national park", "wildlife", "sloths"],
    mapsUrl: "https://maps.google.com/?q=Cahuita+National+Park+Entrance",
  },
  {
    name: "Jaguar Rescue Center",
    category: "Tours",
    location: "Puerto Viejo",
    price: "$",
    description:
      "A nonprofit wildlife rehabilitation center that rescues and releases injured and orphaned animals. Guided tours show you sloths, monkeys, raptors, snakes, and whatever else has come in for care. One of the best wildlife experiences in Costa Rica — the connection with real rescued animals is hard to beat.",
    tags: ["wildlife rescue", "sloths", "monkeys", "guided tour", "nonprofit"],
    websiteUrl: "https://www.jaguarrescuecenter.com",
    mapsUrl: "https://maps.google.com/?q=Jaguar+Rescue+Center+Puerto+Viejo",
  },
  {
    name: "Night Wildlife Tour",
    category: "Tours",
    location: "Puerto Viejo area",
    price: "$$",
    description:
      "The Caribbean rainforest at night is a different world. Local guides lead small groups through the jungle by headlamp to spot sleeping iguanas, poison dart frogs, tarantulas, kinkajous, and the occasional ocelot. One of the most memorable experiences for first-time visitors to the region.",
    tags: ["night tour", "wildlife", "guided", "unique"],
    mapsUrl: "https://maps.google.com/?q=Terraventuras+Puerto+Viejo",
  },

  // Beaches
  {
    name: "Playa Cocles",
    category: "Beaches",
    location: "Cocles",
    price: "$",
    description:
      "The longest and most popular stretch of beach on the Caribbean coast south of Puerto Viejo. Wide, palm-lined, with consistent surf and a handful of beach bars and restaurants within walking distance. Good for surfing, swimming, and watching sunrises.",
    tags: ["swimming", "surfing", "palm trees", "beach bars"],
    mapsUrl: "https://maps.google.com/?q=Playa+Cocles",
  },
  {
    name: "Playa Chiquita",
    category: "Beaches",
    location: "Playa Chiquita",
    price: "$",
    description:
      "A quieter, more secluded stretch of coast between Cocles and Punta Uva. Fewer tourists, calmer waters in spots protected by rocks, and a more local feel. Excellent for snorkeling along the rocky outcrops and for a peaceful afternoon away from the main strips.",
    tags: ["secluded", "snorkeling", "quiet", "local vibe"],
    mapsUrl: "https://maps.google.com/?q=Playa+Chiquita+Costa+Rica",
  },
  {
    name: "Punta Uva",
    category: "Beaches",
    location: "Punta Uva",
    price: "$",
    description:
      "Consistently ranked among the most beautiful beaches in Costa Rica — a long, curved bay of calm water, white sand, and dense jungle backing right up to the shore. The water is usually calmer here than at Cocles, making it better for swimming. Worth the extra few kilometers south of Puerto Viejo.",
    tags: ["swimming", "scenic", "calm water", "jungle"],
    mapsUrl: "https://maps.google.com/?q=Punta+Uva+Costa+Rica",
  },
  {
    name: "Playa Manzanillo",
    category: "Beaches",
    location: "Manzanillo",
    price: "$",
    description:
      "At the end of the road, inside the Gandoca-Manzanillo Wildlife Refuge. Protected from heavy development, the beach feels genuinely wild. Snorkeling off the point is excellent, and the village of Manzanillo itself is worth exploring for lunch and the local Caribbean atmosphere.",
    tags: ["wildlife refuge", "snorkeling", "remote", "dolphins"],
    mapsUrl: "https://maps.google.com/?q=Playa+Manzanillo+Costa+Rica",
  },

  // Nature
  {
    name: "Sloth Spotting at Playa Chiquita",
    category: "Nature",
    location: "Playa Chiquita",
    price: "$",
    description:
      "The trees along the road between Puerto Viejo and Manzanillo are famous for sloth sightings. Three-toed sloths hang out in the cecropia trees in broad daylight. No guide needed — just walk slowly and look up. The area around Playa Chiquita and Punta Uva is particularly reliable.",
    tags: ["sloths", "wildlife", "free", "self-guided"],
    mapsUrl: "https://maps.google.com/?q=Playa+Chiquita+Costa+Rica",
  },
  {
    name: "Gandoca-Manzanillo Wildlife Refuge",
    category: "Nature",
    location: "Manzanillo",
    price: "$",
    description:
      "A protected reserve covering jungle, mangroves, coral reef, and coastline. Home to manatees, dolphins, four species of sea turtles, jaguars, and over 350 bird species. The hiking trail from Manzanillo village leads through primary jungle along the coast — one of the most pristine trails in the region.",
    tags: ["hiking", "wildlife refuge", "manatees", "turtles", "birding"],
    mapsUrl: "https://maps.google.com/?q=Gandoca+Manzanillo+Wildlife+Refuge",
  },
  {
    name: "Birdwatching at Cahuita",
    category: "Nature",
    location: "Cahuita",
    price: "$",
    description:
      "The Caribbean coast is one of the top birdwatching destinations in the Americas. Around Cahuita you can spot toucans, parrots, kingfishers, herons, and the spectacular keel-billed toucan — Costa Rica's national bird. The wetlands south of Cahuita are particularly productive at dawn.",
    tags: ["birding", "toucans", "wetlands", "dawn"],
    mapsUrl: "https://maps.google.com/?q=Cahuita+National+Park",
  },

  // Shopping
  {
    name: "Puerto Viejo Town Market",
    category: "Shopping",
    location: "Puerto Viejo",
    price: "$",
    description:
      "The informal market along the main street in Puerto Viejo has local artisans selling handmade jewelry, woven goods, wood carvings, and Caribbean-style crafts. Many vendors are from local indigenous Bribri and Cabécar communities. Bargaining is normal and expected.",
    tags: ["crafts", "jewelry", "local artisans", "indigenous"],
    mapsUrl: "https://maps.google.com/?q=Puerto+Viejo+Market",
  },
  {
    name: "ATEC (Talamanca Association)",
    category: "Shopping",
    location: "Puerto Viejo",
    price: "$",
    description:
      "The local community tourism organization sells fair-trade coffee, cacao, and crafts sourced directly from Bribri and Afro-Caribbean families in the Talamanca region. Buying here puts money directly in local hands. They also book community-run tours and cultural experiences.",
    tags: ["fair trade", "coffee", "cacao", "community", "ethical"],
    websiteUrl: "https://www.ateccr.org",
    mapsUrl: "https://maps.google.com/?q=ATEC+Puerto+Viejo",
  },
];
