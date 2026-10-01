import React from 'react';
import { CheckIcon, PhoneIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { whyChoose } from '../../data/features';
import { company } from '../../data/company';
import { buttonClasses, container } from '../../utils/button';

export function WhyChoose() {
  return (
    <section id="why" aria-labelledby="why-heading" className="bg-white py-20 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="why-heading" className="text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            Why Choose <span className="text-brand-600">Synowatt</span>?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Going solar is a long-term investment. We focus on doing it properly — the right design, quality equipment and
            support that continues after installation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className={buttonClasses('primary', 'lg')}>
              Get a Free Quote
            </a>
            <a href={company.phoneHref} className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-brand-700">
              <PhoneIcon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Or call {company.phone}
            </a>
          </div>
        </Reveal>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {whyChoose.map((f, i) =>
          <Reveal as="li" key={f.title} delay={i % 2 * 0.05} className="border-t border-line pb-8 pt-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
                <CheckIcon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{f.description}</p>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}