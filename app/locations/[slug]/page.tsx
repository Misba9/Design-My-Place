import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { LocationMap } from '@/components/LocationMap';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustBadges } from '@/components/TrustBadges';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildSchemaGraph,
  breadcrumbSchema,
  createPageMetadata,
  faqSchema,
  locationSchema,
} from '@/seo';
import {
  getAllLocationSlugs,
  getLocationBySlug,
  locations,
} from '@/lib/locations';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const location = getLocationBySlug(params.slug);
  if (!location) return { title: 'Location Not Found' };

  return createPageMetadata({
    title: location.title,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  const schema = buildSchemaGraph(
    locationSchema({
      name: location.name,
      slug: location.slug,
      description: location.intro,
      areasServed: location.areasServed,
      geo: location.geo,
      mapsUrl: location.mapsUrl,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: location.name, path: `/locations/${location.slug}` },
    ]),
    faqSchema(location.faqs),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: location.name, path: `/locations/${location.slug}` },
        ]}
      />

      <PageHero
        label={`${location.region} · Luxury Interiors`}
        title={location.heroTitle}
        titleAccent={location.heroAccent}
        description={location.heroDescription}
        imageAlt={`Luxury interior design by Design My Place in ${location.name}`}
      />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="label-uppercase text-gold-300 mb-6">
              Design My Place · {location.name}
              {location.aliases.length > 0 && ` & ${location.aliases.join(', ')}`}
            </p>
            <h2 className="font-display text-3xl lg:text-5xl text-white mb-8 leading-tight">
              Premium interiors in{' '}
              <span className="italic font-light text-gradient-gold-inline">
                {location.name}
              </span>
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
              {location.intro}
            </p>
            <p className="text-gray-400 font-light leading-relaxed border-l border-gold-400/50 pl-6">
              {location.whyChooseUs}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="label-uppercase text-gold-300 mb-6">Areas We Serve</p>
              <h2 className="font-display text-3xl text-white mb-8">
                Neighbourhoods in{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  {location.name}
                </span>
              </h2>
              <ul className="grid grid-cols-2 gap-3">
                {location.areasServed.map((area) => (
                  <li
                    key={area}
                    className="text-sm text-gray-400 font-light border border-white/10 px-4 py-3"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-uppercase text-gold-300 mb-6">Local Context</p>
              <h2 className="font-display text-3xl text-white mb-8">
                Landmarks &{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  surroundings
                </span>
              </h2>
              <ul className="space-y-4">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="flex items-start gap-3 text-gray-400 font-light"
                  >
                    <MapPin size={16} className="text-gold-300/70 mt-0.5 flex-shrink-0" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">What We Offer</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-12">
            Services in{' '}
            <span className="italic font-light text-gradient-gold-inline">
              {location.name}
            </span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 mb-12">
            {location.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-4 text-gray-300 font-light border border-white/10 p-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Luxury Interiors', href: '/services/luxury-interior-design' },
              { label: 'Villa Design', href: '/services/villa-interior-design' },
              { label: 'Turnkey Delivery', href: '/services/turnkey-interior-design' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-outline-gold group text-[10px]"
              >
                <span>{link.label}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TrustBadges />

      <section className="section-y bg-luxury-gray">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6 text-center">Local FAQ</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white text-center mb-16">
            Questions about design in{' '}
            <span className="italic font-light text-gradient-gold-inline">
              {location.name}
            </span>
          </h2>
          <div className="space-y-6">
            {location.faqs.map((faq) => (
              <div key={faq.question} className="border border-white/10 p-8 bg-luxury-black/40">
                <h3 className="font-display text-xl text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationMap
        embedUrl={location.mapsEmbedUrl}
        title={`Design My Place — serving ${location.name}`}
      />

      <section className="py-20 bg-luxury-black border-t border-white/10">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Also Serving</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-sm text-gray-400 hover:text-gold-300 border border-white/10 px-4 py-2 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold-300 hover:text-gold-200 inline-flex items-center gap-2"
          >
            <MapPin size={14} />
            Open in Google Maps
          </a>
        </div>
      </section>

      <PageCTA
        title="Start your"
        titleAccent={`${location.name} project`}
        description={`Book a consultation for your ${location.name} home — villas, apartments, and renovations above ₹25 Lakhs.`}
      />
    </>
  );
}
