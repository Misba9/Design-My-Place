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
    slug: 'the-meridian-residence',
    name: 'The Meridian Residence',
    location: 'Mumbai',
    type: 'Residential',
    style: 'Contemporary Minimal',
    year: '2024',
    featured: true,
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description:
      'A 4,200 sq ft penthouse reimagined as a calm sanctuary above the city. Warm travertine, custom brass detailing, and layered lighting create a home that feels both expansive and intimate — designed for a family who entertains often but craves quiet retreat.',
    area: '4,200 sq ft',
    duration: '14 months',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Custom millwork and concealed storage throughout',
      'Bespoke lighting design with scene-based controls',
      'Curated art placement and furniture sourcing',
    ],
  },
  {
    id: 2,
    slug: 'azure-penthouse',
    name: 'Azure Penthouse',
    location: 'Bangalore',
    type: 'Luxury Apartment',
    style: 'Japandi',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A sky-high apartment where Japanese restraint meets Scandinavian warmth. Natural oak, linen textures, and a muted palette allow Bangalore\'s skyline to become the focal point of the living experience.',
    area: '3,100 sq ft',
    duration: '11 months',
    gallery: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Open-plan living with acoustic zoning',
      'Hand-finished Japanese-inspired joinery',
      'Wellness-focused master suite design',
    ],
  },
  {
    id: 3,
    slug: 'verdant-villa',
    name: 'Verdant Villa',
    location: 'Pune',
    type: 'Villa',
    style: 'Modern Tropical',
    year: '2023',
    featured: true,
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A courtyard villa designed to blur the boundary between indoors and out. Cross-ventilation, local stone, and lush planting define a residence that breathes with the Pune climate.',
    area: '6,800 sq ft',
    duration: '18 months',
    gallery: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Indoor-outdoor living pavilion',
      'Sustainable material palette',
      'Landscape-integrated pool terrace',
    ],
  },
  {
    id: 4,
    slug: 'the-canvas-office',
    name: 'The Canvas Office',
    location: 'Mumbai',
    type: 'Commercial',
    style: 'Industrial Chic',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/32370580/pexels-photo-32370580.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description:
      'A creative agency headquarters that communicates brand identity through spatial storytelling. Exposed structure, bold geometry, and flexible zones support collaboration without sacrificing focus.',
    area: '8,500 sq ft',
    duration: '9 months',
    gallery: [
      'https://images.pexels.com/photos/32370580/pexels-photo-32370580.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Brand-integrated environmental graphics',
      'Acoustic pods and focus rooms',
      'Biophilic breakout spaces',
    ],
  },
  {
    id: 5,
    slug: 'serenity-spa',
    name: 'Serenity Spa',
    location: 'Goa',
    type: 'Hospitality',
    style: 'Coastal Minimal',
    year: '2023',
    featured: false,
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A wellness retreat where every material and scent was chosen to slow the senses. Soft plaster walls, teak accents, and diffused natural light create an atmosphere of restorative calm.',
    area: '5,200 sq ft',
    duration: '12 months',
    gallery: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Treatment room sensory design',
      'Custom aromatherapy integration',
      'Coastal material research',
    ],
  },
  {
    id: 6,
    slug: 'heritage-revival',
    name: 'Heritage Revival',
    location: 'Delhi',
    type: 'Renovation',
    style: 'Art Deco Modern',
    year: '2024',
    featured: false,
    image:
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A 1940s bungalow restored with reverence for its original character while introducing contemporary comfort. Geometric motifs, restored plasterwork, and curated vintage pieces honour the past without pastiche.',
    area: '3,600 sq ft',
    duration: '16 months',
    gallery: [
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: [
      'Heritage facade restoration',
      'Art Deco-inspired custom furniture',
      'Period-accurate lighting reproduction',
    ],
  },
];

export const projectTypes = [
  'All',
  'Residential',
  'Luxury Apartment',
  'Villa',
  'Commercial',
  'Hospitality',
  'Renovation',
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
