"use client";
import React, { useState } from "react";

// ============ MAX WIDTH WRAPPER ============
export const MaxWidthWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`w-full ${className}`}>{children}</div>;

// ============ EDIT BUTTON COMPONENT ============
const EditImageButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-white text-gray-700 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg shadow-lg flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105 cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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
    <span className="text-xs sm:text-sm font-medium">Edit</span>
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
  const [editingPhotoIndex, setEditingPhotoIndex] = useState<number | null>(
    null,
  );
  const [editingBlogIndex, setEditingBlogIndex] = useState<number | null>(null);
  const [editingGuestIndex, setEditingGuestIndex] = useState<number | null>(
    null,
  );

  const sections = [
    { id: "nav", label: "Navigation" },
    { id: "hero", label: "Hero" },
    { id: "middle", label: "Announce" },
    { id: "photos", label: "Photos" },
    { id: "blog", label: "Blog" },
    { id: "guests", label: "Guests" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-2 sm:top-4 z-50 bg-gray-900 text-white p-2.5 sm:p-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all cursor-pointer ${isOpen ? "left-[calc(100%-3rem)] sm:left-[324px]" : "left-2 sm:left-4"}`}
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
        className={`fixed top-0 left-0 h-full w-full sm:w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">Template Editor</h2>
          <p className="text-sm text-gray-500">Edit your wedding site</p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-1.5 p-3 border-b bg-gray-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                setActiveSection(
                  activeSection === section.id ? null : section.id,
                )
              }
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
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
        <div className="p-4 overflow-y-auto h-[calc(100vh-220px)] pb-20">
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

          {/* Photos Section */}
          {activeSection === "photos" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-semibold text-gray-700">Photo Gallery</h3>
                <button
                  onClick={() => {
                    const newPhotos = [
                      ...(data.photos || []),
                      { url: "", caption: "New Photo" },
                    ];
                    onUpdate("photos", newPhotos);
                    setEditingPhotoIndex(newPhotos.length - 1);
                  }}
                  className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700"
                >
                  + Add
                </button>
              </div>

              {data.photos?.map((photo: any, i: number) => (
                <div key={i} className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Photo {i + 1}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setEditingPhotoIndex(
                            editingPhotoIndex === i ? null : i,
                          )
                        }
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        {editingPhotoIndex === i ? "Close" : "Edit"}
                      </button>
                      <button
                        onClick={() => {
                          const newPhotos = data.photos.filter(
                            (_: any, idx: number) => idx !== i,
                          );
                          onUpdate("photos", newPhotos);
                        }}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {editingPhotoIndex === i && (
                    <div className="space-y-2 mt-2">
                      <input
                        type="text"
                        value={photo.url}
                        onChange={(e) => {
                          const newPhotos = [...data.photos];
                          newPhotos[i] = {
                            ...newPhotos[i],
                            url: e.target.value,
                          };
                          onUpdate("photos", newPhotos);
                        }}
                        placeholder="Image URL"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      <input
                        type="text"
                        value={photo.caption}
                        onChange={(e) => {
                          const newPhotos = [...data.photos];
                          newPhotos[i] = {
                            ...newPhotos[i],
                            caption: e.target.value,
                          };
                          onUpdate("photos", newPhotos);
                        }}
                        placeholder="Caption"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      {photo.url && (
                        <img
                          src={photo.url}
                          alt="Preview"
                          className="w-full h-20 object-cover rounded"
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Blog Section */}
          {activeSection === "blog" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-semibold text-gray-700">Blog Posts</h3>
                <button
                  onClick={() => {
                    const newPosts = [
                      ...(data.blogPosts || []),
                      {
                        title: "New Post",
                        date: "Date",
                        content: "",
                        image: "",
                      },
                    ];
                    onUpdate("blogPosts", newPosts);
                    setEditingBlogIndex(newPosts.length - 1);
                  }}
                  className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700"
                >
                  + Add
                </button>
              </div>

              {data.blogPosts?.map((post: any, i: number) => (
                <div key={i} className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">
                      {post.title}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setEditingBlogIndex(editingBlogIndex === i ? null : i)
                        }
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        {editingBlogIndex === i ? "Close" : "Edit"}
                      </button>
                      <button
                        onClick={() => {
                          const newPosts = data.blogPosts.filter(
                            (_: any, idx: number) => idx !== i,
                          );
                          onUpdate("blogPosts", newPosts);
                        }}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {editingBlogIndex === i && (
                    <div className="space-y-2 mt-2">
                      <input
                        type="text"
                        value={post.title}
                        onChange={(e) => {
                          const newPosts = [...data.blogPosts];
                          newPosts[i] = {
                            ...newPosts[i],
                            title: e.target.value,
                          };
                          onUpdate("blogPosts", newPosts);
                        }}
                        placeholder="Title"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      <input
                        type="text"
                        value={post.date}
                        onChange={(e) => {
                          const newPosts = [...data.blogPosts];
                          newPosts[i] = {
                            ...newPosts[i],
                            date: e.target.value,
                          };
                          onUpdate("blogPosts", newPosts);
                        }}
                        placeholder="Date"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      <textarea
                        value={post.content}
                        onChange={(e) => {
                          const newPosts = [...data.blogPosts];
                          newPosts[i] = {
                            ...newPosts[i],
                            content: e.target.value,
                          };
                          onUpdate("blogPosts", newPosts);
                        }}
                        placeholder="Content"
                        rows={3}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none resize-none"
                      />
                      <input
                        type="text"
                        value={post.image}
                        onChange={(e) => {
                          const newPosts = [...data.blogPosts];
                          newPosts[i] = {
                            ...newPosts[i],
                            image: e.target.value,
                          };
                          onUpdate("blogPosts", newPosts);
                        }}
                        placeholder="Image URL"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Guests Section */}
          {activeSection === "guests" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-semibold text-gray-700">Guest List</h3>
                <button
                  onClick={() => {
                    const newGuests = [
                      ...(data.guests || []),
                      {
                        name: "New Guest",
                        relation: "Guest",
                        status: "pending",
                      },
                    ];
                    onUpdate("guests", newGuests);
                    setEditingGuestIndex(newGuests.length - 1);
                  }}
                  className="text-xs bg-gray-900 text-white px-2 py-1 rounded hover:bg-gray-700"
                >
                  + Add
                </button>
              </div>

              {data.guests?.map((guest: any, i: number) => (
                <div key={i} className="border rounded-lg p-3 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                        style={{
                          backgroundColor: data.themeColor || "#ff7d45",
                        }}
                      >
                        {guest.name?.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
                        {guest.name}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setEditingGuestIndex(
                            editingGuestIndex === i ? null : i,
                          )
                        }
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        {editingGuestIndex === i ? "Close" : "Edit"}
                      </button>
                      <button
                        onClick={() => {
                          const newGuests = data.guests.filter(
                            (_: any, idx: number) => idx !== i,
                          );
                          onUpdate("guests", newGuests);
                        }}
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {editingGuestIndex === i && (
                    <div className="space-y-2 mt-2">
                      <input
                        type="text"
                        value={guest.name}
                        onChange={(e) => {
                          const newGuests = [...data.guests];
                          newGuests[i] = {
                            ...newGuests[i],
                            name: e.target.value,
                          };
                          onUpdate("guests", newGuests);
                        }}
                        placeholder="Name"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      <input
                        type="text"
                        value={guest.relation}
                        onChange={(e) => {
                          const newGuests = [...data.guests];
                          newGuests[i] = {
                            ...newGuests[i],
                            relation: e.target.value,
                          };
                          onUpdate("guests", newGuests);
                        }}
                        placeholder="Relation"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      />
                      <select
                        value={guest.status}
                        onChange={(e) => {
                          const newGuests = [...data.guests];
                          newGuests[i] = {
                            ...newGuests[i],
                            status: e.target.value,
                          };
                          onUpdate("guests", newGuests);
                        }}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="pending">Pending</option>
                        <option value="declined">Declined</option>
                      </select>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 border-b pb-2">
                Contact Info
              </h3>

              {/* Bride Info */}
              <div className="border rounded-lg p-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">Bride</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.contact?.bride?.name || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        bride: { ...data.contact?.bride, name: e.target.value },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Name"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="text"
                    value={data.contact?.bride?.phone || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        bride: {
                          ...data.contact?.bride,
                          phone: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Phone"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="email"
                    value={data.contact?.bride?.email || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        bride: {
                          ...data.contact?.bride,
                          email: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Email"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Groom Info */}
              <div className="border rounded-lg p-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">Groom</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.contact?.groom?.name || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        groom: { ...data.contact?.groom, name: e.target.value },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Name"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="text"
                    value={data.contact?.groom?.phone || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        groom: {
                          ...data.contact?.groom,
                          phone: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Phone"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="email"
                    value={data.contact?.groom?.email || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        groom: {
                          ...data.contact?.groom,
                          email: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Email"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Venue Info */}
              <div className="border rounded-lg p-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">Venue</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.contact?.venue || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        venue: e.target.value,
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Venue Name"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="text"
                    value={data.contact?.venueAddress || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        venueAddress: e.target.value,
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Address"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="text"
                    value={data.contact?.venueMapUrl || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        venueMapUrl: e.target.value,
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Google Maps URL"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Wedding Planner */}
              <div className="border rounded-lg p-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Wedding Planner (Optional)
                </p>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={data.contact?.weddingPlanner?.name || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        weddingPlanner: {
                          ...data.contact?.weddingPlanner,
                          name: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Planner Name"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                  <input
                    type="text"
                    value={data.contact?.weddingPlanner?.phone || ""}
                    onChange={(e) => {
                      const newContact = {
                        ...data.contact,
                        weddingPlanner: {
                          ...data.contact?.weddingPlanner,
                          phone: e.target.value,
                        },
                      };
                      onUpdate("contact", newContact);
                    }}
                    placeholder="Planner Phone"
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 text-black rounded focus:ring-1 focus:ring-gray-400 outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Share Link Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button
            onClick={async () => {
              const url = window.location.href;

              // Try native share API first (mobile/supported browsers)
              if (navigator.share) {
                try {
                  await navigator.share({
                    title: data.names || "Wedding Invitation",
                    text: `You're invited to ${data.names}'s wedding!`,
                    url: url,
                  });
                } catch (err) {
                  // User cancelled or error, fall back to clipboard
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard!");
                }
              } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(url);
                alert("Link copied to clipboard!");
              }
            }}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share Link
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl max-w-lg w-full p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 text-black">
          {title}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-2 border border-black text-black rounded-lg focus:ring-2 focus:ring-gray-800 outline-none text-base"
              placeholder="https://..."
            />
          </div>
          {url && (
            <div className="border rounded-lg overflow-hidden">
              <img
                src={url}
                alt="Preview"
                className="w-full h-32 sm:h-40 object-cover"
              />
            </div>
          )}
          <div className="flex gap-3 pb-4 sm:pb-0">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 sm:py-2 border rounded-lg hover:bg-gray-50 cursor-pointer border-black text-black"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(url);
                onClose();
              }}
              className="flex-1 px-4 py-2.5 sm:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 cursor-pointer"
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
  <nav className="py-3 sm:py-4 bg-white border-b text-xs sm:text-base md:text-xl font-semibold uppercase tracking-wider sm:tracking-widest flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-600 px-4 max-w-9xl mx-auto">
    {links.map((link: string, i: number) => (
      <a
        key={i}
        href={`#${link}`}
        className="hover:text-gray-900 transition-colors"
      >
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
  <div className="relative h-[70vh] sm:h-[85vh] md:h-screen flex items-center justify-center overflow-hidden w-full group">
    <div className="absolute inset-0 max-w-9xl mx-auto">
      <img src={imageUrl} className="w-full h-full object-cover" alt="Hero" />
    </div>
    <div className="absolute inset-0 bg-black/10" />
    {onEditImage && (
      <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
        <EditImageButton onClick={onEditImage} />
      </div>
    )}
    <h1 className="relative text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-wider sm:tracking-widest uppercase text-center px-4">
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
    className="py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-10 text-center text-white flex flex-col justify-center items-center gap-4 sm:gap-6 w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]"
  >
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="w-16 sm:w-24 h-8 sm:h-12 border-b border-white opacity-50 mb-3 sm:mb-4" />
      <h2 className="text-base sm:text-xl md:text-2xl tracking-widest uppercase">
        We are getting married!
      </h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mt-2 sm:mt-4">
        {eventDate}
      </h3>
      <p className="tracking-wider sm:tracking-widest uppercase text-xs sm:text-sm mt-2 sm:mt-4">
        {location}
      </p>
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed opacity-90 px-2">
        {description}
      </div>
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
  <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] w-full  mx-auto relative group">
    <img src={imageUrl} className="w-full h-full object-cover" alt="Detail" />
    {onEditImage && (
      <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
        <EditImageButton onClick={onEditImage} />
      </div>
    )}
  </div>
);

// 5. Footer: Simple credits
export const Footer = ({ names, date }: { names: string; date?: string }) => (
  <footer className="py-6 sm:py-8 px-4 sm:px-10 bg-white flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 items-center text-[10px] text-gray-500 uppercase tracking-tighter w-full mx-auto">
    <div className="text-center">
      <p className="text-sm sm:text-base">{names}</p>
      <p className="text-[10px] sm:text-xs">{date}</p>
    </div>
    <div className="text-sm sm:text-base">
      <p>Made with love</p>
    </div>
  </footer>
);

// ============ PHOTO GALLERY SECTION ============
interface Photo {
  url: string;
  caption: string;
}

export const PhotoGallery = ({
  photos,
  themeColor,
}: {
  photos: Photo[];
  themeColor: string;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section
      id="Photos"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-800">
            Our Memories
          </h2>
          <div
            className="w-16 sm:w-24 h-0.5 mx-auto mt-4"
            style={{ backgroundColor: themeColor }}
          />
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Moments we cherish forever
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 sm:h-80 md:h-96" : "h-32 sm:h-40 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <p className="text-white p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          </button>
          <div className="max-w-4xl max-h-[90vh]">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

// ============ BLOG SECTION ============
interface BlogPost {
  title: string;
  date: string;
  content: string;
  image: string;
}

export const BlogSection = ({
  posts,
  themeColor,
}: {
  posts: BlogPost[];
  themeColor: string;
}) => (
  <section id="Blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-white">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-800">
          Our Story
        </h2>
        <div
          className="w-16 sm:w-24 h-0.5 mx-auto mt-4"
          style={{ backgroundColor: themeColor }}
        />
        <p className="mt-4 text-gray-500 text-sm sm:text-base">
          The chapters of our love
        </p>
      </div>

      {/* Blog Posts */}
      <div className="space-y-8 sm:space-y-12">
        {posts.map((post, index) => (
          <article
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 sm:gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p
                className="text-xs sm:text-sm uppercase tracking-wider mb-2"
                style={{ color: themeColor }}
              >
                {post.date}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gray-800 mb-3 sm:mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {post.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ============ GUEST LIST SECTION ============
interface Guest {
  name: string;
  relation: string;
  status: "confirmed" | "pending" | "declined";
}

export const GuestListSection = ({
  guests,
  themeColor,
}: {
  guests: Guest[];
  themeColor: string;
}) => {
  const confirmedCount = guests.filter((g) => g.status === "confirmed").length;
  const pendingCount = guests.filter((g) => g.status === "pending").length;

  const statusColors = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    declined: "bg-red-100 text-red-700",
  };

  const statusLabels = {
    confirmed: "Attending",
    pending: "Awaiting",
    declined: "Unable",
  };

  return (
    <section
      id="Guests"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-800">
            Guest List
          </h2>
          <div
            className="w-16 sm:w-24 h-0.5 mx-auto mt-4"
            style={{ backgroundColor: themeColor }}
          />
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Those who make our day special
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
          <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-sm">
            <p
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: themeColor }}
            >
              {confirmedCount}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Confirmed
            </p>
          </div>
          <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-sm">
            <p className="text-2xl sm:text-3xl font-bold text-yellow-600">
              {pendingCount}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Pending
            </p>
          </div>
          <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-sm">
            <p className="text-2xl sm:text-3xl font-bold text-gray-600">
              {guests.length}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Total
            </p>
          </div>
        </div>

        {/* Guest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-medium text-sm sm:text-base"
                  style={{ backgroundColor: themeColor }}
                >
                  {guest.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {guest.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {guest.relation}
                  </p>
                </div>
              </div>
              <span
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${statusColors[guest.status]}`}
              >
                {statusLabels[guest.status]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACT SECTION ============
interface ContactInfo {
  bride: { name: string; phone: string; email: string };
  groom: { name: string; phone: string; email: string };
  venue: string;
  venueAddress: string;
  venueMapUrl: string;
  weddingPlanner?: { name: string; phone: string };
}

export const ContactSection = ({
  contact,
  themeColor,
}: {
  contact: ContactInfo;
  themeColor: string;
}) => (
  <section
    id="Contact"
    className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-white"
  >
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-800">
          Contact Us
        </h2>
        <div
          className="w-16 sm:w-24 h-0.5 mx-auto mt-4"
          style={{ backgroundColor: themeColor }}
        />
        <p className="mt-4 text-gray-500 text-sm sm:text-base">
          We'd love to hear from you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Bride & Groom Cards */}
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8">
          <h3
            className="text-lg sm:text-xl font-serif italic mb-4 sm:mb-6"
            style={{ color: themeColor }}
          >
            Reach the Couple
          </h3>

          {/* Bride */}
          <div className="mb-5 sm:mb-6">
            <p className="font-medium text-gray-800 mb-2">
              {contact.bride.name}
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <a
                href={`tel:${contact.bride.phone}`}
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contact.bride.phone}
              </a>
              <a
                href={`mailto:${contact.bride.email}`}
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contact.bride.email}
              </a>
            </div>
          </div>

          {/* Groom */}
          <div>
            <p className="font-medium text-gray-800 mb-2">
              {contact.groom.name}
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <a
                href={`tel:${contact.groom.phone}`}
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contact.groom.phone}
              </a>
              <a
                href={`mailto:${contact.groom.email}`}
                className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contact.groom.email}
              </a>
            </div>
          </div>
        </div>

        {/* Venue Card */}
        <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8">
          <h3
            className="text-lg sm:text-xl font-serif italic mb-4 sm:mb-6"
            style={{ color: themeColor }}
          >
            Venue Details
          </h3>

          <div className="mb-5 sm:mb-6">
            <p className="font-medium text-gray-800 mb-2">{contact.venue}</p>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              {contact.venueAddress}
            </p>
            <a
              href={contact.venueMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm sm:text-base font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              View on Maps
            </a>
          </div>

          {contact.weddingPlanner && (
            <div className="pt-4 sm:pt-5 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-2">
                Wedding Planner
              </p>
              <p className="font-medium text-gray-800">
                {contact.weddingPlanner.name}
              </p>
              <a
                href={`tel:${contact.weddingPlanner.phone}`}
                className="text-gray-600 hover:text-gray-800 text-sm sm:text-base"
              >
                {contact.weddingPlanner.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);
