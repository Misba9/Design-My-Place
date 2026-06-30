import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageCTA } from '@/components/PageCTA';
import { TrustBadges } from '@/components/TrustBadges';
import { createPageMetadata } from '@/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Thank You — Consultation Received',
  description:
    'Thank you for reaching out to Design My Place. We will be in touch shortly to discuss your interior design project.',
  path: '/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center bg-luxury-black px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="text-center max-w-lg w-full">
          <CheckCircle size={48} className="text-gold-300 mx-auto mb-6" />
          <p className="label-uppercase text-gold-300 mb-4">Thank You</p>
          <h1 className="font-display text-fluid-h1 text-white mb-4 sm:mb-6">
            We received your message
          </h1>
          <p className="text-gray-400 font-light mb-8 sm:mb-10 leading-relaxed text-fluid-body">
            Our team will review your enquiry and respond within one business day.
            We look forward to learning about your vision.
          </p>
          <div className="btn-group max-w-sm mx-auto">
            <Link href="/projects" className="btn-outline-gold">
              Explore Projects
            </Link>
            <Link href="/" className="btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <TrustBadges showStats />
      <PageCTA
        title="While you wait,"
        titleAccent="explore our work"
        description="Browse our portfolio of luxury residential and commercial interiors across India."
        buttonLabel="View Projects"
        buttonHref="/projects"
      />
    </>
  );
}
