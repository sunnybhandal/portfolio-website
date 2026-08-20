'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/site';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 bg-slate-950"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2
          id="faq-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight mb-12 sm:mb-16"
        >
          Frequently Asked Questions
        </h2>
        <div className="faq-list border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;
            const questionId = `faq-question-${index + 1}`;

            return (
              <div
                key={faq.question}
                className={`faq-item border-b border-white/10 ${isOpen ? 'open' : ''}`}
              >
                <h3 id={questionId} className="m-0">
                  <button
                    type="button"
                    className="faq-question flex w-full items-center justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 ${
                        isOpen
                          ? 'text-cyan-400'
                          : 'text-white group-hover:text-cyan-300'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="faq-icon h-5 w-5 flex-shrink-0 text-cyan-400"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={answerId}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={questionId}
                >
                  <div className="faq-answer-inner">
                    <p className="pr-10 sm:pr-14 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                      {faq.question === 'How do I get in touch?' ? (
                        <>
                          Fill out the{' '}
                          <a
                            href="#contact"
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
                          >
                            contact form
                          </a>{' '}
                          with your name, email, and project details, and I&apos;ll
                          follow up soon to discuss next steps.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
