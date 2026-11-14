export interface BreedItem {
  id: string;
  name: string;
  scientificName?: string;
  category: "guppy" | "crayfish" | "cichlid" | "plants" | "feed";
  categoryLabel: string;
  price: number;
  unit: string;
  badge: string;
  badgeColor: "blue" | "red" | "dark" | "slate";
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  origin: string;
  waterSpecs: {
    temp: string;
    ph: string;
    hardness: string;
  };
  diet: string;
  stockStatus: "In Stock" | "Few Pairs Left" | "Seasonal" | "Breeding Pair Only";
  isFeatured?: boolean;
}

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  instagramUrl: string;
  thumbnail: string;
  videoPreviewUrl?: string;
  views: string;
  likes: string;
  duration: string;
  caption: string;
  featuredBreed: string;
  whatsappInquiry: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  breedOrdered: string;
  comment: string;
  whatsappVerified: boolean;
}

export interface FarmStats {
  instagramFollowers: string;
  youtubeSubscribers: string;
  postsCount: string;
  satisfiedHobbyists: string;
  liveArrivalRate: string;
  statesShipped: string;
}

export const FARM_INFO = {
  name: "Midhula Farm Hut",
  tagline: "Kerala's Premier Live Fish & Exotic Breeder",
  founder: "Midhun (@s_a_j_i_t_h_b_o_y)",
  namedAfter: "Midhula",
  location: "Nedupuzha, Thrissur, Kerala, India - 680007",
  whatsappNumber: "+91 8129120437",
  whatsappDigits: "918129120437",
  instagramUsername: "midhula_farm_hut",
  instagramUrl: "https://www.instagram.com/midhula_farm_hut/?hl=en",
  youtubeUrl: "https://www.youtube.com/@midhula_farm_hut",
  stats: {
    instagramFollowers: "28.7K+",
    youtubeSubscribers: "91.7K+",
    postsCount: "1,968+",
    satisfiedHobbyists: "15,000+",
    liveArrivalRate: "99.8%",
    statesShipped: "28 States",
  } as FarmStats,
};

