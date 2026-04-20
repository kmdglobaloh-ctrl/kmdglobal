export interface Region {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  badge: string;
}

export const regions: Region[] = [
  {
    id: "caribbean-cr",
    name: "Caribbean Costa Rica",
    emoji: "🌴",
    tagline: "Cocles · Puerto Viejo · Cahuita",
    description: "The real Tico experience on the Caribbean coast. Learn local slang (mae, pura vida, tuanis), navigate tuk-tuks, sodas, and surf beaches. Flavored with Afro-Caribbean culture and the Limon dialect.",
    badge: "Recommended for Cocles visitors",
  },
  {
    id: "central-american",
    name: "General Central American",
    emoji: "🌎",
    tagline: "Guatemala · Honduras · El Salvador · Nicaragua · Costa Rica",
    description: "Practical, universal Spanish that works across Central America. Standard pronunciation, widely understood vocabulary, and travel-focused phrases without heavy regional slang.",
    badge: "Good for broader travel",
  },
];

export function getRegionById(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
