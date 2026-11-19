const steps = [
  {
    title: 'Tell me about your business',
    description: (
      <>
        Use the{' '}
        <a
          href="#contact"
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
        >
          contact form
        </a>{' '}
        to share what you do, who you serve, and what you need from a website.
      </>
    ),
  },
  {
    title: 'We go over expectations',
    description:
      "I'll reach out so we can talk through goals, timeline, and what the project should include.",
  },
  {
    title: 'We shape every section together',
    description:
      'If we agree to work together, we go through the website section by section so the result fits your vision.',
  },
  {
    title: 'You own the finished website',
    description:
      'Once the website is complete, you have full ownership, from the domain to edits on the site.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_10%,rgba(34,211,238,0.06),transparent_55%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2
          id="services-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight"
        >
          How it Works
        </h2>
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          A straightforward path from your first message to a website you own.
        </p>

        <ol className="mt-12 sm:mt-16 max-w-3xl">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.title} className="relative flex gap-5 sm:gap-7">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[21px] top-12 bottom-0 w-px bg-white/10"
                  />
                )}
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-sm font-medium text-cyan-400">
                  {index + 1}
                </span>
                <div className={`min-w-0 pt-1.5 ${isLast ? '' : 'pb-10 sm:pb-12'}`}>
                  <h3 className="font-subheading text-xl sm:text-2xl font-normal text-slate-50 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