export const REELS_DATA: ReelItem[] = [
  {
    id: "reel-1",
    title: "Baby Electric Blue Crayfish Clutch Feeding",
    category: "Crayfish & Lobsters",
    instagramUrl: "https://www.instagram.com/p/DeUTLPMxsay/?hl=en",
    // Unique crustacean / crab / lobster close-up
    thumbnail:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    views: "142K",
    likes: "9.8K",
    duration: "0:45",
    caption:
      "Witnessing our prize berried female Cherax pulcher releasing her hundreds of vibrant blue hatchlings in pure Kerala fresh spring water. 100% captive bred at Midhula Farm Hut!",
    featuredBreed: "Cherax Pulcher (Electric Blue Crayfish)",
    whatsappInquiry:
      "Hi Midhun, I watched your reel on Baby Electric Blue Crayfish (DfZzTJ5xxIG). Are juveniles or breeding pairs currently available for dispatch to my pincode?",
  },
  {
    id: "reel-2",
    title: "Albino Full Red Dumbo Ear High Fin Trio",
    category: "Champion Guppies",
    instagramUrl: "https://www.instagram.com/p/DfKslgZxvrh/?hl=en",
    // Vibrant red/orange high-fin ornamental fish
    thumbnail:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    views: "218K",
    likes: "18.4K",
    duration: "0:52",
    caption:
      "Pure ruby-red bloodline with massive dorsal sails and wide elephant ear fins. Reared in bio-filtered outdoor tubs under natural Thrissur sunlight.",
    featuredBreed: "Albino Full Red Dumbo Ear Guppy",
    whatsappInquiry:
      "Hi Midhun, I loved your Albino Full Red Guppy reel (DfKslgZxvrh). I want to order a show-grade breeding trio. Please share details!",
  },
  {
    id: "reel-3",
    title: "Nedupuzha Farm Walkthrough & 60+ Bio-Tanks",
    category: "Farm Tour",
    instagramUrl: "https://www.instagram.com/p/Dewd87uRrWd/?hl=en",
    // Green-water / planted aquatic breeding tank setup
    thumbnail:
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
    views: "95K",
    likes: "7.1K",
    duration: "1:15",
    caption:
      "Take a virtual walk through our Thrissur facility! Over 60 specialized conditioning ponds, live daphnia/artemia culturing stations, and green-water guppy nurseries.",
    featuredBreed: "Midhula Farm Facility Tour",
    whatsappInquiry:
      "Hi Midhun, saw your farm walkthrough reel (Dewd87uRrWd). Can I arrange a visit to your Nedupuzha Thrissur farm, or order selected live stock directly?",
  },
  {
    id: "reel-4",
    title: "Live Parcel Packing with 72-Hour Medical Oxygen",
    category: "Packing & Delivery",
    instagramUrl: "https://www.instagram.com/p/DfZzTJ5xxIG/?hl=en",
    // Clear oxygenated water & live aquatic fish inspection/conditioning
    thumbnail:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    views: "310K",
    likes: "24.6K",
    duration: "0:58",
    caption:
      "How do our fish travel 2,500 km safely? Watch Midhun pack live fish with 70% pure oxygen, double leakproof bags, and premium insulated thermocol cushioning.",
    featuredBreed: "Live Delivery Packaging Process",
    whatsappInquiry:
      "Hi Midhun, saw your safe packing reel (DeUTLPMxsay). How long does delivery take to my state, and what is your live arrival guarantee policy?",
  },
  {
    id: "reel-5",
    title: "Giant Cherax Quadricarinatus (Australian Redclaw)",
    category: "Crayfish & Lobsters",
    instagramUrl: "https://www.instagram.com/p/Dd9GLXSxIZe/?hl=en",
    // Live clawed crab / crustacean in natural aquatic habitat
    thumbnail:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    views: "185K",
    likes: "14.2K",
    duration: "0:48",
    caption:
      "Massive Australian Redclaw male showing off his radiant crimson claw patches and sapphire exoskeleton. An extraordinary showpiece for large planted tanks.",
    featuredBreed: "Australian Redclaw (Cherax Quadricarinatus)",
    whatsappInquiry:
      "Hi Midhun, I'm interested in the giant Redclaw crayfish from your reel (DZ2kOBBRlcT). Do you have pairs or single males ready for dispatch?",
  },
];

