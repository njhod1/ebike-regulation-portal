# Monetisation Playbook

A project-neutral checklist for earning money from a website or app without compromising its integrity. Written for Claude (in chat or Claude Code) and for a new project's README. Project details belong in that project's own docs.

## 1. The principle
Money must never change what a site says, ranks or recommends. If it could, don't take it. Decide the model before building, and publish an independence statement you are willing to keep true.

## 2. Pick a model by project type
- **Trust content (safety, legal, health, money):** support payments, community or road-safety style grants, and clearly labelled sponsorship kept away from the facts. No ad networks (they choose the ads) and no selling leads to the people the content discusses.
- **Tools and utilities:** ads or labelled affiliate links are acceptable if they sit apart from verdicts and results.
- **Every project:** an independence statement on the About page; the word "support" (not "donation") unless you are a registered charity; any paid or affiliate content labelled and on its own page.

## 3. Set up the business once, not per project
- Use **one umbrella business** with its own real website, whose name matches the payment account (payment providers verify that the business name, website and what you sell agree, and will freeze accounts that don't).
- The umbrella site needs: business name, an accurate description of what the business does, its projects, how support payments work and a refund line, a contact email, and a **privacy policy page**.
- Do not try to make each project its own private payment identity, and never bypass verification (wrong website or business description). It fails and can freeze funds.
- Each project then says "a project of <umbrella business>" on its About page. Personal details stay private with the payment provider; use a role email address for contact.

## 4. Stripe checklist (Australia)
1. Activate the account for the umbrella business (live mode, not sandbox). Website = the umbrella site; description matches the site and says what supporters pay for.
2. Public details: business name, statement descriptor (similar to the business name or URL, e.g. `WHATTHEDEV`), shortened descriptor for per-product suffixes, support email, privacy policy URL. Terms of service URL is optional.
3. The support phone number is required and appears on supporters' bank statements (not on public pages). A virtual number can replace a personal mobile.
4. Skip paid extras at first (fraud tiers with per-payment fees, tax calculation, climate contributions, invoice PDFs, managed payments).
5. Create a **Payment Link**: type "Customers choose what to pay", AUD, one-time, suggested amount, small minimum, product category General - Services, a thank-you message, no extra data collection. Turn on customer emails for successful payments.
6. Test with a small payment from another card; check the receipt and statement show only the intended names. Refund it afterwards.
7. Check with an accountant how the income is reported (ABN/GST). This is not tax advice.

## 5. Website checklist
- Settings in code or environment, hidden while blank: `SUPPORT_URL` (the payment link) and `CONTACT_EMAIL`.
- About page: independence statement, "a project of <business>", contact and corrections, support button.
- Footer: "Support this site", privacy link. Privacy page states only what the site actually does (check the code for cookies, analytics and storage).
- Share page and printable poster for community promotion (optional, no commercial claims).

## 6. Pitfalls we hit (don't repeat)
- A creator platform (Ko-fi) added a second, confusing payment account. Go straight to the umbrella business account once its website exists.
- Stripe asked for a website matching the business name; with no website the application stalled. Build the one-page umbrella site first.
- Details shown to customers (legal name, support phone) can include personal information; review them before sharing the link.
- Anonymity and verified payments pull in opposite directions; choose the umbrella-business model deliberately.

## 7. Expectations
Small sites earn little at first. Treat support payments as covering costs and time, not as income to plan around, and grow traffic through quality first.
