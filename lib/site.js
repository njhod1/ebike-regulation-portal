// Single source of truth for the site's canonical origin. Used for metadataBase,
// canonical URLs, Open Graph/Twitter tags, JSON-LD, sitemap.xml and robots.txt.
//
// To move to a custom domain: set NEXT_PUBLIC_SITE_URL in Netlify's environment
// variables (Site configuration → Environment variables) to the new origin
// (e.g. https://ebikelaws.com.au, no trailing slash) and redeploy — no code
// changes needed. The fallback below keeps local dev and any deploy without the
// env var set pointed at the current production domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://e-bikelaws.au'

// Date the site's content was last reviewed (YYYY-MM-DD). Bump this at the end of
// each update run (see UPDATE_RUN.md). Shown on guide and state pages, used as
// dateModified in structured data and as lastModified in the sitemap.
export const LAST_REVIEWED = '2026-11-14'

export function formatReviewed(iso = LAST_REVIEWED) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

// Optional public settings. Leave blank to hide the related links; fill in either
// by editing the fallback below or by setting the matching environment variable in
// Netlify (Site configuration, Environment variables) and redeploying.
//  - SUPPORT_URL: payment page for "Support this site" (e.g. a Stripe Payment Link).
//    Use the words "support" or "contribution", not "donation".
//  - CONTACT_EMAIL: public contact address for corrections (a role address, not a
//    personal one).
export const SUPPORT_URL = process.env.NEXT_PUBLIC_SUPPORT_URL || 'https://buy.stripe.com/bJe6oB2kI64hcnj5WKdIA00'
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ebikelaws.contact@gmail.com'
