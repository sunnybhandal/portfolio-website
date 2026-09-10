'use client';

import { FormEvent, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type FieldErrors = {
  name?: string;
  email?: string;
  details?: string;
};

const fieldClass = (hasError: boolean) =>
  `w-full px-4 py-3.5 rounded-xl bg-white/[0.04] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-colors ${
    hasError
      ? 'border border-red-400 focus:border-red-400 focus:ring-red-400/30'
      : 'border border-white/10 focus:border-cyan-400/40 focus:ring-cyan-400/20'
  }`;

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateFields = () => {
    const next: FieldErrors = {};

    if (!name.trim()) {
      next.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Please enter a valid email.';
    }

    if (!details.trim()) {
      next.details = 'Please add a few details about your project.';
    }

    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateFields();
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

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
      setFieldErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="min-h-screen flex items-center justify-center py-24 sm:py-32 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2
          id="contact-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight mb-12 sm:mb-16 scroll-mt-24 sm:scroll-mt-28"
        >
          Let&apos;s Build Something Great
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Project inquiry"
            className={`order-2 lg:order-1 lg:col-span-6 space-y-6 transition-opacity duration-300 ${
              status === 'submitting' ? 'opacity-80' : ''
            }`}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="subject"
              value="Website Inquiry"
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
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={name}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) {
                    setFieldErrors((current) => ({ ...current, name: undefined }));
                  }
                }}
                className={fieldClass(Boolean(fieldErrors.name))}
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-400">
                  {fieldErrors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) {
                    setFieldErrors((current) => ({ ...current, email: undefined }));
                  }
                }}
                className={fieldClass(Boolean(fieldErrors.email))}
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-400">
                  {fieldErrors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="details"
                className="block text-sm sm:text-base font-medium text-white mb-2"
              >
                Details
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                value={details}
                aria-invalid={Boolean(fieldErrors.details)}
                aria-describedby={fieldErrors.details ? 'details-error' : undefined}
                onChange={(e) => {
                  setDetails(e.target.value);
                  if (fieldErrors.details) {
                    setFieldErrors((current) => ({ ...current, details: undefined }));
                  }
                }}
                placeholder="Tell me what you're looking for, and I'll be in touch."
                className={`${fieldClass(Boolean(fieldErrors.details))} resize-none overflow-y-auto`}
              />
              {fieldErrors.details && (
                <p id="details-error" className="mt-2 text-sm text-red-400">
                  {fieldErrors.details}
                </p>
              )}
            </div>

            {status === 'success' && (
              <p className="text-sm sm:text-base text-cyan-300">
                Thank you. Your message was sent, and I&apos;ll be in touch soon.
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
              className={`inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium transition-all duration-300 bg-cyan-400 text-slate-950 border-2 border-cyan-400 hover:bg-transparent hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-cyan-400 disabled:hover:text-slate-950 ${
                status === 'submitting' ? 'form-submit-busy' : 'active:scale-[0.98]'
              }`}
            >
              {status === 'submitting' && (
                <LoaderCircle
                  className="h-4 w-4 animate-spin"
                  strokeWidth={2.25}
                  aria-hidden
                />
              )}
              {status === 'submitting' ? 'Sending…' : 'Get a Free Quote'}
            </button>
          </form>

          <aside className="order-1 lg:order-2 lg:col-span-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:sticky lg:top-28 w-full">
              <p className="font-subheading text-2xl sm:text-3xl md:text-[2.15rem] font-normal text-slate-100 leading-snug">
                Whether you&apos;re starting from scratch or refreshing an
                existing website, I&apos;d love to hear about your project. Fill
                out the form and I&apos;ll be in touch.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
