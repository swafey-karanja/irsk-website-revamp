"use client";

import { ChevronDown, Info, MapPin, Users } from "lucide-react";
import React, { useState } from "react";

// Mock Header component for demo
const Header = ({
  title,
  underlineColor,
}: {
  title: string;
  underlineColor: string;
}) => (
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
      {title}
    </h2>
    <div
      className={`w-16 sm:w-20 h-1 ${underlineColor} mx-auto rounded-full`}
    ></div>
  </div>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Aenean blandit diam integer amet risus",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
      label: "About foundation",
    },
    {
      question: "Cum sociis natoque posuere ut pulvinar nullam",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
      label: "Our impact",
    },
    {
      question: "Quisque lorem tortor fringilla sed",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
      label: "Necessitous",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b-8 sm:border-b-12 border-gray-600/40">
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        {/* Header */}
        <Header title="Useful Information" underlineColor="bg-orange-400" />

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-start sm:items-center justify-between hover:bg-gray-50 transition-colors duration-200 gap-3 sm:gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1 pr-2 leading-tight">
                    {faq.question}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                  {/* Label and Icon - Hidden on mobile, shown on larger screens */}
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                    <div className="text-blue-500">{faq.icon}</div>
                    <span className="whitespace-nowrap">{faq.label}</span>
                  </div>

                  {/* Mobile: Show only icon */}
                  <div className="sm:hidden text-blue-500">{faq.icon}</div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-gray-100">
                  {/* Mobile: Show label above content */}
                  <div className="sm:hidden pt-3 pb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="text-blue-500">{faq.icon}</div>
                      <span>{faq.label}</span>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Have more questions? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
