import Image from 'next/image';
import { contact, finalCta } from '@/data/property';
import Reveal from './ui/Reveal';
import WhatsAppButton from './ui/WhatsAppButton';

/** Closing conversion block. */
export default function FinalCta() {
  return (
    <section id="contact" className="on-dark relative isolate overflow-hidden bg-charcoal">
      <Image
        src={finalCta.backgroundImage}
        alt=""
        aria-hidden="true"
        width={finalCta.backgroundWidth}
        height={finalCta.backgroundHeight}
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.18]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-charcoal/45" />

      <div className="shell section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow eyebrow-on-dark">{finalCta.label}</p>
              <h2 className="mt-5 text-[2rem] leading-[1.12] text-bone sm:text-[2.6rem] lg:text-[3.1rem]">
                {finalCta.heading}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
                {finalCta.body}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 border-l-2 border-orange pl-5 sm:pl-6">
                <p className="font-serif text-2xl text-white sm:text-3xl">{contact.agentName}</p>
                <p className="mt-1.5 text-[11px] uppercase tracking-label text-white/60">
                  {contact.agentCompany}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9">
                <WhatsAppButton className="btn-primary w-full px-8 py-4 text-center sm:w-auto sm:py-[18px]">
                  {finalCta.ctaLabel}
                </WhatsAppButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <dl className="border-t border-white/15">
              <div className="border-b border-white/10 py-5">
                <dt className="text-[11px] uppercase tracking-label text-white/50">Telephone</dt>
                <dd className="mt-2">
                  <a
                    href={contact.phoneHref}
                    className="font-serif text-lg text-white transition-colors hover:text-orange sm:text-xl"
                  >
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div className="border-b border-white/10 py-5">
                <dt className="text-[11px] uppercase tracking-label text-white/50">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all font-serif text-lg text-white transition-colors hover:text-orange sm:text-xl"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>

              <div className="border-b border-white/10 py-5">
                <dt className="text-[11px] uppercase tracking-label text-white/50">Office</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-white/80">{contact.address}</dd>
              </div>

              <div className="py-5">
                <dt className="text-[11px] uppercase tracking-label text-white/50">Website</dt>
                <dd className="mt-2">
                  <a
                    href={contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-white/80 underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-white"
                  >
                    {contact.websiteDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
