"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col lg:flex-row border-b-8 sm:border-b-12 border-gray-600/40">
      {/* Left Section - About Content */}
      <div className="w-full lg:w-1/2 bg-red-500 text-white flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 relative order-1 lg:order-1">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-orange-400"></div>

        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 w-full">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 leading-tight">
            About our foundation
          </h2>

          {/* Decorative underline */}
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-white bg-opacity-60 mb-6 sm:mb-8 md:mb-12"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Who we are section */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                Who we are
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed text-sm sm:text-base lg:text-base">
                The International Relations Society of Kenya (IRSK) serves as a
                forum for exchanging ideas, networking and programmatic
                initiatives among those involved in the study, teaching and
                practice of international relations and diplomacy.
              </p>
            </div>

            {/* Our history section */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                Our history
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed text-sm sm:text-base lg:text-base">
                The International Relations Society of Kenya (IRSK) was
                established to unite professionals, scholars and students in the
                fields of diplomacy and global affairs. It serves as a
                non-partisan forum for dialogue, research and
                networking—host­ing annual conferences and policy
                discussions—while nurturing a new generation of globally minded
                leaders in Kenya.
              </p>
            </div>
          </div>

          {/* Read more button */}
          <div className="flex justify-start">
            <Link
              href="/about"
              className="bg-blue-600/80 hover:bg-blue-600 active:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-300 inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transform hover:scale-105 active:scale-95"
            >
              <span>Read more</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - World Map */}
      <div className="w-full lg:w-1/2 bg-teal-800 relative overflow-hidden order-2 lg:order-2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-auto">
        {/* World Map Image */}
        <div className="absolute inset-0 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="relative w-full h-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none">
            <Image
              src="/world-map.png"
              alt="World map showing our global reach"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Content overlay on the image */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 px-4">
          <button className="bg-blue-600/80 hover:bg-blue-600 active:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-medium transition-all duration-300 inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transform hover:scale-105 active:scale-95 whitespace-nowrap">
            <span className="hidden sm:inline">Our Global Community</span>
            <span className="sm:hidden">Global Community</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* Optional: Add a subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default AboutSection;
