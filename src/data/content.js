export const WA_NUMBER = "6282210560885";
export const WA_MSG = encodeURIComponent("Hello, I'm interested in your Tetra fish. Could you please provide more information about availability and pricing?");
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
export const EMAIL = "info@mutiaratetra.com"; // update sesuai email aktual

export const SPECIES = [
  {
    id: "neon",
    number: "01",
    name: "Neon Tetra",
    latin: "Paracheirodon innesi",
    tagColor: "#3b82f6",
    accentColor: "#60a5fa",
    dimColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.25)",
    highlights: [
      "Iconic blue-red stripe coloration",
      "One of the most popular tetra species worldwide",
      "Ideal for community and aquascape tanks",
    ],
    why: "Neon Tetra has been central to our operation since the beginning. Located in Bojongsari — one of Indonesia's most established tetra breeding areas — we work with experienced local farmers who have perfected the breeding technique over decades. Neon Tetra is our primary commodity, and we produce it consistently with stable supply year-round.",
    svgStripeFill: "#3b82f6",
    svgStripeAccent: "#ef4444",
    img: "/neon-tetra.png",
  },
  {
    id: "cardinal",
    number: "02",
    name: "Cardinal Tetra",
    latin: "Paracheirodon axelrodi",
    tagColor: "#ef4444",
    accentColor: "#f87171",
    dimColor: "rgba(239,68,68,0.12)",
    borderColor: "rgba(239,68,68,0.25)",
    highlights: [
      "Full red stripe from head to tail — more vibrant than Neon",
      "High economic value, strong global demand",
      "Premium species favored by importers worldwide",
    ],
    why: "Cardinal Tetra commands a premium price in global markets, and rightfully so. Through years of experience handling this species, we understand its requirements intimately — from conditioning to export preparation. It is one of our standout products with consistent quality and stable market demand.",
    svgStripeFill: "#ef4444",
    svgStripeAccent: "#ef4444",
    img: "/cardinal-tetra.png",
  },
  {
    id: "rummynose",
    number: "03",
    name: "Rummynose Tetra",
    latin: "Hemigrammus rhodostomus",
    tagColor: "#22c55e",
    accentColor: "#4ade80",
    dimColor: "rgba(34,197,94,0.12)",
    borderColor: "rgba(34,197,94,0.25)",
    highlights: [
      "Distinctive red nose — a natural water quality indicator",
      "Known for tight, synchronized schooling behavior",
      "Favorite among aquascapers and hobbyists globally",
    ],
    why: "Rummynose Tetra is a favorite among aquascapers worldwide for its unique appearance and tight schooling behavior. Backed by our experienced farmer network, we supply Rummynose Tetra with consistent quality and sustainable availability for both domestic and international markets.",
    svgStripeFill: "#6b7280",
    svgStripeAccent: "#ef4444",
    img: "/rummynose-tetra.png",
  },
];

export const STATS = [
  { value: "~2M", label: "fish / month", sub: "production capacity" },
  { value: "20+", label: "partner farmers", sub: "& breeders" },
  { value: "500", label: "quarantine tanks", sub: "100×30×30 cm each" },
  { value: "<2%", label: "shipping mortality", sub: "standardized packing" },
];

export const WHY_CHOOSE = [
  {
    icon: "🧬",
    title: "Focused Breeding Expertise",
    desc: "We specialize exclusively in three tetra species. This focus — not breadth — is what gives us consistent coloration, uniform sizing, and export-grade quality in every batch.",
  },
  {
    icon: "🌊",
    title: "Optimal Water Conditions",
    desc: "Our facility uses well water at pH 6.5–7.0 and 26–28°C — ideal parameters for tetra health. Every tank runs sponge filtration with weekly water changes.",
  },
  {
    icon: "🍃",
    title: "Natural Conditioning",
    desc: "We use Indian almond leaves (ketapang) and non-iodized salt in controlled doses during quarantine — a time-tested approach that strengthens fish and enhances natural coloration.",
  },
  {
    icon: "🛡️",
    title: "Strict Health & Quarantine",
    desc: "Every batch goes through acclimatization, observation, grading, and conditioning before shipment. Our mortality rate during shipping is consistently below 2%.",
  },
  {
    icon: "✈️",
    title: "Export-Ready Supply Chain",
    desc: "Proximity to Jakarta means fast access to international air freight. We handle all documentation and export procedures to ensure smooth delivery to buyers worldwide.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    desc: "We are not just a one-time supplier. We build relationships. Reliable supply, transparent communication, and consistent quality — every shipment, every time.",
  },
];

export const FACILITY = [
  { value: "~300 m²", label: "Facility Area", desc: "Dedicated holding & quarantine facility" },
  { value: "500", label: "Aquariums", desc: "100 × 30 × 30 cm per unit" },
  { value: "pH 6.5–7.0", label: "Water pH", desc: "Stable well water, ideal for tetra" },
  { value: "26–28°C", label: "Temperature", desc: "Tropical climate — naturally stable" },
  { value: "85–90%", label: "Survival Rate", desc: "Fry to export size" },
  { value: "Since 2017", label: "Experience", desc: "7+ years in ornamental fish industry" },
];

export const FAQ = [
  {
    q: "How long have you been breeding Tetra?",
    a: "We have been in the ornamental fish industry since 2017, focused on the management, holding, and supply of various tetra species through our network of partner farmers and breeders across Indonesia.",
  },
  {
    q: "What is your monthly production capacity?",
    a: "Supported by approximately 20 partner farmers and breeders, we have a supply capacity of up to ±2,000,000 fish per month, available in sizes ranging from 1.6 cm to 2.5 cm depending on buyer requirements.",
  },
  {
    q: "What export volumes can you handle?",
    a: "We can handle shipments ranging from tens of thousands to hundreds of thousands of fish per month, aligned with buyer schedules and logistical requirements.",
  },
  {
    q: "What is your shipping mortality rate?",
    a: "With standardized selection, quarantine, conditioning, and packing procedures, our shipping mortality is consistently below 2%.",
  },
  {
    q: "What water parameters do you use?",
    a: "We use well water with a stable pH of 6.5–7.0 and temperature of 26–28°C — parameters well-suited for tetra health and conditioning. Each tank runs on sponge filtration with weekly water changes.",
  },
  {
    q: "What conditioning methods do you use?",
    a: "During quarantine and holding, we use Indian almond leaves (ketapang) to support fish condition and enhance natural coloration, along with non-iodized salt in controlled doses as part of our health management protocol.",
  },
  {
    q: "Why source Tetra from Indonesia?",
    a: "Indonesia is one of the world's largest ornamental fish producers, with a tropical climate ideal for year-round breeding. The Bojongsari area in particular has decades of tetra farming history, producing experienced farmers, consistent quality, and large-scale production capacity.",
  },
];
