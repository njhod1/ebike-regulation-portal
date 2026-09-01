# Australian E-Bike Regulation Portal

A Next.js reference site covering Australian e-bike, e-scooter and personal mobility device (PMD) regulations for every state and territory — power/speed limits, minimum ages, footpath rules, penalties, parental liability, enforcement notices and a compliance quiz — plus a downloadable national summary flyer.

Live site: https://e-bikelaws.au

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static generation)
- React 19
- Tailwind CSS
- Deployed on Netlify (`@netlify/plugin-nextjs`), auto-deploys on merge to `main`

## Project structure

```
app/
  page.jsx            # Homepage
  [state]/page.jsx     # Per-state page, statically generated for each slug in data/states
  layout.jsx, robots.js, sitemap.js

data/states/*.js       # One file per state/territory — the single source of truth for all
                        # law content (summary, key dates, penalties, quiz, enforcement
                        # notices, links, etc). Slugs: nsw, vic, qld, wa, sa, tas, act, nt

components/
  StatePage.jsx         # Assembles a state page from its data file
  page-sections/         # Individual sections (penalties grid, key-dates timeline,
                          # compliance quiz, enforcement notices, seizure powers,
                          # parental liability, statutory footer, flyer tab)
  nav/                   # Site nav + state selector
  ui/                    # Shared small components (stat box, section header)

public/
  ebike_national_flyer.pdf   # Compiled national summary flyer, linked from FlyerTab.jsx

National Flyer Source.txt    # LaTeX source for the national flyer PDF (see below)

lib/site.js                  # SITE_URL — the single source of truth for the site's
                              # origin, used everywhere a full URL is needed (see
                              # Custom domain below)
```

## Updating state law content

Each state/territory is a single data object in `data/states/<slug>.js`, imported and rendered by `components/StatePage.jsx`. There is no schema validation on these files — a wrong field name is a silent `undefined` at best and a build-breaking crash at worst (see **Field shapes matter** below) — so match the shapes already used by an existing state exactly, and always build before merging (see **Before committing**).

1. Edit the relevant fields in `data/states/<slug>.js` — `summary`, `alertBanner`, `stats`, `keyDates`, `compliance`, `seizure`, `penalties`, `footpathRule`, `minimumAge`, `parentalLiability`, `quiz`, `notices`, `links`.
2. `notices` is the enforcement/news feed rendered by `EnforcementNotices.jsx` — add a dated entry with `title`, `text` and a source `url` for any new government bulletin, enforcement operation, or safety notice.
3. Run `npm run build` (not just `npm run dev`) and confirm all 8 state pages generate before committing — see **Before committing**.

### Field shapes that matter

A few nested fields are read by name in the components, so a typo or a different key silently breaks (or crashes) the page:

- `compliance.gracePeriod` — when `exists: true`, must include a `text` field (HTML string, rendered via `dangerouslySetInnerHTML` in `ComplianceStickerSection.jsx`). **Not** `description` or `deadline` — that mismatch is exactly what broke `/qld`'s production build for several deploys: an `undefined` value there crashes `next build` while prerendering, not just renders blank.
- `compliance.enStandard` — `mandatoryFromDate` (string or `null`) and `text`.
- `seizure` — when `show: true`, must include `billName` and `description` (both used directly, not `text`).
- `reporting` — `policeNonEmergency` (string or `null` if unconfirmed — see below), `policeOnlineForm` (`{ label, url }` or `null`), `fairTrading` (`{ label, url, phone }`, `phone` optional). Rendered by `ReportingSection.jsx` on every state page; Crime Stoppers (1800 333 000) is hardcoded there since it's the same national number for every state. **Don't guess a phone number or reporting URL for this section** — it's safety-adjacent content, and a wrong number is worse than a missing one. Verify against the state's official police/consumer-affairs site first; if you can't verify a field, leave it `null` rather than publish a guess (this is why NT's `policeNonEmergency` is currently `null`).
- `keyDates[]` — `date`, `color`, `text`.
- `notices[]` — `date`, `title`, `text`, `url`.
- `quiz[]` — `id`, `question`, `info`.
- `penalties[]` — `label`, `cost`, `desc`.

### Before committing

`npm run build` is the closest local equivalent to what Netlify actually runs — `npm run dev` alone does not reliably catch a prerender-time crash. Always run a full build after editing `data/states/*.js`, and check that **all 8 state routes** appear in the output (`/nsw`, `/vic`, `/qld`, `/wa`, `/sa`, `/tas`, `/act`, `/nt`) with no `Error occurred prerendering page` lines above them.

## Content update workflow

State e-bike/e-scooter law changes fast and unpredictably — there's no fixed schedule to update against, so this is a "when you hear about something" process, not a recurring job.

