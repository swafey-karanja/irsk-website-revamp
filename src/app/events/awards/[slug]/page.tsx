"use client";

import React from "react";
import Image from "next/image";
import { InfoContainer } from "@/components/InfoContainer";
import Header from "@/components/Header";

const EventPage = () => {
  // Sample data for other events
  const otherEvents = [
    {
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Vestibulum commodo volutpat laoreet",
      description:
        "Pellentesque tempor nunc vehicula auctor arcu laoreet id! Cras fermentum volutpat molestie! In fringilla eleifend quam in vehicula.",
      slug: "vestibulum-commodo-volutpat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Quisque lorem tortor fringilla sed vesti",
      description:
        "Maecenas tincidunt. Aliquam semper. Sed eget nisl. Aenean gravida vitae, consequat lorem fermentum rutrum.",
      slug: "quisque-lorem-tortor",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Community Outreach Program",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nunc sed dignissim justo.",
      slug: "community-outreach-program",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button className="text-orange-400 hover:text-orange-500 text-sm font-medium">
                # Show all
              </button>
            </div>

            <Header title="Awards" underlineColor="bg-orange-400" />

            {/* Main Image */}
            <div className="relative mb-6 overflow-hidden flex justify-center items-center w-180 h-100 mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Event main image"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Praesent consequat. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Vestibulum massa dui
                sed nulla ut nulla a mi. Fusce wisi nibh molestie aliquet, lacus
                vitae maximus. Nam sit amet justo. Vestibulum ante ipsum
                eleifend adipiscing elit. Mauris viverra nunc.
              </p>

              <p>
                Maecenas tincidunt. Aliquam semper. Sed eget nisl. Aenean
                gravida vitae, consequat lorem fermentum rutrum. Nunc id risus.
                Donec ullamcorper convallis. Donec urna quis sollicitudin mi
                eget ipsum adipiscing non, iaculis scelerisque. Duis sodales at,
                elit. Sed dignissim justo. Suspendisse fermentum erat. Duis
                consequat tortor. Mauris ut tellus a dolor. Suspendisse nec
                tellus.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg italic text-gray-700">
                Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat. Vitae adipiscing turpis.
                Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In
                iaculis viverra neque, ac eleifend ante lobortis id. In viverra
                ipsum –
              </div>
            </div>
          </div>
        </div>

        {/* Other Events Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-gray-700 mb-8">
            Other Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((event, index) => (
              <InfoContainer
                key={index}
                image={event.image}
                title={event.title}
                description={event.description}
                slug={event.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
