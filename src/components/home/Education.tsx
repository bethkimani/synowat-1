import React, { useState } from 'react';
import { ArrowRightIcon, BatteryFullIcon, HouseIcon, SunIcon, UtilityPoleIcon, ZapIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Modal } from '../ui/Modal';
import { articles } from '../../data/articles';
import { useQuote } from '../../contexts/QuoteContext';
import { buttonClasses, container } from '../../utils/button';
import type { Article } from '../../types/content';

const flow = [
{ icon: SunIcon, label: 'Solar panels' },
{ icon: ZapIcon, label: 'Hybrid inverter' },
{ icon: HouseIcon, label: 'Your home' }];

const backups = [
{ icon: BatteryFullIcon, label: 'Battery' },
{ icon: UtilityPoleIcon, label: 'Grid' }];


export function Education() {
  const [open, setOpen] = useState<Article | null>(null);
  const { requestQuote } = useQuote();
  const [featured, ...rest] = articles;

  return (
    <section aria-labelledby="education-heading" className="bg-surface py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="education-heading"
          title="Understanding Solar Energy"
          intro="New to solar? These short guides explain the basics in plain language." />
        

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="flex">
            <article className="flex w-full flex-col rounded-3xl border border-line bg-white p-7 sm:p-9">
              <div className="rounded-2xl bg-surface p-5 sm:p-6" aria-hidden="true">
                <div className="flex items-center justify-between gap-2">
                  {flow.map(({ icon: Icon, label }, i) =>
                  <React.Fragment key={label}>
                      {i > 0 && <span className="h-0.5 flex-1 bg-brand-200" />}
                      <span className="flex flex-col items-center gap-2 text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-700 shadow-card">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-semibold text-ink-600">{label}</span>
                      </span>
                    </React.Fragment>
                  )}
                </div>
                <div className="mt-5 flex justify-center gap-3 border-t border-line pt-4">
                  {backups.map(({ icon: Icon, label }) =>
                  <span key={label} className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-600">
                      <Icon className="h-4 w-4 text-accent" />
                      {label} backup
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-7 text-sm font-medium text-ink-500">Featured guide · {featured.readTime}</p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{featured.excerpt}</p>
              <div className="mt-auto pt-8">
                <button type="button" onClick={() => setOpen(featured)} className={buttonClasses('secondary', 'md')}>
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="divide-y divide-line border-y border-line">
              {rest.map((article) =>
              <li key={article.id}>
                  <button
                  type="button"
                  onClick={() => setOpen(article)}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  
                    <span>
                      <span className="block text-lg font-bold leading-snug text-ink transition-colors duration-150 group-hover:text-brand-700">
                        {article.title}
                      </span>
                      <span className="mt-1.5 block text-[15px] leading-relaxed text-ink-500">{article.excerpt}</span>
                      <span className="mt-2 block text-sm font-semibold text-ink-600">
                        Read More <span className="font-normal text-ink-500">· {article.readTime}</span>
                      </span>
                    </span>
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-[background-color,color,border-color,transform] duration-150 ease-out group-hover:translate-x-0.5 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>

      <Modal open={open !== null} onClose={() => setOpen(null)} labelledBy="article-modal-title">
        {open &&
        <article className="p-7 sm:p-10">
            <p className="text-sm font-medium text-brand-700">Solar guide · {open.readTime}</p>
            <h3 id="article-modal-title" className="mt-2 pr-10 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              {open.title}
            </h3>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-600">
              {open.body.map((p) =>
            <p key={p.slice(0, 24)}>{p}</p>
            )}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px] font-semibold text-brand-900">Have questions about your own setup?</p>
              <button
              type="button"
              onClick={() => {
                setOpen(null);
                requestQuote('Solar System Design & Consultation');
              }}
              className={buttonClasses('primary', 'sm')}>
              
                Talk to a Solar Expert
              </button>
            </div>
          </article>
        }
      </Modal>
    </section>);

}