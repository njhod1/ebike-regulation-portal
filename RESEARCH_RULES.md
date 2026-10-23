# Research Rules

How to research, source and publish facts on a content site where accuracy matters (laws, safety, health, money). Written for Claude, in chat or in Claude Code. Project-specific details (file names, data fields, build steps) belong in that project's own README or CLAUDE.md, not here.

## 1. Source tiers

1. **Primary and official.** Government legislation and department pages, police and regulator media releases, health departments, statistics agencies (e.g. AIHW, ABS), coroners, parliamentary records, court listings. Use these for anything that is a law, number or official statement.
2. **Credible secondary.** Major news outlets (ABC, The Guardian, national mastheads), peak bodies and universities (AMA, RACV, Monash, University of Melbourne), established advocacy organisations. Fine for context and for reporting what an official body announced, but link the primary source as well where one exists.
3. **Skip.** Single-incident stories with no policy, enforcement or advocacy angle; unsourced social posts; forums; AI-generated summaries; commercial "guide" sites as the only support for a legal fact.

If only a tier-3 source supports a claim, don't publish it.

## 2. Verify by opening the source

- Read the actual page, not just a search snippet or a headline. Check each date, number and quote against the text.
- Cross-check anything important against a second independent source.
- If a site can't be opened (blocked, paywalled, 403), say so, and say what the claim rests on instead. Do not present a snippet-based claim as verified.
- Secondary summaries can be wrong. If a secondary source disagrees with the primary page, the primary page wins, and the discrepancy is worth noting. (Example: a national health report's summary table gave a state footpath age as 12; the state police page said 13, and the site was right.)

## 3. Never guess

- Phone numbers, URLs, statistics, dates, legal thresholds and penalties are safety-critical. If you can't verify one, leave the field empty (`null`) or omit it. A missing fact is better than a wrong one.
- Don't build a URL from a guessed path. Use links you have actually seen, or links derived directly from a confirmed one, and say which.
- Don't round, infer or "tidy" figures. If sources vary slightly (e.g. 2,400 vs 2,486), use the primary release's figure, or say "about".
- Distinguish a bill being introduced, passed, assented and in force. Use the date it took effect for "in force" claims.

## 4. What belongs on the site

- A new law in force, a penalty change, an enforcement operation with results, an official report or statistic, a significant statement by an official or peak body: yes, with a source link.
- Pure commentary or opinion with no rule or operation attached: usually skip.
- **Named private individuals:** only if the person (or their family) has publicly advocated for a policy change. Frame it around that advocacy. Never use it as an injury statistic. A private tragedy with no advocacy angle is left out.
- **Pending criminal matters:** report the operation or policy angle, not the individual's charges.
- **Corrections:** when a newer or final figure supersedes one already published, replace it, and fix any cross-references to it. Don't repeat items already covered.

## 5. Using research agents

Research agents (subagents) are good for fanning out: one per state, region or topic, run in parallel and in the background.

**Brief each agent with:**
- The goal and why it matters (a freshness check on a specific page, not "research X").
- The scope (jurisdiction or topic) and the date window ("published since 1 October; today is 16 October").
- What is already covered, so it doesn't re-report it. A short list is enough.
- The source tiers from section 1, and what to exclude.
- The output format: for each item, the exact date, a one-paragraph summary, the source URL, and which part of the site it belongs in. "If nothing new, say so clearly."
- That it must not guess, and must flag anything it couldn't open directly.

**Then check the results yourself:**
- Agents can take shortcuts. A "nothing new" result in under a couple of minutes is suspect; ask what was actually opened.
- Re-verify anything you intend to publish against the primary source.
- Watch for confident but wrong details (e.g. an Act number or assent date borrowed from another state). Anything the agent couldn't open should be removed or marked unverified.
- Agents that edit files directly need their diffs reviewed before anything is committed. Prefer having agents report findings and making the edits yourself.

**Recommended size:** a handful of agents (about 5 for 8 states, with small jurisdictions grouped). More isn't better.

## 6. Workflow

1. Research and triage: what is new, what is already covered, what needs correcting.
2. Edit the content, following the project's own field rules.
3. Build or validate, and look at the result (render pages, check the layout at phone width where relevant).
4. Commit on a branch and open a PR with a plain summary: what's new, what was corrected, which areas had nothing, and anything that rests on weaker sources.
5. Wait for approval before merging. Merge only when told to.
6. After merging, confirm the live site matches (deploy finished, page shows the change).

## 7. Report format

When reporting back, give the user: new items by area, corrections, and anything that could not be verified and why. Say what was actually opened for each area, not just the conclusion. Flag weak spots plainly so the user can decide.
