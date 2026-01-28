"use client";
import React, { useState } from "react";

// ============ EDIT BUTTON COMPONENT ============
const EditImageButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-700 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
    <span className="text-sm font-medium">Edit</span>
  </button>
);

// ============ EDITABLE IMAGE WRAPPER ============
export const EditableImage = ({
  src,
  alt,
  className,
  onEdit,
}: {
  src: string;
  alt: string;
  className?: string;
  onEdit: () => void;
}) => (
  <div className="relative group">
    <img src={src} className={className} alt={alt} />
    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
      <EditImageButton onClick={onEdit} />
    </div>
  </div>
);

// ============ SIDEBAR EDITOR ============
interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  data: any;
  onUpdate: (field: string, value: any) => void;
}

export const EditorSidebar = ({
  isOpen,
  onToggle,
  data,
  onUpdate,
}: SidebarProps) => {
  const [activeSection, setActiveSection] = useState<string | null>("hero");

  const sections = [
    { id: "nav", label: "Navigation" },
    { id: "hero", label: "Hero Section" },
    { id: "middle", label: "Announcement" },
    { id: "end", label: "Detail Image" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all cursor-pointer ${isOpen ? "left-[324px]" : "left-4"}`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        )}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">Template Editor</h2>
          <p className="text-sm text-gray-500">Edit your wedding site</p>
        </div>

        {/* Section Tabs */}
        <div className="grid grid-cols-2 gap-2 p-4 border-b bg-gray-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                setActiveSection(
                  activeSection === section.id ? null : section.id,
                )
              }
              className={`px-3 py-1.5 rounded-lg text-base font-medium transition-all cursor-pointer ${
                activeSection === section.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Editor Content */}
        <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
          {/* Navigation Section */}
          {activeSection === "nav" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Navigation Links
              </h3>
              {data.navLinks?.map((link: string, i: number) => (
                <input
                  key={i}
                  type="text"
                  value={link}
                  onChange={(e) => {
                    const newLinks = [...data.navLinks];
                    newLinks[i] = e.target.value;
                    onUpdate("navLinks", newLinks);
                  }}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                  placeholder={`Link ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Hero Section */}
          {activeSection === "hero" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Hero Section
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Names
                </label>
                <input
                  type="text"
                  value={data.names || ""}
                  onChange={(e) => onUpdate("names", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Hero Image URL
                </label>
                <input
                  type="text"
                  value={data.heroImg || ""}
                  onChange={(e) => onUpdate("heroImg", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
            </div>
          )}

          {/* Middle Section */}
          {activeSection === "middle" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Announcement Section
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Event Date
                </label>
                <input
                  type="text"
                  value={data.date || ""}
                  onChange={(e) => onUpdate("date", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={data.location || ""}
                  onChange={(e) => onUpdate("location", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Theme Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={data.themeColor || "#ff7d45"}
                    onChange={(e) => onUpdate("themeColor", e.target.value)}
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={data.themeColor || ""}
                    onChange={(e) => onUpdate("themeColor", e.target.value)}
                    className="flex-1 px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Story/Description
                </label>
                <textarea
                  value={data.story || ""}
                  onChange={(e) => onUpdate("story", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none resize-none"
                />
              </div>
            </div>
          )}

          {/* End Section */}
          {activeSection === "end" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Detail Image
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  value={data.detailImg || ""}
                  onChange={(e) => onUpdate("detailImg", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
            </div>
          )}

          {/* Footer Section */}
          {activeSection === "footer" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Footer
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Names (auto-synced)
                </label>
                <input
                  type="text"
                  value={data.names || ""}
                  onChange={(e) => onUpdate("names", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date (auto-synced)
                </label>
                <input
                  type="text"
                  value={data.date || ""}
                  onChange={(e) => onUpdate("date", e.target.value)}
                  className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Export Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button
            onClick={() => {
              console.log("Exported Config:", JSON.stringify(data, null, 2));
              navigator.clipboard.writeText(JSON.stringify(data, null, 2));
              alert("Config copied to clipboard!");
            }}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Export Config
          </button>
        </div>
      </div>
    </>
  );
};

// ============ IMAGE EDIT MODAL ============
interface ImageModalProps {
  isOpen: boolean;
  currentUrl: string;
  onClose: () => void;
  onSave: (url: string) => void;
  title: string;
}

export const ImageEditModal = ({
  isOpen,
  currentUrl,
  onClose,
  onSave,
  title,
}: ImageModalProps) => {
  const [url, setUrl] = useState(currentUrl);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
        <h3 className="text-lg font-semibold mb-4 text-black">{title}</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none"
              placeholder="https://..."
            />
          </div>
          {url && (
            <div className="border rounded-lg overflow-hidden">
              <img
                src={url}
                alt="Preview"
                className="w-full h-40 object-cover"
              />
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 cursor-pointer border-black text-black"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(url);
                onClose();
              }}
              className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ ORIGINAL COMPONENTS (UPDATED) ============

// 1. Navigation: Simple centered links
export const Nav = ({ links }: { links: string[] }) => (
  <nav className="py-4 bg-white border-b text-xl font-semibold uppercase tracking-widest flex justify-center gap-6 text-gray-600">
    {links.map((link: string, i: number) => (
      <a key={i} href={`#${link}`}>
        {link}
      </a>
    ))}
  </nav>
);

// 2. Hero: Big background image with names (with edit button)
export const Hero = ({
  names,
  imageUrl,
  onEditImage,
}: {
  names: string;
  imageUrl: string;
  onEditImage?: () => void;
}) => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden w-full group">
    <img
      src={imageUrl}
      className="absolute inset-0 w-full h-full object-cover"
      alt="Hero"
    />
    <div className="absolute inset-0 bg-black/10" />
    {onEditImage && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <EditImageButton onClick={onEditImage} />
      </div>
    )}
    <h1 className="relative text-white text-5xl md:text-7xl font-light tracking-widest uppercase">
      {names}
    </h1>
  </div>
);

// 3. Middle: The Announcement Section (The Orange Block)
export const MiddleSection = ({
  eventDate,
  location,
  description,
  bgColor = "#ff7d45",
}: {
  eventDate: string;
  location: string;
  description: string;
  bgColor: string;
}) => (
  <div
    style={{ backgroundColor: bgColor }}
    className="py-20 px-10 text-center text-white flex flex-col justify-center items-center gap-6 w-full h-[90vh]"
  >
    <div className="w-24 h-12 border-b border-white opacity-50 mb-4" />
    <h2 className="text-2xl tracking-widest uppercase">
      We are getting married!
    </h2>
    <h3 className="text-5xl font-serif italic">{eventDate}</h3>
    <p className="tracking-widest uppercase text-sm">{location}</p>
    <div className="max-w-2xl mt-8 text-lg leading-relaxed opacity-90">
      {description}
    </div>
  </div>
);

// 4. End Section: Focus Image (with edit button)
export const EndSection = ({
  imageUrl,
  onEditImage,
}: {
  imageUrl: string;
  onEditImage?: () => void;
}) => (
  <div className="h-[60vh] w-full relative group">
    <img src={imageUrl} className="w-full h-full object-cover" alt="Detail" />
    {onEditImage && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <EditImageButton onClick={onEditImage} />
      </div>
    )}
  </div>
);

// 5. Footer: Simple credits
export const Footer = ({ names, date }: { names: string; date?: string }) => (
  <footer className="py-8 px-10 bg-white flex justify-center gap-8 items-center text-[10px] text-gray-500 uppercase tracking-tighter w-full">
    <div>
      <p className="text-base">{names}</p>
      <p className="text-xs text-center">{date}</p>
    </div>
    <div className="text-base">
      <p>Made with love</p>
    </div>
  </footer>
);
