import type { LucideIcon } from 'lucide-react';

export type NavLink = {label: string;href: string;};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Stat = {
  value?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
  label: string;
};

export type SolarPackage = {
  id: string;
  title: string;
  capacity: string;
  unit: string;
  specs: {kind: 'inverter' | 'battery' | 'panels';label: string;value: string;}[];
  components: string[];
  suitableFor: string[];
  /** Set a display price (e.g. "KES 000,000") or leave null to show "Quoted after assessment". */
  price: string | null;
  quoteService: string;
};

export type Appliance = {icon: LucideIcon;label: string;};

export type Feature = {title: string;description: string;};

export type ProcessStep = {number: string;title: string;description: string;};

export type ProjectCategory = 'Residential' | 'Commercial' | 'Institutional';

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  location?: string;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export type Testimonial = {quote: string;name: string;role: string;};