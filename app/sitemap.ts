import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { locations } from '@/lib/locations';
import { servicePages } from '@/lib/service-pages';
import { blogPosts } from '@/lib/blog';
import { absoluteUrl } from '@/seo';

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/projects',
  '/process',
  '/studio',
  '/contact',
  '/faq',
  '/blog',
  '/thank-you',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/blog' ? 0.85 : 0.8,
    ...(path === '' && { images: [absoluteUrl('/hero-luxury.jpg')] }),
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
    images: service.gallery,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
    images: [post.image],
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
    images: [absoluteUrl('/hero-luxury.jpg')],
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [project.image, ...project.gallery],
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...blogEntries,
    ...projectEntries,
  ];
}
