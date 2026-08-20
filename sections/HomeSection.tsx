export default function HomeSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden py-24 sm:py-28 pt-28 sm:pt-32 bg-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,211,238,0.08),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl text-center space-y-8 sm:space-y-9 hero-copy">
          <h1
            id="hero-heading"
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-center text-slate-50 leading-[1.08] tracking-tight"
          >
            <span className="sr-only">Sunny Bhandal. </span>
            Websites designed to impress.
            <br />
            <span className="text-cyan-400 italic">Built to perform.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Custom websites designed for desktop and mobile, built to help businesses earn trust, attract customers, and grow online.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 sm:pt-3 w-full">
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-center transition-colors duration-300 bg-cyan-400 text-slate-950 hover:bg-cyan-300 cursor-pointer whitespace-nowrap"
            >
              Free Quote
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-center transition-colors duration-300 text-slate-200 border border-white/15 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-white/[0.03] cursor-pointer whitespace-nowrap"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
