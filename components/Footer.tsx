'use client';

import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
  explore: [
    { label: 'Projects', href: '#projects' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
  ],
  connect: [
    { label: 'Consultation', href: '#contact' },
    { label: 'Instagram', href: 'https://instagram.com/design_my_place', external: true },
    { label: 'WhatsApp', href: 'https://wa.me/919876543210', external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo size="md" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
              Creating interiors that shape how people live, work, and feel.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://instagram.com/design_my_place', icon: Instagram, label: 'Instagram' },
                { href: 'mailto:hello@designmyplace.in', icon: Mail, label: 'Email' },
                { href: 'https://wa.me/919876543210', icon: Phone, label: 'WhatsApp' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gold-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-500 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-6">Studio</h4>
            <div className="flex items-start gap-3 text-gray-500 mb-4">
              <MapPin size={18} className="text-gold-400/60 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed font-light">
                Design My Place LLP
                <br />
                Mumbai, Maharashtra
                <br />
                India
              </p>
            </div>
            <a
              href="mailto:hello@designmyplace.in"
              className="text-sm text-gray-500 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
            >
              <Mail size={16} className="text-gold-400/60" />
              hello@designmyplace.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Design My Place LLP. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            Luxury Interior Design · Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
