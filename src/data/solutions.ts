import type { SolarPackage } from '../types/content';

export const solutions: SolarPackage[] = [
{
  id: 'hybrid-3-2kva',
  title: '3.2KVA Hybrid Solar Solution',
  capacity: '3.2',
  unit: 'KVA',
  specs: [
  { kind: 'inverter', label: 'Inverter', value: '3.2KVA hybrid' },
  { kind: 'battery', label: 'Battery storage', value: '5.12kWh lithium' },
  { kind: 'panels', label: 'Solar panels', value: '4 × 625W bifacial' }],

  components: [
  'Hybrid inverter (solar, battery & grid input)',
  'Lithium battery for evening and backup power',
  'Bifacial panels that capture light on both sides',
  'Mounting, cabling & protection accessories'],

  suitableFor: ['Homes', 'Small offices', 'Shops'],
  price: null,
  quoteService: 'Hybrid Solar Systems'
},
{
  id: 'hybrid-5kva',
  title: '5KVA Hybrid Solar Solution',
  capacity: '5',
  unit: 'KVA',
  specs: [
  { kind: 'inverter', label: 'Inverter', value: '5KVA hybrid' },
  { kind: 'battery', label: 'Battery storage', value: '5.12kWh lithium' },
  { kind: 'panels', label: 'Solar panels', value: '6 × 615W' }],

  components: [
  'Hybrid inverter for heavier household loads',
  'Lithium battery for evening and backup power',
  'Six high-output solar panels',
  'Mounting, cabling & protection accessories'],

  suitableFor: ['Larger homes', 'Offices', 'Small businesses'],
  price: null,
  quoteService: 'Hybrid Solar Systems'
}];