**Finding out something changed:** the durable option is [Google Alerts](https://google.com/alerts) rather than relying on any single AI session to monitor continuously (scheduled/cron-style checks in an assistant session are bounded — they don't survive past that session). Set up alerts for a handful of queries: `e-bike laws Australia`, plus one per state (`NSW e-bike seizure`, `QLD e-mobility law`, `VIC e-scooter enforcement`, etc.). They land by email as things get published, at no cost and no ongoing maintenance.

**Triage — how urgent, and what actually needs to change:**
- A law newly **in force** (not just proposed) → update `summary`, `alertBanner`, `stats`, `minimumAge`/`compliance`/`seizure` as relevant, and add a `keyDates` entry.
- A **proposed** bill or inquiry recommendation → usually just a `keyDates` entry (color `amber`/`slate`), not a change to the "current rules" fields yet.
- An **enforcement operation, penalty change, or notable incident/statement** (e.g. a police operation, a peak-body statement like AMA Queensland's) → a `notices` entry, always with a source `url`.
- Pure **commentary/opinion** with no rule or operation attached → usually skip, unless it's significant enough to be genuinely newsworthy on its own (judgement call).

**The update itself, every time:**
1. Identify which state(s) it affects and which category above it falls into.
2. Edit the relevant fields in `data/states/<slug>.js` — see **Field shapes that matter** above for the exact keys each component expects.
3. If it's significant enough to affect the national picture (a new universal rule, a state comparison table row, a national penalty figure), also update `National Flyer Source.txt` and regenerate the PDF — see **National flyer (PDF)** below.
4. `npm run build` — mandatory, not optional (see **Before committing** above).
5. Commit → PR → merge, so there's a reviewable history and an easy rollback if something's wrong.
6. Spot-check the live page once deployed.

## National flyer (PDF)

`public/ebike_national_flyer.pdf` is a one-page, two-column A4 summary compiled from `National Flyer Source.txt` (LaTeX). To regenerate it after a law change:

```bash
cp "National Flyer Source.txt" "National Flyer Source.tex"
xelatex -interaction=nonstopmode "National Flyer Source.tex"
cp "National Flyer Source.pdf" public/ebike_national_flyer.pdf
rm -f "National Flyer Source.tex" "National Flyer Source.aux" "National Flyer Source.log" "National Flyer Source.out"
```

Requires a TeX distribution with `xelatex` and the packages used in the source (`tcolorbox`, `titlesec`, `qrcode`, `amssymb`, etc.) and the Noto Sans font. Keep the flyer to a single page — check the compiled output visually (e.g. render to PNG) after any edit, since the two-column layout is sensitive to content length changes.

Note: the domain is hardcoded in the flyer's QR code and URL text (it's a static PDF, not part of the Next.js build, so `NEXT_PUBLIC_SITE_URL` doesn't reach it) — update and recompile it manually after a domain change, see **Custom domain** below.

## Custom domain

The site's origin is read from `NEXT_PUBLIC_SITE_URL` (see `lib/site.js`), which every canonical URL, Open Graph/Twitter tag, JSON-LD block, `sitemap.xml`, and `robots.txt` derives from. It falls back to `https://e-bikelaws.au` (the current production domain) when unset.

The site moved from `australia-ebike-laws.netlify.app` to `e-bikelaws.au` in Aug 2026: registered via Webcentral, DNS delegated to Netlify DNS (nameservers, not manual A/CNAME records — simpler and gives full CDN benefit for the apex domain), `NEXT_PUBLIC_SITE_URL` set in Netlify, and a new Google Search Console **Domain property** verified via DNS TXT record (more robust than the old per-URL meta tag method — one property covers `http`/`https`/`www`/non-`www` and survives future hosting changes). The `google-site-verification` meta tag still in `app/layout.jsx` is a leftover from the old domain's separate GSC property; it's inert now and can be ignored or removed.

To move to a different custom domain again in future:

1. Buy the domain from any registrar — no need to register it through Netlify.
2. In Netlify: **Site configuration → Domain management → Add a domain**, then **Set up Netlify DNS** for it (recommended over manual A/CNAME records) and update the domain's nameservers at the registrar to the four Netlify gives you.
3. In Netlify: **Site configuration → Environment variables**, set `NEXT_PUBLIC_SITE_URL` to the new domain (no trailing slash), then trigger a redeploy. No code changes needed — also update the fallback in `lib/site.js` to match, so local dev and any deploy without the env var set still points at the right place.
4. Google Search Console → **Add property → Domain** → verify via the DNS TXT record it gives you (add it in Netlify's DNS records panel) → submit `sitemap.xml` under **Sitemaps**.
5. Regenerate `National Flyer Source.txt`'s QR code and URL text by hand (it's a compiled PDF, not part of the Next.js build, so it doesn't pick up the env var) — see **National flyer (PDF)** below.

## SEO

- Every page has a unique `<title>` (kept under 60 characters so Google doesn't truncate it) and meta description (under 160 characters) — see each state's `seo.title`/`seo.description` in `data/states/<slug>.js`. State page titles use `title: { absolute: seo.title }` in `generateMetadata` specifically to bypass the root layout's `%s | AU E-Bike Laws` template, which was silently appending 17 characters to every state title before this was caught.
- `metadataBase` (root layout) plus relative `alternates.canonical`/`openGraph.url` values mean every page's canonical and OG URLs resolve correctly without hardcoding the domain per-page.
- JSON-LD: `WebSite` schema on the homepage, `WebPage` + `BreadcrumbList` + `FAQPage` (from each state's `quiz`) on every state page.
- `sitemap.xml` and `robots.txt` are generated from `ALL_STATES`, so a new state added to `data/index.js` is picked up automatically.
- Open Graph/Twitter card image (`public/og-preview.png`, 1200×630) and favicon (`public/Favicon.svg`) are set site-wide with a per-state `ogImage` override available in `seo`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run lint      # ESLint
```

## Disclaimer

Content is for educational purposes only and is not legal advice. Regulations change frequently — always verify against the current legislation and official state transport authority guidance linked from each state page.
