"use client";

import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative h-[70vh] flex border-b-12 border-gray-600/40">
      {/* Left Section - About Content */}
      <div className="w-full lg:w-1/2 bg-red-500 text-white flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 relative">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-orange-400"></div>

        <div className="relative z-10">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            About our foundation
          </h2>

          {/* Decorative underline */}
          <div className="w-20 h-1 bg-white bg-opacity-60 mb-12"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Who we are section */}
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-4">
                Who we are
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Lorem ipsum dolor. Ut enim
                ad minim veniam.
              </p>
            </div>

            {/* Our history section */}
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-4">
                Our history
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed text-sm md:text-base">
                Duis consectetur tempor purus, eget tristique orci gravida ut.
                Quisque malesuada neque et urna commodo cursus. In ut risus
                tortor. Suspendisse viverra, nunc id. Phasellus efficitur odio
                vel urna euismod feugiat.
              </p>
            </div>
          </div>

          {/* Read more button */}
          <button className="bg-blue-600/80 hover:bg-blue-600 text-white px-8 py-3 rounded font-medium transition-colors duration-300 inline-flex items-center">
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section - Conference Image */}
      <div className="w-full lg:w-1/2 bg-teal-800 relative overflow-hidden">
        {/* Conference Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/world-map.png"
            alt="World map"
            width={800}
            height={650}
            className="object-contain"
          />
          {/* Dark overlay for better contrast */}
          {/* <div className="absolute inset-0 bg-teal-900 opacity-60 z-10"></div> */}
        </div>

        {/* Content overlay on the image */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button className="bg-blue-600/80 hover:bg-blue-600 text-white px-8 py-3 rounded font-medium transition-colors duration-300 inline-flex items-center">
            Our Global Community
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
