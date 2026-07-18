'use client';

import { usePathname } from 'next/navigation';

/**
 * Hides the global site chrome (nav, footer, floating buttons) on routes
 * that ship their own — e.g. the /design-1 design experiment.
 */
const CHROMELESS_ROUTES = ['/design-1'];

export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const chromeless = CHROMELESS_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`),
  );

  if (chromeless) return null;
  return <>{children}</>;
}
