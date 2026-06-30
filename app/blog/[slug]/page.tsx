import type { Metadata } from 'next';
import { ContentImage } from '@/components/ContentImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  articleSchema,
  buildSchemaGraph,
  breadcrumbSchema,
  createArticleMetadata,
  faqSchema,
} from '@/seo';
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog';
import { HERO_IMAGE, isLocalImage } from '@/lib/images';

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

  const schema = buildSchemaGraph(
    articleSchema({
      title: post.title,
      slug: post.slug,
      description: post.metaDescription,
      image: isLocalImage(post.image) ? post.image : HERO_IMAGE,
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

      <article className="section-y bg-luxury-black">
        <div className="container-site max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gold-300 mb-10"
          >
            <ArrowLeft size={16} />
            Back to Journal
          </Link>

          <p className="label-uppercase text-gold-300 mb-4">
            {post.readTime} · {new Date(post.publishedAt).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <h1 className="font-display text-fluid-h1 text-white mb-6 sm:mb-8 leading-tight text-balance">
            {post.title}
          </h1>

          <div className="glass border border-gold-400/20 p-4 sm:p-6 mb-8 sm:mb-10">
            <p className="text-[10px] uppercase tracking-widest text-gold-300 mb-2">
              In brief
            </p>
            <p className="text-gray-300 font-light leading-relaxed">{post.keyAnswer}</p>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[21/9] border border-white/10 overflow-hidden mb-10 sm:mb-12">
            <ContentImage
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="800px"
              priority
            />
          </div>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-fluid-h3 text-white mb-4 sm:mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-gray-400 font-light leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-white/10">
              <h2 className="font-display text-fluid-h3 text-white mb-6 sm:mb-8">Frequently Asked</h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="border border-white/10 p-6">
                    <h3 className="font-display text-lg text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <Link href="/locations/bangalore" className="text-sm text-gray-400 hover:text-gold-300">
              Interior Designer Bangalore →
            </Link>
            <Link href="/locations/delhi" className="text-sm text-gray-400 hover:text-gold-300">
              Interior Designer Delhi →
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-gold-300">
              Book Consultation →
            </Link>
          </div>
        </div>
      </article>

      <PageCTA />
    </>
  );
}
