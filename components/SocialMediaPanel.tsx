'use client';

import { Linkedin, Youtube, Facebook } from 'lucide-react';

export default function SocialMediaPanel() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/athena-market-entry-advisors/',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
    },
  ];

  return (
    <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-4">
        {/* Social icons */}
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-400 transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}

        {/* Vertical connector line */}
        <div className="w-px h-6 bg-gradient-to-b from-slate-300 to-transparent" />

        {/* Follow text - rotated vertically */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <span className="text-xs tracking-widest text-slate-400 font-semibold">
            FOLLOW
          </span>
        </div>
      </div>
    </div>
  );
}
