"use client";

import { Facebook, Twitter, Linkedin, Search, Youtube } from "lucide-react";

export const SocialLinks = ({
  size = 18,
  showSearch = true,
}: {
  size?: number;
  showSearch?: boolean;
}) => {
  return (
    <div className="flex items-center space-x-3">
      <a
        href="https://www.facebook.com/p/International-Relations-Society-of-Kenya-100069924211899/"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={size} />
      </a>
      <a
        href="https://x.com/intrelationske?lang=en"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={size} />
      </a>
      <a
        href="https://www.youtube.com/@IRSKOfficial"
        className="text-gray-400 hover:text-red-600 transition-colors"
        aria-label="Instagram"
      >
        <Youtube size={size} />
      </a>
      <a
        href="https://www.linkedin.com/company/international-relations-society-of-kenya"
        className="text-gray-400 hover:text-blue-600/50 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={size} />
      </a>
      {showSearch && (
        <button
          className="text-gray-400 hover:text-blue-600 transition-colors"
          aria-label="Search"
        >
          <Search size={size} />
        </button>
      )}
    </div>
  );
};
