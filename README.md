# Australian E-Bike Regulation Portal

A Next.js reference site covering Australian e-bike, e-scooter and personal mobility device (PMD) regulations for every state and territory — power/speed limits, minimum ages, footpath rules, penalties, parental liability, real-world injury/death risk data, how to report unsafe riding, enforcement notices and a compliance quiz — plus a downloadable national summary flyer.

Live site: https://e-bikelaws.au

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static generation)
- React 19
- Tailwind CSS
- Deployed on Netlify (`@netlify/plugin-nextjs`), auto-deploys on merge to `main`

## Project structure

```
app/
  page.jsx              # Homepage (hero, checker button, state cards, quick answers/FAQ, guides)
  about/page.jsx         # About (publisher, funding and independence, contact, disclaimer)
  privacy/page.jsx       # Privacy policy
  [state]/page.jsx       # Per-state page, statically generated for each slug in data/states
  is-my-ebike-legal/     # Guide pages (each its own folder with a page.jsx):
  ebike-age-limits/      #   is-my-ebike-legal (includes the legality checker),
  illegal-ebike-penalties/ #  ebike-age-limits, illegal-ebike-penalties,
  report-illegal-ebike/  #   report-illegal-ebike, ebike-law-changes.
  ebike-law-changes/     #   All built from data/states/*.js, so state updates flow through.
  share/page.jsx         # Share page: printable poster, copy-paste messages, link snippet
  layout.jsx, robots.js, sitemap.js
  llms.txt/route.js      # AI agent/LLM summary (see SEO below)

data/states/*.js         # One file per state/territory: the single source of truth for all
                          # law content (summary, key dates, penalties, quiz, enforcement
                          # notices, reporting contacts, real-risk stats, links, etc).
                          # Slugs: nsw, vic, qld, wa, sa, tas, act, nt

components/
  StatePage.jsx          # Assembles a state page from its data file
  page-sections/          # Sections of a state page (penalties, key dates, quiz, notices,
                           # seizure, reporting, real risk, parental liability, footer)
                           # FlyerTab.jsx is an inactive in-browser flyer preview (no state
                           # has flyer.available set); the PDF is linked from the footer.
  guides/                 # GuideShell, LegalityChecker, CopyBox (guide and share pages)
  nav/                    # Site nav, state selector, text-size control
  ui/                     # Shared small components (stat box, section header)
  SupportLink.jsx         # "Support this site" link (hidden while SUPPORT_URL is blank)

lib/
  site.js                 # SITE_URL, LAST_REVIEWED, SUPPORT_URL, CONTACT_EMAIL (see below)
  guides.js               # List of guide pages (home Guides section, footers, sitemap, llms.txt)
  dates.js                # Sorts key-date labels for the law-changes timeline

public/
  ebike_national_flyer.pdf     # One-page national flyer (source: National Flyer Source.txt)
  ebike_poster.pdf             # A4 community poster (source: Poster Source.html)
  ebike_poster_preview.png     # Preview image used on /share
  og-preview.png, Favicon.svg, favicon.ico, apple-touch-icon.png

National Flyer Source.txt      # LaTeX source for the national flyer (see below)
Poster Source.html             # HTML source for the poster (open in Chrome, print to PDF)

README.md                      # This file
RESEARCH_RULES.md              # Source tiers, verification, research-agent rules (shareable)
UPDATE_RUN.md                  # Reusable brief for a full content update run
MONETISATION.md                # Monetisation playbook (shareable)
```

## Updating state law content

Each state/territory is a single data object in `data/states/<slug>.js`, imported and rendered by `components/StatePage.jsx`. There is no schema validation on these files — a wrong field name is a silent `undefined` at best and a build-breaking crash at worst (see **Field shapes matter** below) — so match the shapes already used by an existing state exactly, and always build before merging (see **Before committing**).

1. Edit the relevant fields in `data/states/<slug>.js` — `summary`, `alertBanner`, `stats`, `keyDates`, `compliance`, `seizure`, `reporting`, `realRisk`, `penalties`, `footpathRule`, `minimumAge`, `parentalLiability`, `quiz`, `notices`, `links`.
2. `notices` is the enforcement/news feed rendered by `EnforcementNotices.jsx` — add a dated entry with `title`, `text` and a source `url` for any new government bulletin, enforcement operation, or safety notice.
3. Run `npm run build` (not just `npm run dev`) and confirm all 8 state pages generate before committing — see **Before committing**.

