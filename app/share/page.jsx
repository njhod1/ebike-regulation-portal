import Link from 'next/link'
import GuideShell from '@/components/guides/GuideShell'
import CopyBox from '@/components/guides/CopyBox'
import { SITE_URL } from '@/lib/site'

const PATH = '/share'
const TITLE = 'Share This: Free E-Bike Safety Poster and Messages for Parents'
const DESCRIPTION = 'Print a free A4 poster and copy a ready-made message to help other parents check an e-bike is legal, for school newsletters, sports clubs and community groups.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
}

const CHECK_URL = `${SITE_URL}/is-my-ebike-legal`

const groupPost = `Thinking of buying an e-bike for your child? A legal e-bike has pedals, a motor of 250W or less (NSW allows 500W until 28 Feb 2029) and assistance that cuts out at 25 km/h. Illegal e-bikes can be seized and destroyed, and if an underage rider seriously injures someone on one, the injured person's lawyers can look to the parents. Check yours in 30 seconds: ${CHECK_URL}`

const newsletter = `E-bike safety for families. Before you buy an e-bike for your child, check it is legal. A legal e-bike has pedals, a motor of 250W or less (NSW allows 500W until 28 Feb 2029) and assistance that cuts out at 25 km/h. Illegal or modified e-bikes can be seized and destroyed in NSW and Queensland, and age rules differ by state. If a child seriously injures someone on an illegal e-bike, care costs can run into millions, and the injured person's lawyers can look to the parents. A free guide with the rules for every state is at ${SITE_URL}`

const short = `Is your child's e-bike legal? Check in 30 seconds: ${CHECK_URL}`

const linkHtml = `<a href="${CHECK_URL}">Is my e-bike legal? Australian e-bike rules by state</a>`

export default function Page() {
  return (
    <GuideShell
      path={PATH}
      title={TITLE}
      name="Share this: help other parents check an e-bike is legal"
      description={DESCRIPTION}
      intro="Many parents don't know the rules until something goes wrong. Print the poster, or copy a message for your school, sports club or community group. Everything here is free to use."
    >
      <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 mb-8" aria-labelledby="poster">
        <h2 id="poster" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Print the poster</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ebike_poster_preview.png"
            alt="Poster headed 'Is your child's e-bike legal?' with the rules for a legal and an illegal e-bike, age rules, a warning about parents' financial risk and a QR code to e-bikelaws.au"
            width="827"
            height="1170"
            loading="lazy"
            className="w-full max-w-sm mx-auto border border-slate-200 rounded-lg shadow-sm"
          />
          <div>
            <a href="/ebike_poster.pdf" download className="inline-block bg-emerald-700 text-white font-black uppercase tracking-wide rounded-full px-6 py-3 hover:bg-emerald-800">
              Download poster (A4 PDF)
            </a>
            <p className="text-slate-800 leading-relaxed mt-4">
              Print on A4 in colour or black and white. The QR code links to the e-bike legality checker.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-800 leading-relaxed mt-3">
              <li>Ask permission before pinning it up.</li>
              <li>Good places: school and sports club noticeboards, libraries, community halls and local shops.</li>
              <li>Prefer the full reference? Download the <a href="/ebike_national_flyer.pdf" download className="text-blue-700 hover:underline font-bold">one-page national flyer</a>.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="messages">
        <h2 id="messages" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Copy a message</h2>
        <div className="space-y-4">
          <CopyBox label="For a parents' Facebook group or community page" text={groupPost} rows={9} />
          <CopyBox label="For a school or club newsletter" text={newsletter} rows={11} />
          <CopyBox label="Short version for a text or chat message" text={short} rows={3} />
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8" aria-labelledby="link-us">
        <h2 id="link-us" className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-3">Run a website or newsletter?</h2>
        <p className="text-slate-800 leading-relaxed mb-4">
          You are welcome to link to the <Link href="/is-my-ebike-legal" className="text-blue-700 hover:underline font-bold">legality checker</Link>. Here is a ready-made link:
        </p>
        <CopyBox label="Link (HTML)" text={linkHtml} rows={4} />
        <p className="text-slate-700 leading-relaxed mt-4">
          Teachers, club committees and council staff: please feel free to pass these on. The rules change, so link to the page and don&apos;t copy the figures.
        </p>
      </section>
    </GuideShell>
  )
}
