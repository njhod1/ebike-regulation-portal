export const act = {
  name: 'Australian Capital Territory',
  slug: 'act',
  abbreviation: 'ACT',
  summary: '250W limit. No minimum age. Extensive shared path network in Canberra.',

  seo: {
    title: 'ACT E-Bike Laws 2026: 250W Limit & Canberra Shared Path Guide',
    description: 'Complete guide to Australian Capital Territory e-bike regulations 2026. 250W power limit, no minimum age, extensive Canberra shared path network.',
    canonicalPath: '/act',
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
      text: 'EN 15194 certification required for all e-bikes used on public roads in the ACT.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$680+', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$680+', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'No Helmet', cost: '$121', desc: 'Approved helmet mandatory for all riders' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on footpaths and the extensive shared path network throughout Canberra.',
  },

  minimumAge: {
    specified: false,
    notes: 'No minimum age specified for e-bike riders in the ACT.',
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
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in the ACT.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
  ],

  links: {
    statutory: [
      { label: 'Transport Canberra: Cycling', url: 'https://www.transport.act.gov.au' },
    ],
    safety: [
      { label: 'Transport Canberra and City Services', url: 'https://www.transport.act.gov.au' },
    ],
  },

  flyer: {
    available: false,
  },
}
