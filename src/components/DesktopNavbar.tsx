"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownMenu";
import { usePathname, useRouter } from "next/navigation";

interface DesktopNavbarProps {
  menuItems: { name: string; url: string }[];
  eventsItems: DropdownItem[];
  activeLink: string;
  isScrolled: boolean;
  borderStyle: { left?: number; width?: number };
  scrolledMenuRef: React.RefObject<HTMLDivElement | null>;
  unscrolledMenuRef: React.RefObject<HTMLDivElement | null>;
}

export const DesktopNavbar = ({
  menuItems,
  eventsItems,
  activeLink,
  isScrolled,
  borderStyle,
  scrolledMenuRef,
  unscrolledMenuRef,
}: DesktopNavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/about") {
      // On the same page – scroll into view
      const target = document.getElementById("membership-form");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On a different page – navigate with hash
      router.push("/about#membership-form");
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50); // slight delay to allow layout rendering
      }
    }
  }, []);

  return (
    <>
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
              <span className="text-gray-500 font-bold text-sm">
                Become a Member
              </span>
              <button
                onClick={handleClick}
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
              >
                Click Here!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with menu and social links */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Menu items */}
              <div className="relative flex gap-x-6" ref={unscrolledMenuRef}>
                <div
                  className="absolute top-0 h-1 bg-blue-600 rounded-b transition-all duration-300 ease-out z-10"
                  style={{
                    left: `${!isScrolled ? borderStyle.left || 0 : 0}px`,
                    width: `${!isScrolled ? borderStyle.width || 0 : 0}px`,
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
                      onClick={() => {}}
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
                <SocialLinks showSearch={false} />
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
            <div className="relative flex gap-x-6" ref={scrolledMenuRef}>
              <div
                className="absolute top-0 h-1 bg-blue-600 rounded-b transition-all duration-300 ease-out z-10"
                style={{
                  left: `${isScrolled ? borderStyle.left || 0 : 0}px`,
                  width: `${isScrolled ? borderStyle.width || 0 : 0}px`,
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
                    onClick={() => {}}
                  />
                ) : (
                  <a
                    key={item.name}
                    href={item.url}
                    data-item={item.name}
                    className={`relative px-4 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
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
