'use client';

import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FeaturedIn from '../components/LogoCrousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedIn />
      <Statistics />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
