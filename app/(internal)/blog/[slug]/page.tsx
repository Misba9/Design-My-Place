import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import {
  articleSchema,
  buildSchemaGraph,
  breadcrumbSchema,
  createArticleMetadata,
  faqSchema,
} from '@/lib/seo';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';
import { HERO_IMAGE, isLocalImage } from '@/lib/images';
import { d2PageBg, d2Section } from '@/components/design2/shared';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };

  return createArticleMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: isLocalImage(post.image) ? post.image : HERO_IMAGE,
    ogImageAlt: post.title,
    publishedTime: post.publishedAt,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const cover = isLocalImage(post.image) ? post.image : HERO_IMAGE;

  const schema = buildSchemaGraph(
    articleSchema({
      title: post.title,
      slug: post.slug,
      description: post.metaDescription,
      image: cover,
      publishedAt: post.publishedAt,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    faqSchema(post.faqs),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={`${d2Section} max-w-3xl`}>
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
          >
            <ArrowLeft size={14} strokeWidth={1.75} aria-hidden />
            Back to Journal
          </Link>

          <div className="mb-5 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              {post.readTime} ·{' '}
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <h1 className="mb-8 font-body text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#3F3930] text-balance">
            {post.title}
          </h1>

          <div className="mb-10 rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-5 sm:mb-12 sm:p-7 md:rounded-3xl">
            <p className="mb-2 font-body text-[10px] uppercase tracking-[0.2em] text-[#9C6F4E]">
              In brief
            </p>
            <p className="font-body text-[15px] leading-[1.85] text-[#55503F]">
              {post.keyAnswer}
            </p>
          </div>

          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] sm:mb-14 sm:aspect-[21/9] md:rounded-3xl">
            <Image
              src={cover}
              alt={post.title}
              fill
              className="object-cover"
              sizes="800px"
              priority
              quality={90}
            />
          </div>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-5 font-display text-[22px] font-medium text-[#3F3930] sm:mb-6 sm:text-[26px]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mb-4 font-body text-[15.5px] font-normal leading-[1.9] text-[#55503F] last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {post.faqs.length > 0 ? (
            <section className="mt-16 border-t border-[rgba(63,57,48,0.12)] pt-12">
              <h2 className="mb-8 font-body text-[clamp(1.75rem,3vw,2.25rem)] font-light tracking-[-0.02em] text-[#3F3930]">
                Frequently{' '}
                <span className="font-display italic font-normal text-[#9C6F4E]">
                  asked
                </span>
              </h2>
              <div className="space-y-5">
                {post.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/45 p-6"
                  >
                    <h3 className="mb-3 font-display text-[18px] font-medium text-[#3F3930]">
                      {faq.question}
                    </h3>
                    <p className="font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[rgba(63,57,48,0.12)] pt-8">
            <Link
              href="/locations/bangalore"
              className="font-body text-[12px] tracking-[0.04em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
            >
              Interior Designer Bangalore →
            </Link>
            <Link
              href="/locations/delhi"
              className="font-body text-[12px] tracking-[0.04em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
            >
              Interior Designer Delhi →
            </Link>
            <Link
              href="/contact"
              className="font-body text-[12px] tracking-[0.04em] text-[#55503F] transition-colors hover:text-[#9C6F4E]"
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      </article>

      <PageCTA />
    </>
  );
}
