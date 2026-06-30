import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { PriceList } from '@/components/PriceList';
import { JsonLd } from '@/components/JsonLd';
import { services, serviceFaqs } from '@/lib/services';
import { servicePages } from '@/lib/service-pages';
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
      <PageHero
        label="Our Expertise"
        title="Design"
        titleAccent="Services"
        description="From concept to completion, we offer end-to-end interior design services tailored to how you live, work, and entertain."
        imageAlt="Luxury interior design services by Design My Place"
      />

      <section className="section-y bg-luxury-black">
        <div className="container-site">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center mb-8">
                    <service.icon size={26} className="text-gold-300" />
                  </div>
                  <p className="label-uppercase text-gold-300 mb-4">
                    0{index + 1} — Service
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 font-light text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div
                  className={`glass p-8 lg:p-10 border border-white/10 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="label-uppercase text-gold-300 mb-6">What&apos;s Included</p>
                  <ul className="space-y-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-gray-300 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceList className="bg-luxury-gray" />

      <section className="section-y bg-luxury-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6 text-center">
            Common Questions
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-white text-center mb-16">
            Frequently{' '}
            <span className="italic font-light text-gradient-gold-inline">
              Asked
            </span>
          </h2>
          <div className="space-y-6">
            {serviceFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 p-8 bg-luxury-black/40"
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
          <div className="mt-10 text-center">
            <Link href="/faq" className="text-sm text-gray-400 hover:text-gold-300 transition-colors">
              View all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-black border-t border-white/10">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Specialisations</p>
          <h2 className="font-display text-2xl lg:text-3xl text-white mb-8">
            Dedicated service pages
          </h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {servicePages.map((sp) => (
              <Link
                key={sp.slug}
                href={`/services/${sp.slug}`}
                className="text-sm text-gray-400 hover:text-gold-300 border border-white/10 px-4 py-2 transition-colors"
              >
                {sp.title}
              </Link>
            ))}
          </div>
          <Link href="/process" className="btn-outline-gold group">
            <span>Explore Our Process</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-luxury-gray border-t border-white/10">
        <div className="container-site text-center">
          <p className="text-gray-400 font-light mb-8">
            Want to understand how we bring projects to life?
          </p>
          <Link href="/faq" className="btn-outline-gold group">
            <span>Read Our FAQ</span>
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
