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
import {
  d2BtnOutline,
  d2PageBg,
  d2Section,
} from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';

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
        label="Help & Guidance"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Everything you need to know about working with Design My Place — from timelines and budgets to service areas and our design process."
        imageAlt="Design My Place luxury interior design studio FAQ"
      />

      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={`${d2Section} max-w-3xl`}>
          <div className="space-y-5">
            {allFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 sm:p-8"
              >
                <h2 className="mb-3 font-display text-[18px] font-medium text-[#3F3930] sm:text-[20px]">
                  {faq.question}
                </h2>
                <p className="font-body text-[15px] leading-[1.85] text-[#55503F]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(63,57,48,0.08)] bg-[#FAF8F5] text-[#3F3930]">
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Service Areas
            </p>
          </div>
          <h2 className="mb-8 font-body text-[clamp(1.75rem,3.5vw,2.5rem)] font-light tracking-[-0.02em]">
            Interior design by{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              location
            </span>
          </h2>
          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-sm border border-[rgba(63,57,48,0.18)] px-4 py-2.5 font-body text-[11px] tracking-[0.06em] text-[#55503F] transition-colors hover:border-[#9C6F4E]/50 hover:text-[#9C6F4E]"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/services" className={`group ${d2BtnOutline}`}>
              <span>Our Services</span>
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
            </Link>
            <PrimaryButton href="/contact">Book Consultation</PrimaryButton>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
