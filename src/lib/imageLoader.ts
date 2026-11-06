"use client";

import type { ImageLoaderProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function customImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  // If remote or data URL, return as-is
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }

  // If already starts with basePath, prevent duplication
  if (basePath && src.startsWith(basePath)) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  const params = new URLSearchParams({
    w: String(width),
    q: String(quality || 75),
  });
  return `${basePath}${cleanSrc}?${params.toString()}`;
}
