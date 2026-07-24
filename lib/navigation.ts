export const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerNavLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const footerServiceLinks = [
  { label: 'Residential Interiors', href: '/services/luxury-interior-design' },
  { label: 'Commercial Interiors', href: '/services' },
  { label: 'Turnkey Interiors', href: '/services/turnkey-interior-design' },
  { label: 'Space Planning', href: '/services/renovation' },
  { label: 'Furniture & Styling', href: '/services/living-room-interiors' },
  { label: 'Design Consultation', href: '/contact' },
] as const;

/** @deprecated Prefer footerNavLinks — kept for any legacy imports */
export const footerExploreLinks = footerNavLinks;

/** @deprecated Locations footer column removed */
export const footerLocationLinks = [] as const;
