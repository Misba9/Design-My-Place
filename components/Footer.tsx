'use client';

import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';
import { BUSINESS, STUDIO_ADDRESS } from '@/lib/site';
import {
  footerExploreLinks,
  footerConnectLinks,
  footerLocationLinks,
} from '@/lib/navigation';

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/10">
      <div className="container-site section-y-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              <BrandMark variant="footer" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 sm:mb-6 font-light max-w-xs">
              Creating interiors that shape how people live, work, and feel.
            </p>
            <div className="flex items-center gap-3">
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

          {/* Explore + Connect */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Connect</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerConnectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Locations</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLocationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base sm:text-lg text-white mb-4 sm:mb-6">Studio</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <MapPin size={18} className="text-gold-300/70 flex-shrink-0 mt-0.5" />
              <a
                href={STUDIO_ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed font-light hover:text-gold-300 transition-colors duration-300"
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
              className="text-sm text-gray-400 hover:text-gold-300 transition-colors duration-300 inline-flex items-center gap-2 min-h-11"
            >
              <Mail size={16} className="text-gold-300/70" />
              hello@designmyplace.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Design My Place LLP. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            Luxury Interior Design · Bengaluru, India
          </p>
          <p className="text-[10px] uppercase tracking-[0.14em] text-gray-600">
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
