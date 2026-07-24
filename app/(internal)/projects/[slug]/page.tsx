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
import { processSteps } from '@/lib/process';
import { testimonials } from '@/lib/testimonials';
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  faqSchema,
  imageObjectSchema,
  projectSchema,
} from '@/seo';
import {
  d2BandBg,
  d2BtnOutline,
  d2PageBg,
  d2Section,
  d2SectionWide,
} from '@/components/design2/shared';

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
  const gallery = project.gallery.filter(isLocalImage);
  const beforeSrc = gallery[0] ?? project.image;
  const afterSrc = gallery[Math.min(2, gallery.length - 1)] ?? project.image;
  const quote = testimonials[0];

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
          { name: 'Projects', path: '/projects' },
          { name: project.name, path: `/projects/${project.slug}` },
        ]}
      />

      <PageHero
        label={`${project.type} · ${project.location}`}
        title={project.name}
        description={project.description}
        image={project.image}
        imageAlt={`${project.name} — ${project.type} in ${project.location}`}
      />

      {/* Project information */}
      <section className="border-b border-[rgba(63,57,48,0.08)] bg-[#FAF8F5] text-[#3F3930]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-10 md:px-12 md:py-14 lg:px-20">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
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
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Overview
            </p>
          </div>
          <h2 className="max-w-3xl font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Project{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              overview
            </span>
          </h2>
          <p className="mt-8 max-w-3xl font-body text-[15.5px] leading-[1.9] text-[#55503F]">
            {detail.overview}
          </p>
          {project.highlights.length > 0 ? (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/40 px-6 py-5 font-body text-[14.5px] leading-[1.7] text-[#55503F]"
                >
                  {h}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* Challenge */}
      <section className="text-[#EDE9E0]" style={{ background: d2BandBg }}>
        <div className={d2Section}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span aria-hidden className="h-px w-8 bg-[#C4A07A] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
                  Challenge
                </p>
              </div>
              <h2 className="font-body text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#EDE9E0]">
                What we needed to{' '}
                <span className="font-display italic font-normal text-[#C4A07A]">
                  solve
                </span>
              </h2>
              <ul className="mt-8 space-y-4">
                {detail.challenges.map((c) => (
                  <li
                    key={c}
                    className="border-l border-[#C4A07A]/40 pl-5 font-body text-[15px] leading-[1.8] text-[rgba(237,233,224,0.9)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span aria-hidden className="h-px w-8 bg-[#C4A07A] sm:w-10" />
                <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
                  Response
                </p>
              </div>
              <h2 className="font-body text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#EDE9E0]">
                How we{' '}
                <span className="font-display italic font-normal text-[#C4A07A]">
                  responded
                </span>
              </h2>
              <ul className="mt-8 space-y-4">
                {detail.solutions.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-body text-[15px] leading-[1.8] text-[rgba(237,233,224,0.9)]"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4A07A]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design process */}
      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Design Process
            </p>
          </div>
          <h2 className="max-w-2xl font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            From brief to{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              belonging
            </span>
          </h2>
          <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.85] text-[#55503F]">
            {detail.designPhilosophy}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detail.clientRequirements.map((req, i) => (
              <div
                key={req}
                className="border-t border-[rgba(63,57,48,0.14)] pt-6"
              >
                <p className="mb-3 font-body text-[10px] uppercase tracking-[0.22em] text-[#9C6F4E]">
                  0{i + 1}
                </p>
                <p className="font-body text-[15px] leading-[1.75] text-[#55503F]">
                  {req}
                </p>
              </div>
            ))}
          </div>

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.slice(0, 4).map((step, i) => (
              <li
                key={step.title}
                className="rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-6 md:p-7"
              >
                <p className="mb-4 font-body text-[10px] uppercase tracking-[0.22em] text-[#9C6F4E]">
                  Step 0{i + 1}
                </p>
                <h3 className="font-display text-[18px] font-medium text-[#3F3930]">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-[13.5px] leading-[1.75] text-[#55503F]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#FAF8F5] text-[#3F3930]">
        <div className={d2SectionWide}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Gallery
            </p>
          </div>
          <h2 className="mb-12 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Spaces,{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              closely seen
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {gallery.map((src, index) => (
              <div
                key={`${project.slug}-gallery-${index}`}
                className={`relative overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] md:rounded-3xl ${
                  index === 0 ? 'aspect-[21/10] md:col-span-2' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.name} — luxury interior ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? '100vw' : '50vw'}
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2Section}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Materials
            </p>
          </div>
          <h2 className="max-w-2xl font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            A tactile{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              palette
            </span>
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {detail.materials.map((material) => (
              <li
                key={material}
                className="border-l border-[#9C6F4E]/45 pl-5 font-body text-[15.5px] leading-[1.8] text-[#55503F]"
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-[#FAF8F5] text-[#3F3930]">
        <div className={d2SectionWide}>
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Before & After
            </p>
          </div>
          <h2 className="mb-4 max-w-2xl font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Intention to{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              atmosphere
            </span>
          </h2>
          <p className="mb-12 max-w-xl font-body text-[15px] leading-[1.85] text-[#55503F]">
            From early spatial direction to the finished rooms — a quiet
            transformation shaped by material, light, and daily ritual.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { src: beforeSrc, label: 'Concept Direction' },
              { src: afterSrc, label: 'Realised Interior' },
            ].map((item) => (
              <figure key={item.label} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] md:rounded-3xl">
                  <Image
                    src={item.src}
                    alt={`${project.name} — ${item.label}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={90}
                  />
                </div>
                <figcaption className="mt-4 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9C6F4E]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="text-[#EDE9E0]" style={{ background: d2BandBg }}>
        <div className={`${d2Section} max-w-4xl text-center`}>
          <p className="mb-8 font-display text-[13px] font-medium tracking-[0.04em] text-[#C4A07A] sm:text-[15px]">
            Client Voice
          </p>
          <blockquote className="font-display text-[clamp(1.5rem,3.5vw,2.35rem)] font-normal italic leading-[1.35] text-[#EDE9E0]">
            “{quote.quote}”
          </blockquote>
          <p className="mt-8 font-body text-[12px] uppercase tracking-[0.2em] text-[rgba(237,233,224,0.75)]">
            {quote.name} — {quote.project}, {quote.location}
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
          <div className={d2SectionWide}>
            <div className="mb-6 flex items-center gap-4">
              <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Continue Exploring
              </p>
            </div>
            <h2 className="mb-12 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
              Related{' '}
              <span className="font-display italic font-normal text-[#9C6F4E]">
                projects
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
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
            <div className="mt-12">
              <Link href="/projects" className={`group ${d2BtnOutline}`}>
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
        buttonHref="/contact"
      />
    </>
  );
}
