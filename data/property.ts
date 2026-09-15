/**
 * Single source of truth for the page.
 *
 * Every figure, label and contact detail on the landing page is read from here,
 * so the whole offer can be updated in one file. Money is stored as the exact
 * display string ("AED 3,300,000") so nothing is ever re-formatted or rounded
 * by the UI; raw numbers appear only where structured data needs them.
 */

const WHATSAPP_NUMBER = '971567770272';
const WHATSAPP_MESSAGE =
  "Hello, I'm interested in the DIFC Duplex Penthouse at Park Towers. Please share more details.";

export const contact = {
  agentCompany: 'Dubai Rapid Properties',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  phoneDisplay: '+971 4 529 4904',
  phoneHref: 'tel:+97145294904',
  email: 'office@dubairapidproperties.com',
  address: 'DRP — Golden Mile 9, Palm Jumeirah, Dubai, UAE',
  websiteDisplay: 'www.dubairapidproperties.com',
  websiteUrl: 'https://www.dubairapidproperties.com',
} as const;

export const brand = {
  name: 'Dubai Rapid Properties',
  logoLight: '/images/logo/drp-logo-white.png', // for dark grounds
  logoDark: '/images/logo/drp-logo-dark.png', // for light grounds
  logoWidth: 720,
  logoHeight: 385,
} as const;

/**
 * Unit size. `sqft` and `sqm` are the raw values (structured data needs them);
 * the label strings are what the page renders, so the size is formatted
 * identically everywhere it appears.
 */
export const size = {
  sqft: 2018,
  sqm: 187.5,
  sqftLabel: '2,018 sqft',
  sqmLabel: '187.5 sqm',
  full: '2,018 sqft (187.5 sqm)',
} as const;

export const hero = {
  label: 'Investment Opportunity — DIFC',
  title: 'DIFC Duplex Penthouse',
  subtitle: '2-Bedroom Duplex · 2,018 sqft · Park Towers, DIFC · Ready Investment',
  price: 'AED 3,300,000',
  priceNote: 'Target purchase price AED 3,200,000 · AED 1,585/sqft',
  image: '/images/gallery/hero-living.jpg',
  imageAlt:
    'Main living area of the DIFC duplex penthouse at sunset, framed by floor-to-ceiling angled glazing overlooking the Dubai skyline',
  imageWidth: 1264,
  imageHeight: 843,
  primaryCta: 'Enquire on WhatsApp',
  secondaryCta: 'View Full Numbers',
} as const;

export const quickFacts = [
  { value: '2', label: 'Bedrooms' },
  { value: 'Duplex', label: 'Penthouse' },
  { value: size.sqftLabel, label: size.sqmLabel },
  { value: 'Park Towers', label: 'DIFC' },
  { value: 'AED 1,585', label: 'Per sqft' },
  { value: 'Ready', label: 'To move / rent' },
] as const;

