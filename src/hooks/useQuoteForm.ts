import { useEffect, useState } from 'react';
import { useQuote } from '../contexts/QuoteContext';

export type QuoteFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Partial<Record<keyof QuoteFields, string>>;

const initialValues: QuoteFields = { name: '', phone: '', email: '', service: '', message: '' };

function validate(values: QuoteFields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[+\d\s()-]{9,}$/.test(values.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
  errors.email = 'Please enter a valid email address.';
  if (!values.service) errors.service = 'Please choose a service.';
  return errors;
}

export function useQuoteForm() {
  const { request } = useQuote();
  const [values, setValues] = useState<QuoteFields>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (!request) return;
    setStatus('idle');
    setValues((v) => ({
      ...v,
      service: request.service,
      message: request.message ?? v.message
    }));
    setErrors((e) => ({ ...e, service: undefined }));
  }, [request]);

  const update = (field: keyof QuoteFields, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus('submitting');
    try {
      // Replace with a real submission endpoint (email service, CRM or form handler).
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, update, submit, reset };
}