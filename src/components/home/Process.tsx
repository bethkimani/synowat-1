import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/features';
import { container, easeOut } from '../../utils/button';

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-surface py-20 lg:py-28">
      <div className={container}>
        <SectionHeading
          id="process-heading"
          title="How It Works"
          intro="A simple, guided process from your first call to a fully working solar system." />
        

        <ol className="mt-14 grid lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => {
            const isLast = i === processSteps.length - 1;
            return (
              <motion.li
                key={step.number}
                className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, ease: easeOut, delay: i * 0.12 }}>
                
                {!isLast &&
                <>
                    <span aria-hidden="true" className="absolute bottom-0 left-7 top-14 w-0.5 -translate-x-1/2 bg-line lg:hidden">
                      <motion.span
                      className="block h-full w-full origin-top bg-brand-600"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: easeOut, delay: 0.15 + i * 0.12 }} />
                    
                    </span>
                    <span aria-hidden="true" className="absolute left-[4.25rem] right-[-1.25rem] top-7 hidden h-0.5 bg-line lg:block">
                      <motion.span
                      className="block h-full w-full origin-left bg-brand-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: easeOut, delay: 0.15 + i * 0.12 }} />
                    
                    </span>
                  </>
                }
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-lg font-extrabold text-brand-700">
                  {step.number}
                </span>
                <div className="pt-2 lg:mt-6 lg:pt-0">
                  <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-500">{step.description}</p>
                </div>
              </motion.li>);

          })}
        </ol>
      </div>
    </section>);

}