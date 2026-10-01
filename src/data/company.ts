import type { NavLink, Stat } from '../types/content';

export const company = {
  name: 'Synowatt Power & Solar Ltd',
  tagline: 'Power. Energy. Beyond the Grid.',
  phone: '0799 188 830',
  phoneHref: 'tel:+254799188830',
  whatsappHref:
  'https://wa.me/254799188830?text=Hello%20Synowatt%2C%20I%27d%20like%20to%20enquire%20about%20a%20solar%20solution.',
  email: 'info@synowatt.com',
  website: 'www.synowatt.com',
  websiteHref: 'https://www.synowatt.com',
  location: 'Mountain Mall, Thika Road, Nairobi',
  mapEmbed: 'https://www.google.com/maps?q=Mountain+Mall+Thika+Road+Nairobi&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Mountain+Mall+Thika+Road+Nairobi'
};

export const navLinks: NavLink[] = [
{ label: 'Home', href: '#home' },
{ label: 'About Us', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Solar Solutions', href: '#solutions' },
{ label: 'Projects', href: '#projects' },
{ label: 'Why Synowatt', href: '#why' },
{ label: 'Contact', href: '#contact' }];


export const heroTrust = ['Solar Solutions', 'Professional Installation', 'Reliable Support'];

export const stats: Stat[] = [
{ value: 5, decimals: 0, suffix: 'KVA+', label: 'Hybrid solar systems' },
{ value: 5.12, decimals: 2, suffix: 'kWh', label: 'Lithium battery storage' },
{ value: 625, decimals: 0, suffix: 'W', label: 'Bifacial solar panels' },
{ text: 'End-to-end', label: 'Design, installation & support' }];


export const aboutCapabilities = [
'Solar system design',
'Professional installation',
'Hybrid solar solutions',
'Lithium battery storage',
'Solar maintenance',
'Energy consultation',
'Residential solutions',
'Commercial solutions',
'Institutional solutions'];