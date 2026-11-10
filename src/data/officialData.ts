import { VehicleVariant, SpecificationCategory, GalleryItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/nero_ev_hero_exterior_1794325808320.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/nero_ev_interior_dashboard_1794325806309.jpg';
export const SIDE_PROFILE_IMAGE = '/src/assets/images/nero_ev_side_profile_1794325809408.jpg';
export const CHARGING_IMAGE = '/src/assets/images/nero_ev_charging_station_1794325809193.jpg';

export const BRAND = {
  name: 'NERO EV',
  identity: 'EVSundak',
  tagline: 'Bharat Ki Apni Electric Car',
  positioning: 'Affordable electric mobility for Indian families.',
  philosophy: 'Clean Mobility for Every Indian Family.',
  officialPhone: '+91 9015981781',
  officialWebsite: 'https://neroev.in/',
  values: [
    'Built for Bharat',
    'Affordable electric mobility',
    'Practical urban transportation',
    'Sustainable mobility',
    'Family-oriented design',
  ],
};

export const EXECUTIVE_VARIANT: VehicleVariant = {
  id: 'nero-ev-executive',
  name: 'NERO EV Executive',
  badge: 'OFFICIAL VARIANT',
  priceFormatted: '₹6,51,000',
  priceRaw: 651000,
  priceLabelNote: 'Price displayed on official website (Subject to manufacturer confirmation on ex-showroom / on-road breakup)',
  range: '150 – 200 km',
  chargingTime: '5 – 6 Hours',
  topSpeed: '50 – 60 km/h',
  seatingCapacity: 4,
  brakingSystem: 'Front & Rear Disc Brakes',
  features: [
    'Starlight Black Interiors',
    'Full Digital Cluster',
    '17.78 cm (7") Embedded LCD Screen / 10.25" Floating Touchscreen',
    'Power-adjustable ORVM',
    'Reverse Parking Sensors',
    'Front & Rear Disc Brakes',
    'Compact 4-Seater Urban Layout',
  ],
};

export const BATTERY_INCONSISTENCY_NOTE = {
  title: 'Official Battery Specification Notice',
  detail:
    'The official website contains conflicting battery information across published sections (76V / 196Ah in summary documentation vs. 72V / 165Ah in specification tables). This inconsistency requires direct manufacturer confirmation.',
  specs: [
    { label: 'Published Listing A', value: '76V / 196Ah' },
    { label: 'Published Listing B', value: '72V / 165Ah' },
  ],
};

export const SPECIFICATIONS: SpecificationCategory[] = [
  {
    category: 'PERFORMANCE & RANGE',
    items: [
      { label: 'Claimed Driving Range', value: '150 – 200 km per charge' },
      { label: 'Maximum Speed', value: '50 – 60 km/h' },
      { label: 'Charging Duration', value: '5 – 6 Hours' },
      { label: 'Seating Capacity', value: '4 Passengers (Family Layout)' },
    ],
  },
  {
    category: 'BATTERY & CHARGING ARCHITECTURE',
    items: [
      {
        label: 'Battery Pack Voltage & Capacity',
        value: '76V / 196Ah or 72V / 165Ah',
        isDiscrepancy: true,
        note: 'Conflicting values published on official site. Manufacturer confirmation pending.',
      },
      { label: 'Charging Time (Full Charge)', value: '5 – 6 Hours standard AC' },
      { label: 'Braking Energy Recovery', value: 'Integrated Urban Regen Control' },
    ],
  },
  {
    category: 'CHASSIS, BRAKES & TYRES',
    items: [
      { label: 'Braking System', value: 'Front and Rear Disc Brakes' },
      { label: 'Suspension Front', value: 'Independent Strut Suspension' },
      { label: 'Suspension Rear', value: 'Trailing Arm Rigid Axle' },
      { label: 'Wheel & Tyre Specifications', value: 'Urban Alloy Wheels with Radial Tubeless Tyres' },
      { label: 'Vehicle Layout', value: 'Compact Urban 4-Seater Hatchback' },
    ],
  },
  {
    category: 'INTERIOR, ENTERTAINMENT & SAFETY',
    items: [
      { label: 'Cabin Interior Theme', value: 'Starlight Black Interiors' },
      { label: 'Instrument Cluster', value: 'Full Digital Cluster' },
      { label: 'Infotainment Display', value: '17.78 cm (7") Embedded LCD / 10.25-inch Floating Widescreen' },
      { label: 'Mirrors', value: 'Power-Adjustable ORVM' },
      { label: 'Parking Assistance', value: 'Reverse Parking Sensors' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-ext-1',
    title: 'NERO EV Urban Front & Side Profile',
    category: 'exterior',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-int-1',
    title: 'Starlight Black Dashboard & 10.25" Floating Widescreen',
    category: 'interior',
    image: INTERIOR_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-ext-2',
    title: 'NERO EV Side Profile & Alloy Wheels with Disc Brakes',
    category: 'exterior',
    image: SIDE_PROFILE_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-life-1',
    title: 'NERO EV Convenient Home Charging Setup',
    category: 'lifestyle',
    image: CHARGING_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-int-2',
    title: 'Full Digital Cluster & Ergonomic Cockpit',
    category: 'interior',
    image: INTERIOR_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-ext-3',
    title: 'Compact 4-Seater City Proportions',
    category: 'exterior',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
  },
];

export const INDIAN_STATES = [
  'Maharashtra',
  'Karnataka',
  'Delhi NCR',
  'Telangana',
  'Tamil Nadu',
  'Gujarat',
  'Uttar Pradesh',
  'West Bengal',
  'Rajasthan',
  'Punjab',
  'Kerala',
];

export const COLOR_OPTIONS = [
  { id: 'starlight-black', name: 'Starlight Black', hex: '#101010', accent: '#C6F36B', image: HERO_IMAGE },
  { id: 'pearl-white', name: 'Pearl White', hex: '#F0F0F0', accent: '#101010', image: HERO_IMAGE },
  { id: 'electric-lime', name: 'Electric Lime Accent Edition', hex: '#C6F36B', accent: '#101010', image: HERO_IMAGE },
  { id: 'metallic-grey', name: 'Metallic Grey', hex: '#50535A', accent: '#C6F36B', image: HERO_IMAGE },
];

export const OFFICIAL_FAQS = [
  {
    question: 'What is the claimed driving range of NERO EV?',
    answer: 'The official claimed driving range for NERO EV is 150–200 km per full charge, making it ideal for daily urban family commutes.',
  },
  {
    question: 'How long does it take to charge NERO EV?',
    answer: 'NERO EV charges fully in approximately 5–6 hours using standard AC power outlets or home charging setups.',
  },
  {
    question: 'What is the passenger seating capacity?',
    answer: 'NERO EV is designed specifically as a 4-seater compact electric car for Indian family transportation.',
  },
  {
    question: 'What is the top speed of NERO EV?',
    answer: 'The maximum speed of NERO EV is 50–60 km/h, optimized for safe and efficient city driving.',
  },
  {
    question: 'What braking system does NERO EV use?',
    answer: 'NERO EV is equipped with front and rear disc brakes for responsive stopping power.',
  },
  {
    question: 'What is the price of NERO EV Executive?',
    answer: 'The price published on the official website for NERO EV Executive is ₹6,51,000. (Note: Specific ex-showroom or on-road breakups require direct manufacturer confirmation).',
  },
  {
    question: 'Why is there a note about battery capacity in the specs?',
    answer: 'The official website lists conflicting battery specifications across different sections (76V / 196Ah in summary documentation versus 72V / 165Ah in technical breakdown). We clearly flag this inconsistency pending official manufacturer clarification.',
  },
];
