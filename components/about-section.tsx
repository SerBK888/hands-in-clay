import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">

          <div className="relative flex-shrink-0 flex items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full bg-terracotta/25 blur-3xl sm:h-64 sm:w-64" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-terracotta/40 ring-4 ring-terracotta/10 sm:h-64 sm:w-64">
              <Image
                src="/suljo.png"
                alt="Suljo — pottery artist and founder"
                width={256}
                height={256}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <Badge
              variant="secondary"
              className="mb-4 w-fit mx-auto md:mx-0 bg-terracotta/15 text-terracotta border-terracotta/25"
            >
              About Me
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Hi, I&apos;m <span className="text-terracotta">Suljo</span>.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My passion for ceramics began seven years ago, and it has been a
              journey of constant discovery ever since. Most of my spare time is
              spent in my workshop — a space where I can experiment, play with
              new techniques, and continuously learn the nuances of the craft.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              What fascinates me most is the complete transformation of raw
              materials. There is something incredibly rewarding about starting
              with nothing but an idea and a lump of clay and ending up with a
              functional piece — whether it&apos;s a basin, a vase, or a plate.
            </p>

            <blockquote className="mt-5 border-l-2 border-terracotta pl-4 italic text-sm text-foreground/80 sm:text-base">
              From ideas to real products: that process of creation is exactly
              why I love what I do.
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
