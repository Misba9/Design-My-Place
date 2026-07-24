'use client';

import { Navigation } from '@/components/Navigation';

/**
 * Homepage shell — transparent overlay navbar over the hero.
 * Do not use on internal routes.
 */
export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation variant="overlay" />
      {children}
    </>
  );
}
