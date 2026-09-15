'use client';

import { useEffect, useState } from 'react';
import { contact } from '@/data/property';
import WhatsAppIcon from './ui/WhatsAppIcon';

/**
 * Fixed conversion bar for phones, revealed once the visitor has scrolled past
 * the hero (where the CTAs are already on screen). Hidden from 768px up, where
 * the sticky header button stays visible instead.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      // `invisible` keeps the hidden bar out of the tab order and away from
      // screen readers, which `translate-y-full` alone would not do.
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-charcoal/95 backdrop-blur-md transition-[transform,visibility] duration-300 md:hidden ${
        visible ? 'visible translate-y-0' : 'invisible translate-y-full'
      }`}
    >
      <div className="on-dark flex items-stretch gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 px-4 py-3 text-[12px] tracking-[0.12em]"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={contact.phoneHref}
          className="btn inline-flex flex-none items-center gap-2 border border-white/35 px-5 py-3 text-[12px] tracking-[0.12em] text-white"
          aria-label={`Call ${contact.phoneDisplay}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.2 2.2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Call
        </a>
      </div>
    </div>
  );
}
