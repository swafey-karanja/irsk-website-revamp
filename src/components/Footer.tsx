"use client";

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0172c0] text-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Subscription */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about our
            latest updates, news, and exclusive offers.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[#0172c0] focus:border-transparent backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0172c0]/25 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="mt-4 text-green-400 font-medium animate-pulse">
              Thank you for subscribing! We&apos;ll keep you updated.
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Shortcut Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Useful links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0172c0]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  About IRSK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Topics
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0172c0]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Diplomacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  <span className="underline decoration-[#0172c0]">
                    Security
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Politics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Economics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Health
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Society
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Regions
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0172c0]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Africa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Americas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Europe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Arabia(Middle East)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  Asia
                </a>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Contacts
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0172c0]"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  <strong>Call: </strong>&nbsp; +254 724 731 740
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-orange-500 transition-colors duration-200 flex items-center group"
                >
                  <span className="text-gray-200 mr-3 text-sm group-hover:text-orange-500">
                    +
                  </span>
                  <strong>Email:</strong>&nbsp;info@irskenya.or.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#0172c0]/20 mb-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-200 text-sm">
            © 2025 – 2026 IRSK All Rights Reserved{" "}
            <a
              href="#"
              className="text-gray-200 hover:text-orange-500 transition-colors"
            ></a>{" "}
            | All Rights Reserved | Powered by{" "}
            <a
              href="#"
              className="text-gray-200 hover:text-orange-500 transition-colors"
            >
              Media Force
            </a>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center justify-center w-10 h-10 bg-orange-400 hover:bg-[#015aa3] rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#0172c0]/30"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 text-white transform group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
