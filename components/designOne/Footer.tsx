'use client';

import Link from 'next/link';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import { navLinks } from '@/lib/navigation';
import { Reveal, d1 } from './shared';

const socials = [
  { label: 'Instagram', href: BUSINESS.social.instagram },
  { label: 'Facebook', href: BUSINESS.social.facebook },
  { label: 'Vimeo', href: BUSINESS.social.vimeo },
];

export function D1Footer() {
  return (
    <footer style={{ background: d1.charcoal, color: '#FAF8F3' }}>
      <div className="mx-auto max-w-[100rem] px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pt-40">
        {/* Wordmark */}
        <Reveal>
          <p className="font-display font-light leading-none tracking-[0.08em] text-[clamp(2.5rem,8vw,8rem)] text-[#FAF8F3]/95">
            DESIGN MY PLACE
          </p>
        </Reveal>

        <div
          className="mt-20 grid grid-cols-1 gap-14 border-t pt-16 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4"
          style={{ borderColor: 'rgba(250,248,243,0.12)' }}
        >
          <Reveal delay={0.1}>
            <h3 className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-[#DDD4C1]/60">
              Studio
            </h3>
            <address className="mt-6 font-body text-[13px] font-light not-italic leading-[2.1] text-[#F0EAE0]/80">
              {STUDIO_ADDRESS.line1}
              <br />
              {STUDIO_ADDRESS.line2}
              <br />
              {STUDIO_ADDRESS.line3}
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-[#DDD4C1]/60">
              Contact
            </h3>
            <div className="mt-6 space-y-3 font-body text-[13px] font-light leading-[1.8]">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="block text-[#F0EAE0]/80 transition-colors duration-500 hover:text-white"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="block text-[#F0EAE0]/80 transition-colors duration-500 hover:text-white"
              >
                {BUSINESS.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-[#DDD4C1]/60">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[13px] font-light text-[#F0EAE0]/80 transition-colors duration-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <h3 className="font-body text-[10px] font-medium uppercase tracking-[0.35em] text-[#DDD4C1]/60">
              Follow
            </h3>
            <ul className="mt-6 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[13px] font-light text-[#F0EAE0]/80 transition-colors duration-500 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div
          className="mt-24 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-32"
          style={{ borderColor: 'rgba(250,248,243,0.12)' }}
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#DDD4C1]/50">
            © {new Date().getFullYear()} {BUSINESS.legalName}
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-[#DDD4C1]/50">
            {BUSINESS.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
