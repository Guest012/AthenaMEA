import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-midnight-950">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-950 to-slate-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <a href="/" className="hover:text-brand-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-brand-400">Terms of Service</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/60 mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the ATHENA MEA website (athenamea.com) and our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
          </p>

          <h2>2. Services Overview</h2>
          <p>
            ATHENA Market Entry Advisors (&ldquo;ATHENA MEA&rdquo;) provides market entry advisory, executive search, compensation benchmarking, competitive intelligence, HR due diligence, and strategic consulting services for businesses expanding into India and the Middle East. The specific scope, deliverables, and terms of any engagement will be governed by a separate service agreement or statement of work.
          </p>

          <h2>3. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the website. You may not:</p>
          <ul>
            <li>Use the website in any way that could damage, disable, or impair it</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Use automated tools to scrape or collect data from the website</li>
            <li>Reproduce, distribute, or create derivative works from our content without prior written consent</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, case studies, methodologies, frameworks, and software — is the property of ATHENA MEA or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, or distribute any content from this website without our express written permission.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Any non-public information exchanged between ATHENA MEA and its clients during the course of an engagement is considered confidential. Both parties agree to maintain the confidentiality of such information and not disclose it to third parties without prior written consent, except as required by law.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The information provided on this website and through our advisory services is for general informational purposes. While we strive for accuracy and quality, ATHENA MEA makes no warranties or representations, express or implied, regarding the completeness, accuracy, reliability, or suitability of any information. Our advisory recommendations are based on available data and professional judgement, and outcomes may vary based on market conditions and other factors beyond our control.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ATHENA MEA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our website or services, including but not limited to loss of profits, business opportunities, data, or goodwill.
          </p>

          <h2>8. Engagement Terms</h2>
          <p>
            Formal advisory and consulting engagements are subject to separate written agreements that define the scope of work, fees, timelines, deliverables, and other terms. In the event of any conflict between these Terms of Service and a signed engagement agreement, the engagement agreement shall prevail.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. ATHENA MEA is not responsible for the content, accuracy, or practices of these external sites. Inclusion of any link does not imply endorsement.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.
          </p>

          <h2>11. Modifications</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this website. Your continued use of the website following any changes constitutes acceptance of the updated terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>For questions about these Terms of Service, please contact:</p>
          <address className="not-italic">
            ATHENA Market Entry Advisors<br />
            Unit 407, 4th Floor, Tapasya One, Golf Course Road,<br />
            Sector 53, Gurugram, Haryana 122003, India<br />
            Email: <a href="mailto:info@athenamea.com">info@athenamea.com</a>
          </address>
        </div>
      </section>

      <Footer />
    </div>
  );
}
