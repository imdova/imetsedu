import React from "react";
// import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Innovative solutions that bridge technology and creativity,
            delivering exceptional digital products that inspire and empower.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default HeroSection;
