import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const Image = ({ src, alt, ...props }: ImageProps) => {
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  return (
    <img src={`${import.meta.env.BASE_URL}${cleanSrc}`} alt={alt} {...props} />
  );
};
