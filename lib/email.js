const EMAIL = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;

export const isValidEmail = (v) => EMAIL.test(String(v ?? "").trim());

export function mailtoUrl(email, { subject, body } = {}) {
  if (!isValidEmail(email)) return null;
  const params = [];
  if (subject?.trim()) params.push(`subject=${encodeURIComponent(subject.trim())}`);
  if (body?.trim()) params.push(`body=${encodeURIComponent(body.trim().replace(/\r?\n/g, "\r\n"))}`);
  return `mailto:${String(email).trim()}${params.length ? "?" + params.join("&") : ""}`;
}
