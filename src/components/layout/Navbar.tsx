import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { company, navLinks } from '../../data/company';
import { useActiveSection, useScrolledPast } from '../../hooks/useScrollState';
import { buttonClasses, container, easeOut } from '../../utils/button';

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const scrolled = useScrolledPast(16);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-200 ease-out ${
      scrolled || open ? 'shadow-[0_1px_0_rgba(34,34,34,0.06),0_10px_30px_-18px_rgba(34,34,34,0.25)]' : ''}`
      }>
      
      <div
        className={`${container} flex items-center justify-between gap-6 transition-[height] duration-200 ease-out ${
        scrolled ? 'h-16' : 'h-20'}`
        }>
        
        <a
          href="#home"
          aria-label="Synowatt Power & Solar Ltd — home"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          
          <Logo compact={scrolled} />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? 'text-brand-700' : 'text-ink-600 hover:text-ink'}`
                    }>
                    
                    {link.label}
                    {isActive &&
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                      transition={{ duration: 0.25, ease: easeOut }} />

                    }
                  </a>
                </li>);

            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className={`${buttonClasses('primary', 'sm')} hidden sm:inline-flex`}>
            Get a Free Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden">
            
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-white xl:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: easeOut }}>
          
            <ul className={`${container} py-4`}>
              {navLinks.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-surface ${
                active === link.href.slice(1) ? 'text-brand-700' : 'text-ink'}`
                }>
                
                    {link.label}
                  </a>
                </li>
            )}
              <li className="mt-3 grid gap-3 border-t border-line pt-4 sm:grid-cols-2">
                <a href="#contact" onClick={() => setOpen(false)} className={`${buttonClasses('primary', 'md')} w-full`}>
                  Get a Free Quote
                </a>
                <a href={company.phoneHref} className={`${buttonClasses('secondary', 'md')} w-full`}>
                  <PhoneIcon className="h-4 w-4" />
                  {company.phone}
                </a>
              </li>
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}