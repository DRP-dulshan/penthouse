/**
 * Absolute origin for canonical + Open Graph URLs.
 *
 * WhatsApp, Facebook and X all require absolute image URLs to render a link
 * preview, so this must match wherever the page is actually deployed.
 * Override at build time with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dubairapidproperties.com'
).replace(/\/$/, '');

export const absoluteUrl = (path: string) => `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
