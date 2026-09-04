import { ALL_STATES } from '@/data/index.js'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export async function GET() {
  const stateLines = ALL_STATES
    .map(s => `- [${s.name}](${SITE_URL}${s.seo.canonicalPath}): ${s.summary}`)
    .join('\n')

  const content = `# AU E-Bike Laws

> Independent, plain-English reference tracking e-bike, e-scooter and personal mobility device (PMD) regulations across every Australian state and territory — power/speed limits, minimum ages, footpath rules, penalties, parental liability, and enforcement notices. Not affiliated with any Australian government, transport authority, or police service. Not legal advice — always verify against the official sources linked from each state page before relying on this content.

## State & Territory Guides

${stateLines}

## Resources

- [About this site](${SITE_URL}/about): publisher identity, sourcing methodology, and disclaimer
- [National compliance flyer (PDF)](${SITE_URL}/ebike_national_flyer.pdf): one-page summary covering the national standard, a state-by-state comparison table, and typical penalties
`

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