### Field shapes that matter

A few nested fields are read by name in the components, so a typo or a different key silently breaks (or crashes) the page:

- `compliance.gracePeriod` — when `exists: true`, must include a `text` field (HTML string, rendered via `dangerouslySetInnerHTML` in `ComplianceStickerSection.jsx`). **Not** `description` or `deadline` — that mismatch is exactly what broke `/qld`'s production build for several deploys: an `undefined` value there crashes `next build` while prerendering, not just renders blank.
- `compliance.enStandard` — `mandatoryFromDate` (string or `null`) and `text`.
- `compliance.powerLimitW` (optional, number, default `250`) — the rated-power threshold used in the sticker headings in `ComplianceStickerSection.jsx`. `compliance.powerLimitNote` (optional string) — a plain-text note shown under the red box on that state's page only (NSW uses both for its 500 W class until 28 Feb 2029).
- `seizure` — when `show: true`, must include `billName` and `description` (both used directly, not `text`).
- `reporting` — `policeNonEmergency` (string or `null` if unconfirmed), `policeOnlineForm` (`{ label, url }` or `null`), `fairTrading` (`{ label, url, phone }`, `phone` optional). Rendered by `ReportingSection.jsx` on every state page; Crime Stoppers (1800 333 000) is hardcoded there since it's the same national number for every state. **Don't guess a phone number or reporting URL for this section** — it's safety-adjacent content, and a wrong number is worse than a missing one. Verify against the state's official police/consumer-affairs site first; if you can't verify a field, leave it `null` rather than publish a guess. (NT's `policeNonEmergency` was left `null` for this reason until a later pass confirmed 131 444 — the same harmonised Police Assistance Line used by ACT, NSW, VIC, WA and SA — against nt.gov.au.)
- `realRisk` (optional) — `{ stat, detail, url }`, `url` optional. Rendered by `RealRiskSection.jsx` on every state page, above `keyDates`; the national baseline text (NRMA's 15+ deaths in 2025, a University of Melbourne study's 37 fatal e-scooter incidents 2020–2025, the AIHW's first national hospitalisation report (Oct 2026), the AMA's injury description) is hardcoded there since it's the same fact everywhere. `realRisk` adds one state-specific highlight on top, sourced to official/health-department data where available (NSW: Transport for NSW; VIC: Monash Accident Research Centre; QLD: Queensland Health, tabled in Parliament; WA: the parliamentary Ride Safe inquiry; SA: SA Police via RAA; ACT: Canberra Hospital vs. official ED-coding figures; TAS: AIHW) — present on all 8 states. TAS's comes from the AIHW's first national hospital-data report (Oct 2026): a state rate for the transport group that includes e-bikes (motorised bicycles, mopeds, motor scooters), worded as an upper bound because the data can't yet separate e-bikes from petrol mopeds. TAS was previously left blank deliberately because no credible state-specific figure existed; don't pad a state's `realRisk` with a weak stat if a future review finds a better one missing.
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
- A story involving a **named private individual** (not an org/official spokesperson) → be careful. Only use it if the person (or their family) has already gone public specifically to advocate for a policy position — frame it around that advocacy, the same editorial pattern as the AMA/peak-body quotes, not as an injury statistic. It belongs in `notices`, never in `realRisk` (that section is for aggregate data only — see **Field shapes that matter** above). If it's just a private tragedy with no public advocacy angle, leave it out.
- Pure **commentary/opinion** with no rule or operation attached → usually skip, unless it's significant enough to be genuinely newsworthy on its own (judgement call).

For source ranking, verification rules and how to brief research agents, see **RESEARCH_RULES.md**. To run a full update, see **UPDATE_RUN.md**. Optional public settings (`SUPPORT_URL` for the "Support this site" link, `CONTACT_EMAIL` for the About-page contact line) live in `lib/site.js`; leave blank to hide them, or set `NEXT_PUBLIC_SUPPORT_URL` / `NEXT_PUBLIC_CONTACT_EMAIL` in Netlify. For the monetisation approach and Stripe setup, see **MONETISATION.md**. The About page carries the funding and independence statement (no ads, sponsored content or affiliate links); keep it true. Guide pages under `app/` (is-my-ebike-legal, ebike-age-limits, illegal-ebike-penalties, report-illegal-ebike, ebike-law-changes) are built from the state data; `lib/guides.js` lists them (plus `/share`, which offers the printable poster `public/ebike_poster.pdf` and copy-paste messages). The poster source is `Poster Source.html`: open it in Chrome, Print, A4, margins None, Background graphics on, Save as PDF to `public/ebike_poster.pdf`, then refresh `public/ebike_poster_preview.png` (`pdftoppm -png -r 100 -singlefile public/ebike_poster.pdf public/ebike_poster_preview`). Its QR code points to `/is-my-ebike-legal` and `LAST_REVIEWED` in `lib/site.js` is bumped each run.

