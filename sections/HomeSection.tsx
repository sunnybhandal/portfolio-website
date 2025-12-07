import ImageWithFallback from '@/components/ImageWithFallback';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 pt-24 sm:pt-28 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-slate-700/50">
              <ImageWithFallback
                src="/deuces.svg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Summary Content */}
          <div className="space-y-4 sm:space-y-6 text-left order-1 md:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              <div>Hi, I'm</div>
              <div className="animated-gradient">
                Sunny Bhandal
              </div>
            </h1>
            <p className="text-lg sm:text-xl text-violet-400 font-medium">
              Lead Solutions Engineer @{' '}
              <a
                href="https://ir.symbotic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors underline decoration-green-400/50 hover:decoration-green-300 cursor-pointer"
              >
                Symbotic
              </a>
            </p>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                As a Solutions Engineer, I specialize in orchestrating the
                end-to-end customer journey, delivering a seamless user experience
                that fosters client satisfaction and loyalty. I excel at
                cultivating strong, trusting relationships with clients, ensuring
                their confidence in our company and its solutions.
              </p>
              <p>
                I love designing applications that are not only functional but also
                elevate the user experience.
              </p>
              <p className="italic text-slate-400">
                "If you are not willing to learn, no one can help you. If you are
                determined to learn, no one can stop you."—Zig Ziglar.
              </p>
            </div>
            <div className="flex flex-row gap-4 pt-4">
              <a
                href="#about"
                className="group px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 bg-violet-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-violet-400 hover:border-violet-400 cursor-pointer"
              >
                Learn More
              </a>
              <a
                href="https://www.linkedin.com/in/sunnybhandal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
