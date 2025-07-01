"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InfoContainer } from "@/components/InfoContainer";
import Header from "@/components/Header";
import VideosComponent from "@/components/VideosComponent";
import DocumentsComponent from "@/components/DocumentsComponent";
import PhotoHighlights from "@/components/PhotoHighlights";
import GalleryDisplaySection from "@/components/GalleryDisplaySection";

const EventPage = () => {
  const [showGallery, setShowGallery] = useState(false);

  const handleOpenGallery = () => {
    setShowGallery(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCloseGallery = () => setShowGallery(false);

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

  // Sample data for event media (images and videos)
  const eventPhotos = [
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Attendees enjoying the event",
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Keynote speaker on stage",
    },
    {
      src: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Networking session in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Award ceremony moment",
    },
    {
      src: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Lively event atmosphere",
    },
    {
      src: "https://images.unsplash.com/photo-1484914440268-8d352fe4db95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Audience engagement",
    },
  ];

  // Sample data for downloadable documents
  const downloadableDocuments = [
    {
      name: "Event Program Guide",
      url: "/documents/event_program_guide.pdf", // Replace with actual path
      type: "PDF",
    },
    {
      name: "Keynote Speaker Notes",
      url: "/documents/keynote_speaker_notes.docx", // Replace with actual path
      type: "DOCX",
    },
    {
      name: "Conference Concept Note",
      url: "/documents/conference_concept_note.pdf", // Replace with actual path
      type: "PDF",
    },
    {
      name: "Post-Event Report",
      url: "/documents/post_event_report.pdf", // Replace with actual path
      type: "PDF",
    },
  ];

  return (
    <div className="min-h-screen border-b-12 border-gray-600/40">
      {showGallery ? (
        <GalleryDisplaySection
          photos={eventPhotos}
          onClose={handleCloseGallery}
        />
      ) : (
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

              {/* Main Image (Parallax effect removed) */}
              <div className="relative mb-6 overflow-hidden flex justify-center items-center w-full h-120 mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Event main image"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Praesent consequat. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Vestibulum massa
                  dui sed nulla ut nulla a mi. Fusce wisi nibh molestie aliquet,
                  lacus vitae maximus. Nam sit amet justo. Vestibulum ante ipsum
                  eleifend adipiscing elit. Mauris viverra nunc.
                </p>

                <p>
                  Maecenas tincidunt. Aliquam semper. Sed eget nisl. Aenean
                  gravida vitae, consequat lorem fermentum rutrum. Nunc id
                  risus. Donec ullamcorper convallis. Donec urna quis
                  sollicitudin mi eget ipsum adipiscing non, iaculis
                  scelerisque. Duis sodales at, elit. Sed dignissim justo.
                  Suspendisse fermentum erat. Duis consequat tortor. Mauris ut
                  tellus a dolor. Suspendisse nec tellus.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg italic text-gray-700">
                  Praesent dapibus, neque id cursus faucibus, tortor neque
                  egestas augue, eu vulputate magna eros eu erat. Vitae
                  adipiscing turpis. Aenean ligula nibh, molestie id viverra a,
                  dapibus at dolor. In iaculis viverra neque, ac eleifend ante
                  lobortis id. In viverra ipsum –
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Carousel Section */}
          <PhotoHighlights
            photos={eventPhotos}
            onOpenGallery={handleOpenGallery}
          />

          {/* Video Highlights Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-gray-700 mb-8">
              Video Highlights
            </h2>
            <VideosComponent />
          </div>

          {/* Downloadable Documents and Concept Notes Section */}
          <DocumentsComponent documents={downloadableDocuments} />

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
      )}
    </div>
  );
};

export default EventPage;
