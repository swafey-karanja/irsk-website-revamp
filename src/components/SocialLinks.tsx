"use client";

import { Facebook, Twitter, Instagram, Linkedin, Search } from "lucide-react";

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
        href="#"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={size} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={size} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={size} />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-blue-600 transition-colors"
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
