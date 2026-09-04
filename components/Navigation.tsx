'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';
import { navLinks, allServices } from '@/lib/navigation';
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
  { href: BUSINESS.social.linkedin, label: 'LinkedIn', icon: 'linkedin' as const },
  { href: BUSINESS.social.vimeo, label: 'Vimeo', icon: 'vimeo' as const },
];

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]['icon'] }) {
  if (icon === 'facebook') return <Facebook size={14} strokeWidth={1.5} />;
  if (icon === 'instagram') return <Instagram size={14} strokeWidth={1.5} />;
  if (icon === 'linkedin') return <Linkedin size={14} strokeWidth={1.5} />;
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

export function Navigation({
  variant = 'solid',
}: {
  /** solid = always black bar (default on all pages) */
  variant?: 'overlay' | 'solid';
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  void variant;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle click outside services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0a] border-b border-white/10 ${
          isScrolled
            ? 'shadow-xl shadow-black/80 py-2.5 sm:py-3'
            : 'py-3.5 sm:py-4 lg:py-5'
        }`}
      >
        <nav className="container-site" aria-label="Main Navigation">
          <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8">
            {/* Brand */}
            <div className="shrink-0">
              <Link
                href="/"
                className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60"
                aria-label="Design My Place — Home"
                onClick={closeMenu}
              >
                <BrandMark variant="header" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-11">
              {navLinks.map((link) => {
                if ('hasDropdown' in link && link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setIsServicesOpen(false);
                        }
                      }}
                    >
                      <button
                        type="button"
                        className={`nav-link-luxury inline-flex items-center gap-1.5 py-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm ${
                          isServicesOpen ? 'text-gold-300' : ''
                        }`}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="menu"
                        aria-controls="services-dropdown"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 text-gold-400/75 ${
                            isServicesOpen ? 'rotate-180 text-gold-300' : ''
                          }`}
                        />
                      </button>

                      {/* Compact Luxury Dropdown */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            id="services-dropdown"
                            role="menu"
                            aria-label="Services Submenu"
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.2, ease }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] max-w-[90vw] pointer-events-auto z-50"
                          >
                            {/* Invisible bridge to prevent cursor gap drop */}
                            <div className="absolute top-0 left-0 right-0 h-3" aria-hidden="true" />

                            <div className="relative rounded-2xl border border-[#9C6F4E]/35 bg-[#161412] p-4 sm:p-5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.95)]">
                              {/* Header */}
                              <div className="mb-3 flex items-center justify-between px-1">
                                <p className="font-display text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A07A]">
                                  Our Services
                                </p>
                                <span className="font-body text-[10px] font-medium text-[#C4A07A]/70 uppercase tracking-wider">
                                  Bespoke · ₹25L+
                                </span>
                              </div>

                              {/* 4 Service Cards */}
                              <div className="space-y-1.5" role="none">
                                {allServices.flatMap((cat) => cat.items).map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    role="menuitem"
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#201D1A] px-3.5 py-2.5 transition-all duration-200 hover:border-[#9C6F4E]/45 hover:bg-[#2A2520] hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400"
                                  >
                                    <div className="min-w-0 flex-1 pr-3">
                                      <p className="font-display text-[13.5px] sm:text-[14px] font-medium leading-snug text-white group-hover:text-gold-300 transition-colors">
                                        {service.label}
                                      </p>
                                      <p className="mt-0.5 font-body text-[11px] text-white/60 group-hover:text-white/80 transition-colors line-clamp-1">
                                        {service.description}
                                      </p>
                                    </div>
                                    <ArrowRight
                                      size={13}
                                      className="shrink-0 text-[#C4A07A]/40 transition-all duration-200 group-hover:text-gold-300 group-hover:translate-x-0.5"
                                      aria-hidden="true"
                                    />
                                  </Link>
                                ))}
                              </div>

                              {/* Footer */}
                              <div className="mt-3.5 pt-2.5 border-t border-white/[0.08] flex items-center justify-between px-1">
                                <Link
                                  href="/services/"
                                  role="menuitem"
                                  onClick={() => setIsServicesOpen(false)}
                                  className="inline-flex items-center gap-1.5 font-display text-[11px] sm:text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded-sm"
                                >
                                  <span>View All Services & Process</span>
                                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                                </Link>
                                <span className="font-body text-[10px] text-white/40">
                                  Bangalore & NCR
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={link.href} href={link.href} className="nav-link-luxury">
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + social */}
            <div className="hidden lg:flex shrink-0 items-center gap-5">
              <Link href="/contact/" className="btn-header-cta">
                Get in Touch
              </Link>
              <SocialLinks />
            </div>

            {/* Mobile / Tablet Header Controls */}
            <div className="lg:hidden flex items-center gap-2.5 sm:gap-3">
              {/* Visible Get in Touch button on mobile/tablet */}
              <Link
                href="/contact/"
                className="btn-header-cta text-[10px] sm:text-xs py-2 px-3 sm:px-4 shrink-0"
                aria-label="Get in Touch"
              >
                Get in Touch
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 touch-target flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 hover:border-gold-400/40 transition-colors duration-300"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={20} strokeWidth={1.5} className="text-gold-400" />
                ) : (
                  <Menu size={20} strokeWidth={1.5} className="text-gold-400" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#0e0e0e]/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="container-site flex flex-col h-full overflow-hidden">
              <div className="flex items-center justify-between py-4 border-b border-white/[0.08]">
                <Link href="/" onClick={closeMenu}>
                  <BrandMark variant="mobile" />
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="touch-target flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-gold-400 hover:border-gold-400/40 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 space-y-1">
                {navLinks.map((link) => {
                  if ('hasDropdown' in link && link.hasDropdown) {
                    return (
                      <div key={link.href} className="border-b border-white/[0.06] py-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className="nav-link-mobile block py-2"
                          >
                            {link.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                            className="p-2 text-gold-400 touch-target flex items-center justify-center"
                            aria-expanded={mobileServicesExpanded}
                            aria-label="Toggle Services List"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                mobileServicesExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {mobileServicesExpanded && (
                          <div className="mx-1 mb-2 mt-1.5 rounded-xl border border-[#9C6F4E]/30 bg-[#1a1816] p-2.5 space-y-1.5 shadow-lg">
                            {allServices.flatMap((cat) => cat.items).map((srv) => (
                              <Link
                                key={srv.href}
                                href={srv.href}
                                onClick={closeMenu}
                                className="block rounded-lg px-3 py-2.5 font-display text-xs text-white/90 hover:bg-white/10 hover:text-gold-300 transition-colors"
                              >
                                <p className="font-medium text-white">{srv.label}</p>
                                <p className="font-body text-[10px] text-white/60 line-clamp-1">{srv.description}</p>
                              </Link>
                            ))}
                            <Link
                              href="/services/"
                              onClick={closeMenu}
                              className="mt-1.5 block border-t border-white/10 pt-2 px-3 font-display text-[11px] text-gold-400 hover:text-gold-300"
                            >
                              View All Services & Process →
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="nav-link-mobile block py-3.5 border-b border-white/[0.06]"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="py-6 border-t border-white/[0.08] space-y-5">
                <SocialLinks className="justify-center" />
                <Link
                  href="/contact/"
                  onClick={closeMenu}
                  className="btn-header-cta w-full justify-center text-center py-3.5 text-xs uppercase tracking-[0.14em]"
                >
                  Get in Touch · Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
