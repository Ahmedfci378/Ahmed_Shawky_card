/**
 * Customer card configuration. To create a new customer:
 *   1. Copy this file, rename it to the customer's slug.
 *   2. Change the values. Delete any line you don't need.
 *   3. Register it in data/cards/index.js.
 *
 * Phone numbers: international format with "+" (e.g. +201001234567).
 * Social fields: full URLs starting with https://
 */
const card = {
  slug: "ahmed-mohamed",       // becomes the URL: /ahmed-mohamed
  locale: "en",                // "ar" | "en"

  // Identity
  fullName: "Mr.Ahmed Shawky",
  firstName: "Ahmed",
  lastName: "Shawky",
  jobTitle: "CKD _ Manufacturing Operations MGR",
  company: "Kaiyi Motors Egypt",
  profileImage: "/images/profile.jpeg",          // "/cards/ahmed-mohamed/avatar.webp" (portrait ~4:5, 400px+). null = initials
  profileImageAlt: null,       // optional; defaults to fullName

  // Branding
  brandName: "Kaiyi Motors Egypt",    // shown under the title; falls back to `company`
  logo: null,                  // "/cards/ahmed-mohamed/logo.svg" - square or icon-style works best (shown in a 40px tile)
  qrLogo: null,                // optional small logo in the QR centre (square, simple). Leave null for the most reliable scan
  coverImage: null,            // optional faded backdrop, e.g. "/cards/ahmed-mohamed/cover.webp" (wide, ~1600px)
  companyDescription:
    "KAIYI Motors Egypt is the official dealer and representative of KAIYI vehicles in Egypt, providing vehicle sales, after-sales services, maintenance, genuine spare parts, and customer care.  Founded in 2024, the company is a fast-growing automotive organization focused on innovation, operational excellence, and customer satisfaction across its expanding network in Egypt.",

  // Visual identity. Dark backgrounds only. Everything below is optional.
  theme: {
    accent: "#C9A24B",
    accentSecondary: "#E6CB85",  // used for small text/icons; auto-lightened if contrast is too low
    background: "#0D1117",
    glassOpacity: 0.045,         // 0.02 - 0.15
    borderRadius: 24,            // px, 8 - 32
    avatarShape: "arch",         // "arch" | "circle"
  },

  // Text
  bio: "More than 20 Years Experience  Operations Automotive  Business with Multinatonal companies",
  about:
    "More than 20 Years Experience  Operations Automotive  Business with Multinatonal companies,(JEEP, PEUGOE,BMW,DEAWOO,CHERRY, KAIYE). Business Development Consultant , MEA Regoin Companies se( Egypt, Iraq, KSA,Oman).Support of business Strategy for (EV, PHEV, HEV, MHEV, and Hybird vehicles.",
  services: [
    { title: "Business Consulting & Development", description: "Business growth strategies, market entry, and strategic partnerships across the automotive sector." },
    { title: "EV & Hybrid Strategy", description: "Strategic consulting for EV, PHEV, HEV, and MHEV technologies and future mobility transformation." },
    { title: "Strategic Planning & Operational Excellence", description: "Consulting and supporting stakeholders to operate automotive business development to  make excellent partenship with high brands automotive companies, and strategies planning to growth the company to MEA region." },
  ],

  // Contact
  phone: "+201110009148",
  whatsapp: "+201110009148",
  whatsappMessage: "السلام عليكم دكتور، حابب أحجز موعد",
  email: "ckd.mgr@kaiyimotorsegypt.com",
  emailSubject: "استفسار من الكارت الرقمي",   // optional
  emailBody: "السلام عليكم دكتور، ",            // optional
  website: "ahmed.helallu@gmail.com",

  // Location
  addressLabel: "6 October",
  address: "First Industrial Zone, 6th of October City, Giza, Egypt.",
  latitude: 29.9209175,
  longitude: 30.914896,
  mapsUrl: "https://www.google.com/maps?q=29.9209175,30.914896",               // optional fallback, used only when latitude/longitude are missing

  // Social
  linkedin: "https://www.linkedin.com/in/ahmed-shawky-helal-43074251",
  instagram: "https://instagram.com/example",
  facebook: "https://m.me/ahmed.s.helal",
  youtube: null,
  twitter: null,               // X / Twitter
};

export default card;
