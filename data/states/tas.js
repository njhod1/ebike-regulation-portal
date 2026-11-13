export const tas = {
  name: 'Tasmania',
  slug: 'tas',
  abbreviation: 'TAS',
  summary: '250W limit. No minimum age. Adults allowed on footpaths.',

  seo: {
    title: 'Tasmania E-Bike Laws 2026: 250W Limit & Compliance Guide',
    description: 'Complete guide to Tasmania e-bike regulations 2026. 250W power limit, no minimum age, footpath rules.',
    canonicalPath: '/tas',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: false,
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: 'None' },
    { label: 'Footpaths', value: 'All ages' },
  ],

  keyDates: [],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads in Tasmania.',
    },
  },

  seizure: {
    show: false,
  },

  realRisk: {
    stat: '8.5 hospitalisations per 100,000',
    detail: "The AIHW's first national hospital-data report found Tasmania's 2024–25 hospitalisation rate for riders of motor-scooters, mopeds and motorised bicycles (the group that includes e-bikes) was 8.5 per 100,000 — third-highest in Australia, and double its 2020–21 rate. Current hospital coding can't yet separate e-bikes from petrol-powered mopeds, so this is an upper bound for e-bikes alone.",
    url: 'https://www.aihw.gov.au/reports/injury/e-scooter-e-bike-injuries-deaths-in-australia',
  },

  reporting: {
    policeNonEmergency: '131 444',
    policeOnlineForm: {
      label: 'Report dangerous riding to Tasmania Police',
      url: 'https://www.police.tas.gov.au/what-we-do/traffic-policing/report/',
    },
    fairTrading: {
      label: 'Consumer, Building and Occupational Services (CBOS)',
      url: 'https://www.cbos.tas.gov.au/contact-us/lodge-an-enquiry',
      phone: '1300 654 499',
    },
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$560+', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$560+', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'No Helmet', cost: '~$205', desc: 'Approved helmet mandatory for all riders' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on footpaths in Tasmania.',
  },

  minimumAge: {
    specified: false,
    notes: 'No minimum age specified for e-bike riders in Tasmania.',
  },

  parentalLiability: {
    show: true,
    items: [
      {
        number: '01',
        title: 'NO INSURANCE',
        desc: 'Home insurance may not cover injuries caused by an illegal or modified e-bike.',
      },
      {
        number: '02',
        title: 'ASSET SEIZURE',
        desc: "If a court orders you to pay and you can't, your home and savings can be at risk.",
      },
    ],
  },

  quiz: [
    {
      id: 'sticker',
      question: "Is the bike rated at 250W or less on the manufacturer's label?",
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in Tasmania.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
  ],

  notices: [
    {
      date: '12 Aug 2026',
      title: 'Hobart Moves to E-Bike-Only Shared Scheme, Appoints Lime as New Operator',
      text: 'Following an April 2026 council decision to transition Hobart\'s shared micromobility program (running since 2021, averaging about 13,300 trips/month) to an e-bikes-only model — citing footpath-parking and behavioural concerns with mixed e-scooter/e-bike hire — and incumbent operator Beam\'s confirmation in May that it would exit when its permit expired on 30 June 2026 and not tender for the new contract, the City of Hobart appointed Lime as the successful tenderer for an initial 12-month e-bike-only permit, with an option to renew. Lime\'s roughly 350 e-bikes are focused on the waterfront, Salamanca and the CBD, with the service due to begin "in the coming weeks" — no exact launch date was given in the council\'s release. The City\'s own hire-and-ride e-bikes page now confirms Lime is the current operator and that hire e-scooters are no longer available in Hobart.',
      url: 'https://www.hobartcity.com.au/Council/News-and-publications/Media-releases/City-of-Hobart-welcomes-Lime-as-new-shared-e-bike-operator',
    },
    {
      date: 'Jun 2026',
      title: 'MEDICAL COMMUNITY RAISES NATIONAL E-BIKE SAFETY CONCERNS',
      text: 'AMA Queensland formally criticised weakened state e-mobility laws as a "shocking disregard for safety," warning that insufficient age restrictions put children at risk nationally. Emergency department physicians across Australia report treating preventable injuries — head trauma, broken bones, missing teeth, and fatalities. The AMA has called on all state and federal governments to enact evidence-based safety legislation rather than yielding to industry and lobby pressure.',
      url: 'https://amaq.com.au/Web/Web/News/Media-releases/2026-Media-Releases/Shocking-disregard-for-safety-AMA-Queensland-disappointed-in-watered-down-e-mobility-laws.aspx',
    },
    {
      date: '5 Mar 2026',
      title: 'Devonport/Latrobe Police Target Illegal and Dangerous PMD Use',
      text: 'Tasmania Police ran a seven-day targeted operation in Devonport and Latrobe on illegal and dangerous use of personal mobility devices (PMDs), including e-scooters and e-skateboards. Officers spoke with approximately 40 PMD riders, issuing 9 infringement notices (8 for riding without an approved helmet, 1 for using a PMD on a prohibited road) and 1 youth caution for riding without a helmet; most riders were educated on minor matters rather than fined. No devices were seized in this operation, though police noted they can seize a PMD for up to seven days if it is used dangerously or contrary to road rules.',
      url: 'https://www.police.tas.gov.au/news-events/media-releases/devonport-and-latrobe-police-target-illegal-and-dangerous-personal-mobility-device-use/',
    },
    {
      date: '11 Feb 2026',
      title: 'ONLINE SELLERS CAUGHT USING FAKE COMPLIANCE STICKERS',
      text: "ABC News revealed online and overseas e-bike sellers were applying fake compliance stickers to high-powered, non-compliant bikes to help buyers evade police detection. The federal government reintroduced the EN 15194 national standard in late 2025 so certified bikes are verifiably safe and legal — but a genuine-looking sticker alone doesn't guarantee a bike is actually compliant. The government has flagged possible changes to national consumer law, including mandatory safety standards and bans on unsafe products.",
      url: 'https://www.abc.net.au/news/2026-02-11/e-bike-sellers-fake-compliance-stickers-crackdown/106285924',
    },
    {
      date: 'Dec 2025 – Nov 2026',
      title: 'FEDERAL: EN 15194 IMPORT STANDARD, ACCC FUNDING & NATIONAL STANDARD CONSULTATION',
      text: 'From 24 December 2025, the Commonwealth requires EN 15194:2017 (or later) for all e-bikes imported as bicycles — agreed at the Infrastructure and Transport Ministers\' Meeting. Following the 30 July 2026 Consumer Affairs Ministers\' Meeting, the Government directed the ACCC to build a mandatory national e-bike safety standard under the Australian Consumer Law — the same sale rules in every state and territory, drawing "a firm line against high-powered, high-speed devices." That meeting also noted a separate $6.6 million Federal investment to strengthen Australia\'s broader product safety framework (reporting requirements, recalls, penalties and online-marketplace obligations) — not funding specific to the e-bike standard. On 6 November 2026, Assistant Minister Andrew Leigh announced the ACCC had opened a dedicated public consultation (closing 30 November 2026) on the proposed e-bike standard — covering EN 15194 compliance, power/speed limits, battery and charger safety, conversion kits, second-hand and hire e-bikes, and anti-tampering measures — backed by a separate $4.3 million in the most recent Budget specifically to develop it. Recommendations to government are expected in early 2027; the ACCC estimates e-bike injuries and fatalities cost the economy at least $28 million a year. NRMA reported at least 15 Australians died in e-mobility incidents in 2025.',
      url: 'https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/protecting-australians-unsafe-e-bikes',
    },
  ],

  links: {
    statutory: [
      { label: 'DIER Tasmania: Transport', url: 'https://www.transport.tas.gov.au' },
    ],
    safety: [
      { label: 'Department of Infrastructure, Energy and Resources Tasmania', url: 'https://www.transport.tas.gov.au' },
    ],
  },

  flyer: {
    available: false,
  },
}
