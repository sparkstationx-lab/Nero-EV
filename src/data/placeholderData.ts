import { VehicleVariant, SpecificationCategory, GalleryItem, ExperienceCenter } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_ev_exterior_1794324104154.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/ev_interior_cabin_1794324105298.jpg';
export const CHASSIS_IMAGE = '/src/assets/images/ev_performance_chassis_1794324106686.jpg';
export const SHOWROOM_IMAGE = '/src/assets/images/ev_experience_center_1794324105172.jpg';

export const VEHICLE_VARIANTS: VehicleVariant[] = [
  {
    id: 'nero-gt-performance',
    name: '[VARIANT A - GT PERFORMANCE]',
    badge: 'FLAGSHIP DUAL MOTOR',
    pricePlaceholder: '[PRICE - STARTING AT ₹ XX,XX,XXX]',
    acceleration: '[SPECIFICATION VALUE: 0-100 KM/H IN X.X SECONDS]',
    topSpeed: '[SPECIFICATION VALUE: XXX KM/H TOP SPEED]',
    range: '[SPECIFICATION VALUE: XXX KM CLTC RANGE]',
    peakPower: '[SPECIFICATION VALUE: XXX HP PEAK OUTPUT]',
    driveTrain: '[SPECIFICATION VALUE: DUAL MOTOR AWD]',
    features: [
      '[FEATURE PLACEHOLDER: DYNAMIC AIR SUSPENSION]',
      '[FEATURE PLACEHOLDER: 21" FORGED AERO WHEELS]',
      '[FEATURE PLACEHOLDER: SYNTHETIC ENGINE SOUND CREATOR]',
      '[FEATURE PLACEHOLDER: ULTRA FAST 800V CHARGING]',
    ],
  },
  {
    id: 'nero-long-range',
    name: '[VARIANT B - LONG RANGE EDITION]',
    badge: 'MAXIMUM DISTANCE',
    pricePlaceholder: '[PRICE - STARTING AT ₹ XX,XX,XXX]',
    acceleration: '[SPECIFICATION VALUE: 0-100 KM/H IN X.X SECONDS]',
    topSpeed: '[SPECIFICATION VALUE: XXX KM/H TOP SPEED]',
    range: '[SPECIFICATION VALUE: XXX+ KM EXTENDED RANGE]',
    peakPower: '[SPECIFICATION VALUE: XXX HP OUTPUT]',
    driveTrain: '[SPECIFICATION VALUE: REAR WHEEL DRIVE]',
    features: [
      '[FEATURE PLACEHOLDER: HIGH ENERGY DENSITY PACK]',
      '[FEATURE PLACEHOLDER: ECO-COASTING REGENERATIVE BRAKING]',
      '[FEATURE PLACEHOLDER: ULTRA LOW DRAG COEFFICIENT]',
      '[FEATURE PLACEHOLDER: PANORAMIC GLASS ROOF]',
    ],
  },
  {
    id: 'nero-urban-edition',
    name: '[VARIANT C - URBAN LUXURY]',
    badge: 'CITY PERFORMANCE',
    pricePlaceholder: '[PRICE - STARTING AT ₹ XX,XX,XXX]',
    acceleration: '[SPECIFICATION VALUE: 0-100 KM/H IN X.X SECONDS]',
    topSpeed: '[SPECIFICATION VALUE: XXX KM/H TOP SPEED]',
    range: '[SPECIFICATION VALUE: XXX KM CITY RANGE]',
    peakPower: '[SPECIFICATION VALUE: XXX HP OUTPUT]',
    driveTrain: '[SPECIFICATION VALUE: SINGLE MOTOR RWD]',
    features: [
      '[FEATURE PLACEHOLDER: AGILE CITY TURNING RADIUS]',
      '[FEATURE PLACEHOLDER: ADVANCED PARK ASSIST PRO]',
      '[FEATURE PLACEHOLDER: HEATED & VENTILATED SUSTAINABLE SEATS]',
      '[FEATURE PLACEHOLDER: IMPERSIVE 18-SPEAKER AUDIO]',
    ],
  },
];

