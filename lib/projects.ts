import {
  ADARSH_PALM_GALLERY,
  ADARSH_PALM_IMAGES,
  ARTIUS_GALLERY,
  ARTIUS_IMAGES,
  DELHI_VILLA_GALLERY,
  DELHI_VILLA_IMAGES,
  LAKEHOUSE_GALLERY,
  LAKEHOUSE_IMAGES,
  LIFE_77_GALLERY,
  LIFE_77_IMAGES,
  NVT_IMAGES,
  NVT_PROJECT_GALLERY,
  PASTEL_PENTHOUSE_GALLERY,
  PASTEL_PENTHOUSE_IMAGES,
  SVASA_GALLERY,
  SVASA_IMAGES,
} from '@/lib/images';

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
    id: 8,
    slug: 'adarsh-palm-meadows',
    name: 'Adarsh Palm Meadows Villa',
    location: 'Whitefield, Bangalore',
    type: '6 BHK Villa',
    style: 'Family · Accessible · Vastu',
    year: '2024',
    featured: true,
    image: ADARSH_PALM_IMAGES.hero,
    description: [
      'Adarsh Palm Meadows Villa',
      '',
      'A 6 BHK villa spanning 5,400 sq ft in Adarsh Palm Meadows, Whitefield, Bangalore — thoughtfully transformed for a four-member family from a twenty-year-old bungalow.',
      '',
      'Civil modifications brought in larger windows and Vastu compliance, while accessibility was designed in from the start: ramps, lifts, and an ADA-compliant bathroom for visiting parents.',
      '',
      'The home includes a master bedroom suite with walk-in closet, steam room, bathtub, dual vanities, and an art room; two terraces with backyard and front lawn; a dog bath in the utility; and wet and dry kitchens separated by a pocket sliding door.',
    ].join('\n'),
    area: '5,400 sq ft',
    duration: 'Full villa renovation',
    gallery: [...ADARSH_PALM_GALLERY],
    highlights: [
      '20-year-old bungalow transformed with larger windows and Vastu compliance',
      'Wheelchair accessibility with ramps, lifts, and ADA-compliant bathroom',
      'Master suite with walk-in closet, steam room, bathtub, dual vanities & art room',
      'Two terraces, backyard & front lawn with dog bath in utility areas',
      'Wet and dry kitchens separated by a pocket sliding door',
    ],
  },
  {
    id: 7,
    slug: 'svasa-homes',
    name: 'Svasa Homes',
    location: 'Bangalore',
    type: '6 BHK Residence',
    style: 'Contemporary · Warm · Refined',
    year: 'Dec 2025',
    featured: true,
    image: SVASA_IMAGES.hero,
    description:
      'A refined 6 BHK home in Bangalore shaped by warm timber, soft neutral tones, expressive details, and thoughtfully planned spaces for family living, entertaining, and retreat.',
    area: '6 BHK',
    duration: 'Completed December 2025',
    gallery: [...SVASA_GALLERY],
    highlights: [
      'Warm contemporary interiors designed for a large family',
      'Bespoke storage, layered lighting, and expressive material details',
      'Dedicated spaces for entertaining, relaxation, and home cinema',
    ],
  },
  {
    id: 1,
    slug: 'nvt-symphony-of-orchards',
    name: 'NVT Symphony of Orchards',
    location: 'India',
    type: 'Luxury Villa',
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
    image: PASTEL_PENTHOUSE_IMAGES.hero,
    description:
      'A sophisticated penthouse where soft pastel tones meet luxurious marble finishes. Thoughtfully curated artwork, clean lines, and bespoke furnishings create a refined living experience filled with warmth and personality.',
    area: '4,500 sq ft',
    duration: '14 months',
    gallery: [...PASTEL_PENTHOUSE_GALLERY],
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
    image: DELHI_VILLA_IMAGES.hero,
    description:
      'A contemporary Indian villa inspired by traditional heritage architecture. Rich textures, handcrafted details, and modern spatial planning blend seamlessly to celebrate India\'s timeless design language with modern luxury.',
    area: '6,800 sq ft',
    duration: '18 months',
    gallery: [...DELHI_VILLA_GALLERY],
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
    location: 'Bangalore',
    type: 'Experience Centre',
    style: 'Wood · Brand · Experiential',
    year: '2024',
    featured: false,
    image: ARTIUS_IMAGES.hero,
    description:
      'An immersive brand experience centre crafted to showcase products through engaging spatial storytelling. Warm wood finishes, innovative displays, and interactive elements create memorable customer experiences while reflecting the brand\'s identity.',
    area: '8,500 sq ft',
    duration: '9 months',
    gallery: [...ARTIUS_GALLERY],
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
    image: LAKEHOUSE_IMAGES.hero,
    description: [
      'A Light-Filled Urban Retreat for a Creative Couple',
      '',
      'Designed as a serene retreat above the city, this compact apartment was envisioned as a “lakehouse in the sky” — calm, layered, and deeply personal. Created for a creative couple living with their dog and cat, the home needed to balance warmth, functionality, and durability without compromising on design.',
      '',
      'Softness became a central theme. Arched details were introduced to gently shape spaces and visually soften the layout, while hidden cabinetry ensured ample storage without overwhelming the apartment. All fabrics and finishes were carefully selected to be pet-friendly, allowing the home to be lived in freely and comfortably.',
      '',
      'To enhance natural light and spatial flow, one bedroom wall was opened up, transforming the area into a flexible office-cum-guest room. This intervention not only brought in more daylight but also created a sense of openness, making the home feel larger and more breathable.',
      '',
      'The result is a cozy, thoughtful residence — a space that supports creativity, accommodates everyday life with pets, and offers a sense of calm that feels removed from the city below.',
    ].join('\n'),
    area: '1,800 sq ft',
    duration: '10 months',
    gallery: [...LAKEHOUSE_GALLERY],
    highlights: [],
  },
  {
    id: 6,
    slug: '77-life',
    name: '77 Life',
    location: 'Bangalore',
    type: 'Premium Apartment',
    style: 'Art Deco · Luxury · Heritage',
    year: '2023',
    featured: true,
    image: LIFE_77_IMAGES.hero,
    description: [
      'Art Deco Residence for a Parsi Couple',
      '',
      'This home was conceived as a quiet tribute to legacy, memory, and timeless elegance. Designed for a Parsi couple, the brief centred around honouring their heirloom teakwood furniture while translating their appreciation for classic Art Deco into a contemporary living environment.',
      '',
      'The design language draws from strong geometric lines, subtle symmetry, and warm materiality. Existing teakwood pieces were carefully curated into the spatial narrative, allowing them to anchor the home emotionally while new finishes and lighting brought balance and modernity.',
      '',
      'Muted tones, brass accents, and layered lighting create a refined yet lived-in atmosphere — a home where history is preserved, not displayed, and where every space feels personal, meaningful, and enduring.',
    ].join('\n'),
    area: '5,400 sq ft',
    duration: '16 months',
    gallery: [...LIFE_77_GALLERY],
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
  '6 BHK Residence',
  '6 BHK Villa',
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
