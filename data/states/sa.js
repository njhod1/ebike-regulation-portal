export const sa = {
  name: 'South Australia',
  slug: 'sa',
  abbreviation: 'SA',
  summary: '250W limit. No minimum age for e-bikes. E-scooters and PMDs legalised from 13 Jul 2025. PMD rules under review Jun 2026.',

  seo: {
    title: 'South Australia E-Bike Laws 2026: 250W Limit & PMD Rules',
    description: 'South Australia e-bike regulations 2026. 250W power limit, no minimum age. E-scooters & PMDs legalised Jul 2025, review underway Jun 2026.',
    canonicalPath: '/sa',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'amber',
    text: 'SA PMD REVIEW UNDERWAY (JUN 2026): E-scooters & personal mobility devices legalised from 13 Jul 2025. Rules under review.',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: 'None' },
    { label: 'Footpaths', value: 'All ages' },
  ],

  keyDates: [
    {
      date: '13 Jul 2025',
      color: 'amber',
      text: 'Private <strong>e-scooters and personal mobility devices (PMDs)</strong> legalised for use on footpaths, shared paths, bike paths and many roads in South Australia. PMDs are capped at <strong>10 km/h on footpaths</strong> and 25 km/h on bike lanes. Riders must be 16 or over. No licence or registration required.',
    },
    {
      date: 'Jun 2026',
      color: 'slate',
      text: '<strong>SA Department for Infrastructure and Transport review commenced</strong> to assess how the July 2025 PMD laws are working and identify areas for improvement. Further rule changes possible in 2026–27.',
    },
  ],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads in South Australia.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$574–$2,298', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$574–$2,298', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'No Helmet', cost: '~$205', desc: 'Approved helmet mandatory. Includes victims of crime levy' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on footpaths in South Australia.',
  },

  minimumAge: {
    specified: false,
    notes: 'No minimum age specified for e-bike riders in South Australia.',
  },

  parentalLiability: {
    show: true,
    items: [
      {
        number: '01',
        title: 'NO INSURANCE',
        desc: 'Home & Contents policies exclude "unregistered motor vehicles." Illegal e-bikes are motorbikes.',
      },
      {
        number: '02',
        title: 'ASSET SEIZURE',
        desc: 'Your family home and personal assets can be seized to pay legal judgments.',
      },
    ],
  },

  quiz: [
    {
      id: 'sticker',
      question: "Is the bike rated at 250W or less on the manufacturer's label?",
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in South Australia.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
  ],

  notices: [
    {
      date: 'Jun 2026',
      title: 'MEDICAL COMMUNITY RAISES NATIONAL E-BIKE SAFETY CONCERNS',
      text: 'AMA Queensland formally criticised weakened state e-mobility laws as a "shocking disregard for safety," warning that insufficient age restrictions put children at risk nationally. Emergency department physicians across Australia report treating preventable injuries — head trauma, broken bones, missing teeth, and fatalities. The AMA has called on all state and federal governments to enact evidence-based safety legislation rather than yielding to industry and lobby pressure.',
      url: 'https://amaq.com.au/Web/Web/News/Media-releases/2026-Media-Releases/Shocking-disregard-for-safety-AMA-Queensland-disappointed-in-watered-down-e-mobility-laws.aspx',
    },
    {
      date: 'Dec 2025 / May 2026',
      title: 'FEDERAL: EN 15194 IMPORT STANDARD & $6.6M ACCC SAFETY PROGRAM',
      text: 'From 24 December 2025, the Commonwealth requires EN 15194:2017 (or later) for all e-bikes imported as bicycles — agreed at the Infrastructure and Transport Ministers\' Meeting. In May 2026, the Federal Government allocated $6.6 million over three years for the ACCC to develop a mandatory national safety standard covering speed limits, power caps, battery fire safety and consumer labelling. Public consultation is expected in late 2026. NRMA reported at least 15 Australians died in e-mobility incidents in 2025.',
      url: 'https://bicyclenetwork.com.au/newsroom/2025/12/03/feds-return-to-euro-e-bike-standard/',
    },
  ],

  links: {
    statutory: [
      { label: 'DPTI SA: Cycling', url: 'https://www.dpti.sa.gov.au' },
    ],
    safety: [
      { label: 'Department for Infrastructure and Transport SA', url: 'https://www.dpti.sa.gov.au' },
    ],
  },

  flyer: {
    available: false,
  },
}
