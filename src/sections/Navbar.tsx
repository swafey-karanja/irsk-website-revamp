/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "@/components/MobileNavbar";
import { DesktopNavbar } from "@/components/DesktopNavbar";
import { DropdownItem } from "@/components/DropdownMenu";

interface BorderStyle {
  left?: number;
  width?: number;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [borderStyle, setBorderStyle] = useState<BorderStyle>({});
  const scrolledMenuRef = useRef<HTMLDivElement | null>(null);
  const unscrolledMenuRef = useRef<HTMLDivElement | null>(null);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Programs", url: "/programs" },
    { name: "Publications", url: "/publications" },
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

  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/about")) return "About";
    if (pathname.startsWith("/events")) return "Events";
    if (pathname.startsWith("/programs")) return "Programs";
    if (pathname.startsWith("/publications")) return "Publications";
    return "Home";
  };

  const activeLink = getActiveLink();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateBorderPosition = (): void => {
    const currentRef = isScrolled ? scrolledMenuRef : unscrolledMenuRef;
    if (!currentRef.current) return;

    const activeElement = currentRef.current.querySelector(
      `[data-item="${activeLink}"]`
    ) as HTMLElement;
    if (activeElement) {
      const navContainer = currentRef.current;
      if (navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();

        setBorderStyle({
          left: elementRect.left - containerRect.left,
          width: elementRect.width,
        });
      }
    }
  };

  useEffect(() => {
    updateBorderPosition();
  }, [activeLink, isScrolled]);

  useEffect(() => {
    const handleResize = (): void => updateBorderPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(updateBorderPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileEvents = () => {
    setMobileEventsOpen(!mobileEventsOpen);
  };

  return (
    <>
      <MobileNavbar
        menuItems={menuItems}
        eventsItems={eventsItems}
        activeLink={activeLink}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileEventsOpen={mobileEventsOpen}
        toggleMobileMenu={toggleMobileMenu}
        toggleMobileEvents={toggleMobileEvents}
      />

      <DesktopNavbar
        menuItems={menuItems}
        eventsItems={eventsItems}
        activeLink={activeLink}
        isScrolled={isScrolled}
        borderStyle={borderStyle}
        scrolledMenuRef={scrolledMenuRef}
        unscrolledMenuRef={unscrolledMenuRef}
      />
    </>
  );
};

export default Navbar;
