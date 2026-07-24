import { Contact } from '@/components/Contact';
import { JsonLd } from '@/components/JsonLd';
import { D2Hero } from '@/components/design2/Hero';
import { D2AboutUs } from '@/components/design2/AboutUs';
import { D2Statistics } from '@/components/design2/Statistics';
import { D2WhatWeDo } from '@/components/design2/WhatWeDo';
import { D2Evolve } from '@/components/design2/Evolve';
import { D2Portfolio } from '@/components/design2/Portfolio';
import { D2Instagram } from '@/components/design2/Instagram';
import { D2HowWeWork } from '@/components/design2/HowWeWork';
import { D2PriceList } from '@/components/design2/PriceList';
import { D2MeetOurTeam } from '@/components/design2/MeetOurTeam';
import { D2BuiltToBelong } from '@/components/design2/BuiltToBelong';
import { breadcrumbSchema, buildSchemaGraph, faqSchema } from '@/lib/seo';
import { serviceFaqs } from '@/lib/services';

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
      <D2Hero />
      <D2AboutUs />
      <D2Statistics />
      <D2WhatWeDo />
      <D2Evolve />
      <D2Portfolio />
      <D2Instagram />
      <D2HowWeWork />
      <D2PriceList />
      <D2MeetOurTeam />
      <D2BuiltToBelong />

      <div id="contact" className="scroll-mt-20">
        <Contact theme="deck" />
      </div>
    </>
  );
}
