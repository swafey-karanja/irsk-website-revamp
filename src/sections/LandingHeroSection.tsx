"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const LandingHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - you can replace these URLs with your actual images
  const images = [
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "translate-y-0"
                : index < currentImageIndex
                ? "-translate-y-full"
                : "translate-y-full"
            }`}
          >
            <Image
              fill
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex">
        {/* Left side - Main content */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          {/* Navigation dots */}
          <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>

          {/* Main text content */}
          <div className="max-w-3xl ml-30">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              A forum for the exchange of ideas,networking and programmatic
              initiatives.
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-0 left-0 right-0 flex">
        {/* Volunteer CTA */}
        <div className="flex-1 bg-slate-700 text-white py-8 px-8 md:px-16 lg:px-24 hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Become a member today
          </h3>
        </div>

        {/* Donate CTA */}
        <div className="flex-1 bg-red-500 text-white py-8 px-8 md:px-16 lg:px-24 hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Join and grow with Us
          </h3>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((currentImageIndex + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default LandingHeroSection;
