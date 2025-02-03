import { featuresData } from "@/constants/fearures";
import React from "react";

const Features = () => {
  return (
    <section className="container lg:max-w-[1170px] mx-auto px-2 md:px-4 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="p-2 md:p-6 border border-gray-100 bg-white shadow rounded-lg"
          >
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-start gap-2">
              {React.createElement(feature.icon, {
                className: "h-6 w-6 text-primary",
              })}
              <div >
                <h3 className="text-sm md:text-base font-semibold mb-1 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm line-clamp-1 max-w-4/5 text-center mx-auto md:text-left ">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
