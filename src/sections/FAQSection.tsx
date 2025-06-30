"use client";

import Header from "@/components/Header";
import { ChevronDown, Info, MapPin, Users } from "lucide-react";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Aenean blandit diam integer amet risus",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      label: "About foundation",
    },
    {
      question: "Cum sociis natoque posuere ut pulvinar nullam",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      label: "Our impact",
    },
    {
      question: "Quisque lorem tortor fringilla sed",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      label: "Necessitous",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 border-b-12 border-gray-600/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header title="Useful Information" underlineColor="bg-orange-400" />

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-700 mb-1">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="text-blue-500 text-sm">{faq.icon}</div>
                    <span>{faq.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
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
                <div className="px-6 pb-5 border-t border-gray-100">
                  <div className="pt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-md">
            Have more questions? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
