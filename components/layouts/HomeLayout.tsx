'use client';

import { Navigation } from '@/components/Navigation';

/**
 * Homepage shell — solid black sticky navbar over the hero.
 */
export function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation variant="solid" />
      {children}
    </>
  );
}
