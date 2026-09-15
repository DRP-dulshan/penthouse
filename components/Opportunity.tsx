import Image from 'next/image';
import { opportunity } from '@/data/property';
import Reveal from './ui/Reveal';

/** Short editorial intro: copy left, portrait photograph right. */
export default function Opportunity() {
  return (
    <section id="opportunity" className="section bg-bone">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 xl:col-span-5">
          <Reveal>
            <p className="eyebrow">{opportunity.label}</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3rem]">
              {opportunity.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.75] sm:text-base">
              {opportunity.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
          <figure className="relative">
            <Image
              src={opportunity.image}
              alt={opportunity.imageAlt}
              width={opportunity.imageWidth}
              height={opportunity.imageHeight}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[340px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            />
            <span aria-hidden="true" className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-orange" />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
