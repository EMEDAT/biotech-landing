import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnersStrip />
        <AboutSection />
        <PlatformSection />
        <PipelineSection />
        <ProgramsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
