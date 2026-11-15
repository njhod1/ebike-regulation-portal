import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Privacy Policy | AU E-Bike Laws'
const DESCRIPTION = 'How AU E-Bike Laws handles personal information: what the site collects (almost nothing), what it does not do, and how support payments are processed.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="max-w-3xl mx-auto p-4 sm:p-6 pb-16">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mt-2 mb-6">
          <Link href="/" className="text-blue-700 hover:underline font-bold">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>Privacy policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-2">Privacy policy</h1>
        <p className="text-sm text-slate-600 mb-8">Last updated 15 November 2026.</p>

        <div className="space-y-6 text-slate-800 leading-relaxed">
          <section>
            <h2 className="text-xl font-black mb-2">Who we are</h2>
            <p>AU E-Bike Laws is an independent, free reference to Australian e-bike rules. It is a project of What The Dev (<a href="https://whatthedev.dev" className="text-blue-700 hover:underline font-bold">whatthedev.dev</a>).</p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">What this site collects</h2>
            <p>Almost nothing. There are no accounts, no sign-up forms and no advertising. The site does not set cookies of its own and does not use third-party tracking or advertising scripts.</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>The e-bike legality checker</strong> runs in your browser. The answers you choose are not sent to us or stored.</li>
              <li><strong>Your text-size choice</strong> (the A buttons in the header) is saved in your own browser so it is remembered. It is not sent to us.</li>
              <li><strong>Hosting.</strong> The site is hosted by Netlify, which processes standard technical information (such as your IP address and browser type) to deliver pages, keep the service secure and provide basic visit statistics. We use these statistics only in aggregate to see which pages are useful.</li>
              <li><strong>Search.</strong> We use Google Search Console to see which searches lead to the site. It does not identify individual visitors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">If you email us</h2>
            <p>
              If you email {CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-bold">{CONTACT_EMAIL}</a> : 'us'} we use your email address and message only to reply and, if it is about a mistake, to check and correct it. We do not sell or share it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">Support payments</h2>
            <p>
              If you choose to support the site, you are taken to a payment page run by Stripe. Your card details go directly to Stripe. We never see or store your card number. Stripe shares with us the details needed to record the payment, such as the amount and your email address for the receipt. Stripe&apos;s own privacy policy applies to the information it collects: <a href="https://stripe.com/privacy" className="text-blue-700 hover:underline font-bold">stripe.com/privacy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">Sharing and security</h2>
            <p>We do not sell personal information. We share it only with the service providers named above (Netlify, Stripe and Google Search Console) as needed to run the site. We take reasonable steps to protect information, including serving the site over HTTPS.</p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">Access and corrections</h2>
            <p>You can ask us what information we hold about you, or ask us to correct or delete it, by emailing the address above.</p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-2">Changes</h2>
            <p>If this policy changes, the date at the top will be updated.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
