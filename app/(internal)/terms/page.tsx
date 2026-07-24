import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site';
import { d2PageBg, d2Section } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms & Conditions',
  description: `Terms and conditions for ${BUSINESS.legalName}.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <section className="text-[#3F3930]" style={{ background: d2PageBg }}>
      <div className={`${d2Section} max-w-3xl`}>
        <div className="mb-6 flex items-center gap-4">
          <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
          <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
            Legal
          </p>
        </div>
        <h1 className="mb-8 font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#3F3930]">
          Terms &{' '}
          <span className="font-display italic font-normal text-[#9C6F4E]">
            Conditions
          </span>
        </h1>
        <div className="space-y-5 font-body text-[15px] leading-[1.85] text-[#55503F]">
          <p>
            By using the {BUSINESS.name} website and engaging our studio, you
            agree to communicate in good faith and provide accurate project
            information so we can advise appropriately.
          </p>
          <p>
            Project scope, fees, and timelines are confirmed in writing before
            work begins. For terms related to a specific engagement, please refer
            to your proposal or contact{' '}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-[#9C6F4E] transition-colors hover:text-[#8A6144]"
            >
              {BUSINESS.email}
            </a>
            .
          </p>
        </div>
        <PrimaryButton href="/contact" className="mt-10">
          Contact Us
        </PrimaryButton>
      </div>
    </section>
  );
}
