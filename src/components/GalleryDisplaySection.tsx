"use client";

import Header from "@/components/Header";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

interface GalleryDisplaySectionProps {
  photos: Photo[];
  onClose: () => void;
}

const GalleryDisplaySection: React.FC<GalleryDisplaySectionProps> = ({
  photos,
  onClose,
}) => {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setCurrentPhoto(photo);
  };

  const closeLightbox = () => {
    setCurrentPhoto(null);
  };

  return (
    <div className="h-auto py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Header title="Full Photo Gallery" underlineColor="bg-orange-400" />
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onClose}
            className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Event
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openLightbox(photo)}
            >
              <Image
                fill
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center p-2">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          isOpen={currentPhoto !== null}
          onClose={closeLightbox}
          image={currentPhoto || { src: "", alt: "" }}
        />
      </div>
    </div>
  );
};

export default GalleryDisplaySection;
