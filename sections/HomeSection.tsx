export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-16 sm:py-20 pt-24 sm:pt-28 bg-slate-950"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(ellipse_55%_45%_at_90%_55%,rgba(59,130,246,0.12),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]"
      />

      {/* Soft design frames — side / behind copy */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-18%] top-[12%] h-[42%] w-[70%] max-w-sm sm:right-[-8%] sm:top-[16%] sm:h-[50%] sm:w-[50%] sm:max-w-md md:right-[-4%] md:top-[18%] md:h-[58%] md:w-[42%] md:max-w-xl opacity-50 sm:opacity-70 md:opacity-100 hero-drift-slow">
          <div className="h-full w-full rounded-sm border border-slate-500/20 bg-slate-900/25 backdrop-blur-[1px] shadow-[0_0_60px_-30px_rgba(34,211,238,0.35)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-600/20">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500/30" />
            </div>
            <div className="p-4 sm:p-5 space-y-3 opacity-60">
              <div className="h-2 w-16 rounded-sm bg-cyan-400/35 hero-bar" />
              <div className="h-5 w-3/4 rounded-sm bg-slate-400/25" />
              <div className="h-5 w-1/2 rounded-sm bg-slate-400/15" />
              <div className="mt-4 h-20 sm:h-24 rounded-sm bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-500/10 border border-slate-500/15" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="h-8 sm:h-10 rounded-sm bg-slate-600/20" />
                <div className="h-8 sm:h-10 rounded-sm bg-cyan-400/10" />
                <div className="h-8 sm:h-10 rounded-sm bg-blue-400/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[-16%] bottom-[8%] h-[28%] w-[55%] max-w-[13rem] sm:left-[-6%] sm:bottom-[10%] sm:h-[34%] sm:w-[36%] sm:max-w-xs md:left-[-2%] md:bottom-[12%] md:h-[38%] md:w-[28%] opacity-45 sm:opacity-60 md:opacity-70 hero-drift">
          <div className="h-full w-full rounded-sm border border-slate-500/15 bg-slate-900/20 p-3 sm:p-4 space-y-2.5">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-cyan-300/40" />
              <span className="h-3 w-3 rounded-full bg-slate-200/30" />
              <span className="h-3 w-3 rounded-full bg-blue-400/35" />
            </div>
            <div className="h-2 w-full rounded-sm bg-slate-500/20" />
            <div className="h-2 w-4/5 rounded-sm bg-slate-500/15" />
            <div className="h-12 sm:h-16 rounded-sm bg-gradient-to-t from-slate-700/25 to-transparent border border-slate-600/15" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto w-full max-w-4xl text-center space-y-8 sm:space-y-7 hero-copy">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.05] tracking-tight">
            Websites designed to impress.
            <br />
            <span className="animated-gradient">Built to perform.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Custom websites that blend modern development and intuitive UI/UX, so that businesses can build trust, attract
            customers, and grow online.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 pt-4 sm:pt-2">
            <a
              href="#portfolio"
              className="px-5 sm:px-7 py-3 rounded-sm font-medium text-center transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer whitespace-nowrap"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-7 py-3 rounded-sm font-medium text-center transition-all duration-300 text-slate-200 border-2 border-slate-500/60 hover:border-cyan-400/70 hover:text-cyan-300 cursor-pointer whitespace-nowrap"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
