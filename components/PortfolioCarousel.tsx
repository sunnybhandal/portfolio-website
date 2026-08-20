'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';

type CarouselImage = {
  src: string;
  alt: string;
  compactOnDesktop?: boolean;
};

export default function PortfolioCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const current = images[index];

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + total) % total);
  };

  return (
    <div className="relative w-full bg-slate-950/80">
      <div className="relative aspect-[4/5] md:aspect-[16/10] w-full">
        <ImageWithFallback
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={
            current.compactOnDesktop
              ? 'object-contain p-2 md:px-12 md:py-4 lg:px-20'
              : 'object-contain p-2 sm:p-3'
          }
        />
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-950/70 text-slate-100 border border-white/15 hover:bg-slate-950/90 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-950/70 text-slate-100 border border-white/15 hover:bg-slate-950/90 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <p
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-slate-950/75 px-3 py-1 text-xs sm:text-sm font-medium tracking-wide text-slate-100 border border-white/10"
            aria-live="polite"
          >
            {index + 1}/{total}
          </p>
        </>
      )}
    </div>
  );
}
