'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger sibling reveals by a few hundred ms. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'figure';
};

/**
 * Scroll reveal: fade in and rise 20px, once, when the element enters view.
 * Falls back to a plain fade when the visitor prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      // Framer renders the `initial` styles into the HTML, so without
      // JavaScript this content would stay invisible -- see the noscript rule
      // in app/layout.tsx, which keys off this attribute.
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
