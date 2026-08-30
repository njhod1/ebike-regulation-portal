# Australian E-Bike Regulation Portal

A Next.js reference site covering Australian e-bike, e-scooter and personal mobility device (PMD) regulations for every state and territory — power/speed limits, minimum ages, footpath rules, penalties, parental liability, enforcement notices and a compliance quiz — plus a downloadable national summary flyer.

Live site: https://australia-ebike-laws.netlify.app

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
- `seizure` — when `show: true`, must include `billName` and `description` (both used directly, not `text`); `fairTradingLink` is optional (`null` if none).
- `keyDates[]` — `date`, `color`, `text`.
- `notices[]` — `date`, `title`, `text`, `url`.
- `quiz[]` — `id`, `question`, `info`.
- `penalties[]` — `label`, `cost`, `desc`.

### Before committing

`npm run build` is the closest local equivalent to what Netlify actually runs — `npm run dev` alone does not reliably catch a prerender-time crash. Always run a full build after editing `data/states/*.js`, and check that **all 8 state routes** appear in the output (`/nsw`, `/vic`, `/qld`, `/wa`, `/sa`, `/tas`, `/act`, `/nt`) with no `Error occurred prerendering page` lines above them.

## National flyer (PDF)

`public/ebike_national_flyer.pdf` is a one-page, two-column A4 summary compiled from `National Flyer Source.txt` (LaTeX). To regenerate it after a law change:

```bash
cp "National Flyer Source.txt" "National Flyer Source.tex"
xelatex -interaction=nonstopmode "National Flyer Source.tex"
cp "National Flyer Source.pdf" public/ebike_national_flyer.pdf
rm -f "National Flyer Source.tex" "National Flyer Source.aux" "National Flyer Source.log" "National Flyer Source.out"
```

Requires a TeX distribution with `xelatex` and the packages used in the source (`tcolorbox`, `titlesec`, `qrcode`, `amssymb`, etc.) and the Noto Sans font. Keep the flyer to a single page — check the compiled output visually (e.g. render to PNG) after any edit, since the two-column layout is sensitive to content length changes.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run lint      # ESLint
```

## Disclaimer

Content is for educational purposes only and is not legal advice. Regulations change frequently — always verify against the current legislation and official state transport authority guidance linked from each state page.
