import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PageCTA } from '@/components/PageCTA';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildSchemaGraph, breadcrumbSchema, createPageMetadata } from '@/seo';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = createPageMetadata({
  title: 'Interior Design Insights & Guides',
  description:
    'Expert guides on luxury interior design, budgets, villa design, and choosing the right designer in Bangalore & Delhi NCR.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const schema = buildSchemaGraph(
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  );

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

      <section className="py-24 lg:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-white/10 overflow-hidden card-hover-lift"
              >
                <div className="relative aspect-[16/10] img-hover-zoom">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                  <h2 className="font-display text-xl text-white group-hover:text-gold-300 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-300 mt-4">
                    Read article <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
