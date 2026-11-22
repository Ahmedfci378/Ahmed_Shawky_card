import { isValidPhone, phoneDigits } from "./phone.js";

export function whatsappUrl(phone, message) {
  if (!isValidPhone(phone)) return null;
  const text = message?.trim();
  return `https://wa.me/${phoneDigits(phone)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}
