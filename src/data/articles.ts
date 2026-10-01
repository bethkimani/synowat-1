import type { Article } from '../types/content';

export const articles: Article[] = [
{
  id: 'hybrid-how',
  title: 'How Hybrid Solar Systems Work',
  excerpt:
  'A hybrid system blends solar panels, a battery and the grid so your home always draws from the best available source.',
  readTime: '4 min read',
  body: [
  'Solar panels convert sunlight into direct-current (DC) electricity. A hybrid inverter converts it into the alternating current (AC) your appliances use, and decides where the energy goes.',
  'During the day, solar powers your home first. Any extra energy charges the lithium battery. In the evening or during a power interruption, the battery takes over automatically.',
  'If the battery runs low and the sun is not shining, the inverter can draw from the grid or a generator. This is why hybrid systems are popular in Kenya — they combine savings with dependable backup.']

},
{
  id: 'home-size',
  title: 'How Much Solar Power Does Your Home Need?',
  excerpt: 'System size depends on which appliances you run, for how long, and when during the day you use them.',
  readTime: '5 min read',
  body: [
  'Start by listing the appliances you want to power and roughly how many hours each runs per day. Fridges, pumps and irons draw very different amounts of power.',
  'The inverter size (KVA) must handle everything running at the same time, while battery capacity (kWh) determines how long you can run on stored energy after sunset.',
  'A proper energy assessment avoids under-sizing (frequent shutdowns) and over-sizing (paying for capacity you never use). Synowatt carries out this assessment before recommending a system.']

},
{
  id: 'lithium',
  title: 'Understanding Lithium Solar Batteries',
  excerpt: 'Why lithium batteries have become the preferred choice for storing solar energy.',
  readTime: '4 min read',
  body: [
  'Lithium batteries store more usable energy in a smaller, lighter unit than traditional lead-acid batteries, and can be discharged more deeply without damage.',
  'They typically offer a longer service life, require little to no routine maintenance, and charge faster — useful on days with limited sunshine.',
  'Battery capacity is measured in kWh. A 5.12kWh battery, for example, can supply 1kW of load for roughly five hours, depending on settings and conditions.']

},
{
  id: 'benefits-kenya',
  title: 'Benefits of Solar Energy in Kenya',
  excerpt: 'Abundant sunshine makes solar one of the most practical energy investments for Kenyan homes and businesses.',
  readTime: '3 min read',
  body: [
  'Kenya’s position near the equator means strong, consistent sunshine for most of the year — ideal conditions for solar generation.',
  'Solar reduces monthly electricity costs, keeps essential appliances running during power interruptions and lowers reliance on fuel generators.',
  'It is also a cleaner energy choice, helping homes, businesses and institutions reduce their environmental footprint.']

},
{
  id: 'maintenance',
  title: 'Solar Maintenance Tips',
  excerpt: 'Simple habits that keep your system performing at its best for years.',
  readTime: '3 min read',
  body: [
  'Keep panels free of dust, leaves and bird droppings. In dusty areas, gentle cleaning with water and a soft brush can noticeably improve output.',
  'Check your inverter display or app regularly for warnings, and keep the inverter and battery area dry, ventilated and free of clutter.',
  'Schedule periodic professional inspections to check connections, mounting and protection devices. Synowatt offers maintenance and support for installed systems.']

},
{
  id: 'grid-vs-hybrid',
  title: 'Grid-Tied vs Hybrid Solar Systems',
  excerpt: 'The key difference comes down to batteries — and what happens when the grid goes down.',
  readTime: '4 min read',
  body: [
  'A grid-tied system uses solar to reduce daytime grid consumption but has no battery, so it usually shuts down during a power outage for safety.',
  'A hybrid system adds battery storage, letting you use solar energy at night and keeping your essential loads running during outages.',
  'Grid-tied systems cost less upfront, while hybrid systems offer far greater reliability. The right choice depends on your budget and how often you experience interruptions.']

}];