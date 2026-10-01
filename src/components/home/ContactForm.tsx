import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon, AlertCircleIcon, ChevronDownIcon } from 'lucide-react';
import { WhatsappIcon } from '../ui/SocialIcons';
import { useQuoteForm, type QuoteFields } from '../../hooks/useQuoteForm';
import { serviceOptions } from '../../data/services';
import { company } from '../../data/company';
import { buttonClasses, easeOut } from '../../utils/button';

const inputBase =
'w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-ink-500/70 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4';

function fieldClass(hasError: boolean) {
  return `${inputBase} ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : 'border-line focus:border-brand-600 focus:ring-brand-100'}`;
}

export function ContactForm() {
  const { values, errors, status, update, submit, reset } = useQuoteForm();

  const err = (field: keyof QuoteFields) =>
  errors[field] ?
  <p id={`${field}-error`} className="mt-1.5 text-sm text-red-600">
        {errors[field]}
      </p> :
  null;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-9">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ?
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: easeOut }}
          className="flex min-h-[420px] flex-col items-center justify-center text-center"
          role="status">
          
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <CheckCircle2Icon className="h-9 w-9" />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold text-ink">Thank you, {values.name.split(' ')[0]}!</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-500">
              Your quote request has been received. A Synowatt solar expert will contact you on {values.phone} shortly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClasses('green', 'md')}>
                <WhatsappIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <button type="button" onClick={reset} className={buttonClasses('secondary', 'md')}>
                Send another request
              </button>
            </div>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: easeOut }}
          onSubmit={submit}
          noValidate
          aria-label="Request a quote">
          
            <h3 className="text-2xl font-extrabold tracking-tight text-ink">Request a Quote</h3>
            <p className="mt-1.5 text-[15px] text-ink-500">Tell us a little about your needs. It’s free, with no obligation.</p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                  Full name <span className="text-red-600">*</span>
                </label>
                <input
                id="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update('name', e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`${fieldClass(!!errors.name)} h-12`}
                placeholder="e.g. Jane Wanjiku" />
              
                {err('name')}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
                  Phone number <span className="text-red-600">*</span>
                </label>
                <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update('phone', e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`${fieldClass(!!errors.phone)} h-12`}
                placeholder="07XX XXX XXX" />
              
                {err('phone')}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                  Email <span className="font-normal text-ink-500">(optional)</span>
                </label>
                <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${fieldClass(!!errors.email)} h-12`}
                placeholder="you@example.com" />
              
                {err('email')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
                  Service required <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <select
                  id="service"
                  value={values.service}
                  onChange={(e) => update('service', e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  className={`${fieldClass(!!errors.service)} h-12 appearance-none pr-10 ${values.service ? '' : 'text-ink-500'}`}>
                  
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) =>
                  <option key={s} value={s} className="text-ink">
                        {s}
                      </option>
                  )}
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" aria-hidden="true" />
                </div>
                {err('service')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                className={`${fieldClass(false)} resize-none py-3`}
                placeholder="What would you like to power? Tell us about your property and current electricity challenges." />
              
              </div>
            </div>

            {status === 'error' &&
          <p role="alert" className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                <AlertCircleIcon className="h-4 w-4 shrink-0" />
                Something went wrong. Please try again or reach us on WhatsApp.
              </p>
          }

            <button type="submit" disabled={status === 'submitting'} className={`${buttonClasses('primary', 'lg')} mt-7 w-full`}>
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-5 w-5 animate-spin" />
                  Sending request…
                </> :

            'Request a Quote'
            }
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}