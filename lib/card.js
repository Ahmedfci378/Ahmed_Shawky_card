import { buildActions } from "./actions.js";
import { resolveTheme } from "./theme.js";
import { safeImageSrc } from "./url.js";

/** Turns the flat customer config into the structure the components consume. */
export function normalizeCard(c) {
  if (!c?.slug || !c?.fullName) throw new Error("Card config requires `slug` and `fullName`.");
  const locale = c.locale ?? "ar";
  const actions = buildActions(c, locale);

  // Tell the developer when a configured value was rejected (and therefore hidden).
  const expected = { phone: "call", whatsapp: "whatsapp", email: "email", website: "website" };
  for (const [field, action] of Object.entries(expected)) {
    if (c[field] && !actions[action]) console.warn(`[card:${c.slug}] "${field}" is invalid and its button is hidden.`);
  }
  for (const k of ["linkedin", "facebook", "instagram", "youtube", "twitter", "x"]) {
    const platform = k === "twitter" ? "x" : k;
    if (c[k] && !actions.socials.some((s) => s.platform === platform)) {
      console.warn(`[card:${c.slug}] "${k}" is not a valid http(s) URL and its icon is hidden.`);
    }
  }

  const theme = resolveTheme(c.theme, c.slug);
  theme.warnings.forEach((w) => console.warn(w));
  const image = (field) => {
    const ok = safeImageSrc(c[field]);
    if (c[field] && !ok) console.warn(`[card:${c.slug}] "${field}" must be a /local/path or https URL. Image hidden.`);
    return ok;
  };
  const brandName = c.brandName ?? c.company;

  return {
    slug: c.slug,
    locale,
    profile: {
      name: c.fullName, title: c.jobTitle, company: c.company, bio: c.bio,
      photo: image("profileImage"), photoAlt: c.profileImageAlt ?? c.fullName,
    },
    brand: {
      name: brandName,
      logo: image("logo"),
      logoAlt: c.logoAlt ?? brandName ?? c.fullName,
      description: c.companyDescription,
      initial: [...(brandName ?? "")][0] ?? "",
    },
    cover: image("coverImage"),
    qrLogo: image("qrLogo"),
    theme,
    about: c.about,
    services: c.services ?? [],
    location: c.address || c.addressLabel ? { label: c.addressLabel ?? c.company, address: c.address } : { label: c.company },
    actions,
    seo: {
      title: c.seoTitle ?? `${c.fullName} | ${c.jobTitle ?? ""}`.replace(/ \| $/, ""),
      description: c.seoDescription ?? c.bio ?? "",
    },
    // Only the fields the .vcf needs. Nothing else is sent to the client component.
    vcard: {
      fullName: c.fullName,
      firstName: c.firstName ?? c.fullName,
      lastName: c.lastName ?? "",
      company: c.company, jobTitle: c.jobTitle,
      phone: c.phone, whatsapp: c.whatsapp,
      email: c.email, website: c.website, address: c.address,
    },
  };
}