**The update itself, every time:**
1. Identify which state(s) it affects and which category above it falls into.
2. Edit the relevant fields in `data/states/<slug>.js` — see **Field shapes that matter** above for the exact keys each component expects.
3. If it's significant enough to affect the national picture (a new universal rule, a state comparison table row, a national penalty figure), also update `National Flyer Source.txt` and regenerate the PDF — see **National flyer (PDF)** below.
4. `npm run build` — mandatory, not optional (see **Before committing** above).
5. Commit → PR → merge, so there's a reviewable history and an easy rollback if something's wrong.
6. Spot-check the live page once deployed.

## National flyer (PDF) and poster

`public/ebike_national_flyer.pdf` is a one-page, two-column A4 summary compiled from `National Flyer Source.txt` (LaTeX). To regenerate it after a law change:

```bash
cp "National Flyer Source.txt" "National Flyer Source.tex"
xelatex -interaction=nonstopmode "National Flyer Source.tex"
cp "National Flyer Source.pdf" public/ebike_national_flyer.pdf
rm -f "National Flyer Source.tex" "National Flyer Source.aux" "National Flyer Source.log" "National Flyer Source.out"
```

Requires a TeX distribution with `xelatex` and the packages used in the source (`tcolorbox`, `titlesec`, `qrcode`, `amssymb`, etc.) and the Noto Sans font. Keep the flyer to a single page — check the compiled output visually (e.g. render to PNG) after any edit, since the two-column layout is sensitive to content length changes.

The A4 community poster is built the same way from `Poster Source.html` (open in Chrome, Print, A4, margins None, Background graphics on, Save as PDF to `public/ebike_poster.pdf`; refresh the preview with `pdftoppm -png -r 100 -singlefile public/ebike_poster.pdf public/ebike_poster_preview`). Its QR code points to `/is-my-ebike-legal`. It carries no dates, so it doesn't go stale; update it when the national rules change.

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
- Home page and state pages are titled around the question people search ("Is My E-Bike Legal in <state>?"), the home page has a Quick answers section with matching `FAQPage` JSON-LD, and five guide pages (see `lib/guides.js`) each target one question with their own title, description, canonical and `WebPage` + `BreadcrumbList` JSON-LD with `dateModified`.
- `LAST_REVIEWED` in `lib/site.js` is the date content was last reviewed. It drives the visible "Information last reviewed" line, structured-data `dateModified` and the sitemap `lastModified`. Bump it at the end of every update run (see `UPDATE_RUN.md`).
- `sitemap.xml` and `robots.txt` are generated from `ALL_STATES`, so a new state added to `data/index.js` is picked up automatically. The guide pages are automatic via `lib/guides.js`; other static pages (`/about`, `/privacy`) are **not** — add them to `app/sitemap.js` by hand.
- Open Graph/Twitter card image (`public/og-preview.png`, 1200×630) and icons (`public/Favicon.svg`, `favicon.ico`, `apple-touch-icon.png`) are set site-wide via `app/layout.jsx`'s `metadata.icons`, with a per-state `ogImage` override available in `seo`.
- `app/llms.txt/route.js` serves an [llms.txt](https://llmstxt.org/) summary for AI agents/LLMs — a Next.js route handler (not a static file in `public/`) so it can use `SITE_URL` and pull each state's `summary` live from `data/states/*.js`, the same auto-sync pattern as `sitemap.xml`. `dynamic = 'force-static'` is set explicitly since Next.js 15 no longer statically optimizes route handlers by default. This is an emerging, non-standard convention (not a search ranking factor) — low priority, but cheap to keep accurate since it's generated, not hand-written.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run lint      # ESLint
```

## Disclaimer

Content is for educational purposes only and is not legal advice. Regulations change frequently — always verify against the current legislation and official state transport authority guidance linked from each state page.
