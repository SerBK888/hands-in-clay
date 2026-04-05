import { GalleryPageContent } from "@/components/gallery-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Hands in Clay",
  description:
    "Browse our collection of handcrafted pottery, ceramics, and sculptures made in our studio.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
