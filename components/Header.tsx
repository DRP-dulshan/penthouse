'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { brand } from '@/data/property';
import WhatsAppButton from './ui/WhatsAppButton';

/**
 * Sticky header: transparent while it sits over the hero photograph, then
 * solid charcoal with a blur once the visitor scrolls past it.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-charcoal/95 shadow-[0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="flex items-center" aria-label={`${brand.name} — back to top`}>
          <Image
            src={brand.logoLight}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </a>

        <WhatsAppButton className="btn-primary px-4 py-2.5 text-[11px] tracking-[0.12em] sm:px-6 sm:py-3 sm:text-[13px]">
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">WhatsApp Us</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}
