import { D2Reveal } from '@/components/design2/shared';
import { d2PageBg, d2Section } from '@/components/design2/tokens';

type LocationMapProps = {
  embedUrl: string;
  title: string;
};

export function LocationMap({ embedUrl, title }: LocationMapProps) {
  return (
    <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
      <div className={d2Section}>
        <D2Reveal className="mb-8 max-w-2xl md:mb-10">
          <div className="mb-5 flex items-center gap-4 sm:mb-6">
            <span aria-hidden className="h-px w-8 shrink-0 bg-[#9C6F4E] sm:w-10" />
            <p className="font-display text-[13px] font-medium tracking-[0.04em] text-[#9C6F4E] sm:text-[15px]">
              Find Us
            </p>
          </div>
          <h2 className="font-body font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] text-balance">
            {title}
          </h2>
        </D2Reveal>

        <D2Reveal
          delay={0.1}
          className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[rgba(63,57,48,0.1)] shadow-[0_18px_50px_-24px_rgba(63,57,48,0.2)] sm:aspect-[21/9] md:rounded-3xl"
        >
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </D2Reveal>
      </div>
    </section>
  );
}
