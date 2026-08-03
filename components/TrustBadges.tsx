'use client';

import { Shield, Award, Star, MapPin } from 'lucide-react';
import { trustBadges, googleReviewsUrl } from '@/lib/testimonials';
import { D2Reveal } from '@/components/design2/shared';
import { d2PageBg, d2Section } from '@/components/design2/tokens';

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
    <section className="relative overflow-hidden text-[#3F3930]" style={{ background: d2PageBg }}>
      <div className={`${d2Section} !py-[60px] md:!py-[80px]`}>
        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <D2Reveal key={label} delay={i * 0.05} className="text-center sm:text-left">
              <Icon size={22} className="mx-auto mb-3 text-[#9C6F4E] sm:mx-0" />
              <p className="font-display text-[17px] font-medium text-[#3F3930] sm:text-[18px]">
                {label}
              </p>
              <p className="mt-1 font-body text-[13px] text-[#55503F]/75">{sub}</p>
            </D2Reveal>
          ))}
        </div>

        {showStats ? (
          <D2Reveal
            delay={0.15}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-[rgba(63,57,48,0.12)] pt-8 sm:mt-12 sm:gap-8 lg:gap-16"
          >
            {trustBadges.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl text-[#9C6F4E] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-[0.16em] text-[#55503F]/65">
                  {stat.label}
                </p>
              </div>
            ))}
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border border-[rgba(63,57,48,0.16)] px-5 py-2.5 font-body text-[13px] text-[#55503F] transition-colors hover:border-[#9C6F4E]/45 hover:text-[#9C6F4E]"
            >
              Google Reviews →
            </a>
          </D2Reveal>
        ) : null}
      </div>
    </section>
  );
}
