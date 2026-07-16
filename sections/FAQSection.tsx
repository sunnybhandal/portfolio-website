'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'Most projects fall between $1,000 and $4,000. Final pricing depends on your goals, content, and the functionality you need. If you have a smaller project or aren’t sure where to start, I’m happy to discuss options.',
  },
  {
    question: 'What’s included in a project?',
    answer:
      'Each project includes custom functionality, responsive design, strategy sessions, brand optimization, and ongoing support. Revisions are available for an additional fee but highly depend on the amount of work required.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary based on scope and how quickly content and feedback are available. After an initial conversation, I’ll share a clear estimate so you know what to expect before we begin. It should take about a week for me to provide you with an initial draft that we can have a discussion about and then make adjustments from there.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'A short overview of your business, goals, and any examples you like is a great start. From there, we’ll cover content, design preferences, and the features that matter most.',
  },
  {
    question: 'Can you help with more than just websites?',
    answer:
      'Absolutely. While websites are my primary focus, I also design a wide range of marketing and branding materials. Whether you need business cards, brochures, presentations, social media graphics, images, videos, or other branded content, I can help create a cohesive visual identity across all of your marketing materials.',
  },
  {
    question: 'Do you write website copy?',
    answer:
      'Yes. Clear, compelling messaging is just as important as great design. I can help write or refine your website copy to ensure it communicates your brand effectively and encourages visitors to take action.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer:
      'Yes. Every website I build is fully responsive and optimized to provide a seamless experience across desktops, tablets, and smartphones.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. If your current website feels outdated, difficult to navigate, or no longer reflects your brand, I can redesign it with a modern look, improved user experience, and better performance.',
  },
  {
    question: 'What types of websites do you build?',
    answer:
      'I design and develop custom websites for businesses, professionals, and personal brands. Whether you need a portfolio, business website, landing page, or a complete redesign, every website is built to be responsive, user-friendly, and tailored to your goals.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer:
      'Yes. I can help with ongoing updates, content changes, performance improvements, and general maintenance to keep your website running smoothly.',
  },
  {
    question: 'How do I get in touch?',
    answer: (
      <>
        Fill out the{' '}
        <a
          href="#contact"
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
        >
          contact form
        </a>{' '}
        with your name, email, and project details, and I’ll follow up soon to
        discuss next steps.
      </>
    ),
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
          Frequently Asked Questions
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
