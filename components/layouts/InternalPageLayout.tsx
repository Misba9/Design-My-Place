'use client';

import { Navigation } from '@/components/Navigation';

/**
 * Internal page shell — solid black sticky navbar with content
 * starting below the header (hero never sits under the nav).
 */
export function InternalPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation variant="solid" />
      <div className="nav-offset">{children}</div>
    </>
  );
}
