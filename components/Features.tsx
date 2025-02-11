import { FeaturesType } from "@/types";
import React from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

const Features: React.FC<Block<FeaturesType[]>> = ({ data }) => {
  if (!data) return null;
  return (
    <section className="container mx-auto mb-4 flex items-center justify-center px-2 md:px-4 lg:max-w-[1170px]">
      <div>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {data.length > 0 &&
            data.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeatureCard: React.FC<FeaturesType & { index: number }> = ({
  icon,
  description,
  title,
  index,
}) => {
  const LucideIcon = icon
    ? (LucideIcons[
        icon as keyof typeof LucideIcons
      ] as React.ComponentType<LucideProps>)
    : null;
  return (
    <React.Fragment>
      <div className="text-gray-800">
        {LucideIcon && (
          <LucideIcon className="mx-auto mb-2 h-6 w-6 text-gold md:h-8 md:w-8" />
        )}
        <div className="text-center">
          <h3 className="text-xs text-black md:text-base">{title}</h3>
          {description && (
            <p className="mt-1 max-w-xs text-xs text-gray-600 md:max-w-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      {index === 2 && (
        <div className="col-span-3 mx-auto mb-2 mt-3 w-full max-w-60 rounded-full border-0 border-t-2 border-dashed border-gold md:hidden"></div>
      )}
    </React.Fragment>
  );
};
