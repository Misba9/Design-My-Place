type LocationMapProps = {
  embedUrl: string;
  title: string;
};

export function LocationMap({ embedUrl, title }: LocationMapProps) {
  return (
    <section className="py-20 lg:py-28 bg-luxury-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="label-uppercase text-gold-300 mb-6">Find Us</p>
        <h2 className="font-display text-3xl lg:text-4xl text-white mb-8">
          {title}
        </h2>
        <div className="relative aspect-[21/9] border border-white/10 overflow-hidden">
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
