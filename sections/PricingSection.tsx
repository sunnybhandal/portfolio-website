export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(34,211,238,0.06),transparent_55%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h2
            id="pricing-heading"
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight"
          >
            Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <div className="lg:col-span-7 flex flex-col justify-between gap-10 rounded-xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:p-12">
            <div className="space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Every website is tailored to your business, so the investment
                reflects your goals, content, and the features you need.
                Websites start at $500, and if your project needs more, I&apos;ll
                walk you through every additional cost before we begin, clearly
                and in writing, with no surprises.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                You&apos;ll always know exactly what you&apos;re paying for.
                There are no hidden charges, ever.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                If you have a smaller project or aren&apos;t sure where to start,
                I&apos;d be happy to discuss options. For more details, visit the{' '}
                <a
                  href="#faq"
                  className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
                >
                  Frequently Asked Questions
                </a>{' '}
                section.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-slate-400">
                Starting at
              </p>
              <p className="font-heading text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-none text-slate-50">
                $500
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Transparent pricing, with every extra cost shared up front.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex flex-col justify-center rounded-xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 lg:p-12">
            <h3 className="font-subheading text-3xl sm:text-4xl font-normal text-left text-slate-50 tracking-tight">
              Ready for a consult?
            </h3>
            <p className="mt-4 mb-8 text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell me a little about your project and I&apos;ll follow up with a
              clear, no-pressure conversation.
            </p>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 rounded-xl font-medium text-center transition-colors duration-300 bg-cyan-400 text-slate-950 border-2 border-cyan-400 hover:bg-transparent hover:text-white cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
