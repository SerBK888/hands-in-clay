"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";

const PotteryShader = dynamic(
  () =>
    import("@/components/ui/pottery-shader").then((mod) => mod.PotteryShader),
  { ssr: false }
);

export function GalleryPageContent() {
  return (
    <>
      <PotteryShader />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-20">
          <GallerySection />
        </main>
        <Footer />
      </div>
    </>
  );
}
