import { ProgramType } from "@/constants/programs";
import Image from "next/image";
import React from "react";

const ProgramCard: React.FC<ProgramType> = ({
  title,
  description,
  duration,
  price,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-2 max-w-[500px] mx-auto">
      <div className="relative">
        <Image
          src={image}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <h3 className="text-2xl font-semibold text-white leading-none tracking-tight">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between text-sm text-gray-800">
          <span>Duration: {duration}</span>
          <span>Price: {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
