import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon, GlobeIcon, ExternalLinkIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { WhatsappIcon } from '../ui/SocialIcons';
import { ContactForm } from './ContactForm';
import { company } from '../../data/company';
import { buttonClasses, container } from '../../utils/button';

const details = [
{ icon: PhoneIcon, label: 'Phone / WhatsApp', value: company.phone, href: company.phoneHref },
{ icon: MailIcon, label: 'Email', value: company.email, href: `mailto:${company.email}` },
{ icon: GlobeIcon, label: 'Website', value: company.website, href: company.websiteHref },
{ icon: MapPinIcon, label: 'Location', value: company.location, href: company.mapLink }];


export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 lg:py-28">
      <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16`}>
        <Reveal>
          <h2 id="contact-heading" className="text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            Get Your Free Solar Quote
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500">
            Speak to our team about consultation, quotation, installation or support. We usually respond the same day.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {details.map(({ icon: Icon, label, value, href }) =>
            <div key={label} className="flex items-center gap-4 py-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-sm text-ink-500">{label}</dt>
                  <dd>
                    <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="break-words text-[16px] font-semibold text-ink transition-colors duration-150 hover:text-brand-700">
                    
                      {value}
                    </a>
                  </dd>
                </div>
              </div>
            )}
          </dl>

          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${buttonClasses('green', 'lg')} mt-8`}>
            <WhatsappIcon className="h-5 w-5" />
            WhatsApp Us
          </a>

          <div className="relative mt-10 overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Map showing Synowatt at Mountain Mall, Thika Road, Nairobi"
              src={company.mapEmbed}
              className="h-64 w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
            <a
              href={company.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-card hover:text-brand-700">
              
              Open in Google Maps
              <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:pt-2">
          <ContactForm />
        </Reveal>
      </div>
    </section>);

}