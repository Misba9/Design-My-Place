import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import { InternalPageLayout } from '@/components/layouts/InternalPageLayout';
import { PrimaryButton } from '@/components/PrimaryButton';
import {
  d2BtnOutline,
  d2PageBg,
  d2Section,
} from '@/components/design2/shared';

export const metadata: Metadata = createPageMetadata({
  title: 'Page Not Found',
  description:
    'The page you are looking for does not exist. Explore our interior design projects and services.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <InternalPageLayout>
      <section
        className="flex min-h-[70vh] items-center justify-center text-[#3F3930]"
        style={{ background: d2PageBg }}
      >
        <div className={`${d2Section} max-w-lg text-center`}>
          <div className="mb-5 flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E]" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              404
            </p>
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E]" />
          </div>
          <h1 className="mb-5 font-body text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em]">
            Page not{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              found
            </span>
          </h1>
          <p className="mb-10 font-body text-[15px] leading-[1.85] text-[#55503F]">
            The page you requested may have moved or no longer exists. Explore
            our portfolio or book a consultation to start your interior design
            journey.
          </p>
          <div className="mx-auto flex w-full max-w-[420px] flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <PrimaryButton href="/">Back to Home</PrimaryButton>
            <Link href="/projects" className={`group ${d2BtnOutline}`}>
              <span>View Projects</span>
              <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </InternalPageLayout>
  );
}
