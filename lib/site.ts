import { HERO_IMAGE } from '@/lib/images';

export const SITE_URL = 'https://designmyplace.in';

export const BUSINESS = {
  name: 'Design My Place',
  legalName: 'Design My Place LLP',
  tagline: 'Interiors That Define You',
  description:
    'Premium interior design studio creating bespoke residential interiors for new homes and renovations with budgets above ₹25 Lakhs.',
  email: 'hello@designmyplace.in',
  phone: '+918266020600',
  phoneDisplay: '+91 82660 20600',
  foundingDate: '2021',
  priceRange: '₹₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  areaServed: [
    'Bangalore',
    'Bengaluru',
    'Delhi NCR',
    'New Delhi',
    'Gurgaon',
    'Gurugram',
    'Noida',
    'Ghaziabad',
    'Faridabad',
    'Mumbai',
    'Pune',
    'Goa',
    'India',
  ],
  social: {
    instagram: 'https://instagram.com/design_my_place',
    whatsapp: 'https://wa.me/918266020600',
  },
} as const;

export const STUDIO_ADDRESS = {
  line1: '28, Church St, Shanthala Nagar',
  line2: 'Ashok Nagar, Bengaluru',
  line3: 'Karnataka 560001',
  full: '28, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560001',
  country: 'IN',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=28+Church+St+Shanthala+Nagar+Ashok+Nagar+Bengaluru+560001',
  geo: {
    latitude: 12.9716,
    longitude: 77.5946,
  },
};

export const OG_IMAGE = {
  url: HERO_IMAGE,
  width: 1200,
  height: 630,
  alt: 'Design My Place — Luxury Interior Design Studio in Bangalore & Delhi NCR',
};

export const THEME_COLOR = '#0a0a0a';
