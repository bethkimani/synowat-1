import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRightIcon, SunIcon } from 'lucide-react';
import { heroTrust } from '../../data/company';
import { buttonClasses, container, easeOut } from '../../utils/button';

const HERO_IMAGE = "/a9dc554a-9700-4cbc-ad76-24e7c342c190.jpg";

const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } }
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '8%']);

  return (
    <section id="home" ref={ref} aria-labelledby="hero-heading" className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className={`${container} grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24`}>
        <motion.div variants={group} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            id="hero-heading"
            className="text-[40px] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[68px]">
            
            Powering a Brighter, <span className="text-brand-600">Greener</span> Kenya.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Reliable solar energy solutions for homes, businesses, offices and institutions.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonClasses('primary', 'lg')}>
              Get a Free Solar Quote
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href="#services" className={buttonClasses('secondary', 'lg')}>
              Explore Our Services
            </a>
          </motion.div>
          <motion.ul
            variants={item}
            aria-label="What we offer"
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-ink-600">
            
            {heroTrust.map((label, i) =>
            <li key={label} className="flex items-center gap-3">
                {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />}
                {label}
              </li>
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}>
          
          <div className="absolute -right-4 -top-4 bottom-12 left-12 hidden rounded-[2rem] bg-brand-600 sm:block lg:-right-6 lg:-top-6" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift lg:aspect-[5/4]">
            <motion.img
              src={HERO_IMAGE}
              alt="Modern Kenyan home with rooftop solar panels installed by Synowatt"
              style={{ y: imageY }}
              className="absolute inset-0 h-[115%] w-full object-cover" />
            
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-lift sm:-left-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent">
              <SunIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-[15px] font-bold text-ink">Hybrid solar systems</span>
              <span className="block text-sm text-ink-500">Solar · Battery · Grid backup</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}