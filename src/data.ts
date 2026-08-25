export interface Product {
  id: number;
  name: string;
  bengali: string;
  description: string;
  price: string;
  numericPrice: number;
  oldPrice?: string;
  numericOldPrice?: number;
  badge: string;
  badgeColor: 'gold' | 'emerald' | 'blue' | 'rose';
  features: string[];
  image: string;
  category: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sky Blue Elegance Jubba",
    bengali: "স্কাই ব্লু এলিগ্যান্স জুব্বা",
    description: "Stylish collar & cuff detailing for the modern gentleman",
    price: "৳ ১,৮৫০",
    numericPrice: 1850,
    oldPrice: "৳ ২,২০০",
    numericOldPrice: 2200,
    badge: "Premium",
    badgeColor: "gold",
    features: ["Premium Cotton", "Tailored Fit", "Modern Collar"],
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=800&auto=format&fit=crop&q=80",
    category: "Premium Collection",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    name: "Classic Brown Jubba",
    bengali: "ক্লাসিক ব্রাউন জুব্বা",
    description: "Subtle tailored fit with smooth premium finish",
    price: "৳ ১,৭৫০",
    numericPrice: 1750,
    badge: "Classic",
    badgeColor: "emerald",
    features: ["Soft Fabric", "Classic Cut", "Daily Wear"],
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&auto=format&fit=crop&q=80",
    category: "Classic Series",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: "Pure White Jubba",
    bengali: "বিশুদ্ধ সাদা জুব্বা",
    description: "Traditional premium comfort wear for Jummah",
    price: "৳ ১,৯০০",
    numericPrice: 1900,
    badge: "Best Seller",
    badgeColor: "gold",
    features: ["Pure White", "Premium Cotton", "Comfortable"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
    category: "Best Sellers",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: "Executive Brown Jubba",
    bengali: "এক্সিকিউটিভ ব্রাউন জুব্বা",
    description: "Elegant chest pocket styling for formal occasions",
    price: "৳ ১,৮০০",
    numericPrice: 1800,
    badge: "Executive",
    badgeColor: "blue",
    features: ["Chest Pocket", "Executive Style", "Premium Stitch"],
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&auto=format&fit=crop&q=80",
    category: "Executive Line",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5,
    name: "Metro Brown Jubba",
    bengali: "মেট্রো ব্রাউন জুব্বা",
    description: "Sleek urban lifestyle design for the modern man",
    price: "৳ ১,৮৫০",
    numericPrice: 1850,
    badge: "Modern",
    badgeColor: "gold",
    features: ["Urban Design", "Sleek Fit", "Modern Look"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=80",
    category: "Modern Series",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 6,
    name: "Deep Grey Modest Jubba",
    bengali: "ডিপ গ্রে মডেস্ট জুব্বা",
    description: "Durable & breathable fabric for active lifestyle",
    price: "৳ ১,৭০০",
    numericPrice: 1700,
    badge: "Outdoor",
    badgeColor: "emerald",
    features: ["Breathable", "Durable", "All-Day Comfort"],
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    category: "Active Wear",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 7,
    name: "Signature Grey Panel Jubba",
    bengali: "সিগনেচার গ্রে প্যানেল জুব্বা",
    description: "Comfortable tailored fit with signature panel design",
    price: "৳ ১,৮০০",
    numericPrice: 1800,
    badge: "Signature",
    badgeColor: "blue",
    features: ["Panel Design", "Tailored Fit", "Signature Style"],
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80",
    category: "Signature Series",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 8,
    name: "Midnight Black Jubba",
    bengali: "মিডনাইট ব্ল্যাক জুব্বা",
    description: "Premium royal black finish for special occasions",
    price: "৳ ১,৯৫০",
    numericPrice: 1950,
    badge: "Royal",
    badgeColor: "gold",
    features: ["Royal Black", "Premium Finish", "Special Occasion"],
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&auto=format&fit=crop&q=80",
    category: "Royal Collection",
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
];
