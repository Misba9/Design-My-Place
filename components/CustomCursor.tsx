'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [data-cursor-hover]');
      const hoverElement = isInteractive as HTMLElement | null;

      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(Boolean(hoverElement));
      if (!isVisible) setIsVisible(true);

      // Magnetic attraction: ring drifts toward interactive element center.
      if (hoverElement) {
        const rect = hoverElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        targetX = e.clientX + (centerX - e.clientX) * 0.28;
        targetY = e.clientY + (centerY - e.clientY) * 0.28;
      } else {
        targetX = e.clientX;
        targetY = e.clientY;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      setRingPosition({ x: ringX, y: ringY });
      rafId = window.requestAnimationFrame(animateRing);
    };

    rafId = window.requestAnimationFrame(animateRing);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

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
