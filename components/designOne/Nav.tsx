'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/navigation';
import { LOGO_IMAGE } from '@/lib/images';
import { d1, d1Ease } from './shared';

/** Fixed navbar heights — the hero offsets itself by the same values. */
export const D1_NAV_HEIGHT = 'h-[72px] lg:h-[84px]';
export const D1_NAV_OFFSET = 'pt-[72px] lg:pt-[84px]';

const NAV_BLACK = '#0a0a0a';

export function D1Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: d1Ease }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: NAV_BLACK,
          borderBottom: '1px solid rgba(250,248,243,0.1)',
        }}
      >
        <nav
          className={`mx-auto flex max-w-[100rem] items-center justify-between px-6 sm:px-10 lg:px-16 ${D1_NAV_HEIGHT}`}
          style={{ color: '#FAF8F3' }}
        >
          {/* Brand — logo + wordmark */}
          <Link
            href="/design-1"
            className="group flex items-center gap-3 sm:gap-4"
            aria-label="Design My Place — Design One home"
          >
            <Image
              src={LOGO_IMAGE}
              alt="Design My Place logo"
              width={371}
              height={400}
              priority
              className="h-10 w-auto object-contain transition-opacity duration-500 group-hover:opacity-85 lg:h-12"
            />
            <span className="flex flex-col">
              <span className="font-display text-[13px] tracking-[0.32em] sm:text-sm lg:tracking-[0.42em]">
                DESIGN&nbsp;MY&nbsp;PLACE
              </span>
              <span
                className="mt-1 hidden font-body text-[8px] font-light uppercase tracking-[0.28em] xs:block"
                style={{ color: 'rgba(176,141,87,0.85)' }}
              >
                Interiors That Define You
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-body text-[11px] font-medium uppercase tracking-[0.3em] opacity-80 transition-opacity duration-500 hover:opacity-100"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 ease-out group-hover:w-full"
                  style={{ background: d1.gold }}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="border px-6 py-2.5 font-body text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-500 hover:border-[#B08D57] hover:text-[#B08D57]"
              style={{ borderColor: 'rgba(250,248,243,0.4)' }}
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className="block h-px w-7 transition-transform duration-500"
              style={{
                background: 'currentColor',
                transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-px w-7 transition-transform duration-500"
              style={{
                background: 'currentColor',
                transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu — below the black navbar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: d1Ease }}
            className={`fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden ${D1_NAV_OFFSET}`}
            style={{ background: NAV_BLACK }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: d1Ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b py-5 font-display text-4xl font-light"
                    style={{
                      color: '#FAF8F3',
                      borderColor: 'rgba(250,248,243,0.12)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: d1Ease }}
              className="mt-12"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-body text-[11px] font-medium uppercase tracking-[0.35em]"
                style={{ color: d1.gold }}
              >
                Start Your Project →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
