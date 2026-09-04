import type { Metadata } from 'next';
import Image from 'next/image';
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
import {
  d2BtnOutline,
  d2PageBg,
} from '@/components/design2/tokens';

/** Tighter section padding for project detail pages */
const projectSection =
  'relative mx-auto w-full max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20';
const projectSectionWide =
  'relative mx-auto w-full max-w-[1600px] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  const title = `${project.name} — ${project.type}`;
  const plainDescription = project.description.replace(/\s+/g, ' ').trim();
  const description =
    plainDescription.length > 155
      ? `${plainDescription.slice(0, 152)}...`
      : plainDescription;

  return createPageMetadata({
    title,
    description,
    path: `/projects/${project.slug}/`,
    ogImage: isLocalImage(project.image) ? project.image : HERO_IMAGE,
    ogImageAlt: `${project.name} interior design by Design My Place`,
  });
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const detail = getProjectDetail(project.slug, project);
  const related = getRelatedProjects(project.slug);
  const gallery = project.gallery.filter(isLocalImage);
  const overviewBlocks = detail.overview
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const overviewHasTitle =
    overviewBlocks.length > 1 && !/[.!?]$/.test(overviewBlocks[0]);
  const overviewTitle = overviewHasTitle ? overviewBlocks[0] : null;
  const overviewParagraphs = overviewHasTitle
    ? overviewBlocks.slice(1)
    : overviewBlocks;
  const featuredOverviewImage = gallery[0] ?? (isLocalImage(project.image) ? project.image : null);
  const overviewGallery = gallery.slice(featuredOverviewImage ? 1 : 0);

  const schema = buildSchemaGraph(
    projectSchema(project),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects/' },
      { name: project.name, path: `/projects/${project.slug}/` },
    ]),
    faqSchema(detail.faqs),
    imageObjectSchema({
      url: isLocalImage(project.image) ? project.image : HERO_IMAGE,
      name: project.name,
      description: project.description.replace(/\s+/g, ' ').trim(),
    }),
    ...gallery.map((src, index) =>
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
          { name: 'Projects', path: '/projects/' },
          { name: project.name, path: `/projects/${project.slug}/` },
        ]}
      />

      <PageHero
        label={`${project.type} · ${project.location}`}
        title={project.name}
        description={
          project.description
            .split(/\n+/)
            .map((line) => line.trim())
            .filter(Boolean)[1] ?? project.description.replace(/\s+/g, ' ').trim()
        }
        image={project.image}
        imageAlt={`${project.name} — ${project.type} in ${project.location}`}
      />

      {/* Project information */}
      <section className="border-b border-[rgba(63,57,48,0.08)] bg-[#FAF8F5] text-[#3F3930]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-12 md:py-10 lg:px-20">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
          >
            <ArrowLeft size={14} strokeWidth={1.75} aria-hidden />
            Back to Projects
          </Link>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10 lg:gap-12">
            {[
              { label: 'Location', value: project.location },
              { label: 'Style', value: project.style },
              { label: 'Area', value: project.area },
              { label: 'Timeline', value: detail.timeline },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l border-[#9C6F4E]/40 pl-5"
              >
                <p className="mb-2 font-body text-[10px] uppercase tracking-[0.2em] text-[#9C6F4E]">
                  {item.label}
                </p>
                <p className="font-display text-[18px] font-medium leading-snug text-[#3F3930] sm:text-[20px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={projectSectionWide}>
          <div className="mb-4 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Overview
            </p>
          </div>
          <h2 className="font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Project{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              overview
            </span>
          </h2>

          <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            <div className="lg:col-span-5">
              {overviewTitle ? (
                <h3 className="max-w-xl font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.25] tracking-[-0.01em] text-[#3F3930]">
                  {overviewTitle}
                </h3>
              ) : null}
              <div
                className={`max-w-xl space-y-5 ${overviewTitle ? 'mt-6' : ''}`}
              >
                {overviewParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="font-body text-[15.5px] leading-[1.9] text-[#55503F]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.highlights.length > 0 ? (
                <ul className="mt-10 space-y-4 border-t border-[rgba(63,57,48,0.12)] pt-8">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 font-body text-[14.5px] leading-[1.7] text-[#55503F]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9C6F4E]"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {featuredOverviewImage ? (
              <div className="lg:col-span-7">
                <div className="relative w-full overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] aspect-[4/3] md:rounded-3xl lg:sticky lg:top-28 lg:aspect-auto lg:h-[min(72vh,720px)]">
                  <Image
                    src={featuredOverviewImage}
                    alt={`${project.name} — project overview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            ) : null}
          </div>

          {overviewGallery.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
              {overviewGallery.map((src, index) => (
                <div
                  key={`${project.slug}-overview-${index}`}
                  className={`relative overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] md:rounded-3xl ${
                    index === 0 && overviewGallery.length % 2 === 1
                      ? 'aspect-[21/10] md:col-span-2'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.name} — luxury interior ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes={
                      index === 0 && overviewGallery.length % 2 === 1
                        ? '100vw'
                        : '50vw'
                    }
                    quality={90}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
          <div className={projectSectionWide}>
            <div className="mb-4 flex items-center gap-4">
              <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Continue Exploring
              </p>
            </div>
            <h2 className="mb-8 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Related{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                projects
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}/`}
                  className="group block overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] bg-[#111] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-22px_rgba(63,57,48,0.38)] md:rounded-3xl motion-reduce:transform-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display text-[18px] text-white">{item.name}</p>
                      <p className="mt-1 font-body text-[12px] text-white/70">
                        {item.location} · {item.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/projects/" className={`group ${d2BtnOutline}`}>
                <span>View All Projects</span>
                <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <PageCTA
        title="Inspired by this"
        titleAccent="project?"
        description="Let's discuss how we can create a space that reflects your story with the same care and attention to detail."
        buttonLabel="Start a Conversation"
        buttonHref="/contact/"
      />
    </>
  );
}
