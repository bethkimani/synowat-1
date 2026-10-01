import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type QuoteRequest = {service: string;message?: string;id: number;};

type QuoteContextValue = {
  request: QuoteRequest | null;
  requestQuote: (service?: string, message?: string) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: {children: React.ReactNode;}) {
  const [request, setRequest] = useState<QuoteRequest | null>(null);

  const requestQuote = useCallback((service?: string, message?: string) => {
    if (service) setRequest({ service, message, id: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const value = useMemo(() => ({ request, requestQuote }), [request, requestQuote]);

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote(): QuoteContextValue {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider');
  return ctx;
}