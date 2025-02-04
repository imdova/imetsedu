import { featuresData } from "@/constants/fearures";
import React from "react";

const Features = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-2 md:px-4 mb-4">
      <div className="grid grid-cols-3 md:grid-cols-6">
        {featuresData.slice(0, 3).map((feature, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center md:items-start  text-gray-800">
              <div className="p-3 bg-primary/10 rounded-xl">
                {React.createElement(feature.icon, {
                  className: "h-8 w-8 text-gold",
                })}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-sm md:text-base text-black">
                  {feature.title}
                </h3>
                {/* <p className="text-sm md:text-base text-gray-600 mt-1 max-w-xs md:max-w-sm">
                  {feature.description}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t-2 max-w-60 mx-auto border-0 border-gold border-dashed rounded-full my-4"></div>

      <div className="grid grid-cols-3 md:grid-cols-6">
        {featuresData.slice(3, 6).map((feature, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center md:items-start text-gray-800">
              <div className="p-3 bg-primary/10 rounded-xl">
                {React.createElement(feature.icon, {
                  className: "h-8 w-8 text-gold",
                })}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-sm md:text-base text-black">
                  {feature.title}
                </h3>
                {/* <p className="text-sm md:text-base text-gray-600 mt-1 max-w-xs md:max-w-sm">
                  {feature.description}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
