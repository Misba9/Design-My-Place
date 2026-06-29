import type { Project } from './projects';

export type ProjectDetail = Project & {
  overview: string;
  clientRequirements: string[];
  designPhilosophy: string;
  materials: string[];
  timeline: string;
  challenges: string[];
  solutions: string[];
  faqs: { question: string; answer: string }[];
};

const extensions: Record<string, Omit<ProjectDetail, keyof Project>> = {
  'nvt-symphony-of-orchards': {
    overview:
      'A premium apartment where nature-informed materiality meets urban refinement — designed for a young family seeking calm without sacrificing contemporary elegance.',
    clientRequirements: [
      'Bring natural warmth into a new-build apartment with limited outdoor access',
      'Accommodate work-from-home needs alongside family entertaining',
      'Use durable, child-friendly finishes without compromising aesthetic quality',
      'Complete turnkey delivery within a 12-month timeline',
    ],
    designPhilosophy:
      'We approached this home as a sanctuary — earthy textures, warm wooden rafters, and a neutral palette that lets light and life become the primary decoration.',
    materials: [
      'Natural oak rafters and veneer panelling',
      'Hand-tumbled stone flooring in living areas',
      'Linen-upholstered custom seating',
      'Brass hardware and warm-toned lighting',
    ],
    timeline: '12 months from concept to handover',
    challenges: [
      'Limited natural light in the central corridor',
      'Balancing open-plan living with acoustic privacy for work calls',
    ],
    solutions: [
      'Introduced reflective surfaces and layered lighting to amplify available daylight',
      'Designed a semi-open study nook with acoustic panel screening',
    ],
    faqs: [
      {
        question: 'What style defines the NVT Symphony of Orchards apartment?',
        answer: 'Nature-neutral contemporary — earthy materials, warm wood, and a calming palette that brings the outdoors in.',
      },
    ],
  },
  'pastel-penthouse': {
    overview:
      'A penthouse conceived as an airy gallery of soft colour and stone — where pastel tones and marble create a serene backdrop for art and everyday life.',
    clientRequirements: [
      'Maximise panoramic views without compromising privacy',
      'Integrate an existing art collection into the interior architecture',
      'Create distinct zones for entertaining and private retreat within open volumes',
    ],
    designPhilosophy:
      'Softness as strength — pastel hues and marble surfaces chosen not for trend, but for their ability to hold light and let curated artwork breathe.',
    materials: [
      'Calacatta marble in kitchen and master bath',
      'Custom pastel lacquer millwork',
      'Plaster-finish walls in blush and sage tones',
      'Bespoke brass and glass lighting',
    ],
    timeline: '14 months including custom furniture procurement',
    challenges: [
      'Double-height volume created acoustic challenges and heating inefficiency',
      'Art placement required careful wall preparation and lighting design',
    ],
    solutions: [
      'Installed acoustic ceiling baffles integrated into the lighting design',
      'Designed a picture-lighting system with museum-grade UV filtering',
    ],
    faqs: [
      {
        question: 'How was the art collection integrated?',
        answer: 'Each piece was positioned during the concept phase, with dedicated lighting and wall treatments planned before execution began.',
      },
    ],
  },
  'delhi-villa': {
    overview:
      'A contemporary Indian villa that honours heritage craft while embracing modern spatial planning — designed for a family rooted in tradition and forward in taste.',
    clientRequirements: [
      'Reflect Indian heritage without appearing dated or museum-like',
      'Accommodate multi-generational living with private and shared zones',
      'Integrate handcrafted elements from regional artisans',
      'Deliver a complete turnkey fit-out across 6,800 sq ft',
    ],
    designPhilosophy:
      'Heritage is not nostalgia — it is material memory. We wove handcrafted detail into contemporary volumes so the home feels both rooted and alive.',
    materials: [
      'Hand-carved sandstone jaali screens',
      'Reclaimed teak structural accents',
      'Handloom textile wall panels',
      'Polished kota stone flooring',
    ],
    timeline: '18 months across three execution phases',
    challenges: [
      'Coordinating artisan workshops across multiple states on a fixed timeline',
      'Balancing traditional motifs with the client\'s preference for clean lines',
    ],
    solutions: [
      'Established a phased artisan delivery schedule with on-site assembly protocols',
      'Used traditional craft as accent rather than dominant — jaali as screens, not wallpaper',
    ],
    faqs: [
      {
        question: 'Where is the Delhi Villa located?',
        answer: 'The villa is located in Delhi, designed and delivered by Design My Place with heritage-contemporary interiors throughout.',
      },
    ],
  },
  'artius-experience-centre': {
    overview:
      'An immersive brand experience centre where product storytelling, warm materiality, and interactive display design converge to create memorable customer journeys.',
    clientRequirements: [
      'Translate brand identity into a three-dimensional spatial experience',
      'Create flexible display zones for rotating product collections',
      'Achieve high footfall durability without sacrificing premium finishes',
    ],
    designPhilosophy:
      'Retail is theatre. We designed a spatial narrative that guides visitors through discovery, engagement, and emotional connection with the brand.',
    materials: [
      'American walnut wall cladding',
      'Powder-coated steel display frameworks',
      'Corian interactive counter surfaces',
      'Programmable LED accent lighting',
    ],
    timeline: '9 months from brief to launch',
    challenges: [
      'Tight launch deadline with custom display fabrication lead times',
      'High-traffic durability requirements for all touch surfaces',
    ],
    solutions: [
      'Parallel-tracked design and fabrication with weekly factory sign-offs',
      'Specified commercial-grade finishes with 5-year wear warranties',
    ],
    faqs: [
      {
        question: 'Is this a residential or commercial project?',
        answer: 'Commercial — an experience centre designed for brand immersion, though executed with the same craft standards as our residential work.',
      },
    ],
  },
  'lakehouse-in-the-sky': {
    overview:
      'A compact residence that proves scale is not luxury — graceful arches, abundant light, and minimalist restraint create a home that feels expansive and serene.',
    clientRequirements: [
      'Maximise perceived space within 1,800 sq ft',
      'Create a sense of calm in a high-density urban setting',
      'Incorporate arches as a recurring architectural motif',
    ],
    designPhilosophy:
      'Minimalism with soul — every element earns its place. Arches frame views, light defines rooms, and emptiness is treated as a material.',
    materials: [
      'Micro-cement flooring throughout',
      'Arched plaster doorways with concealed frames',
      'Natural linen and wool textiles',
      'Hand-blown glass pendant lighting',
    ],
    timeline: '10 months including structural modifications',
    challenges: [
      'Structural constraints limited wall removal options',
      'Compact footprint required multi-functional furniture solutions',
    ],
    solutions: [
      'Used arches to define zones without building full walls',
      'Commissioned transformable furniture — dining table to desk, sofa to guest bed',
    ],
    faqs: [
      {
        question: 'How was space maximised in a compact home?',
        answer: 'Through arches instead of walls, built-in storage, multi-functional furniture, and a restrained material palette that reduces visual clutter.',
      },
    ],
  },
  '77-life': {
    overview:
      'An Art Deco-inspired residence where three generations of heirloom teakwood find renewed dignity amid lacquered millwork, bronze fixtures, and considered geometry.',
    clientRequirements: [
      'Integrate family heirloom furniture without aesthetic compromise',
      'Express a Parisian Art Deco sensibility with Indian craft sensibility',
      'Create formal entertaining spaces alongside intimate family zones',
    ],
    designPhilosophy:
      'The past is not preserved behind glass — it is lived with. Heirloom pieces were measured, restored, and positioned as anchors within a contemporary Art Deco framework.',
    materials: [
      'Restored heirloom teakwood furniture',
      'High-gloss lacquered millwork in deep green and navy',
      'Bronze door hardware and lighting fixtures',
      'Terrazzo flooring with brass inlay borders',
    ],
    timeline: '16 months including furniture restoration',
    challenges: [
      'Restoring and integrating heirloom pieces of varying condition and scale',
      'Achieving Art Deco geometry within an existing structural grid',
    ],
    solutions: [
      'Partnered with specialist restorers for heirloom pieces before interior fit-out began',
      'Applied Deco motifs through joinery and lighting rather than structural alteration',
    ],
    faqs: [
      {
        question: 'How were heirloom furniture pieces integrated?',
        answer: 'Each piece was assessed, restored where needed, and positioned during the concept phase — with new interiors designed around their scale and character.',
      },
    ],
  },
};

export function getProjectDetail(slug: string, project: Project): ProjectDetail {
  const ext = extensions[slug];
  if (!ext) {
    return {
      ...project,
      overview: project.description,
      clientRequirements: project.highlights,
      designPhilosophy: project.description,
      materials: ['Premium materials curated for project scope'],
      timeline: project.duration,
      challenges: ['Project-specific challenges addressed through research-led design'],
      solutions: project.highlights,
      faqs: [
        {
          question: `What is the ${project.name} project?`,
          answer: project.description,
        },
      ],
    };
  }
  return { ...project, ...ext };
}
