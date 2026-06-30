import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Explore our interior design projects and services.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-luxury-black px-4 sm:px-6 pt-24">
      <div className="text-center max-w-lg w-full">
        <p className="label-uppercase text-gold-300 mb-4">404</p>
        <h1 className="font-display text-fluid-h1 text-white mb-4 sm:mb-6">
          Page not found
        </h1>
        <p className="text-gray-400 font-light mb-8 sm:mb-10 leading-relaxed text-fluid-body">
          The page you requested may have moved or no longer exists. Explore our
          portfolio or book a consultation to start your interior design journey.
        </p>
        <div className="btn-group max-w-sm mx-auto">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/projects" className="btn-outline-gold">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
