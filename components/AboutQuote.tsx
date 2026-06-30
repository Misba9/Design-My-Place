import { ContentImage } from '@/components/ContentImage';
import { aboutQuote } from '@/lib/about';

export function AboutQuote() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ContentImage
          src={aboutQuote.image}
          alt={aboutQuote.imageAlt}
          fill
          className="object-cover object-center scale-110 sm:scale-105"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex w-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[62vh] items-center justify-center aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] max-h-[85vh]">
        <div className="container-site w-full py-16 sm:py-20 md:py-24 text-center px-4">
          <p className="font-display text-fluid-h2 text-white leading-tight mb-1 sm:mb-2 overflow-visible">
            {aboutQuote.line1}
          </p>
          <p className="font-body text-fluid-h2 text-white font-light leading-tight tracking-wide overflow-visible">
            {aboutQuote.line2}
          </p>
        </div>
      </div>
    </section>
  );
}
