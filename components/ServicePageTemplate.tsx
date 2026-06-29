import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustBadges } from '@/components/TrustBadges';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { ServicePage } from '@/lib/service-pages';

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

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="label-uppercase text-gold-300 mb-6">Overview</p>
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-8 leading-tight">
              {service.title} by{' '}
              <span className="italic font-light text-gradient-gold-inline">
                Design My Place
              </span>
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              {service.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6">Why Choose Us</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-16">
            Benefits of our{' '}
            <span className="italic font-light text-gradient-gold-inline">
              approach
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass p-8 border border-white/10"
              >
                <h3 className="font-display text-xl text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6">How We Work</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-16">
            Our{' '}
            <span className="italic font-light text-gradient-gold-inline">
              process
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={step.step} className="border-t border-gold-400/40 pt-8">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mb-3">
                  0{index + 1}
                </p>
                <h3 className="font-display text-xl text-white mb-3">
                  {step.step}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/process" className="btn-outline-gold group">
              <span>Full Process Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6">Portfolio</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-12">
            Project{' '}
            <span className="italic font-light text-gradient-gold-inline">
              gallery
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.gallery.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden border border-white/10 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`${service.title} — gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? '66vw' : '33vw'}
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/projects" className="btn-outline-gold group">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TrustBadges showStats />

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6 text-center">
            Common Questions
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-white text-center mb-16">
            Frequently{' '}
            <span className="italic font-light text-gradient-gold-inline">
              asked
            </span>
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 p-8 bg-luxury-gray/40"
              >
                <h3 className="font-display text-xl text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
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
