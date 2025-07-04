"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { InfoContainer } from "@/components/InfoContainer";
import Header from "@/components/Header";
import DocumentsComponent from "@/components/DocumentsComponent";
import PhotoHighlights from "@/components/PhotoHighlights";
import GalleryDisplaySection from "@/components/GalleryDisplaySection";
import { useGetWebinarDetailsDataQuery } from "@/store/api/eventsDetailsApis";

const WebinarPage: React.FC = () => {
  const { slug } = useParams() as { slug: string };
  const [showGallery, setShowGallery] = useState(false);

  const handleOpenGallery = () => {
    setShowGallery(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCloseGallery = () => setShowGallery(false);

  const {
    data: webinar,
    isLoading,
    error,
  } = useGetWebinarDetailsDataQuery(slug);

  if (isLoading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!webinar)
    return <p className="text-center mt-10 text-red-500">Webinar not found.</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        An error occured. Please try again later.
      </p>
    );

  const title = webinar.title.rendered;
  const content = webinar.content.rendered;
  const image =
    webinar.yoast_head_json?.og_image?.[0]?.url ||
    "https://images.unsplash.com/photo-1484914440268-8d352fe4db95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const photos = webinar.acf?.gallery || [];
  const documents = webinar.acf?.documents || [];
  const otherEvents = webinar.acf?.other_events || [];

  return (
    <div className="min-h-screen border-b-12 border-gray-600/40">
      {showGallery ? (
        <GalleryDisplaySection
          photos={photos.map((p) => ({ src: p.url, alt: p.alt || "" }))}
          onClose={handleCloseGallery}
        />
      ) : (
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-4">
              <Header title={title} underlineColor="bg-orange-400" />
              <div className="relative mb-6 overflow-hidden flex justify-center items-center w-full h-120 mx-auto">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="space-y-4 text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>

          {photos.length > 0 && (
            <PhotoHighlights
              photos={photos.map((p) => ({ src: p.url, alt: p.alt || "" }))}
              onOpenGallery={handleOpenGallery}
            />
          )}

          {documents.length > 0 && <DocumentsComponent documents={documents} />}

          {otherEvents.length > 0 && (
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
                    type="webinars"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebinarPage;
