'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import { footerNavLinks, footerServiceLinks } from '@/lib/navigation';
import { d2Ease, d2Viewport } from '@/components/design2/shared';

const ease = d2Ease;

function VimeoIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.25 1.9 7.144 1.815c2.116-.18 3.421 1.244 3.912 4.266.528 3.256.893 5.284 1.098 6.084.61 2.782 1.281 4.168 2.01 4.168.804 0 2.006-1.272 3.598-3.808 1.587-2.54 2.436-4.48 2.55-5.82.203-2.201-1.14-3.34-3.27-3.34-.99-.04-2.005.24-3.04.85.64-2.088 1.85-3.105 3.64-3.105 2.71 0 4.64 1.85 4.335 5.306z" />
    </svg>
  );
}

const socialLinks = [
  { href: BUSINESS.social.facebook, label: 'Facebook', icon: 'facebook' as const },
  { href: BUSINESS.social.instagram, label: 'Instagram', icon: 'instagram' as const },
  { href: BUSINESS.social.vimeo, label: 'Vimeo', icon: 'vimeo' as const },
] as const;

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        group relative inline-block py-0.5
        text-sm font-light text-white/55
        transition-colors duration-300
        hover:text-[#C7AB80]
      "
    >
      {label}
      <span
        aria-hidden
        className="
          absolute bottom-0 left-0 h-px w-full origin-left
          scale-x-0 bg-[#C7AB80]
          transition-transform duration-500 ease-out
          group-hover:scale-x-100
        "
      />
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 text-center sm:text-left">
      <h4 className="mb-5 font-display text-base text-white sm:mb-6 sm:text-lg">
        {title}
      </h4>
      {children}
    </div>
  );
}

export function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-white">
      {/* Gold accent line */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(176,141,87,0.55) 50%, transparent 100%)',
        }}
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={d2Viewport}
        transition={{ duration: 0.75, ease }}
        className="
          mx-auto w-full max-w-[1440px]
          px-6 py-16
          sm:px-10 sm:py-20
          lg:px-20 lg:py-24
        "
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="mb-5 inline-block sm:mb-6">
              <BrandMark variant="footer" />
            </Link>
            <p className="mb-6 max-w-sm text-center text-sm font-light leading-relaxed text-white/55 sm:text-left">
              {BUSINESS.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    group inline-flex h-10 w-10 items-center justify-center
                    rounded-md border border-white/15 text-white/60
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-105
                    hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-white
                    hover:shadow-[0_10px_24px_-10px_rgba(176,141,87,0.55)]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D57]
                    motion-reduce:transform-none
                  "
                >
                  {icon === 'facebook' ? (
                    <Facebook size={16} strokeWidth={1.5} />
                  ) : icon === 'instagram' ? (
                    <Instagram size={16} strokeWidth={1.5} />
                  ) : (
                    <VimeoIcon size={16} />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Navigation */}
          <FooterColumn title="Quick Navigation">
            <ul className="m-0 flex list-none flex-col items-center gap-3 p-0 sm:items-start">
              {footerNavLinks.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3 — Services */}
          <FooterColumn title="Services">
            <ul className="m-0 flex list-none flex-col items-center gap-3 p-0 sm:items-start">
              {footerServiceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 4 — Studio */}
          <FooterColumn title="Studio Information">
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <div className="flex items-start gap-3 text-sm font-light leading-relaxed text-white/55">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#B08D57]/80"
                  aria-hidden
                />
                <address className="not-italic">
                  {STUDIO_ADDRESS.line1}
                  <br />
                  {STUDIO_ADDRESS.line2}
                  <br />
                  {STUDIO_ADDRESS.line3}
                </address>
              </div>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2.5 text-sm font-light text-white/55 transition-colors duration-300 hover:text-[#C7AB80]"
              >
                <Mail size={16} className="shrink-0 text-[#B08D57]/80" aria-hidden />
                {BUSINESS.email}
              </a>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2.5 text-sm font-light text-white/55 transition-colors duration-300 hover:text-[#C7AB80]"
              >
                <Phone size={16} className="shrink-0 text-[#B08D57]/80" aria-hidden />
                {BUSINESS.phoneDisplay}
              </a>

              <p className="inline-flex items-center gap-2.5 text-sm font-light text-white/55">
                <Clock size={16} className="shrink-0 text-[#B08D57]/80" aria-hidden />
                Mon – Sat · By appointment
              </p>

              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group mt-2 inline-flex h-11 w-full items-center justify-center gap-2
                  rounded-sm border border-white/15 px-5
                  font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:border-[#B08D57]/60 hover:bg-[#B08D57] hover:text-white
                  sm:w-auto
                  motion-reduce:transform-none
                "
              >
                Google Maps
                <MapPin size={14} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </FooterColumn>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4
            px-6 py-5 text-center
            sm:px-10 sm:py-6
            md:flex-row md:justify-between md:gap-6 md:text-left
            lg:px-20
          "
        >
          <p className="text-xs text-white/40">
            © {year} Design My Place LLP. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Luxury Interior Design • Bengaluru, India
          </p>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.14em] text-white/40 sm:gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-[#C7AB80]"
            >
              Privacy Policy
            </Link>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#C7AB80]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
