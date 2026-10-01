import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';
import { WhatsappIcon } from '../ui/SocialIcons';
import { company } from '../../data/company';
import { useScrolledPast } from '../../hooks/useScrollState';
import { easeOut } from '../../utils/button';

export function StickyContact() {
  const visible = useScrolledPast(560);

  return (
    <AnimatePresence>
      {visible &&
      <>
          <motion.div
          key="mobile-bar"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-md md:hidden"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: easeOut }}>
          
            <div className="grid grid-cols-[auto_auto_1fr] gap-2">
              <a
              href={company.phoneHref}
              aria-label={`Call ${company.phone}`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink">
              
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white">
              
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a href="#contact" className="flex h-12 items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-ink">
                Get a Free Quote
              </a>
            </div>
          </motion.div>

          <motion.a
          key="desktop-whatsapp"
          href={company.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-2 rounded-full bg-brand-700 pl-4 pr-5 text-white shadow-lift transition-colors duration-150 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:flex"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2, ease: easeOut }}>
          
            <WhatsappIcon className="h-6 w-6" />
            <span className="text-[15px] font-semibold">WhatsApp Us</span>
          </motion.a>
        </>
      }
    </AnimatePresence>);

}