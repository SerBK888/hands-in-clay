"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

const PotteryShader = dynamic(
  () =>
    import("@/components/ui/pottery-shader").then((mod) => mod.PotteryShader),
  { ssr: false }
);

export function PotteryHome() {
  return (
    <>
      <PotteryShader />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkshopsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
