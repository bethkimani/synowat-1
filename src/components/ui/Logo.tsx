import React from 'react';

type LogoProps = {tone?: 'dark' | 'light';compact?: boolean;};

export function Logo({ tone = 'dark', compact = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={compact ? 'h-9 w-9' : 'h-10 w-10'} aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="#00A83B" />
        <circle cx="29.5" cy="10.5" r="4" fill="#FFB000" />
        <path d="M22.5 6.5 11.5 22h7.2l-2.4 11.5L28.5 17h-7.3l1.3-10.5Z" fill="#FFFFFF" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[19px] font-extrabold tracking-tight ${tone === 'light' ? 'text-white' : 'text-ink'}`}>
          
          SYNO<span className={tone === 'light' ? 'text-gold' : 'text-brand-600'}>WATT</span>
        </span>
        <span
          className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
          tone === 'light' ? 'text-white/70' : 'text-ink-500'}`
          }>
          
          Power &amp; Solar Ltd
        </span>
      </span>
    </span>);

}