import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Mail } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import {
  D2Reveal,
  d2BandBg,
  d2PageBg,
  d2Section,
  d2SectionWide,
} from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';
import { blogPosts, type BlogPost } from '@/lib/blog';
import { HERO_IMAGE } from '@/lib/images';
import { breadcrumbSchema, buildSchemaGraph, createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Interior Design Insights & Guides',
  description:
    'Expert guides on luxury interior design, budgets, villa design, and choosing the right designer in Bangalore & Delhi NCR.',
  path: '/blog',
});

const postImage = (post: BlogPost) => post.image || HERO_IMAGE;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

type Category = 'Trends' | 'Guides' | 'Cities' | 'Process';

function categorize(post: BlogPost): Category {
  const text = `${post.title} ${post.keywords}`.toLowerCase();
  if (text.includes('trend')) return 'Trends';
  if (text.includes('bangalore') || text.includes('delhi') || text.includes('cities')) {
    return 'Cities';
  }
  if (
    text.includes('budget') ||
    text.includes('cost') ||
    text.includes('checklist') ||
    text.includes('renovation')
  ) {
    return 'Process';
  }
  return 'Guides';
}

const CATEGORY_ORDER: Category[] = ['Trends', 'Guides', 'Cities', 'Process'];

export default function BlogIndexPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  );

  const [featured, ...rest] = blogPosts;
  const categoryCounts = CATEGORY_ORDER.map((name) => ({
    name,
    count: blogPosts.filter((post) => categorize(post) === name).length,
  })).filter((category) => category.count > 0);

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />

      <PageHero
        label="Insights & Guides"
        title="Interior Design"
        titleAccent="Journal"
        description="Thoughtful perspectives on luxury living, design process, and creating homes that endure."
        imageAlt="Design My Place interior design blog"
      />

      {/* Featured article */}
      {featured ? (
        <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
          <div className={d2SectionWide}>
            <D2Reveal className="mb-10 flex items-center gap-4 md:mb-14">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Featured Story
              </p>
            </D2Reveal>

            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.08)] shadow-[0_28px_60px_-20px_rgba(63,57,48,0.32)] md:rounded-3xl">
                <Image
                  src={postImage(featured)}
                  alt={featured.title}
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.14em] text-[#55503F]/70">
                  <span>{formatDate(featured.publishedAt)}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="mb-5 font-body font-light leading-[1.1] tracking-[-0.02em] text-[clamp(1.75rem,3.6vw,2.75rem)] transition-colors duration-300 group-hover:text-[#8A6144]">
                  {featured.title}
                </h2>
                <p className="mb-6 max-w-xl font-body text-[15px] leading-[1.85] text-[#55503F]">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9C6F4E]">
                  Read the full story
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* Categories + article grid */}
      <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
        <div className={d2SectionWide}>
          {categoryCounts.length ? (
            <D2Reveal className="mb-10 flex flex-wrap gap-3 md:mb-14">
              {categoryCounts.map((category) => (
                <span
                  key={category.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(63,57,48,0.16)] px-5 py-2 font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[#55503F]"
                >
                  {category.name}
                  <span className="text-[#9C6F4E]">{category.count}</span>
                </span>
              ))}
            </D2Reveal>
          ) : null}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <D2Reveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.1)] bg-white/40 shadow-[0_1px_0_rgba(63,57,48,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(63,57,48,0.18)] hover:shadow-[0_18px_40px_-20px_rgba(63,57,48,0.28)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={postImage(post)}
                      alt={post.title}
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] text-[#55503F]/60">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                    <h3 className="mb-3 font-body text-[19px] font-light leading-snug tracking-[-0.01em] text-[#3F3930] transition-colors duration-300 group-hover:text-[#9C6F4E]">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 flex-1 font-body text-[14px] leading-[1.75] text-[#55503F]">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9C6F4E]">
                      Read article
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </D2Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden" style={{ background: d2BandBg }}>
        <div className={`${d2Section} text-center`}>
          <D2Reveal className="mx-auto max-w-xl">
            <div className="mb-5 flex items-center justify-center gap-4 sm:mb-6">
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
              <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
                Stay Inspired
              </p>
              <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
            </div>
            <h2 className="mb-4 font-body font-light leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,4vw,3rem)] text-[#EDE9E0]">
              Join the{' '}
              <span className="font-display italic font-normal text-[#C4A07A]">Journal</span>
            </h2>
            <p className="mb-10 font-body text-[15px] leading-[1.85] text-[rgba(237,233,224,0.85)]">
              New guides on luxury interiors, delivered occasionally — no spam, just
              considered perspectives.
            </p>
            <form
              aria-label="Subscribe to the Design My Place journal"
              className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="relative flex-1">
                <Mail
                  size={16}
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full border-b border-white/25 bg-transparent py-3 pl-7 font-body text-[15px] text-white placeholder:text-white/40 focus:border-[#9C6F4E]/70 focus:outline-none"
                />
              </div>
              <PrimaryButton type="submit" className="shrink-0">
                Subscribe
              </PrimaryButton>
            </form>
          </D2Reveal>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
