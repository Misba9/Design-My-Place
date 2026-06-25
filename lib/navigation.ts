export const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerExploreLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Studio', href: '/studio' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
] as const;

export const footerConnectLinks = [
  { label: 'Consultation', href: '/contact', external: false as const },
  { label: 'Instagram', href: 'https://instagram.com/design_my_place', external: true as const },
  { label: 'WhatsApp', href: 'https://wa.me/9198543210', external: true as const },
] as const;
