import { ContentImage } from '@/components/ContentImage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustBadges } from '@/components/TrustBadges';
import { PriceList } from '@/components/PriceList';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { ServicePage } from '@/lib/service-pages';
import { howWeWork, serviceProcessSteps } from '@/lib/process';

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

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="label-uppercase text-gold-300 mb-4 sm:mb-6">Overview</p>
            <h2 className="font-display text-fluid-h2 text-white mb-6 sm:mb-8 leading-tight text-balance">
              {service.title} by{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Design My Place
              </span>
            </h2>
            <p className="text-gray-300 text-fluid-body font-light leading-relaxed">
              {service.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-4 sm:mb-6">Why Choose Us</p>
          <h2 className="font-display text-fluid-h2 text-white mb-10 sm:mb-16 text-balance">
            Benefits of our{' '}
            <span className="italic font-light text-gradient-gold-inline">
              approach
            </span>
          </h2>
          <div className="card-grid">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass p-6 sm:p-8 border border-white/10"
              >
                <h3 className="font-display text-fluid-h3 text-white mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-4 sm:mb-6">
            {howWeWork.number} — {howWeWork.label}
          </p>
          <h2 className="font-display text-fluid-h2 text-white mb-10 sm:mb-16 text-balance">
            Our{' '}
            <span className="italic font-light text-gradient-gold-inline">
              process
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {serviceProcessSteps.map((step, index) => (
              <div key={step.step} className="glass border border-white/10 p-6 sm:p-8 border-t-gold-400/40 border-t-2">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-fluid-h3 text-white mb-3">
                  {step.step}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 sm:mt-12">
            <Link href="/process" className="btn-outline-gold group w-full sm:w-auto">
              <span>Full Process Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <PriceList className="bg-luxury-gray" showCta={false} />

      <section className="section-y bg-luxury-gray">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-4 sm:mb-6">Portfolio</p>
          <h2 className="font-display text-fluid-h2 text-white mb-8 sm:mb-12 text-balance">
            Project{' '}
            <span className="italic font-light text-gradient-gold-inline">
              gallery
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.gallery.map((src, index) => (
              <div
                key={`${service.slug}-gallery-${index}`}
                className={`relative overflow-hidden border border-white/10 aspect-[4/3] ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2 md:aspect-[21/9]' : ''
                }`}
              >
                <ContentImage
                  src={src}
                  alt={`${service.title} — gallery image ${index + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10">
            <Link href="/projects" className="btn-outline-gold group w-full sm:w-auto">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TrustBadges showStats />

      <section className="section-y bg-luxury-black">
        <div className="container-site max-w-3xl">
          <p className="label-uppercase text-gold-300 mb-4 sm:mb-6 text-center">
            Common Questions
          </p>
          <h2 className="font-display text-fluid-h2 text-white text-center mb-10 sm:mb-16 text-balance">
            Frequently{' '}
            <span className="italic font-light text-gradient-gold-inline">
              asked
            </span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 p-6 sm:p-8 bg-luxury-gray/40"
              >
                <h3 className="font-display text-fluid-h3 text-white mb-3 sm:mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
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
