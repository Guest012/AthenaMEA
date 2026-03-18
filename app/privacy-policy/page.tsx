import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-midnight-950">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-950 to-slate-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <a href="/" className="hover:text-brand-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-brand-400">Privacy Policy</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h2>1. Introduction</h2>
          <p>
            ATHENA Market Entry Advisors (&ldquo;ATHENA MEA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website athenamea.com or engage with our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, job title, company name, and any other information you voluntarily provide when you fill out a contact form, subscribe to our communications, or engage our services.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages, referring URLs, and other standard web analytics data collected automatically through cookies and similar technologies.</li>
            <li><strong>Business Information:</strong> Information related to your company or professional activities that you share with us during the course of an advisory engagement.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested services</li>
            <li>Deliver market entry advisory, executive search, and consulting services</li>
            <li>Send relevant updates, newsletters, or marketing communications (with your consent)</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations</li>
            <li>Protect our rights and prevent misuse of our services</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting business, professional partners within our global network when necessary to deliver our services, and legal authorities when required by law or to protect our legitimate interests.
          </p>

          <h2>5. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar tracking technologies (including Google Analytics) to analyse website traffic and improve the user experience. You can control cookie preferences through your browser settings. Disabling cookies may limit certain features of our website.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. When data is no longer needed, it is securely deleted or anonymised.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, withdraw consent for marketing communications, request data portability, and object to or restrict certain processing activities. To exercise any of these rights, please contact us at info@athenamea.com.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after changes constitutes acceptance of the revised policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
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
