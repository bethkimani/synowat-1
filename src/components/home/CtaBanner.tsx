import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { WhatsappIcon } from '../ui/SocialIcons';
import { company } from '../../data/company';
import { buttonClasses, container } from '../../utils/button';

const rays = Array.from({ length: 24 }, (_, i) => i * 15);

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-brand-700 py-20 lg:py-28">
      <motion.svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] text-white opacity-[0.08] lg:-right-24"
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: 'linear', repeat: Infinity }}>
        
        {rays.map((deg) =>
        <rect key={deg} x="197" y="10" width="6" height="110" rx="3" fill="currentColor" transform={`rotate(${deg} 200 200)`} />
        )}
        <circle cx="200" cy="200" r="60" fill="currentColor" />
      </motion.svg>

      <div className={`${container} relative`}>
        <Reveal className="max-w-3xl">
          <h2 id="cta-heading" className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Ready to Switch to Reliable Solar Power?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Talk to Synowatt Power &amp; Solar Ltd about a solar solution designed around your energy needs.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={`${buttonClasses('primary', 'lg')} focus-visible:ring-offset-brand-700`}>
              Get a Free Quote
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClasses('light', 'lg')} focus-visible:ring-offset-brand-700`}>
              
              <WhatsappIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}