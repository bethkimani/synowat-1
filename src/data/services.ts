import {
  HardHatIcon,
  ZapIcon,
  BatteryChargingIcon,
  ClipboardListIcon,
  WrenchIcon,
  Building2Icon,
  HouseIcon,
  PlugZapIcon } from
'lucide-react';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  icon: HardHatIcon,
  title: 'Solar System Installation',
  description: 'Professional installation of residential, commercial and institutional solar systems.'
},
{
  icon: ZapIcon,
  title: 'Hybrid Solar Systems',
  description: 'Solar systems that combine solar energy, battery storage and grid power.'
},
{
  icon: BatteryChargingIcon,
  title: 'Lithium Battery Storage',
  description: 'Reliable lithium battery solutions for storing solar energy.'
},
{
  icon: ClipboardListIcon,
  title: 'Solar System Design & Consultation',
  description: 'We assess your energy requirements and recommend a suitable solar solution.'
},
{
  icon: WrenchIcon,
  title: 'Solar Maintenance & Support',
  description: 'System inspection, maintenance, troubleshooting and technical support.'
},
{
  icon: Building2Icon,
  title: 'Commercial & Industrial Solar',
  description: 'Solar solutions designed for businesses and organisations.'
},
{
  icon: HouseIcon,
  title: 'Residential Solar Solutions',
  description: 'Reliable solar systems for homes and residential properties.'
},
{
  icon: PlugZapIcon,
  title: 'Solar Equipment & Components',
  description: 'Quality inverters, batteries, solar panels and accessories.'
}];


export const serviceOptions = [...services.map((s) => s.title), 'Not sure yet — I need advice'];