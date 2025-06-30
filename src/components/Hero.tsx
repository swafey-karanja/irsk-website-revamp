import React from "react";

interface HeroProps {
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: React.ReactNode;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  height = "h-64",
  overlay = true,
  overlayOpacity = "bg-black/40",
  children,
  className = "",
}) => {
  const heroClasses = `
      relative w-full ${height} flex flex-col justify-between border-b-12 border-gray-600
      ${backgroundImage ? "bg-cover bg-center bg-no-repeat" : "bg-teal-700"}
      ${className}
    `;

  const heroStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {};

  return (
    <div className={heroClasses} style={heroStyle}>
      {/* Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Header Section with Title and Breadcrumb */}
      </div>

      {/* Custom children content */}
      {children}
    </div>
  );
};

export default Hero;