export const SPECIFICATIONS: SpecificationCategory[] = [
  {
    category: 'POWERTRAIN & PERFORMANCE',
    items: [
      { label: 'Motor Architecture', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: DUAL ELECTRIC MOTOR]' },
      { label: 'System Peak Power', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXX HP / XXX KW]' },
      { label: 'Peak System Torque', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXX NM]' },
      { label: '0 - 100 km/h Acceleration', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: X.X SECONDS]' },
      { label: 'Top Speed (Electronically Limited)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXX KM/H]' },
      { label: 'Drag Coefficient (Cd)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: 0.XX Cd]' },
    ],
  },
  {
    category: 'BATTERY & CHARGING ARCHITECTURE',
    items: [
      { label: 'Battery Capacity (Usable)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XX.X KWH LITHIUM-ION]' },
      { label: 'Platform Voltage', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: 800V ARCHITECTURE]' },
      { label: 'DC Fast Charging Rate (10-80%)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XX MINUTES (350KW DC)]' },
      { label: 'AC Home Charger Speed', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: 11 KW / 22 KW THREE-PHASE]' },
      { label: 'Estimated Driving Range', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXX KM CERTIFIED]' },
    ],
  },
  {
    category: 'DIMENSIONS & WEIGHT',
    items: [
      { label: 'Overall Length', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXXX MM]' },
      { label: 'Overall Width (With Mirrors)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXXX MM]' },
      { label: 'Overall Height', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXXX MM]' },
      { label: 'Wheelbase', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXXX MM]' },
      { label: 'Curb Weight', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXXX KG]' },
      { label: 'Trunk Capacity (Rear + Frunk)', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: XXX LITRES]' },
    ],
  },
  {
    category: 'TECHNOLOGY & DRIVER ASSISTANCE',
    items: [
      { label: 'Cockpit Operating System', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: NERO OS V1.0]' },
      { label: 'Infotainment Display', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: 16-INCH OLED PANORAMIC TOUCHSCREEN]' },
      { label: 'Autonomous Driving Hardware', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: LIDAR + 12 ULTRASONIC SENSORS]' },
      { label: 'Over-The-Air (OTA) Updates', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: FULL-VEHICLE OTA CAPABLE]' },
      { label: 'Connectivity', valuePlaceholder: '[TECHNICAL SPECIFICATIONS: 5G DUAL SIM + WI-FI 6E]' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '[VEHICLE IMAGE - EXTERIOR DUSK PAVILION]',
    category: 'exterior',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-2',
    title: '[VEHICLE IMAGE - DIGITAL COCKPIT CABIN]',
    category: 'interior',
    image: INTERIOR_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-3',
    title: '[VEHICLE IMAGE - HIGH TECH SKATEBOARD CHASSIS]',
    category: 'exterior',
    image: CHASSIS_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-4',
    title: '[VEHICLE IMAGE - EXPERIENCE CENTER SHOWROOM]',
    category: 'lifestyle',
    image: SHOWROOM_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-5',
    title: '[VEHICLE IMAGE - AERODYNAMIC SIDE SILHOUETTE]',
    category: 'exterior',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
  },
  {
    id: 'gal-6',
    title: '[VEHICLE IMAGE - PANORAMIC GLASS COCKPIT]',
    category: 'interior',
    image: INTERIOR_IMAGE,
    aspectRatio: '16:9',
  },
];

export const EXPERIENCE_CENTERS: ExperienceCenter[] = [
  {
    id: 'exp-mumbai',
    city: 'Mumbai',
    name: 'NERO Experience Center — Worli Sea Face',
    addressPlaceholder: '[CONTACT INFORMATION: EXPERIENCE CENTER ADDRESS - MUMBAI]',
    phonePlaceholder: '[CONTACT INFORMATION: TELEPHONE - MUMBAI HUB]',
    hoursPlaceholder: '[CONTACT INFORMATION: TIMINGS - 10:00 AM TO 8:00 PM DAILY]',
  },
  {
    id: 'exp-bengaluru',
    city: 'Bengaluru',
    name: 'NERO Experience Hub — Indiranagar',
    addressPlaceholder: '[CONTACT INFORMATION: EXPERIENCE CENTER ADDRESS - BENGALURU]',
    phonePlaceholder: '[CONTACT INFORMATION: TELEPHONE - BENGALURU HUB]',
    hoursPlaceholder: '[CONTACT INFORMATION: TIMINGS - 10:00 AM TO 8:00 PM DAILY]',
  },
  {
    id: 'exp-delhi',
    city: 'Delhi NCR',
    name: 'NERO Experience Studio — Golf Course Road, Gurugram',
    addressPlaceholder: '[CONTACT INFORMATION: EXPERIENCE CENTER ADDRESS - GURUGRAM]',
    phonePlaceholder: '[CONTACT INFORMATION: TELEPHONE - NCR HUB]',
    hoursPlaceholder: '[CONTACT INFORMATION: TIMINGS - 10:00 AM TO 8:00 PM DAILY]',
  },
  {
    id: 'exp-hyderabad',
    city: 'Hyderabad',
    name: 'NERO Experience Center — Jubilee Hills',
    addressPlaceholder: '[CONTACT INFORMATION: EXPERIENCE CENTER ADDRESS - HYDERABAD]',
    phonePlaceholder: '[CONTACT INFORMATION: TELEPHONE - HYDERABAD HUB]',
    hoursPlaceholder: '[CONTACT INFORMATION: TIMINGS - 10:00 AM TO 8:00 PM DAILY]',
  },
];

export const VEHICLE_COLORS = [
  { id: 'obsidian', name: 'Obsidian Black', hex: '#101010', accent: '#C6F36B', image: HERO_IMAGE },
  { id: 'titanium', name: 'Liquid Titanium', hex: '#4A4D52', accent: '#C6F36B', image: HERO_IMAGE },
  { id: 'pearl', name: 'Alpine Pearl White', hex: '#EAEAEA', accent: '#101010', image: HERO_IMAGE },
  { id: 'lime-edition', name: 'Electric Lime Edition', hex: '#C6F36B', accent: '#101010', image: HERO_IMAGE },
];

export const FAQS = [
  {
    question: 'How do I book a test drive for NERO EV?',
    answer: 'You can book a test drive directly through our website by clicking "Book Test Drive", selecting your city, preferred date, and nearest NERO Experience Center. Our customer specialist will confirm your slot.',
  },
  {
    question: 'What is the phase structure of the NERO EV product launch?',
    answer: 'Currently we are presenting Phase 1 (Website Architecture, Navigation, Design System & Structural Placeholders). Phase 2 will introduce finalized technical specs, official launch pricing, and commercial vehicle configurer details.',
  },
  {
    question: 'How does charging infrastructure support work in India?',
    answer: 'NERO EV supports ultra-fast DC charging up to 800V voltage architecture compatible with CCS2 charging standards across India, alongside home wallbox installation setup.',
  },
  {
    question: 'Can I customize my vehicle variant during pre-booking?',
    answer: 'Yes! In Phase 1, you can select your preferred variant, exterior finish, and location details in our interactive Book Now workflow.',
  },
];