export const opportunity = {
  label: 'The Opportunity',
  heading: 'Priced well below the district it sits in',
  paragraphs: [
    'A two-bedroom duplex penthouse inside Park Towers, in the heart of the Dubai International Financial Centre, available at AED 1,585 per square foot — in a district where comparable towers trade above AED 2,500 per square foot.',
    'That gap is the whole case. It leaves room for two clear routes: renovate the unit and resell into the district’s prevailing rate, or hold it as a ready rental asset and let a fully let DIFC address do the work.',
    'Supply in this specific category — duplex penthouse floor plates inside DIFC — is limited, and it is not being replenished, while demand for the district keeps growing as DIFC expands. The unit is ready to move into or rent today; the two studies below set out each route in full.',
  ],
  image: '/images/gallery/glazing-portrait.jpg',
  imageAlt:
    'Floor-to-ceiling angled glazing in the duplex penthouse, looking out across Dubai from the upper level',
  imageWidth: 843,
  imageHeight: 1264,
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const gallery: GalleryImage[] = [
  {
    src: '/images/gallery/hero-living.jpg',
    alt: 'Living area with pale sofas, round marble coffee tables and a stone column, set against floor-to-ceiling glazing and the Dubai skyline at sunset',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/glazing-portrait.jpg',
    alt: 'Full-height angled window framing a clear sky and the city below, with a potted palm on the stone floor',
    caption: 'Floor-to-Ceiling Glazing',
    width: 843,
    height: 1264,
  },
  {
    src: '/images/gallery/kitchen-island.jpg',
    alt: 'Dark kitchen island beneath the dramatic diagonal structure of the tower’s glass façade',
    caption: 'Kitchen',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/master-bedroom.jpg',
    alt: 'Master bedroom with a tall upholstered headboard, twin bedside lamps, a writing desk and full-height curtained windows',
    caption: 'Master Bedroom',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/master-ensuite.jpg',
    alt: 'Master en-suite bathroom with a freestanding oval bath, walk-in rain shower and marble mosaic tiling, with the bedroom beyond',
    caption: 'Master En-Suite',
    width: 1106,
    height: 960,
  },
  {
    src: '/images/gallery/reception-lounge.jpg',
    alt: 'Reception lounge with armchairs and a low table, lit by afternoon sun through the full-height glazing',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/upper-lounge.jpg',
    alt: 'Upper-level lounge with seating arranged along the curved glass wall above the coastline',
    caption: 'Living Area',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/kitchen-bar.jpg',
    alt: 'Kitchen with breakfast bar seating, fitted cabinetry and appliances, opening onto the glazed living space',
    caption: 'Kitchen',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/ensuite-view.jpg',
    alt: 'En-suite bathroom finished in mosaic tile, with a dark vanity and walk-in shower, lit by a full-height window behind sheer curtains',
    caption: 'En-Suite with View',
    width: 1365,
    height: 768,
  },
  {
    src: '/images/gallery/second-bathroom.jpg',
    alt: 'Second bathroom finished in mosaic tile with a long twin vanity, bath and walk-in shower',
    caption: 'Second Bathroom',
    width: 1365,
    height: 768,
  },
  {
    src: '/images/gallery/guest-bathroom.jpg',
    alt: 'Guest bathroom with a vessel basin on a dark stone counter, mirrored wall and bath',
    caption: 'Guest Bathroom',
    width: 1264,
    height: 843,
  },
  {
    src: '/images/gallery/lounge-detail.jpg',
    alt: 'Detail of the lounge: a fluted marble coffee table with a candle and book, beside a pale armchair',
    caption: 'Lounge Detail',
    width: 843,
    height: 1264,
  },
  {
    src: '/images/gallery/living-area.jpg',
    alt: 'Second aspect of the living area, showing the seating arrangement and the run of glazing along the façade',
    caption: 'Living Area, Second Aspect',
    width: 1264,
    height: 843,
  },
];

export const scenarioA = {
  label: 'Feasibility Study — Resale',
  heading: 'Renovate & Resell',
  intro:
    'Acquire at the target price, carry out a full renovation and furnishing programme, then exit into the district’s prevailing rate.',
  rows: [
    { label: 'Unit size', value: size.full },
    { label: 'Asking price', value: 'AED 3,300,000' },
    { label: 'Target purchase price', value: 'AED 3,200,000' },
    { label: 'DIFC registration (5%)', value: 'AED 160,000' },
    { label: 'Agency fee (2%)', value: 'AED 64,000' },
    { label: 'Renovation & furnishing', value: 'AED 600,000' },
  ],
  total: { label: 'Total investment', value: 'AED 4,024,000' },
  resale: { label: 'Projected resale value', value: 'AED 5,000,000 – 5,200,000' },
  profit: { label: 'Projected Profit', value: 'AED 976,000 – 1,176,000' },
  renovation: {
    heading: 'Renovation & Exit Strategy',
    budget: 'AED 600,000',
    scope:
      'Budget covering electrical installations, flooring, window tint and doors, carpentry, AC systems, kitchen and bathroom upgrades, wall finishes, lighting, paint, decorative elements, furniture, appliances and interior décor.',
    timelineLabel: 'Estimated timeline',
    timeline: '4–6 months',
    exit:
      'After renovation the investor can resell or retain the unit as a rental asset and benefit from potential future capital appreciation.',
  },
  comparables: {
    heading: 'Market Comparables',
    // The subject unit is listed alongside the comparables so the entry rate
    // reads directly against the district rate, per square foot.
    subject: {
      name: 'This unit — Park Towers',
      sizeLabel: size.sqftLabel,
      price: 'AED 3,300,000',
      rate: 'AED 1,585/sqft',
    },
    items: [
      { name: 'Central Park Towers', price: 'AED 5.20M', rate: 'AED 2,550/sqft' },
      { name: 'Index Tower', price: 'AED 5.25M', rate: 'AED 2,516/sqft' },
    ],
    note: 'Comparable DIFC towers trade above AED 2,500 per square foot. At 2,018 sqft, this unit is offered at AED 5 per square foot — the gap is the opportunity.',
    footnote: 'Market data extracted from DXB Interact.',
  },
} as const;

export const scenarioCombined = {
  label: 'Feasibility Study — Renovate, Rent & Resell',
  heading: 'Renovate, Rent & Resell',
  intro:
    'The same renovation as above — but the unit is let for a year before it is sold. The rent is additive: it stacks on top of the resale profit rather than replacing it, which lifts the return well beyond a straight resale.',
  figures: [
    { label: 'Rent after renovation', value: 'AED 300,000', note: 'Per year' },
    { label: 'Long-term ROI', value: '7.45', note: 'On rent alone' },
  ],
  combined: {
    profit: {
      label: 'Combined profit',
      value: 'AED 1,276,000 – 1,476,000',
      note: 'Renovation resale + 1 year rent',
    },
    roi: {
      label: 'Combined ROI',
      value: '31% – 36%',
      note: 'Renovation resale + 1 year rent',
    },
  },
  comparison: 'Against AED 976,000 – 1,176,000 on a straight resale, without renting.',
} as const;

export const scenarioB = {
  label: 'Feasibility Study — Rental ROI',
  heading: 'Rental Income',
  intro:
    'Held as-is, the 2,018 sqft duplex is ready to let today. Three positions, from a single-cheque long lease to a managed short-term operation.',
  rentals: [
    { type: 'Long-term rent', amount: 'AED 200,000', terms: '1 cheque', highlight: false },
    { type: 'Long-term rent', amount: 'AED 210,000', terms: '2 cheques', highlight: false },
    { type: 'Short-term rent', amount: 'AED 280,000', terms: '75% occupancy', highlight: true },
  ],
  acquisitionCosts: {
    heading: 'Acquisition Costs',
    items: [
      { label: 'DIFC registration (5%)', value: 'AED 160,000' },
      { label: 'Agency fee (2%)', value: 'AED 64,000' },
    ],
  },
  roi: [
    { label: 'Long-term ROI', value: '5%' },
    { label: 'Short-term ROI', value: '7%' },
  ],
  appreciation: {
    heading: 'Capital Appreciation',
    value: '3-year assumption — 5% annually',
    note: 'Capital appreciation is an assumption and is not guaranteed.',
  },
  rationale: {
    heading: 'Why This Category',
    body: 'DIFC is rapidly expanding, while availability of units in this specific category remains limited due to strong demand and restricted supply.',
  },
  importantNote: {
    heading: 'Important note',
    body: 'Projected rental income is based on a NON-renovated unit. If upgrades are carried out, projected rent increases to AED 290,000 – 310,000.',
  },
} as const;

export const location = {
  label: 'Location',
  heading: 'Park Towers, DIFC',
  intro:
    'On the Financial Centre side of Sheikh Zayed Road — inside the DIFC district, minutes from Downtown and a straight run to the airport.',
  mapImage: '/images/location-map.png',
  mapImageAlt:
    'Illustrated map of the Dubai coastline from Palm Jumeirah to Deira, with Park Towers marked in orange within DIFC, beside Sheikh Zayed Road',
  mapImageWidth: 2200,
  mapImageHeight: 947,
  embedSrc: 'https://www.google.com/maps?q=Park%20Towers%2C%20DIFC%2C%20Dubai&output=embed',
  embedTitle: 'Google Map showing Park Towers, DIFC, Dubai',
  driveTimesNote: 'Approximate driving times in normal traffic.',
  landmarks: [
    { name: 'DIFC Gate Village', time: '3 min' },
    { name: 'Emirates Towers Metro', time: '4 min' },
    { name: 'Sheikh Zayed Road', time: '2 min' },
    { name: 'Downtown Dubai & Burj Khalifa', time: '8 min' },
    { name: 'The Dubai Mall', time: '9 min' },
    { name: 'City Walk', time: '8 min' },
    { name: 'DXB International Airport', time: '15 min' },
  ],
} as const;

export const finalCta = {
  label: 'Next Step',
  heading: 'Get in Touch with a Specialist',
  body: 'Full floor plans, the complete feasibility study and a viewing can be arranged directly. Message on WhatsApp for the fastest reply.',
  backgroundImage: '/images/gallery/reception-lounge.jpg',
  backgroundWidth: 1264,
  backgroundHeight: 843,
  ctaLabel: 'Message Us on WhatsApp',
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Dubai Rapid Properties. All rights reserved.`,
  disclaimer:
    'All figures, projections and returns stated on this page are estimates based on current market data and are provided for information purposes only. They do not constitute financial advice or a guarantee of future performance. Terms and availability are subject to change.',
} as const;

export const seo = {
  title: 'DIFC Duplex Penthouse — Park Towers | Dubai Rapid Properties',
  description:
    '2-bedroom duplex penthouse, 2,018 sqft, in Park Towers, DIFC at AED 3,300,000 — AED 1,585/sqft in a district trading above AED 2,500/sqft. Full feasibility studies inside.',
  siteName: 'Dubai Rapid Properties',
  ogImage: '/images/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    'Living area of the DIFC duplex penthouse at Park Towers, with floor-to-ceiling glazing over the Dubai skyline',
  // Structured-data values -- the only place raw numbers are used.
  numericPrice: 3300000,
  currency: 'AED',
  numberOfBedrooms: 2,
  floorSizeValue: size.sqft,
  floorSizeUnitCode: 'FTK', // UN/CEFACT code for square foot
  locality: 'Dubai International Financial Centre',
  region: 'Dubai',
  country: 'AE',
} as const;
