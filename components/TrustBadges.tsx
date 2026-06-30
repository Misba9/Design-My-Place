import { Shield, Award, Star, MapPin } from 'lucide-react';
import { trustBadges, googleReviewsUrl } from '@/lib/testimonials';

const badges = [
  { icon: Shield, label: 'Bespoke Design', sub: 'No templates' },
  { icon: Award, label: 'Turnkey Delivery', sub: 'End-to-end' },
  { icon: Star, label: 'Premium Quality', sub: '₹25L+ projects' },
  { icon: MapPin, label: 'Pan-India', sub: '12+ cities' },
];

type TrustBadgesProps = {
  showStats?: boolean;
};

export function TrustBadges({ showStats = false }: TrustBadgesProps) {
  return (
    <section className="section-y-sm bg-luxury-black border-y border-white/5">
      <div className="container-site">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="text-center sm:text-left">
              <Icon size={22} className="text-gold-300/70 mx-auto sm:mx-0 mb-3" />
              <p className="font-display text-base sm:text-lg text-white">{label}</p>
              <p className="text-xs text-gray-500 mt-1">{sub}</p>
            </div>
          ))}
        </div>

        {showStats && (
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-16 pt-6 sm:pt-8 border-t border-white/5">
            {trustBadges.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-gold-400">{stat.value}</p>
                <p className="label-uppercase text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gold-300 border border-white/10 px-5 py-2.5 min-h-11 inline-flex items-center transition-colors"
            >
              Google Reviews →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
