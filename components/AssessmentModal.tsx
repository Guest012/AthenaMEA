'use client';

import { useState, useEffect } from 'react';

interface AssessmentModalProps {
  open: boolean;
  onClose: () => void;
}

const QUESTIONS = [
  {
    id: 'stage',
    label: 'Where are you in your expansion journey?',
    options: [
      { value: 'exploring', label: 'Exploring — researching potential markets', score: 1 },
      { value: 'planning', label: 'Planning — identified target market, building strategy', score: 2 },
      { value: 'entering', label: 'Entering — actively setting up operations', score: 3 },
      { value: 'scaling', label: 'Scaling — already present, looking to grow', score: 4 },
    ],
  },
  {
    id: 'market',
    label: 'Which market are you targeting?',
    options: [
      { value: 'india', label: 'India', score: 3 },
      { value: 'middle-east', label: 'Middle East (GCC)', score: 3 },
      { value: 'both', label: 'Both India & Middle East', score: 4 },
      { value: 'unsure', label: 'Not sure yet — need guidance', score: 1 },
    ],
  },
  {
    id: 'team',
    label: 'Do you have local team members or partners in the target market?',
    options: [
      { value: 'none', label: 'No — starting from scratch', score: 1 },
      { value: 'few', label: 'A few contacts or freelancers', score: 2 },
      { value: 'partner', label: 'A local partner or distributor', score: 3 },
      { value: 'team', label: 'An existing team on the ground', score: 4 },
    ],
  },
  {
    id: 'timeline',
    label: 'What is your target timeline for market entry?',
    options: [
      { value: 'asap', label: 'Within 3 months', score: 4 },
      { value: 'mid', label: '3 – 6 months', score: 3 },
      { value: 'long', label: '6 – 12 months', score: 2 },
      { value: 'flexible', label: 'No fixed timeline', score: 1 },
    ],
  },
  {
    id: 'challenge',
    label: 'What is your biggest challenge right now?',
    options: [
      { value: 'regulatory', label: 'Understanding regulations & compliance', score: 2 },
      { value: 'talent', label: 'Finding the right local talent & leadership', score: 3 },
      { value: 'strategy', label: 'Building a go-to-market strategy', score: 2 },
      { value: 'compensation', label: 'Compensation benchmarking & structuring', score: 3 },
    ],
  },
];

function getReadinessLevel(score: number): { label: string; color: string; message: string } {
  if (score >= 16)
    return {
      label: 'High Readiness',
      color: 'text-emerald-600',
      message: 'You\'re well-positioned for market entry. A strategy session can help you accelerate your timeline and avoid common pitfalls.',
    };
  if (score >= 11)
    return {
      label: 'Moderate Readiness',
      color: 'text-amber-600',
      message: 'You have a solid foundation but some key areas need attention. Our experts can help you fill the gaps and build a stronger entry plan.',
    };
  return {
    label: 'Early Stage',
    color: 'text-blue-600',
    message: 'You\'re at the beginning of your journey — that\'s a great place to start right. A guided assessment can save you months of missteps.',
  };
}

const WEB3FORMS_KEY = '44a8a86e-c071-455a-8fc8-9d6ea7a872e9';

export default function AssessmentModal({ open, onClose }: AssessmentModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Reset on open
  useEffect(() => {
    if (open) {
      setStep(0);
      setAnswers({});
      setShowResults(false);
    }
  }, [open]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const currentQ = QUESTIONS[step];

  const computeScore = (ans: Record<string, string>) =>
    Object.entries(ans).reduce((acc, [qId, val]) => {
      const q = QUESTIONS.find((q) => q.id === qId);
      const opt = q?.options.find((o) => o.value === val);
      return acc + (opt?.score || 0);
    }, 0);

  const totalScore = computeScore(answers);
  const readiness = getReadinessLevel(totalScore);
  const progress = showResults ? 100 : ((step) / QUESTIONS.length) * 100;

  /* ── Submit assessment results to Web3Forms ── */
  const submitAssessment = async (finalAnswers: Record<string, string>) => {
    const score = computeScore(finalAnswers);
    const level = getReadinessLevel(score);

    // Build human-readable answers
    const readableAnswers: Record<string, string> = {};
    QUESTIONS.forEach((q) => {
      const selectedOpt = q.options.find((o) => o.value === finalAnswers[q.id]);
      readableAnswers[q.label] = selectedOpt?.label || '—';
    });

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Market Readiness Assessment — Score: ${score}/20 (${level.label})`,
          from_name: 'ATHENA MEA Website',
          'Form Type': 'Market Readiness Assessment',
          'Readiness Score': `${score} / 20`,
          'Readiness Level': level.label,
          ...readableAnswers,
          'Submitted At': new Date().toISOString(),
        }),
      });
    } catch {
      // Silent fail — assessment result is still shown to user
    }
  };

  const selectAnswer = (value: string) => {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
        submitAssessment(updated);
      }, 400);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-[modalIn_0.35s_ease-out]">
        {/* Progress bar */}
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <i className="ri-close-line text-lg text-slate-500" />
        </button>

        {!showResults ? (
          /* ── Question View ── */
          <div className="p-8 lg:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 mb-4">
                <i className="ri-pulse-line" />
                Market Readiness Assessment
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Question {step + 1} of {QUESTIONS.length}
              </p>
            </div>

            {/* Question */}
            <h3 className="font-display text-xl lg:text-2xl font-bold text-midnight-900 mb-6">
              {currentQ.label}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => selectAnswer(opt.value)}
                    className={[
                      'w-full text-left rounded-xl border-2 p-4 transition-all duration-200',
                      isSelected
                        ? 'border-brand-400 bg-brand-50 shadow-sm'
                        : 'border-slate-100 bg-white hover:border-brand-200 hover:bg-slate-50',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          'h-5 w-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all',
                          isSelected ? 'border-brand-400 bg-brand-400' : 'border-slate-300',
                        ].join(' ')}
                      >
                        {isSelected && (
                          <i className="ri-check-line text-xs text-white" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${isSelected ? 'text-brand-800' : 'text-slate-700'}`}>
                        {opt.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Back button */}
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 text-sm text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors"
              >
                <i className="ri-arrow-left-s-line" /> Previous question
              </button>
            )}
          </div>
        ) : (
          /* ── Results View ── */
          <div className="p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 mb-4">
                <i className="ri-bar-chart-grouped-line text-3xl text-brand-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-midnight-900 mb-2">
                Your Market Readiness Score
              </h3>

              {/* Score ring */}
              <div className="relative inline-flex items-center justify-center my-4">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(totalScore / 20) * 327} 327`}
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F8B830" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-3xl font-bold text-midnight-900">{totalScore}</span>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">/ 20</span>
                </div>
              </div>

              <p className={`font-display text-lg font-bold ${readiness.color} mb-2`}>
                {readiness.label}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                {readiness.message}
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className="w-full inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-4 text-midnight-900 font-semibold shadow-lg shadow-brand-400/30 hover:from-brand-300 hover:to-brand-400 transition-all duration-300"
              >
                <i className="ri-calendar-line text-lg" />
                Book a Free Strategy Call
              </button>
              <button
                onClick={onClose}
                className="w-full text-sm text-slate-500 hover:text-slate-700 font-medium py-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
