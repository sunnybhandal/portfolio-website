import Navigation from '@/components/Navigation';
import HomeSection from '@/sections/HomeSection';
import AboutSection from '@/sections/AboutSection';
import ExperienceSection from '@/sections/ExperienceSection';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
