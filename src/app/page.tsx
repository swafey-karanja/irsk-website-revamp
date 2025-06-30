import AboutSection from "@/sections/AboutSection";
import FAQSection from "@/sections/FAQSection";
import LandingHeroSection from "@/sections/LandingHeroSection";
import NewsSection from "@/sections/NewsSection";

export default function Home() {
  return (
    <div>
      <LandingHeroSection />
      <NewsSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
}
