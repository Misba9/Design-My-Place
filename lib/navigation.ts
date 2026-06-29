export const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerExploreLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Studio', href: '/studio' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const footerServiceLinks = [
  { label: 'Luxury Interior Design', href: '/services/luxury-interior-design' },
  { label: 'Villa Interior Design', href: '/services/villa-interior-design' },
  { label: 'Apartment Interiors', href: '/services/apartment-interior-design' },
  { label: 'Turnkey Interiors', href: '/services/turnkey-interior-design' },
  { label: 'Home Renovation', href: '/services/renovation' },
] as const;

export const footerLocationLinks = [
  { label: 'Interior Designer Bangalore', href: '/locations/bangalore' },
  { label: 'Interior Designer Delhi', href: '/locations/delhi' },
  { label: 'Interior Designer Gurgaon', href: '/locations/gurgaon' },
  { label: 'Interior Designer Noida', href: '/locations/noida' },
  { label: 'Interior Designer Ghaziabad', href: '/locations/ghaziabad' },
  { label: 'Interior Designer Faridabad', href: '/locations/faridabad' },
] as const;

export const footerConnectLinks = [
  { label: 'Consultation', href: '/contact', external: false as const },
  { label: 'Instagram', href: 'https://instagram.com/design_my_place', external: true as const },
  { label: 'WhatsApp', href: 'https://wa.me/9198543210', external: true as const },
] as const;
