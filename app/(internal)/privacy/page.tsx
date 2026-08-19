import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/site';
import { d2PageBg, d2Section } from '@/components/design2/shared';
import { PrimaryButton } from '@/components/PrimaryButton';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${BUSINESS.legalName}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
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
            Privacy{' '}
            <span className="font-display italic font-normal text-[#9C6F4E]">
              Policy
            </span>
          </h1>
          <p className="mt-7 max-w-xl font-body text-[16px] leading-[1.8] text-[#55503F] sm:text-[18px]">
            A clear overview of how {BUSINESS.legalName} handles the information
            you share with our studio.
          </p>
        </header>

        <div className="mt-14 grid gap-10 border-t border-[rgba(63,57,48,0.18)] pt-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20 lg:pt-14">
          <article className="max-w-2xl space-y-10 font-body text-[15px] leading-[1.85] text-[#55503F] sm:text-[16px]">
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                Information we collect
              </h2>
              <p>
                {BUSINESS.legalName} respects your privacy. Information you share
                through our contact forms, email, or phone is used only to respond
                to your enquiry and deliver our interior design services.
              </p>
            </section>
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                How we use it
              </h2>
              <p>
                We do not sell personal data. We may use trusted tools for
                analytics and communications, always with the aim of improving
                our service and keeping you informed about your enquiry.
              </p>
            </section>
            <section>
              <h2 className="mb-4 font-body text-[24px] font-light leading-tight tracking-[-0.02em] text-[#3F3930]">
                Questions about privacy
              </h2>
              <p>
                For privacy questions, contact{' '}
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
              Your information is used to answer enquiries and support your
              project. We do not sell your personal data.
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