export const LIVE_STOCK: BreedItem[] = [
  {
    id: "stock-1",
    name: "Albino Full Red Dumbo Ear (Pure Line)",
    scientificName: "Poecilia reticulata var. Albino Full Red",
    category: "guppy",
    categoryLabel: "Champion Guppy",
    price: 750,
    unit: "Breeding Pair (1M + 1F)",
    badge: "Bestseller Strain",
    badgeColor: "red",
    rating: 4.9,
    reviewsCount: 128,
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    description:
      "Our signature championship strain bred in Thrissur. Solid crimson red coloration with pure pink-red albino eyes, oversized pectoral fins (Dumbo ear), and flowing caudal finnage.",
    origin: "Captive Bred at Midhula Farm Hut, Thrissur",
    waterSpecs: {
      temp: "24°C - 28°C",
      ph: "7.0 - 7.8",
      hardness: "10 - 18 dGH",
    },
    diet: "Live Moina, Artemia nauplii & high-protein micro pellets",
    stockStatus: "In Stock",
    isFeatured: true,
  },
  {
    id: "stock-2",
    name: "Cherax Pulcher (Electric Blue Crayfish)",
    scientificName: "Cherax pulcher (Hoa Creek)",
    category: "crayfish",
    categoryLabel: "Ornamental Crayfish",
    price: 950,
    unit: "Selected Juvenile / Pair",
    badge: "Electric Sapphire Blue",
    badgeColor: "blue",
    rating: 5.0,
    reviewsCount: 94,
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    description:
      "One of the most breathtaking freshwater invertebrates in the world. Displays vivid sapphire-blue claws with lavender-pink carapace margins. Peaceful and hardy in mature aquariums.",
    origin: "Selective Pond Strain, Kerala",
    waterSpecs: {
      temp: "22°C - 26°C",
      ph: "6.8 - 7.5",
      hardness: "8 - 14 dGH",
    },
    diet: "Algae wafers, boiled spinach, sinking crustacean sticks, snails",
    stockStatus: "In Stock",
    isFeatured: true,
  },
  {
    id: "stock-3",
    name: "Black Moscow Pure Strain Guppy",
    scientificName: "Poecilia reticulata var. Black Moscow",
    category: "guppy",
    categoryLabel: "Champion Guppy",
    price: 650,
    unit: "Breeding Pair (1M + 1F)",
    badge: "Velvet Obsidian Black",
    badgeColor: "dark",
    rating: 4.8,
    reviewsCount: 76,
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
    description:
      "Deep, matte obsidian black body from snout to caudal fin with midnight blue iridescence under natural light. Known for high fertility and hardy disease resistance.",
    origin: "Midhula Farm Selective Line",
    waterSpecs: {
      temp: "23°C - 28°C",
      ph: "7.2 - 8.0",
      hardness: "12 - 20 dGH",
    },
    diet: "Spirulina flakes, live daphnia, brine shrimp",
    stockStatus: "Few Pairs Left",
    isFeatured: true,
  },
  {
    id: "stock-4",
    name: "Australian Redclaw Lobster (Cherax quadricarinatus)",
    scientificName: "Cherax quadricarinatus",
    category: "crayfish",
    categoryLabel: "Ornamental Crayfish",
    price: 850,
    unit: "Pair (3 - 4 inches)",
    badge: "Crimson Claws",
    badgeColor: "red",
    rating: 4.9,
    reviewsCount: 62,
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    description:
      "Impressive fast-growing tropical lobster with steel-blue hues and distinct bright scarlet-red patches on the male outer claws. Hardy, robust, and fascinating behavior.",
    origin: "Thrissur Outdoor Pond Stock",
    waterSpecs: {
      temp: "23°C - 29°C",
      ph: "7.0 - 8.2",
      hardness: "10 - 20 dGH",
    },
    diet: "Vegetables, detritus, sinking carnivore pellets",
    stockStatus: "In Stock",
    isFeatured: true,
  },
  {
    id: "stock-5",
    name: "Green Terror Cichlid (Andinoacara rivulatus)",
    scientificName: "Andinoacara rivulatus",
    category: "cichlid",
    categoryLabel: "Exotic Cichlid",
    price: 550,
    unit: "Single Show Specimen (2.5 - 3 inch)",
    badge: "Vibrant Spangles",
    badgeColor: "blue",
    rating: 4.9,
    reviewsCount: 48,
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
    description:
      "Magnificent emerald and electric blue spangled scales with vivid neon orange edging on dorsal and tail fins. Raised in mineral-rich Thrissur river basin water.",
    origin: "Kerala Captive Hatchery",
    waterSpecs: {
      temp: "22°C - 27°C",
      ph: "6.5 - 7.5",
      hardness: "6 - 15 dGH",
    },
    diet: "Bloodworms, krill pellets, live feeder fish",
    stockStatus: "In Stock",
  },
  {
    id: "stock-6",
    name: "Dumbo Ear Red Mosaic Dragon Guppy",
    scientificName: "Poecilia reticulata var. Red Dragon",
    category: "guppy",
    categoryLabel: "Champion Guppy",
    price: 800,
    unit: "Trio (1M + 2F)",
    badge: "Red Mosaic Fin",
    badgeColor: "red",
    rating: 5.0,
    reviewsCount: 89,
    image:
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
    description:
      "Intricate snakeskin pattern body with fiery crimson mosaic tail fin and large white-tipped elephant ears. High vigor line with excellent parental traits.",
    origin: "Midhula Farm Lineage",
    waterSpecs: {
      temp: "24°C - 28°C",
      ph: "7.2 - 7.8",
      hardness: "10 - 16 dGH",
    },
    diet: "Micro granules, infusoria, baby brine shrimp",
    stockStatus: "Few Pairs Left",
    isFeatured: true,
  },
  {
    id: "stock-7",
    name: "Java Moss on Ceramic Shrimp Shelter",
    scientificName: "Taxiphyllum barbieri",
    category: "plants",
    categoryLabel: "Aquatic Flora",
    price: 250,
    unit: "1 Pre-tied Tube Shelter",
    badge: "Pesticide-Free",
    badgeColor: "slate",
    rating: 4.8,
    reviewsCount: 110,
    image:
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
    description:
      "Lush, pesticide-free green Java moss hand-bound to a cylindrical ceramic shelter. Provides essential hiding spots and biofilm foraging for guppy fry and baby crayfish.",
    origin: "Cultivated in Midhula Plant Vats",
    waterSpecs: {
      temp: "18°C - 29°C",
      ph: "6.0 - 8.0",
      hardness: "Any (Low light tolerant)",
    },
    diet: "Liquid micro fertilizer / Water nutrients",
    stockStatus: "In Stock",
  },
  {
    id: "stock-8",
    name: "Farm Special Micro-Pellets & Mineral Salt Pack",
    category: "feed",
    categoryLabel: "Nutrition & Care",
    price: 350,
    unit: "100g Feed + 250g Mineral Salt",
    badge: "Breeder Secret",
    badgeColor: "dark",
    rating: 4.9,
    reviewsCount: 145,
    image:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
    description:
      "The exact high-protein (52%) color-enhancing slow-sinking crumble used across all 60 breeding ponds at Midhula Farm Hut, bundled with pure Kerala water conditioning salt.",
    origin: "Midhula Custom Formula",
    waterSpecs: {
      temp: "All water types",
      ph: "Neutral buffering",
      hardness: "Remineralizer",
    },
    diet: "Fortified with Astaxanthin, Spirulina, and Garlic extract",
    stockStatus: "In Stock",
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Dr. Anish Menon",
    location: "Kochi, Kerala",
    rating: 5,
    date: "November 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    breedOrdered: "Albino Full Red Dumbo Ear (2 Pairs)",
    comment:
      "Received the parcel in Kochi within 24 hours. The thermocol box packaging was top-notch with thick bubble wrap and clean pure oxygen bags. All 4 fish were super active immediately after acclimation. Truly the best guppy breeder in Kerala!",
    whatsappVerified: true,
  },
  {
    id: "rev-2",
    name: "Vikram Malhotra",
    location: "Bandra, Mumbai",
    rating: 5,
    date: "October 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    breedOrdered: "Cherax Pulcher Electric Blue Pair",
    comment:
      "Was skeptical about shipping live crayfish from Kerala to Mumbai, but Midhun guided me step-by-step on WhatsApp. The delivery was made by express courier on the 2nd day, 100% alive and healthy! The blue color is even more stunning than in his Instagram videos.",
    whatsappVerified: true,
  },
  {
    id: "rev-3",
    name: "Sneha Chakraborty",
    location: "Salt Lake, Kolkata",
    rating: 5,
    date: "October 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    breedOrdered: "Dumbo Ear Red Mosaic Dragon Trio",
    comment:
      "91,000 YouTube subscribers don't lie! Midhun bro provided unboxing tips and even shared his personal water parameters. The female gave birth to 35 healthy fry within 10 days of arrival. 10/10 recommendation for all Indian fish keepers.",
    whatsappVerified: true,
  },
  {
    id: "rev-4",
    name: "Karthik Raja",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    date: "September 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    breedOrdered: "Australian Redclaw Juvenile Pair",
    comment:
      "Visited his Nedupuzha farm in Thrissur directly while on a trip to Guruvayur. The facility is exceptionally neat and clean. Selected my pair on the spot. Great hospitality by Midhun and genuine pure genetics.",
    whatsappVerified: true,
  },
];

