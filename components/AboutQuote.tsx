import { ContentImage } from '@/components/ContentImage';
import { aboutQuote } from '@/lib/about';

export function AboutQuote() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[62vh] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <ContentImage
          src={aboutQuote.image}
          alt={aboutQuote.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>
      <div className="relative z-10 container-site py-16 sm:py-20 md:py-24 text-center px-4">
        <p className="font-display text-fluid-h2 text-white leading-tight mb-1 sm:mb-2 overflow-visible">
          {aboutQuote.line1}
        </p>
        <p className="font-body text-fluid-h2 text-white font-light leading-tight tracking-wide overflow-visible">
          {aboutQuote.line2}
        </p>
      </div>
    </section>
  );
}
