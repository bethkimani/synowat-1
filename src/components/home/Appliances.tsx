import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { InfoIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { appliances } from '../../data/appliances';
import { container, easeOut } from '../../utils/button';

const SYSTEM_IMAGE = "/f5715d19-ea19-426e-b1de-ab3182edd3b8.jpg";

const grid: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.035 } } };
const tile: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: easeOut } }
};

export function Appliances() {
  return (
    <section aria-labelledby="appliances-heading" className="bg-brand-800 py-20 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16`}>
        <div>
          <SectionHeading
            id="appliances-heading"
            tone="light"
            title="What Our Solar Systems Can Support"
            intro="A well-sized hybrid system can keep the essentials in your home or business running — day and night." />
          
          <Reveal delay={0.08} className="mt-10 hidden overflow-hidden rounded-3xl bg-white lg:block">
            <img
              src={SYSTEM_IMAGE}
              alt="Hybrid inverter, lithium battery and solar panel"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy" />
            
          </Reveal>
        </div>

        <div className="flex flex-col">
          <motion.ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}>
            
            {appliances.map(({ icon: Icon, label }) =>
            <motion.li
              key={label}
              variants={tile}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 sm:flex-col sm:items-start sm:gap-4 sm:p-5">
              
                <Icon className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" strokeWidth={1.75} />
                <span className="text-[15px] font-semibold text-white">{label}</span>
              </motion.li>
            )}
          </motion.ul>
          <Reveal className="mt-6 flex gap-3 rounded-2xl bg-brand-900/60 p-5 text-sm leading-relaxed text-white/80">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p>
              Actual appliance capacity and runtime depend on system configuration, energy consumption, weather conditions
              and battery capacity. We confirm what your system can support during the energy assessment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}