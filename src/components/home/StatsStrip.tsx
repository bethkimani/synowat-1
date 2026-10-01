import React from 'react';
import { Counter } from '../ui/Counter';
import { Reveal } from '../ui/Reveal';
import { stats } from '../../data/company';
import { container } from '../../utils/button';

export function StatsStrip() {
  return (
    <section aria-label="Synowatt at a glance" className="border-y border-line bg-white">
      <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
        {stats.map((stat, i) =>
        <Reveal
          key={stat.label}
          delay={i * 0.05}
          className={`flex flex-col-reverse gap-1 py-8 lg:py-10 ${i % 2 === 1 ? 'pl-6 sm:pl-10' : ''} ${
          i > 0 ? 'lg:border-l lg:border-line lg:pl-10' : ''} ${
          i % 2 === 1 ? 'border-l border-line' : ''} ${i >= 2 ? 'border-t border-line lg:border-t-0' : ''}`}>
          
            <dt className="text-sm font-medium text-ink-500">{stat.label}</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {stat.value !== undefined ?
            <>
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-brand-600">{stat.suffix}</span>
                </> :

            stat.text
            }
            </dd>
          </Reveal>
        )}
      </dl>
    </section>);

}