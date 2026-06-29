'use client';

import { useEffect } from 'react';
import { trackProjectView } from '@/lib/analytics';

type Props = {
  slug: string;
  name: string;
};

export function ProjectViewTracker({ slug, name }: Props) {
  useEffect(() => {
    trackProjectView(slug, name);
  }, [slug, name]);

  return null;
}
