import ImageWithFallback from '@/components/ImageWithFallback';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center justify-center py-24 sm:py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <h2
          id="about-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight mb-12 sm:mb-16"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="order-2 md:order-1 md:col-span-7 space-y-5 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              I&apos;m a web developer and designer with a passion for creating
              digital experiences that are intuitive, engaging, and built with
              the user in mind. I believe great design isn&apos;t just about
              aesthetics, it&apos;s about making every interaction feel
              effortless while helping businesses communicate their message
              clearly and effectively.
            </p>
            <p>
              My background in software development gave me a strong technical
              foundation, while my current role at Symbotic has strengthened my
              focus on user experience. I work closely with customers and
              engineering teams to improve the software that powers autonomous
              robot fleets, translating real-world feedback into intuitive
              solutions that simplify complex workflows and create better
              experiences for the people using them every day.
            </p>
            <p>
              Beyond web development, I enjoy bringing brands to life through
              thoughtful, cohesive design. From business cards and brochures to
              presentations and other marketing materials, I love creating
              visual assets that strengthen a brand&apos;s identity and leave a
              lasting impression. Whether I&apos;m writing compelling copy,
              refining a user journey, or designing a brand asset, my goal is
              always the same: to create work that is purposeful, user-friendly,
              and memorable.
            </p>
          </div>

          <div className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end w-full">
            <div className="relative w-[88%] aspect-square md:w-80 md:h-80 md:aspect-auto lg:w-96 lg:h-96 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0">
              <ImageWithFallback
                src="/aboutImage.png"
                alt="Sunny Bhandal, web developer and designer"
                fill
                sizes="(max-width: 768px) 88vw, 384px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