export const FAQS = [
  {
    q: "How do you guarantee safe live delivery across India?",
    a: "Every fish or crayfish undergoes 24 hours of fasting before packing to ensure zero water contamination during transit. We pack them inside heavy-duty double leakproof polybags pumped with 70% pure medical-grade oxygen, sealed inside high-density insulated thermocol boxes with temperature stabilization. We ship via express air cargo and premium couriers with live tracking.",
  },
  {
    q: "What is your Dead on Arrival (DOA) replacement policy?",
    a: "We offer a 100% Live Arrival Guarantee. In the rare event of any mortality during transit, simply record a continuous 30-second unboxing video of the unopened sealed bag within 2 hours of package delivery and send it to our WhatsApp (+91 8129120437). We will immediately arrange a free replacement or full refund.",
  },
  {
    q: "How do I place an order via WhatsApp?",
    a: "Browse any breed on this website and click 'Order via WhatsApp'. This automatically opens WhatsApp with a pre-filled message specifying the strain and quantity. Midhun will confirm live stock availability, calculate courier charges to your pincode, share account/UPI details, and dispatch on our weekly scheduled shipping days (Mondays and Tuesdays).",
  },
  {
    q: "Can I visit Midhula Farm Hut in person in Thrissur?",
    a: "Yes! Hobbyists are welcome to visit our breeding farm located at Nedupuzha, Thrissur, Kerala. Please message us on WhatsApp (+91 8129120437) at least 24 hours in advance so Midhun can personally welcome you and guide you through the breeding ponds.",
  },
  {
    q: "How should I acclimate the fish when my parcel arrives?",
    a: "Float the unopened bag in your aquarium for 20-25 minutes to equalize the temperature. Then open the bag and slowly add small cups of your aquarium water every 5 minutes for 15 minutes. Gently net the fish into your tank — do not pour the transport bag water into your aquarium. Keep lights dimmed for the first 12 hours.",
  },
];

