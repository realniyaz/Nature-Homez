export interface Property {
  id: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  region: "Delhi-NCR" | "Uttarakhand";
  type: string;
  badge: "Exclusive" | "New Launch" | "Limited Collection";
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  mainImage: string;
  gallery: string[];
  features: string[];
}

export const propertiesData: Property[] = [
  {
    id: "horizon-residences",
    title: "The Horizon Residences",
    tagline: "Sky-villa with private terrace overlooking championship greens.",
    description: "Suspended high above the Gurugram skyline, this architectural masterpiece redefines vertical living. Featuring expansive 14-foot floor-to-ceiling glass windows, a private heated plunge pool on the double-height terrace, and a separate service elevator lobby for absolute privacy.",
    location: "Golf Course Road, Gurugram",
    region: "Delhi-NCR",
    type: "Penthouse",
    badge: "Exclusive",
    price: "16.8 Cr",
    beds: 4,
    baths: 5,
    sqft: 6400,
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Private Lift Lobby", "24/7 White-glove Concierge", "100ft Golf Facing Balcony", "VRV Air Conditioning"]
  },
  {
    id: "solis-glasshouse",
    title: "Solis Glasshouse Tower",
    tagline: "Floor-to-ceiling glass façade with private elevator lobby.",
    description: "An iconic statement of light and structure. Crafted using low-e thermal insulated safety glass, this tower apartment wraps around panoramic city views. Features custom structural engineering that completely eliminates interior pillars along the outer horizon.",
    location: "DLF Phase V, Gurugram",
    region: "Delhi-NCR",
    type: "Apartment",
    badge: "Limited Collection",
    price: "14.2 Cr",
    beds: 4,
    baths: 4,
    sqft: 5200,
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Automated Smart Home IoT", "Italian Marble Flooring", "Chef's Kitchen", "4 Dedicated Car Parks"]
  },
  {
    id: "pinecrest-estate",
    title: "Pinecrest Estate",
    tagline: "Cedar-and-stone retreat hidden among century-old pines.",
    description: "Hand-hewn out of local stone and imported cedar beams, Pinecrest stands as an organic extension of the Bhimtal ridge line. Features expansive cathedral open-truss ceilings and private pathways direct into the forest reserve.",
    location: "Bhimtal, Uttarakhand",
    region: "Uttarakhand",
    type: "Himalayan Retreat",
    badge: "Exclusive",
    price: "16.8 Cr",
    beds: 4,
    baths: 4,
    sqft: 4200,
    mainImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Natural Fireplace Hearth", "Temperature-Controlled Solarium", "Spring Water Filtration", "Wrap-around Deck"]
  },
  {
    id: "deodar-heights",
    title: "Deodar Heights",
    tagline: "Stone-clad eco-villa with panoramic Himalayan vistas.",
    description: "Perched majestically at an elevation of 7,000 feet, this eco-sensitive luxury estate overlooks the unbroken snow peak range. Engineered for deep thermal containment, utilizing solar radiant floor matrices alongside natural stone facades.",
    location: "Landour, Mussoorie",
    region: "Uttarakhand",
    type: "Glass-Villa",
    badge: "New Launch",
    price: "19.4 Cr",
    beds: 5,
    baths: 5,
    sqft: 5800,
    mainImage: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Infinity Pool Over Horizon", "Dedicated Staff Quarters", "Private Wine Cellar", "Gated Security Circle"]
  }
];