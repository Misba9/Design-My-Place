import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Compass, ShieldCheck, Sparkles, Users2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection, Stagger, StaggerItem } from '@/components/AnimatedSection';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';
import { services, serviceFaqs } from '@/lib/services';
import { processSteps } from '@/lib/process';
import { servicePages } from '@/lib/service-pages';
import { d2PageBg, d2BandBg } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  faqSchema,
  professionalServiceSchema,
} from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Interior Design Services — Luxury Homes',
  description:
    'Luxury interior design services — villas, apartments, renovation & turnkey delivery in Bangalore, Delhi NCR & India. Budgets above ₹25 Lakhs.',
  path: '/services',
});

const benefits = [
  {
    icon: Compass,
    title: 'Research-Led',
    description:
      'Every brief begins with understanding the site, the climate, and the people who will live in the space — never a template.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Craft',
    description:
      'No catalogue solutions. Materials, furniture, and finishes are curated uniquely for each home and budget.',
  },
  {
    icon: Users2,
    title: 'End-to-End Partnership',
    description:
      'From first conversation to final styling touch, one team stays with you — design, procurement, execution, handover.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Process',
    description:
      'Clear milestones, honest fee structures, and open communication so you always know where your project stands.',
  },
] as const;

export default function ServicesPage() {
  const schema = buildSchemaGraph(
    professionalServiceSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    faqSchema(serviceFaqs),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <PageHero
        label="Our Expertise"
        title="Design"
        titleAccent="Services"
        description="From concept to completion, we offer end-to-end interior design services tailored to how you live, work, and entertain."
        imageAlt="Luxury interior design services by Design My Place"
      />

      {/* Introduction */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[120px]">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                What We Offer
              </p>
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
            </div>
            <h2 className="font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              Every service, one{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                unified craft
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-[15px] leading-[1.85] text-[#55503F] sm:mt-8">
              Whether you&apos;re commissioning a full villa fit-out or refreshing a single room,
              our studio brings the same research-led rigour and bespoke craft to every brief —
              scaled to your space, timeline, and budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-[70px] md:px-12 md:pb-[100px] lg:px-20 lg:pb-[140px]">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {services.map((service, index) => (
              <StaggerItem key={service.title} className="h-full">
                <article
                  className="
                    group relative flex h-full flex-col overflow-hidden
                    rounded-[20px] border border-[rgba(63,57,48,0.08)]
                    bg-[rgba(255,255,255,0.55)] p-7
                    shadow-[0_1px_0_rgba(63,57,48,0.04)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-1 hover:border-[rgba(156,111,78,0.24)]
                    hover:bg-[rgba(255,255,255,0.85)]
                    hover:shadow-[0_22px_48px_-22px_rgba(63,57,48,0.3)]
                    sm:p-8
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        flex h-14 w-14 items-center justify-center rounded-full
                        border border-[rgba(156,111,78,0.28)] bg-[rgba(156,111,78,0.08)]
                        text-[#9C6F4E] transition-colors duration-500
                        group-hover:bg-[#9C6F4E] group-hover:text-[#FAF8F5]
                      "
                    >
                      <service.icon size={24} strokeWidth={1.5} />
                    </span>
                    <span className="font-body text-[12px] font-light tracking-[0.14em] text-[#55503F]/45">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-body text-[22px] font-light leading-[1.15] tracking-[-0.01em] text-[#3F3930]">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                    {service.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-[rgba(63,57,48,0.1)] pt-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-[#9C6F4E]" />
                        <span className="font-body text-[13.5px] leading-[1.6] text-[#55503F]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Dedicated service pages */}
          <AnimatedSection delay={0.1} className="mt-14 border-t border-[rgba(63,57,48,0.12)] pt-10 sm:mt-16 sm:pt-12">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Specialisations
            </p>
            <h3 className="mt-3 max-w-lg font-body text-[24px] font-light leading-[1.2] tracking-[-0.01em] text-[#3F3930] sm:text-[28px]">
              Explore dedicated service pages
            </h3>
            <div className="mt-7 flex flex-wrap gap-3">
              {servicePages.map((sp) => (
                <Link
                  key={sp.slug}
                  href={`/services/${sp.slug}`}
                  className="
                    rounded-sm border border-[rgba(63,57,48,0.18)] px-4 py-2.5
                    font-body text-[13px] text-[#55503F]
                    transition-colors duration-300
                    hover:border-[#9C6F4E]/50 hover:text-[#9C6F4E]
                  "
                >
                  {sp.title}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden" style={{ background: d2BandBg }}>
        <div className="relative mx-auto w-full max-w-[1600px] px-6 py-[70px] text-[#EDE9E0] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <AnimatedSection className="max-w-2xl">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
              How We Work
            </p>
            <h2 className="mt-3 font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[#EDE9E0]">
              A process built for{' '}
              <span className="font-display italic font-normal text-[#C4A07A]">
                clarity
              </span>
            </h2>
          </AnimatedSection>

          <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-7 lg:gap-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <div
                  className="
                    group flex h-full flex-col rounded-[18px] border border-white/10
                    bg-white/[0.04] px-4 py-6 transition-all duration-500
                    hover:-translate-y-1 hover:border-[#9C6F4E]/40 hover:bg-white/[0.07]
                    md:rounded-[20px]
                  "
                >
                  <span className="font-body text-[11px] font-light tracking-[0.14em] text-[#9C6F4E]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-[17px] font-medium leading-tight text-[#EDE9E0]">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-[13px] leading-[1.65] text-[rgba(237,233,224,0.75)]">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[70px] md:px-12 md:py-[100px] lg:px-20 lg:py-[140px]">
          <AnimatedSection className="max-w-2xl">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Why Design My Place
            </p>
            <h2 className="mt-3 font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              What sets our{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                service apart
              </span>
            </h2>
          </AnimatedSection>

          <Stagger className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title} className="h-full">
                <div className="flex h-full flex-col border-l border-[#9C6F4E]/50 pl-6">
                  <benefit.icon size={26} strokeWidth={1.5} className="text-[#9C6F4E]" />
                  <h3 className="mt-5 font-body text-[19px] font-light leading-snug text-[#3F3930]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.75] text-[#55503F]">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <AnimatedSection delay={0.12} className="mt-12 flex flex-col items-start gap-4 border-t border-[rgba(63,57,48,0.12)] pt-10 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-12">
            <p className="max-w-md font-body text-[14.5px] leading-[1.8] text-[#55503F]">
              Three transparent fee structures — hourly, per sq. ft., or a designer fee on
              budget. The right model is agreed during your consultation.
            </p>
            <PrimaryButton href="/contact">Discuss Pricing</PrimaryButton>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className="mx-auto w-full max-w-[860px] px-6 py-[70px] md:px-12 md:py-[100px] lg:py-[140px]">
          <AnimatedSection className="mb-10 sm:mb-14">
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Common Questions
            </p>
            <h2 className="mt-3 font-body font-light text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
              Frequently{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                Asked
              </span>
            </h2>
          </AnimatedSection>

          <ServiceFaqAccordion faqs={serviceFaqs} />

          <AnimatedSection delay={0.1} className="mt-10 text-center sm:mt-12">
            <Link
              href="/faq"
              className="font-body text-[13px] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
            >
              View all frequently asked questions →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
