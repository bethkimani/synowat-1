import React from "react";
import { BatteryFullIcon, CheckIcon, ZapIcon, InfoIcon, ArrowRightIcon, BoxIcon } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { solutions } from "../../data/solutions";
import { useQuote } from "../../contexts/QuoteContext";
import { buttonClasses, container } from "../../utils/button";
import { SolarPackage } from "../../types/content";
const specIcons = {
  inverter: ZapIcon,
  battery: BatteryFullIcon,
  panels: BoxIcon
};
const customPoints = ['Load analysis and site assessment', 'Larger inverter and expandable battery capacity', 'Commercial, industrial & institutional sites', 'Ongoing maintenance and support plans'];
export function Solutions() {
  const {
    requestQuote
  } = useQuote();
  return <section id="solutions" aria-labelledby="solutions-heading" className="bg-white py-20 lg:py-28">
      <div className={container}>
        <SectionHeading id="solutions-heading" title="Solar Solutions Designed Around Your Energy Needs" intro="Example hybrid configurations to help you understand what a system looks like. Every installation is finalised after an energy assessment." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((pkg, i) => <Reveal key={pkg.id} delay={i * 0.06} className="flex">
              <PackageCard pkg={pkg} onQuote={() => requestQuote(pkg.quoteService, `I'm interested in the ${pkg.title}.`)} />
            </Reveal>)}

          <Reveal delay={0.12} className="flex">
            <article className="flex w-full flex-col rounded-3xl bg-brand-800 p-7 text-white sm:p-8">
              <p className="text-sm font-semibold text-gold">Tailored systems</p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight">Need something bigger or custom?</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                For larger homes, businesses and institutions we design systems from your actual energy usage.
              </p>
              <ul className="mt-6 space-y-3">
                {customPoints.map((point) => <li key={point} className="flex gap-3 text-[15px] text-white/90">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    {point}
                  </li>)}
              </ul>
              <div className="mt-auto pt-10">
                <button type="button" onClick={() => requestQuote('Commercial & Industrial Solar', "I'd like a custom solar system designed for my property.")} className={`${buttonClasses('light', 'md')} w-full focus-visible:ring-offset-brand-800`}>
                  Talk to a Solar Expert
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-ink-500">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
          <p>
            Configurations shown are examples. Final system design, components and pricing are confirmed after an energy
            assessment and may change with equipment availability.
          </p>
        </Reveal>
      </div>
    </section>;
}
function PackageCard({
  pkg,
  onQuote



}: {pkg: SolarPackage;onQuote: () => void;}) {
  return <article className="flex w-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card sm:p-8">
      <p className="text-sm font-semibold text-brand-700">Hybrid Solar Solution</p>
      <h3 className="mt-1 text-5xl font-extrabold tracking-tight text-ink">
        {pkg.capacity}
        <span className="ml-1 text-2xl font-bold text-ink-500">{pkg.unit}</span>
        <span className="sr-only"> — {pkg.title}</span>
      </h3>

      <dl className="mt-6 divide-y divide-line border-y border-line">
        {pkg.specs.map((spec) => {
        const Icon = specIcons[spec.kind];
        return <div key={spec.kind} className="flex items-center justify-between gap-4 py-3.5">
              <dt className="flex items-center gap-2.5 text-sm text-ink-500">
                <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {spec.label}
              </dt>
              <dd className="text-right text-[15px] font-semibold text-ink">{spec.value}</dd>
            </div>;
      })}
      </dl>

      <h4 className="mt-6 text-sm font-bold text-ink">Key components</h4>
      <ul className="mt-3 space-y-2.5">
        {pkg.components.map((c) => <li key={c} className="flex gap-2.5 text-[15px] leading-snug text-ink-600">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            {c}
          </li>)}
      </ul>

      <h4 className="mt-6 text-sm font-bold text-ink">Suitable for</h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {pkg.suitableFor.map((s) => <li key={s} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
            {s}
          </li>)}
      </ul>

      <div className="mt-auto pt-8">
        <div className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
          <span className="text-sm text-ink-500">Price</span>
          <span className="text-[15px] font-bold text-ink">{pkg.price ?? 'Quoted after assessment'}</span>
        </div>
        <button type="button" onClick={onQuote} className={`${buttonClasses('primary', 'md')} mt-4 w-full`}>
          Request a Quote
        </button>
      </div>
    </article>;
}