import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '../../utils/button';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li';
};

export function Reveal({ children, delay = 0, y = 20, className, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? motion.li : motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.3, ease: easeOut, delay }}>
      
      {children}
    </Component>);

}