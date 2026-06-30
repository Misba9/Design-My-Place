import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact — Book Interior Design Consultation',
  description:
    'Book a luxury interior design consultation with Design My Place. Share your vision for your Bangalore or Delhi NCR home. Start your journey today.',
  path: '/contact',
});

export default function ContactPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        label="Get In Touch"
        title="Start Your"
        titleAccent="Journey"
        description="Every great design begins with a conversation. Tell us about your vision and let's create something extraordinary together."
        imageAlt="Contact Design My Place for luxury interior design consultation"
      />
      <Contact showIntro={false} className="!pt-0 sm:!pt-0" />
    </>
  );
}
