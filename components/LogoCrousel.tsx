'use client';

import React from 'react';

const CLIENT_LOGOS = [
  { src: '/client-novacel.webp', alt: 'Novacel' },
  { src: '/client-sophos.webp', alt: 'Sophos' },
  { src: '/client-bytedance.webp', alt: 'ByteDance' },
  { src: '/client-systra.webp', alt: 'Systra' },
  { src: '/client-akorn.webp', alt: 'Akorn' },
  { src: '/client-grupobimbo.webp', alt: 'Grupo Bimbo' },
  { src: '/client-unitedhealthgroup.webp', alt: 'UnitedHealth Group' },
  { src: '/client-alvic.webp', alt: 'ALVIC' },
  { src: '/client-pragati.webp', alt: 'Pragati Capitals & Services' },
];

export interface FeaturedInProps {
  heading?: string;
  className?: string;
}

export default function FeaturedIn({
  heading = 'Trusted by industry leaders',
  className,
}: FeaturedInProps) {
  // Duplicate array for seamless loop
  const allLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      className={[
        'relative w-full border-y border-slate-100 bg-white overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Trusted industry partners"
    >
      <div className="py-14">
        {/* Heading */}
        <h2 className="text-center text-sm uppercase tracking-widest text-slate-400 font-medium mb-10">
          {heading}
        </h2>

        {/* Marquee track */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex items-center gap-16 w-max">
            {allLogos.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ height: '64px', minWidth: '120px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-full w-auto max-w-[200px] object-contain transition-all duration-300 hover:scale-110"
                  style={{ maxHeight: '64px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
