"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [borderStyle, setBorderStyle] = useState({ width: 0, left: 0 });
  const scrolledMenuRef = useRef<HTMLDivElement | null>(null);
  const unscrolledMenuRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    "About",
    "Events",
    "Programs",
    "Publications",
    "Membership",
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle border animation
  useEffect(() => {
    const updateBorderPosition = (
      ref: React.RefObject<HTMLDivElement | null>
    ) => {
      const activeButton = ref.current?.querySelector(
        `[data-item="${activeLink}"]`
      ) as HTMLElement | null;

      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        setBorderStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    if (isScrolled) {
      updateBorderPosition(scrolledMenuRef);
    } else {
      updateBorderPosition(unscrolledMenuRef);
    }
  }, [activeLink, isScrolled]);

  const handleMenuClick = (item: React.SetStateAction<string>) => {
    setActiveLink(item);
  };

  return (
    <>
      {/* Original Navbar - visible when not scrolled */}
      <nav
        className={`border-b border-gray-200 transition-all duration-300 ${
          isScrolled
            ? "transform -translate-y-full opacity-0 pointer-events-none"
            : ""
        }`}
      >
        {/* Top section with logo and donate button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Be</span>
              </div>
              <span className="text-2xl font-light text-gray-700">Charity</span>
            </div>

            {/* Donate section */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Become a Member</span>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                Click Here
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with menu and social links */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Menu items */}
              <div className="relative flex space-x-6" ref={unscrolledMenuRef}>
                <div
                  className="absolute top-0 h-1 bg-blue-700 transition-all duration-300 ease-in-out"
                  style={{
                    left: `${borderStyle.left}px`,
                    width: `${borderStyle.width}px`,
                  }}
                />
                {menuItems.map((item) => (
                  <button
                    key={item}
                    data-item={item}
                    onClick={() => handleMenuClick(item)}
                    className={`relative px-4 py-4 text-sm font-medium transition-colors ${
                      activeLink === item
                        ? "text-blue-600"
                        : "hover:text-blue-600 text-md font-bold"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Right side with social links and search */}
              <div className="flex items-center space-x-4">
                {/* Social media links */}
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                {/* Search icon */}
                <button
                  className="text-gray-400 hover:text-blue-600 transition-colors p-2"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrolled Navbar - visible when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50 transition-all duration-300 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Menu items with animated border */}
            <div className="relative flex space-x-6" ref={scrolledMenuRef}>
              <div
                className="absolute top-0 h-1 bg-blue-700 transition-all duration-300 ease-in-out"
                style={{
                  left: `${borderStyle.left}px`,
                  width: `${borderStyle.width}px`,
                }}
              />
              {menuItems.map((item) => (
                <button
                  key={item}
                  data-item={item}
                  onClick={() => handleMenuClick(item)}
                  className={`relative px-4 py-3 text-sm transition-colors whitespace-nowrap ${
                    activeLink === item
                      ? "text-gray-900 font-medium"
                      : "hover:text-gray-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search icon */}
            <button
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
