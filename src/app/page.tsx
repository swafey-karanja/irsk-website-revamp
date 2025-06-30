import AboutSection from "@/sections/AboutSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/HeroSection";
import NewsSection from "@/sections/NewsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
}
