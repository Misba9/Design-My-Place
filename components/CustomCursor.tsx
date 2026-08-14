'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

type SurfaceTheme = 'dark' | 'light';

/**
 * Relative luminance 0–1 from an opaque sRGB color.
 */
function luminance(r: number, g: number, b: number) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/**
 * Resolve whether the surface under the pointer is dark or cream/light,
 * matching the site's dual theme (hero/footer/bands vs deck cream).
 */
function detectSurfaceTheme(clientX: number, clientY: number): SurfaceTheme {
  const stack = document.elementsFromPoint(clientX, clientY);

  for (const node of stack) {
    if (!(node instanceof HTMLElement)) continue;
    if (node.dataset.torchIgnore != null) continue;
    if (node.classList.contains('torch-cursor-root')) continue;

    // Explicit section markers if present
    const marked = node.closest('[data-surface]') as HTMLElement | null;
    if (marked?.dataset.surface === 'dark') return 'dark';
    if (marked?.dataset.surface === 'light') return 'light';

    let el: HTMLElement | null = node;
    while (el && el !== document.documentElement) {
      const style = getComputedStyle(el);
      const bg = style.backgroundColor;
      const match = bg.match(
        /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/,
      );

      if (match) {
        const alpha = match[4] !== undefined ? Number(match[4]) : 1;
        if (alpha >= 0.75) {
          const lum = luminance(Number(match[1]), Number(match[2]), Number(match[3]));
          // Cream deck ~0.94; brown band ~0.28; near-black ~0.07
          return lum < 0.52 ? 'dark' : 'light';
        }
      }

      // Hero / image planes with dark overlays — treat as dark
      if (
        el.tagName === 'SECTION' ||
        el.tagName === 'FOOTER' ||
        el.tagName === 'HEADER'
      ) {
        const cls = el.className.toString();
        if (
          /bg-luxury|bg-\[#111|bg-charcoal|bg-black|from-black|bg-\[#4A4133\]/i.test(
            cls,
          )
        ) {
          return 'dark';
        }
        if (
          /bg-\[#FAF8F5\]|bg-\[#F0EDEB\]|bg-\[#F5F1EB\]|text-\[#3F3930\]/i.test(cls)
        ) {
          return 'light';
        }
      }

      el = el.parentElement;
    }
  }

  // Site body defaults to luxury black
  return 'dark';
}

/**
 * Premium torch / spotlight cursor.
 * Glow + accent adapt to dark vs cream surfaces from the site theme.
 * System cursor is hidden. Disabled on touch / reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<SurfaceTheme>('dark');
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: -9999, y: -9999 });
  const lightRef = useRef({ x: -9999, y: -9999 });
  const visibleRef = useRef(false);
  const themeRef = useRef<SurfaceTheme>('dark');
  const sampleTickRef = useRef(0);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const shouldEnable = () =>
      hoverQuery.matches && desktopQuery.matches && !reduceMotionQuery.matches;

    const enable = () => {
      if (!shouldEnable()) return;
      setEnabled(true);
      document.documentElement.classList.add('torch-cursor-active');
      document.documentElement.classList.add('custom-cursor-active');
    };

    const disable = () => {
      setEnabled(false);
      setIsVisible(false);
      visibleRef.current = false;
      document.documentElement.classList.remove('torch-cursor-active');
      document.documentElement.classList.remove('custom-cursor-active');
      document.documentElement.classList.remove('native-cursor-active');
    };

    const syncEnabled = () => {
      if (shouldEnable()) enable();
      else disable();
    };

    syncEnabled();
    hoverQuery.addEventListener('change', syncEnabled);
    desktopQuery.addEventListener('change', syncEnabled);
    reduceMotionQuery.addEventListener('change', syncEnabled);

    let rafId = 0;
    const LERP = 0.16;

    const isThirdPartyTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      if (target instanceof HTMLIFrameElement) return true;
      return Boolean(
        target.closest(
          'iframe, [class*="eapps-"], [class*="elfsight"], [id*="elfsight"], [id*="eapps"]',
        ),
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldEnable()) return;

      if (isThirdPartyTarget(e.target)) {
        document.documentElement.classList.add('native-cursor-active');
        visibleRef.current = false;
        setIsVisible(false);
        return;
      }

      document.documentElement.classList.remove('native-cursor-active');
      targetRef.current = { x: e.clientX, y: e.clientY };

      if (!visibleRef.current) {
        lightRef.current = { x: e.clientX, y: e.clientY };
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };

    const animate = () => {
      const { x: tx, y: ty } = targetRef.current;
      const light = lightRef.current;

      light.x += (tx - light.x) * LERP;
      light.y += (ty - light.y) * LERP;

      const root = rootRef.current;
      if (root) {
        root.style.setProperty('--torch-x', `${light.x.toFixed(1)}px`);
        root.style.setProperty('--torch-y', `${light.y.toFixed(1)}px`);
      }

      const dotEl = dotRef.current;
      if (dotEl) {
        dotEl.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }

      // Sample surface theme every few frames to stay in sync without thrashing
      sampleTickRef.current += 1;
      if (visibleRef.current && sampleTickRef.current % 4 === 0 && tx > -1000) {
        const next = detectSurfaceTheme(tx, ty);
        if (next !== themeRef.current) {
          themeRef.current = next;
          setTheme(next);
        }
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      hoverQuery.removeEventListener('change', syncEnabled);
      desktopQuery.removeEventListener('change', syncEnabled);
      reduceMotionQuery.removeEventListener('change', syncEnabled);
      document.documentElement.classList.remove('torch-cursor-active');
      document.documentElement.classList.remove('custom-cursor-active');
      document.documentElement.classList.remove('native-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  const isDark = theme === 'dark';

  return (
    <div
      ref={rootRef}
      aria-hidden
      data-torch-ignore
      data-torch-theme={theme}
      className="torch-cursor-root pointer-events-none fixed inset-0 z-[9997] hidden lg:block"
      style={
        {
          '--torch-x': '-9999px',
          '--torch-y': '-9999px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        } as CSSProperties
      }
    >
      {/* Dark surfaces — champagne torch (hero, footer, brown bands) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isDark ? 1 : 0,
          background: `
            radial-gradient(
              circle 280px at var(--torch-x) var(--torch-y),
              rgba(232, 208, 168, 0.42) 0%,
              rgba(212, 184, 140, 0.28) 18%,
              rgba(176, 141, 87, 0.18) 38%,
              rgba(156, 111, 78, 0.08) 58%,
              transparent 78%
            )
          `,
          mixBlendMode: 'soft-light',
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isDark ? 1 : 0,
          background: `
            radial-gradient(
              circle 200px at var(--torch-x) var(--torch-y),
              rgba(255, 250, 240, 0.2) 0%,
              rgba(212, 184, 140, 0.12) 28%,
              rgba(196, 160, 122, 0.06) 52%,
              transparent 74%
            )
          `,
          mixBlendMode: 'screen',
        }}
      />

      {/* Cream / light deck — soft terracotta wash (no harsh bleach) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isDark ? 0 : 1,
          background: `
            radial-gradient(
              circle 260px at var(--torch-x) var(--torch-y),
              rgba(156, 111, 78, 0.22) 0%,
              rgba(156, 111, 78, 0.12) 28%,
              rgba(63, 57, 48, 0.055) 52%,
              transparent 74%
            )
          `,
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isDark ? 0 : 1,
          background: `
            radial-gradient(
              circle 180px at var(--torch-x) var(--torch-y),
              rgba(196, 160, 122, 0.22) 0%,
              rgba(176, 141, 87, 0.12) 32%,
              rgba(156, 111, 78, 0.05) 55%,
              transparent 72%
            )
          `,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Accent dot — bright on dark, deeper gold on cream */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0"
        style={{
          willChange: 'transform',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span
          className="block h-3 w-3 rounded-full transition-[background,box-shadow] duration-500 ease-out"
          style={
            isDark
              ? {
                  background:
                    'radial-gradient(circle at 35% 30%, #FFF6E4 0%, #E0C090 40%, #B08D57 100%)',
                  boxShadow:
                    '0 0 14px 4px rgba(212,184,140,0.75), 0 0 32px 10px rgba(176,141,87,0.4)',
                }
              : {
                  background:
                    'radial-gradient(circle at 35% 30%, #D4B48A 0%, #9C6F4E 50%, #6E4A34 100%)',
                  boxShadow:
                    '0 0 0 1.5px rgba(63,57,48,0.18), 0 0 16px 4px rgba(156,111,78,0.5), 0 0 30px 8px rgba(156,111,78,0.22)',
                }
          }
        />
      </div>
    </div>
  );
}
