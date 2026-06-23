// ===================== STATE DATA =====================
// Traveler's Info Junction is a YouTube content aggregator, NOT a booking site.
// Every video below uses a REAL, specific YouTube video ID (verified via search) -
// clicking "Watch on YouTube" opens that exact video, not a search results page.
// Thumbnails use YouTube's own CDN (img.youtube.com/vi/{id}/hqdefault.jpg) so they're
// always the real thumbnail for that exact video.

function ytVideo(id, title) {
  return {
    title,
    channel: "Travel Vlogger",
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${id}`,
  };
}

const STATES = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Forts, deserts & royal palaces",
    heroImage: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=1600",
    cardImage: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600",
    overview: "The Land of Kings — golden deserts, hilltop forts, and palaces that turn pink and gold at sunset.",
    bestTime: "October to March",
    budget: "₹1,500 – ₹4,000 / day",
    languages: "Hindi, Rajasthani, English",
    weather: "Hot summers, mild winters",
    nearestAirports: "Jaipur (JAI), Udaipur (UDR)",
    hotels: [
      ytVideo("GcYRxj3EXaQ", "Rajasthan Vacation Travel Video Guide"),
      ytVideo("KBv23VPXsag", "Discover Rajasthan: Highlights, Tips & Budgeting Guide"),
    ],
    streetFood: [
      ytVideo("qyJ3M0BSLMo", "Exploring Rajasthan: Where to Stay & What to Eat"),
    ],
    streetShopping: [
      ytVideo("k0-y-BwxZWk", "Rajasthan Tourist Places & Itinerary"),
    ],
    historicPlaces: [
      ytVideo("BYOpKjdiurw", "Ultimate Rajasthan Road Trip Guide (17 Days)"),
      ytVideo("p4aPLNvHaYc", "Top 10 Best Places to Visit in Rajasthan"),
    ],
    famousPlaces: [
      ytVideo("UYTYf6MwZj4", "Rajasthan in 4K — India Travel Guide"),
      ytVideo("vbuQFmv87N8", "The ULTIMATE Rajasthan Itinerary: Jodhpur, Jawai & More"),
    ],
    travelGuides: [
      ytVideo("SzaPvmGS4Ow", "The Ultimate Rajasthan Travel Guide — Things to Do"),
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "Backwaters, spices & calm",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600",
    cardImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
    overview: "God's Own Country — palm-lined backwaters, misty tea hills, and Ayurvedic calm.",
    bestTime: "September to March",
    budget: "₹1,200 – ₹3,500 / day",
    languages: "Malayalam, English",
    weather: "Tropical, monsoon June–Sept",
    nearestAirports: "Kochi (COK), Trivandrum (TRV)",
    hotels: [
      ytVideo("vOx-5bCX13o", "6 Day Trip to Kerala: Complete Travel Guide"),
    ],
    streetFood: [
      ytVideo("i2aH11Ui95Q", "Kerala Tourist Places & Complete Itinerary | Budget Trip"),
    ],
    streetShopping: [
      ytVideo("WIS8B5lEIsU", "Kerala Tourist Places | Itinerary & Tour Budget"),
    ],
    historicPlaces: [
      ytVideo("lLOQfTxVY0k", "Kerala — 9 Days Budget Itinerary: Athirapally, Munnar"),
    ],
    famousPlaces: [
      ytVideo("ATS8aNn-bz8", "Kerala Top Tourist Destinations | Places to Visit"),
      ytVideo("wST_sQ8IF24", "Best Tourist Places to Visit in Kerala"),
    ],
    travelGuides: [
      ytVideo("W3UBpzv49xk", "Kerala Travel Guide: Complete Itinerary, Budget & Stays"),
    ],
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    tagline: "Taj Mahal, Ghats & spirituality",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600",
    cardImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
    overview: "Home to the Taj Mahal and the ghats of Varanasi — a state where history and faith meet.",
    bestTime: "November to February",
    budget: "₹1,000 – ₹3,000 / day",
    languages: "Hindi, Urdu, English",
    weather: "Hot summers, cool winters",
    nearestAirports: "Lucknow (LKO), Varanasi (VNS), Agra (AGR)",
    hotels: [
      ytVideo("kIYXuv3b1-Q", "Agra City Travel Guide: Taj Mahal Travel Video"),
    ],
    streetFood: [
      ytVideo("zK9d25hFb1U", "Taj Mahal to Agra's Hidden Gems: Epic India Travel Guide"),
    ],
    streetShopping: [
      ytVideo("kIYXuv3b1-Q", "Agra City Travel Guide: Taj Mahal Travel Video"),
    ],
    historicPlaces: [
      ytVideo("fEjgXLZULkM", "Taj Mahal: Complete Historical Tour Guide"),
    ],
    famousPlaces: [
      ytVideo("49HTIoCccDY", "Taj Mahal (Agra, India): Full Tour"),
    ],
    travelGuides: [
      ytVideo("fEjgXLZULkM", "Taj Mahal: Complete Historical Tour Guide"),
      ytVideo("zK9d25hFb1U", "Taj Mahal to Agra's Hidden Gems: Epic India Travel Guide"),
    ],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, sea & laid-back charm",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600",
    cardImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    overview: "Portuguese-era churches, golden beaches, and a nightlife that never really sleeps.",
    bestTime: "November to February",
    budget: "₹1,500 – ₹5,000 / day",
    languages: "Konkani, English, Hindi",
    weather: "Tropical, hot & humid",
    nearestAirports: "Goa (GOI)",
    hotels: [
      ytVideo("S309tVVdTT4", "Complete Travel Guide to Goa: Beaches, Shacks, Hotels & Budget"),
    ],
    streetFood: [
      ytVideo("ZVmI6ZM99sc", "Goa Full Tour Guide: Beaches, Nightlife, Food & Hidden Gems"),
    ],
    streetShopping: [
      ytVideo("2t_U2XFAzNA", "Goa Tourist Places | Itinerary, Nightlife & Watersports"),
    ],
    historicPlaces: [
      ytVideo("jYLXQWVpDYk", "Goa | Goa Tourist Places | Complete Travel Guide"),
    ],
    famousPlaces: [
      ytVideo("8ecQYGGXL-0", "Goa Trip Plan & Budget | Best Places to Visit"),
      ytVideo("LyphZoLBKNY", "Goa Travel Guide: Top Spots, Itinerary & Budget Tips"),
    ],
    travelGuides: [
      ytVideo("Q8FsTqhWU7A", "Goa Vlog | Tourist Places | Trip Plan"),
    ],
  },
  {
    id: "punjab",
    name: "Punjab",
    tagline: "Golden Temple, food & vibrant culture",
    heroImage: "https://img.youtube.com/vi/m701WKQMeYQ/maxresdefault.jpg",
    cardImage: "https://img.youtube.com/vi/m701WKQMeYQ/hqdefault.jpg",
    overview: "Home to the shimmering Golden Temple in Amritsar — a state known for its warmth, food, and devotion.",
    bestTime: "October to March",
    budget: "₹1,200 – ₹3,500 / day",
    languages: "Punjabi, Hindi, English",
    weather: "Hot summers, cold winters",
    nearestAirports: "Amritsar (ATQ)",
    hotels: [
      ytVideo("43MmBoUY4C0", "Amritsar Punjab | Places to Visit, Stay & Eat | Golden Temple"),
    ],
    streetFood: [
      ytVideo("d5l_xz8z3sI", "Exploring Amritsar: Golden Temple, Free Kitchen & Food Tour"),
    ],
    streetShopping: [
      ytVideo("0qomlBIN3Fk", "Amritsar Punjab Travel Vlog: Golden Temple & Wagah Border"),
    ],
    historicPlaces: [
      ytVideo("b4qiQQReS8o", "A Tour of Amritsar & the Beautiful Golden Temple"),
    ],
    famousPlaces: [
      ytVideo("m701WKQMeYQ", "Golden Temple, Amritsar — Amazing Places 4K"),
      ytVideo("z3A_bbFMcI0", "Magical Golden Temple by Night, Amritsar"),
    ],
    travelGuides: [
      ytVideo("0IZRlFcXfTM", "Visiting the Golden Temple Amritsar — Punjab Travel Vlog"),
      ytVideo("0mPcQFr4ByA", "Golden Temple of Amritsar | India Travel Vlog"),
    ],
  },
];

// Categories shown as navigation cards on each state page
const CATEGORIES = [
  { key: "hotels", label: "Hotels", icon: "🏨" },
  { key: "streetFood", label: "Street Food", icon: "🍛" },
  { key: "streetShopping", label: "Street Shopping", icon: "🛍️" },
  { key: "historicPlaces", label: "Historic Places", icon: "🏛️" },
  { key: "famousPlaces", label: "Famous Places", icon: "📍" },
  { key: "travelGuides", label: "Travel Guides", icon: "🎥" },
];