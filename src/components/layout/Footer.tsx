import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../ui/SocialIcons';
import { company } from '../../data/company';
import { container } from '../../utils/button';

const quickLinks = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Solar Solutions', href: '#solutions' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' }];


const serviceLinks = [
'Solar Installation',
'Hybrid Systems',
'Lithium Batteries',
'Solar Maintenance',
'Commercial Solar',
'Residential Solar'];


// Replace "#" with Synowatt's social media profile URLs.
const socials = [
{ label: 'Facebook', href: '#', icon: FacebookIcon },
{ label: 'Instagram', href: '#', icon: InstagramIcon },
{ label: 'LinkedIn', href: '#', icon: LinkedinIcon }];


const linkClass = 'text-[15px] text-white/70 transition-colors duration-150 hover:text-white';

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-white md:pb-10 lg:pt-20">
      <div className={container}>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-lg font-semibold text-white">{company.tagline}</p>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-white/70">
              Solar energy solutions for homes, businesses and institutions across Kenya.
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) =>
              <li key={label}>
                  <a
                  href={href}
                  aria-label={`Synowatt on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-150 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-bold text-white">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) =>
              <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-bold text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) =>
              <li key={s}>
                  <a href="#services" className={linkClass}>
                    {s}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-white">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={company.phoneHref} className={`${linkClass} flex items-center gap-3`}>
                  <PhoneIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className={`${linkClass} flex items-center gap-3`}>
                  <MailIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/70">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Synowatt Power &amp; Solar Ltd. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>);

}