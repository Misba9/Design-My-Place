'use client';

import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import {
  footerExploreLinks,
  footerLocationLinks,
} from '@/lib/navigation';

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-5">
        {title}
      </h4>
      {children}
    </div>
  );
}

function FooterLinkList({
  links,
}: {
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <ul className="space-y-2.5 sm:space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300 break-words"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/10 pb-20 sm:pb-24 lg:pb-28">
      <div className="container-site section-y-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 xl:gap-10 items-start">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              <BrandMark variant="footer" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 font-light max-w-sm">
              Creating interiors that shape how people live, work, and feel.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { href: 'https://instagram.com/design_my_place', icon: Instagram, label: 'Instagram' },
                { href: 'mailto:hello@designmyplace.in', icon: Mail, label: 'Email' },
                { href: BUSINESS.social.whatsapp, icon: Phone, label: 'WhatsApp' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass touch-target flex items-center justify-center text-gray-500 hover:text-gold-300 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterColumn title="Explore">
            <FooterLinkList links={footerExploreLinks} />
          </FooterColumn>

          {/* Locations */}
          <FooterColumn title="Locations">
            <FooterLinkList links={footerLocationLinks} />
          </FooterColumn>

          {/* Studio */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterColumn title="Studio">
              <div className="flex items-start gap-3 text-gray-400 mb-4">
                <MapPin size={18} className="text-gold-300/70 flex-shrink-0 mt-0.5" />
                <a
                  href={STUDIO_ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed font-light hover:text-gold-300 transition-colors duration-300 break-words"
                >
                  Design My Place LLP
                  <br />
                  {STUDIO_ADDRESS.line1}
                  <br />
                  {STUDIO_ADDRESS.line2}
                  <br />
                  {STUDIO_ADDRESS.line3}
                </a>
              </div>
              <a
                href="mailto:hello@designmyplace.in"
                className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300 inline-flex items-center gap-2 min-h-11 break-all"
              >
                <Mail size={16} className="text-gold-300/70 shrink-0" />
                hello@designmyplace.in
              </a>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 sm:py-6 flex flex-col gap-3 sm:gap-4 md:flex-row md:flex-wrap md:justify-between md:items-center text-center md:text-left">
          <p className="text-gray-600 text-xs order-2 md:order-1">
            © {new Date().getFullYear()} Design My Place LLP. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-600 order-1 md:order-2">
            Luxury Interior Design · Bengaluru, India
          </p>
          <p className="text-[10px] uppercase tracking-[0.14em] text-gray-600 order-3">
            Designed by{' '}
            <a
              href="https://www.houseofscalers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-300 transition-colors duration-300"
            >
              House of Scalers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
