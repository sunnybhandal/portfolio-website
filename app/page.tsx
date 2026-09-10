import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import HomeSection from '@/sections/HomeSection';
import PortfolioSection from '@/sections/PortfolioSection';
import PricingSection from '@/sections/PricingSection';
import ContactSection from '@/sections/ContactSection';
import AboutSection from '@/sections/AboutSection';
import FAQSection from '@/sections/FAQSection';

export default function Home() {
  return (
    <main className="relative">
      <JsonLd />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-xl focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>
      <Navigation />
      <HomeSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
