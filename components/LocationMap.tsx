type LocationMapProps = {
  embedUrl: string;
  title: string;
};

export function LocationMap({ embedUrl, title }: LocationMapProps) {
  return (
    <section className="section-y-sm bg-luxury-gray">
      <div className="container-site">
        <p className="label-uppercase text-gold-300 mb-6">Find Us</p>
        <h2 className="font-display text-fluid-h2 text-white mb-6 sm:mb-8 text-balance">
          {title}
        </h2>
        <div className="relative aspect-[4/3] sm:aspect-[21/9] border border-white/10 overflow-hidden">
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
