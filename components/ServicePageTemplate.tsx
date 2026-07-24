import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { ServicePage } from '@/lib/service-pages';
import { howWeWork, serviceProcessSteps } from '@/lib/process';
import {
  d2BandBg,
  d2BtnOutline,
  d2PageBg,
  d2Section,
  d2SectionWide,
} from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';

type Props = {
  service: ServicePage;
};

export function ServicePageTemplate({ service }: Props) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      <PageHero
        label={service.heroLabel}
        title={service.heroTitle}
        titleAccent={service.heroAccent}
        description={service.heroDescription}
        imageAlt={`${service.title} by Design My Place`}
      />

      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Overview
            </p>
          </div>
          <h2 className="max-w-3xl font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            {service.title} by{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              Design My Place
            </span>
          </h2>
          <p className="mt-8 max-w-3xl font-body text-[15.5px] leading-[1.9] text-[#55503F]">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="bg-[#FAF8F5] text-[#3F3930]">
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Why Choose Us
            </p>
          </div>
          <h2 className="mb-12 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Benefits of our{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              approach
            </span>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 sm:p-8 md:rounded-3xl"
              >
                <h3 className="mb-3 font-display text-[20px] font-medium text-[#3F3930]">
                  {benefit.title}
                </h3>
                <p className="font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-[#EDE9E0]" style={{ background: d2BandBg }}>
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#C4A07A] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
              {howWeWork.label}
            </p>
          </div>
          <h2 className="mb-12 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#EDE9E0]">
            Our{' '}
            <span className="font-display italic font-normal text-[#C4A07A]">
              process
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcessSteps.map((step, index) => (
              <div
                key={step.step}
                className="rounded-[20px] border border-white/10 bg-black/15 p-6 backdrop-blur-sm md:rounded-3xl"
              >
                <p className="mb-3 font-body text-[10px] uppercase tracking-[0.2em] text-[#C4A07A]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mb-3 font-display text-[18px] font-medium text-[#EDE9E0]">
                  {step.step}
                </h3>
                <p className="font-body text-[13.5px] leading-[1.75] text-[rgba(237,233,224,0.88)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton href="/contact">Book Consultation</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2SectionWide}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Portfolio
            </p>
          </div>
          <h2 className="mb-12 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Project{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              gallery
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {service.gallery.map((src, index) => (
              <div
                key={`${service.slug}-gallery-${index}`}
                className={`relative overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] md:rounded-3xl ${
                  index === 0
                    ? 'aspect-[21/10] md:col-span-2 lg:col-span-2'
                    : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`${service.title} — gallery image ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes={
                    index === 0
                      ? '(max-width: 768px) 100vw, 66vw'
                      : '(max-width: 768px) 100vw, 33vw'
                  }
                  quality={90}
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" className={`group ${d2BtnOutline}`}>
              <span>View All Projects</span>
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] text-[#3F3930]">
        <div className={`${d2Section} max-w-3xl`}>
          <div className="mb-6 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Common Questions
            </p>
          </div>
          <h2 className="mb-12 text-center font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Frequently{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              asked
            </span>
          </h2>
          <div className="space-y-5">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 sm:p-8"
              >
                <h3 className="mb-3 font-display text-[18px] font-medium text-[#3F3930] sm:text-[20px]">
                  {faq.question}
                </h3>
                <p className="font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to discuss"
        titleAccent={`your ${service.title.toLowerCase()}?`}
        description="Book a consultation and let us understand your vision. Every great home begins with a conversation."
      />
    </>
  );
}
