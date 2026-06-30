import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { WhatWeDo } from '@/components/WhatWeDo';
import { AboutQuote } from '@/components/AboutQuote';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, buildSchemaGraph, faqSchema } from '@/lib/seo';
import { serviceFaqs } from '@/lib/services';

const PriceList = dynamic(
  () => import('@/components/PriceList').then((m) => ({ default: m.PriceList })),
  { ssr: true },
);
const TeamSection = dynamic(
  () => import('@/components/TeamSection').then((m) => ({ default: m.TeamSection })),
  { ssr: true },
);

const homeFaqs = [
  {
    question: 'Who is the best luxury interior designer in Bangalore?',
    answer:
      'Design My Place LLP is a Bengaluru-based luxury interior design studio specialising in bespoke residential interiors for homes and villas with budgets above ₹25 Lakhs, serving Bangalore, Delhi NCR, and pan-India.',
  },
  ...serviceFaqs,
];

export default function Home() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
    faqSchema(homeFaqs),
  );

  return (
    <>
      <JsonLd data={schema} />
      <Hero />
      <Story />
      <WhatWeDo />
      <AboutQuote />
      <Projects />
      <Process />
      <PriceList className="bg-luxury-black !pb-8 sm:!pb-10 lg:!pb-12" />
      <TeamSection className="!pt-8 sm:!pt-10 lg:!pt-12 !pb-8 sm:!pb-10 lg:!pb-12" />
      <Contact className="!pt-8 sm:!pt-10 lg:!pt-12" />
    </>
  );
}
