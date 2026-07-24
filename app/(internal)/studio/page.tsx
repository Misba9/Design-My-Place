import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { D2MeetOurTeam } from '@/components/design2/MeetOurTeam';
import { D2ImageReveal, D2Reveal } from '@/components/design2/shared';
import {
  d2BandBg,
  d2PageBg,
  d2Section,
  d2SectionWide,
  slideAsset,
} from '@/components/design2/tokens';
import { PrimaryButton } from '@/components/PrimaryButton';
import { STUDIO_ADDRESS } from '@/lib/site';
import { values } from '@/lib/about';
import { teamLead } from '@/lib/team';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Studio — Bengaluru Interior Design',
  description:
    'Visit Design My Place studio on Church Street, Bengaluru. Luxury interior designers creating bespoke homes across Bangalore & Delhi NCR.',
  path: '/studio',
});

const galleryImages: { src: string; alt: string; span?: string }[] = [
  { src: slideAsset('about'), alt: 'Quiet still-life detail from the Design My Place studio', span: 'row-span-2' },
  { src: slideAsset('intro'), alt: 'Warm, textural interior moment from the studio archive' },
  { src: teamLead.image, alt: 'Arushi Goel at work in the Design My Place studio', span: 'row-span-2' },
  { src: slideAsset('belong-house'), alt: 'Facade study — a Design My Place residence' },
  { src: slideAsset('Meet'), alt: 'Studio team meeting and collaboration' },
  { src: slideAsset('toc'), alt: 'Layout and concept boards pinned in the studio', span: 'row-span-2' },
  { src: slideAsset('Concept'), alt: 'Concept vignette from the studio process' },
];

export default function StudioPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Studio', path: '/studio' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Studio', path: '/studio' },
        ]}
      />

      <PageHero
        label="About The Studio"
        title="Spaces that hold"
        titleAccent="your story"
        description="At Design My Place, we believe interiors are more than aesthetics. They are the backdrop to life's most meaningful moments."
        imageAlt="Design My Place interior design studio in Bengaluru"
      />

      {/* Gallery */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2SectionWide}>
          <D2Reveal className="mb-10 max-w-2xl md:mb-14">
            <div className="mb-5 flex items-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Inside The Studio
              </p>
            </div>
            <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              A studio built for{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                quiet craft
              </span>
            </h2>
          </D2Reveal>

          <div className="grid grid-cols-2 auto-rows-[160px] gap-4 sm:grid-cols-3 sm:auto-rows-[190px] md:gap-6 lg:grid-cols-4 lg:auto-rows-[220px]">
            {galleryImages.map((image, i) => (
              <D2ImageReveal
                key={image.src}
                src={image.src}
                alt={image.alt}
                delay={i * 0.05}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className={`rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.25)] md:rounded-3xl ${image.span ?? ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workspace / culture / philosophy */}
      <section className="relative overflow-hidden" style={{ background: d2BandBg }}>
        <div className={`${d2Section} text-[#EDE9E0]`}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <D2ImageReveal
              src={slideAsset('belong-interior')}
              alt="Warm, layered interior detail from the Design My Place studio culture"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="order-1 h-[320px] rounded-[20px] border border-white/10 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.5)] sm:h-[380px] md:h-[420px] md:rounded-3xl lg:order-2 lg:h-auto lg:aspect-[4/5]"
            />

            <D2Reveal className="order-2 lg:order-1">
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Our Philosophy
                </p>
              </div>
              <h2 className="mb-6 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)] sm:mb-8">
                Meaningful design,{' '}
                <span className="font-display italic font-normal text-[#C4A07A]">
                  thoughtfully made
                </span>
              </h2>
              <p className="mb-6 max-w-xl font-body text-[15px] font-normal leading-[1.85] text-[rgba(237,233,224,0.92)] sm:text-[15.5px]">
                Founded in Bengaluru, Design My Place LLP is an ultra-premium interior
                design studio serving discerning clients across India. We combine
                architectural rigour with emotional intelligence to create spaces
                that endure.
              </p>
              <p className="mb-10 max-w-xl font-body text-[14.5px] font-normal leading-[1.85] text-white/60 sm:text-[15px]">
                From luxury apartments in Mumbai to wellness retreats in Goa, our work
                spans residential, commercial, and hospitality — united by a commitment
                to research, craft, and the stories of those we design for.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/contact">Book Consultation</PrimaryButton>
                <Link href="/about" className="group inline-flex h-14 w-full max-w-[420px] shrink-0 items-center justify-center gap-2.5 rounded-[12px] border border-white/30 bg-transparent px-12 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-[320px] sm:min-w-[280px]">
                  <span>About Us</span>
                  <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </D2Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <D2Reveal className="mb-12 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                What We Stand For
              </p>
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
            </div>
            <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
              Our{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">Values</span>
            </h2>
          </D2Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {values.map((value, i) => (
              <D2Reveal
                key={value.title}
                delay={i * 0.08}
                className="rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-8 shadow-[0_1px_0_rgba(63,57,48,0.04)] transition-colors duration-500 hover:border-[#9C6F4E]/35 lg:p-10"
              >
                <h3 className="mb-3 font-display text-[20px] font-medium text-[#3F3930] sm:text-[22px]">
                  {value.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.85] text-[#55503F]">
                  {value.description}
                </p>
              </D2Reveal>
            ))}
          </div>
        </div>
      </section>

      <D2MeetOurTeam />

      {/* Culture quote band */}
      <section className="relative overflow-hidden" style={{ background: d2BandBg }}>
        <div className={`${d2Section} text-center`}>
          <D2Reveal className="mx-auto max-w-3xl">
            <p className="font-body text-[clamp(1.5rem,3vw,2.25rem)] font-light italic leading-[1.4] text-[#EDE9E0]">
              &ldquo;Good design begins with listening — to the site, the light,
              and the people who will call it home.&rdquo;
            </p>
            <p className="mt-6 font-display text-[13px] font-medium tracking-[0.1em] text-[#9C6F4E]">
              THE DESIGN MY PLACE STUDIO
            </p>
          </D2Reveal>
        </div>
      </section>

      {/* Visit / map */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <D2Reveal>
              <div className="mb-5 flex items-center gap-4 sm:mb-6">
                <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                  Visit Us
                </p>
              </div>
              <h2 className="mb-6 font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2.25rem,4.5vw,3.5rem)]">
                Bengaluru{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">Studio</span>
              </h2>
              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-8 flex items-start gap-4 font-body text-[15px] leading-[1.85] text-[#55503F] transition-colors hover:text-[#3F3930]"
              >
                <MapPin size={18} className="mt-1 shrink-0 text-[#9C6F4E]" />
                <span>
                  Design My Place LLP
                  <br />
                  {STUDIO_ADDRESS.line1}
                  <br />
                  {STUDIO_ADDRESS.line2}
                  <br />
                  {STUDIO_ADDRESS.line3}
                </span>
              </a>
              <PrimaryButton href="/contact">Book a Visit</PrimaryButton>
            </D2Reveal>

            <D2Reveal
              delay={0.12}
              className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.1)] shadow-[0_18px_50px_-24px_rgba(63,57,48,0.2)] md:rounded-3xl"
            >
              <iframe
                src={STUDIO_ADDRESS.mapsEmbedUrl}
                title="Design My Place LLP — Bengaluru studio location"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </D2Reveal>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
