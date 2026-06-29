import type { Metadata } from 'next';
import { BUSINESS, OG_IMAGE, SITE_URL } from '@/lib/site';
import { DEFAULT_KEYWORDS } from './constants';

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
};

export function absoluteUrl(path = ''): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return path === '' || path === '/' ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = '',
  keywords = DEFAULT_KEYWORDS,
  ogImage = OG_IMAGE.url,
  ogImageAlt = OG_IMAGE.alt,
  noIndex = false,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    authors: [{ name: BUSINESS.legalName }],
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      title,
      description,
      siteName: BUSINESS.name,
      images: [
        {
          url: ogImage,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function createArticleMetadata(
  options: PageMetadataOptions & { publishedTime: string; modifiedTime?: string },
): Metadata {
  const base = createPageMetadata({ ...options, type: 'article' });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime ?? options.publishedTime,
      authors: [BUSINESS.legalName],
    },
  };
}
