import React from 'react';
import { QuoteIcon, UserIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { testimonials } from '../../data/testimonials';
import { container } from '../../utils/button';

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="testimonials-heading"
            title="What Our Customers Say"
            intro="Feedback from homes, businesses and institutions powered by Synowatt." />
          
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-2 text-sm font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Placeholder content — replace with real reviews
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) =>
          <Reveal as="li" key={t.role} delay={i * 0.05} className="flex flex-col rounded-3xl border border-dashed border-line bg-surface p-7">
                <QuoteIcon className="h-8 w-8 text-brand-600" aria-hidden="true" />
                <blockquote className="mt-5 text-[16px] italic leading-relaxed text-ink-500">“{t.quote}”</blockquote>
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-500" aria-hidden="true">
                    <UserIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-ink">[{t.name}]</span>
                    <span className="block text-sm text-ink-500">[{t.role}]</span>
                  </span>
                </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}