'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a website cost?',
    answer:
      'Most projects fall between $1,000 and $4,000. Final pricing depends on your goals, content, and the functionality you need. If you have a smaller project or aren’t sure where to start, I’m happy to discuss options.',
  },
  {
    question: 'What’s included in a project?',
    answer:
      'Each project includes custom functionality, responsive design, strategy sessions, brand optimization, and ongoing support. Revisions are available for an additional fee.',
  },
  {
    question: 'Do you build new sites and refresh existing ones?',
    answer:
      'Yes. Whether you’re starting from scratch or refreshing an existing website, I can help define the right approach for your business and audience.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on scope and how quickly content and feedback are available. After an initial conversation, I’ll share a clear estimate so you know what to expect before we begin.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'A short overview of your business, goals, and any examples you like is a great start. From there, we’ll cover content, design preferences, and the features that matter most.',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Fill out the contact form with your name, email, and project details, and I’ll follow up soon to discuss next steps.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 bg-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(34,211,238,0.08),transparent_55%)]"
      />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-10 sm:mb-14">
          FAQ
        </h2>
        <div className="faq-list border-t border-slate-700/50">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <div
                key={faq.question}
                className={`faq-item border-b border-slate-700/50 ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question flex w-full items-center justify-between gap-6 py-5 sm:py-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium text-slate-100 group-hover:text-cyan-300 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="faq-icon h-5 w-5 flex-shrink-0 text-cyan-400"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>
                <div
                  id={answerId}
                  className="faq-answer"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p className="pr-10 sm:pr-14 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                      {faq.answer}
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
