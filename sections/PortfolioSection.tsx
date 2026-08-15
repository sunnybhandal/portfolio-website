import ImageWithFallback from '@/components/ImageWithFallback';

const projects = [
  {
    id: 'bridal-hair-artistry',
    image: '/weddingThumbnail.png',
    imageAlt: 'Bridal and wedding hairstyling website homepage',
    href: 'https://weddinghairstylist.netlify.app/',
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="flex items-center justify-center py-16 sm:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-100 mb-12 sm:mb-16">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-sm border border-slate-600/40 bg-slate-900/60 shadow-lg shadow-black/20"
            >
              <div className="w-full bg-slate-950/50">
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  width={1448}
                  height={1086}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-slate-700/50">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-7 py-3 rounded-sm text-center font-medium transition-all duration-300 bg-cyan-400 text-slate-900 border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 cursor-pointer"
                >
                  View Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
