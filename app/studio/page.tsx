import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Logo } from '@/components/Logo';
import { Testimonials } from '@/components/Testimonials';
import { TeamSection } from '@/components/TeamSection';
import { JsonLd } from '@/components/JsonLd';
import { STUDIO_ADDRESS } from '@/lib/site';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';
import { AnimatedSection, Stagger, StaggerItem } from '@/components/AnimatedSection';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Studio — Bengaluru Interior Design',
  description:
    'Visit Design My Place studio on Church Street, Bengaluru. Luxury interior designers creating bespoke homes across Bangalore & Delhi NCR.',
  path: '/studio',
});

const values = [
  {
    title: 'Research-Led',
    description:
      'Every design begins with deep understanding — of the site, the climate, and the people who will inhabit the space.',
  },
  {
    title: 'Emotionally Grounded',
    description:
      'We design for how spaces make you feel, not just how they look. Comfort, calm, and joy guide every decision.',
  },
  {
    title: 'Timeless Craft',
    description:
      'We favour materials and methods that age beautifully — honest textures, artisan details, and enduring quality.',
  },
  {
    title: 'Collaborative',
    description:
      'Your voice shapes the process. We listen, interpret, and refine until the design feels unmistakably yours.',
  },
];

const stats = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Excellence' },
  { value: '12+', label: 'Cities Served' },
  { value: '100%', label: 'Client Satisfaction' },
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
        offsetNav={false}
        label="About The Studio"
        title="Spaces that hold"
        titleAccent="your story"
        description="At Design My Place, we believe interiors are more than aesthetics. They are the backdrop to life's most meaningful moments."
        imageAlt="Design My Place interior design studio in Bengaluru"
      />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <AnimatedSection variant="scaleIn" className="glass p-10 lg:p-14 flex flex-col items-center justify-center min-h-[380px]">
              <Logo size="lg" className="justify-center" imageClassName="object-center mx-auto" />
              <p className="mt-8 text-center text-gray-400 text-sm leading-relaxed max-w-xs">
                Creating interiors that shape how people live, work, and feel.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="slideRight" delay={0.12}>
              <p className="label-uppercase text-gold-300 mb-6">Our Philosophy</p>
              <h2 className="font-display text-3xl lg:text-5xl text-white mb-8 leading-tight">
                Meaningful design,{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  thoughtfully made
                </span>
              </h2>
              <p className="text-gray-300 text-lg font-light mb-6 leading-relaxed">
                Founded in Bengaluru, Design My Place LLP is an ultra-premium interior
                design studio serving discerning clients across India. We combine
                architectural rigour with emotional intelligence to create spaces
                that endure.
              </p>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                From luxury apartments in Mumbai to wellness retreats in Goa, our work
                spans residential, commercial, and hospitality — united by a commitment
                to research, craft, and the stories of those we design for.
              </p>
              <Link href="/about" className="btn-outline-gold group mr-4">
                <span>About Us</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link href="/contact" className="btn-outline-gold group">
                <span>Book Consultation</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <AnimatedSection className="text-center mb-16">
            <p className="label-uppercase text-gold-300 mb-6">What We Stand For</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white">
              Our{' '}
              <span className="italic font-light text-gradient-gold-inline">Values</span>
            </h2>
          </AnimatedSection>
          <Stagger className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className="glass p-8 lg:p-10 border border-white/10 hover:border-gold-400/30 transition-colors duration-500"
              >
                <h3 className="font-display text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="border-l border-gold-400/60 pl-5 lg:pl-6">
                <p className="font-display text-3xl lg:text-4xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <TeamSection showStudioLink={false} />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection variant="slideLeft" className="relative aspect-[4/3] border border-white/10 overflow-hidden">
              <iframe
                src={STUDIO_ADDRESS.mapsEmbedUrl}
                title="Design My Place LLP — Bengaluru studio location"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </AnimatedSection>
            <AnimatedSection variant="slideRight" delay={0.12}>
              <p className="label-uppercase text-gold-300 mb-6">Visit Us</p>
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                Bengaluru{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  Studio
                </span>
              </h2>
              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-light leading-relaxed hover:text-gold-300 transition-colors block mb-8"
              >
                Design My Place LLP
                <br />
                {STUDIO_ADDRESS.line1}
                <br />
                {STUDIO_ADDRESS.line2}
                <br />
                {STUDIO_ADDRESS.line3}
              </a>
              <Link href="/contact" className="btn-gold group">
                <span>Book a Visit</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Testimonials />
      <PageCTA />
    </>
  );
}
