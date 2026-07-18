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
    facebook: 'https://www.facebook.com/profile.php?id=100068908213810',
    instagram: 'https://instagram.com/design_my_place',
    vimeo: 'https://vimeo.com/designmyplace',
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
  mapsUrl: 'https://maps.app.goo.gl/jeugCZd34etYN9PE9',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.5145595732747!2d77.60372151405022!3d12.974891063427737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f7d6c600c7%3A0x1f745b4c2bc4d33f!2sDesign%20my%20place%20LLP!5e0!3m2!1sen!2sin!4v1782851671446!5m2!1sen!2sin',
  geo: {
    latitude: 12.9748911,
    longitude: 77.6037215,
  },
};

export const OG_IMAGE = {
  url: HERO_IMAGE,
  width: 1200,
  height: 630,
  alt: 'Design My Place — Luxury Interior Design Studio in Bangalore & Delhi NCR',
};

export const THEME_COLOR = '#0a0a0a';
