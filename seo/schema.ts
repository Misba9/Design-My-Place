import { BUSINESS, OG_IMAGE, SITE_URL, STUDIO_ADDRESS } from '@/lib/site';
import { absoluteUrl } from './metadata';

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(OG_IMAGE.url),
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    foundingDate: BUSINESS.foundingDate,
    sameAs: [BUSINESS.social.instagram],
    address: {
      '@type': 'PostalAddress',
      streetAddress: STUDIO_ADDRESS.line1,
      addressLocality: STUDIO_ADDRESS.locality,
      addressRegion: STUDIO_ADDRESS.region,
      postalCode: STUDIO_ADDRESS.postalCode,
      addressCountry: STUDIO_ADDRESS.country,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export function localBusinessSchema() {
  return {
    '@type': 'InteriorDesigner',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE.url),
    logo: absoluteUrl('/logo.png'),
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    foundingDate: BUSINESS.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: STUDIO_ADDRESS.line1,
      addressLocality: STUDIO_ADDRESS.locality,
      addressRegion: STUDIO_ADDRESS.region,
      postalCode: STUDIO_ADDRESS.postalCode,
      addressCountry: STUDIO_ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: STUDIO_ADDRESS.geo.latitude,
      longitude: STUDIO_ADDRESS.geo.longitude,
    },
    hasMap: STUDIO_ADDRESS.mapsUrl,
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: [BUSINESS.social.instagram],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
}

export function locationSchema(location: {
  name: string;
  slug: string;
  description: string;
  areasServed: string[];
  geo?: { latitude: number; longitude: number };
  mapsUrl?: string;
}) {
  return {
    '@type': 'ProfessionalService',
    '@id': absoluteUrl(`/locations/${location.slug}`),
    name: `Design My Place — Interior Designer ${location.name}`,
    description: location.description,
    url: absoluteUrl(`/locations/${location.slug}`),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: location.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    ...(location.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.geo.latitude,
        longitude: location.geo.longitude,
      },
    }),
    ...(location.mapsUrl && { hasMap: location.mapsUrl }),
  };
}

export function professionalServiceSchema(service?: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    '@type': 'ProfessionalService',
    '@id': service
      ? absoluteUrl(`/services/${service.slug}`)
      : `${SITE_URL}/#service`,
    name: service?.name ?? `${BUSINESS.name} — Bespoke Interior Design`,
    url: service ? absoluteUrl(`/services/${service.slug}`) : absoluteUrl('/services'),
    image: absoluteUrl(OG_IMAGE.url),
    description:
      service?.description ??
      'Complete bespoke interior design solutions for luxury homes, villas, and apartments above ₹25 Lakhs.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function imageObjectSchema(image: {
  url: string;
  name: string;
  description?: string;
  width?: number;
  height?: number;
}) {
  return {
    '@type': 'ImageObject',
    contentUrl: image.url.startsWith('http') ? image.url : absoluteUrl(image.url),
    name: image.name,
    description: image.description,
    width: image.width,
    height: image.height,
    creator: { '@id': `${SITE_URL}/#organization` },
  };
}

export function projectSchema(project: {
  name: string;
  slug: string;
  description: string;
  image: string;
  location: string;
  year: string;
  type: string;
}) {
  return {
    '@type': 'CreativeWork',
    '@id': absoluteUrl(`/projects/${project.slug}`),
    name: project.name,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.image,
    creator: { '@id': `${SITE_URL}/#organization` },
    dateCreated: project.year,
    genre: project.type,
    contentLocation: { '@type': 'Place', name: project.location },
  };
}

export function articleSchema(article: {
  title: string;
  slug: string;
  description: string;
  image: string;
  publishedAt: string;
  modifiedAt?: string;
}) {
  return {
    '@type': 'Article',
    '@id': absoluteUrl(`/blog/${article.slug}`),
    headline: article.title,
    description: article.description,
    image: article.image,
    url: absoluteUrl(`/blog/${article.slug}`),
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt ?? article.publishedAt,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };
}

export function buildSchemaGraph(...nodes: Record<string, unknown>[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function globalSchemas() {
  return buildSchemaGraph(
    organizationSchema(),
    localBusinessSchema(),
    professionalServiceSchema(),
    websiteSchema(),
  );
}

export { breadcrumbSchema } from './breadcrumbs';
