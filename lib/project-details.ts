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
  'adarsh-palm-meadows': {
    overview: [
      'Adarsh Palm Meadows Villa',
      '',
      'A 6 BHK villa spanning 5,400 sq ft in Adarsh Palm Meadows, Whitefield, Bangalore — thoughtfully transformed for a four-member family from a twenty-year-old bungalow.',
      '',
      'Civil modifications brought in larger windows and Vastu compliance, while accessibility was designed in from the start: ramps, lifts, and an ADA-compliant bathroom for visiting parents.',
      '',
      'The home includes a master bedroom suite with walk-in closet, steam room, bathtub, dual vanities, and an art room; two terraces with backyard and front lawn; a dog bath in the utility; and wet and dry kitchens separated by a pocket sliding door.',
    ].join('\n'),
    clientRequirements: [
      'Transform a 20-year-old bungalow for a four-member family',
      'Increase natural light with larger windows and ensure Vastu compliance',
      'Provide wheelchair accessibility for visiting parents',
      'Create a generous master suite with spa-like bathroom and art room',
      'Separate wet and dry kitchens with flexible connection',
    ],
    designPhilosophy:
      'Renovation as renewal — honour the footprint of a lived-in bungalow while opening it to light, accessibility, and the rhythms of a young family.',
    materials: [
      'Expanded window openings with Vastu-aligned planning',
      'Accessible circulation with ramps and residential lift',
      'ADA-compliant bathroom fittings and clearances',
      'Pocket sliding door between wet and dry kitchens',
    ],
    timeline: 'Full villa renovation — Adarsh Palm Meadows, Whitefield',
    challenges: [
      'Civil modifications within an existing twenty-year-old structure',
      'Integrating lifts, ramps, and ADA bathrooms without compromising aesthetics',
      'Balancing open outdoor living with privacy in a villa community',
    ],
    solutions: [
      'Structural openings enlarged for larger windows while maintaining integrity',
      'Accessibility designed as part of the architecture, not an afterthought',
      'Outdoor rooms — terraces, lawn, and utility dog bath — planned for daily use',
    ],
    faqs: [
      {
        question: 'Where is Adarsh Palm Meadows Villa located?',
        answer:
          'In Adarsh Palm Meadows, Whitefield, Bangalore — a 5,400 sq ft 6 BHK villa renovated by Design My Place.',
      },
      {
        question: 'Is the home wheelchair accessible?',
        answer:
          'Yes. The design includes ramps, a lift, and an ADA-compliant bathroom for visiting parents and multi-generational comfort.',
      },
    ],
  },
  'svasa-homes': {
    overview:
      'A spacious 6 BHK residence in Bangalore designed as a calm, contemporary family home. Warm timber, layered neutrals, sculptural lighting, and carefully detailed joinery bring continuity across private rooms and shared spaces.',
    clientRequirements: [
      'Create a cohesive identity across a large six-bedroom home',
      'Balance elegant entertaining spaces with comfortable everyday living',
      'Provide generous, discreet storage throughout the residence',
      'Complete the home for handover in December 2025',
    ],
    designPhilosophy:
      'Quiet luxury through warmth and restraint — neutral foundations allow natural wood, tailored furniture, artwork, and expressive lighting to give every room its own character without losing visual continuity.',
    materials: [
      'Natural wood veneer and fluted timber detailing',
      'Soft neutral upholstery and textured wall finishes',
      'Stone surfaces with dark metal accents',
      'Bespoke joinery and layered architectural lighting',
    ],
    timeline: 'Completed December 2025',
    challenges: [
      'Maintaining a consistent design language across six bedrooms and multiple shared spaces',
      'Integrating extensive storage without making rooms feel visually heavy',
    ],
    solutions: [
      'Used a consistent warm-neutral palette while varying details and textures by room',
      'Integrated full-height storage into architectural wall compositions and custom joinery',
    ],
    faqs: [
      {
        question: 'What is the design style of Svasa Homes?',
        answer:
          'Svasa Homes uses a warm contemporary language with natural wood, layered neutrals, refined detailing, and tailored spaces for family living.',
      },
    ],
  },
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
    timeline: 'Ongoing- Artius exeprience centre',
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
    overview: [
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
    clientRequirements: [
      'Create a calm retreat for a creative couple living with a dog and cat',
      'Balance warmth, functionality, and durability without compromising design',
      'Maximise natural light and make the compact apartment feel more open',
      'Incorporate arches and hidden storage as a soft, layered spatial language',
    ],
    designPhilosophy:
      'Minimalism with soul — every element earns its place. Arches frame views, light defines rooms, and emptiness is treated as a material.',
    materials: [
      'Micro-cement flooring throughout',
      'Arched plaster doorways with concealed frames',
      'Natural linen and wool textiles',
      'Hand-blown glass pendant lighting',
    ],
    timeline: '05 months',
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
    overview: [
      'Art Deco Residence for a Parsi Couple',
      '',
      'This home was conceived as a quiet tribute to legacy, memory, and timeless elegance. Designed for a Parsi couple, the brief centred around honouring their heirloom teakwood furniture while translating their appreciation for classic Art Deco into a contemporary living environment.',
      '',
      'The design language draws from strong geometric lines, subtle symmetry, and warm materiality. Existing teakwood pieces were carefully curated into the spatial narrative, allowing them to anchor the home emotionally while new finishes and lighting brought balance and modernity.',
      '',
      'Muted tones, brass accents, and layered lighting create a refined yet lived-in atmosphere — a home where history is preserved, not displayed, and where every space feels personal, meaningful, and enduring.',
    ].join('\n'),
    clientRequirements: [
      'Integrate family heirloom furniture without aesthetic compromise',
      'Express a classic Art Deco sensibility with Indian craft sensibility',
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
