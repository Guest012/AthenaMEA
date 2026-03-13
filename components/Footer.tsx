'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Youtube, Twitter, Facebook, Instagram, X } from 'lucide-react';

/* ─── Slide-in Panel ─── */
function SlidePanel({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-[201] h-full w-full max-w-2xl bg-white shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-white border-b border-slate-200">
          <h2 className="font-display text-xl font-bold text-slate-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        {/* Content */}
        <div className="px-8 py-8 text-slate-600 text-sm leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </>
  );
}

/* ─── Privacy Policy Content ─── */
function PrivacyPolicyContent() {
  return (
    <>
      <p className="text-xs text-slate-400">Last updated: March 2026</p>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">1. Introduction</h3>
        <p>ATHENA Market Entry Advisors (&quot;ATHENA MEA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website athenamea.com or engage with our services.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">2. Information We Collect</h3>
        <p className="mb-2">We may collect the following categories of information:</p>
        <p><strong className="text-slate-800">Personal Information:</strong> Name, email address, phone number, job title, company name, and any other information you voluntarily provide when you fill out a contact form, subscribe to our communications, or engage our services.</p>
        <p className="mt-2"><strong className="text-slate-800">Usage Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages, referring URLs, and other standard web analytics data collected automatically through cookies and similar technologies.</p>
        <p className="mt-2"><strong className="text-slate-800">Business Information:</strong> Information related to your company or professional activities that you share with us during the course of an advisory engagement.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">3. How We Use Your Information</h3>
        <p>We use collected information to: respond to your enquiries and provide requested services; deliver market entry advisory, executive search, and consulting services; send relevant updates, newsletters, or marketing communications (with your consent); improve our website, services, and user experience; comply with legal obligations; and protect our rights and prevent misuse of our services.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">4. Information Sharing</h3>
        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting business (e.g., analytics providers, email platforms), professional partners within our global network when necessary to deliver our services, and legal authorities when required by law or to protect our legitimate interests.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">5. Cookies & Tracking</h3>
        <p>We use cookies and similar tracking technologies (including Google Analytics) to analyse website traffic and improve the user experience. You can control cookie preferences through your browser settings. Disabling cookies may limit certain features of our website.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">6. Data Retention</h3>
        <p>We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. When data is no longer needed, it is securely deleted or anonymised.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">7. Data Security</h3>
        <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">8. Your Rights</h3>
        <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, withdraw consent for marketing communications, request data portability, and object to or restrict certain processing activities. To exercise any of these rights, please contact us at info@athenamea.com.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">9. Third-Party Links</h3>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before providing any personal information.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">10. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after changes constitutes acceptance of the revised policy.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">11. Contact Us</h3>
        <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
        <p className="mt-2 text-slate-800">
          ATHENA Market Entry Advisors<br />
          Unit 407, 4th Floor, Tapasya One, Golf Course Road,<br />
          Sector 53, Gurugram, Haryana 122003, India<br />
          Email: info@athenamea.com
        </p>
      </div>
    </>
  );
}

/* ─── Terms of Service Content ─── */
function TermsOfServiceContent() {
  return (
    <>
      <p className="text-xs text-slate-400">Last updated: March 2026</p>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">1. Acceptance of Terms</h3>
        <p>By accessing and using the ATHENA MEA website (athenamea.com) and our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">2. Services Overview</h3>
        <p>ATHENA Market Entry Advisors (&quot;ATHENA MEA&quot;) provides market entry advisory, executive search, compensation benchmarking, competitive intelligence, HR due diligence, and strategic consulting services for businesses expanding into India and the Middle East. The specific scope, deliverables, and terms of any engagement will be governed by a separate service agreement or statement of work.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">3. Use of Website</h3>
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the website. You may not: use the website in any way that could damage, disable, or impair it; attempt to gain unauthorised access to any part of the website; use automated tools to scrape or collect data from the website; or reproduce, distribute, or create derivative works from our content without prior written consent.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">4. Intellectual Property</h3>
        <p>All content on this website — including text, graphics, logos, images, case studies, methodologies, frameworks, and software — is the property of ATHENA MEA or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, or distribute any content from this website without our express written permission.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">5. Confidentiality</h3>
        <p>Any non-public information exchanged between ATHENA MEA and its clients during the course of an engagement is considered confidential. Both parties agree to maintain the confidentiality of such information and not disclose it to third parties without prior written consent, except as required by law.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">6. Disclaimer of Warranties</h3>
        <p>The information provided on this website and through our advisory services is for general informational purposes. While we strive for accuracy and quality, ATHENA MEA makes no warranties or representations, express or implied, regarding the completeness, accuracy, reliability, or suitability of any information. Our advisory recommendations are based on available data and professional judgement, and outcomes may vary based on market conditions and other factors beyond our control.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">7. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, ATHENA MEA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our website or services, including but not limited to loss of profits, business opportunities, data, or goodwill.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">8. Engagement Terms</h3>
        <p>Formal advisory and consulting engagements are subject to separate written agreements that define the scope of work, fees, timelines, deliverables, and other terms. In the event of any conflict between these Terms of Service and a signed engagement agreement, the engagement agreement shall prevail.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">9. Third-Party Links</h3>
        <p>Our website may contain links to third-party websites or services. ATHENA MEA is not responsible for the content, accuracy, or practices of these external sites. Inclusion of any link does not imply endorsement.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">10. Governing Law</h3>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">11. Modifications</h3>
        <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this website. Your continued use of the website following any changes constitutes acceptance of the updated terms.</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 text-base mb-2">12. Contact Us</h3>
        <p>For questions about these Terms of Service, please contact:</p>
        <p className="mt-2 text-slate-800">
          ATHENA Market Entry Advisors<br />
          Unit 407, 4th Floor, Tapasya One, Golf Course Road,<br />
          Sector 53, Gurugram, Haryana 122003, India<br />
          Email: info@athenamea.com
        </p>
      </div>
    </>
  );
}

/* ─── Footer Component ─── */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const companyLinks = [
    { label: 'About', href: '/about-us' },
    { label: 'Careers', href: '#', inactive: true },
    { label: 'Privacy Policy', href: '#', onClick: () => setPrivacyOpen(true) },
    { label: 'Terms of Service', href: '#', onClick: () => setTermsOpen(true) },
  ];

  const serviceLinks = [
    { label: 'Market Entry Strategy', href: '/services/market-entry-strategy' },
    { label: 'Talent Discovery', href: '/services/talent-discovery' },
    { label: 'Compensation Benchmarking', href: '/services/compensation-benchmarking' },
    { label: 'Competitive Intelligence', href: '/services/competitive-intelligence' },
    { label: 'HR Due Diligence', href: '/services/hr-due-diligence' },
    { label: 'Strategic Consulting', href: '/services/strategic-consulting' },
  ];

  return (
    <>
      <footer className="relative bg-midnight-950">
        {/* Grid pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top gradient border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h2 className="font-display text-3xl font-bold text-white tracking-[0.1em]">
                ATHENA
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Market Entry Advisors
              </p>
              <p className="text-slate-400 text-sm mt-4 max-w-xs leading-relaxed">
                Strategic market entry advisory for global businesses expanding into India and the
                Middle East.
              </p>

              {/* Social icons row */}
              <div className="mt-6 flex items-center gap-3">
                {[
                  {
                    href: 'https://www.linkedin.com/company/athena-market-entry-advisors/',
                    icon: Linkedin,
                    label: 'LinkedIn',
                  },
                  {
                    href: 'https://www.facebook.com/profile.php?id=61582308998462',
                    icon: Facebook,
                    label: 'Facebook',
                  },
                  {
                    href: 'https://www.instagram.com/athenamea',
                    icon: Instagram,
                    label: 'Instagram',
                  },
                  {
                    href: 'https://x.com/AthenameaInfo',
                    icon: Twitter,
                    label: 'X (Twitter)',
                  },
                  {
                    href: 'https://www.youtube.com/@AthenaMEA',
                    icon: Youtube,
                    label: 'YouTube',
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-brand-400/20 transition-colors duration-300 flex items-center justify-center group"
                    >
                      <Icon className="w-5 h-5 text-white/80 group-hover:text-brand-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-1.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick!(); } : undefined}
                      className={`text-sm transition-colors duration-300 block py-1.5 ${link.inactive ? 'text-slate-500 cursor-default' : 'text-slate-400 hover:text-white'}`}
                    >
                      {link.label}
                      {link.inactive && <span className="ml-1.5 text-[10px] text-slate-600 uppercase tracking-wider">(Coming Soon)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-1.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 block py-1.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.location.href = 'mai' + 'lto:' + 'info' + '@' + 'athenamea' + '.com'; }}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">info<span className="hidden">null</span>@athenamea.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div className="text-sm space-y-1">
                      <p><span className="text-white/70 font-medium">India:</span> Gurgaon, Bangalore, Hyderabad, Mumbai</p>
                      <p><span className="text-white/70 font-medium">UAE:</span> Dubai, Abu Dhabi, Riyadh</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div className="text-sm space-y-1">
                      <a href="tel:+919810268983" className="block hover:text-white transition-colors duration-300">
                        <span className="text-white/70 font-medium">India:</span> +91-9810268983
                      </a>
                      <a href="tel:+971556447099" className="block hover:text-white transition-colors duration-300">
                        <span className="text-white/70 font-medium">UAE:</span> +971-556447099
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <p className="text-xs text-slate-500">
                © {currentYear} Athena Executive Search & Consulting. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Privacy
                </button>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Slide-in Panels */}
      <SlidePanel open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <PrivacyPolicyContent />
      </SlidePanel>
      <SlidePanel open={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <TermsOfServiceContent />
      </SlidePanel>
    </>
  );
}
