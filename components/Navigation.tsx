'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';
import { navLinks } from '@/lib/navigation';
import { BUSINESS } from '@/lib/site';

const ease = [0.25, 0.1, 0.25, 1] as const;

function VimeoIcon({ size = 14 }: { size?: number }) {
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
];

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]['icon'] }) {
  if (icon === 'facebook') return <Facebook size={14} strokeWidth={1.5} />;
  if (icon === 'instagram') return <Instagram size={14} strokeWidth={1.5} />;
  return <VimeoIcon size={14} />;
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link"
          aria-label={label}
        >
          <SocialIcon icon={icon} />
        </a>
      ))}
    </div>
  );
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="header-luxury fixed top-0 left-0 right-0 z-50"
      >
        <nav className="container-site">
          <div className="flex items-center justify-between py-3.5 sm:py-4 lg:py-5 gap-3 sm:gap-6 lg:gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="shrink-0"
            >
              <Link
                href="/"
                className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
                aria-label="Design My Place — Home"
              >
                <BrandMark variant="header" />
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="hidden lg:flex items-center justify-center flex-1 gap-10 xl:gap-14"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.06, ease }}
                >
                  <Link href={link.href} className="nav-link-luxury">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop CTA + social */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="hidden lg:flex shrink-0 items-center gap-5"
            >
              <Link href="/contact" className="btn-header-cta">
                Book a Consultation
              </Link>
              <SocialLinks />
            </motion.div>

            {/* Mobile: social + menu toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <SocialLinks className="hidden xs:flex" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 touch-target flex flex-col items-center justify-center border border-white/10 hover:border-gold-400/40 transition-colors duration-500"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={22} strokeWidth={1.25} className="text-gold-400" />
                ) : (
                  <Menu size={22} strokeWidth={1.25} className="text-gold-400" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-0 z-[60] lg:hidden header-luxury"
          >
            <div className="container-site flex flex-col h-full">
              <div className="flex items-center justify-between py-4 sm:py-6 border-b border-white/[0.08]">
                <Link href="/" onClick={closeMenu}>
                  <BrandMark variant="mobile" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="touch-target flex items-center justify-center border border-white/10 text-gold-400 hover:border-gold-400/40 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={1.25} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center py-8 sm:py-12 gap-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="nav-link-mobile block py-4 sm:py-5 border-b border-white/[0.06]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease }}
                className="py-8 border-t border-white/[0.08] space-y-6"
              >
                <SocialLinks className="justify-center" />
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn-header-cta w-full justify-center"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
