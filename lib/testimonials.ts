import { ARTIUS_IMAGES, DELHI_VILLA_IMAGES, LIFE_77_IMAGES } from '@/lib/images';
import { STUDIO_ADDRESS } from '@/lib/site';

export const testimonials = [
  {
    id: 1,
    name: 'Priya & Arjun Mehta',
    project: '77 Life',
    location: 'Mumbai',
    quote:
      'Design My Place transformed our vision into a home that feels uniquely ours. Every corner tells our story, and the attention to detail is extraordinary.',
    image: LIFE_77_IMAGES.hero,
  },
  {
    id: 2,
    name: 'Vikram Singh',
    project: 'ARTIUS Experience Centre',
    location: 'India',
    quote:
      'They understood our brand before we did. Our workspace now communicates our values to every visitor. The design process was incredibly thorough.',
    image: ARTIUS_IMAGES.hero,
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    project: 'Delhi Villa',
    location: 'Delhi',
    quote:
      'The villa has become a destination in itself. Guests keep asking about the design. They somehow captured the exact mood we envisioned.',
    image: DELHI_VILLA_IMAGES.hero,
  },
] as const;

export const trustBadges = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5.0', label: 'Client Rating' },
  { value: '₹25L+', label: 'Minimum Budget' },
] as const;

export const googleReviewsUrl = STUDIO_ADDRESS.mapsUrl;
