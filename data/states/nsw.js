export const nsw = {
  name: 'New South Wales',
  slug: 'nsw',
  abbreviation: 'NSW',
  summary: '250W limit in force from 1 Mar 2026. Seizure & crush powers active from 24 Mar 2026.',

  seo: {
    title: 'NSW E-Bike Laws 2026: 250W Limit, Seizure Powers & Compliance Guide',
    description: 'The official 2026 guide to NSW e-bike laws. Verify 250W power limits, compliance stickers, and new enforcement powers including seizure and crush.',
    canonicalPath: '/nsw',
    ogImage: '/og-preview.png',
  },

  alertBanner: {
    show: true,
    color: 'red',
    text: '2026 CRACKDOWN ACTIVE: 250W ROAD LIMIT FROM 1 MAR 2026 · SEIZURE & CRUSH POWERS FROM 24 MAR 2026',
  },

  stats: [
    { label: 'Max Power', value: '250W' },
    { label: 'Speed Cut', value: '25 km/h' },
    { label: 'Standard', value: 'EN 15194' },
    { label: 'Penalty', value: 'Seizure' },
  ],

  keyDates: [
    {
      date: '1 Feb 2026',
      color: 'amber',
      text: 'All new e-bikes sold in NSW must carry a Fair Trading <strong>Certificate of Approval</strong> and mandatory safety marking.',
    },
    {
      date: '1 Mar 2026',
      color: 'amber',
      text: 'Road-use power limit drops from 500 W → <strong>250 W</strong>. Owners who bought a 500 W bike <em>before</em> this date get a <strong>grace period until 1 Mar 2029</strong>.',
    },
    {
      date: '24 Mar 2026',
      color: 'red',
      text: '<strong>Road Transport Amendment (Non-registrable Motor Vehicles) Bill 2026</strong> introduced — NSW Police and Transport Officers can now seize and crush illegal e-bikes.',
    },
    {
      date: '1 Mar 2029',
      color: 'slate',
      text: 'Grace period ends. <strong>All</strong> e-bikes on public roads must meet the EN 15194 standard. No exceptions.',
    },
  ],

  compliance: {
    gracePeriod: {
      exists: true,
      text: 'If you owned a 500 W e-bike <strong>before 1 March 2026</strong>, you may continue riding it on NSW roads until <strong>1 March 2029</strong>. After that date, all bikes must be EN 15194-compliant and ≤ 250 W — no exceptions.',
    },
    enStandard: {
      mandatoryFromDate: '1 Mar 2029',
      text: 'EN 15194 certification required on all new bikes sold from Feb 2026. Mandatory for ALL road use from 1 March 2029.',
    },
  },

  seizure: {
    show: true,
    billName: 'Road Transport Amendment (Non-registrable Motor Vehicles) Act 2026',
    description: 'Under the Road Transport Amendment (Non-registrable Motor Vehicles) Act 2026 (amending the Road Transport Act 2013), non-compliant bikes can be seized and <strong>crushed</strong>. NSW Police use portable <strong>Dyno Units</strong> to test whether motor power cuts out at 25 km/h — if it doesn\'t, the bike is illegal.',
    fairTradingLink: 'https://www.fairtrading.nsw.gov.au/help-centre/online-tools/make-a-complaint',
  },

  penalties: [
    { label: 'Unregistered Vehicle', cost: '$686–$2,200', desc: 'Illegal e-bikes classified as motor vehicles' },
    { label: 'Uninsured Vehicle', cost: '$686–$5,500', desc: 'Mandatory CTP insurance required' },
    { label: 'Unlicensed Rider', cost: 'Court', desc: 'Criminal record implications' },
    { label: 'Footpath Speeding', cost: 'Up to $2,200', desc: 'Exceeding 10 km/h on footpaths' },
    { label: 'No Helmet', cost: '$410', desc: 'Approved helmet mandatory. Flat on-the-spot fine' },
  ],

  footpathRule: {
    adultsAllowed: true,
    speedLimit: '10 km/h',
    notes: 'Adults may ride on footpaths but must not exceed 10 km/h.',
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
      info: "Check the frame or near the motor. Bikes sold after 1 Mar 2026 must also carry an EN 15194 mark. All bikes need EN 15194 compliance by 1 Mar 2029.",
    },
    {
      id: 'wattage',
      question: "Was the bike purchased new after 1 March 2026, or does it carry an EN 15194 certification mark?",
      info: "Bikes bought before 1 Mar 2026 (up to 500W) have a grace period until 1 Mar 2029. New bikes must be EN 15194 certified.",
    },
    {
      id: 'speed',
      question: "Does motor assistance cut out automatically at 25 km/h?",
      info: "If the motor keeps pushing past 25 km/h without pedalling, the bike is non-compliant regardless of its rated wattage.",
    },
  ],

  notices: [
    {
      date: 'Mar 2026',
      title: 'Tweed Shire Enforcement Blitz',
      text: 'NSW Police and Transport for NSW ran a paired blitz in Tweed Shire: one week of pop-up education stalls, followed by one week of active fines. Fines issued: $410 (no helmet) · $136 (adult footpath riding) · from $723 (illegal modifications). This model is being rolled out to other known hotspot corridors.',
      url: 'https://www.tweed.nsw.gov.au/council/news-updates/latest-news/general-news/ebike-blitz',
    },
    {
      date: 'Feb 2026',
      title: 'Roadside Dyno Units Deployed',
      text: '3 portable dynamometer units — funded at $100,000 from the Community Road Safety Fund — are trialling roadside testing at known illegal e-bike hotspots. Units verify whether the motor cuts out at 25 km/h. The NRMA has noted 3 units is insufficient for the scale of the problem. The approach is modelled on WA\'s Operation Moorhead (Jan 2026), which seized 36 e-rideables and charged 25 juveniles and 4 adults in a single Perth operation.',
      url: 'https://www.mynrma.com.au/open-road/news/2026/tighter-laws-for-e-bikes',
    },
    {
      date: '2024–2025',
      title: 'Northern Beaches "Know the Code" Campaign',
      text: 'Australia\'s first behavioural-change e-bike safety campaign, targeting teenage riders and parents. Delivered via 60 signage locations, school posters, social media, and partnerships with Bicycle NSW and local police. Council reports a reduction in complaints. Important limitation: councils have no enforcement power — education only. Northern Beaches Council has formally lobbied the NSW Government for enforcement powers to be transferred to councils.',
      url: 'https://www.northernbeaches.nsw.gov.au/council/news/media-releases/stronger-approach-to-use-e-bikes-and-e-scooters-welcome',
    },
  ],

  links: {
    statutory: [
      { label: 'Road Rules 2014 (NSW)', url: 'https://legislation.nsw.gov.au/view/html/inforce/current/sl-2014-0758' },
      { label: 'Road Transport Act 2013 (NSW)', url: 'https://legislation.nsw.gov.au/view/html/inforce/current/act-2013-018' },
      { label: 'Road Vehicle Standards Act 2018 (Cth)', url: 'https://www.legislation.gov.au/Series/C2018A00061' },
    ],
    safety: [
      { label: 'TfNSW: E-bike Safety & Compliance', url: 'https://www.transport.nsw.gov.au/roadsafety/bicycle-riders/ebikes' },
      { label: 'NSW Government: E-Bike FAQs', url: 'https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters/bicycles-electric-bikes/e-bike-faqs' },
      { label: 'Safety on Wheels — Parents & Carers Guide (TfNSW PDF)', url: 'https://www.transport.nsw.gov.au/system/files/media/documents/2025/crs_safety_on_wheels.pdf' },
    ],
  },

  flyer: {
    available: false,
    pdfPath: '/ebike_national_flyer.pdf',
  },
}
