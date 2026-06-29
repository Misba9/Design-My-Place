export type Location = {
  slug: string;
  name: string;
  aliases: string[];
  region: string;
  title: string;
  metaDescription: string;
  keywords: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  intro: string;
  services: string[];
  areasServed: string[];
  landmarks: string[];
  mapsEmbedUrl: string;
  mapsUrl: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  whyChooseUs: string;
  faqs: { question: string; answer: string }[];
};

export const locations: Location[] = [
  {
    slug: 'bangalore',
    name: 'Bangalore',
    aliases: ['Bengaluru'],
    region: 'Karnataka',
    title: 'Luxury Interior Designer Bangalore',
    metaDescription:
      'Luxury interior design in Bangalore for villas, penthouses, and premium homes above ₹25 Lakhs. Bespoke residential interiors by Design My Place.',
    keywords:
      'luxury interior designer Bangalore, premium interiors Bengaluru, villa interior design Bangalore, bespoke home interiors Bangalore',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Bangalore',
    heroDescription:
      'Bespoke interiors for Bangalore homes where craft, comfort, and cosmopolitan living meet with quiet precision.',
    intro:
      'In Bangalore, Design My Place creates considered residences for homeowners who want a space that feels composed, personal, and enduring. From contemporary apartments near the city centre to expansive villas along the eastern growth corridor, our work balances warm material palettes, intelligent storage, artful lighting, and turnkey execution for projects typically above ₹25 Lakhs.',
    services: [
      'Luxury villa interior design in Bangalore',
      'Premium apartment and penthouse interiors',
      'Turnkey home interiors with project management',
      'Kitchen, wardrobe, and bespoke joinery design',
      'Renovation, styling, lighting, and art curation',
    ],
    areasServed: [
      'Indiranagar',
      'Whitefield',
      'Koramangala',
      'Jayanagar',
      'Sadashivanagar',
      'Sarjapur Road',
      'HSR Layout',
      'Hebbal',
      'Richmond Town',
      'Electronic City',
    ],
    landmarks: [
      'Church Street',
      'UB City',
      'Cubbon Park',
      'Bangalore Palace',
      'MG Road',
      'Lalbagh Botanical Garden',
    ],
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6012!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x2e2c8e5e5e5e5e5e5e!2sChurch%20Street%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Church+Street+Bengaluru',
    geo: {
      latitude: 12.9716,
      longitude: 77.6012,
    },
    whyChooseUs:
      'Bangalore homes often ask for a rare mix of refinement and everyday ease: spaces that can host, work hard, and still feel intimate at the end of the day. Our studio brings architectural planning, custom furniture detailing, and disciplined site coordination into one process, so the final home feels curated rather than assembled.',
    faqs: [
      {
        question: 'What budgets do you work with for Bangalore interiors?',
        answer:
          'Most complete Bangalore projects begin above ₹25 Lakhs, with final budgets shaped by home size, custom furniture, civil scope, lighting, appliances, and finish specifications.',
      },
      {
        question: 'Can you design both villas and apartments in Bengaluru?',
        answer:
          'Yes. We design high-rise apartments, penthouses, independent homes, and villas across Bengaluru, adapting the design process to each property type and society guideline.',
      },
      {
        question: 'Do you manage execution in Bangalore?',
        answer:
          'We offer turnkey execution and project management in Bangalore, including vendor coordination, site reviews, material approvals, and final styling before handover.',
      },
      {
        question: 'How long does a premium Bangalore project usually take?',
        answer:
          'A full-home interior project usually takes 4 to 8 months after design freeze, while larger villas or renovation-heavy homes may require a longer phased schedule.',
      },
    ],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    aliases: ['New Delhi'],
    region: 'Delhi',
    title: 'Luxury Interior Designer Delhi',
    metaDescription:
      'Premium interior design in Delhi for luxury homes, bungalows, builder floors, and renovations above ₹25 Lakhs. Bespoke interiors by Design My Place.',
    keywords:
      'luxury interior designer Delhi, premium interiors New Delhi, bungalow interior design Delhi, luxury home renovation Delhi',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Delhi',
    heroDescription:
      'Elegant residential interiors for Delhi homes that respect legacy, lifestyle, and modern comfort in equal measure.',
    intro:
      'Delhi residences carry a strong sense of identity, from gracious family bungalows to refined builder floors and contemporary apartments. Design My Place shapes these homes with a premium yet restrained approach, combining spatial clarity, handcrafted details, layered textiles, and a polished execution process for clients investing in long-term quality.',
    services: [
      'Luxury bungalow and kothi interior design',
      'Premium builder floor interiors in Delhi',
      'Heritage-sensitive home renovation',
      'Formal living, dining, and entertaining spaces',
      'Custom millwork, lighting, and decor curation',
    ],
    areasServed: [
      'Vasant Vihar',
      'Greater Kailash',
      'Defence Colony',
      'New Friends Colony',
      'Saket',
      'Punjabi Bagh',
      'Chanakyapuri',
      'South Extension',
      'Hauz Khas',
      'Rohini',
    ],
    landmarks: [
      'India Gate',
      'Lodhi Garden',
      'Qutub Minar',
      'Connaught Place',
      'Humayun Tomb',
      'Khan Market',
    ],
    mapsEmbedUrl: 'https://www.google.com/maps?q=New%20Delhi%2C%20India&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=New+Delhi+India',
    geo: {
      latitude: 28.6139,
      longitude: 77.209,
    },
    whyChooseUs:
      'Delhi projects reward designers who understand proportion, privacy, family rituals, and the balance between old-world hospitality and present-day convenience. We bring a deeply edited design language to that context, ensuring every room feels luxurious without becoming theatrical.',
    faqs: [
      {
        question: 'Do you design luxury builder floors in Delhi?',
        answer:
          'Yes. We design premium builder floors across Delhi, including space planning, bespoke furniture, lighting, material palettes, and complete execution support.',
      },
      {
        question: 'Can you renovate an older Delhi home?',
        answer:
          'We handle renovation-led interiors where civil updates, services, furniture, and finishes need to be coordinated carefully while preserving the character of the home.',
      },
      {
        question: 'Is ₹25 Lakhs enough for a Delhi home interior project?',
        answer:
          'For selective rooms it may be sufficient, but complete luxury homes in Delhi often require budgets above ₹25 Lakhs depending on the size and finish level.',
      },
      {
        question: 'Do you work with Delhi-based contractors?',
        answer:
          'We can coordinate with trusted local contractors or collaborate with a client-appointed team, while keeping design intent, quality checks, and approvals structured.',
      },
    ],
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    aliases: ['Gurugram'],
    region: 'Haryana',
    title: 'Luxury Interior Designer Gurgaon',
    metaDescription:
      'Luxury interior design in Gurgaon for villas, penthouses, apartments, and executive residences above ₹25 Lakhs. Bespoke interiors by Design My Place.',
    keywords:
      'luxury interior designer Gurgaon, premium interiors Gurugram, villa interiors Gurgaon, penthouse interior design Gurgaon',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Gurgaon',
    heroDescription:
      'Polished, globally inspired interiors for Gurgaon residences designed around ambition, ease, and everyday sophistication.',
    intro:
      'Gurgaon homes often sit at the intersection of corporate pace and private retreat. Our interiors respond with calm planning, tactile materials, generous storage, statement lighting, and refined furniture profiles that make villas, penthouses, and premium apartments feel composed from morning routines to evening hosting.',
    services: [
      'Luxury apartment and penthouse interiors',
      'Villa interior design in Gurgaon and Gurugram',
      'Contemporary living, lounge, and bar design',
      'Home office and executive suite interiors',
      'Turnkey interiors with premium vendor coordination',
    ],
    areasServed: [
      'DLF Phase 1',
      'DLF Phase 2',
      'DLF Phase 5',
      'Golf Course Road',
      'Golf Course Extension Road',
      'Sushant Lok',
      'Sector 57',
      'Sector 65',
      'Nirvana Country',
      'Sohna Road',
    ],
    landmarks: [
      'Cyber Hub',
      'Ambience Mall',
      'Kingdom of Dreams',
      'Leisure Valley Park',
      'Aravalli Biodiversity Park',
      'Galleria Market',
    ],
    mapsEmbedUrl: 'https://www.google.com/maps?q=Gurugram%2C%20Haryana%2C%20India&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gurugram+Haryana+India',
    geo: {
      latitude: 28.4595,
      longitude: 77.0266,
    },
    whyChooseUs:
      'In Gurgaon, premium interiors need the discipline of hospitality design with the warmth of a private residence. We plan for entertaining, work-from-home rhythms, children, pets, and travel-led lifestyles, then translate those needs into crisp details and durable luxury.',
    faqs: [
      {
        question: 'Do you design penthouses on Golf Course Road?',
        answer:
          'Yes. We work on large apartments and penthouses across Golf Course Road, Golf Course Extension Road, and nearby luxury communities.',
      },
      {
        question: 'Can you create a luxury home office in Gurgaon?',
        answer:
          'Absolutely. We design executive home offices with acoustic comfort, concealed wiring, custom storage, video-call lighting, and a finish palette suited to the rest of the home.',
      },
      {
        question: 'What is the budget range for Gurgaon interiors?',
        answer:
          'Complete luxury interiors in Gurgaon generally begin above ₹25 Lakhs and scale with imported finishes, bespoke joinery, automation, and furniture requirements.',
      },
      {
        question: 'Do you handle society approvals and site coordination?',
        answer:
          'We help structure drawings, schedules, vendor access, and execution coordination so work can progress within society rules and practical site constraints.',
      },
    ],
  },
  {
    slug: 'noida',
    name: 'Noida',
    aliases: ['Greater Noida'],
    region: 'Uttar Pradesh',
    title: 'Luxury Interior Designer Noida',
    metaDescription:
      'Bespoke luxury interior design in Noida for apartments, villas, and premium homes above ₹25 Lakhs. Turnkey interiors by Design My Place.',
    keywords:
      'luxury interior designer Noida, premium home interiors Noida, villa interior design Noida, apartment interiors Noida',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Noida',
    heroDescription:
      'Refined interiors for Noida homes that combine clean architecture, practical luxury, and a quietly elevated finish.',
    intro:
      'Noida offers generous new residences, high-rise views, and growing villa communities that deserve interiors planned with intention from the start. Design My Place builds each home around proportion, storage, light, and material depth, giving families a premium environment that feels graceful rather than overdesigned.',
    services: [
      'Luxury apartment interiors in Noida',
      'Villa and independent home interior design',
      'Full-home design for new possession properties',
      'Kitchen, wardrobe, and children room interiors',
      'Turnkey execution, furnishing, and styling',
    ],
    areasServed: [
      'Sector 44',
      'Sector 50',
      'Sector 93',
      'Sector 104',
      'Sector 107',
      'Sector 128',
      'Sector 137',
      'Sector 150',
      'Noida Extension',
      'Greater Noida West',
    ],
    landmarks: [
      'DLF Mall of India',
      'Okhla Bird Sanctuary',
      'Noida Golf Course',
      'Worlds of Wonder',
      'Botanical Garden Metro Station',
      'India Expo Centre',
    ],
    mapsEmbedUrl: 'https://www.google.com/maps?q=Noida%2C%20Uttar%20Pradesh%2C%20India&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Noida+Uttar+Pradesh+India',
    geo: {
      latitude: 28.5355,
      longitude: 77.391,
    },
    whyChooseUs:
      'Noida projects benefit from early design decisions because many homes are handed over as blank canvases. We help clients avoid piecemeal choices by resolving layouts, lighting, storage, furniture, and finishes as one coherent design story before execution begins.',
    faqs: [
      {
        question: 'Do you take up new possession apartments in Noida?',
        answer:
          'Yes. We frequently design new possession homes where the scope includes space planning, modular and custom furniture, lighting, furnishings, and styling.',
      },
      {
        question: 'Can you design villas in Greater Noida?',
        answer:
          'We design villas and independent homes in Greater Noida and Noida Extension, with layouts and material selections tailored to larger family living.',
      },
      {
        question: 'What style works best for luxury homes in Noida?',
        answer:
          'Modern contemporary, soft minimal, and warm Indian-modern styles work especially well, though every design is customized to the client rather than pulled from a catalogue.',
      },
      {
        question: 'Is turnkey service available in Noida?',
        answer:
          'Yes. We can manage the project from concept to handover, including execution planning, vendor coordination, procurement, installation, and final styling.',
      },
    ],
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    aliases: [],
    region: 'Uttar Pradesh',
    title: 'Luxury Interior Designer Ghaziabad',
    metaDescription:
      'Premium interior design in Ghaziabad for luxury apartments, villas, and independent floors above ₹25 Lakhs. Bespoke interiors by Design My Place.',
    keywords:
      'luxury interior designer Ghaziabad, premium interiors Ghaziabad, villa interior design Ghaziabad, home renovation Ghaziabad',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Ghaziabad',
    heroDescription:
      'Warm, sophisticated interiors for Ghaziabad homes designed for family comfort, elegance, and lasting quality.',
    intro:
      'Ghaziabad homeowners often want interiors that feel generous, welcoming, and easy to maintain without losing a premium sensibility. Our design process brings together practical planning, rich textures, custom furniture, and controlled detailing so apartments, villas, and independent floors feel elevated yet deeply livable.',
    services: [
      'Luxury home interiors in Ghaziabad',
      'Villa and independent floor interior design',
      'Premium apartment renovation and fit-outs',
      'Kitchen, puja room, and family lounge design',
      'Custom furniture, decor, and turnkey delivery',
    ],
    areasServed: [
      'Indirapuram',
      'Vaishali',
      'Vasundhara',
      'Raj Nagar Extension',
      'Kavi Nagar',
      'Crossings Republik',
      'Kaushambi',
      'Sahibabad',
      'Govindpuram',
      'Wave City',
    ],
    landmarks: [
      'Swarna Jayanti Park',
      'Shipra Mall',
      'ISKCON Ghaziabad',
      'City Forest',
      'Hindon River Metro Station',
      'Drizzling Land',
    ],
    mapsEmbedUrl: 'https://www.google.com/maps?q=Ghaziabad%2C%20Uttar%20Pradesh%2C%20India&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ghaziabad+Uttar+Pradesh+India',
    geo: {
      latitude: 28.6692,
      longitude: 77.4538,
    },
    whyChooseUs:
      'Our Ghaziabad interiors are designed around real family life: multi-use rooms, generous storage, festive hosting, elder-friendly movement, and finishes that age gracefully. The result is luxury with substance, not just surface treatment.',
    faqs: [
      {
        question: 'Do you work in Indirapuram and Raj Nagar Extension?',
        answer:
          'Yes. We serve Indirapuram, Raj Nagar Extension, Vaishali, Vasundhara, and other premium residential pockets across Ghaziabad.',
      },
      {
        question: 'Can you redesign an occupied Ghaziabad home?',
        answer:
          'We can plan phased renovations for occupied homes, sequencing work so disruption is managed while the design quality remains consistent.',
      },
      {
        question: 'What is a realistic budget for Ghaziabad luxury interiors?',
        answer:
          'Selective makeovers vary, but full-home luxury interiors commonly move above ₹25 Lakhs once custom joinery, finishes, lighting, furniture, and execution are included.',
      },
      {
        question: 'Do you design traditional elements like puja rooms?',
        answer:
          'Yes. We design puja rooms, family lounges, formal seating, and other culturally important spaces with detailing that fits the broader home language.',
      },
    ],
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    aliases: [],
    region: 'Haryana',
    title: 'Luxury Interior Designer Faridabad',
    metaDescription:
      'Luxury interior design in Faridabad for villas, bungalows, apartments, and premium homes above ₹25 Lakhs. Bespoke interiors by Design My Place.',
    keywords:
      'luxury interior designer Faridabad, premium interiors Faridabad, villa interior design Faridabad, bungalow interiors Faridabad',
    heroTitle: 'Luxury Interior Designer',
    heroAccent: 'Faridabad',
    heroDescription:
      'Bespoke interiors for Faridabad homes with generous planning, refined materials, and a calm sense of luxury.',
    intro:
      'Faridabad has a distinct residential character, with spacious plots, independent houses, and evolving high-rise communities. Design My Place creates interiors that make the most of that scale through thoughtful zoning, elegant finishes, custom furniture, and a design process built for homeowners seeking an elevated, long-lasting home.',
    services: [
      'Luxury villa and bungalow interior design',
      'Premium apartment interiors in Faridabad',
      'Full-home renovation and spatial replanning',
      'Formal lounge, bar, and family room design',
      'Turnkey execution with furniture and styling',
    ],
    areasServed: [
      'Sector 14',
      'Sector 15',
      'Sector 16',
      'Sector 21C',
      'Sector 28',
      'Sector 31',
      'Green Fields Colony',
      'Surajkund',
      'Neharpar',
      'Charmwood Village',
    ],
    landmarks: [
      'Surajkund Lake',
      'Town Park',
      'Crown Interiorz Mall',
      'Badkhal Lake',
      'Raja Nahar Singh Palace',
      'ISKCON Faridabad',
    ],
    mapsEmbedUrl: 'https://www.google.com/maps?q=Faridabad%2C%20Haryana%2C%20India&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Faridabad+Haryana+India',
    geo: {
      latitude: 28.4089,
      longitude: 77.3178,
    },
    whyChooseUs:
      'Faridabad homes give us the opportunity to design with width, light, and indoor-outdoor flow. We use that advantage to create rooms that feel gracious and uncluttered, with custom pieces and finish combinations that look premium without feeling forced.',
    faqs: [
      {
        question: 'Do you design independent houses in Faridabad?',
        answer:
          'Yes. Independent houses, villas, and bungalows are a strong fit for our process because they allow detailed planning of room flow, storage, furniture, and lighting.',
      },
      {
        question: 'Can you modernize an older Faridabad bungalow?',
        answer:
          'We can renovate older homes with updated services, new layouts, bespoke furniture, and a contemporary finish palette while respecting the original structure.',
      },
      {
        question: 'Do Faridabad projects need budgets above ₹25 Lakhs?',
        answer:
          'For complete premium interiors, budgets above ₹25 Lakhs are usually appropriate, especially when the home includes custom furniture, civil work, and luxury finishes.',
      },
      {
        question: 'How do you coordinate execution in Faridabad?',
        answer:
          'We establish drawings, specifications, procurement schedules, quality checkpoints, and site reviews so the project remains aligned from design approval to handover.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
