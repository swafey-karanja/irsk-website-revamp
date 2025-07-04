"use client";

import Header from "@/components/Header";
import { InfoContainer } from "@/components/InfoContainer";
import React from "react";
import { useGetConferencesDataQuery } from "@/store/api/eventsPagesApis";

const ForumsSection = () => {
  const {
    data: items,
    isLoading,
    error,
  } = useGetConferencesDataQuery(undefined, {
    refetchOnMountOrArgChange: false, // 👈 Don't refetch when remounting
  }); // <-- Redux-managed fetch

  return (
    <section className="py-16 px-4 relative border-b-12 border-gray-600/40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Header title="Conferences" underlineColor="bg-orange-400" />

        {isLoading ? (
          <p className="text-gray-500 mt-6">Loading webinars...</p>
        ) : error ? (
          <p className="text-gray-500 mt-6">
            An error occured while trying to fetch the requested data.
          </p>
        ) : items?.length === 0 ? (
          <p className="text-gray-500 mt-6">No webinars found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {items?.map((item) => (
              <InfoContainer
                key={item.id}
                image={
                  item.yoast_head_json?.og_image?.[0]?.url ||
                  "https://images.unsplash.com/photo-1484914440268-8d352fe4db95?q=80&w=1470&auto=format&fit=crop"
                }
                title={item.title.rendered}
                description={
                  item.content.rendered.replace(/<[^>]+>/g, "") || ""
                }
                slug={item.slug}
                type="conferences"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ForumsSection;
