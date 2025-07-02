"use client";

import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const MembersSection = () => {
  const councilMembers = [
    {
      id: 1,
      name: "Jennifer Lee",
      role: "Integer ornare varius massa",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Kevin Perry",
      role: "Vestibulum lobortis mauris nec",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Sara Wright",
      role: "Nulla vel consectetur nulla",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Brandon Ross",
      role: "Fusce eget faucibus est",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const scrollToMembershipForm = () => {
    const element = document.getElementById("membership-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 relative flex flex-col justify-center border-b-12 border-gray-600/40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-20 w-20 h-20 bg-yellow-100 rounded-full opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Header
            title="List of Council Members"
            underlineColor="bg-orange-400"
          />

          {/* Description text */}
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-md">
            Meet our council members
          </p>
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {councilMembers.map((member, index) => (
            <div
              key={member.id}
              className="text-center group"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Profile Image */}
              <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white absolute">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium text-md transition-all duration-300">
            View a full list of council members
          </button>

          <button
            onClick={scrollToMembershipForm} // Add this onClick handler
            className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium text-md transition-all duration-300"
          >
            Become a member
          </button>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default MembersSection;
