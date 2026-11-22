/** Keeps "+" and digits. Converts a leading 00 to +. */
export function cleanPhone(value) {
  const s = String(value ?? "").trim().replace(/[^\d+]/g, "");
  return s.startsWith("00") ? "+" + s.slice(2) : s;
}
/** E.164: + then 8–15 digits, no leading zero. A local "010..." number is invalid on purpose. */
export const isValidPhone = (value) => /^\+[1-9]\d{7,14}$/.test(cleanPhone(value));
export const phoneDigits = (value) => cleanPhone(value).replace(/\D/g, "");
