export const nt = {
  name: 'Northern Territory',
  slug: 'nt',
  abbreviation: 'NT',
  summary: '250W limit. No minimum age. Adults allowed on footpaths.',

  seo: {
    title: 'Northern Territory E-Bike Laws 2026: 250W Limit & Compliance Guide',
    description: 'Complete guide to Northern Territory e-bike regulations 2026. 250W power limit, no minimum age, footpath rules.',
    canonicalPath: '/nt',
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
      text: 'EN 15194 certification required for all e-bikes used on public roads in the Northern Territory.',
    },
  },

  seizure: {
    show: false,
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$500+', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$500+', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'No Helmet', cost: '$25', desc: 'Approved helmet mandatory. Lowest helmet fine in Australia' },
  ],

  footpathRule: {
    adultsAllowed: true,
    notes: 'Adults are allowed to ride e-bikes on footpaths in the Northern Territory.',
  },

  minimumAge: {
    specified: false,
    notes: 'No minimum age specified for e-bike riders in the Northern Territory.',
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
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark to be legal for road use in the Northern Territory.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
  ],

  links: {
    statutory: [
      { label: 'NTG Transport: Vehicles & Registration', url: 'https://nt.gov.au/driving/vehicles-and-registration' },
    ],
    safety: [
      { label: 'Northern Territory Government Transport', url: 'https://nt.gov.au/driving/vehicles-and-registration' },
    ],
  },

  flyer: {
    available: false,
  },
}
