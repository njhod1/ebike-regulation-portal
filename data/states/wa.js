export const wa = {
  name: 'Western Australia',
  slug: 'wa',
  abbreviation: 'WA',
  summary: '250W limit. Minimum age 16. Parliamentary inquiry completed Dec 2025. WA leading national e-mobility standards push.',

  seo: {
    title: 'Western Australia E-Bike Laws 2026: 250W Limit, Age 16 & National Standards Push',
    description: 'Western Australia e-bike regulations 2026. 250W limit, minimum age 16. Dec 2025 Ride Safe inquiry complete. WA leading national e-mobility device standards reform.',
    canonicalPath: '/wa',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'amber',
    text: 'WA REFORM UNDERWAY: RIDE SAFE INQUIRY (DEC 2025) — GOVERNMENT SUPPORTS 32/33 RECOMMENDATIONS. NATIONAL STANDARDS FRAMEWORK IN DEVELOPMENT.',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: '16+' },
    { label: 'Footpaths', value: 'Shared paths' },
  ],

  keyDates: [
    {
      date: 'Dec 2025',
      color: 'amber',
      text: 'WA Parliamentary Committee tabled the <strong>Ride Safe report</strong> — an inquiry into eRideable and e-bike safety. The Cook Government supported <strong>32 of 33 recommendations</strong>, including anti-tampering measures, speed-limiting technology, school education programmes, and improved infrastructure.',
    },
    {
      date: 'Mar 2026',
      color: 'amber',
      text: 'WA Transport Minister announced Western Australia is <strong>leading a national push</strong> for stronger eRideable device standards in partnership with other states and the National Transport Commission. No legislative changes have been enacted yet — further reforms expected as the national framework develops.',
    },
  ],

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
    { label: 'No Helmet', cost: '$50', desc: 'Approved helmet mandatory. Lowest helmet fine of any mainland state' },
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

  notices: [
    {
      date: 'Jan 2026',
      title: 'Operation Moorhead — Perth Enforcement Action',
      text: 'WA Police seized 36 e-rideables, charged 25 juveniles (aged 11–16) and 4 adults with traffic offences including "no authority to drive" and "use of unlicensed vehicle on a road." This targeted operation in Perth became the model explicitly adopted by NSW for its 2026 crackdown. It demonstrates how a dedicated, hotspot-focused enforcement operation produces rapid results.',
      url: 'https://bicyclenetwork.com.au/newsroom/2026/02/12/nsw-police-to-seize-and-crush-illegal-e-bikes/',
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
