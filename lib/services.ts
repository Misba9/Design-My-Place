import {
  Home,
  Building2,
  Warehouse,
  Briefcase,
  Palette,
  Sofa,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Interiors',
    description:
      'Complete home transformations that reflect your lifestyle and aspirations — from concept to final styling.',
    deliverables: [
      'Lifestyle & spatial research',
      'Concept development & mood boards',
      '3D visualizations',
      'Material & furniture curation',
      'Project management & handover',
    ],
  },
  {
    icon: Building2,
    title: 'Luxury Apartments',
    description:
      'Sophisticated urban living spaces designed for modern life, maximizing light, flow, and refined detail.',
    deliverables: [
      'Space optimization planning',
      'Custom joinery design',
      'Lighting & acoustic design',
      'Art & accessory styling',
      'Turnkey execution support',
    ],
  },
  {
    icon: Warehouse,
    title: 'Villa Design',
    description:
      'Expansive residences crafted with architectural sensitivity, indoor-outdoor harmony, and lasting materiality.',
    deliverables: [
      'Site & climate analysis',
      'Landscape integration',
      'Bespoke furniture design',
      'Vendor & artisan coordination',
      'Phased execution planning',
    ],
  },
  {
    icon: Briefcase,
    title: 'Commercial Interiors',
    description:
      'Workspaces and retail environments that inspire productivity and reflect brand identity.',
    deliverables: [
      'Brand spatial strategy',
      'Workplace zoning & flow',
      'Environmental graphics',
      'FF&E specification',
      'Compliance & safety coordination',
    ],
  },
  {
    icon: Palette,
    title: 'Workspace Design',
    description:
      'Offices and studios designed for creativity, collaboration, and the evolving nature of work.',
    deliverables: [
      'Hybrid work planning',
      'Acoustic & privacy solutions',
      'Biophilic design integration',
      'Technology infrastructure planning',
      'Change management support',
    ],
  },
  {
    icon: Sofa,
    title: 'Renovation & Styling',
    description:
      'Breathing new life into existing spaces with refined touches, without starting from scratch.',
    deliverables: [
      'Existing condition audit',
      'Selective demolition planning',
      'Furniture & decor refresh',
      'Color & texture consulting',
      'Styling & art curation',
    ],
  },
];

export const serviceFaqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timelines vary by scope — a styling refresh may take 4–8 weeks, while a full villa fit-out can span 12–18 months. We provide a detailed schedule during the concept phase.',
  },
  {
    question: 'Do you work outside Bengaluru?',
    answer:
      'Yes. We have delivered projects across Mumbai, Delhi, Pune, Goa, and other Indian cities. Remote coordination and site visits are built into our process.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We offer design-only, design + project management, and turnkey packages. Fees are structured based on project scope and square footage, discussed transparently during your initial consultation.',
  },
  {
    question: 'Can you work with my existing contractor?',
    answer:
      'Absolutely. We collaborate with your preferred contractors or can recommend trusted partners from our network of artisans and specialists.',
  },
];
