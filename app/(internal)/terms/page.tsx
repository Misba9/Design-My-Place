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
      <div className={`${d2Section} max-w-[1180px]`}>
        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden className="h-px w-8 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Legal
            </p>
          </div>
          <h1 className="font-body text-[clamp(2.75rem,6vw,5rem)] font-light leading-[0.98] tracking-[-0.03em] text-[#3F3930]">
            Terms &{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              Conditions
            </span>
          </h1>
          <p className="mt-7 max-w-xl font-body text-[16px] leading-[1.8] text-[#55503F] sm:text-[18px]">
            The simple foundations for working with {BUSINESS.name} and making
            your project a success.
          </p>
        </header>

        <div className="mt-14 grid gap-10 border-t border-[rgba(63,57,48,0.18)] pt-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20 lg:pt-14">
          <article className="max-w-2xl space-y-10 font-body text-[15px] leading-[1.85] text-[#55503F] sm:text-[16px]">
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                Working together
              </h2>
              <p>
                By using the {BUSINESS.name} website and engaging our studio, you
                agree to communicate in good faith and provide accurate project
                information so we can advise appropriately.
              </p>
            </section>
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                Scope, fees, and timelines
              </h2>
              <p>
                Project scope, fees, and timelines are confirmed in writing before
                work begins. Any changes to the agreed work should be discussed
                and confirmed in writing so expectations stay clear.
              </p>
            </section>
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                Your engagement
              </h2>
              <p>
                For terms related to a specific engagement, please refer to your
                proposal or contact{' '}
                <a href={`mailto:${BUSINESS.email}`} className="text-[#9C6F4E] underline decoration-[#9C6F4E]/35 underline-offset-4 transition-colors hover:text-[#8A6144]">
                  {BUSINESS.email}
                </a>
                .
              </p>
            </section>
          </article>

          <aside className="h-fit border-l border-[rgba(63,57,48,0.18)] pl-6 lg:pl-8">
            <p className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-[#9C6F4E]">
              At a glance
            </p>
            <p className="font-body text-[14px] leading-[1.75] text-[#55503F]">
              Your proposal is the source of truth for the scope, fees, and
              timeline of your individual project.
            </p>
            <PrimaryButton href="/contact" className="mt-7 w-full sm:w-auto">
              Contact Us
            </PrimaryButton>
          </aside>
        </div>
      </div>
    </section>
  );
}
