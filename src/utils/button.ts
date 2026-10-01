type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight' | 'green';
type Size = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
  'bg-accent text-ink shadow-[0_8px_20px_-10px_rgba(255,138,0,0.8)] hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_12px_24px_-10px_rgba(255,138,0,0.9)]',
  secondary: 'border border-line bg-white text-ink hover:border-brand-600 hover:text-brand-700',
  light: 'bg-white text-brand-800 hover:-translate-y-0.5 hover:bg-brand-50',
  outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  green: 'bg-brand-700 text-white hover:-translate-y-0.5 hover:bg-brand-800'
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-base'
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md'): string {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

export const container = 'mx-auto w-full max-w-7xl px-5 sm:px-8';

export const easeOut = [0.23, 1, 0.32, 1] as const;