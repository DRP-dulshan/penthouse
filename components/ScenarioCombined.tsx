import { scenarioCombined } from '@/data/property';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/**
 * The combined route: renovate, let the unit for a year, then sell.
 *
 * Sits between the two standalone studies because it builds directly on
 * Scenario A -- the rent stacks on top of the resale profit -- and it is the
 * strongest outcome of the three, so it runs on charcoal to stand apart from
 * the light sections either side.
 */
export default function ScenarioCombined() {
  const { figures, combined, comparison } = scenarioCombined;

  return (
    <section id="scenario-combined" className="on-dark bg-charcoal">
      <div className="shell section">
        <SectionHeading
          label={scenarioCombined.label}
          heading={scenarioCombined.heading}
          intro={scenarioCombined.intro}
          onDark
        />

        {/* Supporting figures */}
        <dl className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:mt-16">
          {figures.map((figure, i) => (
            <Reveal
              key={figure.label}
              delay={i * 0.08}
              className="border-b border-white/10 py-6 sm:border-b-0 sm:py-8 sm:[&:first-child]:pr-10 sm:[&:last-child]:border-l sm:[&:last-child]:border-white/10 sm:[&:last-child]:pl-10"
            >
              <dt className="text-[11px] uppercase tracking-label text-white/50">{figure.label}</dt>
              <dd className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-serif text-2xl text-white tabular-nums sm:text-[1.75rem]">
                  {figure.value}
                </span>
                <span className="text-[12px] uppercase tracking-label text-white/45">
                  {figure.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Headline outcome */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {[combined.profit, combined.roi].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between border border-orange/50 px-7 py-8 sm:px-9 sm:py-10">
                <p className="text-[11px] font-medium uppercase tracking-label text-orange">
                  {item.label}
                </p>
                <p className="mt-6 font-serif text-[1.65rem] leading-[1.15] text-orange tabular-nums sm:text-[2.1rem] lg:text-[2.4rem]">
                  {item.value}
                </p>
                <p className="mt-4 text-[12px] uppercase tracking-label text-white/45">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-6 flex items-baseline gap-3 text-[13px] leading-relaxed text-white/55 sm:text-sm">
            <span aria-hidden="true" className="mt-2 h-px w-6 flex-none bg-orange" />
            {comparison}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
