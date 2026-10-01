import React from 'react';
import { MotionConfig } from 'framer-motion';
import { QuoteProvider } from './contexts/QuoteContext';
import { Home } from './pages/Home';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <QuoteProvider>
        <Home />
      </QuoteProvider>
    </MotionConfig>);

}