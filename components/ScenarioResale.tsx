import { scenarioA } from '@/data/property';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

/** Investment Scenario A — acquire, renovate, resell. */
export default function ScenarioResale() {
  return (
    <section id="scenario-resale" className="section bg-bone">
      <div className="shell">
        <SectionHeading label={scenarioA.label} heading={scenarioA.heading} intro={scenarioA.intro} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Costs */}
          <Reveal className="lg:col-span-7">
            <div className="border-t border-charcoal/15">
              <dl>
                {scenarioA.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-charcoal/10 py-4 sm:py-[18px]"
                  >
                    <dt className="text-[13px] text-body sm:text-[15px]">{row.label}</dt>
                    <dd className="whitespace-nowrap font-serif text-base text-charcoal tabular-nums sm:text-lg">
                      {row.value}
                    </dd>
                  </div>
                ))}

                <div className="flex items-baseline justify-between gap-6 border-b-2 border-charcoal py-5">
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal sm:text-sm">
                    {scenarioA.total.label}
                  </dt>
                  <dd className="whitespace-nowrap font-serif text-xl text-charcoal tabular-nums sm:text-2xl">
                    {scenarioA.total.value}
                  </dd>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <dt className="text-[13px] text-body sm:text-[15px]">{scenarioA.resale.label}</dt>
                  <dd className="font-serif text-lg text-orange-ink tabular-nums sm:text-xl">
                    {scenarioA.resale.value}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Renovation & exit strategy */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full bg-sand p-7 sm:p-9">
              <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                {scenarioA.renovation.heading}
              </h3>
              <p className="mt-4 font-serif text-2xl text-orange-ink sm:text-[1.75rem]">
                {scenarioA.renovation.budget}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-body">{scenarioA.renovation.scope}</p>

              <div className="my-6 h-px w-full bg-charcoal/15" />

              <p className="text-[11px] uppercase tracking-label text-charcoal/60">
                {scenarioA.renovation.timelineLabel}
              </p>
              <p className="mt-2 font-serif text-xl text-charcoal sm:text-2xl">
                {scenarioA.renovation.timeline}
              </p>
              <p className="mt-5 text-[14px] leading-relaxed text-body">{scenarioA.renovation.exit}</p>
            </div>
          </Reveal>
        </div>

        {/* Headline outcome */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-start gap-2 bg-orange-deep px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-9">
            <p className="text-[11px] font-medium uppercase tracking-label text-white/85 sm:text-xs">
              {scenarioA.profit.label}
            </p>
            <p className="font-serif text-[1.75rem] leading-tight text-white tabular-nums sm:text-[2.5rem] lg:text-[2.75rem]">
              {scenarioA.profit.value}
            </p>
          </div>
        </Reveal>

        {/* Comparables */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <h3 className="text-[11px] font-medium uppercase tracking-label text-charcoal/70 sm:text-xs">
              {scenarioA.comparables.heading}
            </h3>

            {/* The subject unit first, so the entry rate reads directly
                against the district rate below it. */}
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 bg-sand px-6 py-5 ring-1 ring-inset ring-orange/40 sm:px-7 sm:py-6">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-lg text-charcoal">
                  {scenarioA.comparables.subject.name}
                </span>
                <span className="text-[12px] uppercase tracking-label text-charcoal/60">
                  {scenarioA.comparables.subject.sizeLabel}
                </span>
              </span>
              <span className="flex items-baseline gap-3 sm:gap-4">
                <span className="font-serif text-lg text-charcoal tabular-nums">
                  {scenarioA.comparables.subject.price}
                </span>
                <span className="font-serif text-lg text-orange-ink tabular-nums">
                  {scenarioA.comparables.subject.rate}
                </span>
              </span>
            </div>

            <ul className="mt-4 grid gap-px border-t border-charcoal/15 sm:grid-cols-2 sm:gap-4 sm:border-t-0">
              {scenarioA.comparables.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-charcoal/10 py-4 sm:border sm:border-charcoal/15 sm:px-6 sm:py-6"
                >
                  <span className="font-serif text-lg text-charcoal">{item.name}</span>
                  <span className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-serif text-lg text-charcoal tabular-nums">{item.price}</span>
                    <span className="text-[12px] text-body tabular-nums sm:text-[13px]">{item.rate}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-body sm:text-[15px]">
              {scenarioA.comparables.note}
            </p>
            <p className="mt-3 text-[12px] text-body/80">{scenarioA.comparables.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
