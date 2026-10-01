import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { StickyContact } from '../components/layout/StickyContact';
import { Hero } from '../components/home/Hero';
import { StatsStrip } from '../components/home/StatsStrip';
import { About } from '../components/home/About';
import { Services } from '../components/home/Services';
import { Solutions } from '../components/home/Solutions';
import { Appliances } from '../components/home/Appliances';
import { WhyChoose } from '../components/home/WhyChoose';
import { Process } from '../components/home/Process';
import { Projects } from '../components/home/Projects';
import { Education } from '../components/home/Education';
import { Testimonials } from '../components/home/Testimonials';
import { CtaBanner } from '../components/home/CtaBanner';
import { Contact } from '../components/home/Contact';

export function Home() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <Solutions />
        <Appliances />
        <WhyChoose />
        <Process />
        <Projects />
        <Education />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <StickyContact />
    </div>);

}