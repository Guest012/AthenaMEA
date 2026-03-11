'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    targetMarket: '',
    industry: '',
  });
  /* ── Calendar state ── */
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [calMonth, setCalMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  /* ── Submission state ── */
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ── Calendar helpers ── */
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const daysInMonth = useMemo(() => {
    const y = calMonth.getFullYear();
    const m = calMonth.getMonth();
    const firstDay = new Date(y, m, 1).getDay(); // 0=Sun
    const totalDays = new Date(y, m + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= totalDays; d++) cells.push(d);
    return cells;
  }, [calMonth]);

  const isDateDisabled = (day: number) => {
    const d = new Date(calMonth.getFullYear(), calMonth.getMonth(), day);
    // Disable past days, Saturdays (6), Sundays (0)
    return d < today || d.getDay() === 0 || d.getDay() === 6;
  };

  const formatDateKey = (day: number) =>
    `${calMonth.getFullYear()}-${String(calMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const monthLabel = calMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const TIME_SLOTS = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];

  // Detect visibility for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const WEB3FORMS_KEY = '44a8a86e-c071-455a-8fc8-9d6ea7a872e9';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    const readableDate = selectedDate
      ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Strategy Call Booking — ${formData.firstName} ${formData.lastName} (${formData.company})`,
          from_name: 'ATHENA MEA Website',
          /* Contact info */
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Company': formData.company,
          'Email': formData.email,
          'Phone': formData.phone || '—',
          'Target Market': formData.targetMarket,
          'Industry': formData.industry || '—',
          /* Booking */
          'Preferred Date': readableDate,
          'Preferred Time (IST)': selectedTime,
          /* Meta */
          'Form Type': 'Strategy Call Booking',
          'Submitted At': new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', targetMarket: '', industry: '' });
        setSelectedDate('');
        setSelectedTime('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const whatToExpect = [
    {
      title: 'Market Opportunity Assessment',
      description: 'Initial evaluation of your target market potential and competitive landscape.',
    },
    {
      title: 'Strategic Roadmap',
      description: 'A high-level, step-by-step market entry outline tailored to your business.',
    },
    {
      title: 'Next Steps Planning',
      description: 'Clear action plan and timelines to accelerate your market entry process.',
    },
  ];

  const features = [
    {
      icon: 'ri-gift-line',
      title: 'Free Consultation',
      description: '30-minute strategy session with our senior experts',
    },
    {
      icon: 'ri-file-chart-line',
      title: 'Market Analysis',
      description: 'Comprehensive market entry assessment and insights',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk-Free Start',
      description: 'No upfront costs — transparent, results-driven partnership',
    },
  ];

  return (
    <section
      id="consultation"
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          background:
            'radial-gradient(900px 500px at 20% 50%, #F8B830 0%, transparent 60%), radial-gradient(800px 400px at 80% 80%, #06b6d4 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Get Started
          </div>
        </div>

        {/* Main Grid: Form & Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: FORM CARD */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-dramatic border border-slate-100 p-8 lg:p-10">
              {/* ── Success State ── */}
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-5">
                    <i className="ri-check-double-line text-3xl text-emerald-500" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-midnight-900 mb-2">
                    You&apos;re booked!
                  </h2>
                  <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                    We&apos;ve received your request and will send a calendar invite to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-sm text-brand-600 hover:text-brand-700 font-semibold"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
              <>
              {/* Form Header */}
              <h2 className="font-display text-3xl font-bold tracking-tight text-midnight-900 mb-2">
                Ready to accelerate your growth?
              </h2>
              <p className="text-slate-600 mb-8">
                Tell us about your expansion goals. We&apos;ll tailor a personalized strategy session for you.
              </p>

              {/* Error banner */}
              {submitStatus === 'error' && (
                <div className="mb-5 flex items-center gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  <i className="ri-error-warning-line text-lg" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First & Last Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      required
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-2">
                    Company Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corporation"
                    required
                    className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Target Market & Industry Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="targetMarket" className="text-sm font-semibold text-slate-700 mb-2">
                      Target Market <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="targetMarket"
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleChange}
                      required
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    >
                      <option value="">Select market</option>
                      <option value="india">India</option>
                      <option value="middle-east">Middle East (GCC)</option>
                      <option value="both">Both India & Middle East</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="industry" className="text-sm font-semibold text-slate-700 mb-2">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all outline-none"
                    >
                      <option value="">Select industry</option>
                      <option value="saas">SaaS / Software</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="fintech">Fintech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* ── Calendar Date & Time Picker ── */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 mt-1">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    <i className="ri-calendar-event-line mr-1.5 text-brand-500" />
                    Pick a Date &amp; Time <span className="text-rose-500">*</span>
                  </p>

                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      type="button"
                      aria-label="Previous month"
                      onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1))}
                      className="h-8 w-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-600"
                    >
                      <i className="ri-arrow-left-s-line text-lg" aria-hidden="true" />
                    </button>
                    <span className="text-sm font-semibold text-slate-800">{monthLabel}</span>
                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={() => setCalMonth(new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1))}
                      className="h-8 w-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors text-slate-600"
                    >
                      <i className="ri-arrow-right-s-line text-lg" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                      <div key={d} className="text-center text-[10px] font-semibold text-slate-400 uppercase">{d}</div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div className="grid grid-cols-7 gap-1">
                    {daysInMonth.map((day, i) =>
                      day === null ? (
                        <div key={`e${i}`} />
                      ) : (
                        <button
                          key={day}
                          type="button"
                          disabled={isDateDisabled(day)}
                          onClick={() => setSelectedDate(formatDateKey(day))}
                          className={[
                            'h-9 w-full rounded-lg text-sm font-medium transition-all duration-200',
                            isDateDisabled(day)
                              ? 'text-slate-300 cursor-not-allowed'
                              : selectedDate === formatDateKey(day)
                                ? 'bg-brand-400 text-midnight-900 shadow-sm font-bold'
                                : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700',
                          ].join(' ')}
                        >
                          {day}
                        </button>
                      )
                    )}
                  </div>

                  {/* Time slot grid — shown after date selection */}
                  {selectedDate && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Available Slots (IST)</p>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={[
                              'px-2 py-2 rounded-lg text-xs font-semibold border transition-all duration-200',
                              selectedTime === slot
                                ? 'bg-brand-400 border-brand-400 text-midnight-900 shadow-sm'
                                : 'border-slate-200 text-slate-600 hover:border-brand-300 hover:bg-brand-50',
                            ].join(' ')}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || submitting}
                  className={[
                    'w-full group relative inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 font-semibold shadow-lg transition-all duration-300 mt-2',
                    selectedDate && selectedTime && !submitting
                      ? 'bg-gradient-to-r from-brand-400 to-brand-500 text-midnight-900 shadow-brand-400/30 hover:from-brand-300 hover:to-brand-400'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none',
                  ].join(' ')}
                >
                  {submitting ? (
                    <>
                      <i className="ri-loader-4-line text-lg animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-midnight-900/10">
                        <i className="ri-calendar-check-line text-base" />
                      </span>
                      <span>
                        {selectedDate && selectedTime
                          ? `Book Call · ${new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${selectedTime}`
                          : 'Select a Date & Time to Book'}
                      </span>
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-500 flex items-center gap-2 pt-2">
                  <i className="ri-shield-check-line text-slate-400" />
                  Your information is secure and won&apos;t be shared with third parties.
                </p>
              </form>
              </>
              )}
            </div>
          </div>

          {/* RIGHT: IMAGE + CONTENT */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Image Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=800"
                alt="Consultation meeting"
                className="w-full h-64 object-cover"
              />

              {/* What to Expect */}
              <div className="px-6 sm:px-8 py-6">
                <h3 className="font-display text-lg font-semibold text-midnight-900 mb-5">
                  What to Expect
                </h3>

                <ul className="space-y-4">
                  {whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white mt-0.5">
                        <i className="ri-check-line text-sm font-bold" />
                      </span>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{item.title}</p>
                        <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border border-slate-100 shadow-card p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <i className={`${feature.icon} text-lg`} />
                    </span>
                    <h4 className="font-semibold text-midnight-900 text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
