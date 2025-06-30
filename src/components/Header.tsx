import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  underlineColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  align = "center",
  underlineColor = "bg-orange-400",
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`mb-12 flex flex-col ${alignment[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 max-w-xl mb-4">{subtitle}</p>}
      <div className="flex">
        <div className={`w-24 h-1 ${underlineColor} rounded-full`} />
      </div>
    </div>
  );
};

export default Header;
