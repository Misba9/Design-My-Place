import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { LocationMap } from '@/components/LocationMap';
import { TrustBadges } from '@/components/TrustBadges';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { D2Reveal } from '@/components/design2/shared';
import {
  d2BandBg,
  d2BtnOutline,
  d2PageBg,
  d2Section,
} from '@/components/design2/tokens';
import { D2Testimonials } from '@/components/design2/Testimonials';
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

      {/* Intro */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <D2Reveal className="max-w-3xl">
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Design My Place · {location.name}
                {location.aliases.length > 0 && ` & ${location.aliases.join(', ')}`}
              </p>
            </div>
            <h2 className="mb-8 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              Premium interiors in{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                {location.name}
              </span>
            </h2>
            <p className="mb-8 font-body text-[15.5px] leading-[1.9] text-[#55503F]">
              {location.intro}
            </p>
            <p className="border-l-2 border-[#9C6F4E]/45 pl-6 font-body text-[15px] leading-[1.85] text-[#55503F]">
              {location.whyChooseUs}
            </p>
          </D2Reveal>
        </div>
      </section>

      {/* Areas + landmarks */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <D2Reveal>
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Areas We Serve
                </p>
              </div>
              <h2 className="mb-8 font-body font-light leading-[1.08] tracking-[-0.02em] text-[clamp(1.85rem,3.2vw,2.75rem)]">
                Neighbourhoods in{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">
                  {location.name}
                </span>
              </h2>
              <ul className="grid grid-cols-2 gap-3">
                {location.areasServed.map((area) => (
                  <li
                    key={area}
                    className="rounded-[14px] border border-[rgba(63,57,48,0.1)] bg-white/45 px-4 py-3 font-body text-[14px] text-[#55503F]"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </D2Reveal>

            <D2Reveal delay={0.1}>
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Local Context
                </p>
              </div>
              <h2 className="mb-8 font-body font-light leading-[1.08] tracking-[-0.02em] text-[clamp(1.85rem,3.2vw,2.75rem)]">
                Landmarks &{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">
                  surroundings
                </span>
              </h2>
              <ul className="space-y-4">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="flex items-start gap-3 font-body text-[15px] leading-relaxed text-[#55503F]"
                  >
                    <MapPin size={16} className="mt-1 shrink-0 text-[#9C6F4E]" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </D2Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <D2Reveal className="mb-12 max-w-2xl md:mb-14">
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                What We Offer
              </p>
            </div>
            <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              Services in{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                {location.name}
              </span>
            </h2>
          </D2Reveal>

          <div className="mb-12 grid gap-4 md:grid-cols-2 md:gap-5">
            {location.services.map((service, i) => (
              <D2Reveal
                key={service}
                delay={i * 0.05}
                className="flex items-start gap-4 rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/45 p-6"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9C6F4E]" />
                <p className="font-body text-[15px] leading-[1.75] text-[#55503F]">{service}</p>
              </D2Reveal>
            ))}
          </div>

          <D2Reveal delay={0.12} className="flex flex-wrap gap-3">
            {[
              { label: 'Luxury Interiors', href: '/services/luxury-interior-design' },
              { label: 'Villa Design', href: '/services/villa-interior-design' },
              { label: 'Turnkey Delivery', href: '/services/turnkey-interior-design' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group ${d2BtnOutline}`}
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </D2Reveal>
        </div>
      </section>

      <D2Testimonials />
      <TrustBadges />

      {/* FAQ */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={`${d2Section} max-w-3xl`}>
          <D2Reveal className="mb-12 text-center md:mb-14">
            <div className="mb-5 flex items-center justify-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Local FAQ
              </p>
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
            </div>
            <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              Questions about design in{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                {location.name}
              </span>
            </h2>
          </D2Reveal>

          <div className="space-y-5">
            {location.faqs.map((faq, i) => (
              <D2Reveal
                key={faq.question}
                delay={i * 0.05}
                className="rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-7 sm:p-8"
              >
                <h3 className="mb-3 font-display text-[18px] font-medium text-[#3F3930]">
                  {faq.question}
                </h3>
                <p className="font-body text-[15px] leading-[1.8] text-[#55503F]">
                  {faq.answer}
                </p>
              </D2Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationMap
        embedUrl={location.mapsEmbedUrl}
        title={
          location.slug === 'bangalore'
            ? 'Design My Place LLP — Bengaluru Studio'
            : `Design My Place — serving ${location.name}`
        }
      />

      {/* Also serving */}
      <section className="relative overflow-hidden" style={{ background: d2BandBg }}>
        <div className={`${d2Section} text-[#EDE9E0]`}>
          <D2Reveal>
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#C4A07A] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
                Also Serving
              </p>
            </div>
            <div className="mb-10 flex flex-wrap gap-3">
              {otherLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="rounded-full border border-white/20 px-5 py-2.5 font-body text-[13px] text-[rgba(237,233,224,0.88)] transition-colors hover:border-[#C4A07A]/55 hover:text-[#EDE9E0]"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.04em] text-[#C4A07A] transition-colors hover:text-[#EDE9E0]"
            >
              <MapPin size={14} />
              Open in Google Maps
            </a>
          </D2Reveal>
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
