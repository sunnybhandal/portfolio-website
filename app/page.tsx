import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeSection from '@/sections/HomeSection';
import PortfolioSection from '@/sections/PortfolioSection';
import PricingSection from '@/sections/PricingSection';
import ContactSection from '@/sections/ContactSection';
import AboutSection from '@/sections/AboutSection';
import FAQSection from '@/sections/FAQSection';

export default function Home() {
  return (
    <main className="relative">
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
