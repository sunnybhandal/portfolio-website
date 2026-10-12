import { MapPin, PenLine, Search, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Search Optimization',
    description:
      'Built with SEO in mind to improve search visibility, attract more customers, and generate qualified leads.',
    icon: Search,
  },
  {
    title: 'Copywriting',
    description:
      'Clear, confident writing for your homepage, services, and calls to action, so visitors know who you are and what to do next.',
    icon: PenLine,
  },
  {
    title: 'Website Maintenance',
    description:
      'Ongoing updates, content changes, and performance tweaks so your site stays current, fast, and working the way it should.',
    icon: Wrench,
  },
  {
    title: 'Google Business Management',
    description:
      'I set up and refine your Google Business Profile so your business looks professional and shows up in local search.',
    icon: MapPin,
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
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-left text-slate-50 tracking-tight mb-8 sm:mb-10"
        >
          Services
        </h2>

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-12 sm:mb-16">
          <p>
            Every project starts with your business: who you serve, what you
            want the site to do, and how customers should move from first visit
            to getting in touch. I then design and build a custom website that
            looks sharp on desktop and mobile, loads quickly, and is easy to
            navigate.
          </p>
          <p>
            That includes layout, branding, content structure, and launch, so
            you have a site that helps people find you and take the next step.
            I also offer the extras below when you want the rest of your
            presence to feel just as considered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-subheading text-xl sm:text-2xl font-normal text-slate-50 tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
