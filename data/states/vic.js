export const vic = {
  name: 'Victoria',
  slug: 'vic',
  abbreviation: 'VIC',
  summary: '250W limit, adults not allowed on footpaths. Children under 13 only.',

  seo: {
    title: 'Victoria E-Bike Laws 2026: 250W Limit, Footpath Rules & Compliance Guide',
    description: 'Complete guide to Victoria e-bike regulations 2026. 250W power limit, EN 15194 standard, footpath rules for adults and children.',
    canonicalPath: '/vic',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: false,
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Footpaths', value: 'Under 13 only' },
    { label: 'Standard', value: 'EN 15194' },
  ],

  keyDates: [],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$826–$2,478', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$826–$4,957', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'Footpath (adult)', cost: 'Fine applies', desc: 'Adults not permitted on footpaths' },
  ],

  footpathRule: {
    adultsAllowed: false,
    notes: 'Adults are NOT allowed to ride e-bikes on footpaths in Victoria. Only children under 13 (and an accompanying adult supervising them) may use footpaths.',
  },

  minimumAge: {
    specified: false,
    notes: 'No minimum age specified for e-bike riders in Victoria.',
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
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in Victoria.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
    {
      id: 'footpath',
      question: "Are you an adult planning to ride on a footpath?",
      info: "Adults are NOT permitted to ride e-bikes on footpaths in Victoria. Only children under 13 with an accompanying adult may use footpaths.",
    },
  ],

  links: {
    statutory: [
      { label: 'VicRoads: Road Rules for Cyclists', url: 'https://www.vicroads.vic.gov.au/safety-and-road-rules/road-rules/a-to-z-of-road-rules/bicycles' },
    ],
    safety: [
      { label: 'VicRoads: Electric Bikes', url: 'https://www.vicroads.vic.gov.au/safety-and-road-rules/road-rules/a-to-z-of-road-rules/bicycles' },
    ],
  },

  flyer: {
    available: false,
  },
}
