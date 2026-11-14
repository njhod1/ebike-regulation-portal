# Update Run: e-bikelaws.au

How to run a content update for this site in one pass. To start a run, tell Claude Code (local, with a real browser): **"Run the update per UPDATE_RUN.md."** It should work to completion and stop only at the stop conditions below.

Read `RESEARCH_RULES.md` first (sources, verification, agents). This file is the project-specific brief.

## Scope
The site answers four questions: is the bike I'm buying my child legal; what laws have changed; what makes a bike legal or illegal; what happens if my child has an accident on an illegal bike. Only laws, enforcement, official statistics and official statements that serve those questions. No new sections, pages or explainers. Keep notices short and plain. Skip single incidents with no policy angle, minors' cases and individuals' pending charges.

## Setup
`git checkout main && git pull`, `npm install`. Use the real browser for sites that block fetches. A cloud sandbox cannot open official sites, so don't run this there.

## Method
1. About five parallel subagents: NSW, VIC, QLD, WA, SA/TAS/ACT/NT. Brief each with scope, the date window (since the last run), what is already on the site (read `data/states/*.js`), the source rules and the output format (exact date, one-paragraph summary, source URL, keyDates vs notices).
2. Agents report; you check. Re-open key sources yourself. An agent result under a couple of minutes, or one that never opened a primary source, is not a result.
3. Edit `data/states/*.js` (keyDates for laws in force, notices for enforcement/statements, each with a source URL you opened, newest first).
4. `npm run build`. If anything changes the national picture, check `National Flyer Source.txt` and rebuild the PDF (xelatex twice, render to PNG, confirm exactly 1 page).
5. New branch, PR to main. Put what you opened per item in the PR description. Don't merge unless the owner says so.

## Standing checklist
- Verify every "in force" legal threshold against the current version of the legislation, not news. (We once published NSW's 250W limit as in force from 1 Mar 2026; the Road Rules still allow 500W until 28 Feb 2029.)
- Open leads: NSW minimum-age decision; SA e-scooter/PMD review findings; Victorian petition #758 and Energy Safe Victoria battery decision; WA Ride Safe legislation and City of Perth e-scooter hire; QLD assurance scheme (verifier list, any start-date statement); NT (no reform found to mid-Nov 2026); ACCC national e-bike standard.
- Dated items to fix when they pass: the flyer's ACCC line and the federal notice on every state ("closing 30 Nov 2026" becomes "closed 30 Nov 2026, recommendations due early 2027"); the flyer "current as at" month.
- Run roughly monthly. In between, check Search Console for the queries people use.

## Stop conditions
Stop and report only if: a source can't be verified, sources conflict, or something is out of scope. Otherwise finish the run.

## Final report (five lines, pasteable)
What changed; what you verified (and what you opened); anything unresolved; PR number; whether the flyer is still 1 page.

## Lessons from the first runs
- Cloud sessions can't open most official sites; local sessions with a real browser can. Do runs locally.
- One brief to completion beats repeated "report, wait, approve" rounds. Reserve "report first" for uncertain legal claims.
- Secondary summaries (including national health reports) can be wrong; the primary page wins.
- "Announced" is not "in force". Check commencement.
- Don't publish process commentary in site text; caveats belong in the PR description.
- Keep the parental-liability wording simple and hedged ("can", "may"); it is general information, not legal advice.
