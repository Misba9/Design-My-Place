import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { AboutQuote } from '@/components/AboutQuote';
import { WhatWeDo } from '@/components/WhatWeDo';
import { PriceList } from '@/components/PriceList';
import { Logo } from '@/components/Logo';
import { JsonLd } from '@/components/JsonLd';
import {
  aboutStats,
  aboutUsIntro,
  missionVision,
  values,
  milestones,
  differentiators,
} from '@/lib/about';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About Us — Luxury Interior Design Studio',
  description:
    'Design My Place LLP — Bengaluru luxury interior designers creating bespoke homes & villas across Bangalore, Delhi NCR & India since 2021.',
  path: '/about',
});

export default function AboutPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <PageHero
        offsetNav={false}
        label="About Us"
        title="Designing spaces that"
        titleAccent="matter"
        description="We are a Bengaluru-based luxury interior design studio creating meaningful environments for homes, workplaces, and hospitality — across India."
        imageAlt="Design My Place luxury interior design studio in Bangalore"
      />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[520px] overflow-hidden border border-white/10">
              <Image
                src="/hero-luxury.jpg"
                alt="Design My Place interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="label-uppercase text-gold-300 mb-6">{aboutUsIntro.label}</p>
              <h2 className="font-display text-3xl lg:text-5xl text-white mb-8 leading-tight">
                {aboutUsIntro.title}{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  {aboutUsIntro.titleAccent}
                </span>
              </h2>
              {aboutUsIntro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-gray-400 font-light mb-6 last:mb-0 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo />

      <AboutQuote />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="glass p-10 lg:p-12 border border-white/10">
              <p className="label-uppercase text-gold-300 mb-4">Mission</p>
              <p className="font-display text-2xl lg:text-3xl text-white leading-snug">
                {missionVision.mission}
              </p>
            </div>
            <div className="glass p-10 lg:p-12 border border-white/10">
              <p className="label-uppercase text-gold-300 mb-4">Vision</p>
              <p className="font-display text-2xl lg:text-3xl text-white leading-snug">
                {missionVision.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div className="glass p-10 lg:p-14 flex flex-col items-center justify-center min-h-[360px]">
              <Logo size="lg" className="justify-center" imageClassName="object-center mx-auto" />
              <p className="mt-8 text-center text-gray-400 text-sm leading-relaxed max-w-sm">
                Design My Place LLP — Luxury Interior Design Studio, Bengaluru, India
              </p>
            </div>

            <div>
              <p className="label-uppercase text-gold-300 mb-6">Why We Exist</p>
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-10 leading-tight">
                Interiors are the backdrop to life&apos;s most{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  meaningful
                </span>{' '}
                moments
              </h2>
              <div className="space-y-8">
                {differentiators.map((item) => (
                  <div key={item.title} className="border-l border-gold-400/50 pl-6">
                    <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6 text-center">What We Stand For</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white text-center mb-16">
            Our{' '}
            <span className="italic font-light text-gradient-gold-inline">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass p-8 lg:p-10 border border-white/10 hover:border-gold-400/30 transition-colors duration-500"
              >
                <h3 className="font-display text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Our Journey</p>
          <h2 className="font-display text-3xl lg:text-5xl text-white mb-16">
            Milestones{' '}
            <span className="italic font-light text-gradient-gold-inline">along the way</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="border-t border-gold-400/40 pt-8"
              >
                <p className="font-display text-4xl text-gold-400/40 mb-4">
                  {milestone.year}
                </p>
                <h3 className="font-display text-2xl text-white mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceList className="bg-luxury-gray" showCta={false} />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="border-l border-gold-400/60 pl-5 lg:pl-6">
                <p className="font-display text-3xl lg:text-4xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-black border-t border-white/10">
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-uppercase text-gold-300 mb-3">The Studio</p>
            <p className="text-gray-400 font-light max-w-md">
              Visit our Bengaluru studio or explore how we bring projects to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/studio" className="btn-outline-gold group">
              <span>Our Studio</span>
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
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
