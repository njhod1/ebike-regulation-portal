export const wa = {
  name: 'Western Australia',
  slug: 'wa',
  abbreviation: 'WA',
  summary: '250W limit. Minimum age 16. Adults allowed on shared paths.',

  seo: {
    title: 'Western Australia E-Bike Laws 2026: 250W Limit, Age 16 & Compliance Guide',
    description: 'Complete guide to Western Australia e-bike regulations 2026. 250W power limit, minimum age 16, and shared path rules.',
    canonicalPath: '/wa',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: false,
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: '16+' },
    { label: 'Footpaths', value: 'Shared paths' },
  ],

  keyDates: [],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads in Western Australia.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$550–$2,200', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$550–$2,200', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on shared paths in Western Australia.',
  },

  minimumAge: {
    specified: true,
    age: 16,
    inForce: true,
    notes: 'Minimum age of 16 years is in force for e-bike riders in Western Australia.',
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
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in Western Australia.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
    {
      id: 'age',
      question: "Is the rider aged 16 or over?",
      info: "Western Australia requires riders to be at least 16 years old to operate an e-bike.",
    },
  ],

  links: {
    statutory: [
      { label: 'Main Roads WA: Cycling', url: 'https://www.mainroads.wa.gov.au' },
    ],
    safety: [
      { label: 'Main Roads WA', url: 'https://www.mainroads.wa.gov.au' },
    ],
  },

  flyer: {
    available: false,
  },
}
