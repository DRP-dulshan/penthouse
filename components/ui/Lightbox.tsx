'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import type { GalleryImage } from '@/data/property';

type LightboxProps = {
  images: GalleryImage[];
  /** Index of the open image, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const SWIPE_THRESHOLD = 45;

/**
 * Full-screen image viewer.
 *
 * Keyboard: Escape closes, arrow keys step through, Tab is trapped inside the
 * dialog and focus returns to the thumbnail that opened it. Touch: swipe
 * horizontally to step.
 */
export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);
  const touchStartX = useRef<number | null>(null);

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  // Remember what had focus, move focus into the dialog, restore it on close.
  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    return () => {
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [isOpen]);

  // Lock background scrolling while open.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== 'Tab') return;

      // Trap Tab within the dialog.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, step]);

  const current = index === null ? null : images[index];

  return (
    <AnimatePresence>
      {isOpen && current ? (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${(index ?? 0) + 1} of ${images.length}: ${current.caption}`}
          className="on-dark fixed inset-0 z-[100] flex flex-col bg-charcoal/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          {/* Click-away layer */}
          <button
            type="button"
            aria-label="Close gallery"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={onClose}
          />

          <div className="relative flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <p className="text-[11px] uppercase tracking-label text-white/60">
              <span className="text-orange">{String((index ?? 0) + 1).padStart(2, '0')}</span>
              <span className="px-1.5">/</span>
              {String(images.length).padStart(2, '0')}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="-mr-2 flex items-center gap-2 p-2 text-[11px] uppercase tracking-label text-white/80 transition-colors hover:text-white"
            >
              Close
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-3 pb-2 sm:px-16">
            <motion.div
              key={current.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.22 }}
              className="pointer-events-none max-h-full"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                className="max-h-[70svh] w-auto max-w-full object-contain sm:max-h-[76svh]"
              />
            </motion.div>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 -translate-y-1/2 border border-white/25 p-2.5 text-white/80 transition-colors hover:border-white hover:text-white sm:left-4 sm:p-3.5"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-1 top-1/2 -translate-y-1/2 border border-white/25 p-2.5 text-white/80 transition-colors hover:border-white hover:text-white sm:right-4 sm:p-3.5"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="relative px-5 pb-7 pt-2 text-center sm:px-8 sm:pb-9">
            <p className="font-serif text-lg text-bone sm:text-xl">{current.caption}</p>
            <p className="mt-1.5 text-[11px] uppercase tracking-label text-white/45">
              Use arrow keys or swipe
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
