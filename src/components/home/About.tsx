import React from 'react';
import { CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { aboutCapabilities, company } from '../../data/company';
import { buttonClasses, container } from '../../utils/button';

const ABOUT_IMAGE = "/4ac0da8f-cc28-47f5-a4f2-2710c610e59b.jpg";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 lg:py-28">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[4/3] lg:aspect-[4/5]">
            <img src={ABOUT_IMAGE} alt="Synowatt technicians installing solar panels on a rooftop" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-2xl bg-brand-700 p-5 text-white shadow-lift sm:right-8">
            <p className="text-lg font-bold leading-snug">{company.tagline}</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 id="about-heading" className="text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
              Clean Energy. Reliable Power. A Brighter Tomorrow.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Synowatt Power &amp; Solar Ltd provides solar energy solutions that help homes, businesses and institutions
              reduce their dependence on conventional electricity and access clean, reliable renewable power.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              From the first consultation to long-term maintenance, we design, supply and install systems that fit the way
              you actually use energy.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {aboutCapabilities.map((cap) =>
              <li key={cap} className="flex items-center gap-3 text-[15px] font-medium text-ink">
                  <CheckCircle2Icon className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  {cap}
                </li>
              )}
            </ul>
            <a href="#contact" className={`${buttonClasses('primary', 'lg')} mt-10`}>
              Talk to a Solar Expert
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>);

}