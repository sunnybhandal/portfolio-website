import { Check } from 'lucide-react';

const includedItems = [
  'Custom Functionality',
  'Revisions (additional fee)',
  'Responsive design',
  'Ongoing support',
  'Strategy sessions',
  'Brand optimization',
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 bg-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_20%,rgba(34,211,238,0.1),transparent_55%),radial-gradient(ellipse_50%_60%_at_90%_80%,rgba(59,130,246,0.08),transparent_50%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
          {/* Investment story */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-700/50">
            <div className="space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Every website is tailored to your business, so pricing depends on
                your goals, content, and functionality.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                If you have a smaller project or aren&apos;t sure where to start,
                I&apos;d be happy to discuss options.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                If you have any questions, please visit the{' '}
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
              <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-slate-400">
                Typical range
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
                <span className="text-slate-100">$1,000</span>
                <span className="text-slate-500 mx-2 sm:mx-3">–</span>
                <span className="text-slate-100">$4,000</span>
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                Most projects fall within this range.
              </p>
            </div>
          </div>

          {/* Includes panel */}
          <div className="lg:col-span-5 relative p-7 sm:p-10 lg:p-12 bg-gradient-to-b from-slate-900/80 to-slate-950/90 border-l-0 lg:border-l-0">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/70 to-blue-500/40 hidden lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-400/70 to-transparent lg:hidden"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-6 sm:mb-8">
              Each project will include
            </h3>
            <ul className="space-y-0 divide-y divide-slate-700/60">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-3.5 sm:py-4 text-sm sm:text-base text-slate-300"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
