export const qld = {
  name: 'Queensland',
  slug: 'qld',
  abbreviation: 'QLD',
  summary: '250W limit. Sweeping new laws from 1 Jul 2026: seizure powers, 12 km/h footpath limit, drink riding rules. Age 16+ and learner\'s licence required from 31 Aug 2026.',

  seo: {
    title: 'Queensland E-Bike Laws 2026: Age 16+, Licensing, Seizure Powers & Fines',
    description: 'Queensland e-bike laws enacted 2026. Seizure powers from 1 Jul, minimum age 16 and learner\'s licence required from 31 Aug. Fines up to $6,908 for drink riding.',
    canonicalPath: '/qld',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'red',
    text: 'QLD LAW NOW IN FORCE: SEIZURE POWERS & 12 KM/H FOOTPATH LIMIT FROM 1 JUL 2026 · AGE 16+ AND LICENCE FROM 31 AUG 2026',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: '16 (law)' },
    { label: 'Footpaths', value: '12 km/h' },
  ],

  keyDates: [
    {
      date: '1 Jul 2026',
      color: 'red',
      text: '<strong>Stage 1 in force.</strong> Police can now <strong>seize, impound and destroy</strong> non-compliant e-bikes on the spot ($621 fine). Footpath speed limit drops to <strong>12 km/h</strong>. The <strong>0.05 BAC drink-riding</strong> rule and random breath testing now apply. Parents can be fined if a child under 16 rides illegally.',
    },
    {
      date: '31 Aug 2026',
      color: 'red',
      text: '<strong>Stage 2 in force.</strong> All e-bike riders must be aged <strong>16 or over</strong> and hold at least a Queensland <strong>learner\'s driver\'s licence</strong> (or interstate/international equivalent). Exemptions are being developed for medical reasons, supervised 12–17 year olds, and designated areas such as rail trails and mountain bike parks.',
    },
  ],

  compliance: {
    gracePeriod: {
      exists: false,
    },
    enStandard: {
      mandatoryFromDate: null,
      text: 'EN 15194 certification required for all e-bikes used on public roads in Queensland. The motor must cut out at 25 km/h and power must not exceed 250W.',
    },
  },

  seizure: {
    show: true,
    billName: 'Transport Operations (Road Use Management) Act amendments 2026',
    description: 'from 1 July 2026, Queensland Police can <strong>seize, impound and destroy</strong> any e-bike or personal mobility device that clearly does not meet the legal standard. Officers can issue a <strong>$621 on-the-spot fine</strong>. Devices are assessed against the 250W motor limit and 25 km/h cut-off requirement.',
    fairTradingLink: null,
  },

  penalties: [
    { label: 'Non-Compliant Device', cost: '$621', desc: 'On-the-spot fine for riding an illegal e-bike (from 1 Jul 2026)' },
    { label: 'Footpath Speeding', cost: '$345–$1,986', desc: 'Exceeding the 12 km/h footpath speed limit' },
    { label: 'Drink Riding', cost: 'Up to $6,908', desc: '0.05 BAC limit now applies; random breath testing active' },
    { label: 'No Helmet', cost: '$518', desc: 'Approved helmet is mandatory for all riders' },
    { label: 'Unregistered Vehicle', cost: '$638–$3,189', desc: 'Illegal e-bikes (over 250W) classified as motor vehicles' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Riding without a licence after 31 Aug 2026 carries criminal record implications' },
  ],

  footpathRule: {
    adultsAllowed: true,
    speedLimit: '12 km/h',
    notes: 'Adults may ride on footpaths but must not exceed 12 km/h (from 1 Jul 2026). Must also slow to 12 km/h when passing pedestrians on shared paths.',
  },

  minimumAge: {
    specified: true,
    age: 16,
    inForce: true,
    effectiveDate: '31 Aug 2026',
    notes: 'Riders must be at least 16 and hold at least a Queensland learner\'s driver\'s licence from 31 August 2026. Exemptions apply for medical reasons, supervised riding by 12–17 year olds under an adult, and designated areas such as rail trails and mountain bike parks.',
  },

  parentalLiability: {
    show: true,
    items: [
      {
        number: '01',
        title: 'PARENTAL FINES',
        desc: 'From 1 Jul 2026, parents can be fined if a child under 16 rides an e-bike or PMD illegally in Queensland.',
      },
      {
        number: '02',
        title: 'NO INSURANCE',
        desc: 'Home & Contents policies exclude "unregistered motor vehicles." Illegal e-bikes are classified as motorbikes.',
      },
      {
        number: '03',
        title: 'ASSET SEIZURE',
        desc: 'Your family home and personal assets can be seized to pay legal judgments if your child injures someone.',
      },
    ],
  },

  quiz: [
    {
      id: 'sticker',
      question: "Is the bike rated at 250W or less on the manufacturer's label?",
      info: "Check the frame or near the motor. The bike must carry an EN 15194 certification mark. Any device exceeding 250W or 25 km/h can be seized and destroyed by Queensland Police from 1 July 2026.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant. Police can seize and destroy it on the spot.",
    },
    {
      id: 'age',
      question: "Is the rider aged 16 or over and do they hold at least a learner's driver's licence?",
      info: "From 31 August 2026, Queensland requires riders to be at least 16 and hold at least a learner's driver's licence (QLD, interstate or international). Exemptions exist for supervised 12–17 year olds in designated areas such as rail trails.",
    },
  ],

  links: {
    statutory: [
      { label: 'TMR QLD: E-Scooter and E-Bike Safety Inquiry', url: 'https://www.tmr.qld.gov.au/travel-and-transport/parliamentary-inquiry-into-e-scooter-and-e-bike-safety' },
      { label: 'QLD Parliament: E-Mobility Inquiry Details', url: 'https://www.parliament.qld.gov.au/Work-of-Committees/Inquiries/Inquiry-Details?id=4522' },
    ],
    safety: [
      { label: 'StreetSmarts QLD: E-Bikes', url: 'https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/e-bikes/' },
      { label: 'Bicycle Queensland: New E-Mobility Laws Explained', url: 'https://bq.org.au/news/queenslands-new-e-mobility-laws-explained/' },
    ],
  },

  flyer: {
    available: false,
  },
}
