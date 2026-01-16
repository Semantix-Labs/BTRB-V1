import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { AudienceGrid } from "@/components/home/AudienceGrid";
import { ContentBlock } from "@/components/home/ContentBlock";
import { NewsWidget } from "@/components/home/NewsWidget";
import { StatsSection } from "@/components/home/StatsSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <StatsSection />

      <IntroductionSection />

      <AudienceGrid />

      <ContentBlock
        title="Certification Pathway"
        description="BTRB certification ensures therapists meet defined academic, ethical, and professional requirements aligned with international standards. Join a community of professionals dedicated to excellence."
        buttonText="Learn About Certification"
        buttonLink="/certification"
        className="bg-white border-t border-gray-100"
      />

      <ContentBlock
        title="Training & Professional Development"
        description="BTRB offers structured training programs, workshops, and continuing professional development opportunities to strengthen behaviour therapy practice in Sri Lanka."
        buttonText="View Training Programs"
        buttonLink="/training"
        className="bg-gray-50"
        align="right"
      />

      <Suspense fallback={<div className="py-20 text-center">Loading news...</div>}>
        <NewsWidget />
      </Suspense>
    </div>
  );
}
