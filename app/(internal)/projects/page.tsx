import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';
import { d2PageBg, d2SectionWide } from '@/components/design2/shared';

export const metadata: Metadata = createPageMetadata({
  title: 'Interior Design Projects Portfolio',
  description:
    'Explore luxury interior design projects — villas, apartments & commercial spaces in Bangalore, Delhi, Mumbai & across India by Design My Place.',
  path: '/projects',
});

export default function ProjectsPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
    ]),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ]}
      />

      <PageHero
        label="Portfolio"
        title="Selected"
        titleAccent="Projects"
        description="A curated collection of residences, workspaces, and hospitality environments — each shaped by research, craft, and the stories of those who inhabit them."
        imageAlt="Luxury interior design project portfolio by Design My Place"
      />

      <section
        className="relative overflow-hidden text-[#3F3930]"
        style={{ background: d2PageBg }}
      >
        <div className={d2SectionWide}>
          <ProjectsGrid showFilters />
        </div>
      </section>

      <PageCTA
        title="Have a space in"
        titleAccent="mind?"
        description="Tell us about your home, villa, or workplace — we’ll shape a design journey that feels unmistakably yours."
      />
    </>
  );
}
