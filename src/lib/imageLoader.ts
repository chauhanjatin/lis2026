"use client";

import type { ImageLoaderProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function customImageLoader({ src }: ImageLoaderProps) {
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
    return src;
  }

  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
