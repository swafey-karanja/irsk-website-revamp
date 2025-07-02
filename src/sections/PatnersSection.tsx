/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

const PartnersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [partnersPerView, setPartnersPerView] = useState(4);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const partners: Partner[] = [
    {
      id: "1",
      name: "International Project Management Association (IPMA)",
      logo: "/logos/partner-1b.jpg",
      description: "Global federation of project management associations",
      website: "https://ipma.world",
    },
    {
      id: "2",
      name: "Association of Professional Societies in East Africa (APSEA)",
      logo: "/logos/partner3.jpg",
      description: "Professional development organization for East Africa",
      website: "https://apsea.net",
    },
    {
      id: "3",
      name: "The Joint Building and Construction Council",
      logo: "/logos/partner4.jpg",
      description: "Construction industry standards and practices",
      website: "https://jbcc.co.za",
    },
    {
      id: "4",
      name: "Africa Association of Quantity Surveyors (AAQS)",
      logo: "/logos/partner7.jpg",
      description: "Professional quantity surveying body for Africa",
      website: "https://aaqs.org",
    },
    {
      id: "5",
      name: "International Cost Engineering Council (ICEC)",
      logo: "/logos/partner8.jpg",
      description: "Global authority on cost engineering and management",
      website: "https://icoste.org",
    },
    {
      id: "6",
      name: "International Cost Engineering Council (ICEC)",
      logo: "/logos/partner9.jpg",
      description: "Global authority on cost engineering and management",
      website: "https://icoste.org",
    },
    {
      id: "7",
      name: "International Cost Engineering Council (ICEC)",
      logo: "/logos/partner11.jpg",
      description: "Global authority on cost engineering and management",
      website: "https://icoste.org",
    },
  ];

  // Update partners per view based on screen size
  useEffect(() => {
    const updatePartnersPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPartnersPerView(1); // Mobile
      } else if (width < 768) {
        setPartnersPerView(2); // Small tablet
      } else if (width < 1024) {
        setPartnersPerView(3); // Large tablet
      } else {
        setPartnersPerView(4); // Desktop
      }
    };

    updatePartnersPerView();
    window.addEventListener("resize", updatePartnersPerView);
    return () => window.removeEventListener("resize", updatePartnersPerView);
  }, []);

  const maxIndex = Math.max(0, partners.length - partnersPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (maxIndex > 0) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [maxIndex, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (maxIndex > 0) {
      startAutoScroll();
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovered(true);
    stopAutoScroll();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }

    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }

    // Resume autoplay after 3 seconds if there are multiple slides
    if (maxIndex > 0) {
      setTimeout(() => {
        setIsHovered(false);
        startAutoScroll();
      }, 3000);
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 relative border-b-8 sm:border-b-12 border-gray-600/40">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-slate-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Header title="Partners" underlineColor="bg-orange-400" />
        </div>

        {/* Partners Container */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons - Hidden on mobile when single partner view */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl"
                aria-label="Previous partners"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#0172c0] transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl"
                aria-label="Next partners"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-[#0172c0] transition-colors" />
              </button>
            </>
          )}

          {/* Partners Grid */}
          <div className="mx-0 sm:mx-8 md:mx-12 overflow-hidden py-6 sm:py-8 md:py-10">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / partnersPerView)
                }%)`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  style={{ width: `${100 / partnersPerView}%` }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white/70 hover:bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/50 transition-all duration-300 h-full group hover:shadow-xl hover:scale-105 active:scale-100">
                    <div className="text-center space-y-3 sm:space-y-4 h-full flex flex-col">
                      {/* Logo */}
                      <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-gray-300 bg-white p-1 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Partner Name */}
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-tight group-hover:text-[#0172c0] transition-colors duration-300 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                        {partner.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
                        {partner.description}
                      </p>

                      {/* Website Link */}
                      {partner.website && (
                        <div className="pt-2 sm:pt-3 md:pt-4 mt-auto">
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-2 text-orange-400 hover:text-orange-500 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:underline transform translate-y-2 group-hover:translate-y-0"
                            aria-label={`Visit ${partner.name} website`}
                          >
                            <span className="hidden sm:inline">
                              Visit Website
                            </span>
                            <span className="sm:hidden">Visit</span>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots - Only show if there are multiple slides */}
        {maxIndex > 0 && (
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${
                  index === currentIndex
                    ? "w-6 h-2.5 sm:w-8 sm:h-3 bg-gradient-to-r from-[#0172c0] to-blue-600"
                    : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110 active:scale-95"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe indicator */}
        {maxIndex > 0 && (
          <div className="flex sm:hidden justify-center mt-4">
            <div className="text-xs text-gray-500 bg-gray-100/80 px-3 py-1 rounded-full">
              Swipe to explore more partners
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
