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
