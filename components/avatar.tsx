"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const Avatar: React.FC<ImageProps & { imagePlaceholder?: string }> = ({
  src,
  alt,
  imagePlaceholder = "/placeholder-avatar.svg",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc || imagePlaceholder}
      onError={() => setImgSrc(imagePlaceholder)}
      alt={alt || "Avatar"}
      {...props}
    />
  );
};

export default Avatar;
