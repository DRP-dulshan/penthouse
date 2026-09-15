import Image from 'next/image';
import { hero } from '@/data/property';
import WhatsAppButton from './ui/WhatsAppButton';

/**
 * Full-viewport hero.
 *
 * The photograph is the only eagerly-loaded image on the page (it is the LCP),
 * and the copy animates in with CSS rather than the Framer scroll reveal used
 * further down -- above-the-fold content must be visible even if JavaScript is
 * slow, blocked, or the tab is restored in the background.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="on-dark relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        width={hero.imageWidth}
        height={hero.imageHeight}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Legibility wash: heavy under the copy, thinning to a light veil at the top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(17,17,17,0.94)_0%,rgba(17,17,17,0.82)_30%,rgba(17,17,17,0.58)_55%,rgba(17,17,17,0.30)_80%,rgba(17,17,17,0.22)_100%)]"
      />

      <div className="shell pb-24 pt-28 sm:pb-28 sm:pt-32">
        <p className="eyebrow eyebrow-on-dark rise">{hero.label}</p>

        <h1
          className="rise mt-6 max-w-4xl font-serif text-[2.6rem] font-normal leading-[1.05] text-white sm:text-6xl lg:text-[4.6rem]"
          style={{ animationDelay: '80ms' }}
        >
          {hero.title}
        </h1>

        <p
          className="rise mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: '140ms' }}
        >
          {hero.subtitle}
        </p>

        <div
          className="rise mt-9 border-l-2 border-orange pl-5 sm:mt-10 sm:pl-6"
          style={{ animationDelay: '200ms' }}
        >
          <p className="font-serif text-[2rem] leading-none text-white sm:text-[2.75rem]">
            {hero.price}
          </p>
          <p className="mt-2.5 text-[13px] text-white/70 sm:text-sm">{hero.priceNote}</p>
        </div>

        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: '260ms' }}
        >
          <WhatsAppButton>{hero.primaryCta}</WhatsAppButton>
          <a href="#scenario-resale" className="btn-ghost-light">
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="block h-10 w-px animate-scroll-hint bg-white/50" />
      </div>
    </section>
  );
}
