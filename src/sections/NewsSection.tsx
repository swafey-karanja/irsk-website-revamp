"use client";

import { InfoContainer } from "@/components/InfoContainer";
import React from "react";
import Header from "@/components/Header";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Vestibulum commodo volutpat laoreet",
      description:
        "Nunc felis. Curabitur ac ipsum. Pellentesque nibh ultrices est. Maecenas consequat, augue a venenatis risus. Ut id mollis vel, lacinia quam. Praesent blandit malesuada suspen.",
      likes: 258,
      isLiked: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Quisque lorem tortor fringilla sed vesti",
      description:
        "Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vella ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.",
      likes: 274,
      isLiked: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Vivamus sit amet metus sem imperdiet",
      description:
        "Aliquam adipiscing felis tincidunt eget, euismod pede eu cursus at, suscipit a, lorem. Morbi sodales wisi placerat eget, elementum eu, ullamcorper ac.",
      likes: 181,
      isLiked: false,
    },
  ];

  const items = newsItems;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative border-b-8 sm:border-b-12 border-gray-600/40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-pink-100 rounded-full opacity-20 sm:opacity-30"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-blue-100 rounded-full opacity-20 sm:opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Header
          title="Latest News and Content"
          underlineColor="bg-orange-400"
        />

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {items.map((item) => (
            <InfoContainer
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
