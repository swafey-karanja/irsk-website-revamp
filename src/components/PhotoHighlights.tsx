// components/PhotoHighlights.tsx
import React, { useState } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoHighlightsProps {
  photos: Photo[];
  onOpenGallery: () => void;
}

const PhotoHighlights: React.FC<PhotoHighlightsProps> = ({
  photos,
  onOpenGallery,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photosPerPage = 3;

  const nextPhotos = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhotos = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const transformValue = `translateX(-${
    currentPhotoIndex * (100 / photosPerPage)
  }%)`;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-medium text-gray-700 mb-8">
        Photo Highlights
      </h2>

      <div className="relative">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: transformValue }}
          >
            {[...photos, ...photos.slice(0, photosPerPage)].map(
              (photo, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 box-border"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold text-center p-2">
                        {photo.alt}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <button
          onClick={prevPhotos}
          className="hidden md:flex absolute top-1/2 -left-6 -translate-y-1/2 bg-orange-400 text-white p-2 rounded-lg shadow-lg hover:bg-orange-500 z-10"
          aria-label="Previous photos"
        >
          &#10094;
        </button>
        <button
          onClick={nextPhotos}
          className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-orange-400 text-white p-2 rounded-lg shadow-lg hover:bg-orange-500 z-10"
          aria-label="Next photos"
        >
          &#10095;
        </button>
      </div>

      <div className="flex justify-center items-center py-4">
        <button
          onClick={onOpenGallery}
          className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium text-md transition-all duration-300"
        >
          View the full Gallery
        </button>
      </div>
    </div>
  );
};

export default PhotoHighlights;
