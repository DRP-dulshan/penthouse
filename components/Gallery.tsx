'use client';

import Image from 'next/image';
import { useState } from 'react';
import { gallery } from '@/data/property';
import Lightbox from './ui/Lightbox';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/**
 * Mixed-height masonry of every photograph of the residence.
 *
 * CSS columns give the masonry flow without a layout library; each tile keeps
 * its own aspect ratio, so nothing is cropped and nothing shifts on load.
 */
export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section bg-white">
      <div className="shell">
        <SectionHeading
          label="Inside the Residence"
          heading="Two levels, glass on every side"
          intro="Photographed as it stands today. Select any image to view it full screen."
        />

        <div className="mt-12 gap-4 [column-fill:_balance] sm:columns-2 sm:gap-5 lg:columns-3 lg:mt-16">
          {gallery.map((image, i) => (
            <Reveal key={image.src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View ${image.caption} full screen`}
                className="group relative block w-full overflow-hidden bg-sand text-left"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-[1.04]"
                />

                {/* Caption veil -- always legible on mobile, revealed on hover on desktop */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 pt-12 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                >
                  <span className="block text-[11px] uppercase tracking-label text-white">
                    {image.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={gallery}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  );
}
