/**
 * Joins the configured base path (e.g. "/geganters") with a site path,
 * regardless of trailing/leading slashes.
 */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Full URL (origin + base + path) for a site path. */
export function absoluteUrl(path = "/"): string {
  return new URL(withBase(path), import.meta.env.SITE).href;
}

/** Full URL for a src that is already base-prefixed (e.g. from getImage). */
export function absoluteSrc(src: string): string {
  return new URL(src, import.meta.env.SITE).href;
}
