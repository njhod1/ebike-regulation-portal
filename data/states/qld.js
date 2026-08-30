export const qld = {
  name: 'Queensland',
  slug: 'qld',
  abbreviation: 'QLD',
  summary: '250W limit. Staged laws from 1 Jul 2026: seizure powers, 12 km/h footpath limit, drink riding rules. From 31 Aug 2026: ages 12–15 may ride under parental supervision; age 16+ requires a learner\'s licence. AMA Queensland called the legislation a "shocking disregard for safety."',

  seo: {
    title: 'Queensland E-Bike Laws 2026: Age Rules, Licensing, Seizure Powers & AMA Criticism',
    description: 'Queensland e-bike laws 2026: seizure powers from 1 Jul, tiered age rules from 31 Aug (12–15 supervised; 16+ licence). AMA Queensland criticised watered-down legislation. Fines up to $6,908.',
    canonicalPath: '/qld',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'red',
    text: 'QLD LAW IN FORCE: SEIZURE POWERS FROM 1 JUL 2026 · TIERED AGE RULES FROM 31 AUG 2026 · AMA QLD CRITICAL OF WATERED-DOWN LEGISLATION',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Min Age', value: '12+ supervised / 16+ licence' },
    { label: 'Footpaths', value: '12 km/h' },
  ],

  keyDates: [
    {
      date: '2 Jun 2026',
      color: 'slate',
      text: '<strong>Government amends bill before passage.</strong> Transport Minister Brent Mickelberg announced that the proposed full ban on under-16s would be replaced with a tiered supervision framework. The original proposal — a straight ban recommended by the parliamentary inquiry — was watered down after industry and community pressure. <strong>AMA Queensland</strong> issued a formal media release calling it a "shocking disregard for safety," saying the decision puts Queensland "right back where we started, with children being injured and killed." Amy\'s Foundation noted <strong>12 people died</strong> in Queensland from e-mobility incidents in 2025.',
    },
    {
      date: '1 Jul 2026',
      color: 'red',
      text: '<strong>Stage 1 in force.</strong> Police can now <strong>seize, impound and destroy</strong> non-compliant e-bikes on the spot ($621 fine). Footpath speed limit drops to <strong>12 km/h</strong> (25 km/h on shared paths except 12 km/h when passing pedestrians). The <strong>0.05 BAC drink-riding</strong> rule and random breath testing now apply. Parents can be fined if a child under 16 rides illegally.',
    },
    {
      date: '31 Aug 2026',
      color: 'red',
      text: '<strong>Stage 2 in force — tiered age rules apply.</strong> Riders aged <strong>12–15</strong> may only ride under direct parental supervision. Riders aged <strong>16 or over</strong> must hold at least a Queensland <strong>learner\'s driver\'s licence</strong> (interstate/international equivalent recognised) to ride unaccompanied. An exemption exists for people who cannot hold a licence due to a medical condition or disability. Special rules apply for designated areas such as rail trails and mountain bike parks. Under-12s may not ride e-mobility devices in public.',
    },
    {
      date: 'End Feb 2027',
      color: 'amber',
      text: '<strong>Device compliance deadline.</strong> All e-bikes must comply with EN 15194 by end of February 2027. Both past and future versions of the EN 15194 standard are accepted. An assurance scheme is being developed to help owners verify compliance. After this date, non-compliant devices can be seized and destroyed by Queensland Police.',
    },
  ],

  compliance: {
    gracePeriod: {
      exists: true,
      deadline: 'End Feb 2027',
      description: 'Existing owners have until the end of February 2027 to ensure their e-bike complies with EN 15194. After this date, Queensland Police can seize and destroy any non-compliant device.',
    },
    enStandard: {
      mandatoryFromDate: 'End Feb 2027',
      text: 'EN 15194 certification required for all e-bikes used on public roads in Queensland. Both past and future versions of the standard are accepted. The motor must cut out at 25 km/h and power must not exceed 250W.',
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
    age: 12,
    inForce: true,
    effectiveDate: '31 Aug 2026',
    notes: 'From 31 August 2026, a tiered age system applies. Under-12s may not ride e-mobility devices in public. Ages 12–15 may ride only under direct parental supervision. Ages 16 and over must hold at least a Queensland learner\'s driver\'s licence (interstate and international equivalents accepted) and may ride without supervision. A medical/disability exemption is available for people who cannot hold a licence. Special rules apply for designated areas such as rail trails and mountain bike parks.',
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
      question: "Is the rider aged 12 or over, and if under 16, are they under direct parental supervision?",
      info: "From 31 August 2026: under-12s cannot ride in public. Ages 12–15 may only ride under direct parental supervision — parents can be fined if a child rides illegally. Ages 16+ must hold at least a QLD learner's driver's licence (interstate or international equivalent accepted) to ride unsupervised. A medical/disability exemption applies for those unable to hold a licence.",
    },
  ],

  notices: [
    {
      date: '2 Jun 2026',
      title: 'AMA QLD: "SHOCKING DISREGARD FOR SAFETY"',
      text: 'AMA Queensland President Assoc Prof Erica Gannon condemned the government\'s decision to walk back the under-16 ban: "This decision puts us right back where we started, with children being injured and killed." AMA QLD also strongly opposed the licensing framework that requires GPs to certify fitness to ride, warning it risks harming the doctor–patient relationship. Amy\'s Foundation noted 12 people died in Queensland in e-mobility incidents in 2025.',
      url: 'https://amaq.com.au/Web/Web/News/Media-releases/2026-Media-Releases/Shocking-disregard-for-safety-AMA-Queensland-disappointed-in-watered-down-e-mobility-laws.aspx',
    },
    {
      date: '2 Jun 2026',
      title: 'UNDER-16 BAN WATERED DOWN TO SUPERVISED RIDING FRAMEWORK',
      text: 'Transport Minister Brent Mickelberg replaced the proposed full ban on under-16s with a tiered system: ages 12–17 may ride under parental supervision; ages 16+ with a learner\'s permit may ride without supervision. Bicycle Queensland CEO Dr Matthew Burke warned the laws would make Queensland "the hardest place in the world to ride a legal e-bike" and criticised the failure to close the private-property loophole allowing sale and use of illegal devices on private land.',
      url: 'https://www.abc.net.au/news/2026-06-02/qld-government-waters-down-under-16s-e-scooter-ban/106748582',
    },
  ],

  links: {
    statutory: [
      { label: 'TMR QLD: E-Scooter and E-Bike Safety Inquiry', url: 'https://www.tmr.qld.gov.au/travel-and-transport/parliamentary-inquiry-into-e-scooter-and-e-bike-safety' },
      { label: 'QLD Parliament: E-Mobility Inquiry Details', url: 'https://www.parliament.qld.gov.au/Work-of-Committees/Inquiries/Inquiry-Details?id=4522' },
    ],
    safety: [
      { label: 'StreetSmarts QLD: E-Bikes & E-Scooters', url: 'https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/' },
      { label: 'Bicycle Queensland: New E-Mobility Laws Explained', url: 'https://bq.org.au/news/queenslands-new-e-mobility-laws-explained/' },
      { label: 'AMA Queensland: E-Mobility Media Release', url: 'https://amaq.com.au/Web/Web/News/Media-releases/2026-Media-Releases/Shocking-disregard-for-safety-AMA-Queensland-disappointed-in-watered-down-e-mobility-laws.aspx' },
    ],
  },

  flyer: {
    available: false,
  },
}
