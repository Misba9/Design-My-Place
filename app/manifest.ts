import type { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.legalName,
    short_name: BUSINESS.name,
    description: BUSINESS.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
