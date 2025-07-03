import React from "react";

const SocialMediaSidebar = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/p/International-Relations-Society-of-Kenya-100069924211899/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/intrelationske?lang=en",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/international-relations-society-of-kenya",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@IRSKOfficial",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M19.615 3.184c-1.458-.55-7.287-.55-7.287-.55s-5.828 0-7.287.55C3.09 3.752 3 5.246 3 7.058v9.884c0 1.813.09 3.306 2.041 3.874 1.458.55 7.287.55 7.287.55s5.829 0 7.287-.55c1.951-.568 2.041-2.061 2.041-3.874V7.058c0-1.812-.09-3.306-2.041-3.874zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
        </svg>
      ),
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      name: "Email",
      url: "mailto:info@irskenya.or.ke",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.35l9.384-6.529h.98c.904 0 1.636.732 1.636 1.636z" />
        </svg>
      ),
      bgColor: "bg-gray-500",
      hoverColor: "hover:bg-gray-600",
    },
  ];

  return (
    <div className="fixed right-1 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-14 h-14 rounded-full text-white
              ${link.bgColor} ${link.hoverColor}
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:shadow-lg
              group
            `}
            aria-label={`Follow us on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSidebar;
