import { scenarioB } from '@/data/property';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/** Investment Scenario B — hold and rent. */
export default function ScenarioRental() {
  return (
    <section id="scenario-rental" className="section bg-white">
      <div className="shell">
        <SectionHeading label={scenarioB.label} heading={scenarioB.heading} intro={scenarioB.intro} />

        {/* Rental positions */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {scenarioB.rentals.map((rental, i) => (
            <Reveal as="li" key={`${rental.type}-${rental.terms}`} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col justify-between p-7 sm:p-8 ${
                  rental.highlight
                    ? 'bg-sand ring-1 ring-inset ring-orange/45'
                    : 'border border-charcoal/15 bg-white'
                }`}
              >
                <p className="text-[11px] uppercase tracking-label text-charcoal/60">{rental.type}</p>
                <p
                  className={`mt-5 font-serif text-[1.75rem] leading-none tabular-nums sm:text-[2rem] ${
                    rental.highlight ? 'text-orange-ink' : 'text-charcoal'
                  }`}
                >
                  {rental.amount}
                </p>
                <p className="mt-4 flex items-center gap-2.5 text-[13px] text-body">
                  <span
                    aria-hidden="true"
                    className={`h-px w-5 flex-none ${rental.highlight ? 'bg-orange' : 'bg-charcoal/30'}`}
                  />
                  {rental.terms}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Acquisition costs */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-col gap-3 border-y border-charcoal/15 py-5 sm:flex-row sm:items-center sm:gap-10">
            <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">
              {scenarioB.acquisitionCosts.heading}
            </h3>
            <dl className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-10">
              {scenarioB.acquisitionCosts.items.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 sm:justify-start">
                  <dt className="text-[13px] text-body sm:text-sm">{item.label}</dt>
                  <dd className="font-serif text-base text-charcoal tabular-nums sm:text-lg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Return on investment */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {scenarioB.roi.map((figure, i) => (
            <Reveal key={figure.label} delay={i * 0.08}>
              <div className="flex items-center justify-between gap-6 bg-charcoal px-7 py-9 sm:flex-col sm:items-start sm:gap-0 sm:px-9 sm:py-12">
                <p className="text-[11px] uppercase tracking-label text-white/60 sm:order-2 sm:mt-4">
                  {figure.label}
                </p>
                <p className="font-serif text-[3rem] leading-none text-orange tabular-nums sm:order-1 sm:text-[4.5rem]">
                  {figure.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Assumptions */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full border border-charcoal/15 p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">
                {scenarioB.appreciation.heading}
              </h3>
              <p className="mt-4 font-serif text-xl text-charcoal sm:text-2xl">
                {scenarioB.appreciation.value}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-body">{scenarioB.appreciation.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full border border-charcoal/15 p-7 sm:p-8">
              <h3 className="text-[11px] uppercase tracking-label text-charcoal/60">
                {scenarioB.rationale.heading}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-body">{scenarioB.rationale.body}</p>
            </div>
          </Reveal>
        </div>

        {/* Important note */}
        <Reveal delay={0.05}>
          <div className="mt-5 border-l-2 border-orange bg-sand/50 px-6 py-6 sm:px-8">
            <h3 className="text-[11px] uppercase tracking-label text-orange-ink">
              {scenarioB.importantNote.heading}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal sm:text-[15px]">
              {scenarioB.importantNote.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
