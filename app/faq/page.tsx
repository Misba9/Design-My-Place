import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  faqSchema,
} from '@/lib/seo';
import { serviceFaqs } from '@/lib/services';
import { locations } from '@/lib/locations';

export const metadata: Metadata = createPageMetadata({
  title: 'FAQ — Interior Design Questions',
  description:
    'Answers about luxury interior design timelines, budgets, turnkey delivery, and service areas in Bangalore, Delhi NCR & across India.',
  path: '/faq',
});

const generalFaqs = [
  {
    question: 'What is Design My Place?',
    answer:
      'Design My Place LLP is a Bengaluru-based luxury interior design studio specialising in complete bespoke residential interiors for new homes and renovations with budgets above ₹25 Lakhs.',
  },
  {
    question: 'Which cities do you serve?',
    answer:
      'We serve Bangalore, Delhi NCR (including Gurgaon, Noida, Ghaziabad, Faridabad), Mumbai, Pune, Goa, and other Indian cities with dedicated site coordination.',
  },
  {
    question: 'What is your minimum project budget?',
    answer:
      'We focus on complete bespoke interior design projects with budgets above ₹25 Lakhs — covering design, procurement, execution, and final styling.',
  },
];

const allFaqs = [...generalFaqs, ...serviceFaqs];

export default function FaqPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
    faqSchema(allFaqs),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ]}
      />

      <PageHero
        offsetNav={false}
        label="Help & Guidance"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Everything you need to know about working with Design My Place — from timelines and budgets to service areas and our design process."
        imageAlt="Design My Place luxury interior design studio FAQ"
      />

      <section className="section-y bg-luxury-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {allFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-white/10 p-8 bg-luxury-gray/40"
              >
                <h2 className="font-display text-xl text-white mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-luxury-gray border-t border-white/10">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Service Areas</p>
          <h2 className="font-display text-2xl lg:text-3xl text-white mb-8">
            Interior design by location
          </h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-sm text-gray-400 hover:text-gold-300 border border-white/10 px-4 py-2 transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-outline-gold group">
              <span>Our Services</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline-gold group">
              <span>Book Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
