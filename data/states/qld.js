export const qld = {
  name: 'Queensland',
  slug: 'qld',
  abbreviation: 'QLD',
  summary: '250W limit. Proposed minimum age 16 and licensing from Jul 2026 — before parliament.',

  seo: {
    title: 'Queensland E-Bike Laws 2026: 250W Limit, Proposed Age 16 & Licensing Changes',
    description: 'Complete guide to Queensland e-bike regulations 2026. 250W power limit, proposed minimum age 16 and licensing requirement currently before parliament.',
    canonicalPath: '/qld',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'amber',
    text: 'PROPOSED CHANGES: Minimum age 16 and licensing requirement for e-bike riders from 1 Jul 2026 — currently before Queensland parliament. Not yet law.',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: '16 (proposed)' },
    { label: 'Standard', value: 'EN 15194' },
  ],

  keyDates: [
    {
      date: '1 Jul 2026 (proposed)',
      color: 'amber',
      text: 'Proposed: Minimum age 16 and licensing requirement for e-bike riders — currently before Queensland parliament.',
    },
  ],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads in Queensland.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$638–$3,189', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$638–$3,189', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on footpaths and shared paths in Queensland.',
  },

  minimumAge: {
    specified: true,
    age: 16,
    inForce: false,
    proposedFrom: '1 Jul 2026',
    notes: 'Proposed minimum age of 16 from 1 July 2026 — not yet law, currently before Queensland parliament.',
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
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in Queensland.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
    {
      id: 'age',
      question: "Is the rider aged 16 or over? (if proposed law passes)",
      info: "Queensland proposes a minimum age of 16 for e-bike riders from 1 July 2026. This is not yet law but is before parliament.",
    },
  ],

  links: {
    statutory: [
      { label: 'TMR QLD: Electric Bikes', url: 'https://www.tmr.qld.gov.au/Travel-and-transport/Cycling/Electric-bikes' },
    ],
    safety: [
      { label: 'Transport and Main Roads: Cycling in Queensland', url: 'https://www.tmr.qld.gov.au/Travel-and-transport/Cycling/Electric-bikes' },
    ],
  },

  flyer: {
    available: false,
  },
}
