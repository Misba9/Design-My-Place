import { MISSING_IMAGE, NVT_IMAGES, NVT_PROJECT_GALLERY } from '@/lib/images';

export type Project = {
  id: number;
  slug: string;
  name: string;
  location: string;
  type: string;
  style: string;
  year: string;
  featured: boolean;
  image: string;
  description: string;
  area: string;
  duration: string;
  gallery: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'nvt-symphony-of-orchards',
    name: 'NVT Symphony of Orchards',
    location: 'India',
    type: 'Premium Apartment',
    style: 'Nature · Neutral · Rafters',
    year: '2024',
    featured: false,
    image: NVT_IMAGES.family,
    description:
      'A premium apartment designed to bring nature indoors through earthy materials, warm wooden rafters, and a calming neutral palette. The interiors balance contemporary elegance with timeless comfort, creating a peaceful home for modern family living.',
    area: '3,200 sq ft',
    duration: '12 months',
    gallery: [...NVT_PROJECT_GALLERY],
    highlights: [
      'Earthy materials and warm wooden rafters',
      'Calming neutral palette throughout',
      'Contemporary elegance with timeless comfort',
    ],
  },
  {
    id: 2,
    slug: 'pastel-penthouse',
    name: 'Pastel Penthouse',
    location: 'India',
    type: 'Penthouse',
    style: 'Marble · Pastel · Artistic',
    year: '2024',
    featured: false,
    image: MISSING_IMAGE,
    description:
      'A sophisticated penthouse where soft pastel tones meet luxurious marble finishes. Thoughtfully curated artwork, clean lines, and bespoke furnishings create a refined living experience filled with warmth and personality.',
    area: '4,500 sq ft',
    duration: '14 months',
    gallery: [MISSING_IMAGE],
    highlights: [
      'Soft pastel tones with luxurious marble finishes',
      'Thoughtfully curated artwork and clean lines',
      'Bespoke furnishings with warmth and personality',
    ],
  },
  {
    id: 3,
    slug: 'delhi-villa',
    name: 'Delhi Villa',
    location: 'Delhi',
    type: 'Villa',
    style: 'Heritage · Contemporary · Indian',
    year: '2023',
    featured: false,
    image: MISSING_IMAGE,
    description:
      'A contemporary Indian villa inspired by traditional heritage architecture. Rich textures, handcrafted details, and modern spatial planning blend seamlessly to celebrate India\'s timeless design language with modern luxury.',
    area: '6,800 sq ft',
    duration: '18 months',
    gallery: [MISSING_IMAGE],
    highlights: [
      'Heritage-inspired contemporary architecture',
      'Rich textures and handcrafted details',
      'Modern spatial planning with Indian design language',
    ],
  },
  {
    id: 4,
    slug: 'artius-experience-centre',
    name: 'ARTIUS Experience Centre',
    location: 'India',
    type: 'Experience Centre',
    style: 'Wood · Brand · Experiential',
    year: '2024',
    featured: false,
    image: MISSING_IMAGE,
    description:
      'An immersive brand experience centre crafted to showcase products through engaging spatial storytelling. Warm wood finishes, innovative displays, and interactive elements create memorable customer experiences while reflecting the brand\'s identity.',
    area: '8,500 sq ft',
    duration: '9 months',
    gallery: [MISSING_IMAGE],
    highlights: [
      'Engaging spatial storytelling for product showcase',
      'Warm wood finishes and innovative displays',
      'Interactive elements reflecting brand identity',
    ],
  },
  {
    id: 5,
    slug: 'lakehouse-in-the-sky',
    name: 'Lakehouse in the Sky',
    location: 'India',
    type: 'Compact Living',
    style: 'Arches · Light · Minimal',
    year: '2024',
    featured: false,
    image: MISSING_IMAGE,
    description:
      'A compact residence designed with graceful arches, abundant natural light, and minimalist aesthetics. Every space is optimized for functionality while maintaining an airy atmosphere that feels both spacious and serene.',
    area: '1,800 sq ft',
    duration: '10 months',
    gallery: [MISSING_IMAGE],
    highlights: [
      'Graceful arches and abundant natural light',
      'Minimalist aesthetics with optimized functionality',
      'Airy atmosphere that feels spacious and serene',
    ],
  },
  {
    id: 6,
    slug: '77-life',
    name: '77 Life',
    location: 'Mumbai, Maharashtra',
    type: 'Luxury Villa',
    style: 'Art Deco · Luxury · Heritage',
    year: '2023',
    featured: true,
    image: MISSING_IMAGE,
    description:
      'An Art Deco-inspired home conceived for a Parisian-spirited couple, where three generations of heirloom teakwood furniture find renewed dignity amid lacquered millwork, bronze fixtures, and considered geometry.',
    area: '5,400 sq ft',
    duration: '16 months',
    gallery: [MISSING_IMAGE],
    highlights: [
      'Heirloom teakwood furniture integrated with Art Deco geometry',
      'Lacquered millwork and bronze fixtures throughout',
      'Timeless craftsmanship blended with contemporary luxury',
    ],
  },
];

export const projectTypes = [
  'All',
  'Premium Apartment',
  'Penthouse',
  'Villa',
  'Experience Centre',
  'Compact Living',
  'Luxury Villa',
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
