"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#A0522D10_0%,_transparent_70%)]" />
      </div>

      <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
        <p className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.3em] text-clay sm:text-sm">
          Handcrafted with soul
        </p>
        <h1 className="animate-fade-in-up-delay text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          The Art
          <br />
          <span className="text-terracotta">of Clay</span>
        </h1>
        <p className="animate-fade-in-up-delay-2 max-w-sm text-base leading-relaxed text-muted-foreground sm:max-w-md sm:text-lg">
          Discover the meditative craft of pottery. Shape, glaze, and fire
          your own creations in our intimate studio workshops.
        </p>
        <div className="animate-fade-in-up-delay-2 mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#workshops"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-kiln"
          >
            Explore Workshops
            <ArrowDown className="h-4 w-4" />
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View Gallery
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
