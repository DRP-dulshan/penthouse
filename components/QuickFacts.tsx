import { quickFacts } from '@/data/property';
import Reveal from './ui/Reveal';

/**
 * Charcoal band of six headline facts, directly beneath the hero.
 *
 * Six divides evenly at every breakpoint -- three rows of two on phones, two
 * rows of three on tablets, a single row on desktop -- so no cell is ever left
 * orphaned on its own row.
 */
export default function QuickFacts() {
  return (
    <section className="on-dark bg-charcoal" aria-label="Key facts">
      <div className="shell">
        <dl className="grid grid-cols-2 divide-x divide-y divide-white/10 border-x border-white/10 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {quickFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.06} className="px-4 py-7 text-center sm:px-5 sm:py-9">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block font-serif text-xl leading-tight text-orange sm:text-2xl lg:text-[1.375rem] xl:text-2xl">
                  {fact.value}
                </span>
                <span className="mt-2 block text-[10px] uppercase tracking-label text-white/60 sm:text-[11px]">
                  {fact.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
