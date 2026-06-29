import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildSchemaGraph,
  breadcrumbSchema,
  createPageMetadata,
  faqSchema,
  professionalServiceSchema,
} from '@/seo';
import {
  getAllServiceSlugs,
  getServicePageBySlug,
} from '@/lib/service-pages';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServicePageBySlug(params.slug);
  if (!service) return { title: 'Service Not Found' };

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServicePageBySlug(params.slug);
  if (!service) notFound();

  const schema = buildSchemaGraph(
    professionalServiceSchema({
      name: service.title,
      slug: service.slug,
      description: service.summary,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    faqSchema(service.faqs),
  );

  return (
    <>
      <JsonLd data={schema} />
      <ServicePageTemplate service={service} />
    </>
  );
}
