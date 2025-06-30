"use client";

import React from "react";
import { FileText } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// ✅ Define the props type
interface InfoContainerProps {
  image: string;
  title: string;
  description: string;
  slug?: string;
}

// ✅ Apply the type to the props
export const InfoContainer: React.FC<InfoContainerProps> = ({
  image,
  title,
  description,
  slug,
}) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/events/awards/${slug}`);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-65 overflow-hidden">
        <Image
          fill
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-700 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto bottom-0">
          <button
            onClick={handleReadMore}
            className="flex items-center space-x-2 text-orange-400 hover:text-orange-500 transition-colors duration-200"
          >
            <FileText size={16} />
            <span className="text-sm">Read more</span>
          </button>
        </div>
      </div>
    </div>
  );
};
