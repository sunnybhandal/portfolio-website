'use client';

import { FormEvent, useState } from 'react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');

    try {
      const formData = new FormData(form);
      const body = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          body.append(key, value);
        }
      });

      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setName('');
      setEmail('');
      setDetails('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-100 mb-12 sm:mb-16">
          Let&apos;s Build Something Great
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="order-2 lg:order-1 lg:col-span-6 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="subject"
              value="New portfolio inquiry from sunnybhandal.com"
            />
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out:{' '}
                <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-sm bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-sm bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm sm:text-base font-medium text-slate-300 mb-2"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell me what you're looking for, and I'll be in touch."
                className="w-full px-4 py-3 rounded-sm bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors resize-none overflow-y-auto"
              />
            </div>

            {status === 'success' && (
              <p className="text-sm sm:text-base text-cyan-300">
                Thank you — your message was sent. I&apos;ll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm sm:text-base text-red-300">
                Something went wrong. Please email{' '}
                <a
                  href="mailto:sunnybhandal123@gmail.com"
                  className="underline decoration-red-300/50 hover:text-red-200"
                >
                  sunnybhandal123@gmail.com
                </a>{' '}
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3 rounded-sm font-medium transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending…' : 'Send'}
            </button>
          </form>

          <aside className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-cyan-400/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/40 p-7 sm:p-10 lg:sticky lg:top-28 w-full shadow-[0_0_40px_-20px_rgba(34,211,238,0.35)]">
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/40"
              />
              <p className="w-full pl-3 text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed tracking-tight">
                Whether you&apos;re starting from scratch or refreshing an
                existing website, I&apos;d love to hear about your project. Fill
                out the form and I&apos;ll be in touch soon.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
