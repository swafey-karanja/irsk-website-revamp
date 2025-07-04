"use client";

import React, { useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { DropdownItem } from "./DropdownMenu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface MobileNavbarProps {
  menuItems: { name: string; url: string }[];
  eventsItems: DropdownItem[];
  activeLink: string;
  isMobileMenuOpen: boolean;
  mobileEventsOpen: boolean;
  toggleMobileMenu: () => void;
  toggleMobileEvents: () => void;
}

export const MobileNavbar = ({
  menuItems,
  eventsItems,
  activeLink,
  isMobileMenuOpen,
  mobileEventsOpen,
  toggleMobileMenu,
  toggleMobileEvents,
}: MobileNavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggleMobileMenu(); // Close the menu first

    if (pathname === "/about") {
      const el = document.getElementById("membership-form");

      if (el) {
        setTimeout(() => {
          const yOffset = window.pageYOffset + el.getBoundingClientRect().top;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }, 300); // slight delay ensures DOM is stable & menu is closed
      }
    } else {
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
    <nav className="md:hidden border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 py-3 bg-white/90">
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
            ? "max-h-96 opacity-100"
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
                            <Link
                              href={eventItem.url}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              {eventItem.title}
                            </Link>
                            {eventItem.subItems && (
                              <div className="ml-4 space-y-1">
                                {eventItem.subItems.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={subItem.url}
                                    className="block px-3 py-1 text-xs text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                                    onClick={toggleMobileMenu}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    onClick={toggleMobileMenu}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeLink === item.name
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Membership Button */}
          <div className="border-t border-gray-100 pt-4 mb-4">
            <button
              className="w-full bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              onClick={handleClick}
            >
              Become a Member
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pb-2">
            <SocialLinks size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};
