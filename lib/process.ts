export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding you, your lifestyle, aspirations, and how you want to feel in your space.',
    details: [
      'Initial consultation & site visit',
      'Lifestyle questionnaire & inspiration mapping',
      'Budget and timeline alignment',
    ],
  },
  {
    number: '02',
    title: 'Research',
    description:
      'Site analysis, spatial studies, material research, and understanding the context of your project.',
    details: [
      'Measured surveys & spatial analysis',
      'Climate, light, and acoustic studies',
      'Material and finish research',
    ],
  },
  {
    number: '03',
    title: 'Concept',
    description:
      'Developing the design direction through mood boards, sketches, and initial spatial planning.',
    details: [
      'Design narrative & mood boards',
      'Preliminary layouts & zoning',
      'Material palette presentation',
    ],
  },
  {
    number: '04',
    title: 'Design Development',
    description:
      'Detailed drawings, 3D visualizations, material selections, and lighting design.',
    details: [
      'Detailed drawings & specifications',
      'Photorealistic 3D renders',
      'Lighting, MEP & joinery coordination',
    ],
  },
  {
    number: '05',
    title: 'Execution',
    description:
      'Coordinating with contractors, artisans, and suppliers to bring the design to life.',
    details: [
      'Vendor selection & procurement',
      'Site supervision & quality control',
      'Progress reviews & snag management',
    ],
  },
  {
    number: '06',
    title: 'Styling & Handover',
    description:
      'Final styling, furniture placement, art curation, and the moment we hand over your keys.',
    details: [
      'Furniture placement & art hanging',
      'Soft furnishing & accessory styling',
      'Final walkthrough & documentation',
    ],
  },
];
