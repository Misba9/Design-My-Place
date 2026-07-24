import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PageCTA } from '@/components/PageCTA';
import { PrimaryButton } from '@/components/PrimaryButton';
import { createPageMetadata } from '@/lib/seo';
import {
  d2BtnOutline,
  d2PageBg,
  d2Section,
} from '@/components/design2/shared';
import Link from 'next/link';

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
      <section
        className="flex min-h-[70vh] items-center justify-center text-[#3F3930]"
        style={{ background: d2PageBg }}
      >
        <div className={`${d2Section} max-w-lg py-16 text-center md:py-20`}>
          <CheckCircle
            size={44}
            strokeWidth={1.25}
            className="mx-auto mb-6 text-[#9C6F4E]"
            aria-hidden
          />
          <div className="mb-5 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E]" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Thank You
            </p>
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E]" />
          </div>
          <h1 className="mb-5 font-body text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#3F3930]">
            We received your{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              message
            </span>
          </h1>
          <p className="mb-10 font-body text-[15px] leading-[1.85] text-[#55503F]">
            Our team will review your enquiry and respond within one business
            day. We look forward to learning about your vision.
          </p>
          <div className="mx-auto flex w-full max-w-[420px] flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link href="/projects" className={`group ${d2BtnOutline}`}>
              <span>Explore Projects</span>
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
            </Link>
            <PrimaryButton href="/">Back to Home</PrimaryButton>
          </div>
        </div>
      </section>

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
