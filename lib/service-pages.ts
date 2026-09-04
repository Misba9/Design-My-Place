import { PORTFOLIO_IMAGES } from '@/lib/images';
import { serviceProcessSteps } from '@/lib/process';

export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  heroLabel: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  summary: string;
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
};

const IMG = PORTFOLIO_IMAGES;

const defaultProcess = serviceProcessSteps;

export const servicePages: ServicePage[] = [
  {
    slug: 'residential-interiors',
    title: 'Residential Interior Designers in Bangalore | Design MyPlace',
    metaDescription:
      'Bespoke residential interior designers in Bangalore. Space planning, custom cabinetry, lighting & turnkey execution for luxury homes & villas. Book a consultation.',
    keywords:
      'residential interior designers in Bangalore, residential interior design Bangalore, home interior designers Bangalore, home interior design company Bangalore, luxury residential interior designers Bangalore, premium home interiors Bangalore',
    heroLabel: 'Residential Excellence',
    heroTitle: 'Residential Interior',
    heroAccent: 'Designers in Bangalore',
    heroDescription:
      'Bespoke residential interiors for luxury homes, penthouses, and villas crafted with architectural precision, spatial clarity, and warm materiality.',
    summary:
      'Design My Place creates residential interiors that reflect how you live, host, rest, and evolve. Every home begins with understanding your personal routines, translating into thoughtfully planned layouts, curated materials, custom joinery, and disciplined turnkey execution for projects typically above ₹25 Lakhs.',
    benefits: [
      { title: 'Tailored Space Planning', description: 'Intelligent spatial layouts, natural light optimization, and generous circulation tailored to your lifestyle.' },
      { title: 'Bespoke Joinery & Finishes', description: 'Custom wardrobes, cabinetry, wall treatments, and materiality selected for beauty and longevity.' },
      { title: 'Architectural Lighting & Styling', description: 'Layered lighting design, curated textiles, art advisory, and complete interior styling.' },
      { title: 'Turnkey Project Management', description: 'Single-point accountability from 3D conceptual design to procurement, site supervision, and handover.' },
    ],
    process: defaultProcess,
    gallery: [IMG.living, IMG.villa, IMG.apartment],
    faqs: [
      { question: 'What types of residential properties do you design in Bangalore?', answer: 'We design complete interiors for luxury apartments, penthouses, duplexes, independent houses, and villas across Bangalore and Delhi NCR.' },
      { question: 'What is the typical budget for residential interior design?', answer: 'Our complete residential projects typically start at ₹25 Lakhs, covering bespoke design, curated materials, modular joinery, civil modifications, and turnkey handover.' },
    ],
  },
  {
    slug: 'commercial-spaces',
    title: 'Commercial Interior Designers in Bangalore | Design MyPlace',
    metaDescription:
      'Specialised commercial interior designers in Bangalore. Modern corporate offices, creative studios & experience centres built for productivity. Discuss your workspace.',
    keywords:
      'commercial interior designers in Bangalore, commercial interior design Bangalore, office interior designers Bangalore, office interior design Bangalore, commercial interior design company Bangalore, workspace interior designers Bangalore',
    heroLabel: 'Commercial & Workplace',
    heroTitle: 'Commercial Interior',
    heroAccent: 'Designers in Bangalore',
    heroDescription:
      'Workspaces, corporate offices, executive suites, and experience centres designed to foster innovation, employee well-being, and distinct brand identity.',
    summary:
      'Our commercial practice creates functional, inspiring environments for businesses that value design as a strategic asset. From modern corporate headquarters to bespoke retail experience centres, we blend ergonomic planning with high-impact aesthetics and turnkey project delivery.',
    benefits: [
      { title: 'Ergonomic & Agile Planning', description: 'Workstation zoning, acoustic insulation, collaborative breakout hubs, and executive suites.' },
      { title: 'Brand Expression', description: 'Architectural details, material choices, and environmental branding that embody your corporate culture.' },
      { title: 'Compliant & Fast-Track Execution', description: 'Strict adherence to commercial fire safety, MEP standards, building bylaws, and fast-track schedules.' },
      { title: 'Turnkey Fit-Out Delivery', description: 'Complete procurement of commercial-grade fixtures, HVAC coordination, network infrastructure, and styling.' },
    ],
    process: defaultProcess,
    gallery: [IMG.apartment, IMG.living, IMG.villa],
    faqs: [
      { question: 'What types of commercial projects do you undertake?', answer: 'We design corporate offices, tech workplaces, executive boardrooms, boutique retail showrooms, and luxury experience centres.' },
      { question: 'Do you provide turnkey execution for commercial interiors?', answer: 'Yes. We handle end-to-end civil work, MEP, partition systems, acoustic ceilings, commercial lighting, custom furniture, and handover.' },
    ],
  },
  {
    slug: 'renovations-makeovers',
    title: 'Home Renovation Company in Bangalore | Design MyPlace',
    metaDescription:
      'Complete luxury home renovation in Bangalore. Structural alterations, spatial redesigns, and premium interior transformations for homes above ₹25L. Get in touch.',
    keywords:
      'home renovation company in Bangalore, home renovation Bangalore, house renovation Bangalore, home makeover Bangalore, interior renovation Bangalore, residential renovation Bangalore',
    heroLabel: 'Renewal & Transformation',
    heroTitle: 'Home Renovation',
    heroAccent: 'Company in Bangalore',
    heroDescription:
      'Breathing new life into existing residences through structural replanning, modern finishes, and comprehensive turnkey transformations.',
    summary:
      'Not every project requires a newly built shell. Our renovation and makeover practice transforms dated layouts into modern, luminous homes. We respect existing structural merits while overhauling flooring, plumbing, electrical, modular cabinetry, and aesthetic finishes with minimal disruption.',
    benefits: [
      { title: 'Structural & Spatial Reconfiguration', description: 'Knocking down non-load-bearing walls, expanding windows, and creating open-plan living areas.' },
      { title: 'Complete MEP & Service Overhaul', description: 'Upgrading aged electrical wiring, plumbing lines, waterproofing, and HVAC systems.' },
      { title: 'Modern Material Transformation', description: 'Replacing dated surfaces with Italian marble, engineered timber, bespoke veneers, and designer sanitaryware.' },
      { title: 'Disciplined Phased Execution', description: 'Clear project milestones, strict snagging checks, and dedicated on-site supervision for on-time delivery.' },
    ],
    process: defaultProcess,
    gallery: [IMG.renovation, IMG.living, IMG.bedroom],
    faqs: [
      { question: 'What is the scope of your home renovation services in Bangalore?', answer: 'We undertake comprehensive residential renovations above ₹25 Lakhs, including civil modifications, kitchen & bathroom overhauls, flooring replacement, false ceilings, and complete interior fit-outs.' },
      { question: 'Can you renovate a 10-20 year old villa or apartment?', answer: 'Yes. We specialize in modernizing older bungalows, gated community villas, and large resale apartments to modern luxury standards.' },
    ],
  },
  {
    slug: 'custom-furniture-styling',
    title: 'Custom Furniture Designers in Bangalore | Design MyPlace',
    metaDescription:
      'Bespoke custom furniture designers in Bangalore. Handcrafted joinery, tailored wardrobes, statement seating & curated interior styling. Explore our craft.',
    keywords:
      'custom furniture designers in Bangalore, custom furniture Bangalore, bespoke furniture Bangalore, custom interior furniture Bangalore, bespoke furniture designers Bangalore, furniture styling Bangalore',
    heroLabel: 'Bespoke Craft & Styling',
    heroTitle: 'Custom Furniture',
    heroAccent: 'Designers in Bangalore',
    heroDescription:
      'Handcrafted bespoke furniture pieces, tailored wardrobes, statement dining suites, and curated interior styling designed to elevate your living spaces.',
    summary:
      'Off-the-shelf furniture rarely fits the exact proportions or soul of a bespoke home. Our custom furniture and styling practice designs one-of-a-kind millwork, artisanal seating, sculptural dining tables, and seamlessly integrated wardrobe systems tailored to your exact aesthetic and dimensions.',
    benefits: [
      { title: 'Bespoke Furniture Design', description: 'Unique sofas, dining tables, consoles, beds, and accent chairs built to custom specifications.' },
      { title: 'Tailored Wardrobes & Joinery', description: 'Walk-in closets, fluted panelling, bar units, and entertainment consoles crafted to the millimetre.' },
      { title: 'Premium Material Palette', description: 'Solid hardwoods, exotic veneers, brushed brass accents, genuine leathers, and high-performance textiles.' },
      { title: 'Art & Decor Styling Advisory', description: 'Curating statement artwork, lighting sculptures, rugs, and accessories that bring harmony to the entire home.' },
    ],
    process: defaultProcess,
    gallery: [IMG.living, IMG.bedroom, IMG.apartment],
    faqs: [
      { question: 'Do you design custom furniture as a standalone service?', answer: 'Custom furniture and styling are integrated into our residential and commercial projects above ₹25 Lakhs to ensure cohesive craftsmanship across every room.' },
      { question: 'What materials and hardware do you use for custom joinery?', answer: 'We utilize marine-grade ply, natural veneers, PU lacquer finishes, and premium European hardware (Blum, Hettich, Hafele) for lifelong durability.' },
    ],
  },
  {
    slug: 'luxury-interior-design',
    title: 'Residential Interior Designers in Bangalore | Luxury Home Interiors',
    metaDescription:
      'Bespoke residential interior designers in Bangalore for luxury villas, apartments and penthouses above ₹25L. Research-led design by Design My Place.',
    keywords: 'residential interior designers in Bangalore, luxury interior design, bespoke interior design Bangalore',
    heroLabel: 'Residential Excellence',
    heroTitle: 'Luxury Interior',
    heroAccent: 'Design',
    heroDescription:
      'Spaces shaped by research, emotion, and timeless craft — designed for discerning homeowners who expect nothing ordinary.',
    summary:
      'Design My Place creates luxury interiors that feel inevitable — as though they have always belonged. Every project begins with understanding how you live, then unfolds through bespoke design, curated materials, and meticulous execution.',
    benefits: [
      { title: 'Entirely Bespoke', description: 'No catalogue solutions. Every detail is researched and designed uniquely for your home and lifestyle.' },
      { title: 'Research-Led Process', description: 'We study your routines, light, climate, and aspirations before a single line is drawn.' },
      { title: 'Timeless Materiality', description: 'Honest textures, artisan details, and finishes chosen to age beautifully over decades.' },
      { title: 'End-to-End Partnership', description: 'From first conversation to final styling touch — design, procurement, and handover.' },
    ],
    process: defaultProcess,
    gallery: [IMG.living, IMG.villa, IMG.apartment],
    faqs: [
      { question: 'What defines luxury interior design at Design My Place?', answer: 'Luxury, for us, is not excess — it is intention. Every material, proportion, and detail serves how you live and how the space makes you feel.' },
      { question: 'What is the minimum budget for luxury interiors?', answer: 'We specialise in complete residential projects with budgets above ₹25 Lakhs across Bangalore, Delhi NCR, and pan-India.' },
    ],
  },
  {
    slug: 'premium-interior-design',
    title: 'Premium Interior Design Studio',
    metaDescription:
      'Premium interior design for villas & apartments above ₹25L. Sophisticated residential interiors in Bangalore, Delhi NCR & across India.',
    keywords: 'premium interior design, premium interior designer Bangalore, sophisticated home interiors',
    heroLabel: 'Refined Living',
    heroTitle: 'Premium Interior',
    heroAccent: 'Design',
    heroDescription:
      'Sophisticated residential interiors that balance architectural rigour with warmth, comfort, and enduring quality.',
    summary:
      'Our premium interior design practice serves homeowners who value craft over trends. We create refined environments — from urban apartments to expansive villas — with a calm, considered aesthetic that endures.',
    benefits: [
      { title: 'Architectural Sensitivity', description: 'We respect the bones of your space while elevating every surface, junction, and transition.' },
      { title: 'Curated Material Palette', description: 'Stone, timber, metal, and textile selections made with longevity and tactility in mind.' },
      { title: 'Spatial Clarity', description: 'Generous circulation, thoughtful zoning, and light used as a design material.' },
      { title: 'Transparent Process', description: 'Clear milestones, open communication, and collaborative decision-making throughout.' },
    ],
    process: defaultProcess,
    gallery: [IMG.apartment, IMG.living, IMG.bedroom],
    faqs: [
      { question: 'How is premium different from luxury interior design?', answer: 'Both share our bespoke approach. Premium projects often focus on refined apartments and selective renovations, while luxury encompasses larger turnkey villa fit-outs.' },
      { question: 'Do you design premium apartments?', answer: 'Yes. We optimise light, storage, and flow in high-rise and boutique residences across Bangalore and Delhi NCR.' },
    ],
  },
  {
    slug: 'villa-interior-design',
    title: 'Bespoke Villa Interior Design in Bangalore',
    metaDescription:
      'Bespoke villa interior design in Bangalore & Delhi NCR. Luxury villa interiors with turnkey delivery for projects above ₹25 Lakhs.',
    keywords: 'villa interior design, villa interior designer Bangalore, luxury villa interiors, villa interior designer Delhi',
    heroLabel: 'Expansive Living',
    heroTitle: 'Villa Interior',
    heroAccent: 'Design',
    heroDescription:
      'Expansive residences crafted with architectural sensitivity, indoor-outdoor harmony, and lasting materiality.',
    summary:
      'Villa interiors demand a different scale of thinking — generous volumes, climate response, landscape integration, and the choreography of family life across multiple floors. Design My Place brings research-led rigour to every villa we touch.',
    benefits: [
      { title: 'Site & Climate Analysis', description: 'Orientation, ventilation, and local conditions inform every spatial and material decision.' },
      { title: 'Indoor-Outdoor Flow', description: 'Courtyards, terraces, and garden rooms woven seamlessly into the interior narrative.' },
      { title: 'Bespoke Joinery', description: 'Custom millwork, wardrobes, and storage designed to the millimetre for your home.' },
      { title: 'Phased Execution', description: 'Structured timelines for large-scale fit-outs without compromising quality at any stage.' },
    ],
    process: defaultProcess,
    gallery: [IMG.villa, IMG.living, IMG.kitchen],
    faqs: [
      { question: 'How long does a villa interior project take?', answer: 'Full villa fit-outs typically span 12–18 months depending on scope, with a detailed schedule provided during the concept phase.' },
      { question: 'Do you design farmhouses and weekend homes?', answer: 'Yes. We design primary residences, farmhouses, and second homes across Bangalore, Delhi NCR, Goa, and beyond.' },
    ],
  },
  {
    slug: 'apartment-interior-design',
    title: 'Luxury Apartment Interior Design',
    metaDescription:
      'Luxury apartment interior design in Bangalore & Delhi NCR. Premium penthouse & high-rise interiors above ₹25 Lakhs.',
    keywords: 'apartment interior design, apartment interior designer Bangalore, luxury apartment interiors, penthouse interior design',
    heroLabel: 'Urban Sophistication',
    heroTitle: 'Apartment Interior',
    heroAccent: 'Design',
    heroDescription:
      'Sophisticated urban living spaces designed for modern life — maximising light, flow, and refined detail.',
    summary:
      'Apartment living rewards precision. We optimise every square foot without compromise — creating generous storage, seamless joinery, layered lighting, and interiors that feel far larger than their footprint.',
    benefits: [
      { title: 'Space Optimisation', description: 'Clever zoning and multi-functional design that respects how urban families actually live.' },
      { title: 'Custom Joinery', description: 'Built-in storage, media walls, and kitchen systems designed for your exact layout.' },
      { title: 'Acoustic & Privacy', description: 'Solutions for high-rise living — sound insulation, privacy screening, and calm retreats.' },
      { title: 'Turnkey Delivery', description: 'Full coordination with building management, lift schedules, and working-hour constraints.' },
    ],
    process: defaultProcess,
    gallery: [IMG.apartment, IMG.living, IMG.bedroom],
    faqs: [
      { question: 'Can you work within apartment society guidelines?', answer: 'Yes. We coordinate with building management on working hours, lift usage, and renovation permissions as part of our process.' },
      { question: 'Do you design penthouses?', answer: 'Absolutely. Our portfolio includes penthouses with expansive terraces, double-height volumes, and panoramic city views.' },
    ],
  },
  {
    slug: 'turnkey-interior-design',
    title: 'Turnkey Interior Design',
    metaDescription:
      'Turnkey interior design in Bangalore & Delhi NCR. End-to-end home interiors — design, procurement, execution & handover above ₹25L.',
    keywords: 'turnkey interior design, turnkey home interiors, end to end interior design Bangalore',
    heroLabel: 'Complete Delivery',
    heroTitle: 'Turnkey Interior',
    heroAccent: 'Design',
    heroDescription:
      'One studio, one vision — from concept and 3D visualisation through procurement, execution, and final styling.',
    summary:
      'Turnkey interior design removes the burden of coordinating multiple vendors. Design My Place manages every stakeholder, timeline, and quality checkpoint — so you experience the journey, not the logistics.',
    benefits: [
      { title: 'Single Point of Accountability', description: 'One team responsible for design intent through to the last styling accessory.' },
      { title: 'Vendor Network', description: 'Trusted artisans, contractors, and specialists curated over years of practice.' },
      { title: 'Budget Transparency', description: 'Detailed BOQs, milestone-based payments, and no hidden surprises.' },
      { title: 'Quality Assurance', description: 'Regular site visits, snag lists, and rigorous finish checks at every stage.' },
    ],
    process: defaultProcess,
    gallery: [IMG.living, IMG.kitchen, IMG.villa],
    faqs: [
      { question: 'What does turnkey include?', answer: 'Design, 3D visualisation, material procurement, vendor coordination, site supervision, and final styling — a complete path from concept to move-in.' },
      { question: 'Can I choose design-only instead?', answer: 'Yes. We offer design-only and design + project management packages alongside full turnkey delivery.' },
    ],
  },
  {
    slug: 'renovation',
    title: 'Home Renovation & Styling',
    metaDescription:
      'Luxury home renovation in Bangalore & Delhi NCR. Bespoke renovation & restyling for discerning homeowners above ₹25 Lakhs.',
    keywords: 'interior renovation, luxury home renovation, home renovation Bangalore, home restyling',
    heroLabel: 'Renewal & Refinement',
    heroTitle: 'Home',
    heroAccent: 'Renovation',
    heroDescription:
      'Breathing new life into existing spaces — selective transformation without starting from scratch.',
    summary:
      'Not every project requires a blank canvas. Our renovation practice respects what works, transforms what does not, and introduces refined touches that make an existing home feel entirely renewed.',
    benefits: [
      { title: 'Condition Audit', description: 'Thorough assessment of structure, services, and finishes before design begins.' },
      { title: 'Selective Intervention', description: 'Surgical updates that maximise impact while minimising disruption and waste.' },
      { title: 'Heritage Sensitivity', description: 'Respect for existing architecture, heirloom furniture, and family history within the home.' },
      { title: 'Lived-In Scheduling', description: 'Phased execution plans that accommodate families staying in residence where possible.' },
    ],
    process: defaultProcess,
    gallery: [IMG.renovation, IMG.living, IMG.bedroom],
    faqs: [
      { question: 'Can you renovate while we live in the home?', answer: 'Where feasible, we phase work room by room. For comprehensive renovations, we recommend a structured timeline with clear move-out windows.' },
      { question: 'What renovation budgets do you work with?', answer: 'Our renovation projects typically start above ₹25 Lakhs for complete residential transformations.' },
    ],
  },
  {
    slug: 'kitchen-interiors',
    title: 'Kitchen Interior Design',
    metaDescription:
      'Luxury kitchen interior design in Bangalore & Delhi NCR. Bespoke kitchen design with premium materials & turnkey execution.',
    keywords: 'kitchen interior design, luxury kitchen design, modular kitchen interior designer Bangalore',
    heroLabel: 'The Heart of Home',
    heroTitle: 'Kitchen',
    heroAccent: 'Interiors',
    heroDescription:
      'Kitchens designed around how you cook, gather, and entertain — with bespoke joinery and premium finishes.',
    summary:
      'The kitchen is where daily ritual meets hospitality. We design kitchens that balance workflow efficiency with visual calm — integrating appliances, storage, and materiality into a cohesive, luxurious whole.',
    benefits: [
      { title: 'Workflow Planning', description: 'The classic work triangle refined for how your household actually prepares and shares meals.' },
      { title: 'Bespoke Cabinetry', description: 'Custom joinery in premium veneers, lacquer, or stone — never off-the-shelf compromises.' },
      { title: 'Appliance Integration', description: 'Seamless built-in solutions that keep surfaces clean and the room visually serene.' },
      { title: 'Lighting Layers', description: 'Task, ambient, and accent lighting designed for both function and atmosphere.' },
    ],
    process: defaultProcess,
    gallery: [IMG.kitchen, IMG.living, IMG.apartment],
    faqs: [
      { question: 'Do you design kitchens as part of a full home project?', answer: 'Yes. Kitchen design is integrated into our residential projects, ensuring material and spatial continuity throughout the home.' },
      { question: 'Can you redesign only the kitchen?', answer: 'For comprehensive kitchen transformations above ₹25 Lakhs as part of a wider home brief, yes. We do not take small standalone kitchen-only projects.' },
    ],
  },
  {
    slug: 'bedroom-interiors',
    title: 'Bedroom Interior Design',
    metaDescription:
      'Luxury bedroom interior design in Bangalore & Delhi NCR. Bespoke bedroom design for restful, refined private retreats.',
    keywords: 'bedroom interior design, luxury bedroom design, master bedroom interior designer',
    heroLabel: 'Private Retreats',
    heroTitle: 'Bedroom',
    heroAccent: 'Interiors',
    heroDescription:
      'Restful sanctuaries designed for comfort, calm, and the quiet rituals of private life.',
    summary:
      'A bedroom should feel like a exhale. We design private retreats with layered textiles, considered lighting, bespoke wardrobes, and a palette that promotes rest without sacrificing sophistication.',
    benefits: [
      { title: 'Acoustic Comfort', description: 'Material and layout choices that reduce noise and create a sense of enclosure and peace.' },
      { title: 'Wardrobe Integration', description: 'Walk-in closets and built-in storage designed for your wardrobe and daily routine.' },
      { title: 'Layered Lighting', description: 'Dimmable ambient, reading, and accent lighting for every mood and time of day.' },
      { title: 'Textile Curation', description: 'Upholstery, drapery, and bedding selected for tactile comfort and visual harmony.' },
    ],
    process: defaultProcess,
    gallery: [IMG.bedroom, IMG.living, IMG.apartment],
    faqs: [
      { question: 'Do you design children\'s bedrooms?', answer: 'Yes, as part of full home projects. We create age-appropriate spaces that grow with your family.' },
      { question: 'Can bedrooms be designed during a renovation?', answer: 'Absolutely. Bedroom renovations are often phased first to create a comfortable retreat during wider home works.' },
    ],
  },
  {
    slug: 'living-room-interiors',
    title: 'Living Room Interior Design',
    metaDescription:
      'Luxury living room interior design in Bangalore & Delhi NCR. Bespoke living spaces designed for gathering & everyday elegance.',
    keywords: 'living room interior design, luxury living room design, drawing room interior designer',
    heroLabel: 'Spaces to Gather',
    heroTitle: 'Living Room',
    heroAccent: 'Interiors',
    heroDescription:
      'Living spaces designed for conversation, relaxation, and the everyday elegance of home life.',
    summary:
      'The living room sets the tone for your entire home. We design spaces that welcome guests effortlessly while feeling genuinely lived-in — balancing statement pieces with quiet comfort.',
    benefits: [
      { title: 'Furniture Layout', description: 'Seating arrangements that encourage conversation and respect sight lines and circulation.' },
      { title: 'Feature Elements', description: 'Fireplace surrounds, media walls, and ceiling details that anchor the room with character.' },
      { title: 'Art & Styling', description: 'Curated artwork, objects, and accessories that personalise the space without clutter.' },
      { title: 'Indoor-Outdoor Connection', description: 'Balcony and terrace integration for homes where the living room opens to the outside.' },
    ],
    process: defaultProcess,
    gallery: [IMG.living, IMG.villa, IMG.apartment],
    faqs: [
      { question: 'Do you source furniture and art for living rooms?', answer: 'Yes. FF&E specification, custom furniture design, and art curation are core to our living room design process.' },
      { question: 'Can you refresh a living room without a full renovation?', answer: 'As part of a broader home project above ₹25 Lakhs, we offer selective living room transformations including furniture, lighting, and styling refresh.' },
    ],
  },
];

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}
