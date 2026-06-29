import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { JsonLd } from '@/components/JsonLd';
import { processSteps } from '@/lib/process';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Our Interior Design Process — 6 Phases',
  description:
    'Our six-phase luxury interior design process — discovery, concept, design, procurement, execution & handover for Bangalore & Delhi NCR homes.',
  path: '/process',
});

const expectations = [
  {
    title: 'Transparent Communication',
    description:
      'Regular updates, clear milestones, and open dialogue at every stage. You always know where your project stands.',
  },
  {
    title: 'Collaborative Decisions',
    description:
      'We present options, explain trade-offs, and refine together. Your input shapes the outcome — we guide the process.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Site visits, vendor coordination, and meticulous snag lists ensure the finished space matches the vision.',
  },
];

export default function ProcessPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Process', path: '/process' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        label="How We Work"
        title="Our"
        titleAccent="Process"
        description="A structured, six-phase approach that transforms your vision into a finished space — with clarity, craft, and care at every step."
        imageAlt="Design My Place interior design process for luxury homes"
      />

      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-ivory-200/10 hidden md:block" />

            <div className="space-y-20 lg:space-y-28">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <span className="text-7xl lg:text-8xl font-display text-gold-500/15 block mb-4">
                      {step.number}
                    </span>
                    <h2 className="font-display text-3xl lg:text-4xl text-white mb-5">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 font-light text-lg leading-relaxed mb-8 max-w-lg">
                      {step.description}
                    </p>
                    <ul
                      className={`space-y-3 ${
                        index % 2 === 1 ? 'lg:ml-auto' : ''
                      }`}
                    >
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className={`flex items-start gap-3 text-gray-300 font-light text-sm ${
                            index % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6 text-center">
            What to Expect
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-white text-center mb-16">
            Working{' '}
            <span className="italic font-light text-gradient-gold-inline">
              with us
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="glass p-8 border border-white/10 text-center"
              >
                <h3 className="font-display text-xl text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-gray border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-400 font-light mb-8">
            See the results of our approach across residential and commercial projects.
          </p>
          <Link href="/projects" className="btn-outline-gold group">
            <span>View Our Projects</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
