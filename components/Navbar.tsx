'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Item = { label: string; href: string; desc?: string; icon?: React.ReactNode };

/* ── Sharp line icons for services ── */
const SvcIcons = {
    strategy: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
    ),
    talent: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
    ),
    compensation: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    ),
    intel: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    diligence: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    consulting: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    ),
};

const SERVICES: Item[] = [
    { label: 'Market Entry Strategy', href: '/services/market-entry-strategy', desc: 'Sizing, GTM, playbooks, first 100 days', icon: SvcIcons.strategy },
    { label: 'Talent Discovery', href: '/services/talent-discovery', desc: 'CXO mapping, leadership hiring', icon: SvcIcons.talent },
    { label: 'Compensation Benchmarking', href: '/services/compensation-benchmarking', desc: 'Comp bands, ESOP structures', icon: SvcIcons.compensation },
    { label: 'Competitive Intelligence', href: '/services/competitive-intelligence', desc: 'Price waterfalls, win/loss, channel scans', icon: SvcIcons.intel },
    { label: 'HR Due Diligence', href: '/services/hr-due-diligence', desc: 'Org health, policy gaps, risks', icon: SvcIcons.diligence },
    { label: 'Strategic Consulting', href: '/services/strategic-consulting', desc: 'Board advisory, PMO, ops scale-up', icon: SvcIcons.consulting },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const leaveTimers = useRef<{ services?: number }>({});

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setServicesOpen(false);
                setMobileOpen(false);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        const onClickAway = (e: MouseEvent) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', onClickAway);
        return () => document.removeEventListener('mousedown', onClickAway);
    }, []);

    const clearTimer = (key: 'services') => {
        if (leaveTimers.current[key]) {
            window.clearTimeout(leaveTimers.current[key]);
            leaveTimers.current[key] = undefined;
        }
    };

    const scheduleClose = (key: 'services') => {
        clearTimer(key);
        leaveTimers.current[key] = window.setTimeout(() => {
            setServicesOpen(false);
        }, 120);
    };

    return (
        <>
            {/* Golden accent line at top */}
            <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400" />

            <nav
                ref={navRef}
                className={[
                    'fixed top-0.5 left-0 right-0 z-50 transition-all duration-500',
                    'bg-white border-b border-slate-200/60',
                    scrolled
                        ? 'shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                        : 'shadow-sm',
                ].join(' ')}
                aria-label="Primary navigation"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center gap-4 py-3.5">
                        {/* Brand Logo & Text */}
                        <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
                            <img
                                src="/athena-logo-full.png"
                                alt="ATHENA Market Entry Advisors"
                                className="h-11 w-11 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="leading-tight">
                                <div className="text-lg font-display font-bold tracking-[0.12em] text-slate-900">ATHENA</div>
                                <div className="text-[11px] font-semibold tracking-widest text-brand-600 uppercase">Market Entry Advisors</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="ml-auto hidden lg:flex items-center gap-0.5">
                            <NavLink href="/about-us">About Us</NavLink>

                            {/* Services Mega Dropdown */}
                            <div
                                className="relative"
                                onPointerEnter={() => { clearTimer('services'); setServicesOpen(true); }}
                                onPointerLeave={() => scheduleClose('services')}
                                onFocusCapture={() => setServicesOpen(true)}
                                onBlurCapture={(e) => {
                                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                                }}
                            >
                                <button
                                    className="group inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-slate-900 hover:bg-slate-100/50"
                                    aria-haspopup="menu"
                                    aria-expanded={servicesOpen}
                                    onClick={() => setServicesOpen(v => !v)}
                                    onKeyDown={(e) => { if (e.key === 'ArrowDown') setServicesOpen(true); }}
                                >
                                    Services
                                    <ChevronDown open={servicesOpen} />
                                </button>

                                {servicesOpen && (
                                    <MegaPanel title="Services" items={SERVICES} />
                                )}
                            </div>

                            <NavLink href="/faq">FAQs</NavLink>
                            <NavLink href="/case-studies">Case Studies</NavLink>
                            <NavLink href="/insights">Insights</NavLink>

                            {/* CTA Button */}
                            <a
                                href="/#consultation"
                                className="btn-primary ml-6 !rounded-full !px-7 !py-2.5 !text-[15px] font-semibold shadow-lg hover:shadow-2xl"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 ml-auto transition-colors"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(true)}
                        >
                            <Burger />
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileOpen && (
                    <div className="fixed inset-0 z-[100] lg:hidden">
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                            onClick={() => setMobileOpen(false)}
                        />
                        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-dramatic animate-slideIn overflow-y-auto">
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="absolute top-4 right-4 p-2.5 rounded-lg hover:bg-slate-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="pt-16 px-6 space-y-1">
                                <MobileNavLink href="/about-us" onClick={() => setMobileOpen(false)}>About Us</MobileNavLink>
                                <div className="py-2">
                                    <div className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Services</div>
                                    {SERVICES.map((s) => (
                                        <MobileNavLink key={s.label} href={s.href} onClick={() => setMobileOpen(false)}>
                                            {s.icon && <span className="mr-2 text-brand-500 inline-flex">{s.icon}</span>}{s.label}
                                        </MobileNavLink>
                                    ))}
                                </div>
                                <MobileNavLink href="/faq" onClick={() => setMobileOpen(false)}>FAQs</MobileNavLink>
                                <MobileNavLink href="/case-studies" onClick={() => setMobileOpen(false)}>Case Studies</MobileNavLink>
                                <MobileNavLink href="/insights" onClick={() => setMobileOpen(false)}>Insights</MobileNavLink>
                                <div className="pt-6 pb-4">
                                    <a href="/#consultation" className="btn-primary w-full justify-center font-semibold">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    .animate-slideIn { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
                `}</style>
            </nav>
        </>
    );
}

/* ---------- Sub-components ---------- */

function MegaPanel({ title, items }: { title: string; items: Item[] }) {
    return (
        <div
            role="menu"
            aria-label={title}
            className="absolute left-1/2 top-full z-[60] mt-3 w-[760px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-midnight-900 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
        >
            {/* Decorative top accent */}
            <div className="h-0.5 bg-gradient-to-r from-brand-400 via-amber-400 to-brand-400" />

            <div className="grid grid-cols-2 gap-0.5 p-3">
                {items.map((it) => (
                    <Link
                        key={it.label}
                        href={it.href}
                        className="group flex gap-3 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                        role="menuitem"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-400/25">
                            {it.icon ?? <span aria-hidden>•</span>}
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">{it.label}</div>
                            {it.desc && <div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">{it.desc}</div>}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center rounded-lg px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-slate-900 hover:bg-slate-100/50"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors"
        >
            {children}
        </Link>
    );
}

function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            className={['h-4 w-4 transition-transform duration-300', open ? 'rotate-180' : 'rotate-0'].join(' ')}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
        >
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Burger() {
    return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
