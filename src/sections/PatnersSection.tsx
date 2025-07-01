"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const partnersPerView = 4;
  const maxIndex = Math.max(0, partners.length - partnersPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [maxIndex]);

  return (
    <section className="py-16 px-4 relative border-b-12 border-gray-600/40">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-slate-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Header title="Partners" underlineColor="bg-orange-400" />

        {/* Partners Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm  border border-gray-200 hover:bg-white  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#0172c0] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm  border border-gray-200 hover:bg-white  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#0172c0] transition-colors" />
          </button>

          {/* Partners Grid */}
          <div className="mx-12 overflow-hidden py-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / partnersPerView)
                }%)`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / partnersPerView}%` }}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8  border border-white/50  hover:bg-white/80 transition-all duration-300 h-full group">
                    <div className="text-center space-y-4">
                      {/* Logo */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-300 bg-white p-1">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Partner Name */}
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-[#0172c0] transition-colors">
                        {partner.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#0172c0] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