export const PACKING_STEPS = [
  {
    step: "01",
    title: "24-Hour Conditioning",
    desc: "Fish are fasted in clean conditioned spring water to keep waste and ammonia zero during transit.",
    icon: "HeartHandshake",
  },
  {
    step: "02",
    title: "70% Pure Medical Oxygen",
    desc: "Heavy-gauge double bags pressurized with pure oxygen, sustaining active respiration for 72+ hours.",
    icon: "Wind",
  },
  {
    step: "03",
    title: "Insulated Thermocol Vault",
    desc: "Custom high-density EPS thermocol boxes protect against thermal spikes and transport shocks.",
    icon: "PackageCheck",
  },
  {
    step: "04",
    title: "Express Air & Rail Dispatch",
    desc: "Dispatched on Mondays & Tuesdays via fastest cargo partners with live WhatsApp tracking.",
    icon: "PlaneTakeoff",
  },
];

export const INSTAGRAM_HIGHLIGHT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    caption: "Championship Albino Full Red Pure Line Female with fry",
    sourceLink: "https://www.instagram.com/p/Da8ltD6E0h6/?hl=en&img_index=1",
    tag: "@midhula_farm_hut",
    likes: "4.2K",
  },
  {
    url: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80",
    caption: "Berried Electric Blue Cherax pulcher carrying blue eggs",
    sourceLink: "https://www.instagram.com/p/DfZzTJ5xxIG/?hl=en",
    tag: "Thrissur Hatchery",
    likes: "6.8K",
  },
  {
    url: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600&q=80",
    caption: "Daily live fish dispatches ready for All-India express shipping",
    sourceLink: "https://www.instagram.com/p/DeUTLPMxsay/?hl=en",
    tag: "Live Fish Dispatch",
    likes: "5.1K",
  },
  {
    url: "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=600&q=80",
    caption: "Outdoor bio-ponds in Nedupuzha with natural sunlight culturing",
    sourceLink: "https://www.instagram.com/p/Dewd87uRrWd/?hl=en",
    tag: "Nedupuzha, Thrissur",
    likes: "3.9K",
  },
  {
    url: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80",
    caption: "Black Moscow velvet breeding pair in conditioned Kerala water",
    sourceLink: "https://www.instagram.com/midhula_farm_hut/?hl=en",
    tag: "Pure Strain",
    likes: "4.7K",
  },
  {
    url: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80",
    caption: "Cherax quadricarinatus Australian Redclaw with vivid crimson claws",
    sourceLink: "https://www.instagram.com/p/DZ2kOBBRlcT/?hl=en",
    tag: "Exotic Crayfish",
    likes: "8.3K",
  },
];
