'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#studio', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`header-luxury fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'header-luxury--scrolled' : ''
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between py-5 gap-6 lg:gap-10">
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

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="hidden lg:flex shrink-0"
            >
              <Link href="#contact" className="btn-header-cta">
                Book a Consultation
              </Link>
            </motion.div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 flex flex-col items-center justify-center w-11 h-11 border border-white/10 hover:border-gold-400/40 transition-colors duration-500"
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
            className="fixed inset-0 z-[60] lg:hidden header-luxury header-luxury--scrolled"
          >
            <div className="flex flex-col h-full max-w-[1400px] mx-auto px-6 sm:px-8">
              <div className="flex items-center justify-between py-6 border-b border-white/[0.08]">
                <Link href="/" onClick={closeMenu}>
                  <BrandMark variant="mobile" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-11 h-11 border border-white/10 text-gold-400 hover:border-gold-400/40 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} strokeWidth={1.25} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center py-12 gap-1">
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
                      className="nav-link-mobile block py-5 border-b border-white/[0.06]"
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
                className="py-8 border-t border-white/[0.08]"
              >
                <Link
                  href="#contact"
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
