/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const LandingHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sample images - you can replace these URLs with your actual images
  const images = [
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Auto-scroll functionality
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, images.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (isRightSwipe) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }

    // Resume autoplay after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
              alt={`Hero image showcasing our community ${index + 1}`}
              className="w-full h-full object-cover"
              sizes="100vw"
              priority={index === 0}
              quality={85}
            />
            {/* Responsive dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 sm:bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main content container */}
        <div className="relative flex-1 flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-16 sm:pt-20 md:pt-0">
          {/* Navigation dots */}
          <div className="absolute left-4 sm:left-6 md:left-12 lg:left-16 xl:left-24 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentImageIndex
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/75 active:scale-90"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Main text content */}
          <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ml-8 sm:ml-12 md:ml-20 lg:ml-28 xl:ml-32 mb-12">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
              A forum for the exchange of ideas, networking and programmatic
              initiatives.
            </h1>
          </div>

          {/* CTA Buttons - fixed at the bottom, mobile only */}
          <div className="absolute bottom-0 left-0 w-full sm:hidden">
            <div className="flex flex-col w-full">
              <h3 className="bg-slate-700/90 hover:bg-slate-700 text-white py-4 px-6 font-semibold text-center w-full">
                Become a member today
              </h3>
              <h3 className="bg-red-500/90 hover:bg-red-500 text-white py-4 px-6 font-semibold text-center w-full">
                Join and grow with Us
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Hidden on mobile, shown on larger screens */}
        <div className="hidden sm:flex absolute bottom-0 left-0 right-0">
          {/* Member CTA */}
          <div className="flex-1 bg-slate-700/95 backdrop-blur-sm text-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 hover:bg-slate-700 transition-all duration-300 group">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ">
              Become a member today
            </h3>
          </div>

          {/* Join CTA */}
          <div className="flex-1 bg-red-500/95 backdrop-blur-sm text-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 hover:bg-red-500 transition-all duration-300 group">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ">
              Join and grow with Us
            </h3>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-black/20 z-30">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{
            width: `${((currentImageIndex + 1) / images.length) * 100}%`,
          }}
        />
      </div>

      {/* Swipe indicator for mobile - shows briefly on first load */}
      <div className="absolute top-4 right-4 sm:hidden">
        <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          Swipe to explore
        </div>
      </div>

      {/* Autoplay control button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 z-30"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default LandingHeroSection;
