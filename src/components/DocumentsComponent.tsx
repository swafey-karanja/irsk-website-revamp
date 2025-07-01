// components/DocumentsComponent.tsx
import React from "react";

interface Document {
  name: string;
  url: string;
  type: string;
}

interface DocumentsComponentProps {
  documents: Document[];
}

const DocumentsComponent: React.FC<DocumentsComponentProps> = ({
  documents,
}) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-medium text-gray-700 mb-8">
        Downloadable Documents & Concept Notes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out bg-white"
          >
            <div className="flex items-center space-x-3">
              <span className="text-orange-500 text-xl">
                {doc.type === "PDF" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                {doc.type === "DOCX" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m-10.828 4.243A4.001 4.001 0 014 20V4a2 2 0 012-2h12a2 2 0 012 2v8a4.001 4.001 0 01-4 4h-4.828z"
                    />
                  </svg>
                )}
              </span>
              <p className="text-lg font-medium text-gray-800">{doc.name}</p>
            </div>
            <span className="text-sm text-gray-500 mt-1 block">
              Click to download ({doc.type})
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocumentsComponent;
