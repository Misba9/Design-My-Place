import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { D2Reveal } from '@/components/design2/shared';
import { d2PageBg, d2Section } from '@/components/design2/tokens';
import {
  articleSchema,
  buildSchemaGraph,
  breadcrumbSchema,
  createArticleMetadata,
  faqSchema,
} from '@/lib/seo';
import { getAllBlogSlugs, getBlogPostBySlug, getBlogPostImage, blogPosts, type BlogPost } from '@/lib/blog';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article Not Found' };

  const imgInfo = getBlogPostImage(post);

  return createArticleMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}/`,
    keywords: post.keywords,
    ogImage: imgInfo.url,
    ogImageAlt: imgInfo.alt,
    ogImageWidth: imgInfo.width,
    ogImageHeight: imgInfo.height,
    publishedTime: post.publishedAt,
  });
}

function getContextualLinks(post: BlogPost) {
  const text = `${post.slug} ${post.title} ${post.keywords}`.toLowerCase();

  const services = [];
  if (text.includes('villa')) {
    services.push({ label: 'Villa Interior Design', href: '/services/villa-interior-design/' });
    services.push({ label: 'Turnkey Interior Design', href: '/services/turnkey-interior-design/' });
  } else if (text.includes('apartment') || text.includes('penthouse')) {
    services.push({ label: 'Apartment Interior Design', href: '/services/apartment-interior-design/' });
    services.push({ label: 'Luxury Interior Design', href: '/services/luxury-interior-design/' });
  } else if (text.includes('renovation') || text.includes('checklist')) {
    services.push({ label: 'Renovation & Styling', href: '/services/renovation/' });
    services.push({ label: 'Turnkey Interior Design', href: '/services/turnkey-interior-design/' });
  } else {
    services.push({ label: 'Luxury Interior Design', href: '/services/luxury-interior-design/' });
    services.push({ label: 'Premium Interior Design', href: '/services/premium-interior-design/' });
  }

  const locations = [];
  if (text.includes('delhi')) {
    locations.push({ label: 'Interior Designers in Delhi', href: '/locations/delhi/' });
    locations.push({ label: 'Interior Designers in Gurgaon', href: '/locations/gurgaon/' });
  } else if (text.includes('bangalore') || text.includes('bengaluru')) {
    locations.push({ label: 'Interior Designers in Bangalore', href: '/locations/bangalore/' });
  } else {
    locations.push({ label: 'Interior Designers in Bangalore', href: '/locations/bangalore/' });
    locations.push({ label: 'Interior Designers in Delhi NCR', href: '/locations/delhi/' });
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)
    .map((p) => ({ label: p.title, href: `/blog/${p.slug}/` }));

  return { services, locations, relatedPosts };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const imgInfo = getBlogPostImage(post);
  const contextual = getContextualLinks(post);

  const schema = buildSchemaGraph(
    articleSchema({
      title: post.title,
      slug: post.slug,
      description: post.metaDescription,
      image: imgInfo.url,
      publishedAt: post.publishedAt,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog/' },
      { name: post.title, path: `/blog/${post.slug}/` },
    ]),
    faqSchema(post.faqs),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
      />

      <article className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={`${d2Section} max-w-3xl`}>
          <D2Reveal>
            <Link
              href="/blog/"
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
          </D2Reveal>

          <D2Reveal delay={0.08}>
            <div className="mb-10 rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/50 p-5 sm:mb-12 sm:p-7 md:rounded-3xl">
              <p className="mb-2 font-body text-[10px] uppercase tracking-[0.2em] text-[#9C6F4E]">
                In brief
              </p>
              <p className="font-body text-[15px] leading-[1.85] text-[#55503F]">
                {post.keyAnswer}
              </p>
            </div>
          </D2Reveal>

          <D2Reveal delay={0.12}>
            <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_18px_40px_-24px_rgba(63,57,48,0.28)] sm:mb-14 sm:aspect-[21/9] md:rounded-3xl">
              <Image
                src={imgInfo.url}
                alt={imgInfo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 800px, 100vw"
                priority
                quality={90}
              />
            </div>
          </D2Reveal>

          <div className="space-y-12">
            {post.sections.map((section, i) => (
              <D2Reveal key={section.heading} delay={Math.min(i * 0.04, 0.2)}>
                <section>
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
              </D2Reveal>
            ))}
          </div>

          {post.faqs.length > 0 ? (
            <section className="mt-16 border-t border-[rgba(63,57,48,0.12)] pt-12">
              <D2Reveal>
                <h2 className="mb-8 font-body text-[clamp(1.75rem,3vw,2.25rem)] font-light tracking-[-0.02em] text-[#3F3930]">
                  Frequently{' '}
                  <span className="font-display italic font-normal text-[#9C6F4E]">
                    asked
                  </span>
                </h2>
              </D2Reveal>
              <div className="space-y-5">
                {post.faqs.map((faq, i) => (
                  <D2Reveal
                    key={faq.question}
                    delay={i * 0.05}
                    className="rounded-[18px] border border-[rgba(63,57,48,0.1)] bg-white/45 p-6"
                  >
                    <h3 className="mb-3 font-display text-[18px] font-medium text-[#3F3930]">
                      {faq.question}
                    </h3>
                    <p className="font-body text-[14.5px] leading-[1.8] text-[#55503F]">
                      {faq.answer}
                    </p>
                  </D2Reveal>
                ))}
              </div>
            </section>
          ) : null}

          {/* Contextual internal linking section */}
          <div className="mt-14 border-t border-[rgba(63,57,48,0.12)] pt-10 space-y-6">
            <D2Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Related Services */}
                <div className="rounded-2xl border border-[rgba(63,57,48,0.1)] bg-white/40 p-5">
                  <p className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.14em] text-[#9C6F4E] mb-3">
                    <Sparkles size={13} />
                    <span>Relevant Services</span>
                  </p>
                  <ul className="space-y-2 text-sm">
                    {contextual.services.map((srv) => (
                      <li key={srv.href}>
                        <Link
                          href={srv.href}
                          className="font-body text-xs text-[#3F3930] hover:text-[#9C6F4E] transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{srv.label}</span>
                          <ArrowRight size={11} className="text-[#9C6F4E]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Locations */}
                <div className="rounded-2xl border border-[rgba(63,57,48,0.1)] bg-white/40 p-5">
                  <p className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.14em] text-[#9C6F4E] mb-3">
                    <Compass size={13} />
                    <span>Design Studios</span>
                  </p>
                  <ul className="space-y-2 text-sm">
                    {contextual.locations.map((loc) => (
                      <li key={loc.href}>
                        <Link
                          href={loc.href}
                          className="font-body text-xs text-[#3F3930] hover:text-[#9C6F4E] transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{loc.label}</span>
                          <ArrowRight size={11} className="text-[#9C6F4E]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </D2Reveal>

            {/* Related Articles */}
            {contextual.relatedPosts.length > 0 && (
              <D2Reveal delay={0.08}>
                <div className="rounded-2xl border border-[rgba(63,57,48,0.1)] bg-white/40 p-5">
                  <p className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.14em] text-[#9C6F4E] mb-3">
                    <BookOpen size={13} />
                    <span>Related Journal Articles</span>
                  </p>
                  <div className="space-y-2">
                    {contextual.relatedPosts.map((rel) => (
                      <Link
                        key={rel.href}
                        href={rel.href}
                        className="block font-body text-xs text-[#55503F] hover:text-[#9C6F4E] transition-colors"
                      >
                        • {rel.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </D2Reveal>
            )}
          </div>
        </div>
      </article>

      <PageCTA />
    </>
  );
}
