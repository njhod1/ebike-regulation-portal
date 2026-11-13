export const qld = {
  name: 'Queensland',
  slug: 'qld',
  abbreviation: 'QLD',
  summary: '250W limit. Staged laws from 1 Jul 2026: seizure powers, 12 km/h footpath limit, drink riding rules. From 31 Aug 2026: ages 12–15 may ride under parental supervision; age 16+ requires a learner\'s licence. AMA Queensland called the legislation a "shocking disregard for safety."',

  seo: {
    title: 'Queensland E-Bike Laws 2026: Age Rules & Seizure Powers',
    description: 'Queensland e-bike laws 2026: seizure powers from 1 Jul, tiered ages from 31 Aug. AMA QLD slammed the watered-down law as unsafe. Fines to $6,908.',
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
      text: 'Existing owners have until the end of February 2027 to ensure their e-bike complies with EN 15194. After this date, Queensland Police can seize and destroy any non-compliant device.',
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
  },

  realRisk: {
    stat: '12 deaths, 6,300+ ED visits',
    detail: 'Queensland Health data tabled in Parliament recorded 12 deaths and more than 6,300 emergency department presentations linked to e-mobility devices in the year to March 2025, including 200+ major trauma cases and 60+ requiring intensive care.',
    url: 'https://www.racq.com.au/news/advocacy/reform-critical-after-qld-e-mobility-injuries-almost-double',
  },

  reporting: {
    policeNonEmergency: '131 444 (Policelink)',
    policeOnlineForm: null,
    fairTrading: {
      label: 'QLD Office of Fair Trading — consumer complaint form',
      url: 'https://smartforms.lgft.justice.qld.gov.au/form/?formCode=consumercomplaintform',
      phone: null,
    },
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
        desc: 'Parents can be fined if a child under 16 rides an illegal e-bike or PMD in Queensland (from 1 Jul 2026), or rides one underage or unlicensed (from 31 Aug 2026).',
      },
      {
        number: '02',
        title: 'NO INSURANCE',
        desc: 'Home insurance may not cover injuries caused by an illegal or modified e-bike.',
      },
      {
        number: '03',
        title: 'ASSET SEIZURE',
        desc: "If a court orders you to pay and you can't, your home and savings can be at risk.",
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
      date: '2 Nov 2026',
      title: 'EPAC Assurance Scheme Active: Verification Capped at $70, Label Required From 1 Mar 2027',
      text: "Queensland's Electrically Power-Assisted Cycle (EPAC) Assurance Scheme is operating, with nine authorised verifiers (all Trek Bicycle stores) listed by the Department of Transport and Main Roads across Brisbane, the Gold Coast, Sunshine Coast, Moreton Bay, Ipswich and Rockhampton — the page was last updated 2 Nov 2026. Owners of eligible e-bikes made before 1 Jul 2026 (250W / 25 km/h, but without an EN 15194 label), and e-trikes or e-bikes adapted for a disability or medical condition, can book an inspection. The pre-screening check is free; a verifier may charge up to $70 for the inspection and label ($50 assessment plus $20 label under the Queensland regulation), and appointments can take a couple of weeks to get. A scheme label does not certify EN 15194 compliance, and EN 15194-labelled bikes don't need verifying. Eligible bikes may keep being used until 28 Feb 2027; from 1 Mar 2027 a compliance label is required to ride in public. Owners in rural or remote areas without a nearby verifier are promised alternative arrangements, with details due at the start of 2027. High-powered or modified devices (for example a 500W bike) are not eligible and can still be seized and destroyed. Bicycle Queensland has said riders shouldn't be charged and that verification must not create financial or administrative barriers.",
      url: 'https://www.qld.gov.au/transport/safety/rules/wheeled-devices/e-bike-assurance-scheme',
    },
    {
      date: '20 Oct 2026',
      title: 'Operation Yankee Surety Update: 600+ Seized, 2,812 Fines; Child Hospital Admissions Down ~60%',
      text: "A joint statement from Health Minister Tim Nicholls and Police Minister Dan Purdie reported more than 600 non-compliant e-bikes/e-scooters seized and 2,812 traffic infringement notices issued since the laws took effect on 1 July 2026, including almost 1,800 for helmet offences and 78 drink-riding interceptions. Queensland Children's Hospital recorded 7 admissions of more than 24 hours for serious e-scooter/e-bike incidents between July and September, compared with 18 between January and March and 16 between April and June — a roughly 60% fall the Government attributed to the new laws. Professor Roy Kimble (QCH) called the trend encouraging but cautioned against complacency, citing earlier research that 65% of children injured on e-scooters needed surgery.",
      url: 'https://statements.qld.gov.au/statements/106257',
    },
    {
      date: '2 Oct 2026',
      title: 'Operation Yankee Surety: 558 Devices Seized, 2,400+ Fines in First 3 Months',
      text: 'Queensland Police released the first quarterly results of Operation Yankee Surety, its dedicated statewide e-mobility enforcement operation (1 Jul–30 Sep 2026): 558 non-compliant e-bikes/e-scooters seized and roughly 2,400 infringement notices issued, including about 1,500 for helmet non-compliance and 157 for speeding. Officers conducted 878 roadside breath tests, leading to 68 drink-riding charges. Separately, 64 infringements have been issued for breaching the new age/licensing rule since it commenced 31 Aug 2026 — the first enforcement data under that rule. The operation continues through 30 Jun 2027.',
      url: 'https://www.abc.net.au/news/2026-10-02/qld-e-mobility-devices-seized-and-2-300-fines-issued-in-3-months/107222062',
    },
    {
      date: '1 Jul 2026',
      title: 'First Person Charged Under New Laws — 7 Minutes After They Took Effect',
      text: 'A 28-year-old Teneriffe man became the first person charged under the new e-mobility laws, stopped on Queen Street, Brisbane, just after midnight for riding without a helmet. Breath-tested under the new random drink-riding power, he returned 0.067 against the 0.05 limit — a court matter carrying a maximum penalty around $7,000. Assistant Commissioner Rhys Wildman commented on the case, which confirmed the footpath speed limit as 12 km/h (not the earlier-proposed 10 km/h) as the laws took effect.',
      url: 'https://www.abc.net.au/news/2026-07-01/queensland-ebike-escooter-law-change-explained/106762970',
    },
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
    {
      date: '11 Feb 2026',
      title: 'ONLINE SELLERS CAUGHT USING FAKE COMPLIANCE STICKERS',
      text: "ABC News revealed online and overseas e-bike sellers were applying fake compliance stickers to high-powered, non-compliant bikes to help buyers evade police detection. The federal government reintroduced the EN 15194 national standard in late 2025 so certified bikes are verifiably safe and legal — but a genuine-looking sticker alone doesn't guarantee a bike is actually compliant. The government has flagged possible changes to national consumer law, including mandatory safety standards and bans on unsafe products.",
      url: 'https://www.abc.net.au/news/2026-02-11/e-bike-sellers-fake-compliance-stickers-crackdown/106285924',
    },
    {
      date: 'Dec 2025 – Nov 2026',
      title: 'FEDERAL: EN 15194 IMPORT STANDARD, ACCC FUNDING & NATIONAL STANDARD CONSULTATION',
      text: 'From 24 December 2025, the Commonwealth requires EN 15194:2017 (or later) for all e-bikes imported as bicycles — agreed at the Infrastructure and Transport Ministers\' Meeting. Following the 30 July 2026 Consumer Affairs Ministers\' Meeting, the Government directed the ACCC to build a mandatory national e-bike safety standard under the Australian Consumer Law — the same sale rules in every state and territory, drawing "a firm line against high-powered, high-speed devices." That meeting also noted a separate $6.6 million Federal investment to strengthen Australia\'s broader product safety framework (reporting requirements, recalls, penalties and online-marketplace obligations) — not funding specific to the e-bike standard. On 6 November 2026, Assistant Minister Andrew Leigh announced the ACCC had opened a dedicated public consultation (closing 30 November 2026) on the proposed e-bike standard — covering EN 15194 compliance, power/speed limits, battery and charger safety, conversion kits, second-hand and hire e-bikes, and anti-tampering measures — backed by a separate $4.3 million in the most recent Budget specifically to develop it. Recommendations to government are expected in early 2027; the ACCC estimates e-bike injuries and fatalities cost the economy at least $28 million a year. NRMA reported at least 15 Australians died in e-mobility incidents in 2025.',
      url: 'https://ministers.treasury.gov.au/ministers/andrew-leigh-2025/media-releases/protecting-australians-unsafe-e-bikes',
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
