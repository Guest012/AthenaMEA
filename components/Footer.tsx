'use client';

import { Mail, MapPin, Phone, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
                  href: 'https://linkedin.com',
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: 'https://twitter.com',
                  icon: Twitter,
                  label: 'Twitter',
                },
                {
                  href: 'https://youtube.com',
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
              {['About', 'Our Mission', 'Careers', 'Privacy Policy', 'Terms of Service'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300 block py-1.5"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-1.5">
              {[
                'Market Entry Strategy',
                'Talent Discovery',
                'Compensation Benchmarking',
                'Competitive Intelligence',
                'HR Due Diligence',
                'Strategic Consulting',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300 block py-1.5"
                  >
                    {link}
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
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@athenaexec.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">contact@athenaexec.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Mumbai | Dubai | London</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+91xxxxxxxxxxxx"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+91 (xxx) xxx-xxxx</span>
                </a>
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
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
