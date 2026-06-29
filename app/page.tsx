import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, buildSchemaGraph, faqSchema } from '@/lib/seo';
import { serviceFaqs } from '@/lib/services';

const Testimonials = dynamic(
  () => import('@/components/Testimonials').then((m) => ({ default: m.Testimonials })),
  { ssr: true },
);
const Statistics = dynamic(
  () => import('@/components/Statistics').then((m) => ({ default: m.Statistics })),
  { ssr: true },
);
const InstagramHighlights = dynamic(
  () =>
    import('@/components/InstagramHighlights').then((m) => ({
      default: m.InstagramHighlights,
    })),
  { ssr: true },
);
const LeadGeneration = dynamic(
  () => import('@/components/LeadGeneration').then((m) => ({ default: m.LeadGeneration })),
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
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Statistics />
      <InstagramHighlights />
      <LeadGeneration />
      <Contact />
    </>
  );
}
