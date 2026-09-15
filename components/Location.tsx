import Image from 'next/image';
import { location } from '@/data/property';
import Reveal from './ui/Reveal';
import ScrollableMap from './ui/ScrollableMap';
import SectionHeading from './ui/SectionHeading';

/**
 * Location: the branded DRP map from the investment deck, then an interactive
 * Google map, with approximate drive times alongside.
 */
export default function Location() {
  return (
    <section id="location" className="section bg-bone">
      <div className="shell">
        <SectionHeading label={location.label} heading={location.heading} intro={location.intro} />

        {/* Branded location map. Scrolls sideways on small screens so the
            street labels stay legible rather than shrinking to nothing. */}
        <Reveal className="mt-12 lg:mt-16">
          <figure className="border border-charcoal/10 bg-white">
            <ScrollableMap>
              <Image
                src={location.mapImage}
                alt={location.mapImageAlt}
                width={location.mapImageWidth}
                height={location.mapImageHeight}
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1248px"
                className="h-auto w-full min-w-[680px] sm:min-w-0"
              />
            </ScrollableMap>
            <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-charcoal/10 px-5 py-3.5 text-[11px] uppercase tracking-label text-charcoal/55 sm:px-7">
              <span>Park Towers within DIFC — Dubai Rapid Properties</span>
              <span className="text-orange-ink sm:hidden">Scroll to explore</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          {/* Interactive map */}
          <Reveal className="lg:col-span-7">
            <div className="h-full border border-charcoal/10 bg-white">
              <iframe
                src={location.embedSrc}
                title={location.embedTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[440px]"
              />
            </div>
          </Reveal>

          {/* Drive times */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col border border-charcoal/10 bg-white p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">Getting around</h3>

              <ul className="mt-5 flex-1">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex items-baseline justify-between gap-5 border-b border-charcoal/10 py-3.5 last:border-b-0"
                  >
                    <span className="text-[14px] text-body sm:text-[15px]">{landmark.name}</span>
                    <span className="whitespace-nowrap font-serif text-base text-charcoal tabular-nums sm:text-lg">
                      {landmark.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-charcoal/10 pt-4 text-[12px] text-body/80">
                {location.driveTimesNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
