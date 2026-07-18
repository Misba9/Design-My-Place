export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
};

export const howWeWork = {
  label: 'How We Work',
} as const;

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Meet',
    description: 'New client meeting and brief understanding of your vision, space, and goals.',
    details: [
      'Initial client consultation',
      'Brief understanding of requirements',
      'Timeline and budget alignment',
    ],
  },
  {
    number: '02',
    title: 'Research',
    description: 'Brainstorming and preparation to shape a design direction grounded in your context.',
    details: [
      'Brainstorming and ideation',
      'Site and spatial analysis',
      'Material and inspiration research',
    ],
  },
  {
    number: '03',
    title: 'Concept',
    description: 'Overall ideas and style generation — mood, narrative, and spatial direction.',
    details: [
      'Design narrative and mood boards',
      'Overall ideas and style generation',
      'Preliminary layout concepts',
    ],
  },
  {
    number: '04',
    title: 'Design',
    description: 'Layout and style selection refined into a cohesive interior language.',
    details: [
      'Layout planning and zoning',
      'Style, material, and finish selection',
      'Furniture and lighting concepts',
    ],
  },
  {
    number: '05',
    title: 'Finalize',
    description: 'Final design details and presentation for client review and approval.',
    details: [
      'Detailed drawings and specifications',
      'Final design presentation',
      'Approvals and documentation',
    ],
  },
  {
    number: '06',
    title: 'Create',
    description: 'Project execution within budget — coordinating vendors, contractors, and site work.',
    details: [
      'Vendor and contractor coordination',
      'On-site execution and supervision',
      'Budget tracking throughout the build',
    ],
  },
  {
    number: '07',
    title: 'Install',
    description: 'Installation and final touches — styling, placement, and handover.',
    details: [
      'Furniture installation and placement',
      'Final styling and accessories',
      'Walkthrough and project handover',
    ],
  },
];

/** Simplified steps for service page cards */
export const serviceProcessSteps = processSteps.map((step) => ({
  step: step.title,
  description: step.description,
}));
