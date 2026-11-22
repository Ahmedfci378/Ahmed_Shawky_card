import { safeWebUrl } from "./url.js";

const num = (v) => (v === null || v === undefined || v === "" ? NaN : Number(v));

/** Priority: latitude/longitude → configured Maps URL → address text. Takes the flat card config. */
export function mapsUrl({ latitude, longitude, mapsUrl: direct, address } = {}) {
  const lat = num(latitude), lng = num(longitude);
  if (Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }
  const url = safeWebUrl(direct);
  if (url) return url;
  const text = address?.trim();
  return text ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}` : null;
}
