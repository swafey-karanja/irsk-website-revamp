import Header from "@/components/Header";
import { InfoContainer } from "@/components/InfoContainer";
import React from "react";

const conferencesItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Vestibulum commodo volutpat laoreet",
    description:
      "Nunc felis. Curabitur ac ipsum. Pellentesque nibh ultrices est. Maecenas consequat, augue a venenatis risus. Ut id mollis vel, lacinia quam. Praesent blandit malesuada suspen.",
    likes: 258,
    isLiked: false,
    slug: "vestibulum-commodo-laoreet",
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
    slug: "quisque-lorem-tortor",
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
    slug: "vivamus-sit-amet",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Vivamus sit amet metus sem imperdiet",
    description:
      "Aliquam adipiscing felis tincidunt eget, euismod pede eu cursus at, suscipit a, lorem. Morbi sodales wisi placerat eget, elementum eu, ullamcorper ac.",
    likes: 181,
    isLiked: false,
    slug: "vivamus-sit-amet",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Vivamus sit amet metus sem imperdiet",
    description:
      "Aliquam adipiscing felis tincidunt eget, euismod pede eu cursus at, suscipit a, lorem. Morbi sodales wisi placerat eget, elementum eu, ullamcorper ac.",
    likes: 181,
    isLiked: false,
    slug: "vivamus-sit-amet",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Vivamus sit amet metus sem imperdiet",
    description:
      "Aliquam adipiscing felis tincidunt eget, euismod pede eu cursus at, suscipit a, lorem. Morbi sodales wisi placerat eget, elementum eu, ullamcorper ac.",
    likes: 181,
    isLiked: false,
    slug: "vivamus-sit-amet",
  },
];

const items = conferencesItems;

const ConferencesSection = () => {
  return (
    <section className="py-16 px-4 relative border-b-12 border-gray-600/40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Header title="Conferences" underlineColor="bg-orange-400" />

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item) => (
            <InfoContainer
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
