"use client";
import Image, { ImageProps } from "next/image";

interface FlagProps extends Omit<ImageProps, "src" | "alt"> {
  code: string;
  name: string;
}
const Flag: React.FC<FlagProps> = ({
  code,
  name,
  width = 16,
  height = 12,
  className = "inline object-contain",
  ...props // Collect remaining props without src
}) => {
  return (
    <Image
      src={`https://flagcdn.com/${code}.svg`}
      alt={name || "flag"}
      width={width}
      height={height}
      className={className}
      {...props} // Pass remaining props to the Image component
    />
  );
};

export default Flag;
