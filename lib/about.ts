import { ABOUT_QUOTE_IMAGE } from '@/lib/images';

export const aboutStats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '12+', label: 'Cities Served' },
  { value: '100%', label: 'Client Satisfaction' },
] as const;

export const aboutUsIntro = {
  label: 'About Us',
  title: 'Design that shapes how you',
  titleAccent: 'live and work',
  paragraphs: [
    'We believe in the positive impact interior design has on our well-being, creativity, and productivity. We create sustainable design solutions suited to home and office spaces, big and small. What makes us unique is our blend of Indian and Western tastes and practical experience. By working with some of India\'s best craftsmen, we\'ve been able to combine functional simplicity with more verbose aesthetics to create a truly singular approach to interior design.',
    'Our comprehensive services include finding the perfect color palette, textiles, carpets, furniture, and lighting to suit your space. We also provide room planning, a full selection of materials, and project management to guide you through the process from start to finish. Over the years, we\'ve built great relationships with contractors and builders with whom we work together on each project, giving our clients a full-service design team to plan and design your dream home.',
  ],
} as const;

export const whatWeDo = {
  label: 'What We Do',
  items: [
    {
      title: 'Fit-Out Consultation',
      description:
        'Our consultation service establishes your needs and what we will deliver to transform your space.',
    },
    {
      title: 'Project Plan and Schedule',
      description:
        'We provide specialist expertise, including design concepts, specifications, and technical drawings.',
    },
    {
      title: 'Fair Project Budgeting',
      description:
        'We believe that great interior design should be open to everyone, regardless of their budget.',
    },
    {
      title: 'Digital Project Rendering',
      description:
        'We provide you with digital visualizations of your space to ensure you\'re completely happy with the design.',
    },
  ],
} as const;

export const aboutQuote = {
  line1: 'As we evolve, our',
  line2: 'homes should too.',
  image: ABOUT_QUOTE_IMAGE,
  imageAlt: 'Minimalist luxury home interior by Design My Place',
} as const;

export const missionVision = {
  mission:
    'To create interiors that shape how people live, work, and feel — grounded in research, emotion, functionality, and timeless aesthetics.',
  vision:
    'To be India\'s most trusted luxury interior design studio, known for spaces that tell authentic stories and stand the test of time.',
};

export const values = [
  {
    title: 'Research-Led',
    description:
      'Every design begins with deep understanding — of the site, the climate, and the people who will inhabit the space.',
  },
  {
    title: 'Emotionally Grounded',
    description:
      'We design for how spaces make you feel, not just how they look. Comfort, calm, and joy guide every decision.',
  },
  {
    title: 'Timeless Craft',
    description:
      'We favour materials and methods that age beautifully — honest textures, artisan details, and enduring quality.',
  },
  {
    title: 'Collaborative',
    description:
      'Your voice shapes the process. We listen, interpret, and refine until the design feels unmistakably yours.',
  },
] as const;

export const milestones = [
  {
    year: '2021',
    title: 'The Beginning',
    description:
      'Design My Place LLP was founded in Bengaluru with a simple belief: interiors should serve life, not the other way around.',
  },
  {
    year: '2022',
    title: 'First Residences',
    description:
      'Our early residential projects established a research-led approach — spaces shaped by the people, climate, and stories of each home.',
  },
  {
    year: '2023',
    title: 'Pan-India Practice',
    description:
      'Signature work in Mumbai and Delhi — including the Art Deco-inspired 77 Life villa — marked the start of a practice spanning cities across India.',
  },
  {
    year: '2024',
    title: 'Homes & Experience Centres',
    description:
      'A diverse portfolio year — from premium apartments and penthouses to the ARTIUS Experience Centre, blending bespoke living with immersive brand environments.',
  },
  
  {
    year: '2025',
    title: 'End-to-End Craft',
    description:
      'Deeper focus on materiality, artisan detail, and turnkey delivery — from concept and procurement through execution and final styling.',
  },
  {
    year: '2026',
    title: '25+ Projects Delivered',
    description:
      'A milestone of trust — six completed projects across 12+ cities, built on collaboration, timeless craft, and 100% client satisfaction.',
  },
] as const;

export const differentiators = [
  {
    title: 'End-to-End Partnership',
    description:
      'From the first conversation to the final styling touch, we stay with you — design, procurement, execution, and handover.',
  },
  {
    title: 'Pan-India Delivery',
    description:
      'Based in Bengaluru, we serve clients across Mumbai, Delhi, Pune, Goa, and beyond with rigorous remote coordination.',
  },
  {
    title: 'Bespoke, Never Template',
    description:
      'No catalogue solutions. Every project is researched, conceptualised, and crafted uniquely for the people who will live in it.',
  },
] as const;
