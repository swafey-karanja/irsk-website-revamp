"use client";

import Image from "next/image";
import React from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
  };
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={1000}
          height={600}
          className="object-contain w-full h-auto rounded-lg shadow-xl"
        />
        <div className="absolute bottom-4 left-0 right-0 text-white text-center bg-black/50 p-2 rounded-b-lg">
          {image.alt}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
