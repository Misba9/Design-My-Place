export const navLinks = [
  { href: '/projects/', label: 'Projects' },
  { href: '/services/', label: 'Services', hasDropdown: true },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
] as const;

export type ServiceDropdownItem = {
  label: string;
  href: string;
  description: string;
};

export type ServiceDropdownCategory = {
  category: string;
  items: ServiceDropdownItem[];
};

export const allServices: ServiceDropdownCategory[] = [
  {
    category: 'Our Services',
    items: [
      { label: 'Residential Interiors', href: '/services/residential-interiors/', description: 'Bespoke design for luxury homes, penthouses & villas' },
      { label: 'Commercial Spaces', href: '/services/commercial-spaces/', description: 'Modern corporate offices, workspaces & experience centres' },
      { label: 'Renovations & Makeovers', href: '/services/renovations-makeovers/', description: 'Comprehensive transformations for existing residences' },
      { label: 'Custom Furniture & Styling', href: '/services/custom-furniture-styling/', description: 'Handcrafted bespoke millwork, joinery & interior styling' },
    ],
  },
];

export const footerNavLinks = [
  { label: 'Projects', href: '/projects/' },
  { label: 'Services', href: '/services/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Studio', href: '/studio/' },
  { label: 'Blog & Journal', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
] as const;

export const footerServiceLinks = [
  { label: 'Residential Interiors', href: '/services/residential-interiors/' },
  { label: 'Commercial Spaces', href: '/services/commercial-spaces/' },
  { label: 'Renovations & Makeovers', href: '/services/renovations-makeovers/' },
  { label: 'Custom Furniture & Styling', href: '/services/custom-furniture-styling/' },
] as const;

export const footerBlogLinks = [
  { label: 'Interior Design Trends 2026', href: '/blog/luxury-interior-design-trends-2026/' },
  { label: 'Villa Interior Design Guide', href: '/blog/villa-interior-design-guide/' },
  { label: 'Interior Design Cost in India', href: '/blog/luxury-interior-design-cost-india/' },
  { label: 'Best Designers in Bangalore', href: '/blog/best-interior-designers-bangalore/' },
  { label: 'Choosing an Interior Designer', href: '/blog/how-to-choose-interior-designer/' },
  { label: 'All Journal Articles', href: '/blog/' },
] as const;

export const footerLocationLinks = [
  { label: 'Bangalore', href: '/locations/bangalore/' },
  { label: 'Delhi', href: '/locations/delhi/' },
  { label: 'Gurgaon', href: '/locations/gurgaon/' },
  { label: 'Noida', href: '/locations/noida/' },
  { label: 'Ghaziabad', href: '/locations/ghaziabad/' },
  { label: 'Faridabad', href: '/locations/faridabad/' },
] as const;

/** @deprecated Prefer footerNavLinks — kept for any legacy imports */
export const footerExploreLinks = footerNavLinks;
