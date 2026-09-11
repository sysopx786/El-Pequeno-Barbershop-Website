import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a public path with Vite's `base` (needed on GitHub Pages). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${path.replace(/^\//, "")}`;
}
