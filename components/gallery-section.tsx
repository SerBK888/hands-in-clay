"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  { src: "/gallery/wheel-throwing.png", alt: "Wheel throwing in the studio", mdSpan: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/glazed-bowls.png", alt: "Hand-glazed ceramic bowls", mdSpan: "" },
  { src: "/gallery/striped-vase.png", alt: "Striped turquoise vase", mdSpan: "" },
  { src: "/gallery/dinner-set.png", alt: "Complete handmade dinner set", mdSpan: "md:col-span-2" },
  { src: "/gallery/flower-bowl.png", alt: "Decorative flower bowl", mdSpan: "" },
  { src: "/gallery/textured-bowl.png", alt: "Diamond-textured bowl", mdSpan: "" },
  { src: "/gallery/turquoise-basin.png", alt: "Large turquoise ceramic basin", mdSpan: "md:col-span-2" },
  { src: "/gallery/sun-bowls.png", alt: "Sun-painted bowls", mdSpan: "" },
  { src: "/gallery/wheel-teaching.png", alt: "Pottery wheel teaching session", mdSpan: "" },
  { src: "/gallery/ceramic-fish.png", alt: "Ceramic fish on driftwood", mdSpan: "" },
  { src: "/gallery/botanical-board.png", alt: "Botanical ceramic cutting board", mdSpan: "" },
  { src: "/gallery/hand-building.png", alt: "Artist hand-building clay pieces", mdSpan: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/mosaic-tiles.png", alt: "Colorful ceramic mosaic tiles", mdSpan: "" },
  { src: "/gallery/flower-vase.png", alt: "Minimalist flower vase with wildflowers", mdSpan: "" },
  { src: "/gallery/raw-vase.png", alt: "Raw clay vase before firing", mdSpan: "" },
  { src: "/gallery/dinner-set-closeup.png", alt: "Dinner set close-up detail", mdSpan: "" },
  { src: "/gallery/sculpting-work.png", alt: "Artist sculpting at the workbench", mdSpan: "md:col-span-2" },
  { src: "/gallery/sculpture-abstract.png", alt: "Abstract clay sculpture", mdSpan: "" },
  { src: "/gallery/wall-vase.png", alt: "Decorative wall-mounted vase", mdSpan: "" },
  { src: "/gallery/turquoise-bowl-top.png", alt: "Turquoise bowl seen from above", mdSpan: "" },
  { src: "/gallery/driftwood-boat.png", alt: "Handmade driftwood sailboat", mdSpan: "" },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i === null ? 0 : i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () =>
    setLightbox((i) => (i === null ? 0 : i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-terracotta/15 text-terracotta border-terracotta/25"
          >
            Gallery
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From Our <span className="text-terracotta">Studio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Every piece tells a story — shaped by hand, glazed with care, and
            fired with intention.
          </p>
        </div>

        {/* Mobile: 2-col uniform grid. Desktop: masonry spans */}
        <div className="grid grid-cols-2 gap-2 auto-rows-[180px] sm:auto-rows-[220px] md:grid-cols-4 md:auto-rows-[280px] md:gap-3">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${img.mdSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              <span className="absolute bottom-2 left-2 right-2 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 drop-shadow-lg sm:bottom-3 sm:left-3 sm:text-sm">
                {img.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative w-full flex-1 flex items-center justify-center px-14 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              width={1200}
              height={900}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
            />
          </div>

          {/* Caption + nav row pinned to bottom */}
          <div
            className="w-full flex items-center justify-between gap-4 px-4 pb-6 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prev}
              className="rounded-full bg-white/10 p-3 text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <p className="text-center text-xs text-white/50 sm:text-sm">
              {galleryImages[lightbox].alt}
              <span className="ml-2 text-white/30">
                {lightbox + 1} / {galleryImages.length}
              </span>
            </p>

            <button
              onClick={next}
              className="rounded-full bg-white/10 p-3 text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
