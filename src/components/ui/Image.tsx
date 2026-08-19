import NextImage, { type ImageProps } from "next/image";

// `alt` is required (not optional like next/image allows) — forces every
// usage to write real alt text or explicitly pass alt="" for decorative images.
type Props = ImageProps & { alt: string };

export function Image({ alt, className, ...props }: Props) {
  return <NextImage alt={alt} className={className} {...props} />;
}
