import { Heart, Dumbbell, MapPin, Film, ChefHat } from 'lucide-react';

const interests = [
  {
    icon: Heart,
    title: 'Healthy Lifestyle',
    description:
      "I love staying active, whether through weightlifting, yoga, hiking, or playing sports whenever I get the chance. Weightlifting is the foundation of my routine and I enjoy the discipline and challenge of progressive training. I also love hiking in Alberta, especially in the Kananaskis and Banff areas.",
  },
  {
    icon: MapPin,
    title: 'Travel',
    description:
      "I love exploring new destinations and experiencing different cultures. Some of my favorite places I've visited are Iceland, Amsterdam, Spain, Poland, South Korea, and the Azores in Portugal.",
  },
  {
    icon: Film,
    title: 'Movies & TV Shows',
    description:
      "I'm a big fan of media and entertainment. I enjoy exploring diverse genres as I'm open to watching anything. Christopher Nolan is unmatched.",
  },
  {
    icon: ChefHat,
    title: 'Baking',
    description:
      "With a lifelong sweet tooth, I was naturally drawn to baking and it quickly became a passion. I love watching my creations come to life and fine-tuning recipes until they're just right. Lately, I've been specializing in cookies and cheesecakes.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-100 mb-12 sm:mb-16">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/50"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2 sm:mb-3">
                      {interest.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
