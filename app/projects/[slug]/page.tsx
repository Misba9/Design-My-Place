import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from '@/lib/projects';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.name} | Design My Place LLP`,
    description: project.description,
    openGraph: {
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <PageHero
        label={`${project.type} · ${project.location}`}
        title={project.name}
        description={project.description}
        image={project.image}
      />

      <section className="py-16 lg:py-20 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold-300 transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: 'Location', value: project.location },
              { label: 'Style', value: project.style },
              { label: 'Area', value: project.area },
              { label: 'Duration', value: project.duration },
            ].map((item) => (
              <div key={item.label} className="border-l border-gold-400/50 pl-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold-300 mb-2">
                  {item.label}
                </p>
                <p className="font-display text-xl text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="label-uppercase text-gold-300 mb-6">The Story</p>
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-8 leading-tight">
                Design rooted in{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  purpose
                </span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <p className="label-uppercase text-gold-300 mb-6">Highlights</p>
              <ul className="space-y-5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-4 text-gray-300 font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="label-uppercase text-gold-300 mb-6">Gallery</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-12">
            Project{' '}
            <span className="italic font-light text-gradient-gold-inline">
              Imagery
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden border border-white/10 ${
                  index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.name} — image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 lg:py-28 bg-luxury-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display text-3xl lg:text-4xl text-white">
                More{' '}
                <span className="italic font-light text-gradient-gold-inline">
                  Projects
                </span>
              </h2>
              <Link
                href="/projects"
                className="btn-outline-gold hidden sm:inline-flex text-[10px]"
              >
                View All
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group block border border-white/10 overflow-hidden card-hover-lift"
                >
                  <div className="relative aspect-[4/3] img-hover-zoom">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-xl text-white group-hover:text-gold-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.location} · {item.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA
        title="Inspired by this"
        titleAccent="project?"
        description="Let's discuss how we can create a space that reflects your story with the same care and attention to detail."
      />
    </>
  );
}
