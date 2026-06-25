import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { PageCTA } from '@/components/PageCTA';

export const metadata: Metadata = {
  title: 'Projects | Design My Place LLP',
  description:
    'Explore our portfolio of luxury residential, commercial, and hospitality interior design projects across India.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Selected"
        titleAccent="Projects"
        description="A curated collection of residences, workspaces, and hospitality environments — each shaped by research, craft, and the stories of those who inhabit them."
      />
      <section className="py-24 lg:py-32 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProjectsGrid showFilters />
        </div>
      </section>
      <PageCTA />
    </>
  );
}
