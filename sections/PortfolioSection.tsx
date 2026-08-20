import ImageWithFallback from '@/components/ImageWithFallback';

const projects = [
  {
    id: 'featured-website',
    image: '/weddingThumbnail.png',
    imageAlt: 'Custom website homepage designed by Sunny Bhandal',
    href: 'https://weddinghairstylist.netlify.app/',
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="flex items-center justify-center py-24 sm:py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2
          id="portfolio-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight mb-12 sm:mb-16"
        >
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40"
            >
              <div className="w-full bg-slate-950/50 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  width={1448}
                  height={1086}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-7 py-3.5 rounded-full text-center font-medium transition-colors duration-300 bg-cyan-400 text-slate-950 hover:bg-cyan-300 cursor-pointer"
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
