'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    const shouldEnable = () => hoverQuery.matches && desktopQuery.matches;

    const enableCursor = () => {
      if (!shouldEnable()) return;

      setEnabled(true);
      document.documentElement.classList.add('custom-cursor-active');
    };

    const disableCursor = () => {
      setEnabled(false);
      setIsVisible(false);
      document.documentElement.classList.remove('custom-cursor-active');
    };

    const syncEnabled = () => {
      if (shouldEnable()) {
        enableCursor();
      } else {
        disableCursor();
      }
    };

    syncEnabled();
    hoverQuery.addEventListener('change', syncEnabled);
    desktopQuery.addEventListener('change', syncEnabled);

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest('a, button, [data-cursor-hover]') as
        | HTMLElement
        | null;

      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(Boolean(hoverElement));
      setIsVisible(true);

      if (hoverElement) {
        const rect = hoverElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetRef.current = {
          x: e.clientX + (centerX - e.clientX) * 0.28,
          y: e.clientY + (centerY - e.clientY) * 0.28,
        };
      } else {
        targetRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const animateRing = () => {
      const { x: targetX, y: targetY } = targetRef.current;
      ringRef.current = {
        x: ringRef.current.x + (targetX - ringRef.current.x) * 0.18,
        y: ringRef.current.y + (targetY - ringRef.current.y) * 0.18,
      };
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
      rafId = window.requestAnimationFrame(animateRing);
    };

    rafId = window.requestAnimationFrame(animateRing);
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
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: mousePosition.x - 3.5,
          y: mousePosition.y - 3.5,
          scale: isHovering ? 1.35 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="h-[7px] w-[7px] rounded-full bg-[#b08d57] shadow-[0_0_12px_rgba(176,141,87,0.5)]" />
      </motion.div>

      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: ringPosition.x - 20,
          y: ringPosition.y - 20,
          scale: isHovering ? 1.35 : 1,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="h-10 w-10 rounded-full border border-[#b08d57]/60 bg-[#b08d57]/[0.04] shadow-[0_0_30px_rgba(176,141,87,0.2)]" />
      </motion.div>
    </>
  );
}
