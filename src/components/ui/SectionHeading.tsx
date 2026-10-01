import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  title: React.ReactNode;
  intro?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  id?: string;
  className?: string;
};

export function SectionHeading({ title, intro, tone = 'dark', align = 'left', id, className = '' }: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      <h2
        id={id}
        className={`text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[44px] ${
        tone === 'light' ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </h2>
      {intro &&
      <p className={`mt-4 text-lg leading-relaxed ${tone === 'light' ? 'text-white/80' : 'text-ink-500'}`}>{intro}</p>
      }
    </Reveal>);

}