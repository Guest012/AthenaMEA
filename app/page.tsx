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
import { OrganizationJsonLd, WebSiteJsonLd } from '../components/JsonLd';

export default function Home() {
  return (
    <article className="min-h-screen">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Hero />
      <FeaturedIn />
      <section aria-label="Company statistics">
        <Statistics />
      </section>
      <section aria-label="Our services">
        <Services />
      </section>
      <section aria-label="About ATHENA MEA">
        <About />
      </section>
      <section aria-label="Client testimonials">
        <Testimonials />
      </section>
      <section aria-label="Our process">
        <Process />
      </section>
      <section aria-label="Book a consultation" id="consultation">
        <CTA />
      </section>
      <Footer />
    </article>
  );
}
