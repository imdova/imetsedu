import { ProgramType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

const ProgramCard: React.FC<ProgramType> = ({
  title,
  description,
  duration,
  price,
  image,
  overImageText,
  link,
  features,
}) => {
  return (
    <div className="m-2 max-w-[500px] overflow-hidden rounded-3xl bg-white shadow-simple md:mx-auto">
      <div className="relative">
        <Image
          src={image || ""}
          width={300}
          height={300}
          className="h-48 w-full bg-gold object-cover"
          alt={title}
        />
        {overImageText && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
              {overImageText}
            </h3>
          </div>
        )}
      </div>
      <div className="p-4">
        {link ? (
          <Link
            href={link}
            className="focus-visible:ring-secondary-500 text-xl font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            {title}
          </Link>
        ) : (
          <h3 className="text-xl font-semibold">{title}</h3>
        )}
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((item, index) => {
              const LucideIcon =
                item.icon &&
                (LucideIcons[
                  item.icon as keyof typeof LucideIcons
                ] as React.ComponentType<LucideProps>);
              return (
                <div key={index} className="flex items-center">
                  {LucideIcon && <LucideIcon className="h-4 w-4 text-gold" />}
                  <p className="text-xs text-gray-600">{item.title}</p>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex justify-between text-sm text-gray-800">
          <span>Duration: {duration}</span>
          {price && <span>Price: {price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
