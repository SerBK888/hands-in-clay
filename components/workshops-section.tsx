"use client";

import Image from "next/image";
import { Clock, Wine, Package, Sparkles, Check, MapPin } from "lucide-react";
import { AnimatedWords } from "@/components/ui/animated-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const workshops = [
  {
    type: "single",
    title: "Single Workshop",
    description:
      "Drop in for a hands-on session — perfect for beginners and curious first-timers. You'll leave with a piece you made yourself.",
    image: "/gallery/wheel-throwing.png",
    duration: "2 hours",
    price: "€40",
    badge: "Most Popular",
    includes: ["Clay", "All tools", "Kiln firing", "A glass of wine 🍷"],
  },
  {
    type: "course",
    title: "6-Session Course",
    description:
      "Commit to the craft. Six guided sessions that take you from first touch of clay to a fully glazed and fired collection of your own work.",
    image: "/gallery/wheel-teaching.png",
    duration: "6 sessions",
    price: "€200",
    badge: "Best Value",
    includes: ["Clay", "All tools", "Kiln firing", "Personal feedback"],
  },
];

const igSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export function WorkshopsSection() {
  return (
    <section id="workshops" className="px-4 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-terracotta/15 text-terracotta border-terracotta/25"
          >
            <Sparkles className="mr-1 h-3 w-3" />
            Workshops
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            <AnimatedWords
              staticText="Learn. Create."
              words={["Fire.", "Glaze.", "Shape.", "Mold.", "Inspire."]}
              interval={2000}
              wordClassName="text-terracotta"
            />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Hands-on sessions led by experienced potters. Clay, tools, and kiln
            firing always included.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {workshops.map((workshop) => (
            <Card
              key={workshop.title}
              className="group overflow-hidden border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-terracotta/30 hover:shadow-lg hover:shadow-terracotta/5"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute bottom-3 left-3 bg-terracotta text-cream">
                  {workshop.badge}
                </Badge>
              </div>

              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="flex items-center gap-2 mb-1">
                  {workshop.type === "single" ? (
                    <Wine className="h-4 w-4 text-terracotta" />
                  ) : (
                    <Package className="h-4 w-4 text-terracotta" />
                  )}
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {workshop.type === "single" ? "Per Workshop" : "Package / Course"}
                  </span>
                </div>
                <CardTitle className="text-lg sm:text-xl">{workshop.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {workshop.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 px-4 sm:px-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-clay shrink-0" />
                  <span>{workshop.duration}</span>
                </div>

                <ul className="mb-5 space-y-2">
                  {workshop.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-terracotta sm:text-3xl">
                    {workshop.price}
                  </span>
                  <a
                    href="https://www.instagram.com/suki_ceramics00/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-terracotta text-cream hover:bg-kiln cursor-pointer"
                    >
                      Reserve Spot
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking notice */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl border border-terracotta/20 bg-terracotta/5 backdrop-blur-sm px-5 py-5 sm:px-6 flex flex-col gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground mb-1">
              Workshops by arrangement
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sessions are scheduled on request. Reach out to Suljo on Instagram
              to agree on a date and time that works for you.
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-terracotta" />
              Mirce, Lovište
            </div>
          </div>
          <a
            href="https://www.instagram.com/suki_ceramics00/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-kiln sm:w-auto sm:self-start"
          >
            {igSvg}
            @suki_ceramics00
          </a>
        </div>
      </div>
    </section>
  );
}
