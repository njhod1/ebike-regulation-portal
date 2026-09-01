export const vic = {
  name: 'Victoria',
  slug: 'vic',
  abbreviation: 'VIC',
  summary: '250W limit, adults not allowed on footpaths. Children under 13 only.',

  seo: {
    title: 'Victoria E-Bike Laws 2026: 250W Limit & Footpath Rules',
    description: 'Complete guide to Victoria e-bike regulations 2026. 250W power limit, EN 15194 standard, footpath rules for adults and children.',
    canonicalPath: '/vic',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'amber',
    text: 'VIC ENFORCEMENT ACTIVE: OPERATION CONSIDER (Melbourne CBD blitz) · OPERATION TRACK (drones follow riders home, Mornington Peninsula) — non-compliant e-bikes seized and riders prosecuted',
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

  reporting: {
    policeNonEmergency: '131 444',
    policeOnlineForm: {
      label: 'Report online to Victoria Police',
      url: 'https://www.police.vic.gov.au/report',
    },
    fairTrading: {
      label: 'Consumer Affairs Victoria — product safety complaint',
      url: 'https://www.consumer.vic.gov.au/contact-us/resolve-your-problem/product-safety-complaint',
      phone: '1300 55 81 81',
    },
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$826–$2,478', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$826–$4,957', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'Footpath (adult)', cost: 'Fine applies', desc: 'Adults not permitted on footpaths' },
    { label: 'No Helmet', cost: '~$254', desc: 'Approved helmet mandatory. Amount indexed annually to VIC penalty units' },
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

  notices: [
    {
      date: 'Jul 2026',
      title: 'OPERATION TRACK — Vic Police Drones Follow Illegal Riders Home',
      text: 'Victoria Police\'s High Visibility Community Engagement Team (HiCET) deployed drones on the Mornington Peninsula to pursue illegal e-bike riders to their homes and make arrests. First two months: 4 unregistered motorcycles impounded, 9 arrests. The approach closes the loophole of riders abandoning bikes and fleeing on foot. Victoria\'s fine for riding an unregistered motor vehicle is $1,018.',
      url: 'https://bicyclenetwork.com.au/newsroom/2026/07/27/police-drones-swoop-on-non-legal-e-bikes/',
    },
    {
      date: 'Aug 2025 / Jun 2026',
      title: 'OPERATION CONSIDER — Melbourne CBD Blitz: 52% Non-Compliant',
      text: 'Vic Police ran targeted Melbourne CBD blitzes: 135 e-bikes intercepted, 52% found non-compliant, 257 infringements issued. The operation was relaunched and expanded in June 2026. From 1 February 2025, Victorian retailers may only sell e-bikes meeting AS/NZS 15194:2018 and IEC 62133 standards — non-compliant stock can be seized.',
      url: 'https://bicyclenetwork.com.au/newsroom/2025/08/07/police-target-reckless-e-bike-riding/',
    },
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
