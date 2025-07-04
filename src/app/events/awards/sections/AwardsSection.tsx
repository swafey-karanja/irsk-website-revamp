"use client";

import Header from "@/components/Header";
import { InfoContainer } from "@/components/InfoContainer";
import React, { useEffect, useState } from "react";

interface WPItem {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json: {
    og_image?: { url: string }[];
  };
}

const ForumsSection = () => {
  const [items, setItems] = useState<WPItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://irskenya.or.ke/wp-json/wp/v2/forum?per_page=10&orderby=date&order=desc"
        );
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch WordPress data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  {
    items.map((item) => console.log(item.slug, "slug"));
  }

  return (
    <section className="py-16 px-4 relative border-b-12 border-gray-600/40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <Header title="Forums" underlineColor="bg-orange-400" />

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {items.map((item) => (
              <InfoContainer
                key={item.id}
                image={
                  item.yoast_head_json?.og_image?.[0]?.url ||
                  "https://images.unsplash.com/photo-1484914440268-8d352fe4db95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                title={item.title.rendered}
                description={
                  item.content.rendered.replace(/<[^>]+>/g, "") || ""
                }
                slug={item.slug}
                type="awards"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ForumsSection;
