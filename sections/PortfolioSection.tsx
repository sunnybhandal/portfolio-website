import ImageWithFallback from '@/components/ImageWithFallback';

const projects = [
  {
    id: 'trail-waste',
    href: 'https://trailwastedisposal.netlify.app/',
    image: {
      src: '/trailWasteMobileThumbnail.png',
      alt: 'Mobile view of a custom website homepage designed by Sunny Bhandal',
    },
  },
  {
    id: 'featured-website',
    href: 'https://weddinghairstylist.netlify.app/',
    image: {
      src: '/mobileWeddingThumbnail.png',
      alt: 'Mobile view of a custom website homepage designed by Sunny Bhandal',
    },
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center md:justify-items-stretch">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex w-full max-w-[17.5rem] md:max-w-none flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-950/40"
            >
              <div className="relative w-full overflow-hidden bg-slate-950/80 aspect-[338/525]">
                <ImageWithFallback
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain"
                />
              </div>
              <div className="p-4 md:p-3.5">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 md:px-4 md:py-2.5 rounded-xl text-center text-sm font-medium transition-colors duration-300 bg-cyan-400 text-slate-950 border-2 border-cyan-400 hover:bg-transparent hover:text-white cursor-pointer"
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
