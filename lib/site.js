// Single source of truth for the site's canonical origin. Used for metadataBase,
// canonical URLs, Open Graph/Twitter tags, JSON-LD, sitemap.xml and robots.txt.
//
// To move to a custom domain: set NEXT_PUBLIC_SITE_URL in Netlify's environment
// variables (Site configuration → Environment variables) to the new origin
// (e.g. https://ebikelaws.com.au, no trailing slash) and redeploy — no code
// changes needed. The fallback below keeps local dev and any deploy without the
// env var set pointed at the current production domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://e-bikelaws.au'
