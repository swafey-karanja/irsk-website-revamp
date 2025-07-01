"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Add this import
import { DropdownMenu, DropdownItem } from "./DropdownMenu";

const Navbar = () => {
  const pathname = usePathname(); // Get current pathname
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [borderStyle, setBorderStyle] = useState({ width: 0, left: 0 });
  const scrolledMenuRef = useRef<HTMLDivElement | null>(null);
  const unscrolledMenuRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Programs", url: "/programs" },
    { name: "Publications", url: "/publications" },
    { name: "Membership", url: "/membership" },
    { name: "Events", url: "" },
  ];

  // Sample events data - replace with your actual events
  const eventsItems: DropdownItem[] = [
    {
      title: "Conferences",
      url: "/events/conferences",
      subItems: [
        {
          title: "2024 IRSK conference",
          url: "/events/conferences/2024-irsk-conference",
        },
        {
          title: "2023 IRSK conference",
          url: "/events/conferences/2023-irsk-conference",
        },
      ],
    },
    {
      title: "Forums",
      url: "/events/forums",
      subItems: [
        {
          title: "2025 career & mentorship forum",
          url: "/events/forums/2025-career-mentorship-forum",
        },
        {
          title: "2023 career & mentorship forum",
          url: "/events/forums/2023-career-mentorship-forum",
        },
      ],
    },
    {
      title: "Awards",
      url: "/events/awards",
      subItems: [
        {
          title: "2025 awards ceremony",
          url: "/events/awards/2025-awards-ceremony",
        },
        {
          title: "2023 awards ceremony",
          url: "/events/awards/2023-awards-ceremony",
        },
      ],
    },
    {
      title: "Webinars",
      url: "/events/webinars",
    },
    {
      title: "Other Events",
      url: "/events/other-events",
      subItems: [
        { title: "2025 CUEA EVENT", url: "" },
        { title: "2023 CUEA EVENT", url: "" },
      ],
    },
  ];

  // Function to determine active link based on current pathname
  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/about")) return "About";
    if (pathname.startsWith("/events")) return "Events";
    if (pathname.startsWith("/programs")) return "Programs";
    if (pathname.startsWith("/publications")) return "Publications";
    if (pathname.startsWith("/membership")) return "Membership";
    return "Home"; // Default fallback
  };

  const activeLink = getActiveLink(); // Calculate active link based on URL

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
    if (typeof window === "undefined") return;

    const updateBorderPosition = (
      ref: React.RefObject<HTMLDivElement | null>
    ) => {
      const activeButton = ref.current?.querySelector(
        `[data-item="${activeLink}"]`
      ) as HTMLElement | null;

      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        setBorderStyle({ left: offsetLeft, width: offsetWidth });
      } else {
        setBorderStyle({ left: 0, width: 0 });
      }
    };

    if (isScrolled) {
      updateBorderPosition(scrolledMenuRef);
    } else {
      updateBorderPosition(unscrolledMenuRef);
    }
  }, [activeLink, isScrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileEvents = () => {
    setMobileEventsOpen(!mobileEventsOpen);
  };

  return (
    <>
      {/* Mobile Topbar - visible only on small screens */}
      <nav className="md:hidden border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3 bg-white/90 ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-[120px] h-[40px]">
                <Image
                  src="/International-Relations-Society-of-Kenya-IRSK-Logo.webp"
                  alt="logo"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`bg-white/90 border-t border-gray-100 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 "
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2 bg-[#EFEEE9]">
            {/* Menu Items */}
            <div className="space-y-1 mb-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.name === "Events" ? (
                    <>
                      <button
                        onClick={toggleMobileEvents}
                        className={`flex justify-between items-center w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeLink === item.name
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileEventsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`ml-4 transition-all duration-300 ease-in-out overflow-hidden ${
                          mobileEventsOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-1 py-2">
                          {eventsItems.map((eventItem, idx) => (
                            <div key={idx}>
                              <a
                                href={eventItem.url}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {eventItem.title}
                              </a>
                              {eventItem.subItems && (
                                <div className="ml-4 space-y-1">
                                  {eventItem.subItems.map((subItem, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href={subItem.url}
                                      className="block px-3 py-1 text-xs text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeLink === item.name
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Membership Button */}
            <div className="border-t border-gray-100 pt-4 mb-4">
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Become a Member
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pb-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <button
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Original Navbar - hidden on mobile, visible on desktop when not scrolled */}
      <nav
        className={`hidden md:block border-b border-gray-200 transition-all duration-300 ${
          isScrolled
            ? "invisible opacity-0 h-0 overflow-hidden"
            : "visible opacity-100 h-auto"
        }`}
      >
        {/* Top section with logo and donate button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative w-[150px] h-[50px]">
                <Image
                  src="/International-Relations-Society-of-Kenya-IRSK-Logo.webp"
                  alt="logo"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
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
              <div className="relative flex" ref={unscrolledMenuRef}>
                <div
                  className="absolute top-0 h-1 bg-blue-700 transition-all duration-300 ease-in-out"
                  style={{
                    left: `${!isScrolled ? borderStyle.left : 0}px`,
                    width: `${!isScrolled ? borderStyle.width : 0}px`,
                  }}
                />
                {menuItems.map((item) =>
                  item.name === "Events" ? (
                    <DropdownMenu
                      key={item.name}
                      label={item.name}
                      items={eventsItems}
                      isScrolled={false}
                      isActive={activeLink === item.name}
                      onClick={() => {}} // No need for onClick handler since we're using URL-based active state
                    />
                  ) : (
                    <a
                      key={item.name}
                      href={item.url}
                      data-item={item.name}
                      className={`relative px-4 py-4 text-sm font-medium transition-colors ${
                        activeLink === item.name
                          ? "text-blue-600"
                          : "hover:text-blue-600 text-md font-bold"
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                )}
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

      {/* Scrolled Navbar - hidden on mobile, visible on desktop when scrolled */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 bg-white/90 border-b border-gray-200 shadow-sm z-50 transition-all duration-300 ${
          isScrolled
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Menu items with animated border */}
            <div className="relative flex" ref={scrolledMenuRef}>
              <div
                className="absolute top-0 h-1 bg-blue-700 transition-all duration-300 ease-in-out"
                style={{
                  left: `${isScrolled ? borderStyle.left : 0}px`,
                  width: `${isScrolled ? borderStyle.width : 0}px`,
                }}
              />
              {menuItems.map((item) =>
                item.name === "Events" ? (
                  <DropdownMenu
                    key={item.name}
                    label={item.name}
                    items={eventsItems}
                    isScrolled={true}
                    isActive={activeLink === item.name}
                    onClick={() => {}} // No need for onClick handler
                  />
                ) : (
                  <a
                    key={item.name}
                    href={item.url}
                    data-item={item.name}
                    className={`relative px-4 py-3 text-sm transition-colors whitespace-nowrap ${
                      activeLink === item.name
                        ? "text-gray-900 font-medium"
                        : "hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </a>
                )
              )}
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
