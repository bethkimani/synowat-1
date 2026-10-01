import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/services';
import { useQuote } from '../../contexts/QuoteContext';
import { container, easeOut } from '../../utils/button';

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};

export function Services() {
  const { requestQuote } = useQuote();

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface py-20 lg:py-28">
      <div className={container}>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-heading"
            title="Our Solar Energy Services"
            intro="Everything you need to go solar — from expert advice and system design to installation, equipment and long-term support." />
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 hover:text-brand-800">
            
            Not sure what you need? Talk to an expert
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
          </a>
        </div>

        <motion.ul
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}>
          
          {services.map(({ icon: Icon, title, description }) =>
          <motion.li key={title} variants={card} className="flex">
              <button
              type="button"
              onClick={() => requestQuote(title)}
              aria-label={`Enquire about ${title}`}
              className="group flex w-full flex-col rounded-2xl border border-line bg-white p-6 text-left shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-[transform,background-color,color] duration-200 ease-out group-hover:-rotate-6 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{description}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink-600 transition-colors duration-150 group-hover:text-brand-700">
                  Enquire
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>
            </motion.li>
          )}
        </motion.ul>
      </div>
    </section>);

}