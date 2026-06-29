'use client';

import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

const MILESTONES = [25, 50, 75, 100];

export function ScrollTracker() {
  useEffect(() => {
    const reached = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
