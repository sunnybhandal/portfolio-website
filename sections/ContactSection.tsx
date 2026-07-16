'use client';

import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            onSubmit={handleSubmit}
            className="lg:col-span-6 space-y-6"
          >
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
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-sm font-medium transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
            >
              Send
            </button>
          </form>

          <aside className="lg:col-span-6">
            <div className="rounded-sm border border-slate-700/50 bg-slate-900/50 p-6 sm:p-8 lg:sticky lg:top-28 w-full">
              <p className="w-full text-base sm:text-lg text-slate-300 leading-relaxed">
                You can send me an email at{' '}
                <a
                  href="mailto:sunnybhandal123@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
                >
                  sunnybhandal123@gmail.com
                </a>{' '}
                or fill out the form.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
