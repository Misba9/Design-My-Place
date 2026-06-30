import type { Metadata } from 'next';
import { ContentImage } from '@/components/ContentImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ProjectViewTracker } from '@/components/ProjectViewTracker';
import { projects, getProjectBySlug, getRelatedProjects } from '@/lib/projects';
import { HERO_IMAGE, isLocalImage } from '@/lib/images';
import { getProjectDetail } from '@/lib/project-details';
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  faqSchema,
  imageObjectSchema,
  projectSchema,
} from '@/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  const title = `${project.name} — ${project.type}`;
  const description =
    project.description.length > 155
      ? `${project.description.slice(0, 152)}...`
      : project.description;

  return createPageMetadata({
    title,
    description,
    path: `/projects/${project.slug}`,
    ogImage: isLocalImage(project.image) ? project.image : HERO_IMAGE,
    ogImageAlt: `${project.name} interior design by Design My Place`,
  });
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const detail = getProjectDetail(project.slug, project);
  const related = getRelatedProjects(project.slug);

  const schema = buildSchemaGraph(
    projectSchema(project),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: project.name, path: `/projects/${project.slug}` },
    ]),
    faqSchema(detail.faqs),
    imageObjectSchema({
      url: isLocalImage(project.image) ? project.image : HERO_IMAGE,
      name: project.name,
      description: project.description,
    }),
    ...project.gallery
      .filter(isLocalImage)
      .map((src, index) =>
      imageObjectSchema({
        url: src,
        name: `${project.name} — image ${index + 1}`,
        description: `${project.name} interior design gallery`,
      }),
    ),
  );

  return (
    <>
      <ProjectViewTracker slug={project.slug} name={project.name} />
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.name, path: `/projects/${project.slug}` },
        ]}
      />

      <PageHero
        offsetNav={false}
        label={`${project.type} · ${project.location}`}
        title={project.name}
        description={project.description}
        image={project.image}
        imageAlt={`${project.name} — ${project.type} in ${project.location}`}
      />

      <section className="section-y-sm bg-luxury-black border-b border-white/10">
        <div className="container-site">
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
              { label: 'Timeline', value: detail.timeline },
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

      <section className="section-y-sm bg-luxury-black">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Overview</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-8">
            Project{' '}
            <span className="italic font-light text-gradient-gold-inline">overview</span>
          </h2>
          <p className="text-gray-300 font-light text-lg leading-relaxed max-w-3xl">
            {detail.overview}
          </p>
        </div>
      </section>

      <section className="section-y-sm bg-luxury-gray">
        <div className="container-site grid lg:grid-cols-2 gap-16">
          <div>
            <p className="label-uppercase text-gold-300 mb-6">The Brief</p>
            <h2 className="font-display text-3xl text-white mb-8">Client requirements</h2>
            <ul className="space-y-4">
              {detail.clientRequirements.map((req) => (
                <li key={req} className="flex items-start gap-4 text-gray-300 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-uppercase text-gold-300 mb-6">Philosophy</p>
            <h2 className="font-display text-3xl text-white mb-8">Design approach</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              {detail.designPhilosophy}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-luxury-black">
        <div className="container-site">
          <p className="label-uppercase text-gold-300 mb-6">Gallery</p>
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-12">
            Luxury{' '}
            <span className="italic font-light text-gradient-gold-inline">imagery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((src, index) => (
              <div
                key={`${project.slug}-gallery-${index}`}
                className={`relative overflow-hidden border border-white/10 ${
                  index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
              >
                <ContentImage
                  src={src}
                  alt={`${project.name} — luxury interior ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? '100vw' : '50vw'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-luxury-gray">
        <div className="container-site grid lg:grid-cols-2 gap-16">
          <div>
            <p className="label-uppercase text-gold-300 mb-6">Materiality</p>
            <h2 className="font-display text-3xl text-white mb-8">Materials used</h2>
            <ul className="space-y-3">
              {detail.materials.map((material) => (
                <li key={material} className="text-gray-400 font-light border-l border-gold-400/40 pl-4">
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-uppercase text-gold-300 mb-6">Problem & Solution</p>
            <h2 className="font-display text-3xl text-white mb-6">Challenges</h2>
            <ul className="space-y-3 mb-10">
              {detail.challenges.map((c) => (
                <li key={c} className="text-gray-400 font-light text-sm">{c}</li>
              ))}
            </ul>
            <h3 className="font-display text-xl text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {detail.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-300 font-light text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-luxury-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl text-white text-center mb-12">Project FAQ</h2>
          <div className="space-y-6">
            {detail.faqs.map((faq) => (
              <div key={faq.question} className="border border-white/10 p-8">
                <h3 className="font-display text-xl text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y-sm bg-luxury-gray">
          <div className="container-site">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-12">
              Related <span className="italic font-light text-gradient-gold-inline">projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group block border border-white/10 overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <ContentImage src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-xl text-white group-hover:text-gold-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{item.location} · {item.year}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/projects" className="btn-outline-gold group">
                <span>View All Projects</span>
                <ArrowRight size={14} />
              </Link>
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
