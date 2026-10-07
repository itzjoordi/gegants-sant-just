import type { ImageMetadata } from "astro";
import data from "../components/Data/gegants.json";

export interface Gegant {
  slug: string;
  name: string;
  year: number;
  summary: string;
  history: string;
  builder: string;
  workshop: string;
  image: string;
  alt: string;
  sources: { label: string; url: string }[];
}

export const gegants: Gegant[] = data;

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/gegants/*.webp",
  { eager: true }
);

/** Resolves a giant's image metadata from its filename. */
export function getGegantImage(filename: string): ImageMetadata {
  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  if (!entry) throw new Error(`Giant image not found: ${filename}`);
  return entry[1].default;
}
