import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SpecializationsSection } from "@/components/sections/SpecializationsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

/**
 * أكاديمية إبصار — الصفحة الرئيسية
 * Landing page combining all sections with dark Egyptian heritage theme.
 *
 * TODO:
 * - [ ] Add FAQ section
 * - [ ] Add "Platform Features" showcase section
 * - [ ] Integrate real teacher data from database
 * - [ ] Add cookie consent banner
 * - [ ] Integrate analytics (Google Analytics / Plausible)
 */
export default function HomePage() {
  return (
    <main id="main-content">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 btn btn-gold"
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      <Navbar />

      <HeroSection />
      <SpecializationsSection />
      <HowItWorksSection />
      <TeachersSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />

      <Footer />
    </main>
  );
}
