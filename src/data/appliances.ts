import {
  TvIcon,
  LightbulbIcon,
  RefrigeratorIcon,
  WifiIcon,
  CctvIcon,
  DropletsIcon,
  WashingMachineIcon,
  SnowflakeIcon,
  SpeakerIcon,
  FenceIcon,
  GlassWaterIcon,
  ShirtIcon } from
'lucide-react';
import type { Appliance } from '../types/content';

export const appliances: Appliance[] = [
{ icon: TvIcon, label: 'TV' },
{ icon: LightbulbIcon, label: 'Lighting' },
{ icon: RefrigeratorIcon, label: 'Refrigerator' },
{ icon: WifiIcon, label: 'Wi-Fi Router' },
{ icon: CctvIcon, label: 'CCTV' },
{ icon: DropletsIcon, label: 'Water Pump' },
{ icon: WashingMachineIcon, label: 'Washing Machine' },
{ icon: SnowflakeIcon, label: 'Freezer' },
{ icon: SpeakerIcon, label: 'Music System' },
{ icon: FenceIcon, label: 'Electric Fence' },
{ icon: GlassWaterIcon, label: 'Water Dispenser' },
{ icon: ShirtIcon, label: 'Iron Box' }];