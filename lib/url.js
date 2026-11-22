const ALLOWED = ["https:", "http:", "tel:", "mailto:"];

/** Generic allow-list check (kept for existing callers such as the vCard builder). */
export function safeUrl(value) {
  try {
    return ALLOWED.includes(new URL(value).protocol) ? value : null;
  } catch {
    return null;
  }
}

/**
 * For anything that opens in a new tab: http(s) only.
 * "example.com" becomes "https://example.com/". javascript:, data:, etc. return null.
 */
export function safeWebUrl(value) {
  if (!value) return null;
  let v = String(value).trim();
  if (!/^[a-z][a-z0-9+.-]*:/i.test(v)) v = "https://" + v.replace(/^\/\//, "");
  try {
    const u = new URL(v);
    const okProtocol = u.protocol === "https:" || u.protocol === "http:";
    return okProtocol && u.hostname.includes(".") ? u.href : null;
  } catch {
    return null;
  }
}

/** Images: a local path ("/cards/...") or http(s) URL. Anything else (data:, javascript:, "//host") is rejected. */
export function safeImageSrc(value) {
  if (!value) return null;
  const v = String(value).trim();
  if (v.startsWith("/") && !v.startsWith("//")) return v;
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch {
    return null;
  }
}
